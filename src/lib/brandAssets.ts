// Loong Kits 品牌资产契约。
// 真实 Hong/Qing 文件到位后，只改此文件的 `ready` 和路径；页面不会回退为手画假龙。
// 资产规格见 docs-real/docs/品牌资产/双龙形象_定稿说明.md。

export const dragonAssets = {
  ready: false,
  hero: {
    src: "/brand/hong-qing-hero.webp",
    width: 2048,
    height: 2048,
  },
  logo: {
    src: "/brand/hong-qing-logo.webp",
    width: 1024,
    height: 1024,
  },
} as const;

export const dragonAssetBrief = {
  finalSource: "docs-real/docs/品牌资产/双龙形象_定稿说明.md",
  requiredFiles: ["hong-qing-hero.webp", "hong-qing-logo.webp"],
  acceptance: [
    "Hong and Qing are unmistakably Eastern dragons at a glance.",
    "Both have antlers, fluffy mane, long body, fish tail, eagle claws, and two flowing whiskers.",
    "Hong waves with a tongue-out smile; Qing clasps hands with a calm smile.",
    "No Western-dragon anatomy, realistic scales, tourism red-gold styling, or low-effort sticker look.",
  ],
} as const;
