// 学习包产品目录（数据驱动，页面不再硬编码）
// 定价/页数来源：HANDOVER.md 产品矩阵
// gumroadUrl：Gumroad 商品创建后把链接填进来，按钮自动变成"购买"

import type { Lang } from "./i18n";

export type ThemeId = "cny" | "zodiac" | "panda";
export type AgeId = "prek" | "g15" | "g68" | "g912";

export interface Kit {
  id: string;
  theme: ThemeId;
  age: AgeId;
  pages: number;
  priceUsd: string;
  /** null = 尚未上架，按钮显示 Coming soon */
  gumroadUrl: string | null;
  tag?: Record<Lang, string>;
}

export const themeLabels: Record<ThemeId, Record<Lang, string>> = {
  cny: { en: "Chinese New Year", zh: "春节" },
  zodiac: { en: "Zodiac Animals", zh: "生肖" },
  panda: { en: "Panda Friends", zh: "熊猫" },
};

export const themeIcons: Record<ThemeId, string> = {
  cny: "🏮",
  zodiac: "🐉",
  panda: "🐼",
};

export const themeDesc: Record<ThemeId, Record<Lang, string>> = {
  cny: {
    en: "Stories, crafts & traditions for Chinese New Year",
    zh: "故事、手工、传统习俗",
  },
  zodiac: {
    en: "Discover the 12 zodiac animals",
    zh: "探索十二生肖",
  },
  panda: {
    en: "Learn with everyone's favorite bear",
    zh: "和熊猫一起学习",
  },
};

export const ageLabels: Record<AgeId, Record<Lang, string>> = {
  prek: { en: "PreK-K (3-6)", zh: "PreK-K (3-6岁)" },
  g15: { en: "G1-5 (6-11)", zh: "G1-5 (6-11岁)" },
  g68: { en: "G6-8 (11-14)", zh: "G6-8 (11-14岁)" },
  g912: { en: "G9-12 (14-18)", zh: "G9-12 (14-18岁)" },
};

export function kitTitle(kit: Kit, lang: Lang): string {
  return `${themeLabels[kit.theme][lang]} Kit · ${ageLabels[kit.age][lang]}`;
}

export function formatPages(pages: number, lang: Lang): string {
  return lang === "en" ? `${pages} pages` : `${pages}页`;
}

export const kits: Kit[] = [
  // 春节系列
  { id: "cny-prek", theme: "cny", age: "prek", pages: 20, priceUsd: "7.99", gumroadUrl: null, tag: { en: "Best Seller", zh: "热卖" } },
  { id: "cny-g15", theme: "cny", age: "g15", pages: 28, priceUsd: "9.99", gumroadUrl: null },
  { id: "cny-g68", theme: "cny", age: "g68", pages: 32, priceUsd: "12.99", gumroadUrl: null },
  { id: "cny-g912", theme: "cny", age: "g912", pages: 36, priceUsd: "14.99", gumroadUrl: null },
  // 生肖系列
  { id: "zodiac-prek", theme: "zodiac", age: "prek", pages: 18, priceUsd: "7.99", gumroadUrl: null, tag: { en: "Popular", zh: "热门" } },
  { id: "zodiac-g15", theme: "zodiac", age: "g15", pages: 25, priceUsd: "9.99", gumroadUrl: null },
  { id: "zodiac-g68", theme: "zodiac", age: "g68", pages: 30, priceUsd: "12.99", gumroadUrl: null },
  { id: "zodiac-g912", theme: "zodiac", age: "g912", pages: 34, priceUsd: "14.99", gumroadUrl: null },
  // 熊猫系列
  { id: "panda-prek", theme: "panda", age: "prek", pages: 18, priceUsd: "7.99", gumroadUrl: null, tag: { en: "New", zh: "新品" } },
  { id: "panda-g15", theme: "panda", age: "g15", pages: 25, priceUsd: "9.99", gumroadUrl: null },
  { id: "panda-g68", theme: "panda", age: "g68", pages: 30, priceUsd: "12.99", gumroadUrl: null },
  { id: "panda-g912", theme: "panda", age: "g912", pages: 34, priceUsd: "14.99", gumroadUrl: null },
];

/** 首页精选：每个主题取一个代表（与原首页价格一致） */
export const featuredKitIds = ["cny-prek", "zodiac-prek", "panda-prek"];
