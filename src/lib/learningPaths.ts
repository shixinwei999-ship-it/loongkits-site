// 学习路径与资源目录：四个年龄区是独立课程空间，不是商品筛选壳。
// 每个区都带厚实的知识体：加厚的旅程、汉字词汇墙、实情·误区对照、你知道吗。
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

export interface VocabWord {
  char: string;
  pinyin: string;
  en: Bi<string>;
  note: Bi<string>;
}

export interface MythFact {
  myth: Bi<string>;
  fact: Bi<string>;
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
  vocabulary: VocabWord[];
  myths: MythFact[];
  facts: Bi<string[]>;
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
          en: "The Chinese zodiac is a set of twelve animals that repeat in a fixed order, one for each year. Children first meet them as pictures and sounds: 鼠 rat, 牛 ox, 虎 tiger, 兔 rabbit, 龙 dragon. Saying the names out loud, again and again, is the whole lesson at this age.",
          zh: "中国生肖是十二种按固定顺序循环的动物，每年对应一种。孩子先把它们当作图画和声音来认识：鼠、牛、虎、兔、龙。在这个年纪，把名字一遍遍说出口，本身就是整堂课。",
        },
        inquiry: { en: "Which animal is yours? Which one do you like most, and what does it look like?", zh: "你属什么？你最喜欢哪一个，它长什么样？" },
        boundary: {
          en: "The zodiac is a cultural calendar, not a rule about who a child is or will be.",
          zh: "生肖是一种文化历法，不是关于孩子“是什么样的人”的规则。",
        },
      },
      {
        order: 2,
        title: { en: "Red means good wishes", zh: "红色代表祝愿" },
        knowledge: {
          en: "Many families use red at the Spring Festival to express hope and good luck — on paper, on envelopes, on clothes. Two words are worth keeping: 年 means year, and 家 means home or family. A child does not need to write them yet; recognizing the shape is enough.",
          zh: "许多家庭在春节用红色表达希望和好运——贴在纸上、装在红包里、穿在身上。两个字值得记住：“年”是 year，“家”是 home / family。孩子现在还不必会写，认得形状就够了。",
        },
        inquiry: { en: "What color does your family use for good luck? Where have you seen it?", zh: "你家会用哪种颜色讨个好彩头？你在哪儿见过它？" },
        boundary: {
          en: "Not every family celebrates the same way, and not every Chinese-speaking home marks the festival at all.",
          zh: "不是每个家庭都这样庆祝，也不是每个说中文的家庭都过这个节。",
        },
      },
      {
        order: 3,
        title: { en: "Make a small lantern", zh: "做一盏小灯笼" },
        knowledge: {
          en: "A lantern is an object that holds light and decoration. Folding one turns a flat sheet into something a child made with their own hands — and that feeling of ‘I made this’ is what sticks. The craft here is simple on purpose: a few cuts, one fold, a tassel.",
          zh: "灯笼是承载光和装饰的物件。折一盏，能把一张平纸变成孩子亲手做的东西——而“这是我做的”这种感觉，才记得住。这里的手工故意做得简单：剪几刀、折一下、加个穗子。",
        },
        inquiry: { en: "Who would you hang your lantern for? What would you tell them?", zh: "你想把这盏灯笼挂给谁看？你会对他说什么？" },
        boundary: {
          en: "Lantern shapes and meanings differ by region; the craft here is a simple starting point, not the only form.",
          zh: "灯笼的形状和含义因地区而异；这里的手工只是一个简单的起点，不是唯一形式。",
        },
      },
      {
        order: 4,
        title: { en: "Words that wish well", zh: "会说出口的祝福" },
        knowledge: {
          en: "A blessing is a sentence you can practice. ‘新年好’ (happy new year) and ‘恭喜’ (congratulations / good wishes) are short, repeatable, and meant to be said to someone. At this age, culture lives in the mouth and the hands before it lives in the head.",
          zh: "祝福是一句可以练习的话。“新年好”“恭喜”又短、又能重复、而且是要说给人听的。在这个年纪，文化先活在嘴里和手上，然后才活进脑子里。",
        },
        inquiry: { en: "Can you say one good wish to someone in the room right now?", zh: "你能现在对屋里的一个人说一句祝福吗？" },
        boundary: {
          en: "Greetings vary by region and dialect; the point is the act of wishing, not one exact phrase.",
          zh: "拜年话因地区和方言而不同；重点是“祝愿”这个动作，而不是某一句固定的话。",
        },
      },
    ],
    vocabulary: [
      { char: "年", pinyin: "nián", en: { en: "year", zh: "年" }, note: { en: "The festival is also called 过年, ‘passing into the new year’.", zh: "过节也常说“过年”。" } },
      { char: "家", pinyin: "jiā", en: { en: "home · family", zh: "家、家庭" }, note: { en: "The roof radical on top hints at ‘a place to live’.", zh: "上面的宝盖头像一个屋顶。" } },
      { char: "红", pinyin: "hóng", en: { en: "red", zh: "红色" }, note: { en: "Often tied to joy and good luck.", zh: "常和喜庆、好运连在一起。" } },
      { char: "龙", pinyin: "lóng", en: { en: "dragon", zh: "龙" }, note: { en: "A lucky symbol in Chinese culture.", zh: "在中国文化里是吉祥的象征。" } },
      { char: "福", pinyin: "fú", en: { en: "good fortune", zh: "福气、好运" }, note: { en: "Often pasted on doors as a wish.", zh: "常贴在门上，表达祝愿。" } },
      { char: "灯", pinyin: "dēng", en: { en: "lantern · lamp", zh: "灯、灯笼" }, note: { en: "Holds light and decoration.", zh: "装着光，也是装饰。" } },
    ],
    myths: [
      {
        myth: { en: "Every Chinese family celebrates the New Year in exactly the same way.", zh: "每个中国家庭过春节的方式都一模一样。" },
        fact: { en: "They don’t. What people eat, hang, and which day they visit can differ by family and by region.", zh: "并不一样。吃什么、贴什么、哪天拜年，家家、各地都不同。" },
      },
      {
        myth: { en: "The Chinese dragon is a scary, fire-breathing monster.", zh: "中国龙是可怕、会喷火的怪物。" },
        fact: { en: "In Chinese culture the dragon is usually a lucky symbol of rain and good fortune — different from a Western fire dragon.", zh: "在中国文化里，龙通常是带来雨水和好运的吉祥象征，和西方喷火龙不同。" },
      },
      {
        myth: { en: "Your zodiac animal decides what kind of person you will be.", zh: "属什么生肖，长大就是什么性格。" },
        fact: { en: "The zodiac marks the year you were born — a fun calendar, not a personality test.", zh: "生肖标记你出生的年份，是一种有趣的历法，不是性格测试。" },
      },
    ],
    facts: {
      en: [
        "There are twelve zodiac animals, and they always come in the same order.",
        "Red shows up at many happy moments in Chinese life, not only at New Year.",
        "The character 福 is often put on a door as a wish for the home.",
        "A lantern can hold a light — and it can also just be pretty to look at.",
      ],
      zh: [
        "十二生肖有 12 种动物，顺序永远固定。",
        "红色在中国生活的许多喜庆场合都会出现，不只是过年。",
        "“福”字常被贴在门上，给家里送祝愿。",
        "灯笼能装光，也可以单单为了好看。",
      ],
    },
    activity: {
      duration: { en: "10–15 minutes, stop whenever attention fades", zh: "10–15 分钟，注意力散了就停" },
      materials: {
        en: ["One printed pack", "A chunky pencil", "Safety scissors and a grown-up nearby"],
        zh: ["一份打印好的活动包", "一支粗铅笔", "安全剪刀，旁边有大人"],
      },
      learnerAction: {
        en: "Point at three animals and say them. Count the lanterns. Fold one lantern and name who it is for. Say one good wish out loud.",
        zh: "指三个生肖并说出来。数灯笼。折一盏灯笼，说出它是给谁的。大声说一句祝福。",
      },
      familyPrompt: {
        en: "Ask: what would you wish for our family this year? There is no wrong answer.",
        zh: "问问孩子：今年你想祝我们家什么？没有标准答案。",
      },
      classroomAdaptation: {
        en: "Run it as a stations circle: name, count, make, wish. Let children answer in either language.",
        zh: "做成四个小站：说、数、做、祝。允许孩子用任一种语言回答。",
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
        "Ask one family member about a custom",
      ],
      zh: [
        "把节日从扫尘排到元宵赏灯",
        "认读“福 / 春 / 灯”并试猜灯谜",
        "把“年”的故事当作故事，而不是历史",
        "问一位家人一个关于习惯的问题",
      ],
    },
    journey: [
      {
        order: 1,
        title: { en: "A festival has a sequence", zh: "节日有一串顺序" },
        knowledge: {
          en: "The Spring Festival usually moves through preparing and cleaning the home, a reunion meal on New Year’s Eve, greetings in the days that follow, and finally the Lantern Festival. Foods like dumplings, rice cakes, or sweet rice balls mark different moments — and different places.",
          zh: "春节通常经历打扫准备、除夕的团圆饭、随后几天的拜年，最后到元宵节。饺子、年糕、汤圆这类食物，标记着不同的时刻——也标记着不同的地方。",
        },
        inquiry: { en: "What comes first in your family — cooking, cleaning, or decorating? Why that order?", zh: "你家最先做的是哪件——做饭、打扫，还是布置？为什么是这个顺序？" },
        boundary: {
          en: "There is no single correct sequence; regional and family routines differ.",
          zh: "没有唯一正确的顺序，地区与家庭的安排各不相同。",
        },
      },
      {
        order: 2,
        title: { en: "Symbols carry words", zh: "符号里藏着字" },
        knowledge: {
          en: "Hanging 福 upside down plays on a word that sounds like ‘luck arrives’. 春 names the season the festival welcomes. 灯 is the light of the Lantern Festival, when riddles are hung on lanterns and reading becomes a game of clues.",
          zh: "把“福”倒着贴，是利用一个听起来像“福到了”的谐音。“春”点出节日迎来的季节。“灯”是元宵的光——那天灯谜挂在灯上，阅读变成一场猜线索的游戏。",
        },
        inquiry: { en: "Can you think of another word that sounds like a good wish in any language you know?", zh: "你能想到一个——用你会的任何一种语言——听起来像好祝愿的字吗？" },
        boundary: {
          en: "The upside-down 福 is one custom among many; some families never do it.",
          zh: "倒贴“福”只是众多习惯之一，有些家庭从不这样做。",
        },
      },
      {
        order: 3,
        title: { en: "A story is not a record", zh: "故事不是记录" },
        knowledge: {
          en: "Nian is a folk tale that explains customs like red and loud sounds: a monster afraid of both, driven away each year. A tale can be true to a culture — it really is why some things are done — without being a historical event that happened on a date.",
          zh: "“年”是一个解释红色和响声等习俗的民间故事：一只害怕这两样的怪兽，每年被赶走。一个故事可以忠于一种文化——它确实解释了为什么有些事这么做——却不等于在某年某月发生过的历史事件。",
        },
        inquiry: { en: "What is one thing in the story that could not really happen? What real custom does it explain?", zh: "故事里哪一件事其实不可能真的发生？它又解释了哪个真实的习俗？" },
        boundary: {
          en: "Folk stories, family customs, and verifiable facts are three different kinds of truth.",
          zh: "民间故事、家庭习惯、可查证的事实，是三种不同的“真”。",
        },
      },
      {
        order: 4,
        title: { en: "Ask your family", zh: "去问你的家人" },
        knowledge: {
          en: "Everything on this page becomes real when a child asks one question of one adult and writes down the answer. ‘What did New Year look like when you were my age?’ turns a lesson into a living memory — and shows that culture is carried by people, not just by books.",
          zh: "当孩子向一位大人问一个问题、并把答案记下来，这一页的一切就活了过来。“我这么大的时候，过年是什么样？”能把一堂课变成一段活的记忆——也让人看见：文化是由人传递的，不只是由书。",
        },
        inquiry: { en: "What is one custom your family keeps that is not in any book?", zh: "你家有一个任何书里都没写的习惯吗？" },
        boundary: {
          en: "A family memory is precious and valid, but it is one version among many — not the only way.",
          zh: "家庭记忆珍贵且有效，但它只是众多版本之一，不是唯一做法。",
        },
      },
    ],
    vocabulary: [
      { char: "春", pinyin: "chūn", en: { en: "spring", zh: "春天" }, note: { en: "The season the festival welcomes.", zh: "节日迎来的季节。" } },
      { char: "节", pinyin: "jié", en: { en: "festival", zh: "节日" }, note: { en: "Also in 春节 and 元宵节.", zh: "也出现在“春节”“元宵节”。" } },
      { char: "团圆", pinyin: "tuányuán", en: { en: "reunion", zh: "团圆" }, note: { en: "The heart of the New Year’s Eve meal.", zh: "年夜饭的核心。" } },
      { char: "福", pinyin: "fú", en: { en: "good fortune", zh: "福气" }, note: { en: "Upside down, it sounds like ‘luck arrives’.", zh: "倒过来贴，谐音“福到”。" } },
      { char: "灯", pinyin: "dēng", en: { en: "lantern", zh: "灯笼" }, note: { en: "Riddles are hung on lanterns.", zh: "灯谜挂在灯笼上。" } },
      { char: "谜", pinyin: "mí", en: { en: "riddle", zh: "谜语" }, note: { en: "A clue-game played with words.", zh: "用文字玩的猜谜游戏。" } },
      { char: "宵", pinyin: "xiāo", en: { en: "night", zh: "夜" }, note: { en: "元宵 = the first full-moon night.", zh: "元宵＝第一个月圆之夜。" } },
      { char: "年", pinyin: "nián", en: { en: "year", zh: "年" }, note: { en: "Also the name of the folk monster.", zh: "也是那只民间怪兽的名字。" } },
    ],
    myths: [
      {
        myth: { en: "The monster Nian really happened in history.", zh: "怪兽“年”是真发生过的历史。" },
        fact: { en: "Nian is a folk story that explains customs like red and loud sounds — not a historical record.", zh: "“年”是解释红色、响声等习俗的民间故事，不是历史记录。" },
      },
      {
        myth: { en: "Every family hangs 福 upside down.", zh: "家家都把“福”倒着贴。" },
        fact: { en: "It is a wordplay custom many families enjoy, but not all families or all places do it.", zh: "这是许多家庭喜欢的谐音习俗，但不是所有家庭、所有地方都这样做。" },
      },
      {
        myth: { en: "Spring Festival and the Lantern Festival are the same day.", zh: "春节和元宵节是同一天。" },
        fact: { en: "Spring Festival begins on the first day of the lunar year; the Lantern Festival is the 15th night, the season’s finale.", zh: "春节从正月初一开始，元宵节是正月十五夜，是节日季的尾声。" },
      },
    ],
    facts: {
      en: [
        "The Spring Festival date changes every year because it follows the lunar calendar.",
        "The New Year’s Eve meal is a symbol of reunion — being together matters as much as the food.",
        "Lantern riddles turn reading into a game: the answer is hidden inside a clue.",
        "The main dish on New Year’s Eve differs by region — dumplings, rice cakes, sweet rice balls, and more.",
      ],
      zh: [
        "春节的日期每年都变，因为它跟农历走。",
        "年夜饭是团圆的象征——在一起，和吃什么一样重要。",
        "灯谜把阅读变成游戏：答案藏在一条线索里。",
        "年夜饭的主菜因地区而异——饺子、年糕、汤圆，还有更多。",
      ],
    },
    activity: {
      duration: { en: "25–35 minutes", zh: "25–35 分钟" },
      materials: {
        en: ["Printed booklet", "Sequence cards you cut out", "One adult to interview"],
        zh: ["打印好的小册子", "剪下来的顺序卡", "一位可以采访的家人"],
      },
      learnerAction: {
        en: "Put the festival cards in your order. Solve one riddle and say your reasoning out loud. Ask an elder one custom question and write the answer.",
        zh: "把节日卡按你的顺序排好。猜一道灯谜并大声说出理由。问长辈一个关于习惯的问题，把答案写下来。",
      },
      familyPrompt: {
        en: "Tell the child one way your family celebrates that is different from the booklet — and why you keep it.",
        zh: "告诉孩子：你家有一个和册子里不一样的过法——以及你们为什么保留它。",
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
        "Treat the Silk Roads as many networks, not one road",
        "Sort observations, inferences, and open questions",
      ],
      zh: [
        "展示同一个节日如何随地方和海外社区变化",
        "把生肖读作十二年循环，而不是性格测试",
        "把丝绸之路看作许多条网络，而不是一条路",
        "区分观察、推断与开放问题",
      ],
    },
    journey: [
      {
        order: 1,
        title: { en: "Traditions change across place", zh: "传统随地方而变" },
        knowledge: {
          en: "Spring Festival looks different in northern and southern China, and different again in diaspora homes abroad. Dumplings, rice cakes, and greetings each carry local meaning, and a family that moves may keep some customs, drop others, and invent new ones. Variation is not error — it is how a living culture behaves.",
          zh: "春节在中国北方、南方，以及在海外家庭里，样子都不一样。饺子、年糕、拜年话各自带着地方的含义；一个搬家的家庭，可能保留一些习惯、放下一些、再发明一些新的。变化不是错误——这正是一种活着的文化的样子。",
        },
        inquiry: { en: "If a family moves to a new country, what might they keep, what might change, and what might they create?", zh: "如果一个家庭搬到新的国家，他们可能保留什么、改变什么、又创造什么？" },
        boundary: {
          en: "No single region owns the ‘real’ version of the festival.",
          zh: "没有任何一个地区拥有“真正”的版本。",
        },
      },
      {
        order: 2,
        title: { en: "The zodiac as a system", zh: "作为系统的生肖" },
        knowledge: {
          en: "The zodiac is a twelve-year repeating cycle tied to a calendar, and each year also links to an ‘earthly branch’ — a naming system used in dates and time. Read this way, the zodiac is structure, not fortune-telling: it organizes years the way a week organizes days. Personality claims attached to it are later folk entertainment, not the system itself.",
          zh: "生肖是与历法相连的十二年循环，每一年还对应一个“地支”——一套用于纪日和纪时的命名系统。这样读，生肖是结构，而不是算命：它组织年份，就像星期组织日子。附在它上面的性格说法，是后来的民俗娱乐，不是这套系统本身。",
        },
        inquiry: { en: "Why might people enjoy zodiac signs even if the signs do not decide personality?", zh: "既然生肖不决定性格，人们为什么还是喜欢它？" },
        boundary: {
          en: "Zodiac labels describe a calendar year; they do not determine a person’s character or future.",
          zh: "生肖标记的是一个历法年份，并不决定一个人的性格或未来。",
        },
      },
      {
        order: 3,
        title: { en: "Many roads, not one", zh: "许多条路，不是一条" },
        knowledge: {
          en: "The ‘Silk Roads’ were overlapping routes across land and sea, used over many centuries. Goods, ideas, religions, crops, music, and technologies moved among many societies in many directions — so ‘silk’ is just one famous cargo on a much larger web of exchange. The name can mislead if it makes the network sound like a single line.",
          zh: "“丝绸之路”是横跨陆路与海路、彼此交叠、沿用许多世纪的路线。货物、思想、宗教、作物、音乐、技术在许多社会之间、朝许多方向流动——所以“丝绸”只是一张更大的交流网上，一件有名的货物而已。如果这个名字让人以为它是一条单线，就会误导。",
        },
        inquiry: { en: "Name one thing that traveled along these routes — and one idea or skill that traveled with it.", zh: "说出一件沿这些路线传播的东西——以及随它一起传播的一个想法或技艺。" },
        boundary: {
          en: "Exchange was mutual and uneven; avoid framing it as one civilization giving to others.",
          zh: "交流是相互的、也不均衡；避免把它讲成“一个文明给予其他文明”。",
        },
      },
      {
        order: 4,
        title: { en: "Seeing vs guessing", zh: "看见的，和猜的" },
        knowledge: {
          en: "Look at one image or read one short text and sort your thoughts into three piles: what you can actually see (observation), what you think it means (inference), and what you still want to ask (question). This single habit is the backbone of reading any source — a museum label, a map, or a grandparent’s story.",
          zh: "看一张图或读一段短文，把你的想法分成三堆：你真正看见的（观察）、你认为它意味着什么的（推断）、你还想问的（问题）。这一个习惯，是阅读任何资料的脊梁——无论是一份博物馆标签、一张地图，还是一段祖辈的故事。",
        },
        inquiry: { en: "Of the three piles, which one is safest to state as fact, and which must stay a question?", zh: "这三堆里，哪一堆最可以当作事实说出来，哪一堆必须留作问题？" },
        boundary: {
          en: "An inference is a reasonable guess, not a fact; naming it as a guess is honest thinking.",
          zh: "推断是合理的猜测，不是事实；把它说成猜测，才是诚实的思考。",
        },
      },
    ],
    vocabulary: [
      { char: "俗", pinyin: "sú", en: { en: "custom", zh: "习俗" }, note: { en: "A habit a group keeps over time.", zh: "一个群体长期保留的习惯。" } },
      { char: "历", pinyin: "lì", en: { en: "calendar", zh: "历法" }, note: { en: "Lunar vs solar calendars differ.", zh: "农历与公历不同。" } },
      { char: "支", pinyin: "zhī", en: { en: "(earthly) branch", zh: "地支" }, note: { en: "12 branches pair with the 12 animals.", zh: "12 地支与 12 生肖一一对应。" } },
      { char: "路", pinyin: "lù", en: { en: "road · route", zh: "路、路线" }, note: { en: "The ‘Silk Roads’ were many routes.", zh: "“丝绸之路”是许多条路。" } },
      { char: "网", pinyin: "wǎng", en: { en: "network", zh: "网络" }, note: { en: "Exchange ran in many directions.", zh: "交流朝许多方向进行。" } },
      { char: "证", pinyin: "zhèng", en: { en: "evidence", zh: "证据" }, note: { en: "What backs up a claim.", zh: "支持一个观点的依据。" } },
      { char: "变", pinyin: "biàn", en: { en: "to change", zh: "变化" }, note: { en: "Traditions change over time.", zh: "传统会随时间改变。" } },
      { char: "源", pinyin: "yuán", en: { en: "source", zh: "来源" }, note: { en: "Ask who made it and why.", zh: "问问谁做的、为什么。" } },
    ],
    myths: [
      {
        myth: { en: "Your zodiac sign predicts your personality and your future.", zh: "生肖能预测一个人的性格和命运。" },
        fact: { en: "The zodiac is a twelve-year calendar cycle. Personality readings are later folk fun — not fact, and not a label to put on people.", zh: "生肖是十二年历法循环。性格读法是后来的民俗娱乐，不是事实，也不该给人贴标签。" },
      },
      {
        myth: { en: "The Silk Road was a single road running east to west.", zh: "丝绸之路是一条从东到西的路。" },
        fact: { en: "It was many overlapping land and sea routes; exchange went in many directions among many societies.", zh: "它是陆路与海路交织的多条网络，交流在许多社会之间、朝许多方向进行。" },
      },
      {
        myth: { en: "Northerners only eat dumplings and southerners only eat rice cakes.", zh: "北方人只吃饺子、南方人只吃年糕。" },
        fact: { en: "That is an oversimplification; food varies by family, region, and occasion, with plenty of overlap.", zh: "这是过度简化；饮食随家庭、地区、场合变化，且有大量交叉。" },
      },
      {
        myth: { en: "Traditions have stayed exactly the same ‘since ancient times’.", zh: "传统“自古以来”一成不变。" },
        fact: { en: "Many customs formed, shifted, and were even reinvented across history.", zh: "许多习俗在历史中形成、变化，甚至被重新发明。" },
      },
    ],
    facts: {
      en: [
        "There are twelve earthly branches, paired one-to-one with the zodiac, forming part of the traditional year-counting system.",
        "The Spring Festival is celebrated across several East Asian countries and in overseas Chinese communities, each in its own way.",
        "The Silk Roads carried more than goods — religions, technologies, crops, and music traveled too.",
        "Telling ‘what I see’ from ‘what I guess’ from ‘what I wonder’ is the basic skill of reading any source.",
      ],
      zh: [
        "地支有 12 个，与生肖一一对应，组成传统纪年的一部分。",
        "春节在东亚多国及海外华人社区都庆祝，各有各的过法。",
        "丝路上传播的不止货物——宗教、技术、作物、音乐也随之流动。",
        "分清“我看见的”“我猜的”“我想问的”，是阅读任何资料的基本功。",
      ],
    },
    activity: {
      duration: { en: "45–60 minutes", zh: "45–60 分钟" },
      materials: {
        en: ["Printed inquiry pack", "Two sources to compare", "Colored markers for the evidence table"],
        zh: ["打印好的探究包", "两份用来比较的资料", "给证据表用的彩色笔"],
      },
      learnerAction: {
        en: "Mark exchange directions on the map. Compare an object label with a family account. Sort one page into observation / inference / question. Write one claim and tag two pieces of evidence.",
        zh: "在地图上标出交流方向。比较一份器物标签和一段家庭叙述。把一页内容分成观察／推断／问题。写一个观点，并标出两条证据。",
      },
      familyPrompt: {
        en: "Share one object or dish in your home and where it came from, as far as you know — and what you are only guessing.",
        zh: "分享家里的一件器物或一道菜，说说据你所知它从哪里来——以及哪些只是你的猜测。",
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
        "Explain what a translation gains and loses",
        "Produce a cited bilingual label or a three-minute talk",
      ],
      zh: [
        "评估一份来源是谁写的、何时写的、写给谁",
        "从材料、用途、地点、时间分析一件器物",
        "说明一次翻译得到了什么、失去了什么",
        "产出一段有引用的双语展签或三分钟讲稿",
      ],
    },
    journey: [
      {
        order: 1,
        title: { en: "Objects carry meaning that shifts", zh: "物件承载会变动的意义" },
        knowledge: {
          en: "A lantern, a seal, a porcelain vessel, or a festival utensil means different things depending on who uses it, where, and when. Form follows use and audience: the same bowl reads as kitchenware on a table, as evidence in a museum case, and as ritual on an altar. To analyze an object is to ask material, use, place, and time — and to admit the meaning is read, not stamped on.",
          zh: "一盏灯笼、一方印、一件瓷器或一件节日器具，意义会随使用者、地点、时间而不同。形式跟着用途和受众走：同一只碗，在桌上是餐具，在展柜里是证据，在祭台上是礼器。分析一件器物，就是去问材料、用途、地点、时间——并承认意义是被读出来的，不是印在上面的。",
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
          en: "Take one festival greeting and render it four ways: the Chinese, its pinyin, a literal English line, and a fluent English line. Each keeps and loses something different — sound, rhythm, cultural weight, or ease of reading. Good translation is not finding the ‘same’ sentence; it is deciding what matters for this reader and saying what shifted.",
          zh: "拿一句节日问候，翻成四种样子：中文、拼音、一句直译英文、一句流畅英文。每一种保留和丢失的东西都不同——声音、节奏、文化分量，或阅读的顺畅。好的翻译不是找到“同一句”话，而是决定对这位读者什么重要，并说清楚变掉了什么。",
        },
        inquiry: { en: "Translate one greeting two ways. What did each version sacrifice, and for which reader?", zh: "把一句问候翻译两次。每个版本各牺牲了什么，又是为了哪位读者？" },
        boundary: {
          en: "There is rarely one correct translation; fluency and literalness serve different readers.",
          zh: "很少有唯一正确的翻译；流畅与字面服务于不同的读者。",
        },
      },
      {
        order: 3,
        title: { en: "Build a cited voice", zh: "建立有引用的声音" },
        knowledge: {
          en: "A credible exhibit label or talk separates fact from interpretation and names its sources. A community or family source counts when handled with consent and care — but it should be labeled as memory or testimony, not as universal fact. Citation is not bureaucracy; it is how you let a reader check your work and trust your voice.",
          zh: "可信的展签或讲稿，会把事实与诠释分开，并标明来源。在取得同意、谨慎处理时，社区或家庭来源同样算数——但应标为记忆或口述，而非普遍事实。引用不是官僚手续；它是你让读者能核对你的工作、并信任你的声音的方式。",
        },
        inquiry: { en: "In your draft, which sentence is fact, which is your reading, and which source backs each?", zh: "在你的草稿里，哪句是事实、哪句是你的解读、各由哪份来源支持？" },
        boundary: {
          en: "Cite what you use, and mark personal or family memory as memory rather than as universal fact.",
          zh: "引用你用到的东西，并把个人或家庭记忆标为记忆，而非普遍事实。",
        },
      },
      {
        order: 4,
        title: { en: "Sign your name to it", zh: "为它署上你的名字" },
        knowledge: {
          en: "The last step is authorship: put your name on the label or the talk, and take responsibility for every claim in it. Culture studies is not about reciting a fixed answer; it is about making a careful, sourced, honest interpretation and standing behind it — knowing it is one reading among possible others.",
          zh: "最后一步是署名：把名字签在展签或讲稿上，为其中的每一个判断负责。文化研究不是背诵一个固定答案，而是做出一个谨慎、有来源、诚实的诠释，并为它站住——同时知道，它只是众多可能读法中的一种。",
        },
        inquiry: { en: "If someone disagreed with your label, what evidence would you point to, and what would you concede?", zh: "如果有人不同意你的展签，你会指向哪条证据，又会承认哪一点？" },
        boundary: {
          en: "Owning a view includes knowing its limits; a strong argument names what it cannot prove.",
          zh: "为一个观点负责，也包括知道它的边界；有力的论证会说出自己证明不了什么。",
        },
      },
    ],
    vocabulary: [
      { char: "物", pinyin: "wù", en: { en: "object", zh: "物件" }, note: { en: "Analyze by material and use.", zh: "从材料和用途分析。" } },
      { char: "义", pinyin: "yì", en: { en: "meaning", zh: "意义" }, note: { en: "Meaning shifts with context.", zh: "意义随语境而变。" } },
      { char: "译", pinyin: "yì", en: { en: "to translate", zh: "翻译" }, note: { en: "Every translation chooses.", zh: "每次翻译都在做选择。" } },
      { char: "释", pinyin: "shì", en: { en: "to interpret", zh: "诠释" }, note: { en: "Reading between the facts.", zh: "在事实之间读出含义。" } },
      { char: "引", pinyin: "yǐn", en: { en: "to cite", zh: "引用" }, note: { en: "Name where it came from.", zh: "标明它从哪里来。" } },
      { char: "证", pinyin: "zhèng", en: { en: "evidence", zh: "证据" }, note: { en: "What your claim rests on.", zh: "你的观点所依据的。" } },
      { char: "声", pinyin: "shēng", en: { en: "voice", zh: "声音" }, note: { en: "Whose story is told?", zh: "谁的故事被讲述？" } },
      { char: "境", pinyin: "jìng", en: { en: "context", zh: "语境、情境" }, note: { en: "Place, time, and audience.", zh: "地点、时间与受众。" } },
    ],
    myths: [
      {
        myth: { en: "There is one single correct translation of a sentence.", zh: "一句话只有唯一正确的翻译。" },
        fact: { en: "Translation trades off literalness, tone, and the reader; different versions serve different purposes.", zh: "翻译在字面、语气、读者之间取舍，不同译法服务不同目的。" },
      },
      {
        myth: { en: "An object’s meaning is fixed forever.", zh: "一件器物的意义是永远固定的。" },
        fact: { en: "Meaning changes with user, place, and time; the same bowl means different things on a table, in a case, on an altar.", zh: "意义随使用者、场合、时代变化；同一只碗在桌上、展柜里、祭台上含义不同。" },
      },
      {
        myth: { en: "My family’s way is the one authentic Chinese culture.", zh: "我家的做法就是“正宗”的中国文化。" },
        fact: { en: "Family memory is precious, but it is one valid version among many — not a universal standard.", zh: "家庭记忆珍贵，但它是众多有效版本之一，不等于普遍标准。" },
      },
    ],
    facts: {
      en: [
        "Museum labels usually separate a factual description from an interpretation.",
        "A reliable source is judged by author, date, audience, and point of view.",
        "Citing a family or community account requires consent, and it should be labeled as oral testimony.",
        "In bilingual writing, marking what is evidence versus what is your reading is academic honesty.",
      ],
      zh: [
        "博物馆展签通常区分“事实描述”和“诠释”。",
        "可靠来源要看作者、年代、受众与立场。",
        "引用家庭或社区口述需取得同意，并标注为口述。",
        "双语写作时，标明哪些是证据、哪些是你的解读，是学术诚实。",
      ],
    },
    activity: {
      duration: { en: "90 minutes plus independent research", zh: "90 分钟，外加独立研究时间" },
      materials: {
        en: ["Printed research pack", "At least two credible sources", "One object or custom to study"],
        zh: ["打印好的研究包", "至少两份可靠来源", "一件要研究的器物或习俗"],
      },
      learnerAction: {
        en: "Frame one research question. Check two sources and note who wrote each. Analyze one object by material, use, place, time. Write a 150–250 word bilingual label or plan a three-minute talk, with citations and a clear fact/interpretation line.",
        zh: "提出一个研究问题。核对两份来源，记下各是谁写的。从材料、用途、地点、时间分析一件器物。写一段 150–250 字的双语展签，或规划一段三分钟讲稿，附引用，并清楚区分事实与诠释。",
      },
      familyPrompt: {
        en: "Offer one family memory as a source, and decide together how it should be quoted and labeled.",
        zh: "提供一段家庭记忆作为来源，并一起决定它该如何被引用、如何被标注。",
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
