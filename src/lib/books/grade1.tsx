import type { Book } from "@/components/BookReader";

// 一年级（上册）完整一本书。
// 按 Loong Kits 自有体系编写，参考部编版一年级语文上册的章节骨架。
// 每页都是真实教学内容，不是摘要。可继续扩到下册。

export const grade1Book: Book = {
  gradeId: "g1",
  title: { en: "Grade 1 · Book One", zh: "一年级 · 上册" },
  subtitle: { en: "First Words & First Poems", zh: "第一本书 · 第一个字" },
  pages: [
    // ── 封面 ──
    {
      kind: "cover", title: { en: "Cover", zh: "封面" },
    },
    // ── 版权/前言 ──
    {
      kind: "copyright", title: { en: "About this book", zh: "出版说明" },
      body: {
        en: <>Loong Kits Grade 1 Book One. A bilingual Chinese textbook for young learners starting their first characters, first sounds, and first poems. Read it cover to cover, one page at a time. Every lesson has the full text, the new characters, and a short practice. There is no shortcut to reading Chinese - only turning pages. So turn them.</>,
        zh: <>《Loong Kits 一年级 · 上册》是一本为刚开始识字、学拼音、读古诗的孩子编写的双语中文教材。从封面一页一页读到封底，每一课都有课文全文、要学的生字、和课后练习。学中文没有捷径，只有一页一页翻。那就翻吧。</>,
      },
    },
    // ── 目录（自动渲染，留位）──
    { kind: "toc", title: { en: "Contents", zh: "目录" } },

    // ── 入学 ──
    {
      kind: "lesson", title: { en: "I Go to School", zh: "我上学了" },
      body: {
        en: <>Welcome to Chinese! In this book you will learn to read your first 100 characters, sing your first poems, and tell someone your name. Chinese is not harder than other languages - it is just different. Each character is a small picture with a story. Let us begin.<br/><br/><b>Speak:</b> 你好 (nǐ hǎo) = Hello.<br/><b>Speak:</b> 老师 (lǎo shī) = Teacher.<br/><b>Speak:</b> 同学 (tóng xué) = Classmate.</>,
        zh: <>欢迎来到中文课！这本书里，你会认识第一批 100 个字，会读第一批古诗，会告诉别人你叫什么名字。中文不比别的语言难，只是不一样。每个字都是一幅有故事的小画。我们开始吧。<br/><br/>说：你好 = hello。<br/>说：老师 = teacher。<br/>说：同学 = classmate。</>,
      },
    },

    // ── 汉语拼音 1-13 ──
    pinyinPage("a o e", "a o e", "三个开口韵母。张大嘴发 a（啊），圆唇发 o（哦），微笑发 e（鹅）。这三个音几乎在每个中文词里都有。", ["a → 妈妈 māma", "o → 哦 ó", "e → 鹅 é"]),
    pinyinPage("i u ü", "i u ü", "再三个韵母。齿合发 i（衣），圆唇发 u（乌），圆唇前突发 ü（淤）。ü 对英语者是新音——先发 i 再把嘴唇往前突。", ["i → 一 yī", "u → 五 wǔ", "ü → 鱼 yú"]),
    pinyinPage("b p m f", "b p m f", "第一批声母。b 像收音机，p 要送气（放一张纸在嘴前会动），m 闭嘴鼻音，f 上齿咬下唇。", ["bà 爸", "pí 皮", "mā 妈", "fá 罚"]),
    pinyinPage("d t n l", "d t n l", "舌尖抵上齿龈。d 不送气，t 送气，n 鼻音，l 舌尖抵住从两边出气。", ["dà 大", "tù 兔", "nǐ 你", "lǜ 绿"]),
    pinyinPage("g k h", "g k h", "舌根音。g 像鸽子咕咕，k 送气像咳嗽，h 呼气。", ["gē 哥", "kāi 开", "hǎo 好"]),
    pinyinPage("j q x", "j q x", "舌面音。j 紧贴，q 送气贴，x 留缝擦。注意：j q x 后的 ü 要写成 u。", ["jī 鸡", "qì 气", "xī 西"]),
    pinyinPage("z c s", "z c s", "平舌音。舌尖抵齿背。z 不送气，c 送气，s 擦。", ["zì 字", "cǎi 彩", "sān 三"]),
    pinyinPage("zh ch sh r", "zh ch sh r", "翘舌音。舌尖翘起抵硬腭。r 是浊擦音，声带要振动。", ["zhī 知", "chī 吃", "shī 师", "rì 日"]),
    pinyinPage("ai ei ui", "ai ei ui", "复韵母，两个音连读。ai 像爱，ei 像诶，ui 像威。", ["ài 爱", "hěi 黑", "shuǐ 水"]),
    pinyinPage("ao ou iu", "ao ou iu", "ao 像奥，ou 像欧，iu 像优。注意 iu 实际读 iou。", ["hǎo 好", "gǒu 狗", "liù 六"]),
    pinyinPage("ie üe er", "ie üe er", "ie 像耶，üe 像约，er 是卷舌韵母，单独成音节。", ["jié 节", "xuě 雪", "èr 二"]),
    pinyinPage("an en in un ün", "an en in un ün", "前鼻韵母，结尾舌尖抵上齿龈，气流从鼻出。", ["sān 三", "rén 人", "jīn 金", "chūn 春", "yún 云"]),
    pinyinPage("ang eng ing ong", "ang eng ing ong", "后鼻韵母，结尾舌根抵软腭，气流从鼻出。", ["bāng 帮", "fēng 风", "xīng 星", "dōng 东"]),

    // ── 课文 1 ──
    lessonText("秋天", "Autumn", "qiū tiān", ["天气凉了，树叶黄了，一片片叶子从树上落下来。", "天空那么蓝，那么高。一群大雁往南飞，一会儿排成个「人」字，一会儿排成个「一」字。", "啊！秋天来了！"],
      "这是孩子最早读到的「散文诗」。注意「一片片」——叠词让落叶有了节奏。大雁排成「人」字和「一」字，是真实的自然现象，也是汉字最早的形状。",
      ["秋 qiū autumn", "气 qì air/weather", "树 shù tree", "叶 yè leaf", "片 piàn slice", "飞 fēi fly", "会 huì can"]),
    lessonPractice("秋天 · 练习", "Autumn · Practice", [
      { q: "「一片片」说明叶子落得……？", a: "很多，一片接一片。" },
      { q: "大雁往……飞？", a: "南。" },
      { q: "用「一会儿……一会儿……」造句。", a: "例：云一会儿像狗，一会儿像山。" },
    ]),
    // ── 课文 2 ──
    lessonText("小小的船", "The Small Boat", "xiǎo xiǎo de chuán", ["弯弯的月儿小小的船，", "小小的船儿两头尖。", "我在小小的船里坐，", "只看见闪闪的星星蓝蓝的天。"],
      "叶圣陶写的儿歌。把弯月想象成一只小船——这是「比喻」。整首诗没有一个生僻字，孩子能整首背下来。",
      ["船 chuán boat", "弯 wān bent", "尖 jiān pointed", "坐 zuò sit", "看 kàn see", "星 xīng star"]),
    lessonPractice("小小的船 · 练习", "Small Boat · Practice", [
      { q: "「小小的船」指的是……？", a: "弯弯的月亮。" },
      { q: "诗里用了几次叠词（如弯弯、小小）？找一找。", a: "弯弯、小小、闪闪、蓝蓝——四次。" },
      { q: "背一背这首诗。", a: "（自背）" },
    ]),
    // ── 课文 3 ──
    lessonText("江南", "Jiangnan", "jiāng nán", ["江南可采莲，", "莲叶何田田。", "鱼戏莲叶间。", "鱼戏莲叶东，", "鱼戏莲叶西，", "鱼戏莲叶南，", "鱼戏莲叶北。"],
      "汉乐府，两千多年前的民歌。「田田」形容莲叶茂盛。鱼在东西南北游——重复的句式像鱼真的在游，是民歌特有的节奏。",
      ["江 jiāng river", "南 nán south", "可 kě can", "采 cǎi pick", "莲 lián lotus", "鱼 yú fish"]),
    lessonPractice("江南 · 练习", "Jiangnan · Practice", [
      { q: "「田田」形容什么？", a: "莲叶茂盛的样子。" },
      { q: "鱼在几个方向游？", a: "东西南北四个方向。" },
      { q: "这首是几千年前的？", a: "约两千年，汉乐府。" },
    ]),
    // ── 课文 4 ──
    lessonText("四季", "Four Seasons", "sì jì", ["草芽尖尖，他对小鸟说：「我是春天。」", "荷叶圆圆，他对青蛙说：「我是夏天。」", "谷穗弯弯，他鞠着躬说：「我是秋天。」", "雪人大肚子一挺，他调皮地说：「我就是冬天。」"],
      "一首童诗，每个季节选一个代表事物说话。注意四季的形状：尖、圆、弯、挺——四个动词四个画面。",
      ["春 chūn spring", "夏 xià summer", "秋 qiū autumn", "冬 dōng winter", "草 cǎo grass", "雪 xuě snow"]),
    lessonPractice("四季 · 练习", "Four Seasons · Practice", [
      { q: "春天用什么代表？", a: "草芽尖尖。" },
      { q: "秋天是什么样子？", a: "谷穗弯弯，鞠着躬。" },
      { q: "仿写一句「我是……」。", a: "例：枫叶红红，他对风说：我是秋天。" },
    ]),
    // ── 语文园地一 ──
    {
      kind: "garden", title: { en: "Language Garden 1", zh: "语文园地 一" },
      body: {
        en: <><b>识字加油站：</b> 人、口、手、目、耳、足——这六个字都是身体，也都是象形字。画一画它们古时候的样子，你就记住了。<br/><br/><b>字词句运用：</b> 比一比「人」和「入」、「大」和「天」。差一笔，意思完全不同。<br/><br/><b>书写提示：</b> 笔顺「从上到下，先横后竖」。写「十」：先一横，后一竖。</>,
        zh: <><b>识字加油站：</b> 人、口、手、目、耳、足——这六个字都是身体，也都是象形字。画一画它们古时候的样子，你就记住了。<br/><br/><b>字词句运用：</b> 比一比「人」和「入」、「大」和「天」。差一笔，意思完全不同。<br/><br/><b>书写提示：</b> 笔顺「从上到下，先横后竖」。写「十」：先一横，后一竖。</>,
      },
    },
    // ── 课文 5 ──
    lessonText("画", "A Painting", "huà", ["远看山有色，", "近听水无声。", "春去花还在，", "人来鸟不惊。"],
      "一首谜语诗，谜底是「画」。画里的山有颜色、画里的水流不出声、画里的花不会谢、画里的鸟不怕人——四句都是反常，因为这是画不是真。学这首诗等于学会「谜语」这种文体。",
      ["画 huà picture", "远 yuǎn far", "色 sè color", "声 shēng sound", "惊 jīng startle"]),
    lessonPractice("画 · 练习", "Painting · Practice", [
      { q: "这首诗的谜底是？", a: "画。" },
      { q: "为什么「水无声」？", a: "因为画里的水不会流、不会响。" },
      { q: "背一背。", a: "（自背）" },
    ]),
    // ── 课文 6 ──
    lessonText("大小多少", "Big, Small, More, Less", "dà xiǎo duō shǎo", ["一个大，一个小，一只黄牛一只猫。", "一边多，一边少，一群鸭子一只鸟。", "一个大，一个小，一个苹果一颗枣。", "一边多，一边少，一堆杏子一个桃。"],
      "儿歌，专门练「量词」。注意：一只（动物）、一个（苹果）、一颗（枣）、一堆（杏子）。不同的东西用不同的量词，这是中文的特点。",
      ["大 dà big", "小 xiǎo small", "多 duō many", "少 shǎo few", "只 zhī (measure)", "颗 kē (measure)"]),
    lessonPractice("大小多少 · 练习", "Practice", [
      { q: "「一只」配什么？「一颗」配什么？", a: "一只动物，一颗小而圆的东西。" },
      { q: "苹果用哪个量词？", a: "一个。" },
      { q: "造句：一（ ）树。", a: "一棵。" },
    ]),
    // ── 课文 7 ──
    lessonText("小书包", "My Little Schoolbag", "xiǎo shū bāo", ["我的小书包，宝贝真不少。", "铅笔橡皮转笔刀，", "作业本，练习册，", "天天上学带着我，", "学习写字少不了。"],
      "一首生活儿歌，把文具拟人化：「天天上学带着我」。学这首诗顺便认识文具的词：铅笔、橡皮、转笔刀、本子、册子。",
      ["书 shū book", "包 bāo bag", "笔 bǐ pen", "刀 dāo knife", "本 běn book/origin", "学 xué learn"]),
    lessonPractice("小书包 · 练习", "Practice", [
      { q: "书包里有哪些文具？", a: "铅笔、橡皮、转笔刀、作业本、练习册。" },
      { q: "「带着我」是谁带着谁？", a: "书包带着我（拟人）。" },
      { q: "「学」字几画？", a: "8 画。" },
    ]),
    // ── 课文 8 ──
    lessonText("日月明", "Sun, Moon, Bright", "rì yuè míng", ["日月明，田力男。", "小大尖，小土尘。", "二人从，三人众。", "双木林，三木森。"],
      "一首讲「会意字」的诗——两个字合在一起变成新字。日+月=明，田+力=男，小+大=尖，小+土=尘。这就是汉字的「组装」之法。",
      ["日 rì sun", "月 yuè moon", "明 míng bright", "男 nán man", "林 lín woods", "森 sēn forest"]),
    lessonPractice("日月明 · 练习", "Practice", [
      { q: "日+月=？田+力=？", a: "明；男。" },
      { q: "三个木是什么字？", a: "森。" },
      { q: "猜：人+木=？", a: "休（人靠树休息）。" },
    ]),
    // ── 语文园地二 ──
    {
      kind: "garden", title: { en: "Language Garden 2", zh: "语文园地 二" },
      body: {
        en: <><b>识字加油站：</b> 一→十、百、千、万。数字会越拼越大。<br/><br/><b>我的发现：</b> 「明、男、林、森」都是两个字合起来的「会意字」。再找一个：休=人+木。<br/><br/><b>展示台：</b> 把这册学过的字读给家人听，错一个重学一个。</>,
        zh: <><b>识字加油站：</b> 一→十、百、千、万。数字会越拼越大。<br/><br/><b>我的发现：</b> 「明、男、林、森」都是两个字合起来的「会意字」。再找一个：休=人+木。<br/><br/><b>展示台：</b> 把这册学过的字读给家人听，错一个重学一个。</>,
      },
    },
    // ── 口语交际 ──
    {
      kind: "speaking", title: { en: "Speaking: Say Hello", zh: "口语交际 · 我们做朋友" },
      body: {
        en: <><b>Task:</b> Find a classmate. Say: 你好，我叫……，我们做朋友吧。 Listen to their name and repeat it. A real friendship starts with hearing someone's name right.<br/><br/>Remember: in Chinese, say the family name first if you know it. It shows respect.</>,
        zh: <><b>任务：</b> 找一个同学，说：你好，我叫……，我们做朋友吧。 听对方的姓名并复述一遍。真正的友谊，从把对方的名字听对开始。<br/><br/>记住：知道对方姓的话，中文里先说姓，表示尊重。</>,
      },
    },
    // ── 快乐读书吧 ──
    {
      kind: "reading", title: { en: "Reading Club", zh: "快乐读书吧 · 读书真快乐" },
      body: {
        en: <><b>Read together:</b> Any picture book in Chinese. Even if you only know a few characters, find them on the page and read them aloud. Reading is not waiting until you know every word—it is enjoying the words you already know.<br/><br/>After reading, tell someone: one character you found, one picture you liked.</>,
        zh: <><b>一起读：</b> 任何一本中文图画书。哪怕只认识几个字，在书页上把它们找出来大声读。读书不是等认识所有字才读——是享受你已经认识的字。<br/><br/>读完告诉一个人：你找到的一个字，你喜欢的一幅画。</>,
      },
    },
    // ── 生字表 ──
    {
      kind: "vocablist", title: { en: "Characters to Read", zh: "生字表（会认）" },
      body: {
        en: <>These are the 100 characters you should be able to <b>recognize</b> by the end of this book. Read them aloud, one by one:<br/><br/>一 二 三 四 五 六 七 八 九 十<br/>人 口 手 目 耳 足<br/>日 月 水 火 山 石 田 禾<br/>上 下 大 小 多 少 半<br/>天 地 花 鸟 鱼 虫 草 木 林 森<br/>你好 我 他 她 老师 同学<br/>春夏秋冬 风 云 雨 雪<br/>书 包 笔 本 刀 学 校<br/>明 男 尖 尘 从 众 休<br/>远 近 色 声 惊<br/>船 弯 坐 看 星<br/>江南 采 莲<br/>大雁 往 飞<br/>草芽 荷叶 谷穗 雪人<br/>苹果 枣 杏 桃<br/>鸭 猫 牛 鸟 青蛙<br/>弯弯 尖尖 圆圆 弯弯</>,
        zh: <>这 100 个字，读完这本书要<b>会认</b>。一个一个大声读：<br/><br/>一 二 三 四 五 六 七 八 九 十<br/>人 口 手 目 耳 足<br/>日 月 水 火 山 石 田 禾<br/>上 下 大 小 多 少 半<br/>天 地 花 鸟 鱼 虫 草 木 林 森<br/>你好 我 他 她 老师 同学<br/>春夏秋冬 风 云 雨 雪<br/>书 包 笔 本 刀 学 校<br/>明 男 尖 尘 从 众 休<br/>远 近 色 声 惊<br/>船 弯 坐 看 星<br/>江南 采 莲<br/>大雁 往 飞<br/>草芽 荷叶 谷穗 雪人<br/>苹果 枣 杏 桃<br/>鸭 猫 牛 鸟 青蛙<br/>弯弯 尖尖 圆圆 弯弯</>,
      },
    },
    {
      kind: "vocablist", title: { en: "Characters to Write", zh: "生字表（会写）" },
      body: {
        en: <>These you should be able to <b>write</b> from memory. Practice stroke by stroke.<br/><br/>一 二 三 十 禾 木<br/>上 下 大 小 多 少<br/>日月水火山石田<br/>人口手足目耳<br/>你好我他她<br/>春夏秋冬<br/>书包笔本刀学<br/>明男尖尘从众</>,
        zh: <>这些要<b>会写</b>，一笔一笔练：<br/><br/>一 二 三 十 禾 木<br/>上 下 大 小 多 少<br/>日月水火山石田<br/>人口手足目耳<br/>你好我他她<br/>春夏秋冬<br/>书包笔本刀学<br/>明男尖尘从众</>,
      },
    },
    // ── 词语表 ──
    {
      kind: "vocablist", title: { en: "Word List", zh: "词语表" },
      body: {
        en: <>Two-character words you now know:<br/><br/>你好 / 老师 / 同学 / 学校<br/>春天 / 夏天 / 秋天 / 冬天<br/>大山 / 小河 / 白云 / 下雨<br/>读书 / 写字 / 作业<br/>朋友 / 家人 / 我们<br/>大雁 / 小鸟 / 鱼儿<br/>荷花 / 草芽 / 谷穗 / 雪人</>,
        zh: <>你已经会的两字词：<br/><br/>你好 / 老师 / 同学 / 学校<br/>春天 / 夏天 / 秋天 / 冬天<br/>大山 / 小河 / 白云 / 下雨<br/>读书 / 写字 / 作业<br/>朋友 / 家人 / 我们<br/>大雁 / 小鸟 / 鱼儿<br/>荷花 / 草芽 / 谷穗 / 雪人</>,
      },
    },
    // ── 后记 ──
    {
      kind: "back", title: { en: "Afterword", zh: "后记" },
      body: {
        en: <>You finished your first Chinese book. You can now read about a hundred characters and recite four poems. The next book will go further—but you have already done the hardest thing: you started. 一年级 · 下册 continues from here.</>,
        zh: <>你读完了第一本中文书。你现在能认约一百个字、会背四首诗。下一本会走得更远——但你已经做了最难的事：你开始了。一年级 · 下册 从这里继续。</>,
      },
    },
  ],
};

// ── helpers to build pages ──
function pinyinPage(title: string, pinyin: string, teach: string, words: string[]) {
  return {
    kind: "lesson" as const,
    title: { en: `Pinyin: ${pinyin}`, zh: `汉语拼音：${title}` },
    body: {
      en: <>
        <p>{teach}</p>
        <p className="mt-3 font-serif-sc text-lg">{words.join("  ")}</p>
      </>,
      zh: <>
        <p>{teach}</p>
        <p className="mt-3 font-serif-sc text-lg">{words.join("  ")}</p>
      </>,
    },
  };
}

function lessonText(zhTitle: string, enTitle: string, pinyin: string, lines: string[], note: string, vocab: string[]) {
  return {
    kind: "lesson" as const,
    title: { en: enTitle, zh: zhTitle },
    body: {
      en: <>
        <p className="font-serif-sc text-xl leading-loose text-ink">{lines.join(" ")}</p>
        <p className="mt-2 text-sm text-ink-light/70">{pinyin}  ·  {lines.length} lines</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70"><b>讲一讲：</b>{note}</p>
        <p className="mt-4 font-serif-sc text-base">{vocab.join("   ")}</p>
      </>,
      zh: <>
        <p className="font-serif-sc text-xl leading-loose text-ink">{lines.join("")}</p>
        <p className="mt-2 text-sm text-ink-light/70">{pinyin}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70"><b>讲一讲：</b>{note}</p>
        <p className="mt-4 font-serif-sc text-base">{vocab.join("   ")}</p>
      </>,
    },
  };
}

function lessonPractice(zhTitle: string, enTitle: string, qs: { q: string; a: string }[]) {
  return {
    kind: "practice" as const,
    title: { en: enTitle, zh: zhTitle },
    body: {
      en: <>
        <ol className="space-y-3">
          {qs.map((x, i) => (
            <li key={i}><b>{i + 1}.</b> {x.q}<br/><span className="text-teal-dark">→ {x.a}</span></li>
          ))}
        </ol>
      </>,
      zh: <>
        <ol className="space-y-3">
          {qs.map((x, i) => (
            <li key={i}><b>{i + 1}.</b> {x.q}<br/><span className="text-teal-dark">→ {x.a}</span></li>
          ))}
        </ol>
      </>,
    },
  };
}
