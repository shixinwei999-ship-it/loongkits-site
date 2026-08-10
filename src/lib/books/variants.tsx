import type { Book, BookPage } from "@/components/BookReader";
import { lessonPage, gardenPage, unitPage, poemPage, strokePage, speakPage } from "./grade1";
import { grade1Book } from "./grade1";
import { grade2Book } from "./grade2";
import { grade3Book } from "./grade3";
import { grade4Book } from "./grade4";
import { grade5Book } from "./grade5";
import { grade6Book } from "./grade6";
import { grade7Book } from "./grade7";
import { grade8Book } from "./grade8";
import { grade9Book } from "./grade9";
import { grade10Book } from "./grade10";

const gradeBooks: Record<string, Book> = {
  g1: grade1Book, g2: grade2Book, g3: grade3Book, g4: grade4Book, g5: grade5Book,
  g6: grade6Book, g7: grade7Book, g8: grade8Book, g9: grade9Book, g10: grade10Book,
};

// 教师版 = 学生书 + 教案/注解/参考答案 附录
function teacherPages(gradeZh: string): BookPage[] {
  return [
    {
      kind: "reading", title: { en: "Teacher Notes", zh: "教师注解" },
      body: {
        en: <><p className="text-sm leading-relaxed text-ink/80">Teaching notes for {gradeZh}: explain each new character's origin (pictograph/ideographic), model the tone, and pre-teach difficult words before reading.</p><p className="mt-3 text-sm leading-relaxed text-ink/80">注解要点：逐字讲字源（象形/会意），示范声调，阅读前先教难词；古诗先读后解，重在诵读。</p></>,
        zh: <><p className="text-sm leading-relaxed text-ink/80">{gradeZh}教师注解：逐字讲字源（象形/会意），示范声调，阅读前先教难词。</p><p className="mt-3 text-sm leading-relaxed text-ink/80">古诗教学：先诵读、后理解，重在语感；课文教学：先整体感知、后逐段精读。</p></>,
      },
    },
    {
      kind: "reading", title: { en: "Lesson Plan (45 min)", zh: "教案（45 分钟）" },
      body: {
        en: <><ol className="list-decimal space-y-1.5 pl-5 text-sm text-ink/80"><li>Warm-up 5 min: review with a quick quiz.</li><li>Introduction 10 min: present new content with visuals.</li><li>Practice 15 min: paired exercises.</li><li>Production 10 min: students present or write.</li><li>Wrap-up 5 min: exit ticket.</li></ol></>,
        zh: <><ol className="list-decimal space-y-1.5 pl-5 text-sm text-ink/80"><li>热身 5 分钟：小测复习。</li><li>导入 10 分钟：用图呈现新内容。</li><li>练习 15 分钟：结对练习。</li><li>产出 10 分钟：展示或写作。</li><li>总结 5 分钟：出口票。</li></ol></>,
      },
    },
    {
      kind: "reading", title: { en: "Answer Key", zh: "参考答案" },
      body: {
        en: <><p className="text-sm leading-relaxed text-ink/80">Answer key: for each unit quiz, the correct option is marked in the question list; writing answers follow the stroke-order and radical notes; open-ended questions accept reasonable answers.</p></>,
        zh: <><p className="text-sm leading-relaxed text-ink/80">参考答案：每单元小测的正确选项已在题中标出；写字答案见笔顺与部首注；开放题言之成理即可。</p></>,
      },
    },
  ];
}

export const teacherBooks: Record<string, Book> = Object.fromEntries(
  Object.entries(gradeBooks).map(([id, b]) => [
    `t-${id}`,
    { ...b, gradeId: `t-${id}`, title: { en: `${b.title.en} · Teacher`, zh: `${b.title.zh} · 教师用书` }, pages: [...b.pages, ...teacherPages(b.title.zh)] },
  ])
);

// 自学版（成人）：内容不同于儿童，偏生活/工作/HSK
function selfBook(level: string, hsk: string, zhTitle: string, lessons: BookPage[], extra: BookPage[]): Book {
  return {
    gradeId: `s-${level}`,
    title: { en: `Self-Study · ${zhTitle}`, zh: `自学 · ${zhTitle}` },
    subtitle: { en: `HSK ${hsk} · for adults`, zh: `HSK ${hsk} · 成人` },
    pages: [
      { kind: "cover", title: { en: "Cover", zh: "封面" } },
      { kind: "copyright", title: { en: "About", zh: "出版说明" }, body: { en: <>Adult self-study, HSK {hsk}. Practical Chinese for life and work.</>, zh: <>成人自学，HSK {hsk}。生活与工作的实用中文。</> } },
      { kind: "toc", title: { en: "Contents", zh: "目录" } },
      ...lessons,
      ...extra,
      strokePage("自学建议", "成人自学：每天 20 分钟；先听后读再写；用碎片时间复习生词；大胆开口，不怕错。"),
      { kind: "back", title: { en: "Afterword", zh: "后记" }, body: { en: <>Keep going. Consistency beats intensity.</>, zh: <>坚持比强度重要。继续。</> } },
    ],
  };
}

export const selfBooks: Record<string, Book> = {
  "s-beginner": selfBook("beginner", "1-2", "入门", [
    ...lessonPage({ zhTitle: "打招呼与自我介绍", enTitle: "Greetings & Self-intro", pinyin: "dǎ zhāo hu", passage: [["nǐ","你"],["hǎo","好"],["，","，"],["wǒ","我"],["jiào","叫"],["lǐ","李"],["míng","明"],["。","。"]], note: "成人场景：见面、握手、交换姓名与职业。", recognize: [{ch:"你",py:"nǐ",word:"你好"},{ch:"好",py:"hǎo",word:"你好"},{ch:"叫",py:"jiào",word:"名叫"},{ch:"名",py:"míng",word:"名字"}], write: [{ch:"你",py:"nǐ",strokes:7,radical:"亻",word:"你好"},{ch:"好",py:"hǎo",strokes:6,radical:"女",word:"你好"},{ch:"叫",py:"jiào",strokes:5,radical:"口",word:"叫做"},{ch:"名",py:"míng",strokes:6,radical:"口",word:"名字"}], practice: ["和同伴互相介绍。","用「我叫……」造句。","问对方名字并复述。"], think: "你的中文名是什么？" }),
    ...lessonPage({ zhTitle: "点餐与买单", enTitle: "Ordering & Paying", pinyin: "diǎn cān", passage: [["wǒ","我"],["yào","要"],["yí","一"],["gè","个"],["宫","宫"],["bǎo","保"],["jī","鸡"],["dīng","丁"],["。","。"]], note: "实用：看菜单、点菜、问价、买单、扫码支付。", recognize: [{ch:"菜",py:"cài",word:"菜单"},{ch:"单",py:"dān",word:"菜单"},{ch:"买",py:"mǎi",word:"买单"},{ch:"钱",py:"qián",word:"钱"}], write: [{ch:"菜",py:"cài",strokes:11,radical:"艹",word:"点菜"},{ch:"单",py:"dān",strokes:8,radical:"十",word:"菜单"},{ch:"买",py:"mǎi",strokes:6,radical:"乛",word:"买单"},{ch:"钱",py:"qián",strokes:10,radical:"钅",word:"付钱"}], practice: ["模拟点餐对话。","问：多少钱？","用扫码支付怎么说？"], think: "你最爱点什么菜？" }),
  ], [
    speakPage("机场与酒店", "成人场景：值机、过关、入住。", ["说清楚护照和订单。", "听不懂请对方慢说。"], ["我要办理入住。", "我的房间号是多少？", "请问登机口在哪里？"]),
  ]),
  "s-elementary": selfBook("elementary", "3-4", "初级", [
    ...lessonPage({ zhTitle: "问路与打车", enTitle: "Directions & Taxi", pinyin: "wèn lù", passage: [["qǐng","请"],["wèn","问"],["，","，"],["dì","地"],["tiě","铁"],["zǒ","站"],["zài","在"],["nǎ","哪"],["lǐ","里"],["？","？"]], note: "实用：问路、打车、用导航、说目的地。", recognize: [{ch:"铁",py:"tiě",word:"地铁"},{ch:"站",py:"zhàn",word:"车站"},{ch:"哪",py:"nǎ",word:"哪里"},{ch:"打",py:"dǎ",word:"打车"}], write: [{ch:"铁",py:"tiě",strokes:10,radical:"钅",word:"地铁"},{ch:"站",py:"zhàn",strokes:10,radical:"立",word:"车站"},{ch:"哪",py:"nǎ",strokes:9,radical:"口",word:"哪里"},{ch:"打",py:"dǎ",strokes:5,radical:"扌",word:"打车"}], practice: ["模拟问路。","用「往前/往左/往右」指路。","打车说目的地。"], think: "你用导航多吗？" }),
    ...lessonPage({ zhTitle: "工作与会议", enTitle: "Work & Meetings", pinyin: "gōng zuò", passage: [["wǒ","我"],["jīn","今"],["tiān","天"],["yǒu","有"],["huì","会"],["yì","议"],["。","。"]], note: "职场：开会、邮件、电话、请假。", recognize: [{ch:"会",py:"huì",word:"会议"},{ch:"议",py:"yì",word:"会议"},{ch:"邮",py:"yóu",word:"邮件"},{ch:"假",py:"jià",word:"请假"}], write: [{ch:"会",py:"huì",strokes:6,radical:"人",word:"开会"},{ch:"议",py:"yì",strokes:5,radical:"讠",word:"议论"},{ch:"邮",py:"yóu",strokes:7,radical:"阝",word:"邮件"},{ch:"假",py:"jià",strokes:11,radical:"亻",word:"请假"}], practice: ["写一封请假邮件。","模拟电话会议。","用「因为……所以……」说明。"], think: "你工作中最常用的中文是什么？" }),
  ], [
    gardenPage("初级", ["词汇：通勤、加班、报销、客户。","句型：麻烦您……；请问……；不好意思……。","HSK3-4 语法：把字句、被字句。","文化：职场称呼与客气。"], { zhTitle: "静夜思", lines: ["床前明月光，", "疑是地上霜。"] }),
  ]),
  "s-intermediate": selfBook("intermediate", "5-6", "中级", [
    ...lessonPage({ zhTitle: "商务谈判", enTitle: "Business Negotiation", pinyin: "shāng wù tán pàn", passage: [["wǒ","我"],["men","们"],["xī","希"],["wàng","望"],["hé","合"],["zuò","作"],["。","。"]], note: "商务：报价、还价、合同、合作。", recognize: [{ch:"谈",py:"tán",word:"谈判"},{ch:"判",py:"pàn",word:"谈判"},{ch:"合",py:"hé",word:"合作"},{ch:"同",py:"tóng",word:"合同"}], write: [{ch:"谈",py:"tán",strokes:10,radical:"讠",word:"谈话"},{ch:"判",py:"pàn",strokes:7,radical:"刂",word:"判断"},{ch:"合",py:"hé",strokes:6,radical:"口",word:"合作"},{ch:"同",py:"tóng",strokes:6,radical:"口",word:"合同"}], practice: ["模拟报价还价。","读一段合同条款。","用「如果……就……」谈条件。"], think: "谈判中最重要的是什么？" }),
    ...lessonPage({ zhTitle: "看新闻读中国", enTitle: "Reading News", pinyin: "kàn xīn wén", passage: [["jīn","今"],["tiān","天"],["de","的"],["xīn","新"],["wén","闻"],["shuō","说"],["……","…"]], note: "读新闻标题，抓关键词，理解时事词汇。", recognize: [{ch:"新",py:"xīn",word:"新闻"},{ch:"闻",py:"wén",word:"新闻"},{ch:"经",py:"jīng",word:"经济"},{ch:"科",py:"kē",word:"科技"}], write: [{ch:"新",py:"xīn",strokes:13,radical:"斤",word:"新闻"},{ch:"闻",py:"wén",strokes:9,radical:"门",word:"见闻"},{ch:"经",py:"jīng",strokes:8,radical:"纟",word:"经济"},{ch:"科",py:"kē",strokes:9,radical:"禾",word:"科技"}], practice: ["读一条新闻标题。","找出关键词。","用自己的话复述。"], think: "你关注哪类新闻？" }),
  ], [
    gardenPage("中级", ["词汇：通胀、供应链、创新、可持续。","句型：不仅……而且……；与其……不如……。","HSK5-6 语法：书面语体。","文化：中国商业礼仪。"], { zhTitle: "登鹳雀楼", lines: ["白日依山尽，", "黄河入海流。"] }),
  ]),
  "s-advanced": selfBook("advanced", "7-9", "高级", [
    ...lessonPage({ zhTitle: "读《论语》谈管理", enTitle: "Analects & Management", pinyin: "lún yǔ", passage: [["jǐ","己"],["suǒ","所"],["bú","不"],["yù","欲"],["，","，"],["wù","勿"],["shī","施"],["yú","于"],["rén","人"],["。","。"]], note: "己所不欲勿施于人。把经典用于现代管理与人际。", recognize: [{ch:"己",py:"jǐ",word:"自己"},{ch:"欲",py:"yù",word:"欲望"},{ch:"勿",py:"wù",word:"切勿"},{ch:"施",py:"shī",word:"施加"}], write: [{ch:"己",py:"jǐ",strokes:3,radical:"己",word:"自己"},{ch:"欲",py:"yù",strokes:11,radical:"欠",word:"欲望"},{ch:"勿",py:"wù",strokes:4,radical:"勹",word:"切勿"},{ch:"施",py:"shī",strokes:9,radical:"方",word:"实施"}], practice: ["解释「己所不欲勿施于人」。","举一个管理中的例子。","用文言写一句座右铭。"], think: "这句对领导力有何启发？" }),
    ...lessonPage({ zhTitle: "议论文写作", enTitle: "Argumentative Writing", pinyin: "yì lùn wén", passage: [["wèi","为"],["shén","什"],["me","么"],["yào","要"],["du","读"],["shū","书"],["？","？"]], note: "成人写作：论点、论据、论证；驳论与立论。", recognize: [{ch:"论",py:"lùn",word:"论点"},{ch:"据",py:"jù",word:"论据"},{ch:"驳",py:"bó",word:"反驳"},{ch:"立",py:"lì",word:"立论"}], write: [{ch:"论",py:"lùn",strokes:6,radical:"讠",word:"议论"},{ch:"据",py:"jù",strokes:11,radical:"扌",word:"根据"},{ch:"驳",py:"bó",strokes:7,radical:"马",word:"反驳"},{ch:"立",py:"lì",strokes:5,radical:"立",word:"立论"}], practice: ["写一个论点。","给论点配两个论据。","写一段驳论。"], think: "读书的目的什么？" }),
  ], [
    gardenPage("高级", ["词汇：悖论、博弈、赋能、内卷。","句型：诚然……然而……；归根结底……。","HSK7-9：学术与书面语。","文化：中国哲学关键词。"], { zhTitle: "劝学", lines: ["学不可以已。", "青，取之于蓝，", "而青于蓝。"] }),
  ]),
};
