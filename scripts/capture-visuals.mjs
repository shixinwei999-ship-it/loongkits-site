import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.VISUAL_BASE_URL ?? "http://127.0.0.1:3000";
const outputDir = path.resolve("artifacts/visual");
const viewports = [
  { name: "desktop", width: 1440, height: 1050, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch();

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.isMobile,
      deviceScaleFactor: 1,
    });

    await page.goto(baseUrl, { waitUntil: "networkidle" });
    const heroImage = page.getByAltText(/Hong and Qing, the Loong Kits dragon mascots/i);
    const logoImage = page.getByAltText(/Loong Kits Hong and Qing dragon logo/i);
    await heroImage.waitFor();
    await logoImage.waitFor();

    const metrics = await page.evaluate(() => {
      const hero = document.querySelector('img[alt="Hong and Qing, the Loong Kits dragon mascots"]');
      const logo = document.querySelector('img[alt="Loong Kits Hong and Qing dragon logo"]');

      if (!(hero instanceof HTMLImageElement) || !(logo instanceof HTMLImageElement)) {
        throw new Error("Expected dragon artwork was not rendered.");
      }

      return {
        hero: {
          complete: hero.complete,
          naturalWidth: hero.naturalWidth,
          naturalHeight: hero.naturalHeight,
          rect: hero.getBoundingClientRect().toJSON(),
        },
        logo: {
          complete: logo.complete,
          naturalWidth: logo.naturalWidth,
          naturalHeight: logo.naturalHeight,
          rect: logo.getBoundingClientRect().toJSON(),
        },
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
      };
    });

    const hiddenContent = await page.locator('[class*="opacity-0"]').count();
    if (!metrics.hero.complete || metrics.hero.naturalWidth === 0 || metrics.horizontalOverflow || hiddenContent > 0) {
      throw new Error(`${viewport.name} rendering check failed: ${JSON.stringify({ ...metrics, hiddenContent })}`);
    }

    await page.screenshot({ path: path.join(outputDir, `${viewport.name}.png`), fullPage: true });
    console.log(`${viewport.name}: ${JSON.stringify(metrics)}`);
    await page.close();
  }
} finally {
  await browser.close();
}
