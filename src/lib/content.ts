// 全站文案中枢：所有页面文案集中于此，改文案只改这一个文件
// 结构：每个区块 { en: ..., zh: ... }，组件用 useT() 按当前语言取值

import type { Lang } from "./i18n";

type Bi<T> = Record<Lang, T>;

export const nav: Bi<{
  learn: string;
  kits: string;
  free: string;
  families: string;
  teachers: string;
  about: string;
  menu: string;
}> = {
  en: { learn: "Learn Chinese", kits: "Kits", free: "Free Resources", families: "For Families", teachers: "For Teachers", about: "About", menu: "Menu" },
  zh: { learn: "学中文", kits: "学习包", free: "免费资源", families: "给家庭", teachers: "给老师", about: "关于我们", menu: "菜单" },
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
  hero: { title: string; subtitle: string; cta: string; ctaSecondary: string; learnCta: string; earCta: string; mascotAlt: string };
  agePath: { kicker: string; title: string; desc: string; cta: string; viewAll: string };
  howItWorks: { title: string; steps: { icon: string; title: string; desc: string }[] };
  featuredKits: { title: string; viewAll: string };
  audience: {
    families: { title: string; desc: string; cta: string };
    teachers: { title: string; desc: string; cta: string };
  };
  promise: { title: string; text: string; points: string[] };
  freeSample: { title: string; desc: string; cta: string };
}> = {
  en: {
    hero: {
      title: "Speak Chinese, level by level",
      subtitle: "A complete path from your very first tone to your own bilingual voice — ten levels, real lessons, homework you can print. No age required: start at Level 1 whenever you begin.",
      cta: "Browse Kits",
      ctaSecondary: "Free Sample",
      learnCta: "Start learning Chinese",
      earCta: "Warm up your ear first",
      mascotAlt: "A child writing a Chinese character on red paper",
    },
    agePath: {
      kicker: "One path · ten levels",
      title: "From Level 1 to Level 10",
      desc: "Not ages — levels. A teenager starting today and a six-year-old both begin at Level 1 and climb the same ladder, one rung at a time.",
      cta: "See this level",
      viewAll: "See all 10 levels",
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
      title: "Try a Free Worksheet",
      desc: "Meet the 12 zodiac animals with a four-page bilingual printable for ages 4–8.",
      cta: "Explore the free worksheet",
    },
  },
  zh: {
    hero: {
      title: "一级一级，开口说中文",
      subtitle: "从第一个声调，到属于你自己的双语声音——十个等级、真正的课、能打印的作业。不限年龄：无论你几岁开始，都从第 1 级起步。",
      cta: "浏览学习包",
      ctaSecondary: "免费样品",
      learnCta: "开始学中文",
      earCta: "先练练耳朵",
      mascotAlt: "一个孩子在红纸上写汉字",
    },
    agePath: {
      kicker: "一条路 · 十个等级",
      title: "从第 1 级，到第 10 级",
      desc: "不按年龄，按等级。今天才开始的十几岁孩子，和六岁的孩子，都从第 1 级出发，一格一格往上爬。",
      cta: "看这一级",
      viewAll: "查看全部 10 级",
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
      title: "免费试一份练习包",
      desc: "面向 4–8 岁的四页双语生肖练习包，认识十二生肖、描红和连线都在里面。",
      cta: "查看免费练习包",
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
  zodiac: { eyebrow: string; title: string; desc: string; detail: string; facts: string[]; downloads: { a4: string; letter: string } };
  guide: { title: string; desc: string; points: { title: string; desc: string }[] };
  follow: { title: string; desc: string };
}> = {
  en: {
    title: "Free Resources",
    subtitle: "Useful bilingual printables for real tables and classrooms.",
    zodiac: {
      eyebrow: "First free printable",
      title: "Zodiac Animals Starter Worksheet",
      desc: "A four-page bilingual introduction to the 12 zodiac animals: vocabulary, tracing, matching, and a short guide for grown-ups.",
      detail: "See the activity guide",
      facts: ["4 pages", "Ages 4–8", "EN / 中文"],
      downloads: { a4: "Download A4 PDF", letter: "Download US Letter PDF" },
    },
    guide: {
      title: "Made to use together",
      desc: "Print one copy, then point, say, trace, and match. The last page includes a 15–20 minute family or classroom routine.",
      points: [
        { title: "Real printable pages", desc: "Preview the same pages you download." },
        { title: "Two paper sizes", desc: "Choose A4 or US Letter and print at 100%." },
        { title: "Start small", desc: "Pick three animals for a first session." },
      ],
    },
    follow: {
      title: "More resources in progress",
      desc: "Follow @loongkits for new printables and cultural learning ideas.",
    },
  },
  zh: {
    title: "免费资源",
    subtitle: "给真实学习桌和课堂准备的中英双语可打印内容。",
    zodiac: {
      eyebrow: "第一份免费练习包",
      title: "十二生肖双语入门练习包",
      desc: "四页中英双语练习：认识十二生肖、词汇、汉字描红、配对活动，还有给家庭和老师的小指南。",
      detail: "查看活动指南",
      facts: ["4 页内容", "4–8 岁", "中英双语"],
      downloads: { a4: "下载 A4 PDF", letter: "下载 US Letter PDF" },
    },
    guide: {
      title: "一起学，才更好玩",
      desc: "打印一份，指一指、说一说、描一描、连一连。最后一页准备了 15–20 分钟的家庭或课堂活动流程。",
      points: [
        { title: "真实可打印页面", desc: "网页预览与下载内容完全一致。" },
        { title: "两种纸张尺寸", desc: "选择 A4 或 US Letter，按 100% 打印。" },
        { title: "从三个生肖开始", desc: "第一次学习，先选三个生肖就好。" },
      ],
    },
    follow: {
      title: "更多资源正在制作",
      desc: "关注 @loongkits，获取新的可打印资源和文化学习灵感。",
    },
  },
};

export const zodiacResourcePage: Bi<{
  back: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  facts: { label: string; value: string }[];
  downloads: { a4: string; letter: string };
  downloadNote: string;
  coverAlt: string;
  vocabularyAlt: string;
  previewCaption: string;
  inside: { eyebrow: string; title: string; description: string; items: { title: string; description: string }[] };
  guide: { eyebrow: string; title: string; description: string; steps: string[] };
  final: { title: string; description: string };
}> = {
  en: {
    back: "← Free resources",
    eyebrow: "Free printable · EN / 中文",
    title: "Meet the 12 Zodiac Animals",
    subtitle: "A four-page bilingual starter worksheet for naming, tracing, matching, and talking about the Chinese zodiac together.",
    facts: [{ label: "Pages", value: "4" }, { label: "Ages", value: "4–8" }, { label: "Time", value: "15–20 min" }],
    downloads: { a4: "Download A4 PDF", letter: "Download US Letter PDF" },
    downloadNote: "Choose the paper size you use at home or school. Print at 100%.",
    coverAlt: "Cover preview of the Zodiac Animals Starter Worksheet",
    vocabularyAlt: "Vocabulary page preview with all 12 Chinese zodiac animals",
    previewCaption: "Preview from the printable PDF · four pages in total",
    inside: {
      eyebrow: "What’s inside",
      title: "Four pages, one gentle first step",
      description: "The pages are designed to be used aloud and by hand. Start with names, then move into character tracing and a simple matching activity.",
      items: [
        { title: "12 animal words", description: "Chinese characters, pinyin, and English names in one visual word wall." },
        { title: "Trace and match", description: "Four key characters plus a low-pressure matching activity." },
        { title: "Use-it-today guide", description: "A print setup and a short routine for families or classrooms." },
      ],
    },
    guide: {
      eyebrow: "Use together",
      title: "A 15–20 minute routine",
      description: "There is no need to finish every page at once. A short, spoken first session is often the best start for bilingual learners.",
      steps: [
        "Choose three animals. Point to each one and say the Chinese word together.",
        "Trace one character slowly with a pencil, following the pale model.",
        "Use the matching section, then ask: Which animal do you like, and why?",
      ],
    },
    final: { title: "Ready for the table", description: "Download the paper size that fits your printer, then learn side by side." },
  },
  zh: {
    back: "← 返回免费资源",
    eyebrow: "免费打印 · 中英双语",
    title: "认识十二生肖",
    subtitle: "四页双语入门练习：说出名字、描红、连线，再一起聊聊中国生肖。",
    facts: [{ label: "页数", value: "4" }, { label: "适合年龄", value: "4–8 岁" }, { label: "活动时间", value: "15–20 分钟" }],
    downloads: { a4: "下载 A4 PDF", letter: "下载 US Letter PDF" },
    downloadNote: "选择家里或学校使用的纸张尺寸，按 100% 比例打印。",
    coverAlt: "十二生肖双语入门练习包封面预览",
    vocabularyAlt: "十二生肖中英文词汇页预览",
    previewCaption: "真实可打印 PDF 页面预览 · 共 4 页",
    inside: {
      eyebrow: "里面有什么",
      title: "四页内容，轻松开始",
      description: "这些页面适合边说边做：先认识名字，再描红，最后完成一个简单的连线小游戏。",
      items: [
        { title: "12 个生肖词汇", description: "一页认识汉字、拼音和英文名称。" },
        { title: "描一描 · 连一连", description: "四个重点汉字，加上低压力的配对活动。" },
        { title: "今天就能用的小指南", description: "准备了打印提示和家庭/课堂活动流程。" },
      ],
    },
    guide: {
      eyebrow: "一起学",
      title: "15–20 分钟活动流程",
      description: "不用一次做完全部内容。对于双语学习者，短一点、能开口说的第一轮学习通常效果更好。",
      steps: [
        "选三个生肖，指一指、一起说出中文名字。",
        "用铅笔慢慢描一个汉字，沿着浅色范字走。",
        "完成连线后问问孩子：你喜欢哪一个生肖？为什么？",
      ],
    },
    final: { title: "准备好上桌了", description: "选择适合打印机的纸张尺寸，和孩子或学生一起开始。" },
  },
};

export const familiesPage: Bi<{
  title: string;
  subtitle: string;
  why: { title: string; reasons: { icon: string; title: string; desc: string }[] };
  how: { title: string; steps: string[] };
  resource: { title: string; desc: string; cta: string };
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
    resource: {
      title: "Start with a 15-minute zodiac activity",
      desc: "Use our free printable to point, say, trace, and match the 12 zodiac animals together.",
      cta: "Open the free worksheet",
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
    resource: {
      title: "从一份 15 分钟生肖活动开始",
      desc: "使用我们的免费练习包，和孩子一起指一指、说一说、描一描、连一连十二生肖。",
      cta: "打开免费练习包",
    },
    cta: "浏览学习包",
  },
};

export const teachersPage: Bi<{
  title: string;
  subtitle: string;
  why: { title: string; reasons: { icon: string; title: string; desc: string }[] };
  bulk: { title: string; desc: string; cta: string };
  resource: { title: string; desc: string; cta: string };
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
    resource: {
      title: "Try a ready-to-print zodiac lesson starter",
      desc: "A four-page bilingual worksheet with vocabulary, tracing, matching, and a 15–20 minute classroom routine.",
      cta: "Open the free worksheet",
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
    resource: {
      title: "先试一份可直接打印的生肖活动",
      desc: "四页双语练习含词汇、描红、连线和 15–20 分钟课堂活动流程。",
      cta: "打开免费练习包",
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
