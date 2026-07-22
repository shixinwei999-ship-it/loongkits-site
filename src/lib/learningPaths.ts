// 学习路径与资源目录：四个年龄区是独立课程空间，不是商品筛选壳。
// 所有事实表述都带文化边界说明，避免把单一地方习俗说成“全部中国文化”。

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
  learningGoals: Bi<string[]>;
  duration: Bi<string>;
  pageCount: number;
  format: Bi<string>;
  access: "free";
  previews: ResourcePreview[];
  downloads: ResourceDownloads;
}

export interface JourneyStep {
  order: number;
  title: Bi<string>;
  knowledge: Bi<string>;
  inquiry: Bi<string>;
  boundary: Bi<string>;
}

export interface LearningActivity {
  duration: Bi<string>;
  materials: Bi<string[]>;
  learnerAction: Bi<string>;
  familyPrompt: Bi<string>;
  classroomAdaptation: Bi<string>;
}

export interface LearningPath {
  id: AgeId;
  slug: string;
  watermark: string;
  hero: Bi<{ eyebrow: string; title: string; introduction: string }>;
  image: { src: string; width: number; height: number };
  imageAlt: Bi<string>;
  profile: Bi<string>;
  goals: Bi<string[]>;
  journey: JourneyStep[];
  activity: LearningActivity;
  featuredResourceSlug: string;
  extraResourceSlugs: string[];
  nextSlug: string | null;
  nextLabel: Bi<string>;
  relatedKitIds: string[];
}

export const learningResources: Record<string, LearningResource> = {
  "zodiac-animals": {
    slug: "zodiac-animals",
    age: "prek",
    topic: { en: "The 12 zodiac animals", zh: "十二生肖" },
    title: { en: "Meet the 12 Zodiac Animals", zh: "认识十二生肖" },
    summary: {
      en: "A four-page bilingual starter for naming, tracing, and matching the zodiac animals out loud.",
      zh: "四页双语入门练习：说出名字、描红、连线，把十二生肖说出口。",
    },
    learningGoals: {
      en: ["Name several zodiac animals in Chinese", "Trace four key characters", "Say which animal they like and why"],
      zh: ["说出几个生肖的中文名", "描红四个重点汉字", "说出自己喜欢哪个生肖、为什么"],
    },
    duration: { en: "15–20 minutes", zh: "15–20 分钟" },
    pageCount: 4,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/zodiac-animals/v1/preview-cover.webp", alt: { en: "Zodiac starter worksheet cover", zh: "生肖入门练习包封面" } },
      { src: "/resources/zodiac-animals/v1/preview-vocabulary.webp", alt: { en: "Twelve zodiac vocabulary cards", zh: "十二生肖词汇卡" } },
    ],
    downloads: {
      a4: { href: "/resources/zodiac-animals/v1/zodiac-animals-starter-a4.pdf" },
      letter: { href: "/resources/zodiac-animals/v1/zodiac-animals-starter-letter.pdf" },
    },
  },
  "new-year-lantern": {
    slug: "new-year-lantern",
    age: "prek",
    topic: { en: "Red, lanterns, and good wishes", zh: "红色、灯笼与祝福" },
    title: { en: "Hello New Year · Lantern Pack", zh: "新年好 · 灯笼活动包" },
    summary: {
      en: "A three-page pack for touching, counting, and folding — red, the word 家, and a simple paper lantern.",
      zh: "三页触摸、数数、折叠活动：认识红色、汉字“家”，折一盏简单纸灯笼。",
    },
    learningGoals: {
      en: ["Connect red with good wishes", "Count lanterns up to five", "Fold and make a small lantern"],
      zh: ["把红色和美好祝愿联系起来", "数到五个灯笼", "折并做出一盏小灯笼"],
    },
    duration: { en: "10–15 minutes", zh: "10–15 分钟" },
    pageCount: 3,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/new-year-lantern/v1/preview-cover.webp", alt: { en: "New Year lantern pack cover", zh: "新年灯笼活动包封面" } },
      { src: "/resources/new-year-lantern/v1/preview-activity.webp", alt: { en: "Count and make activity page", zh: "数一数与做一做活动页" } },
    ],
    downloads: {
      a4: { href: "/resources/new-year-lantern/v1/new-year-lantern-a4.pdf" },
      letter: { href: "/resources/new-year-lantern/v1/new-year-lantern-letter.pdf" },
    },
  },
  "festival-detective": {
    slug: "festival-detective",
    age: "g15",
    topic: { en: "Spring Festival and Lantern Festival", zh: "春节与元宵节" },
    title: { en: "Festival Detective", zh: "节日小侦探" },
    summary: {
      en: "A four-page booklet: order the festival, read 福 / 春 / 灯, solve riddles, and interview one family custom.",
      zh: "四页小册子：排节日顺序、读“福/春/灯”、猜灯谜、采访一个家庭习惯。",
    },
    learningGoals: {
      en: ["Sequence a festival from preparation to lanterns", "Tell a folk story apart from a family custom", "Read three festival characters and try a riddle"],
      zh: ["把节日从准备到赏灯排成顺序", "区分民间故事与家庭习惯", "认读三个节日汉字并试猜灯谜"],
    },
    duration: { en: "25–35 minutes", zh: "25–35 分钟" },
    pageCount: 4,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/festival-detective/v1/preview-cover.webp", alt: { en: "Festival Detective cover", zh: "节日小侦探封面" } },
      { src: "/resources/festival-detective/v1/preview-activity.webp", alt: { en: "Sequence and riddle activity page", zh: "排顺序与猜灯谜活动页" } },
    ],
    downloads: {
      a4: { href: "/resources/festival-detective/v1/festival-detective-a4.pdf" },
      letter: { href: "/resources/festival-detective/v1/festival-detective-letter.pdf" },
    },
  },
  "culture-in-motion": {
    slug: "culture-in-motion",
    age: "g68",
    topic: { en: "Festival, zodiac, and the Silk Roads", zh: "节日、生肖与丝绸之路" },
    title: { en: "Culture in Motion", zh: "文化在流动" },
    summary: {
      en: "A five-page inquiry pack with a timeline, a map task, source comparison, and a claim-evidence organizer.",
      zh: "五页探究包：时间线、地图任务、资料比较，以及“观点—证据”整理表。",
    },
    learningGoals: {
      en: ["Explain how a tradition varies by place", "Read the zodiac as a 12-year cycle, not a personality rule", "Back one claim with two pieces of evidence"],
      zh: ["解释传统如何随地方而变化", "把生肖理解为十二年循环，而非性格规则", "用两条证据支持一个观点"],
    },
    duration: { en: "45–60 minutes", zh: "45–60 分钟" },
    pageCount: 5,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/culture-in-motion/v1/preview-cover.webp", alt: { en: "Culture in Motion cover", zh: "文化在流动封面" } },
      { src: "/resources/culture-in-motion/v1/preview-activity.webp", alt: { en: "Map and evidence activity page", zh: "地图与证据活动页" } },
    ],
    downloads: {
      a4: { href: "/resources/culture-in-motion/v1/culture-in-motion-a4.pdf" },
      letter: { href: "/resources/culture-in-motion/v1/culture-in-motion-letter.pdf" },
    },
  },
  "culture-curator": {
    slug: "culture-curator",
    age: "g912",
    topic: { en: "Research, translation, and expression", zh: "研究、翻译与表达" },
    title: { en: "Curating Chinese Culture", zh: "策展中国文化" },
    summary: {
      en: "A six-page research pack: evaluate sources, analyze one object, model citations, and write a bilingual exhibit label.",
      zh: "六页研究包：评估来源、分析一件器物、学习引用，并写一段双语展签。",
    },
    learningGoals: {
      en: ["Evaluate who wrote a source and for whom", "Analyze an object by material, use, place, and time", "Produce a cited bilingual label or short talk"],
      zh: ["评估一份来源是谁写的、写给谁", "从材料、用途、地点、时间分析一件器物", "产出一段有引用的双语展签或短讲稿"],
    },
    duration: { en: "90 minutes + research", zh: "90 分钟 + 研究时间" },
    pageCount: 6,
    format: { en: "Printable PDF · A4 + US Letter", zh: "可打印 PDF · A4 + US Letter" },
    access: "free",
    previews: [
      { src: "/resources/culture-curator/v1/preview-cover.webp", alt: { en: "Curating Chinese Culture cover", zh: "策展中国文化封面" } },
      { src: "/resources/culture-curator/v1/preview-activity.webp", alt: { en: "Source and label activity page", zh: "来源与展签活动页" } },
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
    watermark: "启",
    hero: {
      en: {
        eyebrow: "Ages 3–6 · Touch, say, make",
        title: "First words, first wishes",
        introduction:
          "At this age culture is something you hold, point at, and say out loud. We start with animals, colors, and one or two characters — never a lecture.",
      },
      zh: {
        eyebrow: "3–6 岁 · 触摸、说出、动手",
        title: "第一批词，第一句祝福",
        introduction:
          "这个年纪，文化是能拿在手里、指一指、说出口的东西。我们从动物、颜色和一两个汉字开始，绝不讲大道理。",
      },
    },
    image: { src: "/age-path/prek.webp", width: 1728, height: 1152 },
    imageAlt: { en: "Young child learning with zodiac cards", zh: "幼儿用生肖卡片学习" },
    profile: {
      en: "Learners this age build language through play, repetition, and their hands. Short, concrete, and joyful beats complete.",
      zh: "这个年龄的孩子通过游戏、重复和动手来建立语言。短、具体、快乐，比“做完”更重要。",
    },
    goals: {
      en: [
        "Name a few zodiac animals and the words 年 / 家 / 龙",
        "Connect red and lanterns with good wishes",
        "Make one small thing and talk about it",
      ],
      zh: [
        "说出几个生肖和“年 / 家 / 龙”",
        "把红色、灯笼和美好祝愿联系起来",
        "做出一件小东西，并说一说",
      ],
    },
    journey: [
      {
        order: 1,
        title: { en: "The animal calendar", zh: "动物的日历" },
        knowledge: {
          en: "The Chinese zodiac is a set of twelve animals that repeat in a fixed order. Children first meet them as pictures and names: 鼠 rat, 牛 ox, 虎 tiger, 兔 rabbit, 龙 dragon.",
          zh: "中国生肖是十二种按固定顺序循环的动物。孩子先把它们当作图画和名字来认识：鼠、牛、虎、兔、龙。",
        },
        inquiry: { en: "Which animal is yours? Which one do you like most?", zh: "你属什么？你最喜欢哪一个？" },
        boundary: {
          en: "The zodiac is a cultural calendar, not a rule about who a child is or will be.",
          zh: "生肖是一种文化历法，不是关于孩子“是什么样的人”的规则。",
        },
      },
      {
        order: 2,
        title: { en: "Red means good wishes", zh: "红色代表祝愿" },
        knowledge: {
          en: "Many families use red at the Spring Festival to express hope and good luck. The word 年 means year, and 家 means home or family.",
          zh: "许多家庭在春节用红色表达希望和好运。“年”是 year，“家”是 home / family。",
        },
        inquiry: { en: "What color does your family use for good luck?", zh: "你家会用哪种颜色讨个好彩头？" },
        boundary: {
          en: "Not every family celebrates the same way, and not every Chinese-speaking home marks the festival at all.",
          zh: "不是每个家庭都这样庆祝，也不是每个说中文的家庭都过这个节。",
        },
      },
      {
        order: 3,
        title: { en: "Make a small lantern", zh: "做一盏小灯笼" },
        knowledge: {
          en: "A lantern is an object that holds light and decoration. Folding one turns a flat sheet into something a child made with their own hands.",
          zh: "灯笼是承载光和装饰的物件。折一盏，能把一张平纸变成孩子亲手做的东西。",
        },
        inquiry: { en: "Who would you hang your lantern for?", zh: "你想把这盏灯笼挂给谁看？" },
        boundary: {
          en: "Lantern shapes and meanings differ by region; the craft here is a simple starting point, not the only form.",
          zh: "灯笼的形状和含义因地区而异；这里的手工只是一个简单的起点，不是唯一形式。",
        },
      },
    ],
    activity: {
      duration: { en: "10–15 minutes, stop whenever attention fades", zh: "10–15 分钟，注意力散了就停" },
      materials: {
        en: ["One printed pack", "A chunky pencil", "Safety scissors and a grown-up nearby"],
        zh: ["一份打印好的活动包", "一支粗铅笔", "安全剪刀，旁边有大人"],
      },
      learnerAction: {
        en: "Point at three animals and say them. Count the lanterns. Fold one lantern and name who it is for.",
        zh: "指三个生肖并说出来。数灯笼。折一盏灯笼，说出它是给谁的。",
      },
      familyPrompt: {
        en: "Ask: what would you wish for our family this year? There is no wrong answer.",
        zh: "问问孩子：今年你想祝我们家什么？没有标准答案。",
      },
      classroomAdaptation: {
        en: "Run it as a stations circle: name, count, make. Let children answer in either language.",
        zh: "做成三个小站：说、数、做。允许孩子用任一种语言回答。",
      },
    },
    featuredResourceSlug: "zodiac-animals",
    extraResourceSlugs: ["new-year-lantern"],
    nextSlug: "ages-6-11",
    nextLabel: { en: "When they can read a little, go to Ages 6–11", zh: "当孩子能读一点了，进入 6–11 岁" },
    relatedKitIds: ["zodiac-prek", "cny-prek", "panda-prek"],
  },
  {
    id: "g15",
    slug: "ages-6-11",
    watermark: "探",
    hero: {
      en: {
        eyebrow: "Ages 6–11 · Story, symbol, question",
        title: "How a festival actually unfolds",
        introduction:
          "Now children can follow a sequence and enjoy a riddle. We move from naming things to asking how and why — and to noticing that families do it differently.",
      },
      zh: {
        eyebrow: "6–11 岁 · 故事、符号、提问",
        title: "一个节日究竟怎么过",
        introduction:
          "现在孩子能跟着一串顺序走，也爱猜谜。我们从“认东西”走到“问为什么”，并开始注意到：每个家庭过法不一样。",
      },
    },
    image: { src: "/age-path/g15.webp", width: 1728, height: 1152 },
    imageAlt: { en: "Child making a lantern beside zodiac cards", zh: "孩子制作灯笼并学习生肖" },
    profile: {
      en: "Learners this age love order, games, and stories. They are ready to separate a tale from a real custom and to compare two families without ranking them.",
      zh: "这个年龄的孩子喜欢顺序、游戏和故事。他们准备好区分故事与真实习惯，并能比较两个家庭而不分高下。",
    },
    goals: {
      en: [
        "Order a festival from cleaning to the lantern night",
        "Read 福 / 春 / 灯 and try a lantern riddle",
        "Tell the Nian story as a story, not as history",
      ],
      zh: [
        "把节日从扫尘排到元宵赏灯",
        "认读“福 / 春 / 灯”并试猜灯谜",
        "把“年”的故事当作故事，而不是历史",
      ],
    },
    journey: [
      {
        order: 1,
        title: { en: "A festival has a sequence", zh: "节日有一串顺序" },
        knowledge: {
          en: "The Spring Festival usually moves through preparing the home, a reunion meal, greetings, and then the Lantern Festival. The exact order and foods vary.",
          zh: "春节通常经历打扫准备、团圆饭、拜年，再到元宵节。具体顺序和食物会变化。",
        },
        inquiry: { en: "What comes first in your family — cooking, cleaning, or decorating?", zh: "你家最先做的是哪件——做饭、打扫，还是布置？" },
        boundary: {
          en: "There is no single correct sequence; regional and family routines differ.",
          zh: "没有唯一正确的顺序，地区与家庭的安排各不相同。",
        },
      },
      {
        order: 2,
        title: { en: "Symbols carry words", zh: "符号里藏着字" },
        knowledge: {
          en: "Hanging 福 upside down plays on a word that sounds like ‘luck arrives’. Lantern riddles turn reading into a game of clues.",
          zh: "把“福”倒着贴，是利用一个听起来像“福到了”的谐音。灯谜则把阅读变成猜线索的游戏。",
        },
        inquiry: { en: "Can you think of another word that sounds like a good wish?", zh: "你能想到另一个听起来像好祝愿的字吗？" },
        boundary: {
          en: "The upside-down 福 is one custom among many; some families never do it.",
          zh: "倒贴“福”只是众多习惯之一，有些家庭从不这样做。",
        },
      },
      {
        order: 3,
        title: { en: "A story is not a record", zh: "故事不是记录" },
        knowledge: {
          en: "Nian is a folk tale that explains customs like red and loud sounds. A tale can be true to a culture without being a historical fact.",
          zh: "“年”是一个解释红色和响声等习俗的民间故事。一个故事可以忠于一种文化，却不等于历史事实。",
        },
        inquiry: { en: "What is one thing in the story that could not really happen?", zh: "故事里哪一件事其实不可能真的发生？" },
        boundary: {
          en: "Folk stories, family customs, and verifiable facts are three different kinds of truth.",
          zh: "民间故事、家庭习惯、可查证的事实，是三种不同的“真”。",
        },
      },
    ],
    activity: {
      duration: { en: "25–35 minutes", zh: "25–35 分钟" },
      materials: {
        en: ["Printed booklet", "Sequence cards you cut out", "One adult to interview"],
        zh: ["打印好的小册子", "剪下来的顺序卡", "一位可以采访的家人"],
      },
      learnerAction: {
        en: "Put the festival cards in your order. Solve one riddle and say your reasoning. Ask an elder one custom question.",
        zh: "把节日卡按你的顺序排好。猜一道灯谜并说出理由。问长辈一个关于习惯的问题。",
      },
      familyPrompt: {
        en: "Tell the child one way your family celebrates that is different from the booklet.",
        zh: "告诉孩子：你家有一个和册子里不一样的过法。",
      },
      classroomAdaptation: {
        en: "Compare two written family descriptions and ask which details match and which differ — without naming one correct.",
        zh: "比较两段家庭描述，问哪些细节相同、哪些不同——不指定哪个“对”。",
      },
    },
    featuredResourceSlug: "festival-detective",
    extraResourceSlugs: ["zodiac-animals"],
    nextSlug: "ages-11-14",
    nextLabel: { en: "Ready to compare and argue from evidence? Go to Ages 11–14", zh: "准备好比较、用证据说话了吗？进入 11–14 岁" },
    relatedKitIds: ["cny-g15", "zodiac-g15", "panda-g15"],
  },
  {
    id: "g68",
    slug: "ages-11-14",
    watermark: "流",
    hero: {
      en: {
        eyebrow: "Ages 11–14 · Map, source, evidence",
        title: "Culture moves between people",
        introduction:
          "Traditions are not frozen. At this stage learners compare places, read the zodiac as a system, and treat the Silk Roads as many networks — then build a claim they can defend.",
      },
      zh: {
        eyebrow: "11–14 岁 · 地图、资料、证据",
        title: "文化在人与人之间流动",
        introduction:
          "传统不是冻住的。这个阶段，学习者比较不同地方、把生肖当作一套系统、把丝绸之路看作许多条网络，然后建立一个自己能辩护的观点。",
      },
    },
    image: { src: "/age-path/g68.webp", width: 1728, height: 1152 },
    imageAlt: { en: "Student building a cultural timeline from images", zh: "学生用图像搭建文化时间线" },
    profile: {
      en: "Learners this age can hold two perspectives at once and want fairness. They are ready for sources, maps, and the difference between an observation and an inference.",
      zh: "这个年龄的孩子能同时容纳两种视角，也在意公平。他们准备好接触资料、地图，以及“观察”与“推断”的区别。",
    },
    goals: {
      en: [
        "Show how one festival changes across place and diaspora",
        "Read the zodiac as a 12-year cycle, not a personality test",
        "Sort observations, inferences, and open questions",
      ],
      zh: [
        "展示同一个节日如何随地方和海外社区变化",
        "把生肖读作十二年循环，而不是性格测试",
        "区分观察、推断与开放问题",
      ],
    },
    journey: [
      {
        order: 1,
        title: { en: "Traditions change across place", zh: "传统随地方而变" },
        knowledge: {
          en: "Spring Festival looks different in northern and southern China, and again in diaspora homes. Dumplings, rice cakes, and greetings each carry local meaning.",
          zh: "春节在中国北方、南方，以及在海外家庭里，样子都不一样。饺子、年糕、拜年话各自带着地方的含义。",
        },
        inquiry: { en: "If a family moves to a new country, what might they keep and what might change?", zh: "如果一个家庭搬到新的国家，他们可能保留什么、改变什么？" },
        boundary: {
          en: "No single region owns the ‘real’ version of the festival.",
          zh: "没有任何一个地区拥有“真正”的版本。",
        },
      },
      {
        order: 2,
        title: { en: "The zodiac as a system", zh: "作为系统的生肖" },
        knowledge: {
          en: "The zodiac is a twelve-year repeating cycle tied to a calendar. As an optional extension, each year links to an earthly branch — a naming system, not a destiny.",
          zh: "生肖是与历法相连的十二年循环。作为可选延伸，每一年对应一个地支——这是一套命名系统，不是命运。",
        },
        inquiry: { en: "Why might people enjoy zodiac signs even if they do not decide personality?", zh: "既然生肖不决定性格，人们为什么还是喜欢它？" },
        boundary: {
          en: "Zodiac labels describe a calendar year; they do not determine a person’s character or future.",
          zh: "生肖标记的是一个历法年份，并不决定一个人的性格或未来。",
        },
      },
      {
        order: 3,
        title: { en: "Many roads, not one", zh: "许多条路，不是一条" },
        knowledge: {
          en: "The Silk Roads were overlapping routes across land and sea. Goods, ideas, religions, and technologies moved among many societies in many directions.",
          zh: "丝绸之路是横跨陆路与海路、彼此交叠的路线。货物、思想、宗教和技术在许多社会之间、朝许多方向流动。",
        },
        inquiry: { en: "Name one thing that traveled — and one idea that traveled with it.", zh: "说出一件传播的东西，以及随它一起传播的一个想法。" },
        boundary: {
          en: "Exchange was mutual and uneven; avoid framing it as one civilization giving to others.",
          zh: "交流是相互的、也不均衡；避免把它讲成“一个文明给予其他文明”。",
        },
      },
    ],
    activity: {
      duration: { en: "45–60 minutes", zh: "45–60 分钟" },
      materials: {
        en: ["Printed inquiry pack", "Two sources to compare", "Colored markers for the evidence table"],
        zh: ["打印好的探究包", "两份用来比较的资料", "给证据表用的彩色笔"],
      },
      learnerAction: {
        en: "Mark exchange directions on the map. Compare an object label with a family account. Write one claim and tag two pieces of evidence.",
        zh: "在地图上标出交流方向。比较一份器物标签和一段家庭叙述。写一个观点，并标出两条证据。",
      },
      familyPrompt: {
        en: "Share one object or dish in your home and where it came from, as far as you know.",
        zh: "分享家里的一件器物或一道菜，说说据你所知它从哪里来。",
      },
      classroomAdaptation: {
        en: "Use the answer guide to model the line between observation, inference, and question before students write their own.",
        zh: "在学生动笔前，用答案指南示范“观察、推断、问题”之间的界线。",
      },
    },
    featuredResourceSlug: "culture-in-motion",
    extraResourceSlugs: ["festival-detective"],
    nextSlug: "ages-14-18",
    nextLabel: { en: "Ready to research and write your own label? Go to Ages 14–18", zh: "准备好研究、写自己的展签了吗？进入 14–18 岁" },
    relatedKitIds: ["cny-g68", "zodiac-g68", "panda-g68"],
  },
  {
    id: "g912",
    slug: "ages-14-18",
    watermark: "展",
    hero: {
      en: {
        eyebrow: "Ages 14–18 · Research, translate, express",
        title: "Whose tradition, whose voice",
        introduction:
          "Culture is interpreted, not just inherited. Older learners evaluate sources, analyze one object, weigh translation choices, and produce a cited bilingual piece of their own.",
      },
      zh: {
        eyebrow: "14–18 岁 · 研究、翻译、表达",
        title: "谁的传统，谁的声音",
        introduction:
          "文化是被诠释的，不只是被继承的。高年级学习者评估来源、分析一件器物、权衡翻译取舍，并产出一段有引用的、属于自己的双语作品。",
      },
    },
    image: { src: "/age-path/g912.webp", width: 1728, height: 1152 },
    imageAlt: { en: "Older learner writing beside art reference books", zh: "高年级学习者阅读艺术资料并写作" },
    profile: {
      en: "Learners this age can manage a research question, judge a source, and care about voice and accuracy. They are ready to make interpretive choices and own them.",
      zh: "这个年龄的孩子能管理一个研究问题、判断来源，并在意表达与准确。他们准备好做诠释性的选择，并为它负责。",
    },
    goals: {
      en: [
        "Evaluate who wrote a source, when, and for whom",
        "Analyze an object by material, use, place, and time",
        "Produce a cited bilingual label or a three-minute talk",
      ],
      zh: [
        "评估一份来源是谁写的、何时写的、写给谁",
        "从材料、用途、地点、时间分析一件器物",
        "产出一段有引用的双语展签或三分钟讲稿",
      ],
    },
    journey: [
      {
        order: 1,
        title: { en: "Objects carry meaning that shifts", zh: "物件承载会变动的意义" },
        knowledge: {
          en: "A lantern, a seal, a porcelain vessel, or a festival utensil means different things depending on who uses it, where, and when. Form follows use and audience.",
          zh: "一盏灯笼、一方印、一件瓷器或一件节日器具，意义会随使用者、地点、时间而不同。形式跟着用途和受众走。",
        },
        inquiry: { en: "Choose one object. For whom was it made, and what would they lose if it disappeared?", zh: "选一件器物。它是为谁做的？如果它消失，他们会失去什么？" },
        boundary: {
          en: "An object’s meaning is interpreted; state when a reading is contested or regional.",
          zh: "物件的意义是被诠释的；当某种读法有争议或属地方性时，要说明。",
        },
      },
      {
        order: 2,
        title: { en: "Translation is a set of choices", zh: "翻译是一连串选择" },
        knowledge: {
          en: "A Chinese phrase, its pinyin, a literal English line, and a fluent English line each lose and keep different things. Good translation explains what shifted.",
          zh: "一句中文、它的拼音、一句直译英文、一句流畅英文，各自保留和丢失不同的东西。好的翻译会说明变掉了什么。",
        },
        inquiry: { en: "Translate one festival greeting two ways. What did each version sacrifice?", zh: "把一句节日问候翻译两次。每个版本各牺牲了什么？" },
        boundary: {
          en: "There is rarely one correct translation; fluency and literalness serve different readers.",
          zh: "很少有唯一正确的翻译；流畅与字面服务于不同的读者。",
        },
      },
      {
        order: 3,
        title: { en: "Build a cited voice", zh: "建立有引用的声音" },
        knowledge: {
          en: "A credible label or talk separates fact from interpretation and names its sources. A community or family source counts when handled with consent and care.",
          zh: "可信的展签或讲稿会把事实与诠释分开，并标明来源。在取得同意、谨慎处理时，社区或家庭来源同样算数。",
        },
        inquiry: { en: "Which of your sentences is fact, which is your reading, and which source backs each?", zh: "你的句子里，哪句是事实、哪句是你的解读、各由哪份来源支持？" },
        boundary: {
          en: "Cite what you use, and mark personal or family memory as memory rather than as universal fact.",
          zh: "引用你用到的东西，并把个人或家庭记忆标为记忆，而非普遍事实。",
        },
      },
    ],
    activity: {
      duration: { en: "90 minutes plus independent research", zh: "90 分钟，外加独立研究时间" },
      materials: {
        en: ["Printed research pack", "At least two credible sources", "One object or custom to study"],
        zh: ["打印好的研究包", "至少两份可靠来源", "一件要研究的器物或习俗"],
      },
      learnerAction: {
        en: "Frame one research question. Check two sources. Write a 150–250 word bilingual label or plan a three-minute talk, with citations.",
        zh: "提出一个研究问题。核对两份来源。写一段 150–250 字的双语展签，或规划一段三分钟讲稿，并附引用。",
      },
      familyPrompt: {
        en: "Offer one family memory as a source, and decide together how it should be quoted.",
        zh: "提供一段家庭记忆作为来源，并一起决定它该如何被引用。",
      },
      classroomAdaptation: {
        en: "Use the rubric to assess evidence, citation, and the fact-versus-interpretation line rather than a single right answer.",
        zh: "用评分标准评估证据、引用，以及事实与诠释的界线，而不是单一正确答案。",
      },
    },
    featuredResourceSlug: "culture-curator",
    extraResourceSlugs: ["culture-in-motion"],
    nextSlug: null,
    nextLabel: { en: "This is the top stage — share what you made with us", zh: "这是最高阶段——把你做的分享给我们" },
    relatedKitIds: ["cny-g912", "zodiac-g912", "panda-g912"],
  },
];

export function getLearningPath(slug: string): LearningPath | undefined {
  return learningPaths.find((path) => path.slug === slug);
}

export function getResource(slug: string): LearningResource | undefined {
  return learningResources[slug];
}
