// 会员教材数据模型：按年级/级别/单元编排，像真正的教材。
// 三个轨道：儿童（按年级）、自学（按级别）、教师（按年级+课件/古诗/试卷）。
// 每个单元有课、古诗/文化、练习/试卷。内容可直接编写扩充。
// 注意：中文引号一律用「」，不用 ASCII 双引号，避免 JS 字符串歧义。

import type { Lang } from "./i18n";
type Bi<T> = Record<Lang, T>;

export interface LessonItem {
  title: Bi<string>;
  type: "vocab" | "reading" | "writing" | "grammar" | "culture" | "listening";
  summary: Bi<string>;
  content: Bi<string>;
}

export interface PoemItem {
  title: Bi<string>;
  author: Bi<string>;
  lines: Bi<string[]>;
  pinyin?: string[];
  note: Bi<string>;
}

export interface TestItem {
  title: Bi<string>;
  questions: { q: Bi<string>; options: Bi<string[]>; answer: number }[];
}

export interface Unit {
  id: string;
  title: Bi<string>;
  theme: Bi<string>;
  lessons: LessonItem[];
  poem?: PoemItem;
  test?: TestItem;
  culture?: Bi<string>;
}

export interface GradeTrack {
  id: string;
  label: Bi<string>;
  ageRange: Bi<string>;
  units: Unit[];
}

export interface LevelTrack {
  id: string;
  label: Bi<string>;
  hskRange: string;
  desc: Bi<string>;
  units: Unit[];
}

export const kidsTracks: GradeTrack[] = [
  {
    id: "prek", label: { en: "Pre-K", zh: "学前" }, ageRange: { en: "Ages 3-5", zh: "3-5 岁" },
    units: [{
      id: "prek-u1", title: { en: "Unit 1 - Hello!", zh: "第一单元 - 你好！" },
      theme: { en: "First sounds & first words", zh: "第一批声音和第一批字" },
      lessons: [
        { title: { en: "Pinyin: a o e", zh: "拼音：a o e" }, type: "vocab",
          summary: { en: "The three open vowels - the mouth shapes of Chinese.", zh: "三个开口韵 - 中文的嘴型。" },
          content: { en: "Open wide for a (like ah at the doctor). Round lips for o (like or). Smile for e (like uh but tighter). These three sounds appear in almost every Chinese word.", zh: "张大嘴发 a（像看医生时的啊）。圆唇发 o（像哦）。微笑发 e（像呃但更紧）。这三个音几乎出现在每个中文词里。" } },
        { title: { en: "First 6 characters", zh: "前六个字" }, type: "writing",
          summary: { en: "One two three person big small - strokes you can draw.", zh: "一 二 三 人 大 小 - 你能画的笔画。" },
          content: { en: "One horizontal stroke = 1. Two = 2. Three = 3. The character for person looks like someone walking - one stroke leans left, one leans right. Big = person with arms stretched. Small = three dots shrinking inward.", zh: "一是一横。二是两横。三是三横。人像一个人在走路 - 一撇一捺。大是人张开手臂。小是三个点往里收。" } },
        { title: { en: "Say hello", zh: "打招呼" }, type: "culture",
          summary: { en: "Hello, goodbye, thanks.", zh: "你好、再见、谢谢。" },
          content: { en: "Hello literally means you-good - you are wishing the other person well. Goodbye means see-again. Thanks - the character has the word-radical on the left: thanks are words you give.", zh: "你好字面是你+好 - 你在祝对方好。再见是再次+见。谢谢 - 谢字左边是言字旁：感谢是你给出的话。" } },
      ],
      poem: {
        title: { en: "Ode to the Goose", zh: "咏鹅" }, author: { en: "Luo Binwang (age 7)", zh: "骆宾王（七岁）" },
        lines: { en: ["Goose, goose, goose,", "Curved neck sings to the sky.", "White feathers float on green water,", "Red palms push through clear waves."], zh: ["鹅，鹅，鹅，", "曲项向天歌。", "白毛浮绿水，", "红掌拨清波。"] },
        pinyin: ["e, e, e,", "qu xiang xiang tian ge.", "bai mao fu lu shui,", "hong zhang bo qing bo."],
        note: { en: "Written by a 7-year-old in the Tang dynasty. The simplest poem in Chinese - and still one of the most beautiful.", zh: "唐代七岁孩子写的。中文最简单的诗 - 也是最美的之一。" },
      },
      test: {
        title: { en: "Unit 1 Quiz", zh: "第一单元小测" },
        questions: [
          { q: { en: "How many strokes does the character for three have?", zh: "三有几笔？" }, options: { en: ["2", "3", "4"], zh: ["2", "3", "4"] }, answer: 1 },
          { q: { en: "What does ni-hao mean?", zh: "你好是什么意思？" }, options: { en: ["Goodbye", "Hello", "Thanks"], zh: ["再见", "你好", "谢谢"] }, answer: 1 },
          { q: { en: "Which sound needs round lips?", zh: "哪个音要圆唇？" }, options: { en: ["a", "o", "e"], zh: ["a", "o", "e"] }, answer: 1 },
        ],
      },
    }],
  },
  {
    id: "g1", label: { en: "Grade 1", zh: "一年级" }, ageRange: { en: "Ages 6-7", zh: "6-7 岁" },
    units: [{
      id: "g1-u1", title: { en: "Unit 1 - My Family", zh: "第一单元 - 我的家" },
      theme: { en: "Family words & simple sentences", zh: "家庭词汇和简单句" },
      lessons: [
        { title: { en: "Family words", zh: "家庭词汇" }, type: "vocab",
          summary: { en: "Dad mum elder-brother elder-sister younger-brother younger-sister grandpa grandma", zh: "爸爸 妈妈 哥哥 姐姐 弟弟 妹妹 爷爷 奶奶" },
          content: { en: "Notice the pattern: dad and mum each appear twice (reduplication = affection). Elder/younger brother/sister tell birth order. Grandpa/grandma are the older generation.", zh: "注意规律：爸和妈各重复两次（叠词=亲昵）。哥/姐/弟/妹表示出生顺序。爷/奶是长辈。" } },
        { title: { en: "This is my...", zh: "这是我的......" }, type: "grammar",
          summary: { en: "This-is + person. The simplest sentence pattern.", zh: "这是 + 人。最简单的句型。" },
          content: { en: "This is my dad. This is my mum. This is my elder brother. The pattern zhe-shi = this-is works for anything: this is a book, this is water.", zh: "这是我的爸爸。这是我的妈妈。这是我哥哥。「这是」什么都能用：这是书、这是水。" } },
        { title: { en: "How many people?", zh: "你家几口人？" }, type: "reading",
          summary: { en: "Read and answer: how many people in your family?", zh: "读一读，答一答：你家有几口人？" },
          content: { en: "My family has four people: dad, mum, me and younger sister. How about yours? Count your family and say it in Chinese.", zh: "我家有四口人：爸爸、妈妈、我和妹妹。你家呢？数一数你的家人，用中文说出来。" } },
      ],
      poem: {
        title: { en: "Quiet Night Thought", zh: "静夜思" }, author: { en: "Li Bai", zh: "李白" },
        lines: { en: ["Before my bed, bright moonlight,", "I wonder if it is frost on the ground.", "I raise my head to gaze at the moon,", "I lower my head and think of home."], zh: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"] },
        pinyin: ["chuang qian ming yue guang,", "yi shi di shang shuang.", "ju tou wang ming yue,", "di tou si gu xiang."],
        note: { en: "The most famous Chinese poem. Every child learns it. The moon = home, no matter where you are.", zh: "最有名的中文诗。每个孩子都学。月亮=家，无论你在哪里。" },
      },
      test: {
        title: { en: "Unit 1 Quiz", zh: "第一单元小测" },
        questions: [
          { q: { en: "Ma-ma means...", zh: "妈妈是......" }, options: { en: ["Dad", "Mum", "Sister"], zh: ["爸爸", "妈妈", "姐姐"] }, answer: 1 },
          { q: { en: "Complete: zhe _ my dad", zh: "填空：这_我的爸爸" }, options: { en: ["is", "have", "at"], zh: ["是", "有", "在"] }, answer: 0 },
          { q: { en: "In Quiet Night Thought, what makes the poet think of home?", zh: "《静夜思》里，什么让诗人想家？" }, options: { en: ["The sun", "The moon", "The rain"], zh: ["太阳", "月亮", "雨"] }, answer: 1 },
        ],
      },
    }],
  },
  {
    id: "g2", label: { en: "Grade 2", zh: "二年级" }, ageRange: { en: "Ages 7-8", zh: "7-8 岁" },
    units: [{ id: "g2-u1", title: { en: "Unit 1 - Nature", zh: "第一单元 - 大自然" }, theme: { en: "Weather, seasons, animals", zh: "天气、季节、动物" },
      lessons: [
        { title: { en: "Weather words", zh: "天气词" }, type: "vocab", summary: { en: "Sunny cloudy rain snow wind cloud", zh: "晴 阴 雨 雪 风 云" }, content: { en: "How is the weather today? Sunny, cloudy, raining, snowing. Each word is also a character you can write.", zh: "今天天气怎么样？晴天、阴天、下雨、下雪。每个词也是一个你能写的字。" } },
        { title: { en: "Four seasons", zh: "四季" }, type: "reading", summary: { en: "Spring summer autumn winter - read a short passage.", zh: "春夏秋冬 - 读一段短文。" }, content: { en: "Spring: flowers bloom. Summer: cicadas sing. Autumn: leaves fall. Winter: snow drifts. Each season has its own colour.", zh: "春天花开，夏天蝉鸣，秋天叶落，冬天雪飘。每个季节都有自己的颜色。" } },
      ],
      poem: { title: { en: "Spring Dawn", zh: "春晓" }, author: { en: "Meng Haoran", zh: "孟浩然" },
        lines: { en: ["In spring I sleep, unaware of dawn,", "Everywhere I hear birds singing.", "Last night came sounds of wind and rain,", "Who knows how many petals have fallen?"], zh: ["春眠不觉晓，", "处处闻啼鸟。", "夜来风雨声，", "花落知多少。"] },
        pinyin: ["chun mian bu jue xiao,", "chu chu wen ti niao.", "ye lai feng yu sheng,", "hua luo zhi duo shao."],
        note: { en: "A poem about waking up in spring. The last line is a question - the poet does not know how many flowers fell. That uncertainty is the beauty.", zh: "一首关于春天醒来的诗。最后一句是问句 - 诗人不知道落了多少花。这种不确定就是美。" } },
      test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [
        { q: { en: "xia-xue means...", zh: "下雪是......" }, options: { en: ["Raining", "Snowing", "Windy"], zh: ["下雨", "下雪", "刮风"] }, answer: 1 },
        { q: { en: "In Spring Dawn, what does the poet hear?", zh: "《春晓》里诗人听到了什么？" }, options: { en: ["Rain", "Birds", "Wind"], zh: ["雨", "鸟", "风"] }, answer: 1 },
      ] },
    }],
  },
  { id: "g3", label: { en: "Grade 3", zh: "三年级" }, ageRange: { en: "Ages 8-9", zh: "8-9 岁" }, units: [{ id: "g3-u1", title: { en: "Unit 1 - Stories & Fables", zh: "第一单元 - 故事与寓言" }, theme: { en: "Chinese fables and moral tales", zh: "中国寓言和道德故事" }, lessons: [
    { title: { en: "The fox and the tiger", zh: "狐假虎威" }, type: "reading", summary: { en: "A fox borrows a tiger power.", zh: "狐狸借老虎的威风。" }, content: { en: "A fox walks in front of a tiger. All animals run away - but they are running from the tiger, not the fox. The fox pretends the fear is for him. Idiom meaning: borrowing someone else power to bully others.", zh: "狐狸走在老虎前面。所有动物都跑了 - 但它们怕的是老虎，不是狐狸。狐狸假装大家怕的是他。成语意思：借别人的势力欺负人。" } },
  ], poem: { title: { en: "Climbing Stork Tower", zh: "登鹳雀楼" }, author: { en: "Wang Zhihuan", zh: "王之涣" }, lines: { en: ["The white sun sets behind mountains,", "The Yellow River flows into the sea.", "To see a thousand miles further,", "Climb one more floor."], zh: ["白日依山尽，", "黄河入海流。", "欲穷千里目，", "更上一层楼。"] }, pinyin: ["bai ri yi shan jin,", "huang he ru hai liu.", "yu qiong qian li mu,", "geng shang yi ceng lou."], note: { en: "The last line is used in daily Chinese to mean keep improving. It is encouragement wrapped in poetry.", zh: "最后一句在日常中文里用来表示继续努力。它是包裹在诗里的鼓励。" } },
    test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [ { q: { en: "The fox-tiger idiom means...", zh: "狐假虎威意思是......" }, options: { en: ["A fox is brave", "Borrowing power to bully", "Tigers are scary"], zh: ["狐狸很勇敢", "借势欺人", "老虎很可怕"] }, answer: 1 } ] },
  }] },
  { id: "g4", label: { en: "Grade 4", zh: "四年级" }, ageRange: { en: "Ages 9-10", zh: "9-10 岁" }, units: [{ id: "g4-u1", title: { en: "Unit 1 - Writing Essays", zh: "第一单元 - 写作文" }, theme: { en: "From sentences to paragraphs", zh: "从句子到段落" }, lessons: [
    { title: { en: "The 5-sentence paragraph", zh: "五句话段落" }, type: "writing", summary: { en: "Topic, detail, detail, feeling, close.", zh: "主题、细节、细节、感受、收尾。" }, content: { en: "Structure: 1) Topic sentence. 2-3) Details. 4) Your feeling. 5) Closing thought. Example topic: My School.", zh: "结构：1）主题句。2-3）细节。4）你的感受。5）收尾。例：我的学校。" } },
  ] }] },
  { id: "g5", label: { en: "Grade 5", zh: "五年级" }, ageRange: { en: "Ages 10-11", zh: "10-11 岁" }, units: [{ id: "g5-u1", title: { en: "Unit 1 - Classical Chinese Intro", zh: "第一单元 - 文言文入门" }, theme: { en: "First steps into classical Chinese", zh: "文言文的第一步" }, lessons: [
    { title: { en: "Classical vs modern", zh: "文言 vs 现代" }, type: "grammar", summary: { en: "Same meaning, fewer words.", zh: "同样的意思，更少的字。" }, content: { en: "Modern: I don not know = 4 chars. Classical: wu bu zhi = 3 chars. Modern: Where did you go? Classical: ru he wang? Classical Chinese drops subjects, uses different pronouns, and packs meaning tighter.", zh: "现代：我不知道=4字。文言：吾不知=3字。现代：你去了哪里？文言：汝何往？文言文省略主语、用不同的代词、把意思压得更紧。" } },
  ] }] },
  { id: "g6", label: { en: "Grade 6", zh: "六年级" }, ageRange: { en: "Ages 11-12", zh: "11-12 岁" }, units: [{ id: "g6-u1", title: { en: "Unit 1 - Chinese History", zh: "第一单元 - 中国历史" }, theme: { en: "Dynasties and inventions", zh: "朝代与发明" }, lessons: [
    { title: { en: "Four great inventions", zh: "四大发明" }, type: "culture", summary: { en: "Paper, printing, compass, gunpowder.", zh: "造纸术、印刷术、指南针、火药。" }, content: { en: "Paper (Cai Lun, 105 CE) replaced bamboo strips. Movable type printing (Bi Sheng, 1040 CE) made books affordable. The compass guided ships across oceans. Gunpowder changed warfare forever. All four spread from China to the world via the Silk Road.", zh: "造纸术（蔡伦，公元105年）取代了竹简。活字印刷（毕昇，1040年）让书变得便宜。指南针引导船只跨越大洋。火药永远改变了战争。四大发明都通过丝绸之路从中国传向世界。" } },
  ] }] },
];

export const selfStudyTracks: LevelTrack[] = [
  {
    id: "beginner", label: { en: "Beginner", zh: "入门" }, hskRange: "HSK 1-2",
    desc: { en: "Zero to basic conversation. Pinyin, tones, 300 characters, daily life sentences.", zh: "从零到基本对话。拼音、声调、300字、日常句。" },
    units: [{ id: "beg-u1", title: { en: "Unit 1 - Greetings & Numbers", zh: "第一单元 - 问候与数字" }, theme: { en: "Survival Chinese", zh: "生存中文" },
      lessons: [
        { title: { en: "Hello, goodbye, thanks", zh: "你好、再见、谢谢" }, type: "vocab", summary: { en: "The three words you need on day one.", zh: "第一天需要的三个词。" }, content: { en: "ni-hao = hello (lit. you good). zai-jian = goodbye (lit. see again). xie-xie = thanks. bu-ke-qi = you are welcome (lit. do not be polite).", zh: "你好=hello。再见=goodbye。谢谢=thanks。不客气=you are welcome。" } },
        { title: { en: "Numbers 1-100", zh: "数字 1-100" }, type: "vocab", summary: { en: "1-10 are unique. 11-99 follow a pattern.", zh: "1-10 各不相同。11-99 有规律。" }, content: { en: "yi, er, san, si, wu, liu, qi, ba, jiu, shi. Then: shi-yi (10+1), er-shi (2x10), er-shi-yi (2x10+1)... jiu-shi-jiu (9x10+9), yi-bai (100).", zh: "一二三四五六七八九十。然后：十一(10+1)、二十(2x10)、二十一(2x10+1)......九十九(9x10+9)、一百(100)。" } },
        { title: { en: "What is your name?", zh: "你叫什么名字？" }, type: "grammar", summary: { en: "My name is... / What is your name?", zh: "我叫......／你叫什么名字？" }, content: { en: "wo-jiao + name = My name is... ni-jiao-shen-me-ming-zi = What is your name? ni-ne = And you? (the shortest follow-up question in Chinese).", zh: "我叫+名字=My name is... 你叫什么名字？=What is your name? 你呢？=And you?（中文最短的追问。）" } },
      ],
      culture: { en: "Chinese names put the family name first. Li Bai = family Li, given name Bai. When you introduce yourself in Chinese, say your family name first - it shows respect for your family.", zh: "中文名字姓在前。李白=姓李，名白。用中文自我介绍时先说姓 - 表示对家庭的尊重。" },
    }],
  },
  {
    id: "elementary", label: { en: "Elementary", zh: "初级" }, hskRange: "HSK 3-4",
    desc: { en: "Daily life, travel, opinions. 600 characters, paragraph reading.", zh: "日常生活、旅行、表达观点。600字、段落阅读。" },
    units: [{ id: "ele-u1", title: { en: "Unit 1 - Daily Life", zh: "第一单元 - 日常生活" }, theme: { en: "Food, shopping, directions", zh: "吃饭、购物、问路" },
      lessons: [
        { title: { en: "At the restaurant", zh: "在饭馆" }, type: "reading", summary: { en: "Order food, ask the price, pay.", zh: "点菜、问价、付钱。" }, content: { en: "Waiter: Hello, how many? Customer: Two. Waiter: Here is the menu. Customer: I want kung-pao chicken, mapo tofu, one bowl of rice. Waiter: OK. Total 45 yuan.", zh: "服务员：您好，几位？顾客：两位。服务员：这是菜单。顾客：我要一个宫保鸡丁，一个麻婆豆腐，一碗米饭。服务员：好的。一共四十五块。" } },
      ],
    }],
  },
  {
    id: "intermediate", label: { en: "Intermediate", zh: "中级" }, hskRange: "HSK 5-6",
    desc: { en: "News, culture, debate. 2500 characters, essay writing.", zh: "新闻、文化、辩论。2500字、议论文写作。" },
    units: [{ id: "int-u1", title: { en: "Unit 1 - Culture & Society", zh: "第一单元 - 文化与社会" }, theme: { en: "Festivals, traditions, modern China", zh: "节日、传统、现代中国" },
      lessons: [
        { title: { en: "Why Chinese New Year moves", zh: "为什么春节日期会变" }, type: "culture", summary: { en: "Lunar vs solar calendar explained.", zh: "农历和公历的区别。" }, content: { en: "The solar calendar follows the sun - 365 days, fixed dates. The lunar calendar follows the moon - 354 days, so it drifts about 11 days earlier each solar year. To stay in sync, a leap month is added every 2-3 years. That is why Chinese New Year falls between Jan 21 and Feb 20.", zh: "公历跟太阳走 - 365天，日期固定。农历跟月亮走 - 354天，所以每年比公历早约11天。为了同步，每2-3年加一个闰月。所以春节在1月21日到2月20日之间。" } },
      ],
    }],
  },
  {
    id: "advanced", label: { en: "Advanced", zh: "高级" }, hskRange: "HSK 7-9",
    desc: { en: "Literature, history, academic Chinese. 5000+ characters.", zh: "文学、历史、学术中文。5000+字。" },
    units: [{ id: "adv-u1", title: { en: "Unit 1 - Classical Literature", zh: "第一单元 - 古典文学" }, theme: { en: "Reading original texts", zh: "读原文" },
      lessons: [
        { title: { en: "The Analects, Chapter 1", zh: "《论语》学而篇" }, type: "reading", summary: { en: "Confucius in the original - with modern translation.", zh: "孔子原文 - 附现代翻译。" }, content: { en: "The Master said: Is it not a pleasure to learn and practice what you have learned? Is it not a joy to have friends come from afar? Is he not a gentleman who is not upset when others do not understand him?", zh: "孔子说：学了然后按时温习，不也高兴吗？有朋友从远方来，不也快乐吗？别人不了解自己却不生气，不也是君子吗？" } },
      ],
    }],
  },
];

export const teacherTracks: GradeTrack[] = kidsTracks.map((track) => ({
  ...track,
  id: `teacher-${track.id}`,
  label: { en: `${track.label.en} Teaching Pack`, zh: `${track.label.zh}教学包` },
  units: track.units.map((unit) => ({
    ...unit,
    id: `teacher-${unit.id}`,
    title: { en: `${unit.title.en} - Teacher Guide`, zh: `${unit.title.zh} - 教师指南` },
    lessons: unit.lessons.map((lesson) => ({
      ...lesson,
      title: { en: `${lesson.title.en} - Lesson Plan`, zh: `${lesson.title.zh} - 教案` },
      content: {
        en: `[45-min lesson plan] Warm-up (5 min): Review previous lesson with a quick quiz. Introduction (10 min): Present new content with visual aids. Practice (15 min): Students complete exercises in pairs. Production (10 min): Students present or write. Wrap-up (5 min): Exit ticket - one thing they learned.`,
        zh: `[45分钟教案] 热身（5分钟）：用小测复习上节课。导入（10分钟）：用视觉辅助呈现新内容。练习（15分钟）：学生结对完成练习。产出（10分钟）：学生展示或写作。总结（5分钟）：出口票 - 写一件学到的事。`,
      },
    })),
    test: unit.test ? { ...unit.test, title: { en: `${unit.test.title.en} - Printable Test`, zh: `${unit.test.title.zh} - 可打印试卷` } } : undefined,
  })),
}));
