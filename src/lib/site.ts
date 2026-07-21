// 全站配置：品牌信息、社交账号、联系方式
// 来源：HANDOVER.md（2026-07-21 家长交接档案）

export const site = {
  name: "Loong Kits",
  slogan: {
    en: "Bring Chinese Culture to Life",
    zh: "让中国文化活起来",
  },
  // 主域名 DNS 接通前，Vercel 预览域同样可用
  url: "https://loongkits.com",
  // hello@loongkits.com 需等 DNS + 邮箱转发配置完成后启用，
  // 在此之前使用品牌 Gmail 作为真实可收信的联系方式
  contactEmail: "loongkits.shop@gmail.com",
  socials: [
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@loongkits" },
    { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@loongkits" },
    { id: "pinterest", label: "Pinterest", href: "https://www.pinterest.com/loongkits" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/loongkits" },
  ],
} as const;
