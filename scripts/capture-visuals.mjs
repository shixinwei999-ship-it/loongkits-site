import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.VISUAL_BASE_URL ?? "http://127.0.0.1:3000";
const outputDir = path.resolve("artifacts/visual");
const viewports = [
  { name: "desktop", width: 1440, height: 1050, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];
const pages = [
  {
    name: "home",
    path: "/",
    expectedImages: ["hong-qing-hero.webp", "hong-qing-logo.webp"],
  },
  {
    name: "free",
    path: "/free",
    expectedImages: ["preview-cover.webp"],
    downloads: [
      "/resources/zodiac-animals/v1/zodiac-animals-starter-a4.pdf",
      "/resources/zodiac-animals/v1/zodiac-animals-starter-letter.pdf",
    ],
  },
  {
    name: "zodiac-animals",
    path: "/free/zodiac-animals",
    expectedImages: ["preview-cover.webp", "preview-vocabulary.webp"],
    downloads: [
      "/resources/zodiac-animals/v1/zodiac-animals-starter-a4.pdf",
      "/resources/zodiac-animals/v1/zodiac-animals-starter-letter.pdf",
    ],
  },
];

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch();

try {
  for (const route of pages) {
    for (const viewport of viewports) {
      const page = await browser.newPage({
        viewport: { width: viewport.width, height: viewport.height },
        isMobile: viewport.isMobile,
        deviceScaleFactor: 1,
      });

      await page.goto(new URL(route.path, baseUrl).toString(), { waitUntil: "networkidle" });

      for (const imageName of route.expectedImages) {
        await page.locator(`img[src*="${imageName}"]`).first().waitFor();
      }

      const metrics = await page.evaluate((expectedImages) => {
        const images = expectedImages.map((imageName) => {
          const image = document.querySelector(`img[src*="${imageName}"]`);
          if (!(image instanceof HTMLImageElement)) {
            throw new Error(`Expected image was not rendered: ${imageName}`);
          }
          return {
            imageName,
            complete: image.complete,
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight,
            rect: image.getBoundingClientRect().toJSON(),
          };
        });

        return {
          images,
          horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
          hiddenContent: document.querySelectorAll('[class*="opacity-0"]').length,
        };
      }, route.expectedImages);

      if (
        metrics.horizontalOverflow ||
        metrics.hiddenContent > 0 ||
        metrics.images.some((image) => !image.complete || image.naturalWidth === 0)
      ) {
        throw new Error(`${route.name}/${viewport.name} rendering check failed: ${JSON.stringify(metrics)}`);
      }

      if (route.downloads) {
        for (const href of route.downloads) {
          const response = await page.request.get(new URL(href, baseUrl).toString());
          const contentType = response.headers()["content-type"] ?? "";
          if (!response.ok() || !contentType.includes("application/pdf") || (await response.body()).length < 1000) {
            throw new Error(`${route.name} download check failed for ${href}: ${response.status()} ${contentType}`);
          }
        }
      }

      await page.screenshot({ path: path.join(outputDir, `${route.name}-${viewport.name}.png`), fullPage: true });
      console.log(`${route.name}/${viewport.name}: ${JSON.stringify(metrics)}`);
      await page.close();
    }
  }
} finally {
  await browser.close();
}
