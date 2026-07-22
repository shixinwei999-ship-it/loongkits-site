// 中文学习等级体系：用“等级 1–10”取代“按年龄”，因为十几岁才开始学的人也该从 1 级走起。
// 结构 = 篇章(band) → 等级(level) → 课(lesson)。每课有“学什么 + 练什么(作业)”，每级有可发音词与本级产出。
// 文化是练这些语言点的语境，不是主角。可发音词由 SpeakButton 用浏览器中文语音朗读。

import type { Lang } from "./i18n";
import type { Word } from "./chineseCurriculum";

type Bi<T> = Record<Lang, T>;

export interface Lesson {
  title: Bi<string>;
  learn: Bi<string>;
  practice: Bi<string>; // 作业 / 练习
}

export interface Level {
  n: number;
  band: BandId;
  title: Bi<string>;
  tagline: Bi<string>;
  lessons: Lesson[];
  words: Word[];
  outcome: Bi<string>;
  resourceSlug: string | null; // 配套可下载练习包，null = 暂无独立 PDF（用互动课/作业代替）
  image: string | null; // 氛围图，复用既有编辑风素材
}

export type BandId = "foundations" | "going" | "building" | "expanding" | "owning";

export interface Band {
  id: BandId;
  index: string;
  name: Bi<string>;
  motto: Bi<string>;
  levels: number[];
  accent: string; // tailwind 文本/边框色类，用于篇章标识
}

export const bands: Band[] = [
  {
    id: "foundations",
    index: "I",
    name: { en: "Foundations", zh: "启蒙篇" },
    motto: { en: "Hear it, say it, write the first strokes.", zh: "听得到、说得出、写下第一笔。" },
    levels: [1, 2],
    accent: "text-rose-600",
  },
  {
    id: "going",
    index: "II",
    name: { en: "Getting Going", zh: "入门篇" },
    motto: { en: "Build words from parts, speak in short sentences.", zh: "用部件拼字，用短句开口。" },
    levels: [3, 4],
    accent: "text-orange",
  },
  {
    id: "building",
    index: "III",
    name: { en: "Building", zh: "初级篇" },
    motto: { en: "Read short texts, write a paragraph, live inside a story.", zh: "读短文、写一段、住进故事里。" },
    levels: [5, 6],
    accent: "text-teal",
  },
  {
    id: "expanding",
    index: "IV",
    name: { en: "Expanding", zh: "中级篇" },
    motto: { en: "Argue a point, trace history, translate with intent.", zh: "立观点、溯历史、有意图地翻译。" },
    levels: [7, 8],
    accent: "text-amber-600",
  },
  {
    id: "owning",
    index: "V",
    name: { en: "Owning It", zh: "高级篇" },
    motto: { en: "Read the classics, create your own bilingual voice.", zh: "读经典、长出属于自己的双语声音。" },
    levels: [9, 10],
    accent: "text-rose-700",
  },
];

export const levels: Level[] = [
  {
    n: 1,
    band: "foundations",
    title: { en: "Sounds & tones", zh: "声音与声调" },
    tagline: { en: "Your ear comes first. Four tones, twenty-one onsets, the open vowels.", zh: "先练耳朵。四个声调、二十一个声母、敞开的韵母。" },
    lessons: [
      {
        title: { en: "Lesson 1 · The four tones", zh: "第一课 · 四个声调" },
        learn: { en: "Mandarin uses pitch to tell words apart. mā, má, mǎ, mà are four different words.", zh: "普通话靠音高区分字。mā、má、mǎ、mà 是四个不同的字。" },
        practice: { en: "Listen and point: tap each tone tile, then say the matching gesture out loud.", zh: "听音指调：点每个声调格，再边做手势边读出来。" },
      },
      {
        title: { en: "Lesson 2 · Onsets & vowels", zh: "第二课 · 声母与韵母" },
        learn: { en: "Every syllable is an onset plus a vowel core. Hear b-, p-, m-, f- and a, o, e, i, u, ü.", zh: "每个音节 = 声母 + 韵母。听 b p m f 和 a o e i u ü。" },
        practice: { en: "Sound drill: read five initials and five finals aloud, record yourself, compare.", zh: "发音操：大声读五个声母、五个韵母，录下来对比。" },
      },
      {
        title: { en: "Lesson 3 · Blend & greet", zh: "第三课 · 拼读与问候" },
        learn: { en: "Put them together: b + a = bā. Then your first words: 你好, 谢谢, 再见.", zh: "拼起来：b + a = 八。然后是第一批词：你好、谢谢、再见。" },
        practice: { en: "Greet three people today in Chinese and write down their reaction.", zh: "今天用中文跟三个人打招呼，记下他们的反应。" },
      },
    ],
    words: [
      { char: "妈", pinyin: "mā", en: { en: "mum", zh: "妈" } },
      { char: "好", pinyin: "hǎo", en: { en: "good", zh: "好" } },
      { char: "你", pinyin: "nǐ", en: { en: "you", zh: "你" } },
      { char: "谢", pinyin: "xiè", en: { en: "thanks", zh: "谢" } },
      { char: "八", pinyin: "bā", en: { en: "eight", zh: "八" } },
    ],
    outcome: { en: "You can hear the four tones and greet someone.", zh: "你能听辨四声，并跟人打招呼。" },
    resourceSlug: "zodiac-animals",
    image: "/age-topics/prek-greet.webp",
  },
  {
    n: 2,
    band: "foundations",
    title: { en: "Strokes & first characters", zh: "笔画与第一批字" },
    tagline: { en: "A character is just a few strokes in order. Start with sixteen.", zh: "一个字不过是几笔、按顺序。先从十六个开始。" },
    lessons: [
      {
        title: { en: "Lesson 1 · The eight strokes", zh: "第一课 · 八个笔画" },
        learn: { en: "Horizontal, vertical, left-fall, right-fall, dot, rising, turn, hook — the alphabet of writing.", zh: "横、竖、撇、捺、点、提、折、钩——写字的字母表。" },
        practice: { en: "Trace each stroke in the air, then on paper, saying its name as you go.", zh: "先在空中、再在纸上描每个笔画，边描边念名字。" },
      },
      {
        title: { en: "Lesson 2 · Numbers & people", zh: "第二课 · 数字与人" },
        learn: { en: "一 二 三 人 大 小 — characters you can already picture.", zh: "一 二 三 人 大 小——你已经能想象出来的字。" },
        practice: { en: "Write each character three times; circle the one that felt hardest.", zh: "每个字写三遍，圈出最难写的那个。" },
      },
      {
        title: { en: "Lesson 3 · Nature words", zh: "第三课 · 天地字" },
        learn: { en: "日 月 水 火 山 木 — old pictures of the world, now characters.", zh: "日 月 水 火 山 木——曾经是世界图画，如今是字。" },
        practice: { en: "Match each character to a drawing, then say it aloud.", zh: "把每个字和一幅画配对，再读出声。" },
      },
    ],
    words: [
      { char: "一", pinyin: "yī", en: { en: "one", zh: "一" } },
      { char: "人", pinyin: "rén", en: { en: "person", zh: "人" } },
      { char: "水", pinyin: "shuǐ", en: { en: "water", zh: "水" } },
      { char: "火", pinyin: "huǒ", en: { en: "fire", zh: "火" } },
      { char: "山", pinyin: "shān", en: { en: "mountain", zh: "山" } },
      { char: "大", pinyin: "dà", en: { en: "big", zh: "大" } },
    ],
    outcome: { en: "You can write 16 characters stroke by stroke.", zh: "你能一笔一笔写出 16 个字。" },
    resourceSlug: "new-year-lantern",
    image: "/age-topics/prek-zodiac.webp",
  },
  {
    n: 3,
    band: "going",
    title: { en: "Radicals & how characters mean", zh: "偏旁与字义" },
    tagline: { en: "The side of a character whispers what it's about.", zh: "字的偏旁，悄悄告诉你它和什么有关。" },
    lessons: [
      {
        title: { en: "Lesson 1 · The meaning side", zh: "第一课 · 表意的偏旁" },
        learn: { en: "氵 water, 亻 person, 木 tree, 口 mouth — the radical hints at the meaning.", zh: "氵水、亻人、木树、口嘴——偏旁提示字义。" },
        practice: { en: "Sort twelve characters into their radical families.", zh: "把十二个字按偏旁归类。" },
      },
      {
        title: { en: "Lesson 2 · The sound side", zh: "第二课 · 表音的部件" },
        learn: { en: "Many characters borrow a part for sound: 妈 吗 码 all carry 马 mǎ.", zh: "许多字借一个部件表音：妈、吗、码都带“马”mǎ。" },
        practice: { en: "Find three characters that share a sound part and read them.", zh: "找三个共用表音部件的字，读出来。" },
      },
    ],
    words: [
      { char: "海", pinyin: "hǎi", en: { en: "sea", zh: "海" } },
      { char: "说", pinyin: "shuō", en: { en: "speak", zh: "说" } },
      { char: "林", pinyin: "lín", en: { en: "woods", zh: "林" } },
      { char: "吃", pinyin: "chī", en: { en: "eat", zh: "吃" } },
      { char: "妈", pinyin: "mā", en: { en: "mum", zh: "妈" } },
    ],
    outcome: { en: "You can guess a new character's meaning from its radical.", zh: "你能从偏旁猜一个新字的意思。" },
    resourceSlug: null,
    image: "/age-topics/prek-red.webp",
  },
  {
    n: 4,
    band: "going",
    title: { en: "Everyday sentences", zh: "日常短句" },
    tagline: { en: "From words to sentences: who, what, where, how many.", zh: "从词到句：谁、什么、在哪、几个。" },
    lessons: [
      {
        title: { en: "Lesson 1 · Me & my family", zh: "第一课 · 我和我的家" },
        learn: { en: "我 是 … / 我 有 … / 这 是 我 的 妈妈. Subject–verb–object, no conjugation.", zh: "我是…／我有…／这是我的妈妈。主—谓—宾，没有变位。" },
        practice: { en: "Write four sentences introducing your family; read them aloud.", zh: "写四句话介绍家人，读出声。" },
      },
      {
        title: { en: "Lesson 2 · Time & numbers", zh: "第二课 · 时间与数字" },
        learn: { en: "Count to 100, tell the time, say the date: 今天 是 星期几？", zh: "数到 100、看时间、说日期：今天是星期几？" },
        practice: { en: "Ask and answer: what time / what day / how many — with a partner.", zh: "和同伴互问互答：几点／星期几／几个。" },
      },
    ],
    words: [
      { char: "我", pinyin: "wǒ", en: { en: "I / me", zh: "我" } },
      { char: "是", pinyin: "shì", en: { en: "to be", zh: "是" } },
      { char: "家", pinyin: "jiā", en: { en: "home", zh: "家" } },
      { char: "今天", pinyin: "jīn tiān", en: { en: "today", zh: "今天" } },
      { char: "几", pinyin: "jǐ", en: { en: "how many", zh: "几" } },
    ],
    outcome: { en: "You can introduce yourself and ask simple questions.", zh: "你能自我介绍、问简单问题。" },
    resourceSlug: null,
    image: "/age-topics/g15-reunion.webp",
  },
  {
    n: 5,
    band: "building",
    title: { en: "Reading & writing short texts", zh: "读写短文" },
    tagline: { en: "Sentences become a paragraph you can read and write.", zh: "句子连成一段你能读、能写的文字。" },
    lessons: [
      {
        title: { en: "Lesson 1 · Picture to paragraph", zh: "第一课 · 从图到段" },
        learn: { en: "Describe a picture in 4–5 sentences using 在 / 有 / 很.", zh: "用“在／有／很”把一幅图写成 4–5 句。" },
        practice: { en: "Look at a scene, write five sentences, swap with a partner to read.", zh: "看一个场景写五句，和同伴交换阅读。" },
      },
      {
        title: { en: "Lesson 2 · A small diary", zh: "第二课 · 小日记" },
        learn: { en: "Past with 了, feelings with 觉得. Write what you did today.", zh: "用“了”表过去，用“觉得”表感受。写今天做了什么。" },
        practice: { en: "Keep a three-line diary for three days in Chinese.", zh: "用中文连写三天、每天三行的日记。" },
      },
    ],
    words: [
      { char: "在", pinyin: "zài", en: { en: "at / -ing", zh: "在" } },
      { char: "有", pinyin: "yǒu", en: { en: "have / there is", zh: "有" } },
      { char: "很", pinyin: "hěn", en: { en: "very", zh: "很" } },
      { char: "了", pinyin: "le", en: { en: "(done)", zh: "了" } },
      { char: "觉得", pinyin: "jué de", en: { en: "feel", zh: "觉得" } },
    ],
    outcome: { en: "You can read and write a short paragraph.", zh: "你能读写一小段话。" },
    resourceSlug: null,
    image: "/age-topics/g15-sequence.webp",
  },
  {
    n: 6,
    band: "building",
    title: { en: "Stories & culture as context", zh: "故事与文化语境" },
    tagline: { en: "Read a folk tale, answer why, and meet the festival words.", zh: "读一则民间故事、回答“为什么”，认识节日词。" },
    lessons: [
      {
        title: { en: "Lesson 1 · The story of Nian", zh: "第一课 · 年的故事" },
        learn: { en: "A graded reader on why red and loud sounds appear at New Year.", zh: "分级读物：为什么过年有红色和响声。" },
        practice: { en: "Retell the story in your own words; mark fact vs. folktale.", zh: "用自己的话复述；标出哪些是事实、哪些是传说。" },
      },
      {
        title: { en: "Lesson 2 · Festival reading", zh: "第二课 · 节日阅读" },
        learn: { en: "Spring Festival & Lantern Festival vocabulary inside a real text.", zh: "在真实文本里学春节与元宵节词汇。" },
        practice: { en: "Read, then write three comprehension answers in full sentences.", zh: "读后，用完整句子写三条理解题答案。" },
      },
    ],
    words: [
      { char: "春节", pinyin: "chūn jié", en: { en: "Spring Festival", zh: "春节" } },
      { char: "福", pinyin: "fú", en: { en: "fortune", zh: "福" } },
      { char: "灯", pinyin: "dēng", en: { en: "lantern", zh: "灯" } },
      { char: "团圆", pinyin: "tuán yuán", en: { en: "reunion", zh: "团圆" } },
      { char: "故事", pinyin: "gù shi", en: { en: "story", zh: "故事" } },
    ],
    outcome: { en: "You can read a folk tale and explain it.", zh: "你能读一则民间故事并讲清楚。" },
    resourceSlug: "festival-detective",
    image: "/age-topics/g15-riddle.webp",
  },
  {
    n: 7,
    band: "expanding",
    title: { en: "Opinion & longer writing", zh: "观点与较长写作" },
    tagline: { en: "Say what you think, and back it up — in a full paragraph.", zh: "说出你的想法，并支撑它——写成完整一段。" },
    lessons: [
      {
        title: { en: "Lesson 1 · Because / so / but", zh: "第一课 · 因为／所以／但是" },
        learn: { en: "Connectors that let you argue: 因为…所以… / 虽然…但是…", zh: "让你能论证的连接词：因为…所以…／虽然…但是…" },
        practice: { en: "Write an opinion paragraph on a festival custom you like.", zh: "就一个你喜欢的节日习俗写一段观点。" },
      },
      {
        title: { en: "Lesson 2 · Compare two things", zh: "第二课 · 比较两件事" },
        learn: { en: "比 / 跟…一样 / 更 — comparing across cultures.", zh: "比／跟…一样／更——跨文化比较。" },
        practice: { en: "Compare a Chinese and a local celebration in six sentences.", zh: "用六句话比较一个中国节日和当地节日。" },
      },
    ],
    words: [
      { char: "因为", pinyin: "yīn wèi", en: { en: "because", zh: "因为" } },
      { char: "所以", pinyin: "suǒ yǐ", en: { en: "so", zh: "所以" } },
      { char: "但是", pinyin: "dàn shì", en: { en: "but", zh: "但是" } },
      { char: "比", pinyin: "bǐ", en: { en: "than", zh: "比" } },
      { char: "认为", pinyin: "rèn wéi", en: { en: "think that", zh: "认为" } },
    ],
    outcome: { en: "You can write a reasoned paragraph.", zh: "你能写一段有理有据的话。" },
    resourceSlug: null,
    image: "/age-topics/g68-region.webp",
  },
  {
    n: 8,
    band: "expanding",
    title: { en: "History & how characters evolved", zh: "历史与汉字演化" },
    tagline: { en: "Follow a character from oracle bone to today; read idiom stories.", zh: "跟一个字从甲骨文走到今天；读成语故事。" },
    lessons: [
      {
        title: { en: "Lesson 1 · The shape of time", zh: "第一课 · 时间的形状" },
        learn: { en: "Oracle bone → bronze → seal → clerical → regular: why shapes changed.", zh: "甲骨文→金文→小篆→隶书→楷书：字形为什么变。" },
        practice: { en: "Trace one character's five stages and write what changed.", zh: "描一个字演变的五个阶段，写下变了什么。" },
      },
      {
        title: { en: "Lesson 2 · Idioms (chéngyǔ)", zh: "第二课 · 成语" },
        learn: { en: "Four-character idioms carry whole stories: 画蛇添足, 守株待兔.", zh: "四字成语装着整个故事：画蛇添足、守株待兔。" },
        practice: { en: "Learn two idioms; use each in an original sentence.", zh: "学两个成语，各造一个原创句。" },
      },
    ],
    words: [
      { char: "字", pinyin: "zì", en: { en: "character", zh: "字" } },
      { char: "历史", pinyin: "lì shǐ", en: { en: "history", zh: "历史" } },
      { char: "成语", pinyin: "chéng yǔ", en: { en: "idiom", zh: "成语" } },
      { char: "变化", pinyin: "biàn huà", en: { en: "change", zh: "变化" } },
      { char: "龙", pinyin: "lóng", en: { en: "dragon", zh: "龙" } },
    ],
    outcome: { en: "You can read an idiom and place a character in history.", zh: "你能读懂成语，并把一个字放进历史。" },
    resourceSlug: "culture-in-motion",
    image: "/age-topics/g68-silk.webp",
  },
  {
    n: 9,
    band: "owning",
    title: { en: "Classical taste & translation", zh: "文言味道与翻译" },
    tagline: { en: "Touch classical Chinese; translate with intent, not word-for-word.", zh: "触碰文言文；有意图地翻译，而非逐字对译。" },
    lessons: [
      {
        title: { en: "Lesson 1 · A line of classical", zh: "第一课 · 一句文言" },
        learn: { en: "Short, dense, beautiful: 学而时习之，不亦说乎？", zh: "短、密、美：学而时习之，不亦说乎？" },
        practice: { en: "Render one classical line into modern Chinese and into English.", zh: "把一句文言译成现代汉语和英文。" },
      },
      {
        title: { en: "Lesson 2 · The translator's choice", zh: "第二课 · 译者的取舍" },
        learn: { en: "Literal vs. fluent — what each keeps and loses.", zh: "直译与意译——各自保留和丢失什么。" },
        practice: { en: "Translate a greeting two ways; write which you'd choose and why.", zh: "把一句问候译两种，写下你选哪个、为什么。" },
      },
    ],
    words: [
      { char: "学", pinyin: "xué", en: { en: "study", zh: "学" } },
      { char: "文", pinyin: "wén", en: { en: "writing", zh: "文" } },
      { char: "译", pinyin: "yì", en: { en: "translate", zh: "译" } },
      { char: "意", pinyin: "yì", en: { en: "meaning", zh: "意" } },
      { char: "古", pinyin: "gǔ", en: { en: "ancient", zh: "古" } },
    ],
    outcome: { en: "You can read a classical line and translate with intent.", zh: "你能读一句文言，并有意图地翻译。" },
    resourceSlug: null,
    image: "/age-topics/g912-object.webp",
  },
  {
    n: 10,
    band: "owning",
    title: { en: "Research & your own voice", zh: "研究与你的声音" },
    tagline: { en: "Curate, cite, and present — a bilingual piece that is yours.", zh: "策展、引用、呈现——一件属于你的双语作品。" },
    lessons: [
      {
        title: { en: "Lesson 1 · Read like a curator", zh: "第一课 · 像策展人那样读" },
        learn: { en: "Evaluate sources; separate fact from interpretation; cite.", zh: "评估来源；区分事实与诠释；引用。" },
        practice: { en: "Annotate two sources: who wrote them, for whom, what's fact.", zh: "批注两份来源：谁写的、写给谁、哪些是事实。" },
      },
      {
        title: { en: "Lesson 2 · Make your piece", zh: "第二课 · 做出你的作品" },
        learn: { en: "A cited bilingual exhibit label, talk, or visual essay.", zh: "一段有引用的双语展签、讲稿或视觉文章。" },
        practice: { en: "Produce a 150–250 word bilingual label on one object or custom.", zh: "就一件器物或习俗，产出 150–250 字双语展签。" },
      },
    ],
    words: [
      { char: "研", pinyin: "yán", en: { en: "research", zh: "研" } },
      { char: "引", pinyin: "yǐn", en: { en: "cite", zh: "引" } },
      { char: "声", pinyin: "shēng", en: { en: "voice", zh: "声" } },
      { char: "展", pinyin: "zhǎn", en: { en: "exhibit", zh: "展" } },
      { char: "证", pinyin: "zhèng", en: { en: "evidence", zh: "证" } },
    ],
    outcome: { en: "You can present a sourced, bilingual piece of your own.", zh: "你能呈现一件有来源、双语的、你自己的作品。" },
    resourceSlug: "culture-curator",
    image: "/age-topics/g912-curate.webp",
  },
];

export function getLevel(n: number): Level | undefined {
  return levels.find((l) => l.n === n);
}

export function getBand(id: BandId): Band | undefined {
  return bands.find((b) => b.id === id);
}
