// 会员教材数据模型：每年级 = 一整学期书（多单元 × 多课 + 古诗 + 试卷 + 文化注 + 识字表）。
// 三个轨道：儿童（按年级）、自学（按级别）、教师（按年级 + 教案/古诗/可打印试卷）。
// 内容精选自部编版小学语文框架 + Loong Kits 自有体系，可继续扩写到全年上下册。
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
  vocab?: Bi<string[]>; // 识字表
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

const p = (...a: string[]) => a; // helper noop to keep pinyin readable

export const kidsTracks: GradeTrack[] = [
  // ───────── 学前 Pre-K ─────────
  {
    id: "prek", label: { en: "Pre-K", zh: "学前" }, ageRange: { en: "Ages 3-5", zh: "3-5 岁" },
    units: [
      {
        id: "prek-u1", title: { en: "Unit 1 - Hello!", zh: "第一单元 - 你好！" },
        theme: { en: "First sounds & first words", zh: "第一批声音和第一批字" },
        lessons: [
          { title: { en: "Pinyin: a o e", zh: "拼音：a o e" }, type: "vocab", summary: { en: "Three open vowels.", zh: "三个开口韵。" }, content: { en: "Open wide for a (ah), round lips for o (oh), smile for e. These three appear in almost every Chinese word.", zh: "张大嘴发 a（啊），圆唇发 o（哦），微笑发 e。这三个音几乎在每个中文词里都有。" } },
          { title: { en: "Pinyin: i u ü", zh: "拼音：i u ü" }, type: "vocab", summary: { en: "Three more vowels.", zh: "再三个韵母。" }, content: { en: "Teeth together for i (ee), round for u (oo), round + forward for ü. ü is new for English speakers - say ee then push lips forward.", zh: "齿合发 i（衣），圆唇发 u（乌），圆唇前突发 ü（淤）。ü 对英语者是新音 - 先发 i 再把嘴唇往前推。" } },
          { title: { en: "First 6 characters", zh: "前六个字" }, type: "writing", summary: { en: "一 二 三 人 大 小.", zh: "一 二 三 人 大 小。" }, content: { en: "One stroke = 1. Two = 2. Three = 3. 人 looks like a person walking. 大 = person with arms wide. 小 = three dots shrinking inward.", zh: "一横=1。两横=2。三横=3。人像一个人在走路。大是人张开手臂。小是三个点往里收。" } },
          { title: { en: "Say hello", zh: "打招呼" }, type: "culture", summary: { en: "Hello, goodbye, thanks.", zh: "你好、再见、谢谢。" }, content: { en: "你好 = you-good. 再见 = see-again. 谢谢 - 谢 has the word-radical: thanks are words you give.", zh: "你好=你+好。再见=再次+见。谢谢 - 谢字左边是言字旁：感谢是你给出的话。" } },
        ],
        poem: { title: { en: "Ode to the Goose", zh: "咏鹅" }, author: { en: "Luo Binwang (age 7)", zh: "骆宾王（七岁）" }, lines: { en: ["Goose, goose, goose,", "Curved neck sings to the sky.", "White feathers float on green water,", "Red palms push through clear waves."], zh: ["鹅，鹅，鹅，", "曲项向天歌。", "白毛浮绿水，", "红掌拨清波。"] }, pinyin: p("e, e, e,", "qu xiang xiang tian ge.", "bai mao fu lu shui,", "hong zhang bo qing bo."), note: { en: "Written by a 7-year-old in the Tang dynasty. The simplest poem - and still beautiful.", zh: "唐代七岁孩子写的。最简单的诗，依然很美。" } },
        test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [ { q: { en: "三 has how many strokes?", zh: "三有几笔？" }, options: { en: ["2", "3", "4"], zh: ["2", "3", "4"] }, answer: 1 }, { q: { en: "你好 means?", zh: "你好是？" }, options: { en: ["Goodbye", "Hello", "Thanks"], zh: ["再见", "你好", "谢谢"] }, answer: 1 } ] },
        culture: { en: "Reduplication (doubling a syllable) shows affection: 爸爸, 妈妈, 哥哥. It also makes words easier for small children to say.", zh: "叠词（音节重复）表示亲昵：爸爸、妈妈、哥哥。也让小孩子更容易发音。" },
        vocab: { en: ["a o e i u ü", "一 二 三", "人 大 小", "你好 谢谢 再见"], zh: ["a o e i u ü", "一 二 三", "人 大 小", "你好 谢谢 再见"] },
      },
      {
        id: "prek-u2", title: { en: "Unit 2 - My Body", zh: "第二单元 - 我的身体" },
        theme: { en: "Body words & pointing", zh: "身体词汇和指认" },
        lessons: [
          { title: { en: "Head, eyes, mouth", zh: "头 眼 嘴" }, type: "vocab", summary: { en: "Point and say.", zh: "指一指，说一说。" }, content: { en: "头 (head), 眼 (eye), 嘴 (mouth), 耳 (ear), 手 (hand), 脚 (foot). Touch each as you say it.", zh: "头、眼、嘴、耳、手、脚。一边说一边摸。" } },
          { title: { en: "Numbers 1-10", zh: "数字 1-10" }, type: "vocab", summary: { en: "Count fingers in Chinese.", zh: "用中文数手指。" }, content: { en: "一 二 三 四 五 六 七 八 九 十. Count your fingers, then count toys.", zh: "一二三四五六七八九十。先数手指，再数玩具。" } },
          { title: { en: "Colors", zh: "颜色" }, type: "vocab", summary: { en: "红 黄 蓝 绿.", zh: "红 黄 蓝 绿。" }, content: { en: "红 (red), 黄 (yellow), 蓝 (blue), 绿 (green). Find something of each color in the room.", zh: "红、黄、蓝、绿。在房间里各找一样这个颜色的东西。" } },
          { title: { en: "I can / I cannot", zh: "我会 / 我不会" }, type: "grammar", summary: { en: "Saying what you can do.", zh: "说自己会做什么。" }, content: { en: "我会跑 (I can run). 我不会飞 (I cannot fly). 会 = have the skill to.", zh: "我会跑。我不会飞。会=有这个能力。" } },
        ],
        poem: { title: { en: "Counting Song", zh: "一去二三里" }, author: { en: "Shao Yong", zh: "邵雍" }, lines: { en: ["A walk of two-three miles,", "Four-five houses in smoke,", "Six-seven pavilions,", "Eight-nine flowers open."], zh: ["一去二三里，", "烟村四五家。", "亭台六七座，", "八九十枝花。"] }, pinyin: p("yi qu er san li,", "yan cun si wu jia.", "ting tai liu qi zuo,", "ba jiu shi zhi hua."), note: { en: "A counting poem: the numbers 1-10 are hidden in the lines.", zh: "一首数数诗：1 到 10 藏在诗句里。" } },
        test: { title: { en: "Unit 2 Quiz", zh: "第二单元小测" }, questions: [ { q: { en: "手 means?", zh: "手是？" }, options: { en: ["Foot", "Hand", "Head"], zh: ["脚", "手", "头"] }, answer: 1 }, { q: { en: "Which is red?", zh: "哪个是红色？" }, options: { en: ["蓝", "红", "绿"], zh: ["蓝", "红", "绿"] }, answer: 1 } ] },
        culture: { en: "In Chinese, color words come before the noun: 红色的车 (red car), not car-red.", zh: "中文里颜色在名词前面：红色的车，不说车红。" },
        vocab: { en: ["头 眼 嘴 耳 手 脚", "1-10", "红 黄 蓝 绿", "会 / 不会"], zh: ["头 眼 嘴 耳 手 脚", "1-10", "红 黄 蓝 绿", "会 / 不会"] },
      },
      {
        id: "prek-u3", title: { en: "Unit 3 - My Day", zh: "第三单元 - 我的一天" },
        theme: { en: "Daily routine & family", zh: "日常和家庭" },
        lessons: [
          { title: { en: "Family words", zh: "家人" }, type: "vocab", summary: { en: "Dad mum grandpa grandma.", zh: "爸妈爷奶。" }, content: { en: "爸爸 妈妈 爷爷 奶奶. Draw your family and label each person.", zh: "爸爸 妈妈 爷爷 奶奶。画一张全家福，给每个人标上称呼。" } },
          { title: { en: "Eat, drink, sleep", zh: "吃 喝 睡" }, type: "vocab", summary: { en: "Three daily verbs.", zh: "三个日常动词。" }, content: { en: "吃饭 (eat), 喝水 (drink water), 睡觉 (sleep). These three actions fill a day.", zh: "吃饭、喝水、睡觉。这三个动作填满一天。" } },
          { title: { en: "Morning & night", zh: "早上 和 晚上" }, type: "reading", summary: { en: "A short day story.", zh: "一个简短的一天故事。" }, content: { en: "早上起床，刷牙洗脸，吃早饭。晚上看月亮，睡觉。Read it as your own day.", zh: "早上起床，刷牙洗脸，吃早饭。晚上看月亮，睡觉。把它读成你自己的一天。" } },
          { title: { en: "Good morning / good night", zh: "早安 晚安" }, type: "culture", summary: { en: "Greetings by time of day.", zh: "按时间的问候。" }, content: { en: "早上好 (good morning), 晚安 (good night). Chinese greets by time, not just hello.", zh: "早上好、晚安。中文按时间问好，不只是说你好。" } },
        ],
        poem: { title: { en: "Quiet Night Thought", zh: "静夜思" }, author: { en: "Li Bai", zh: "李白" }, lines: { en: ["Before my bed, bright moonlight,", "I wonder if it is frost.", "I raise my head to the moon,", "I lower my head and think of home."], zh: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"] }, pinyin: p("chuang qian ming yue guang,", "yi shi di shang shuang.", "ju tou wang ming yue,", "di tou si gu xiang."), note: { en: "The moon = home. Every Chinese child learns this.", zh: "月亮=家。每个中国孩子都学这首。" } },
        test: { title: { en: "Unit 3 Quiz", zh: "第三单元小测" }, questions: [ { q: { en: "吃饭 means?", zh: "吃饭是？" }, options: { en: ["Sleep", "Eat", "Play"], zh: ["睡", "吃", "玩"] }, answer: 1 }, { q: { en: "晚上 you say?", zh: "晚上你说？" }, options: { en: ["早上好", "晚安", "再见"], zh: ["早上好", "晚安", "再见"] }, answer: 1 } ] },
        culture: { en: "Chinese meals are shared from the center of the table, not separate plates. Eating together = family.", zh: "中餐是从桌子中间共享，不分盘。一起吃=一家人。" },
        vocab: { en: ["爸妈爷奶", "吃 喝 睡", "早上 晚上", "早安 晚安"], zh: ["爸妈爷奶", "吃 喝 睡", "早上 晚上", "早安 晚安"] },
      },
    ],
  },

  // ───────── 一年级 Grade 1 ─────────
  {
    id: "g1", label: { en: "Grade 1", zh: "一年级" }, ageRange: { en: "Ages 6-7", zh: "6-7 岁" },
    units: [
      {
        id: "g1-u1", title: { en: "Unit 1 - Heaven, Earth, People", zh: "第一单元 - 天地人" },
        theme: { en: "First characters & the world", zh: "第一批字与世界" },
        lessons: [
          { title: { en: "天地人", zh: "天地人" }, type: "vocab", summary: { en: "Sky, ground, person.", zh: "天、地、人。" }, content: { en: "天 (sky), 地 (ground), 人 (person) - the three biggest things a child sees. You stand on 地, under 天, and are 人.", zh: "天、地、人 - 孩子看到的三个最大的东西。你站在地上，在天底下，是一个人。" } },
          { title: { en: "金木水火土", zh: "金木水火土" }, type: "vocab", summary: { en: "Five elements.", zh: "五行。" }, content: { en: "金 (metal) 木 (wood) 水 (water) 火 (fire) 土 (earth) - ancient Chinese sorted the world into five moving elements.", zh: "金、木、水、火、土 - 古人把世界分成五种会变化的元素。" } },
          { title: { en: "口耳目", zh: "口耳目" }, type: "writing", summary: { en: "Body characters look like the body.", zh: "身体字像身体。" }, content: { en: "口 (mouth) is an open mouth. 耳 (ear) looks like an ear. 目 (eye) is an eye seen from the side. These are pictographs.", zh: "口像张开的嘴。耳像耳朵。目像侧面的眼睛。这些都是象形字。" } },
          { title: { en: "对韵歌", zh: "对韵歌" }, type: "reading", summary: { en: "Opposites that rhyme.", zh: "押韵的反义词。" }, content: { en: "云对雨，雪对风 - cloud pairs with rain, snow pairs with wind. Chinese loves balanced opposites that sound good together.", zh: "云对雨，雪对风。中文喜欢成对、押韵的反义词。" } },
        ],
        poem: { title: { en: "Quiet Night Thought", zh: "静夜思" }, author: { en: "Li Bai", zh: "李白" }, lines: { en: ["Bright moon before my bed,", "Perhaps frost on the ground.", "I raise my head to the moon,", "I lower my head - think of home."], zh: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"] }, pinyin: p("chuang qian ming yue guang,", "yi shi di shang shuang.", "ju tou wang ming yue,", "di tou si gu xiang."), note: { en: "The most famous Chinese poem. Moon = home.", zh: "最有名的中文诗。月亮=家。" } },
        test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [ { q: { en: "Which is fire?", zh: "哪个是火？" }, options: { en: ["金", "火", "水"], zh: ["金", "火", "水"] }, answer: 1 }, { q: { en: "目 looks like a...?", zh: "目像什么？" }, options: { en: ["Mouth", "Eye", "Ear"], zh: ["嘴", "眼", "耳"] }, answer: 1 } ] },
        culture: { en: "Many early Chinese characters are pictures (pictographs). Learning the picture makes the character easy to remember.", zh: "很多早期汉字是画（象形字）。记住画就记住了字。" },
        vocab: { en: ["天 地 人", "金 木 水 火 土", "口 耳 目", "云 雨 雪 风"], zh: ["天 地 人", "金 木 水 火 土", "口 耳 目", "云 雨 雪 风"] },
      },
      {
        id: "g1-u2", title: { en: "Unit 2 - My Family", zh: "第二单元 - 我的家" },
        theme: { en: "Family words & simple sentences", zh: "家庭词汇和简单句" },
        lessons: [
          { title: { en: "Family words", zh: "家庭词汇" }, type: "vocab", summary: { en: "Dad mum brother sister grandpa grandma.", zh: "爸妈哥姐弟妹爷奶。" }, content: { en: "爸爸 妈妈 哥哥 姐姐 弟弟 妹妹 爷爷 奶奶. Elder/younger in the word tells birth order.", zh: "爸爸 妈妈 哥哥 姐姐 弟弟 妹妹 爷爷 奶奶。哥/姐/弟/妹表示出生顺序。" } },
          { title: { en: "This is my...", zh: "这是我的......" }, type: "grammar", summary: { en: "This-is + person.", zh: "这是 + 人。" }, content: { en: "这是我的爸爸. 这是我的妈妈. 这是 works for anything: 这是书, 这是水.", zh: "这是我的爸爸。这是我的妈妈。「这是」什么都能用：这是书、这是水。" } },
          { title: { en: "How many people?", zh: "你家几口人？" }, type: "reading", summary: { en: "Read and answer.", zh: "读一读，答一答。" }, content: { en: "我家有四口人：爸爸、妈妈、我和妹妹。How about yours? Count and say it.", zh: "我家有四口人：爸爸、妈妈、我和妹妹。你家呢？数一数说出来。" } },
          { title: { en: "Big and small", zh: "大和小" }, type: "reading", summary: { en: "Compare sizes.", zh: "比较大小。" }, content: { en: "大象大，小老鼠小. The adjective can come before the noun or after: 大象 = big elephant, 象大 = the elephant is big.", zh: "大象大，小老鼠小。形容词可在名词前或后：大象=大像，象大=像很大。" } },
        ],
        poem: { title: { en: "Sympathy for Farmers", zh: "悯农" }, author: { en: "Li Shen", zh: "李绅" }, lines: { en: ["Hoeing grain in the midday sun,", "Sweat drips into the soil.", "Who knows the food on the plate,", "Every grain is hard work."], zh: ["锄禾日当午，", "汗滴禾下土。", "谁知盘中餐，", "粒粒皆辛苦。"] }, pinyin: p("chu he ri dang wu,", "han di he xia tu.", "shui zhi pan zhong can,", "li li jie xin ku."), note: { en: "A poem teaching children not to waste food - every grain is a farmer's sweat.", zh: "教孩子不浪费粮食 - 每粒米都是农民的汗水。" } },
        test: { title: { en: "Unit 2 Quiz", zh: "第二单元小测" }, questions: [ { q: { en: "妈妈 is...", zh: "妈妈是......" }, options: { en: ["Dad", "Mum", "Sister"], zh: ["爸爸", "妈妈", "姐姐"] }, answer: 1 }, { q: { en: "我家有四...人", zh: "我家有四...人" }, options: { en: ["口", "个", "只"], zh: ["口", "个", "只"] }, answer: 0 } ] },
        culture: { en: "口 is the measure word for family members: 一口人, 四口人. Chinese uses different counters (measure words) for different things.", zh: "口是家人的量词：一口人、四口人。中文对不同东西用不同的量词。" },
        vocab: { en: ["爸妈哥姐弟妹爷奶", "这 是", "几口人", "大 小"], zh: ["爸妈哥姐弟妹爷奶", "这 是", "几口人", "大 小"] },
      },
      {
        id: "g1-u3", title: { en: "Unit 3 - Small Boat & Autumn", zh: "第三单元 - 小船与秋天" },
        theme: { en: "Reading short poems & nature", zh: "读短诗与自然" },
        lessons: [
          { title: { en: "The moon is a boat", zh: "小小的船" }, type: "reading", summary: { en: "The crescent moon as a small boat.", zh: "弯月像一只小船。" }, content: { en: "弯弯的月儿小小的船，小小的船儿两头尖. The poet sees the crescent moon as a little boat you could sit in.", zh: "弯弯的月儿小小的船，小小的船儿两头尖。诗人把弯月看成一只可以坐进去的小船。" } },
          { title: { en: "Autumn", zh: "秋天" }, type: "reading", summary: { en: "Leaves fall, weather cools.", zh: "落叶，天凉。" }, content: { en: "秋天来了，天气凉了，树叶黄了，一片片叶子从树上落下来. The signs of autumn in four short sentences.", zh: "秋天来了，天气凉了，树叶黄了，一片片叶子从树上落下来。四句话写尽秋天。" } },
          { title: { en: "Drawing in the snow", zh: "雪地里的小画家" }, type: "reading", summary: { en: "Animals leave footprints like paintings.", zh: "动物脚印像画画。" }, content: { en: "小鸡画竹叶，小狗画梅花 - a chick's footprint looks like bamboo leaves, a dog's like plum blossoms. Snow is their paper.", zh: "小鸡画竹叶，小狗画梅花 - 小鸡脚印像竹叶，小狗脚印像梅花。雪是它们的纸。" } },
          { title: { en: "I can read pinyin", zh: "我会拼音" }, type: "listening", summary: { en: "Blend consonants and vowels.", zh: "拼声母和韵母。" }, content: { en: "b + a = ba. p + o = po. m + i = mi. f + u = fu. Put a consonant before a vowel and you read your first syllables.", zh: "b + a = ba。p + o = po。m + i = mi。f + u = fu。声母+韵母就能拼出第一批音节。" } },
        ],
        poem: { title: { en: "Spring Dawn", zh: "春晓" }, author: { en: "Meng Haoran", zh: "孟浩然" }, lines: { en: ["In spring I sleep, unaware of dawn,", "Everywhere I hear birds.", "Last night came wind and rain,", "How many petals fell?"], zh: ["春眠不觉晓，", "处处闻啼鸟。", "夜来风雨声，", "花落知多少。"] }, pinyin: p("chun mian bu jue xiao,", "chu chu wen ti niao.", "ye lai feng yu sheng,", "hua luo zhi duo shao."), note: { en: "The last line is a question - the poet does not know. That uncertainty is the beauty.", zh: "最后一句是问句 - 诗人不知道。这种不确定就是美。" } },
        test: { title: { en: "Unit 3 Quiz", zh: "第三单元小测" }, questions: [ { q: { en: "The small boat is the...?", zh: "小船是......？" }, options: { en: ["Sun", "Moon", "Star"], zh: ["太阳", "月亮", "星星"] }, answer: 1 }, { q: { en: "b + a = ?", zh: "b + a = ?" }, options: { en: ["ba", "bo", "bi"], zh: ["ba", "bo", "bi"] }, answer: 0 } ] },
        culture: { en: "Chinese poems often compare one thing to another (metaphor): moon = boat, moon = plate. Finding the comparison is half the fun.", zh: "中文诗常把一物比作另一物（比喻）：月=船，月=盘。找出比喻就是一半乐趣。" },
        vocab: { en: ["月 船 秋 叶 雪", "b p m f + a o i u", "小 大", "黄 绿"], zh: ["月 船 秋 叶 雪", "b p m f + a o i u", "小 大", "黄 绿"] },
      },
    ],
  },

  // ───────── 二年级 Grade 2 ─────────
  {
    id: "g2", label: { en: "Grade 2", zh: "二年级" }, ageRange: { en: "Ages 7-8", zh: "7-8 岁" },
    units: [
      {
        id: "g2-u1", title: { en: "Unit 1 - Nature's Scenes", zh: "第一单元 - 大自然" },
        theme: { en: "Weather, scenery, the world", zh: "天气、风景、世界" },
        lessons: [
          { title: { en: "Scenery words", zh: "风景词" }, type: "vocab", summary: { en: "山 水 田 林.", zh: "山 水 田 林。" }, content: { en: "山 (mountain), 水 (water), 田 (field), 林 (forest). These four make up the Chinese countryside.", zh: "山、水、田、林。这四个字组成中国乡村。" } },
          { title: { en: "Weather words", zh: "天气词" }, type: "vocab", summary: { en: "晴 阴 雨 雪 风.", zh: "晴 阴 雨 雪 风。" }, content: { en: "晴 (sunny), 阴 (cloudy), 雨 (rain), 雪 (snow), 风 (wind). Today's weather - say it in Chinese.", zh: "晴、阴、雨、雪、风。今天的天气 - 用中文说。" } },
          { title: { en: "The scene at the tower", zh: "登鹳雀楼" }, type: "reading", summary: { en: "A view from high up.", zh: "高处看到的景色。" }, content: { en: "白日依山尽，黄河入海流. The sun sets behind mountains, the Yellow River flows to the sea - seen from a tall tower.", zh: "白日依山尽，黄河入海流。太阳落到山后，黄河流入大海 - 从高楼上看到的景色。" } },
          { title: { en: "Describe a picture", zh: "看图说话" }, type: "writing", summary: { en: "Who, where, doing what.", zh: "谁、在哪、做什么。" }, content: { en: "Look at a picture. Say: 谁 (who) 在哪里 (where) 做什么 (doing what). Three answers = one sentence.", zh: "看一幅图。说：谁 在哪里 做什么。三个答案=一句话。" } },
        ],
        poem: { title: { en: "Climbing Stork Tower", zh: "登鹳雀楼" }, author: { en: "Wang Zhihuan", zh: "王之涣" }, lines: { en: ["The sun sets behind mountains,", "The Yellow River enters the sea.", "To see a thousand miles more,", "Climb one more floor."], zh: ["白日依山尽，", "黄河入海流。", "欲穷千里目，", "更上一层楼。"] }, pinyin: p("bai ri yi shan jin,", "huang he ru hai liu.", "yu qiong qian li mu,", "geng shang yi ceng lou."), note: { en: "The last line means: keep improving. Encouragement wrapped in poetry.", zh: "最后一句意思是：继续努力。诗里的鼓励。" } },
        test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [ { q: { en: "下雪 means?", zh: "下雪是？" }, options: { en: ["Rain", "Snow", "Wind"], zh: ["下雨", "下雪", "刮风"] }, answer: 1 }, { q: { en: "登鹳雀楼 last line means?", zh: "登鹳雀楼最后一句意思是？" }, options: { en: ["Give up", "Keep improving", "Go home"], zh: ["放弃", "继续努力", "回家"] }, answer: 1 } ] },
        culture: { en: "The Yellow River (黄河) is called the mother river of Chinese civilization. Many poems are set along it.", zh: "黄河被称为中华文明的母亲河。很多诗以它为背景。" },
        vocab: { en: ["山 水 田 林", "晴 阴 雨 雪 风", "看图说话", "黄河"], zh: ["山 水 田 林", "晴 阴 雨 雪 风", "看图说话", "黄河"] },
      },
      {
        id: "g2-u2", title: { en: "Unit 2 - Animals", zh: "第二单元 - 小动物" },
        theme: { en: "Animals & fables", zh: "动物与寓言" },
        lessons: [
          { title: { en: "Animal words", zh: "动物词" }, type: "vocab", summary: { en: "马 牛 羊 鸡 鱼.", zh: "马 牛 羊 鸡 鱼。" }, content: { en: "马 (horse), 牛 (cow), 羊 (sheep), 鸡 (chicken), 鱼 (fish). Note 鱼 has no legs - it is a picture of a fish.", zh: "马、牛、羊、鸡、鱼。注意鱼没有腿 - 它是鱼的象形字。" } },
          { title: { en: "The fox and the tiger", zh: "狐假虎威" }, type: "reading", summary: { en: "A fox borrows a tiger's power.", zh: "狐狸借老虎的威风。" }, content: { en: "A fox walks before a tiger; animals flee the tiger, not the fox. Idiom: borrowing another's power to bully.", zh: "狐狸走在老虎前面；动物怕的是老虎，不是狐狸。成语：借势欺人。" } },
          { title: { en: "Drawing snakes with feet", zh: "画蛇添足" }, type: "reading", summary: { en: "Adding feet ruins it.", zh: "添脚反而坏事。" }, content: { en: "A man finishes a snake first, then adds feet - and loses. Meaning: extra, needless work ruins the result.", zh: "一个人先画完蛇，又给蛇添脚 - 反而输了。意思：多此一举反而坏事。" } },
          { title: { en: "Compare two animals", zh: "比一比" }, type: "grammar", summary: { en: "A 比 B + adjective.", zh: "A 比 B + 形容词。" }, content: { en: "马比牛快 (horse is faster than cow). 比 = compared to. Put 比 between two things, then the adjective.", zh: "马比牛快。比=compared to。两物之间放比，后面接形容词。" } },
        ],
        poem: { title: { en: "Ode to the Goose", zh: "咏鹅" }, author: { en: "Luo Binwang (age 7)", zh: "骆宾王（七岁）" }, lines: { en: ["Goose, goose, goose,", "Curved neck sings to the sky.", "White feathers on green water,", "Red palms push clear waves."], zh: ["鹅，鹅，鹅，", "曲项向天歌。", "白毛浮绿水，", "红掌拨清波。"] }, pinyin: p("e, e, e,", "qu xiang xiang tian ge.", "bai mao fu lu shui,", "hong zhang bo qing bo."), note: { en: "Written by a 7-year-old. Color words: white, green, red - in four lines.", zh: "七岁孩子写的。四行里有白、绿、红三种颜色。" } },
        test: { title: { en: "Unit 2 Quiz", zh: "第二单元小测" }, questions: [ { q: { en: "狐假虎威 means?", zh: "狐假虎威意思是？" }, options: { en: ["A brave fox", "Borrowing power", "Scary tigers"], zh: ["勇敢的狐狸", "借势欺人", "可怕的老虎"] }, answer: 1 }, { q: { en: "马比牛...?", zh: "马比牛......？" }, options: { en: ["慢", "快", "大"], zh: ["慢", "快", "大"] }, answer: 1 } ] },
        culture: { en: "Chinese idioms (chengyu) are mostly 4 characters and each tells a whole story. Knowing 100 idioms unlocks a lot of reading.", zh: "成语大多四字，每个讲一整个故事。学会 100 个能打开大量阅读。" },
        vocab: { en: ["马 牛 羊 鸡 鱼", "比", "快 慢 大 小", "狐假虎威 画蛇添足"], zh: ["马 牛 羊 鸡 鱼", "比", "快 慢 大 小", "狐假虎威 画蛇添足"] },
      },
      {
        id: "g2-u3", title: { en: "Unit 3 - Family & Feelings", zh: "第三单元 - 家与感受" },
        theme: { en: "Emotions & home", zh: "情感与家" },
        lessons: [
          { title: { en: "Feeling words", zh: "感受词" }, type: "vocab", summary: { en: "高兴 伤心 生气 害怕.", zh: "高兴 伤心 生气 害怕。" }, content: { en: "高兴 (happy), 伤心 (sad), 生气 (angry), 害怕 (afraid). Name your feeling in Chinese today.", zh: "高兴、伤心、生气、害怕。今天用中文说说你的感受。" } },
          { title: { en: "My home", zh: "我的家" }, type: "reading", summary: { en: "A short warm passage.", zh: "一段温暖的短文。" }, content: { en: "我的家不大，但是很温暖. 家 is the character for home: a roof over a pig - ancient Chinese kept animals under the same roof.", zh: "我的家不大，但是很温暖。家这个字是屋顶下一头猪 - 古人把牲口养在屋里。" } },
          { title: { en: "Mother's love", zh: "游子吟" }, type: "reading", summary: { en: "A mother sews for her leaving son.", zh: "母亲为远行的儿子缝衣。" }, content: { en: "慈母手中线，游子身上衣. A mother's thread becomes her son's shirt. The poem asks how a child can ever repay such love.", zh: "慈母手中线，游子身上衣。母亲的线变成儿子的衣。诗里问孩子怎能报答这份爱。" } },
          { title: { en: "Write a feeling sentence", zh: "写感受句" }, type: "writing", summary: { en: "I feel ___ because ___.", zh: "我___因为___。" }, content: { en: "Pattern: 我很高兴，因为... Finish the sentence with your own reason. Feelings + reasons = real writing.", zh: "句型：我很高兴，因为...... 写上你自己的原因。感受+原因=真正的写作。" } },
        ],
        poem: { title: { en: "Song of the Wanderer", zh: "游子吟" }, author: { en: "Meng Jiao", zh: "孟郊" }, lines: { en: ["A kind mother's thread in hand,", "Sews the shirt of her leaving son.", "She sews densely, fearing his late return -", "Who says a child's small heart can repay the spring sun?"], zh: ["慈母手中线，", "游子身上衣。", "临行密密缝，", "意恐迟迟归。", "谁言寸草心，", "报得三春晖。"] }, pinyin: p("ci mu shou zhong xian,", "you zi shen shang yi.", "lin xing mi mi feng,", "yi kong chi chi gui.", "shui yan cun cao xin,", "bao de san chun hui."), note: { en: "Mother's love = spring sun. The child = small grass. Can grass repay the sun?", zh: "母爱=春天的太阳。孩子=小草。小草能报答太阳吗？" } },
        test: { title: { en: "Unit 3 Quiz", zh: "第三单元小测" }, questions: [ { q: { en: "高兴 means?", zh: "高兴是？" }, options: { en: ["Sad", "Happy", "Angry"], zh: ["伤心", "高兴", "生气"] }, answer: 1 }, { q: { en: "家 has a... under the roof?", zh: "家字屋顶下是......？" }, options: { en: ["Pig", "Person", "Tree"], zh: ["猪", "人", "树"] }, answer: 0 } ] },
        culture: { en: "The character 家 (home) is a roof over a pig - because ancient families kept livestock indoors. Characters carry history.", zh: "家字是屋顶下一头猪 - 因为古人把牲口养在屋里。汉字里藏着历史。" },
        vocab: { en: ["高兴 伤心 生气 害怕", "家 温暖", "因为", "母亲 儿子"], zh: ["高兴 伤心 生气 害怕", "家 温暖", "因为", "母亲 儿子"] },
      },
    ],
  },

  // ───────── 三年级 Grade 3 ─────────
  {
    id: "g3", label: { en: "Grade 3", zh: "三年级" }, ageRange: { en: "Ages 8-9", zh: "8-9 岁" },
    units: [
      {
        id: "g3-u1", title: { en: "Unit 1 - Idiom Stories", zh: "第一单元 - 成语故事" },
        theme: { en: "Four-character wisdom", zh: "四字智慧" },
        lessons: [
          { title: { en: "Drawing snakes with feet", zh: "画蛇添足" }, type: "reading", summary: { en: "Adding feet ruins the snake.", zh: "给蛇添脚反而坏事。" }, content: { en: "In a snake-drawing contest, the first to finish adds feet - and loses, because a snake with feet is not a snake. Meaning: needless extra work ruins the result.", zh: "画蛇比赛，先画完的给蛇添脚 - 反而输了，带脚的蛇不是蛇。意思：多此一举反而坏事。" } },
          { title: { en: "Waiting for a rabbit", zh: "守株待兔" }, type: "reading", summary: { en: "A farmer waits for luck.", zh: "农夫等运气。" }, content: { en: "A rabbit hits a stump and dies. The farmer stops farming and waits for more - and starves. Meaning: you cannot live on luck.", zh: "兔子撞死在树桩上。农夫不再种地，天天等兔子 - 最后饿死。意思：不能靠运气活着。" } },
          { title: { en: "The fox and the tiger", zh: "狐假虎威" }, type: "reading", summary: { en: "Borrowing a tiger's power.", zh: "借老虎的威风。" }, content: { en: "A fox walks before a tiger; animals flee the tiger. The fox pretends the fear is for him. Meaning: borrowing power to bully.", zh: "狐狸走在老虎前面；动物怕的是老虎。狐狸假装大家怕的是他。意思：借势欺人。" } },
          { title: { en: "The frog in the well", zh: "井底之蛙" }, type: "reading", summary: { en: "A frog thinks the sky is small.", zh: "井里的青蛙以为天很小。" }, content: { en: "A frog lives in a well and thinks the sky is as big as the well's mouth. Meaning: a narrow view of the world.", zh: "青蛙住在井里，以为天只有井口那么大。意思：见识狭小。" } },
        ],
        poem: { title: { en: "Climbing Stork Tower", zh: "登鹳雀楼" }, author: { en: "Wang Zhihuan", zh: "王之涣" }, lines: { en: ["Sun sets behind mountains,", "Yellow River enters the sea.", "To see a thousand miles more,", "Climb one more floor."], zh: ["白日依山尽，", "黄河入海流。", "欲穷千里目，", "更上一层楼。"] }, pinyin: p("bai ri yi shan jin,", "huang he ru hai liu.", "yu qiong qian li mu,", "geng shang yi ceng lou."), note: { en: "Stand higher to see farther - a lesson in effort.", zh: "站得高才能看得远 - 关于努力的道理。" } },
        test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [ { q: { en: "守株待兔 teaches...", zh: "守株待兔告诉我们......" }, options: { en: ["Work hard", "Wait for luck", "Run fast"], zh: ["要努力", "等运气", "跑得快"] }, answer: 0 }, { q: { en: "井底之蛙 has a... view.", zh: "井底之蛙......见识。" }, options: { en: ["Wide", "Narrow", "High"], zh: ["宽", "窄", "高"] }, answer: 1 } ] },
        culture: { en: "Chengyu (idioms) are almost always 4 characters. Each is a whole story compressed - learn the story and the idiom sticks.", zh: "成语几乎都是四字。每个都是压缩的故事 - 学了故事就记住了成语。" },
        vocab: { en: ["画蛇添足 守株待兔", "狐假虎威 井底之蛙", "借 等假", "威 势"], zh: ["画蛇添足 守株待兔", "狐假虎威 井底之蛙", "借 等假", "威 势"] },
      },
      {
        id: "g3-u2", title: { en: "Unit 2 - Observing the World", zh: "第二单元 - 观察世界" },
        theme: { en: "Look closely, write clearly", zh: "仔细看，清楚写" },
        lessons: [
          { title: { en: "Five senses", zh: "五种感官" }, type: "vocab", summary: { en: "看 听 闻 尝 摸.", zh: "看 听 闻 尝 摸。" }, content: { en: "看 (see), 听 (hear), 闻 (smell), 尝 (taste), 摸 (touch). Use all five to describe an apple.", zh: "看、听、闻、尝、摸。用这五种感官描述一个苹果。" } },
          { title: { en: "Describe in order", zh: "按顺序写" }, type: "writing", summary: { en: "First, then, finally.", zh: "先、再、最后。" }, content: { en: "Use 先... 再... 最后... to put events in order. 先洗手，再吃饭，最后洗碗.", zh: "用先......再......最后......把事情排序。先洗手，再吃饭，最后洗碗。" } },
          { title: { en: "A spring morning", zh: "春天的早晨" }, type: "reading", summary: { en: "Read a descriptive passage.", zh: "读一段描写。" }, content: { en: "春天的早晨，鸟儿唱歌，花儿开了，空气里有香味. Notice: sound, sight, smell - three senses in two lines.", zh: "春天的早晨，鸟儿唱歌，花儿开了，空气里有香味。注意：听觉、视觉、嗅觉 - 两行里三种感官。" } },
          { title: { en: "Questions: how and why", zh: "怎么 为什么" }, type: "grammar", summary: { en: "Asking deep questions.", zh: "问深一点的问题。" }, content: { en: "怎么 (how) and 为什么 (why) open up deeper answers than 什么 (what) and 谁 (who). Practice asking how and why.", zh: "怎么和为什么能问出比什么和谁更深的答案。练习问怎么和为什么。" } },
        ],
        poem: { title: { en: "Spring Dawn", zh: "春晓" }, author: { en: "Meng Haoran", zh: "孟浩然" }, lines: { en: ["Spring sleep, unaware of dawn,", "Everywhere I hear birds.", "Last night, wind and rain,", "How many petals fell?"], zh: ["春眠不觉晓，", "处处闻啼鸟。", "夜来风雨声，", "花落知多少。"] }, pinyin: p("chun mian bu jue xiao,", "chu chu wen ti niao.", "ye lai feng yu sheng,", "hua luo zhi duo shao."), note: { en: "The poet wakes and wonders how many flowers fell - observation as poetry.", zh: "诗人醒来想：落了多少花？- 把观察写成诗。" } },
        test: { title: { en: "Unit 2 Quiz", zh: "第二单元小测" }, questions: [ { q: { en: "闻 means?", zh: "闻是？" }, options: { en: ["See", "Smell", "Hear"], zh: ["看", "闻", "听"] }, answer: 1 }, { q: { en: "Order: ___ 洗手, 再吃饭", zh: "排序：___洗手，再吃饭" }, options: { en: ["先", "最后", "又"], zh: ["先", "最后", "又"] }, answer: 0 } ] },
        culture: { en: "Good writing uses the senses. Chinese has single verbs for each sense: 看 听 闻 尝 摸 - very efficient.", zh: "好文章用感官。中文每种感官都有单字动词：看听闻尝摸，很高效。" },
        vocab: { en: ["看 听 闻 尝 摸", "先 再 最后", "怎么 为什么", "鸟 花 香"], zh: ["看 听 闻 尝 摸", "先 再 最后", "怎么 为什么", "鸟 花 香"] },
      },
      {
        id: "g3-u3", title: { en: "Unit 3 - Festivals & Tradition", zh: "第三单元 - 节日与传承" },
        theme: { en: "Why we celebrate", zh: "为什么过节" },
        lessons: [
          { title: { en: "Spring Festival", zh: "春节" }, type: "culture", summary: { en: "The biggest Chinese holiday.", zh: "最大的中国节日。" }, content: { en: "春节 = Chinese New Year, on the lunar new year. Families reunite, eat dumplings, give red envelopes, light firecrackers to scare away the year-beast.", zh: "春节=农历新年。全家团圆，吃饺子，发红包，放鞭炮吓走年兽。" } },
          { title: { en: "Mid-Autumn Festival", zh: "中秋节" }, type: "culture", summary: { en: "Mooncakes and the full moon.", zh: "月饼和满月。" }, content: { en: "中秋节 = Mid-Autumn, on the 15th of the 8th lunar month. The moon is fullest. Families share mooncakes - round = reunion.", zh: "中秋节=农历八月十五。月亮最圆。全家分月饼 - 圆=团圆。" } },
          { title: { en: "Dragon Boat Festival", zh: "端午节" }, type: "culture", summary: { en: "Zongzi and the poet Qu Yuan.", zh: "粽子和诗人屈原。" }, content: { en: "端午节 honors Qu Yuan, a patriotic poet who drowned himself. People threw zongzi (rice dumplings) into the river so fish would not eat him.", zh: "端午节纪念投江的爱国诗人屈原。人们把粽子扔进河里，让鱼不吃他。" } },
          { title: { en: "Write a festival", zh: "写一个节日" }, type: "writing", summary: { en: "When, what, why.", zh: "时间、做什么、为什么。" }, content: { en: "Pick a festival. Write: 时间 (when), 做什么 (what we do), 为什么 (why). Three parts = a festival report.", zh: "选一个节日。写：时间、做什么、为什么。三部分=一篇节日说明。" } },
        ],
        poem: { title: { en: "Quiet Night Thought", zh: "静夜思" }, author: { en: "Li Bai", zh: "李白" }, lines: { en: ["Bright moon before my bed,", "Perhaps frost on the ground.", "I raise my head to the moon,", "Lower my head - think of home."], zh: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"] }, pinyin: p("chuang qian ming yue guang,", "yi shi di shang shuang.", "ju tou wang ming yue,", "di tou si gu xiang."), note: { en: "The moon at Mid-Autumn = family. The same moon Li Bai saw.", zh: "中秋的月亮=家人。和李白看的是同一轮月。" } },
        test: { title: { en: "Unit 3 Quiz", zh: "第三单元小测" }, questions: [ { q: { en: "Mooncakes are eaten at...?", zh: "月饼在......吃？" }, options: { en: ["Spring Festival", "Mid-Autumn", "Dragon Boat"], zh: ["春节", "中秋", "端午"] }, answer: 1 }, { q: { en: "端午节 remembers...?", zh: "端午节纪念......？" }, options: { en: ["Qu Yuan", "Li Bai", "Confucius"], zh: ["屈原", "李白", "孔子"] }, answer: 0 } ] },
        culture: { en: "Most Chinese festivals follow the lunar calendar, so their dates move each solar year. The festival is about meaning, not a fixed date.", zh: "大多数中国节日按农历，所以每年公历日期不同。节日重在意义，不在固定日期。" },
        vocab: { en: ["春节 中秋 端午", "饺子 月饼 粽子", "团圆", "农历"], zh: ["春节 中秋 端午", "饺子 月饼 粽子", "团圆", "农历"] },
      },
    ],
  },

  // ───────── 四年级 Grade 4 ─────────
  {
    id: "g4", label: { en: "Grade 4", zh: "四年级" }, ageRange: { en: "Ages 9-10", zh: "9-10 岁" },
    units: [
      {
        id: "g4-u1", title: { en: "Unit 1 - Writing Paragraphs", zh: "第一单元 - 写段落" },
        theme: { en: "From sentences to paragraphs", zh: "从句子到段落" },
        lessons: [
          { title: { en: "The topic sentence", zh: "主题句" }, type: "writing", summary: { en: "One sentence tells the main idea.", zh: "一句说主要意思。" }, content: { en: "A paragraph's first sentence should tell what the whole paragraph is about. Topic: My school -> Our school is small but lively.", zh: "段落第一句应说清整段讲什么。主题：我的学校 -> 我们学校小但很活泼。" } },
          { title: { en: "Details that support", zh: "支撑细节" }, type: "writing", summary: { en: "Two or three details.", zh: "两三个细节。" }, content: { en: "After the topic, give 2-3 details: how many students, the playground, the library. Each detail proves the topic.", zh: "主题后给两三个细节：多少学生、操场、图书馆。每个细节都支撑主题。" } },
          { title: { en: "The feeling sentence", zh: "感受句" }, type: "writing", summary: { en: "Add your heart.", zh: "加上你的心。" }, content: { en: "Before closing, add how you feel: 我爱我的学校. A paragraph without feeling reads like a list.", zh: "收尾前加感受：我爱我的学校。没有感受的段落像清单。" } },
          { title: { en: "Conjunctions", zh: "关联词" }, type: "grammar", summary: { en: "Because, but, so.", zh: "因为、但是、所以。" }, content: { en: "因为...所以... (because... so...). 虽然...但是... (although... but...). These glue sentences into a flowing paragraph.", zh: "因为......所以......。虽然......但是......。这些把句子粘成流畅的段落。" } },
        ],
        poem: { title: { en: "Sympathy for Farmers", zh: "悯农" }, author: { en: "Li Shen", zh: "李绅" }, lines: { en: ["Hoeing grain at noon,", "Sweat drips to the soil.", "Who knows the food on the plate,", "Each grain is hard work."], zh: ["锄禾日当午，", "汗滴禾下土。", "谁知盘中餐，", "粒粒皆辛苦。"] }, pinyin: p("chu he ri dang wu,", "han di he xia tu.", "shui zhi pan zhong can,", "li li jie xin ku."), note: { en: "A poem with a lesson: do not waste food. Topic + feeling in four lines.", zh: "带道理的诗：别浪费粮食。四行里既有主题也有感受。" } },
        test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [ { q: { en: "The topic sentence is usually...?", zh: "主题句通常在......？" }, options: { en: ["First", "Middle", "Last"], zh: ["开头", "中间", "结尾"] }, answer: 0 }, { q: { en: "因为...___", zh: "因为......___" }, options: { en: ["所以", "但是", "和"], zh: ["所以", "但是", "和"] }, answer: 0 } ] },
        culture: { en: "Chinese essays value a clear structure: 起 (open) 承 (develop) 转 (turn) 合 (close). Topic, details, turn, feeling.", zh: "中文作文讲究结构：起承转合。主题、细节、转折、收尾。" },
        vocab: { en: ["主题 细节 感受", "因为 所以", "虽然 但是", "起承转合"], zh: ["主题 细节 感受", "因为 所以", "虽然 但是", "起承转合"] },
      },
      {
        id: "g4-u2", title: { en: "Unit 2 - Letters & Notes", zh: "第二单元 - 书信与笔记" },
        theme: { en: "Practical writing", zh: "应用文" },
        lessons: [
          { title: { en: "Write a letter", zh: "写信" }, type: "writing", summary: { en: "Greeting, body, signature.", zh: "称呼、正文、署名。" }, content: { en: "亲爱的... (dear), 正文 (body), 此致敬礼 (closing), 你的朋友... (signature + date). A letter has fixed parts.", zh: "亲爱的......、正文、此致敬礼、你的朋友......（署名+日期）。信有固定格式。" } },
          { title: { en: "Write a diary", zh: "写日记" }, type: "writing", summary: { en: "Date, weather, the day.", zh: "日期、天气、当天的事。" }, content: { en: "Top: 月 日 星期 天气. Then what happened, and how you felt. A diary is a letter to yourself.", zh: "开头：月 日 星期 天气。然后写发生了什么，你的感受。日记是写给自己的信。" } },
          { title: { en: "Take notes", zh: "做笔记" }, type: "writing", summary: { en: "Key words, not whole sentences.", zh: "记关键词，不记整句。" }, content: { en: "Good notes use short phrases, not full sentences: 春节-农历新年-团圆-饺子. Short = fast and easy to review.", zh: "好笔记用短语不用整句：春节-农历新年-团圆-饺子。短=快、好复习。" } },
          { title: { en: "Polite requests", zh: "礼貌请求" }, type: "grammar", summary: { en: "Please, may I, could you.", zh: "请、可以吗、能不能。" }, content: { en: "请 (please) + verb: 请坐, 请说. 可以吗 (may I)? 能不能 (could you)? Politeness softens requests in Chinese.", zh: "请+动词：请坐、请说。可以吗？能不能？礼貌让请求更委婉。" } },
        ],
        poem: { title: { en: "Song of the Wanderer", zh: "游子吟" }, author: { en: "Meng Jiao", zh: "孟郊" }, lines: { en: ["Kind mother's thread in hand,", "Sews her leaving son's shirt.", "She sews densely, fearing late return -", "Who says small grass can repay the spring sun?"], zh: ["慈母手中线，", "游子身上衣。", "临行密密缝，", "意恐迟迟归。", "谁言寸草心，", "报得三春晖。"] }, pinyin: p("ci mu shou zhong xian,", "you zi shen shang yi.", "lin xing mi mi feng,", "yi kong chi chi gui.", "shui yan cun cao xin,", "bao de san chun hui."), note: { en: "A letter of thanks to a mother, in poetry form.", zh: "一首用诗写的、给母亲的感谢信。" } },
        test: { title: { en: "Unit 2 Quiz", zh: "第二单元小测" }, questions: [ { q: { en: "A letter ends with...?", zh: "信的结尾是......？" }, options: { en: ["Signature", "Topic", "Question"], zh: ["署名", "主题", "问题"] }, answer: 0 }, { q: { en: "请 means?", zh: "请是？" }, options: { en: ["Please", "Sorry", "Thanks"], zh: ["请", "对不起", "谢谢"] }, answer: 0 } ] },
        culture: { en: "此致敬礼 (ci zhi jing li) is the classic Chinese letter closing: hereby with respect. Letters carry formality.", zh: "此致敬礼是中文信的经典结尾：在此致敬。信承载着礼数。" },
        vocab: { en: ["称呼 正文 署名", "月日星期天气", "请 可以吗", "此致敬礼"], zh: ["称呼 正文 署名", "月日星期天气", "请 可以吗", "此致敬礼"] },
      },
      {
        id: "g4-u3", title: { en: "Unit 3 - Describing Places", zh: "第三单元 - 写风景" },
        theme: { en: "Describe what you see", zh: "描写所见" },
        lessons: [
          { title: { en: "Spatial order", zh: "空间顺序" }, type: "writing", summary: { en: "Near to far, top to bottom.", zh: "由近到远、由上到下。" }, content: { en: "Describe a place in a fixed order: 从上到下 (top-down), 从近到远 (near-far). Readers can follow like a camera.", zh: "按固定顺序描写：从上到下、从近到远。读者像镜头一样跟得上。" } },
          { title: { en: "Use adjectives", zh: "用形容词" }, type: "grammar", summary: { en: "的 links adjective to noun.", zh: "的连接形容词和名词。" }, content: { en: "红 + 的 + 花 = 红的花. 的 is the most-used character in Chinese - it links describer to described.", zh: "红+的+花=红的花。的是中文最常用的字 - 它连接描写和被描写。" } },
          { title: { en: "A market scene", zh: "菜市场" }, type: "reading", summary: { en: "Read a lively description.", zh: "读一段热闹的描写。" }, content: { en: "菜市场里人很多，叫卖声此起彼伏，红的西红柿、绿的青菜、黄的玉米. Colors + sounds = a living scene.", zh: "菜市场里人很多，叫卖声此起彼伏，红的西红柿、绿的青菜、黄的玉米。颜色+声音=活的画面。" } },
          { title: { en: "Show, don't tell", zh: "描写不直说" }, type: "writing", summary: { en: "Describe, don't label.", zh: "描写，不贴标签。" }, content: { en: "Don't say 很热闹 (very lively). Show it: 叫卖声此起彼伏. Showing is stronger than telling.", zh: "不要说很热闹。要写出来：叫卖声此起彼伏。展示比直说更有力。" } },
        ],
        poem: { title: { en: "Spring Dawn", zh: "春晓" }, author: { en: "Meng Haoran", zh: "孟浩然" }, lines: { en: ["Spring sleep, unaware of dawn,", "Everywhere birds.", "Wind and rain last night,", "How many petals fell?"], zh: ["春眠不觉晓，", "处处闻啼鸟。", "夜来风雨声，", "花落知多少。"] }, pinyin: p("chun mian bu jue xiao,", "chu chu wen ti niao.", "ye lai feng yu sheng,", "hua luo zhi duo shao."), note: { en: "A whole spring morning painted with sound and a question - pure showing.", zh: "用声音和一个问题画出整个春天早晨 - 纯描写。" } },
        test: { title: { en: "Unit 3 Quiz", zh: "第三单元小测" }, questions: [ { q: { en: "由近到远 is... order?", zh: "由近到远是......顺序？" }, options: { en: ["Spatial", "Time", "Size"], zh: ["空间", "时间", "大小"] }, answer: 0 }, { q: { en: "红___花 needs...?", zh: "红___花要填......？" }, options: { en: ["的", "了", "是"], zh: ["的", "了", "是"] }, answer: 0 } ] },
        culture: { en: "Chinese landscape writing (写景) has a 1500-year tradition. The trick: move the reader's eye like a painter.", zh: "中文写景有 1500 年传统。诀窍：让读者的眼睛像画家一样移动。" },
        vocab: { en: ["从上到下 从近到远", "的", "热闹 安静", "颜色 声音"], zh: ["从上到下 从近到远", "的", "热闹 安静", "颜色 声音"] },
      },
    ],
  },

  // ───────── 五年级 Grade 5 ─────────
  {
    id: "g5", label: { en: "Grade 5", zh: "五年级" }, ageRange: { en: "Ages 10-11", zh: "10-11 岁" },
    units: [
      {
        id: "g5-u1", title: { en: "Unit 1 - Classical Chinese Begins", zh: "第一单元 - 文言文入门" },
        theme: { en: "First steps into wenyan", zh: "文言文的第一步" },
        lessons: [
          { title: { en: "Classical vs modern", zh: "文言 vs 现代" }, type: "grammar", summary: { en: "Same meaning, fewer words.", zh: "同样的意思，更少的字。" }, content: { en: "Modern: 我不知道 (4 chars). Classical: 吾不知 (3 chars). Classical drops subjects, uses old pronouns, packs tighter.", zh: "现代：我不知道（4字）。文言：吾不知（3字）。文言省主语、用古代词、压得更紧。" } },
          { title: { en: "Small words: 之乎者也", zh: "之乎者也" }, type: "grammar", summary: { en: "The grammar glue of classical.", zh: "文言的语法胶水。" }, content: { en: "之 (of/it), 乎 (question ender), 者 (the one who), 也 (statement ender). Tiny, but they carry the grammar.", zh: "之（的/它）、乎（问句尾）、者（......的人）、也（判断尾）。很小，却承载语法。" } },
          { title: { en: "Read: 学而时习之", zh: "读：学而时习之" }, type: "reading", summary: { en: "Match word by word.", zh: "逐字对义。" }, content: { en: "学 (learn) 而 (and) 时 (often) 习 (practice) 之 (it). Classical reading = matching small words one by one.", zh: "学、而、时、习、之。读文言=一个一个对字义。" } },
          { title: { en: "Pronouns then & now", zh: "代词古今" }, type: "grammar", summary: { en: "吾 我, 汝 你, 其 他.", zh: "吾我、汝你、其他。" }, content: { en: "吾/我 (I), 汝/你 (you), 其/他 (he). Classical pronouns survive in modern but sound old.", zh: "吾/我（我）、汝/你（你）、其/他（他）。文言代词留到现在，但听起来旧。" } },
        ],
        poem: { title: { en: "Quiet Night Thought", zh: "静夜思" }, author: { en: "Li Bai", zh: "李白" }, lines: { en: ["Bright moon before my bed,", "Perhaps frost on the ground.", "I raise my head to the moon,", "Lower my head - think of home."], zh: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"] }, pinyin: p("chuang qian ming yue guang,", "yi shi di shang shuang.", "ju tou wang ming yue,", "di tou si gu xiang."), note: { en: "Simple words, deep feeling - classical poetry at its clearest.", zh: "字简单，情很深 - 文言诗最清楚的样子。" } },
        test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [ { q: { en: "者 means?", zh: "者是？" }, options: { en: ["The one who", "And", "Goodbye"], zh: ["......的人", "并且", "再见"] }, answer: 0 }, { q: { en: "Classical is usually... than modern?", zh: "文言通常比现代......？" }, options: { en: ["Shorter", "Longer", "Louder"], zh: ["更短", "更长", "更响"] }, answer: 0 } ] },
        culture: { en: "Wenyan (classical) was China's written language for 2000+ years. Modern baihua only became standard in the 1900s.", zh: "文言文是中国两千多年的书面语。现代白话文到 1900 年代才成为标准。" },
        vocab: { en: ["之 乎 者 也", "吾 汝 其", "学 而 时 习", "文言 白话"], zh: ["之 乎 者 也", "吾 汝 其", "学 而 时 习", "文言 白话"] },
      },
      {
        id: "g5-u2", title: { en: "Unit 2 - Folk Tales", zh: "第二单元 - 民间故事" },
        theme: { en: "Stories passed down", zh: "代代相传的故事" },
        lessons: [
          { title: { en: "The Cowherd and the Weaver", zh: "牛郎织女" }, type: "reading", summary: { en: "Stars and a bridge of birds.", zh: "星星和鹊桥。" }, content: { en: "Niulang (cowherd) and Zhinü (weaver) love across the sky. Magpies form a bridge once a year - this is Qixi (Chinese Valentine's).", zh: "牛郎和织女隔天相望。喜鹊每年搭一次桥 - 这就是七夕（中国情人节）。" } },
          { title: { en: "Hou Yi shoots the suns", zh: "后羿射日" }, type: "reading", summary: { en: "Ten suns burn the earth.", zh: "十个太阳烤焦大地。" }, content: { en: "Ten suns appeared and the earth burned. Hou Yi shot down nine, leaving one. A myth about courage and balance.", zh: "天上出现十个太阳，大地被烤焦。后羿射下九个，留一个。关于勇气与平衡的神话。" } },
          { title: { en: "Jingwei fills the sea", zh: "精卫填海" }, type: "reading", summary: { en: "A small bird, an impossible task.", zh: "小鸟和不可能的任务。" }, content: { en: "A girl drowns and becomes a bird, Jingwei, who carries twigs to fill the sea. Meaning: keep trying against the impossible.", zh: "一个女孩淹死后变成精卫鸟，衔树枝填海。意思：明知不可能也要坚持。" } },
          { title: { en: "Tell a story in order", zh: "按顺序讲故事" }, type: "writing", summary: { en: "Beginning, middle, end.", zh: "开头、经过、结尾。" }, content: { en: "起因 (cause) -> 经过 (process) -> 结果 (result). Every folk tale has this three-part shape.", zh: "起因->经过->结果。每个民间故事都是这三段。" } },
        ],
        poem: { title: { en: "Climbing Stork Tower", zh: "登鹳雀楼" }, author: { en: "Wang Zhihuan", zh: "王之涣" }, lines: { en: ["Sun sets behind mountains,", "Yellow River enters the sea.", "To see a thousand miles more,", "Climb one more floor."], zh: ["白日依山尽，", "黄河入海流。", "欲穷千里目，", "更上一层楼。"] }, pinyin: p("bai ri yi shan jin,", "huang he ru hai liu.", "yu qiong qian li mu,", "geng shang yi ceng lou."), note: { en: "Like Jingwei, the poet says: keep climbing. Effort as a lesson.", zh: "像精卫一样，诗人说：继续往上爬。努力作为道理。" } },
        test: { title: { en: "Unit 2 Quiz", zh: "第二单元小测" }, questions: [ { q: { en: "Qixi is about...?", zh: "七夕讲的是......？" }, options: { en: ["Niulang & Zhinü", "Hou Yi", "Jingwei"], zh: ["牛郎织女", "后羿", "精卫"] }, answer: 0 }, { q: { en: "Jingwei means...?", zh: "精卫代表......？" }, options: { en: ["Give up", "Keep trying", "Be angry"], zh: ["放弃", "坚持", "生气"] }, answer: 1 } ] },
        culture: { en: "Folk tales (民间故事) were told, not written, for centuries. Each region has versions - so no version is the only right one.", zh: "民间故事口口相传了几个世纪。各地版本不同 - 没有唯一正确的版本。" },
        vocab: { en: ["牛郎 织女 鹊桥", "后羿 射日", "精卫 填海", "起因 经过 结果"], zh: ["牛郎 织女 鹊桥", "后羿 射日", "精卫 填海", "起因 经过 结果"] },
      },
      {
        id: "g5-u3", title: { en: "Unit 3 - Feelings in Poetry", zh: "第三单元 - 诗里的情" },
        theme: { en: "How poems carry emotion", zh: "诗如何承载情感" },
        lessons: [
          { title: { en: "The moon = home", zh: "月亮=家" }, type: "reading", summary: { en: "A shared symbol.", zh: "一个共通的象征。" }, content: { en: "In Chinese poetry, the moon always means home and family. 举头望明月 = looking up is longing.", zh: "中文诗里，月亮总意味着家和亲人。举头望明月=抬头就是思念。" } },
          { title: { en: "Spring = hope", zh: "春天=希望" }, type: "reading", summary: { en: "A season of feelings.", zh: "一个充满感受的季节。" }, content: { en: "Spring poems are about waking, birds, flowers, and also worry over falling petals. Spring = both joy and worry.", zh: "春天的诗写醒来、鸟、花，也写担心花落。春天=既喜也忧。" } },
          { title: { en: "Autumn = parting", zh: "秋天=离别" }, type: "reading", summary: { en: "Leaves fall, people leave.", zh: "叶落，人散。" }, content: { en: "Autumn poems are often about farewells - falling leaves mirror parting friends. Season = mood.", zh: "秋天的诗多写告别 - 落叶映照离别的朋友。季节=心情。" } },
          { title: { en: "Write a feeling poem", zh: "写一首感受诗" }, type: "writing", summary: { en: "One image, one feeling.", zh: "一个意象，一种感受。" }, content: { en: "Pick one thing you see (moon, tree, rain) and tie it to one feeling. Do not name the feeling - let the image carry it.", zh: "选一样看到的东西（月、树、雨），绑上一种感受。不要直说感受 - 让意象去承载。" } },
        ],
        poem: { title: { en: "Quiet Night Thought", zh: "静夜思" }, author: { en: "Li Bai", zh: "李白" }, lines: { en: ["Bright moon before my bed,", "Perhaps frost on the ground.", "I raise my head to the moon,", "Lower my head - think of home."], zh: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"] }, pinyin: p("chuang qian ming yue guang,", "yi shi di shang shuang.", "ju tou wang ming yue,", "di tou si gu xiang."), note: { en: "The moon = home. One image, one feeling - a whole lesson in four lines.", zh: "月亮=家。一个意象，一种感受 - 四行里一整课。" } },
        test: { title: { en: "Unit 3 Quiz", zh: "第三单元小测" }, questions: [ { q: { en: "In poems, the moon means...?", zh: "诗里月亮代表......？" }, options: { en: ["Home", "War", "Rain"], zh: ["家", "战争", "雨"] }, answer: 0 }, { q: { en: "Autumn poems are often about...?", zh: "秋天的诗常写......？" }, options: { en: ["Parting", "Birth", "Spring"], zh: ["离别", "出生", "春天"] }, answer: 0 } ] },
        culture: { en: "Chinese poetry rarely names the feeling. It shows an image and trusts the reader to feel it. This is called 含蓄 (implicit).", zh: "中文诗很少直说感受。它展示意象，相信读者能感受到。这叫含蓄。" },
        vocab: { en: ["月亮 家", "春天 希望", "秋天 离别", "含蓄"], zh: ["月亮 家", "春天 希望", "秋天 离别", "含蓄"] },
      },
    ],
  },

  // ───────── 六年级 Grade 6 ─────────
  {
    id: "g6", label: { en: "Grade 6", zh: "六年级" }, ageRange: { en: "Ages 11-12", zh: "11-12 岁" },
    units: [
      {
        id: "g6-u1", title: { en: "Unit 1 - Chinese History", zh: "第一单元 - 中国历史" },
        theme: { en: "Dynasties & the long story", zh: "朝代与长故事" },
        lessons: [
          { title: { en: "Dynasty timeline", zh: "朝代顺序" }, type: "reading", summary: { en: "Qin, Han, Tang, Song, Ming, Qing.", zh: "秦汉唐宋明清。" }, content: { en: "A simple order: 秦 (first empire) - 汉 (Silk Road) - 唐 (poetry) - 宋 (inventions) - 明 (voyages) - 清 (last). Remember it as a story.", zh: "一个好记的顺序：秦（第一个帝国）- 汉（丝绸之路）- 唐（诗）- 宋（发明）- 明（航海）- 清（最后）。当故事记。" } },
          { title: { en: "Qin Shi Huang", zh: "秦始皇" }, type: "culture", summary: { en: "First emperor, one writing.", zh: "第一个皇帝，统一文字。" }, content: { en: "秦始皇 unified China in 221 BCE: one currency, one writing, one set of measures. The Great Wall began under him.", zh: "秦始皇公元前 221 年统一中国：统一货币、文字、度量衡。长城从他开始。" } },
          { title: { en: "Tang golden age", zh: "盛唐" }, type: "culture", summary: { en: "Poetry and openness.", zh: "诗歌与开放。" }, content: { en: "The Tang dynasty was a golden age: Li Bai, Du Fu, Wang Wei wrote here. Chang'an was the world's biggest city - open to many cultures.", zh: "唐朝是黄金时代：李白、杜甫、王维在这里写诗。长安是世界最大的城市 - 对多种文化开放。" } },
          { title: { en: "Read a dynasty", zh: "读一个朝代" }, type: "reading", summary: { en: "Who, when, what changed.", zh: "谁、何时、改变了什么。" }, content: { en: "Pick one dynasty. Note: 时间 (when), 人物 (key people), 变化 (what changed). Three lines = a dynasty profile.", zh: "选一个朝代。记：时间、人物、变化。三行=一个朝代简介。" } },
        ],
        poem: { title: { en: "Out of the Frontier", zh: "出塞" }, author: { en: "Wang Changling", zh: "王昌龄" }, lines: { en: ["Qin's moon, Han's pass,", "Men march ten thousand miles, none return.", "If Dragon City's flying general were here,", "No enemy horses cross the Yin mountains."], zh: ["秦时明月汉时关，", "万里长征人未还。", "但使龙城飞将在，", "不教胡马度阴山。"] }, pinyin: p("qin shi ming yue han shi guan,", "wan li chang zheng ren wei huan.", "dan shi long cheng fei jiang zai,", "bu jiao hu ma du yin shan."), note: { en: "Qin's moon, Han's pass - centuries compressed into one image, longing for peace.", zh: "秦的月、汉的关 - 几百年压进一个画面，盼望和平。" } },
        test: { title: { en: "Unit 1 Quiz", zh: "第一单元小测" }, questions: [ { q: { en: "Who unified China in 221 BCE?", zh: "公元前 221 年统一中国的是？" }, options: { en: ["Qin Shi Huang", "Li Bai", "Confucius"], zh: ["秦始皇", "李白", "孔子"] }, answer: 0 }, { q: { en: "The poetry golden age was...?", zh: "诗歌黄金时代是......？" }, options: { en: ["Tang", "Qin", "Qing"], zh: ["唐", "秦", "清"] }, answer: 0 } ] },
        culture: { en: "Chinese history is told as dynasties - ruling families across centuries. The dynastic order is a story frame, not just dates.", zh: "中国历史按朝代讲 - 统治数百年的家族。朝代顺序是故事框架，不只是日期。" },
        vocab: { en: ["秦 汉 唐 宋 明 清", "秦始皇 统一", "李白 杜甫", "朝代"], zh: ["秦 汉 唐 宋 明 清", "秦始皇 统一", "李白 杜甫", "朝代"] },
      },
      {
        id: "g6-u2", title: { en: "Unit 2 - Inventions & Exchange", zh: "第二单元 - 发明与交流" },
        theme: { en: "How ideas moved", zh: "思想如何流动" },
        lessons: [
          { title: { en: "Four great inventions", zh: "四大发明" }, type: "culture", summary: { en: "Paper, printing, compass, gunpowder.", zh: "造纸、印刷、指南针、火药。" }, content: { en: "造纸 (Cai Lun, 105 CE), 活字印刷 (Bi Sheng, 1040), 指南针, 火药. All spread via the Silk Road and changed the world.", zh: "造纸（蔡伦，105 年）、活字印刷（毕昇，1040 年）、指南针、火药。都经丝绸之路传向世界并改变了世界。" } },
          { title: { en: "The Silk Road", zh: "丝绸之路" }, type: "culture", summary: { en: "Many routes, not one road.", zh: "许多条路，不是一条。" }, content: { en: "The Silk Road was many routes linking China to Central Asia, India, Europe. Silk went west; glass, horses, ideas came east.", zh: "丝绸之路是连接中国与中亚、印度、欧洲的许多路线。丝绸向西；玻璃、马、思想向东。" } },
          { title: { en: "Zheng He's voyages", zh: "郑和下西洋" }, type: "culture", summary: { en: "Sea journeys before Columbus.", zh: "哥伦布之前的航海。" }, content: { en: "郑和 led huge fleets from China across the Indian Ocean 1405-1433 - decades before European long voyages. Trade and diplomacy, not conquest.", zh: "郑和 1405-1433 年率大船队从中国跨印度洋 - 比欧洲远航早几十年。为贸易与外交，非征服。" } },
          { title: { en: "Cause and effect", zh: "因果关系" }, type: "grammar", summary: { en: "Because A, then B.", zh: "因为 A，所以 B。" }, content: { en: "因为造纸术发明，所以书变便宜. 因为 (because) ... 所以 (so). History is built on cause and effect.", zh: "因为造纸术发明，所以书变便宜。因为......所以......。历史建立在因果上。" } },
        ],
        poem: { title: { en: "Climbing Stork Tower", zh: "登鹳雀楼" }, author: { en: "Wang Zhihuan", zh: "王之涣" }, lines: { en: ["Sun sets behind mountains,", "Yellow River enters the sea.", "To see a thousand miles more,", "Climb one more floor."], zh: ["白日依山尽，", "黄河入海流。", "欲穷千里目，", "更上一层楼。"] }, pinyin: p("bai ri yi shan jin,", "huang he ru hai liu.", "yu qiong qian li mu,", "geng shang yi ceng lou."), note: { en: "To see farther, climb higher - the spirit behind every invention and voyage.", zh: "想看得更远，就爬更高 - 每项发明和航海背后的精神。" } },
        test: { title: { en: "Unit 2 Quiz", zh: "第二单元小测" }, questions: [ { q: { en: "Who improved paper in 105 CE?", zh: "105 年改进造纸的是？" }, options: { en: ["Cai Lun", "Bi Sheng", "Zheng He"], zh: ["蔡伦", "毕昇", "郑和"] }, answer: 0 }, { q: { en: "The Silk Road moved goods AND...?", zh: "丝绸之路运输货物和......？" }, options: { en: ["Ideas", "Only silk", "Only horses"], zh: ["思想", "只有丝绸", "只有马"] }, answer: 0 } ] },
        culture: { en: "Inventions rarely stay put. Each Chinese invention traveled, was improved elsewhere, and returned changed. Culture flows.", zh: "发明很少停在原地。每项中国发明传出去、被改进、又变样传回。文化是流动的。" },
        vocab: { en: ["造纸 印刷 指南针 火药", "丝绸之路", "郑和", "因为 所以"], zh: ["造纸 印刷 指南针 火药", "丝绸之路", "郑和", "因为 所以"] },
      },
      {
        id: "g6-u3", title: { en: "Unit 3 - People Who Changed China", zh: "第三单元 - 改变中国的人" },
        theme: { en: "Lives that mattered", zh: "重要的人生" },
        lessons: [
          { title: { en: "Confucius", zh: "孔子" }, type: "culture", summary: { en: "The teacher of teachers.", zh: "万世师表。" }, content: { en: "Confucius (551-479 BCE) taught ethics: 仁 (kindness), 义 (right), 礼 (ritual). His sayings fill the Analects (论语).", zh: "孔子（公元前 551-479）教伦理：仁、义、礼。他的话编成《论语》。" } },
          { title: { en: "Li Bai", zh: "李白" }, type: "culture", summary: { en: "The moon poet.", zh: "月亮诗人。" }, content: { en: "李白 (701-762) wrote about wine, mountains, the moon, and freedom. He is the most quoted Chinese poet - 静夜思 is his.", zh: "李白（701-762）写酒、山、月、自由。他是最常被引用的中国诗人 - 静夜思是他的。" } },
          { title: { en: "Read a biography", zh: "读一篇传记" }, type: "reading", summary: { en: "Birth, deeds, legacy.", zh: "出生、事迹、影响。" }, content: { en: "A biography has three parts: 出生 (birth/early life), 事迹 (key deeds), 影响 (legacy). Trace a life through these three.", zh: "传记三部分：出生、事迹、影响。按这三段看一个人的一生。" } },
          { title: { en: "Quote and explain", zh: "引用与解释" }, type: "writing", summary: { en: "Use a quote, then your words.", zh: "先引用，再自己说。" }, content: { en: "Pattern: 孔子说：「学而时习之。」意思是...... Quote first, explain second. This is how essays use evidence.", zh: "句型：孔子说：「学而时习之。」意思是...... 先引用再解释。作文就是这样用证据。" } },
        ],
        poem: { title: { en: "Song of the Wanderer", zh: "游子吟" }, author: { en: "Meng Jiao", zh: "孟郊" }, lines: { en: ["Kind mother's thread in hand,", "Sews her leaving son's shirt.", "Sews densely, fearing late return -", "Who says small grass can repay the spring sun?"], zh: ["慈母手中线，", "游子身上衣。", "临行密密缝，", "意恐迟迟归。", "谁言寸草心，", "报得三春晖。"] }, pinyin: p("ci mu shou zhong xian,", "you zi shen shang yi.", "lin xing mi mi feng,", "yi kong chi chi gui.", "shui yan cun cao xin,", "bao de san chun hui."), note: { en: "Behind every great person is often a quiet sacrifice - here, a mother.", zh: "每个伟大的人背后，常有一个安静的付出 - 这里是母亲。" } },
        test: { title: { en: "Unit 3 Quiz", zh: "第三单元小测" }, questions: [ { q: { en: "Confucius taught...?", zh: "孔子教......？" }, options: { en: ["仁 义 礼", "Math", "War"], zh: ["仁义礼", "数学", "战争"] }, answer: 0 }, { q: { en: "静夜思 was written by...?", zh: "静夜思的作者是？" }, options: { en: ["Li Bai", "Confucius", "Cai Lun"], zh: ["李白", "孔子", "蔡伦"] }, answer: 0 } ] },
        culture: { en: "Chinese respects teachers above most roles: 一日为师，终身为父 - a teacher for a day is a parent for life.", zh: "中国人把老师看得极高：一日为师，终身为父。" },
        vocab: { en: ["孔子 仁 义 礼", "李白 月 酒", "论语", "出生 事迹 影响"], zh: ["孔子 仁 义 礼", "李白 月 酒", "论语", "出生 事迹 影响"] },
      },
    ],
  },
];

export const selfStudyTracks: LevelTrack[] = [
  {
    id: "beginner", label: { en: "Beginner", zh: "入门" }, hskRange: "HSK 1-2",
    desc: { en: "Zero to basic conversation. Pinyin, tones, 300 characters, daily life sentences.", zh: "从零到基本对话。拼音、声调、300字、日常句。" },
    units: [
      {
        id: "beg-u1", title: { en: "Unit 1 - Survival Chinese", zh: "第一单元 - 生存中文" }, theme: { en: "Greetings & numbers", zh: "问候与数字" },
        lessons: [
          { title: { en: "Hello, goodbye, thanks", zh: "你好、再见、谢谢" }, type: "vocab", summary: { en: "Day-one words.", zh: "第一天的词。" }, content: { en: "你好=hello. 再见=goodbye (see again). 谢谢=thanks. 不客气=you're welcome (don't be polite).", zh: "你好=hello。再见=goodbye。谢谢=thanks。不客气=you're welcome。" } },
          { title: { en: "Numbers 1-100", zh: "数字 1-100" }, type: "vocab", summary: { en: "1-10 unique, then patterned.", zh: "1-10 各异，后有规律。" }, content: { en: "yi到shi. Then 十一(10+1), 二十(2x10), 二十一(2x10+1)... 九十九, 一百(100).", zh: "一二三四五六七八九十。然后十一、二十、二十一......九十九、一百。" } },
          { title: { en: "What's your name?", zh: "你叫什么名字？" }, type: "grammar", summary: { en: "Introduce yourself.", zh: "自我介绍。" }, content: { en: "我叫 + name = My name is. 你叫什么名字？= What's your name? 你呢？= And you?", zh: "我叫+名字=My name is。你叫什么名字？=What's your name? 你呢？=And you?" } },
          { title: { en: "The four tones", zh: "四个声调" }, type: "listening", summary: { en: "Same sound, different tone = different word.", zh: "同音不同调=不同字。" }, content: { en: "ma 1st = mother, ma 2nd = hemp, ma 3rd = horse, ma 4th = scold. Tone changes meaning - listen carefully.", zh: "mā妈、má麻、mǎ马、mà骂。声调改变意思 - 要仔细听。" } },
        ],
        culture: { en: "Chinese names put the family name first: 李白 = family Li, given Bai. Saying your family name first shows respect for family.", zh: "中文名姓在前：李白=姓李名白。先说姓=尊重家庭。" },
        vocab: { en: ["你好 谢谢 再见", "1-100", "我叫 你叫", "四声"], zh: ["你好 谢谢 再见", "1-100", "我叫 你叫", "四声"] },
      },
      {
        id: "beg-u2", title: { en: "Unit 2 - Daily Life", zh: "第二单元 - 日常生活" }, theme: { en: "Food, time, self", zh: "食物、时间、自己" },
        lessons: [
          { title: { en: "At the restaurant", zh: "在饭馆" }, type: "reading", summary: { en: "Order and pay.", zh: "点菜付钱。" }, content: { en: "服务员：您好，几位？顾客：两位。服务员：这是菜单。顾客：我要宫保鸡丁、麻婆豆腐、一碗米饭。一共四十五块。", zh: "服务员：您好，几位？顾客：两位。服务员：这是菜单。顾客：我要宫保鸡丁、麻婆豆腐、一碗米饭。一共四十五块。" } },
          { title: { en: "Telling time", zh: "说时间" }, type: "grammar", summary: { en: "Hours and half hours.", zh: "点和半。" }, content: { en: "三点 = 3:00. 三点半 = 3:30. 三点一刻 = 3:15. 时间 + 点 = the hour.", zh: "三点=3:00。三点半=3:30。三点一刻=3:15。时间+点=小时。" } },
          { title: { en: "I like / I want", zh: "我喜欢 我要" }, type: "grammar", summary: { en: "Preferences and wants.", zh: "偏好和需求。" }, content: { en: "我喜欢茶. 我要水. 喜欢 = like (preference), 要 = want (request). Different verbs for different feelings.", zh: "我喜欢茶。我要水。喜欢=like（偏好），要=want（请求）。不同动词表不同感受。" } },
          { title: { en: "Days of the week", zh: "星期" }, type: "vocab", summary: { en: "Numbered days.", zh: "用数字编号的日子。" }, content: { en: "星期一 (Mon) ... 星期六 (Sat), 星期日/天 (Sun). Days are numbered, not named - simpler than English.", zh: "星期一......星期六，星期日/天。日子用数字，不用名字 - 比英文简单。" } },
        ],
        culture: { en: "In China, asking 吃了吗 (have you eaten?) is a friendly greeting, not a real question about food.", zh: "在中国，问「吃了吗」是友好问候，不是真的问吃没吃。" },
        vocab: { en: ["菜单 米饭", "点 半 刻", "喜欢 要", "星期一到日"], zh: ["菜单 米饭", "点 半 刻", "喜欢 要", "星期一到日"] },
      },
    ],
  },
  {
    id: "elementary", label: { en: "Elementary", zh: "初级" }, hskRange: "HSK 3-4",
    desc: { en: "Daily life, travel, opinions. 600 characters, paragraph reading.", zh: "日常生活、旅行、表达观点。600字、段落阅读。" },
    units: [
      {
        id: "ele-u1", title: { en: "Unit 1 - Getting Around", zh: "第一单元 - 出行" }, theme: { en: "Travel & directions", zh: "旅行与问路" },
        lessons: [
          { title: { en: "Asking directions", zh: "问路" }, type: "grammar", summary: { en: "...在哪里?", zh: "......在哪里？" }, content: { en: "厕所在哪里？地铁站在哪里？X 在哪里 = where is X? The most useful travel pattern.", zh: "厕所在哪里？地铁站在哪里？X 在哪里=where is X? 旅行最有用的句型。" } },
          { title: { en: "Transport words", zh: "交通词" }, type: "vocab", summary: { en: "车 火车 地铁 飞机.", zh: "车 火车 地铁 飞机。" }, content: { en: "车 (car), 火车 (train), 地铁 (subway), 飞机 (plane). 坐 + transport = take it: 坐地铁.", zh: "车、火车、地铁、飞机。坐+交通工具：坐地铁。" } },
          { title: { en: "Buying tickets", zh: "买票" }, type: "reading", summary: { en: "Buy and bargain.", zh: "买与讲价。" }, content: { en: "我要一张去北京的票，多少钱？太贵了，便宜一点. 便宜一点 = a bit cheaper - bargaining is normal in markets.", zh: "我要一张去北京的票，多少钱？太贵了，便宜一点。便宜一点=讲价，市场里很正常。" } },
          { title: { en: "Past tense", zh: "过去时" }, type: "grammar", summary: { en: "了 marks completion.", zh: "了表完成。" }, content: { en: "我去了北京. 了 after the verb marks that it happened. Chinese has no tense verbs - 了 does the job.", zh: "我去了北京。动词后加=表发生了。中文没有时态动词 - 了 来做这件事。" } },
        ],
        culture: { en: "Chinese high-speed rail (高铁) is the world's largest network. Travel between cities by train is faster than flying.", zh: "中国高铁是世界最大的网络。城市间坐火车比飞机快。" },
        vocab: { en: ["在哪里", "车 火车 地铁 飞机", "买票 便宜", "去了"], zh: ["在哪里", "车 火车 地铁 飞机", "买票 便宜", "去了"] },
      },
      {
        id: "ele-u2", title: { en: "Unit 2 - Opinions & Plans", zh: "第二单元 - 观点与计划" }, theme: { en: "Expressing yourself", zh: "表达自己" },
        lessons: [
          { title: { en: "I think", zh: "我觉得" }, type: "grammar", summary: { en: "State an opinion.", zh: "表达观点。" }, content: { en: "我觉得这个菜很好吃. 觉得 = I think/feel. Softens opinions so they sound polite.", zh: "我觉得这个菜很好吃。觉得=I think。让观点听起来礼貌。" } },
          { title: { en: "Comparisons", zh: "比较" }, type: "grammar", summary: { en: "A 比 B + adj.", zh: "A 比 B + 形容词。" }, content: { en: "北京比上海大. 比 = compared to. 没有 = not as: 上海没有北京大 (Shanghai is not as big as Beijing).", zh: "北京比上海大。比=compared to。没有=不如：上海没有北京大。" } },
          { title: { en: "Making plans", zh: "做计划" }, type: "reading", summary: { en: "打算, 要, 准备.", zh: "打算、要、准备。" }, content: { en: "我打算学中文. 我要回国. 我准备考试. Three ways to say future plans, slightly different in feel.", zh: "我打算学中文。我要回国。我准备考试。三种说未来计划的方式，感觉略不同。" } },
          { title: { en: "Because & so", zh: "因为 所以" }, type: "grammar", summary: { en: "Give reasons.", zh: "说原因。" }, content: { en: "因为下雨，所以我没去. Because + reason, so + result. Always paired in Chinese.", zh: "因为下雨，所以我没去。因为+原因，所以+结果。中文里总成对。" } },
        ],
        culture: { en: "Chinese conversation often softens opinions with 我觉得 (I think) rather than stating them directly. Directness can feel rude.", zh: "中文谈话常用「我觉得」软化观点，不直说。太直接会显得无礼。" },
        vocab: { en: ["我觉得", "比 没有", "打算 要 准备", "因为 所以"], zh: ["我觉得", "比 没有", "打算 要 准备", "因为 所以"] },
      },
    ],
  },
  {
    id: "intermediate", label: { en: "Intermediate", zh: "中级" }, hskRange: "HSK 5-6",
    desc: { en: "News, culture, debate. 2500 characters, essay writing.", zh: "新闻、文化、辩论。2500字、议论文。" },
    units: [
      {
        id: "int-u1", title: { en: "Unit 1 - Culture & Society", zh: "第一单元 - 文化与社会" }, theme: { en: "Festivals, traditions, modern China", zh: "节日、传统、现代中国" },
        lessons: [
          { title: { en: "Why Chinese New Year moves", zh: "为什么春节日期会变" }, type: "culture", summary: { en: "Lunar vs solar calendar.", zh: "农历与公历。" }, content: { en: "The solar calendar follows the sun (365 days). The lunar follows the moon (354) - drifting ~11 days earlier each solar year. A leap month realigns it every 2-3 years.", zh: "公历跟太阳（365天）。农历跟月亮（354天）- 每年比公历早约 11 天。每 2-3 年加一个闰月来对齐。" } },
          { title: { en: "The twelve zodiacs", zh: "十二生肖" }, type: "culture", summary: { en: "A 12-year animal cycle.", zh: "十二年动物循环。" }, content: { en: "鼠牛虎兔龙蛇马羊猴鸡狗猪, one per year, cycling every 12. The zodiac is a memory system and a social icebreaker - not a personality rule.", zh: "鼠牛虎兔龙蛇马羊猴鸡狗猪，每年一个，12 年一循环。生肖是记忆法也是社交破冰 - 不是性格规则。" } },
          { title: { en: "Modern Chinese cities", zh: "现代中国城市" }, type: "reading", summary: { en: "Read a news-style passage.", zh: "读一段新闻式短文。" }, content: { en: "中国的城市变化很快，高楼越来越多，地铁越来越长. 越来越 = more and more - a key pattern for change.", zh: "中国的城市变化很快，高楼越来越多，地铁越来越长。越来越=more and more - 表变化的关键句型。" } },
          { title: { en: "越来越", zh: "越来越" }, type: "grammar", summary: { en: "More and more.", zh: "越来越。" }, content: { en: "越来越好 (better and better), 越来越快 (faster and faster). 越来越 + adjective = continuous change.", zh: "越来越好、越来越快。越来越+形容词=持续变化。" } },
        ],
        culture: { en: "The lunar calendar is not outdated - it still sets festivals, farming seasons, and even lucky wedding dates in modern China.", zh: "农历没过时 - 它仍决定节日、农时，甚至现代中国的婚嫁吉日。" },
        vocab: { en: ["农历 公历 闰月", "十二生肖", "越来越", "高楼 地铁"], zh: ["农历 公历 闰月", "十二生肖", "越来越", "高楼 地铁"] },
      },
      {
        id: "int-u2", title: { en: "Unit 2 - Reading & Discussing", zh: "第二单元 - 阅读与讨论" }, theme: { en: "Opinions with evidence", zh: "有据的观点" },
        lessons: [
          { title: { en: "On one hand / on the other", zh: "一方面 另一方面" }, type: "grammar", summary: { en: "Balanced arguments.", zh: "平衡的论证。" }, content: { en: "一方面...另一方面... shows two sides before your conclusion. Used in essays and debates.", zh: "一方面......另一方面...... 在结论前展示两面。用于作文和辩论。" } },
          { title: { en: "Read a short essay", zh: "读一篇短文" }, type: "reading", summary: { en: "Find the main point.", zh: "找主要观点。" }, content: { en: "Read for the 主题句 (topic sentence) first, then supporting details. Skimming = finding the skeleton fast.", zh: "先找主题句，再看支撑细节。略读=快速找到骨架。" } },
          { title: { en: "Although & but", zh: "虽然 但是" }, type: "grammar", summary: { en: "Concession.", zh: "让步。" }, content: { en: "虽然很难，但是值得. 虽然 (although) ... 但是 (but). Both are used together in Chinese, unlike English.", zh: "虽然很难，但是值得。虽然......但是......。中文里两个都用，和英文不同。" } },
          { title: { en: "Write an opinion paragraph", zh: "写观点段" }, type: "writing", summary: { en: "Claim, reason, example, conclusion.", zh: "主张、原因、例子、结论。" }, content: { en: "Structure: 我认为... 因为... 比如... 所以... Four moves = a complete argument paragraph.", zh: "结构：我认为......因为......比如......所以......。四步=一段完整的论证。" } },
        ],
        culture: { en: "In Chinese debate, showing you understand the other side (另一方面) before your own makes you sound wiser, not weaker.", zh: "中文辩论里，先承认另一面（另一方面）再说自己的，显得更智慧而非更弱。" },
        vocab: { en: ["一方面 另一方面", "主题句", "虽然 但是", "认为 因为 比如 所以"], zh: ["一方面 另一方面", "主题句", "虽然 但是", "认为 因为 比如 所以"] },
      },
    ],
  },
  {
    id: "advanced", label: { en: "Advanced", zh: "高级" }, hskRange: "HSK 7-9",
    desc: { en: "Literature, history, academic Chinese. 5000+ characters.", zh: "文学、历史、学术中文。5000+字。" },
    units: [
      {
        id: "adv-u1", title: { en: "Unit 1 - Classical Literature", zh: "第一单元 - 古典文学" }, theme: { en: "Reading original texts", zh: "读原文" },
        lessons: [
          { title: { en: "The Analects, Chapter 1", zh: "《论语》学而篇" }, type: "reading", summary: { en: "Confucius in the original.", zh: "孔子原文。" }, content: { en: "子曰：学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？- learning, friendship, composure.", zh: "子曰：学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？- 学习、友谊、从容。" } },
          { title: { en: "Classical particles", zh: "文言虚词" }, type: "grammar", summary: { en: "之乎者也矣焉哉.", zh: "之乎者也矣焉哉。" }, content: { en: "These small words are the grammar of classical Chinese. 了 marks change, 矣 marks a new state, 哉 marks exclamation.", zh: "这些小字是文言的语法。了表变化，矣表新状态，哉表感叹。" } },
          { title: { en: "Tang poetry deep read", zh: "唐诗精读" }, type: "reading", summary: { en: "Du Fu's Spring View.", zh: "杜甫《春望》。" }, content: { en: "国破山河在，城春草木深. Du Fu wrote this in war: the nation is broken but mountains remain. History in four words.", zh: "国破山河在，城春草木深。杜甫在战乱中写：国家破碎，山河还在。四个字里是历史。" } },
          { title: { en: "Translate with care", zh: "翻译的取舍" }, type: "writing", summary: { en: "No translation is neutral.", zh: "没有中立的翻译。" }, content: { en: "君子 = gentleman? scholar? noble person? Each choice changes the meaning. Translation is always interpretation.", zh: "君子=gentleman？scholar？noble person？每个选择都改变意思。翻译永远是诠释。" } },
        ],
        culture: { en: "Classical Chinese is not old Chinese you must learn separately - it's the deep register still used in formal and literary modern Chinese.", zh: "文言文不是要另学的古中文 - 它是现代中文里正式和文学表达仍在用的深层语域。" },
        vocab: { en: ["学而时习之", "之乎者也矣焉哉", "国破山河在", "君子"], zh: ["学而时习之", "之乎者也矣焉哉", "国破山河在", "君子"] },
      },
      {
        id: "adv-u2", title: { en: "Unit 2 - Modern Thought", zh: "第二单元 - 现代思想" }, theme: { en: "20th century voices", zh: "20 世纪的声音" },
        lessons: [
          { title: { en: "Lu Xun", zh: "鲁迅" }, type: "culture", summary: { en: "The father of modern Chinese fiction.", zh: "现代中文小说之父。" }, content: { en: "鲁迅 (1881-1936) wrote sharp essays and stories attacking old customs. His opening line of A Madman's Diary is famous: 今天晚上，很好的月光.", zh: "鲁迅（1881-1936）写尖锐的杂文和小说，抨击旧习。《狂人日记》开头有名：今天晚上，很好的月光。" } },
          { title: { en: "Baihua movement", zh: "白话文运动" }, type: "culture", summary: { en: "Writing as people speak.", zh: "我手写我口。" }, content: { en: "In the 1910s-20s, writers pushed to write in baihua (plain speech) not wenyan - making literature reach ordinary people. Lu Xun led it.", zh: "1910-20 年代，作家推动用白话而非文言写作 - 让文学走向普通人。鲁迅是领军者。" } },
          { title: { en: "Read a modern essay", zh: "读现代散文" }, type: "reading", summary: { en: "Voice and rhythm.", zh: "声音与节奏。" }, content: { en: "Modern essays value personal voice (个人声音) and rhythm (节奏). Read aloud to hear the writer's pulse.", zh: "现代散文看重个人声音和节奏。朗读才能听见作者的心跳。" } },
          { title: { en: "Formal writing", zh: "正式写作" }, type: "writing", summary: { en: "书面语 vs 口语.", zh: "书面语与口语。" }, content: { en: "书面语: 父亲, 母亲, 书籍. 口语: 爸爸, 妈妈, 书. Knowing which register to use is advanced Chinese.", zh: "书面语：父亲、母亲、书籍。口语：爸爸、妈妈、书。知道用哪种语域就是高级中文。" } },
        ],
        culture: { en: "Modern Chinese (baihua) is only about 100 years old as a written standard. Before it, all formal writing was classical (wenyan).", zh: "现代白话文作为书面标准只有约 100 年。在那之前，所有正式写作都是文言。" },
        vocab: { en: ["鲁迅", "白话 文言", "个人声音 节奏", "书面语 口语"], zh: ["鲁迅", "白话 文言", "个人声音 节奏", "书面语 口语"] },
      },
    ],
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
        en: `[45-min lesson plan] Warm-up (5 min): Review with a quick quiz. Introduction (10 min): Present new content with visuals. Practice (15 min): Paired exercises. Production (10 min): Students present or write. Wrap-up (5 min): Exit ticket - one thing learned.`,
        zh: `[45分钟教案] 热身（5分钟）：小测复习。导入（10分钟）：用视觉辅助呈现新内容。练习（15分钟）：结对练习。产出（10分钟）：学生展示或写作。总结（5分钟）：出口票 - 写一件学到的事。`,
      },
    })),
    test: unit.test ? { ...unit.test, title: { en: `${unit.test.title.en} - Printable Test`, zh: `${unit.test.title.zh} - 可打印试卷` } } : undefined,
  })),
}));
