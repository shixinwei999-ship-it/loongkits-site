import type { Lang } from "./i18n";
import type { AgeId } from "./kits";

export interface AgePath {
  id: AgeId;
  slug: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  focalPoint: string;
  label: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  alt: Record<Lang, string>;
}

export const agePaths: AgePath[] = [
  {
    id: "prek",
    slug: "ages-3-6",
    image: { src: "/age-path/prek.webp", width: 1728, height: 1152 },
    focalPoint: "center",
    label: { en: "Ages 3–6", zh: "3–6 岁" },
    title: { en: "Start by touching and naming", zh: "从触摸与命名开始" },
    description: { en: "Large cards, first characters, and culture made tangible.", zh: "大卡片、第一笔汉字，把文化变成能拿在手里的体验。" },
    alt: { en: "Young child learning with Chinese zodiac animal cards", zh: "幼儿用十二生肖卡片学习" },
  },
  {
    id: "g15",
    slug: "ages-6-11",
    image: { src: "/age-path/g15.webp", width: 1728, height: 1152 },
    focalPoint: "center",
    label: { en: "Ages 6–11", zh: "6–11 岁" },
    title: { en: "Make, discover, connect", zh: "动手探索，主动连接" },
    description: { en: "Stories, making, and questions that turn tradition into discovery.", zh: "故事、手作和提问，让传统成为一场主动发现。" },
    alt: { en: "Child making a lantern beside Chinese zodiac learning cards", zh: "孩子制作灯笼并学习十二生肖" },
  },
  {
    id: "g68",
    slug: "ages-11-14",
    image: { src: "/age-path/g68.webp", width: 1728, height: 1152 },
    focalPoint: "center",
    label: { en: "Ages 11–14", zh: "11–14 岁" },
    title: { en: "Read the stories beneath", zh: "读懂故事背后的文化" },
    description: { en: "Cultural timelines, context, and space to form a point of view.", zh: "用文化时间线、背景与讨论，形成自己的理解。" },
    alt: { en: "Student exploring Chinese cultural history through images and a timeline", zh: "学生通过图像和时间线探索中国文化历史" },
  },
  {
    id: "g912",
    slug: "ages-14-18",
    image: { src: "/age-path/g912.webp", width: 1728, height: 1152 },
    focalPoint: "center",
    label: { en: "Ages 14–18", zh: "14–18 岁" },
    title: { en: "Research, reflect, express", zh: "研究、思考、表达" },
    description: { en: "Independent reading and bilingual writing for deeper cultural fluency.", zh: "以独立阅读与双语表达，建立更深的文化理解。" },
    alt: { en: "Older learner writing beside Chinese art reference books", zh: "高年级学习者阅读中国艺术资料并写作" },
  },
];
