// 全站文案中枢：所有页面文案集中于此，改文案只改这一个文件
// 结构：每个区块 { en: ..., zh: ... }，组件用 useT() 按当前语言取值

import type { Lang } from "./i18n";

type Bi<T> = Record<Lang, T>;

export const nav: Bi<{
  kits: string;
  free: string;
  families: string;
  teachers: string;
  about: string;
  menu: string;
}> = {
  en: { kits: "Kits", free: "Free Resources", families: "For Families", teachers: "For Teachers", about: "About", menu: "Menu" },
  zh: { kits: "学习包", free: "免费资源", families: "给家庭", teachers: "给老师", about: "关于我们", menu: "菜单" },
};

export const common: Bi<{
  comingSoon: string;
  buy: string;
  view: string;
  comingSoonNote: string;
}> = {
  en: {
    comingSoon: "Coming soon",
    buy: "Buy on Gumroad",
    view: "View",
    comingSoonNote: "This kit is being finalized. Follow @loongkits on TikTok or Pinterest to get notified.",
  },
  zh: {
    comingSoon: "即将上架",
    buy: "去 Gumroad 购买",
    view: "查看",
    comingSoonNote: "学习包正在制作中。关注 TikTok 或 Pinterest @loongkits，上架第一时间通知你。",
  },
};

export const footer: Bi<{
  tagline: string;
  explore: string;
  follow: string;
  contact: string;
  rights: string;
}> = {
  en: {
    tagline: "Printable bilingual kits that bring Chinese culture to life for curious kids.",
    explore: "Explore",
    follow: "Follow us",
    contact: "Contact",
    rights: "© 2026 Loong Kits. All rights reserved.",
  },
  zh: {
    tagline: "可打印的双语学习包，让好奇宝宝的文化活起来。",
    explore: "浏览",
    follow: "关注我们",
    contact: "联系",
    rights: "© 2026 Loong Kits. 保留所有权利。",
  },
};

export const home: Bi<{
  hero: { title: string; subtitle: string; cta: string; ctaSecondary: string; mascotAlt: string };
  howItWorks: { title: string; steps: { icon: string; title: string; desc: string }[] };
  featuredKits: { title: string; viewAll: string };
  audience: {
    families: { title: string; desc: string; cta: string };
    teachers: { title: string; desc: string; cta: string };
  };
  promise: { title: string; text: string; points: string[] };
  freeSample: { title: string; desc: string };
}> = {
  en: {
    hero: {
      title: "Bring Chinese Culture to Life",
      subtitle: "Printable bilingual kits for curious kids",
      cta: "Browse Kits",
      ctaSecondary: "Free Sample",
      mascotAlt: "Hong and Qing, the Loong Kits dragon mascots",
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { icon: "📥", title: "Download", desc: "Get instant access" },
        { icon: "🖨️", title: "Print", desc: "A4 or Letter size" },
        { icon: "❤️", title: "Learn Together", desc: "Quality family time" },
      ],
    },
    featuredKits: { title: "Featured Kits", viewAll: "View all kits" },
    audience: {
      families: { title: "For Families", desc: "Culture roots for your kids", cta: "Explore" },
      teachers: { title: "For Teachers", desc: "Classroom-ready resources", cta: "Explore" },
    },
    promise: {
      title: "Made to be printed, not just scrolled",
      text: "Every kit is a real, hand-finished PDF you print at home — stories, tracing pages, flashcards and crafts your child can actually hold. No screens. No apps. No subscriptions.",
      points: ["A4 + Letter, print-ready", "Bilingual EN / 中文 on every page", "Age-tuned from 3 to 18"],
    },
    freeSample: {
      title: "Try a Free Kit",
      desc: "Be the first to know when our free zodiac worksheet launches",
    },
  },
  zh: {
    hero: {
      title: "让中国文化活起来",
      subtitle: "为好奇宝宝准备的可打印双语学习包",
      cta: "浏览学习包",
      ctaSecondary: "免费样品",
      mascotAlt: "Loong Kits 双龙形象：小红龙和小青龙",
    },
    howItWorks: {
      title: "如何使用",
      steps: [
        { icon: "📥", title: "下载", desc: "立即获取" },
        { icon: "🖨️", title: "打印", desc: "A4 或 Letter 尺寸" },
        { icon: "❤️", title: "一起学", desc: "亲子时光" },
      ],
    },
    featuredKits: { title: "精选学习包", viewAll: "查看全部" },
    audience: {
      families: { title: "给家庭", desc: "给孩子种下文化根", cta: "进入" },
      teachers: { title: "给老师", desc: "课堂即用资源", cta: "进入" },
    },
    promise: {
      title: "为打印而生，不是刷完就忘",
      text: "每个学习包都是一份真正打磨过的可打印 PDF——故事、描红、闪卡、手工，孩子能拿在手里。不用屏幕，不用 App，不用订阅。",
      points: ["A4 + Letter 双尺寸，直接打印", "每页中英双语对照", "3 到 18 岁分龄设计"],
    },
    freeSample: {
      title: "免费试一个",
      desc: "免费生肖练习纸上线时，第一时间通知你",
    },
  },
};

export const subscribe: Bi<{
  placeholder: string;
  cta: string;
  launchingSoon: string;
  followInstead: string;
  success: string;
  error: string;
  invalidEmail: string;
}> = {
  en: {
    placeholder: "Enter your email",
    cta: "Notify Me",
    launchingSoon: "We're launching soon!",
    followInstead: "Email signup opens with our first product. Meanwhile, follow @loongkits for updates:",
    success: "Thanks! We'll be in touch.",
    error: "Something went wrong. Please try again.",
    invalidEmail: "Please enter a valid email address.",
  },
  zh: {
    placeholder: "输入邮箱",
    cta: "通知我",
    launchingSoon: "即将上线！",
    followInstead: "邮件订阅将随首个产品一起开放。在此之前，关注 @loongkits 获取动态：",
    success: "谢谢！我们会联系你。",
    error: "出了点问题，请重试。",
    invalidEmail: "请输入有效的邮箱地址。",
  },
};

export const kitsPage: Bi<{
  title: string;
  subtitle: string;
  filterAll: string;
  ageAll: string;
  empty: string;
}> = {
  en: {
    title: "All Learning Kits",
    subtitle: "Choose your adventure",
    filterAll: "All",
    ageAll: "All Ages",
    empty: "No kits match these filters yet.",
  },
  zh: {
    title: "全部学习包",
    subtitle: "选择你的冒险",
    filterAll: "全部",
    ageAll: "全部年龄",
    empty: "暂时没有符合筛选条件的学习包。",
  },
};

export const freePage: Bi<{
  title: string;
  subtitle: string;
  zodiac: { title: string; desc: string; cta: string };
  email: { title: string; desc: string };
}> = {
  en: {
    title: "Free Resources",
    subtitle: "Download and print instantly",
    zodiac: {
      title: "Zodiac Animals Worksheet",
      desc: "12 zodiac animals coloring page + Chinese character tracing. In production now.",
      cta: "Coming soon",
    },
    email: {
      title: "Get More Freebies",
      desc: "Join the list for weekly free resources",
    },
  },
  zh: {
    title: "免费资源",
    subtitle: "下载即可打印",
    zodiac: {
      title: "生肖动物练习纸",
      desc: "12 生肖涂色页 + 汉字描红。正在制作中。",
      cta: "即将上线",
    },
    email: {
      title: "获取更多免费资源",
      desc: "订阅通讯，每周获取免费资源",
    },
  },
};

export const familiesPage: Bi<{
  title: string;
  subtitle: string;
  why: { title: string; reasons: { icon: string; title: string; desc: string }[] };
  how: { title: string; steps: string[] };
  cta: string;
}> = {
  en: {
    title: "For Families",
    subtitle: "Culture roots for your kids",
    why: {
      title: "Why Loong Kits?",
      reasons: [
        { icon: "🏠", title: "Heritage Connection", desc: "Help your kids connect with their roots" },
        { icon: "📱", title: "Screen-Free", desc: "Printable activities, no devices needed" },
        { icon: "👨‍👩‍👧", title: "Family Bonding", desc: "Quality time together, learning side by side" },
        { icon: "🎯", title: "Age-Appropriate", desc: "Content designed for 3-18 years old" },
      ],
    },
    how: {
      title: "How to Use",
      steps: [
        "Choose a kit that matches your child's age",
        "Download and print at home",
        "Follow the parent guide for activities",
        "Watch your child learn and have fun",
      ],
    },
    cta: "Browse Kits",
  },
  zh: {
    title: "给家庭",
    subtitle: "给孩子种下文化根",
    why: {
      title: "为什么选择 Loong Kits？",
      reasons: [
        { icon: "🏠", title: "文化传承", desc: "帮助孩子连接文化根源" },
        { icon: "📱", title: "无屏幕", desc: "可打印活动，无需电子设备" },
        { icon: "👨‍👩‍👧", title: "亲子时光", desc: "一起学习，增进感情" },
        { icon: "🎯", title: "适龄内容", desc: "为 3-18 岁设计" },
      ],
    },
    how: {
      title: "如何使用",
      steps: ["选择适合孩子年龄的学习包", "在家下载并打印", "按照家长指南进行活动", "看着孩子快乐学习"],
    },
    cta: "浏览学习包",
  },
};

export const teachersPage: Bi<{
  title: string;
  subtitle: string;
  why: { title: string; reasons: { icon: string; title: string; desc: string }[] };
  bulk: { title: string; desc: string; cta: string };
  cta: string;
}> = {
  en: {
    title: "For Teachers",
    subtitle: "Classroom-ready resources",
    why: {
      title: "Why Teachers Choose Us",
      reasons: [
        { icon: "📚", title: "Standards-Aligned", desc: "Content designed for language learning standards" },
        { icon: "🖨️", title: "Print & Go", desc: "No prep needed, download and use immediately" },
        { icon: "🌏", title: "Cultural Authentic", desc: "Created by native speakers with cultural depth" },
        { icon: "💰", title: "Bulk Pricing", desc: "Special rates for classroom sets" },
      ],
    },
    bulk: {
      title: "Classroom Pricing",
      desc: "Need multiple copies? We offer special pricing for teachers and schools.",
      cta: "Contact Us",
    },
    cta: "Browse Kits",
  },
  zh: {
    title: "给老师",
    subtitle: "课堂即用资源",
    why: {
      title: "老师为什么选择我们",
      reasons: [
        { icon: "📚", title: "标准对齐", desc: "内容符合语言学习标准" },
        { icon: "🖨️", title: "打印即用", desc: "无需准备，下载即可使用" },
        { icon: "🌏", title: "文化地道", desc: "母语者创作，文化深度保证" },
        { icon: "💰", title: "批量优惠", desc: "班级套装特别价格" },
      ],
    },
    bulk: {
      title: "班级价格",
      desc: "需要多份副本？我们为老师和学校提供特别价格。",
      cta: "联系我们",
    },
    cta: "浏览学习包",
  },
};

export const aboutPage: Bi<{
  title: string;
  story: { title: string; text: string };
  mission: { title: string; text: string };
  values: { title: string; items: { icon: string; title: string; desc: string }[] };
  contact: { title: string };
}> = {
  en: {
    title: "About Loong Kits",
    story: {
      title: "Our Story",
      text: "Loong Kits was born from a simple observation: heritage families and educators need better tools to share Chinese culture with the next generation. We believe learning should be joyful, accessible, and meaningful.",
    },
    mission: {
      title: "Our Mission",
      text: "To make Chinese culture accessible and engaging for every child, everywhere. Through beautifully designed printable resources, we help families and teachers create meaningful learning experiences.",
    },
    values: {
      title: "Our Values",
      items: [
        { icon: "❤️", title: "Cultural Pride", desc: "Celebrating heritage with authenticity and respect" },
        { icon: "✨", title: "Quality First", desc: "Every resource is crafted with care and expertise" },
        { icon: "🌍", title: "Global Community", desc: "Connecting families and educators worldwide" },
        { icon: "🌱", title: "Lifelong Learning", desc: "Growing curiosity and understanding at every age" },
      ],
    },
    contact: { title: "Get in Touch" },
  },
  zh: {
    title: "关于 Loong Kits",
    story: {
      title: "我们的故事",
      text: "Loong Kits 源于一个简单的观察：海外华裔家庭和教育工作者需要更好的工具来向下一代分享中国文化。我们相信学习应该是快乐的、可及的、有意义的。",
    },
    mission: {
      title: "我们的使命",
      text: "让中国文化触手可及，让每个孩子都能快乐学习。通过精心设计的可打印资源，我们帮助家庭和老师创造有意义的学习体验。",
    },
    values: {
      title: "我们的价值观",
      items: [
        { icon: "❤️", title: "文化自豪", desc: "以真诚和尊重庆祝文化传承" },
        { icon: "✨", title: "质量第一", desc: "每一份资源都用心制作" },
        { icon: "🌍", title: "全球社区", desc: "连接世界各地的家庭和教育者" },
        { icon: "🌱", title: "终身学习", desc: "在每个年龄段培养好奇心和理解力" },
      ],
    },
    contact: { title: "联系我们" },
  },
};
