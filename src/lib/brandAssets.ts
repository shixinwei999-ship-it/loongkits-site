// Loong Kits 品牌资产契约。
// Hong/Qing 的成品资产只在此处登记，页面不会回退为手画假龙。

export const dragonAssets = {
  ready: true,
  hero: {
    src: "/brand/hong-qing-hero.webp",
    width: 1536,
    height: 1024,
  },
  logo: {
    src: "/brand/hong-qing-logo.webp",
    width: 896,
    height: 432,
  },
} as const;

export const dragonAssetBrief = {
  finalSource: "public/brand/hong-qing-hero.webp",
  requiredFiles: ["hong-qing-hero.webp", "hong-qing-logo.webp"],
  acceptance: [
    "Hong and Qing are unmistakably Eastern dragons at a glance.",
    "Both have antlers, soft manes, long bodies, fish tails, small paws, and two flowing whiskers.",
    "Qing is sage green and calm; Hong is dusty rose and waves with a playful smile.",
    "No Western-dragon anatomy, visible scale armor, tourism red-gold styling, or sticker look.",
  ],
} as const;
