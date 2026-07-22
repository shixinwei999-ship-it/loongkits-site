import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.VISUAL_BASE_URL ?? "http://127.0.0.1:3000";
const outputDir = path.resolve("artifacts/visual");
const viewports = [
  { name: "desktop", width: 1440, height: 1050, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

const zodiacA4 = "/resources/zodiac-animals/v1/zodiac-animals-starter-a4.pdf";
const zodiacLetter = "/resources/zodiac-animals/v1/zodiac-animals-starter-letter.pdf";
const festivalA4 = "/resources/festival-detective/v1/festival-detective-a4.pdf";
const festivalLetter = "/resources/festival-detective/v1/festival-detective-letter.pdf";
const motionA4 = "/resources/culture-in-motion/v1/culture-in-motion-a4.pdf";
const motionLetter = "/resources/culture-in-motion/v1/culture-in-motion-letter.pdf";
const curatorA4 = "/resources/culture-curator/v1/culture-curator-a4.pdf";
const curatorLetter = "/resources/culture-curator/v1/culture-curator-letter.pdf";

const pages = [
  {
    name: "home",
    path: "/",
    expectedImages: ["hong-qing-hero.webp", "hong-qing-logo.webp", "prek.webp", "g15.webp", "g68.webp", "g912.webp"],
  },
  {
    name: "free",
    path: "/free",
    expectedImages: ["preview-cover.webp"],
    downloads: [zodiacA4, zodiacLetter],
  },
  {
    name: "zodiac-animals",
    path: "/free/zodiac-animals",
    expectedImages: ["preview-cover.webp", "preview-vocabulary.webp"],
    downloads: [zodiacA4, zodiacLetter],
  },
  {
    name: "learn-3-6",
    path: "/learn/ages-3-6",
    expectedImages: ["prek.webp", "preview-cover.webp", "preview-vocabulary.webp"],
    downloads: [zodiacA4, zodiacLetter],
  },
  {
    name: "learn-6-11",
    path: "/learn/ages-6-11",
    expectedImages: ["g15.webp", "preview-cover.webp", "preview-activity.webp"],
    downloads: [festivalA4, festivalLetter],
  },
  {
    name: "learn-11-14",
    path: "/learn/ages-11-14",
    expectedImages: ["g68.webp", "preview-cover.webp", "preview-activity.webp"],
    downloads: [motionA4, motionLetter],
  },
  {
    name: "learn-14-18",
    path: "/learn/ages-14-18",
    expectedImages: ["g912.webp", "preview-cover.webp", "preview-activity.webp"],
    downloads: [curatorA4, curatorLetter],
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

      // 1. 等所有期望图片进入 DOM。
      for (const imageName of route.expectedImages) {
        await page.locator(`img[src*="${imageName}"]`).first().waitFor();
      }

      // 2. 先滚动整页，触发 next/image 的懒加载解码，再回到顶部。
      const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < pageHeight; y += Math.max(400, viewport.height - 100)) {
        await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
        await page.waitForTimeout(80);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);

      // 2b. 滚动已触发所有懒加载请求；这里轮询等待它们全部解码完成，
      //     既让断言可靠，也保证整页截图拍到完整图像。
      await page.waitForFunction(
        (expectedImages) =>
          expectedImages.every((imageName) => {
            const image = document.querySelector(`img[src*="${imageName}"]`);
            return image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0;
          }),
        route.expectedImages,
        { timeout: 15000 },
      );

      // 3. 滚动之后再断言：图片已解码、无横向溢出、无隐藏内容。
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

      // 4. 校验该路由声明的 PDF 下载真实可用。
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
      console.log(`${route.name}/${viewport.name}: images=${metrics.images.length} overflow=${metrics.horizontalOverflow}`);
      await page.close();
    }
  }
} finally {
  await browser.close();
}
