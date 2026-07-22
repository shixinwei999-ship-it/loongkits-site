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
    expectedImages: ["golden-dragon.webp", "prek-greet.webp", "g15-reunion.webp", "g68-region.webp", "g912-curate.webp"],
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
    expectedImages: ["prek.webp", "prek-zodiac.webp", "prek-red.webp", "prek-greet.webp", "preview-cover.webp"],
    downloads: [zodiacA4, zodiacLetter],
  },
  {
    name: "learn-6-11",
    path: "/learn/ages-6-11",
    expectedImages: ["g15.webp", "g15-sequence.webp", "g15-riddle.webp", "g15-reunion.webp", "preview-cover.webp"],
    downloads: [festivalA4, festivalLetter],
  },
  {
    name: "learn-11-14",
    path: "/learn/ages-11-14",
    expectedImages: ["g68.webp", "g68-region.webp", "g68-cycle.webp", "g68-silk.webp", "preview-cover.webp"],
    downloads: [motionA4, motionLetter],
  },
  {
    name: "learn-14-18",
    path: "/learn/ages-14-18",
    expectedImages: ["g912.webp", "g912-object.webp", "g912-translate.webp", "g912-curate.webp", "preview-cover.webp"],
    downloads: [curatorA4, curatorLetter],
  },
  {
    name: "chinese-class",
    path: "/learn/chinese",
    expectedImages: [],
  },
  {
    name: "levels",
    path: "/learn/levels",
    expectedImages: [],
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

      // 0. 注入截图终态：让所有 data-reveal 渐显元素立即到完成态，
      //    全页截图不再依赖动画时序；真实访问者不带此类，照常看到动效。
      await page.addStyleTag({
        content:
          ".shot-final [data-reveal]{opacity:1!important;transform:none!important;transition:none!important}" +
          // 终态下停掉所有持续动画（首屏 kenburns/float/bounce 等），否则元素永远
          // “不稳定”，scrollIntoViewIfNeeded 会等到超时；截图本就该是静止成品。
          ".shot-final *,.shot-final *::before,.shot-final *::after{animation:none!important}" +
          // 全页截图保真：fixed 导航在整页截图里会浮在视口中部、盖住 hero。
          // 终态下改回文档顶部绝对定位，截图即真实首屏；真实访问者不带此类。
          ".shot-final nav.fixed{position:absolute!important;top:0!important}",
      });
      await page.evaluate(() => document.documentElement.classList.add("shot-final"));

      // 1. 等所有期望图片进入 DOM。
      for (const imageName of route.expectedImages) {
        await page.locator(`img[src*="${imageName}"]`).first().waitFor();
      }

      // 1b. 对每张期望图精确滚入视口，确保懒加载的 IntersectionObserver 必触发，
      //     不依赖盲滚步长（快速盲滚会漏触发，导致图片永远不发起请求）。
      for (const imageName of route.expectedImages) {
        await page.locator(`img[src*="${imageName}"]`).first().scrollIntoViewIfNeeded();
        await page.waitForTimeout(120);
      }

      // 2. 再整页滚动一遍，触发其余懒加载元素的解码，然后回到顶部。
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
          // 只查渐显容器是否真的可见（按计算 opacity，而非 class 名）：
          // 注入 .shot-final 后这些容器计算 opacity 为 1，断言通过；
          // 真实首屏若某块没渐显，opacity 仍 <1，照样能抓到。
          hiddenContent: [...document.querySelectorAll("[data-reveal]")].filter(
            (el) => parseFloat(getComputedStyle(el).opacity) < 0.99,
          ).length,
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
