import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("http://127.0.0.1:3000/families", { waitUntil: "networkidle" });
await page.waitForTimeout(500);

const before = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  return {
    h1Font: getComputedStyle(h1).fontFamily.slice(0, 30),
    fontNunito: getComputedStyle(document.body).getPropertyValue("--font-nunito").trim(),
    nunitoLoaded: document.fonts.check('700 16px "Nunito"'),
  };
});

// Fix candidate A: re-declare --font-nunito/--font-inter on <body> (where --font-*-base IS in scope)
await page.addStyleTag({ content: `
  body {
    --font-nunito: var(--font-nunito-base), "Nunito", "Noto Sans SC", sans-serif;
    --font-inter: var(--font-inter-base), "Inter", "Noto Sans SC", sans-serif;
  }
` });
await page.evaluate(() => document.fonts.load('700 16px "Nunito"'));
await page.waitForTimeout(800);

const afterA = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  return {
    h1Font: getComputedStyle(h1).fontFamily.slice(0, 40),
    fontNunito: getComputedStyle(document.body).getPropertyValue("--font-nunito").trim(),
    nunitoLoaded: document.fonts.check('700 16px "Nunito"'),
  };
});

await browser.close();
console.log("BEFORE:           ", JSON.stringify(before));
console.log("AFTER body-scope:  ", JSON.stringify(afterA));
console.log("");
console.log("If afterA.h1Font starts with 'Nunito' and nunitoLoaded=true, the fix is confirmed:");
console.log("  -> move the --font-nunito/--font-inter var() wiring OUT of @theme (:root)");
console.log("     and INTO a body (or html) scope rule, OR apply next/font vars to <html>.");
