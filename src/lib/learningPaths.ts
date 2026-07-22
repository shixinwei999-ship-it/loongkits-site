// 学习路径与资源目录：四个年龄区是独立课程空间。
// 设计原则——大图说话，字极少：每个文化主题用一张全宽醒目大图 + 标题 + 一行点题，
// 一目了然“这是什么文化、什么主题”。不做文字墙、不做修饰性堆料。
// 可下载的真实练习包仍挂在每个区的下载位，作为“能带走的东西”。

import type { Lang } from "./i18n";
import type { AgeId } from "./kits";

type Bi<T> = Record<Lang, T>;

export interface ResourceDownloads {
  a4: { href: string };
  letter: { href: string };
}

export interface ResourcePreview {
  src: string;
  alt: Bi<string>;
}

export interface LearningResource {
  slug: string;
  age: AgeId;
  topic: Bi<string>;
  title: Bi<string>;
  summary: Bi<string>;
  pageCount: number;
  format: Bi<string>;
  access: "free";
  previews: ResourcePreview[];
  downloads: ResourceDownloads;
}

export interface Topic {
  image: string;
  title: Bi<string>;
  blurb: Bi<string>;
}

export interface LearningPath {
  id: AgeId;
  slug: string;
  hero: Bi<{ eyebrow: string; title: string; introduction: string }>;
  image: { src: string; width: number; height: number };
  imageAlt: Bi<string>;
  topics: Topic[];
  activityLine: Bi<string>;
  featuredResourceSlug: string;
  nextSlug: string | null;
  nextLabel: Bi<string>;
}

export const learningResources: Record<string, LearningResource> = {
  "zodiac-animals": {
    slug: "zodiac-animals",
    age: "prek",
    topic: { en: "The 12 zodiac animals", zh: "十二生肖" },
    title: { en: "Meet the 12 Zodiac Animals", zh: "认识十二生肖" },
    summary: {
      en: "A four-page bilingual starter: name the animals, trace characters, make a match.",
      zh: "四页双语入门：认动物、描汉字、连一连。",
    },
    pageCount: 4,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/zodiac-animals/v1/preview-cover.webp", alt: { en: "Zodiac starter cover", zh: "生肖入门封面" } },
      { src: "/resources/zodiac-animals/v1/preview-vocabulary.webp", alt: { en: "Twelve zodiac cards", zh: "十二生肖卡" } },
    ],
    downloads: {
      a4: { href: "/resources/zodiac-animals/v1/zodiac-animals-starter-a4.pdf" },
      letter: { href: "/resources/zodiac-animals/v1/zodiac-animals-starter-letter.pdf" },
    },
  },
  "new-year-lantern": {
    slug: "new-year-lantern",
    age: "prek",
    topic: { en: "Red, lanterns, good wishes", zh: "红色、灯笼、祝福" },
    title: { en: "Hello New Year · Lantern Pack", zh: "新年好 · 灯笼活动包" },
    summary: {
      en: "Three pages: red, the word 家, and a fold-your-own lantern.",
      zh: "三页：红色、汉字“家”、折一盏自己的灯笼。",
    },
    pageCount: 3,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/new-year-lantern/v1/preview-cover.webp", alt: { en: "Lantern pack cover", zh: "灯笼包封面" } },
      { src: "/resources/new-year-lantern/v1/preview-activity.webp", alt: { en: "Count and make page", zh: "数与做页" } },
    ],
    downloads: {
      a4: { href: "/resources/new-year-lantern/v1/new-year-lantern-a4.pdf" },
      letter: { href: "/resources/new-year-lantern/v1/new-year-lantern-letter.pdf" },
    },
  },
  "festival-detective": {
    slug: "festival-detective",
    age: "g15",
    topic: { en: "Spring Festival & Lantern Festival", zh: "春节与元宵节" },
    title: { en: "Festival Detective", zh: "节日小侦探" },
    summary: {
      en: "Four pages: order the festival, read 福 / 春 / 灯, solve riddles, ask your family.",
      zh: "四页：排顺序、读“福/春/灯”、猜灯谜、问家人。",
    },
    pageCount: 4,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/festival-detective/v1/preview-cover.webp", alt: { en: "Festival Detective cover", zh: "节日小侦探封面" } },
      { src: "/resources/festival-detective/v1/preview-activity.webp", alt: { en: "Sequence and riddle page", zh: "排顺序与猜谜页" } },
    ],
    downloads: {
      a4: { href: "/resources/festival-detective/v1/festival-detective-a4.pdf" },
      letter: { href: "/resources/festival-detective/v1/festival-detective-letter.pdf" },
    },
  },
  "culture-in-motion": {
    slug: "culture-in-motion",
    age: "g68",
    topic: { en: "Festival, zodiac, Silk Roads", zh: "节日、生肖、丝路" },
    title: { en: "Culture in Motion", zh: "文化在流动" },
    summary: {
      en: "Five pages: a timeline, a map task, source comparison, claim and evidence.",
      zh: "五页：时间线、地图任务、资料比较、观点与证据。",
    },
    pageCount: 5,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/culture-in-motion/v1/preview-cover.webp", alt: { en: "Culture in Motion cover", zh: "文化在流动封面" } },
      { src: "/resources/culture-in-motion/v1/preview-activity.webp", alt: { en: "Map and evidence page", zh: "地图与证据页" } },
    ],
    downloads: {
      a4: { href: "/resources/culture-in-motion/v1/culture-in-motion-a4.pdf" },
      letter: { href: "/resources/culture-in-motion/v1/culture-in-motion-letter.pdf" },
    },
  },
  "culture-curator": {
    slug: "culture-curator",
    age: "g912",
    topic: { en: "Research, translate, express", zh: "研究、翻译、表达" },
    title: { en: "Curating Chinese Culture", zh: "策展中国文化" },
    summary: {
      en: "Six pages: evaluate sources, analyze an object, write a cited bilingual label.",
      zh: "六页：评估来源、分析器物、写有引用的双语展签。",
    },
    pageCount: 6,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/culture-curator/v1/preview-cover.webp", alt: { en: "Curating cover", zh: "策展封面" } },
      { src: "/resources/culture-curator/v1/preview-activity.webp", alt: { en: "Source and label page", zh: "来源与展签页" } },
    ],
    downloads: {
      a4: { href: "/resources/culture-curator/v1/culture-curator-a4.pdf" },
      letter: { href: "/resources/culture-curator/v1/culture-curator-letter.pdf" },
    },
  },
};

export const learningPaths: LearningPath[] = [
  {
    id: "prek",
    slug: "ages-3-6",
    hero: {
      en: {
        eyebrow: "Ages 3–6",
        title: "Touch it, say it, make it",
        introduction: "Culture at this age is held in the hands and spoken out loud — animals, red, and one good wish.",
      },
      zh: {
        eyebrow: "3–6 岁",
        title: "摸一摸，说一说，做一做",
        introduction: "这个年纪，文化拿在手里、说出口——动物、红色，和一句祝福。",
      },
    },
    image: { src: "/age-path/prek.webp", width: 1728, height: 1152 },
    imageAlt: { en: "Young child with zodiac cards", zh: "幼儿与生肖卡" },
    topics: [
      {
        image: "/age-topics/prek-zodiac.webp",
        title: { en: "The 12 animals", zh: "十二生肖" },
        blurb: { en: "Twelve animals, one fixed order, one for each year.", zh: "十二种动物，固定顺序，每年一个。" },
      },
      {
        image: "/age-topics/prek-red.webp",
        title: { en: "Red means good luck", zh: "红色是好运" },
        blurb: { en: "Red paper, red envelopes — a color that wishes well.", zh: "红纸、红包——一种送祝愿的颜色。" },
      },
      {
        image: "/age-topics/prek-greet.webp",
        title: { en: "Say a good wish", zh: "说一句祝福" },
        blurb: { en: "“新年好” — a sentence made to be spoken to someone.", zh: "“新年好”——一句说给人听的话。" },
      },
    ],
    activityLine: {
      en: "10–15 min · point at three animals, fold one lantern, say one wish out loud.",
      zh: "10–15 分钟 · 指三个动物、折一盏灯笼、大声说一句祝福。",
    },
    featuredResourceSlug: "zodiac-animals",
    nextSlug: "ages-6-11",
    nextLabel: { en: "Next: Ages 6–11", zh: "下一步：6–11 岁" },
  },
  {
    id: "g15",
    slug: "ages-6-11",
    hero: {
      en: {
        eyebrow: "Ages 6–11",
        title: "How a festival unfolds",
        introduction: "Now kids can follow a sequence, enjoy a riddle, and notice that every family does it a little differently.",
      },
      zh: {
        eyebrow: "6–11 岁",
        title: "一个节日怎么过",
        introduction: "现在孩子能跟着一串顺序走、爱猜谜，也开始发现：家家过法都不一样。",
      },
    },
    image: { src: "/age-path/g15.webp", width: 1728, height: 1152 },
    imageAlt: { en: "Child making a lantern", zh: "孩子做灯笼" },
    topics: [
      {
        image: "/age-topics/g15-sequence.webp",
        title: { en: "A festival in order", zh: "节日的顺序" },
        blurb: { en: "Clean, gather, greet, light the lanterns — a rhythm, not a rule.", zh: "扫尘、团圆、拜年、赏灯——是节奏，不是死规定。" },
      },
      {
        image: "/age-topics/g15-riddle.webp",
        title: { en: "Lantern riddles", zh: "灯谜" },
        blurb: { en: "Reading becomes a game: the answer hides inside a clue.", zh: "阅读变成游戏：答案藏在一条线索里。" },
      },
      {
        image: "/age-topics/g15-reunion.webp",
        title: { en: "The reunion table", zh: "团圆饭" },
        blurb: { en: "Being together matters as much as what is on the table.", zh: "在一起，和桌上吃什么一样重要。" },
      },
    ],
    activityLine: {
      en: "25–35 min · order the cards, solve one riddle, ask an elder one custom.",
      zh: "25–35 分钟 · 排好卡片、猜一道谜、问长辈一个习惯。",
    },
    featuredResourceSlug: "festival-detective",
    nextSlug: "ages-11-14",
    nextLabel: { en: "Next: Ages 11–14", zh: "下一步：11–14 岁" },
  },
  {
    id: "g68",
    slug: "ages-11-14",
    hero: {
      en: {
        eyebrow: "Ages 11–14",
        title: "Culture moves between people",
        introduction: "Traditions are not frozen. Compare places, read the zodiac as a cycle, see the Silk Roads as many networks.",
      },
      zh: {
        eyebrow: "11–14 岁",
        title: "文化在人与人之间流动",
        introduction: "传统不是冻住的。比较各地、把生肖读成循环、把丝路看成许多条网络。",
      },
    },
    image: { src: "/age-path/g68.webp", width: 1728, height: 1152 },
    imageAlt: { en: "Student building a timeline", zh: "学生搭时间线" },
    topics: [
      {
        image: "/age-topics/g68-region.webp",
        title: { en: "Different by place", zh: "各地不同" },
        blurb: { en: "Dumplings, rice cakes, sweet balls — variation is not error.", zh: "饺子、年糕、汤圆——不同不是错。" },
      },
      {
        image: "/age-topics/g68-cycle.webp",
        title: { en: "A 12-year cycle", zh: "十二年循环" },
        blurb: { en: "The zodiac organizes years — it does not decide personality.", zh: "生肖组织年份，不决定性格。" },
      },
      {
        image: "/age-topics/g68-silk.webp",
        title: { en: "Many roads", zh: "许多条路" },
        blurb: { en: "Goods, ideas and music flowed in many directions, not one.", zh: "货物、思想、音乐朝许多方向流动，不是一条。" },
      },
    ],
    activityLine: {
      en: "45–60 min · mark the map, compare two sources, back one claim with evidence.",
      zh: "45–60 分钟 · 标地图、比两份资料、用证据支持一个观点。",
    },
    featuredResourceSlug: "culture-in-motion",
    nextSlug: "ages-14-18",
    nextLabel: { en: "Next: Ages 14–18", zh: "下一步：14–18 岁" },
  },
  {
    id: "g912",
    slug: "ages-14-18",
    hero: {
      en: {
        eyebrow: "Ages 14–18",
        title: "Whose tradition, whose voice",
        introduction: "Culture is interpreted, not just inherited. Read sources, weigh translations, and sign your name to a careful claim.",
      },
      zh: {
        eyebrow: "14–18 岁",
        title: "谁的传统，谁的声音",
        introduction: "文化是被诠释的，不只是被继承的。读来源、权衡翻译、为一个谨慎的判断署名。",
      },
    },
    image: { src: "/age-path/g912.webp", width: 1728, height: 1152 },
    imageAlt: { en: "Older learner writing", zh: "高年级学习者写作" },
    topics: [
      {
        image: "/age-topics/g912-object.webp",
        title: { en: "Objects carry meaning", zh: "物件承载意义" },
        blurb: { en: "The same bowl: kitchenware, evidence, or ritual — it depends.", zh: "同一只碗：餐具、证据、还是礼器——看场合。" },
      },
      {
        image: "/age-topics/g912-translate.webp",
        title: { en: "Translation chooses", zh: "翻译在做选择" },
        blurb: { en: "Every version keeps and loses something different.", zh: "每个译本保留的、丢失的，都不一样。" },
      },
      {
        image: "/age-topics/g912-curate.webp",
        title: { en: "Cite your voice", zh: "为你的声音引用" },
        blurb: { en: "A label separates fact from reading, and names its sources.", zh: "展签区分事实与解读，并标明来源。" },
      },
    ],
    activityLine: {
      en: "90 min + research · one question, two sources, a cited bilingual label.",
      zh: "90 分钟 + 研究 · 一个问题、两份来源、一段有引用的双语展签。",
    },
    featuredResourceSlug: "culture-curator",
    nextSlug: null,
    nextLabel: { en: "Top stage — share what you made", zh: "最高阶段——把你做的分享出来" },
  },
];

export function getLearningPath(slug: string): LearningPath | undefined {
  return learningPaths.find((path) => path.slug === slug);
}

export function getResource(slug: string): LearningResource | undefined {
  return learningResources[slug];
}
