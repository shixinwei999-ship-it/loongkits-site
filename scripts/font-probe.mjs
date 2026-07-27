import { chromium } from "playwright";

const baseUrl = "http://127.0.0.1:3000";
const routes = [
  { name: "home", path: "/" },
  { name: "free", path: "/free" },
  { name: "families", path: "/families" },
  { name: "teachers", path: "/teachers" },
  { name: "about", path: "/about" },
  { name: "lesson-1-1", path: "/learn/level/1/lesson/1" },
  { name: "lesson-5-1", path: "/learn/level/5/lesson/1" },
];

const browser = await chromium.launch();

try {
  for (const route of routes) {
    const page = await browser.newPage();
    await page.goto(new URL(route.path, baseUrl).toString(), { waitUntil: "networkidle" });
    await page.waitForTimeout(800);

    const result = await page.evaluate(() => {
      const out = {};
      const body = document.body;
      const bs = getComputedStyle(body);
      out.bodyFontFamily = bs.fontFamily;
      out.bodyFontFamilyRaw = bs.getPropertyValue("font-family");

      // Are the next/font variables defined on body?
      out.fontNunitoBase = getComputedStyle(body).getPropertyValue("--font-nunito-base").trim();
      out.fontInterBase = getComputedStyle(body).getPropertyValue("--font-inter-base").trim();
      out.fontNunito = getComputedStyle(body).getPropertyValue("--font-nunito").trim();
      out.fontInter = getComputedStyle(body).getPropertyValue("--font-inter").trim();

      // The theme-level vars live on :root (Tailwind @theme)
      const root = document.documentElement;
      out.rootFontNunito = getComputedStyle(root).getPropertyValue("--font-nunito").trim();
      out.rootFontInter = getComputedStyle(root).getPropertyValue("--font-inter").trim();
      out.rootFontSans = getComputedStyle(root).getPropertyValue("--font-sans").trim();

      // h1 computed font-family
      const h1 = document.querySelector("h1");
      out.h1FontFamily = h1 ? getComputedStyle(h1).fontFamily : "(no h1)";
      out.h1ClassName = h1 ? h1.className : "";

      // Is Nunito actually loaded as a font face?
      out.nunitoLoaded = document.fonts.check('700 16px "Nunito"');
      out.interLoaded = document.fonts.check('400 16px "Inter"');

      // Enumerate declared font faces
      out.declaredFonts = [];
      document.fonts.forEach((f) => out.declaredFonts.push(`${f.family} ${f.weight} ${f.status}`));

      // Which font actually renders for h1? Use a canvas measure trick is unreliable;
      // instead check document.fonts.values for Nunito status
      return out;
    });

    console.log(`\n=== ${route.name} (${route.path}) ===`);
    console.log(JSON.stringify(result, null, 2));
    await page.close();
  }
} finally {
  await browser.close();
}
