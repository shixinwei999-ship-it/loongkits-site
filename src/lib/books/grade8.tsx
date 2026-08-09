import type { Book } from "@/components/BookReader";
import { lessonPage, gardenPage, unitPage, poemPage, strokePage } from "./grade1";

// 八年级 · 上册（部编版八年级上册结构）
export const grade8Book: Book = {
  gradeId: "g8",
  title: { en: "Grade 8 · Book One", zh: "八年级 · 上册" },
  subtitle: { en: "News, Masters & Landscapes", zh: "新闻、大师与山水" },
  pages: [
    { kind: "cover", title: { en: "Cover", zh: "封面" } },
    { kind: "copyright", title: { en: "About", zh: "出版说明" }, body: { en: <>Grade 8 Book One, after the PEP eighth-grade textbook.</>, zh: <>《八年级 · 上册》，按部编版八年级上册结构编写。</> } },
    { kind: "toc", title: { en: "Contents", zh: "目录" } },

    unitPage("一", "新闻", "News", "消息二则、飞天凌空、一着惊海天。", ["消息二则", "飞天凌空", "一着惊海天"]),
    ...lessonPage({
      zhTitle: "我三十万大军胜利南渡长江", enTitle: "Our 300,000 Troops Cross the Yangtze", pinyin: "wǒ sān shí wàn dà jūn shèng lì nán dù cháng jiāng",
      passage: [["yīng","英"],["yǒng","勇"],["de","的"],["rén","人"],["mín","民"],["jiě","解"],["fàng","放"],["jūn","军"],["yǐ","已"],["yú","于"],["jīn","今"],["rì","日"],["dù","渡"],["guò","过"],["cháng","长"],["jiāng","江"],["。","。"]],
      note: "毛泽东。消息：标题、导语、主体。简洁有力报道渡江胜利。",
      recognize: [{ch:"芜",py:"wú",word:"芜湖"},{ch:"荻",py:"dí",word:"荻港"},{ch:"溃",py:"kuì",word:"溃退"}],
      write: [{ch:"芜",py:"wú",strokes:7,radical:"艹",word:"荒芜"},{ch:"荻",py:"dí",strokes:10,radical:"艹",word:"荻港"},{ch:"溃",py:"kuì",strokes:12,radical:"氵",word:"溃退"},{ch:"塞",py:"sài",strokes:13,radical:"土",word:"要塞"}],
      practice: ["朗读。","消息的要素是什么？","导语是哪句？"],
      think: "消息语言有什么特点？",
    }),
    ...lessonPage({
      zhTitle: "藤野先生", enTitle: "Mr. Fujino", pinyin: "téng yě xiān sheng",
      passage: [["dōng","东"],["jīng","京"],["yě","也"],["wú","无"],["fēi","非"],["shì","是"],["zhè","这"],["yàng","样"],["。","。"]],
      note: "鲁迅。回忆在日本学医时的藤野先生：添改讲义、纠正解剖图、关心实习、了解裹脚。正直、无民族偏见。",
      recognize: [{ch:"绯",py:"fēi",word:"绯红"},{ch:"挟",py:"xié",word:"挟着"},{ch:"畸",py:"jī",word:"畸形"},{ch:"诲",py:"huì",word:"教诲"}],
      write: [{ch:"绯",py:"fēi",strokes:11,radical:"纟",word:"绯红"},{ch:"挟",py:"xié",strokes:9,radical:"扌",word:"挟持"},{ch:"畸",py:"jī",strokes:13,radical:"田",word:"畸形"},{ch:"诲",py:"huì",strokes:9,radical:"讠",word:"教诲"}],
      practice: ["朗读。","藤野先生做了哪几件事？","他是什么品质？"],
      think: "鲁迅为什么怀念藤野先生？",
    }),
    gardenPage("一", ["识字加油站：新闻字--芜、荻、溃、塞。","字词句运用：写一条消息。","书写提示：注意「畸」「诲」的结构。","日积月累：庭中有奇树。"], { zhTitle: "庭中有奇树", lines: ["庭中有奇树，", "绿叶发华滋。", "攀条折其荣，", "将以遗所思。"] }),

    unitPage("二", "回忆", "Memoir", "回忆我的母亲、列夫托尔斯泰、美丽的颜色。", ["回忆我的母亲", "列夫·托尔斯泰", "美丽的颜色"]),
    ...lessonPage({
      zhTitle: "回忆我的母亲", enTitle: "Remembering My Mother", pinyin: "huí yì wǒ de mǔ qīn",
      passage: [["dé","得"],["dào","dào" as any].slice(0,2) as [string,string],["mǔ","mǔ" as any].slice(0,2) as [string,string],["qīn","qīn" as any].slice(0,2) as [string,string],["qù","qù" as any].slice(0,2) as [string,string],["shì","shì" as any].slice(0,2) as [string,string],["de","de" as any].slice(0,2) as [string,string],["è","è" as any].slice(0,2) as [string,string],["hào","hào" as any].slice(0,2) as [string,string],["，","，"],["wǒ","wǒ" as any].slice(0,2) as [string,string],["bēi","bēi" as any].slice(0,2) as [string,string],["tòng","tòng" as any].slice(0,2) as [string,string],["。","。"]],
      note: "朱德。母亲勤劳一生，教我生产知识、革命意志。感恩与报答母亲、报答人民。",
      recognize: [{ch:"佃",py:"diàn",word:"佃农"},{ch:"溺",py:"nì",word:"溺爱"},{ch:"蔼",py:"ǎi",word:"和蔼"}],
      write: [{ch:"佃",py:"diàn",strokes:7,radical:"亻",word:"佃农"},{ch:"劳",py:"láo",strokes:7,radical:"力",word:"劳动"},{ch:"碌",py:"lù",strokes:13,radical:"石",word:"忙碌"},{ch:"私",py:"sī",strokes:7,radical:"禾",word:"无私"}],
      practice: ["朗读。","母亲有哪些品质？","我怎么报答母亲？"],
      think: "你的母亲教给你什么？",
    }),
    gardenPage("二", ["识字加油站：人物品--佃、劳、碌、私。","字词句运用：用事例写一个人。","书写提示：注意「佃」「碌」的结构。","日积月累：龟虽寿。"], { zhTitle: "龟虽寿", lines: ["老骥伏枥，志在千里。", "烈士暮年，壮心不已。"] }),

    unitPage("三", "山水", "Landscape", "三峡、短文二篇、与朱元思书、唐诗五首。", ["三峡", "答谢中书书", "记承天寺夜游", "与朱元思书"]),
    ...lessonPage({
      zhTitle: "三峡", enTitle: "The Three Gorges", pinyin: "sān xiá",
      passage: [["zì","zì" as any].slice(0,2) as [string,string],["sān","sān" as any].slice(0,2) as [string,string],["xiá","xiá" as any].slice(0,2) as [string,string],["qī","qī" as any].slice(0,2) as [string,string],["bǎi","bǎi" as any].slice(0,2) as [string,string],["lǐ","lǐ" as any].slice(0,2) as [string,string],["zhōng","zhōng" as any].slice(0,2) as [string,string],["，","，"],["liǎng","liǎng" as any].slice(0,2) as [string,string],["àn","àn" as any].slice(0,2) as [string,string],["lián","lián" as any].slice(0,2) as [string,string],["shān","shān" as any].slice(0,2) as [string,string],["，","，"],["lüè","lüè" as any].slice(0,2) as [string,string],["wú","wú" as any].slice(0,2) as [string,string],["quē","quē" as any].slice(0,2) as [string,string],["chù","chù" as any].slice(0,2) as [string,string],["。","。"]],
      note: "郦道元。三峡七百里，两岸连山；夏水襄陵、春冬清荣峻茂、秋林寒涧肃。山水之美。",
      recognize: [{ch:"阙",py:"quē",word:"阙处"},{ch:"叠",py:"dié",word:"重岩叠嶂"},{ch:"嶂",py:"zhàng",word:"叠嶂"},{ch:"溯",py:"sù",word:"溯流"}],
      write: [{ch:"阙",py:"quē",strokes:13,radical:"门",word:"宫阙"},{ch:"叠",py:"dié",strokes:13,radical:"又",word:"重叠"},{ch:"嶂",py:"zhàng",strokes:14,radical:"山",word:"叠嶂"},{ch:"溯",py:"sù",strokes:13,radical:"氵",word:"追溯"}],
      practice: ["朗读并背诵。","三峡四季水各有什么特点？","语言美在哪？"],
      think: "你最喜欢哪个季节的三峡？",
    }),
    ...lessonPage({
      zhTitle: "记承天寺夜游", enTitle: "A Night at Chengtian Temple", pinyin: "jì chéng tiān sì yè yóu",
      passage: [["yuán","yuán" as any].slice(0,2) as [string,string],["fēng","fēng" as any].slice(0,2) as [string,string],["liù","liù" as any].slice(0,2) as [string,string],["nián","nián" as any].slice(0,2) as [string,string],["shí","shí" as any].slice(0,2) as [string,string],["yuè","yuè" as any].slice(0,2) as [string,string],["shí","shí" as any].slice(0,2) as [string,string],["rì","rì" as any].slice(0,2) as [string,string],["yè","yè" as any].slice(0,2) as [string,string],["，","，"],["jiě","jiě" as any].slice(0,2) as [string,string],["yī","yī" as any].slice(0,2) as [string,string],["yù","yù" as any].slice(0,2) as [string,string],["shuì","shuì" as any].slice(0,2) as [string,string],["。","。"]],
      note: "苏轼。月色入户，与怀民夜游承天寺。庭下如积水空明。闲人的旷达与淡淡愁绪。",
      recognize: [{ch:"遂",py:"suì",word:"遂至"},{ch:"藻",py:"zǎo",word:"藻荇"},{ch:"荇",py:"xìng",word:"藻荇"}],
      write: [{ch:"遂",py:"suì",strokes:12,radical:"辶",word:"遂至"},{ch:"藻",py:"zǎo",strokes:19,radical:"艹",word:"水藻"},{ch:"荇",py:"xìng",strokes:9,radical:"艹",word:"藻荇"},{ch:"闲",py:"xián",strokes:7,radical:"门",word:"闲人"}],
      practice: ["朗读并背诵。","月色描写美在哪？","「闲人」是什么心境？"],
      think: "苏轼是豁达还是苦闷？",
    }),
    gardenPage("三", ["识字加油站：山水字--阙、叠、嶂、溯。","字词句运用：用四字句写一处景。","书写提示：注意「叠」「嶂」的结构。","日积月累：使至塞上。"], { zhTitle: "使至塞上", lines: ["单车欲问边，", "属国过居延。", "大漠孤烟直，", "长河落日圆。"] }),

    unitPage("四", "情感", "Emotion", "背影、白杨礼赞、昆明的雨。", ["背影", "白杨礼赞", "昆明的雨"]),
    ...lessonPage({
      zhTitle: "背影", enTitle: "The Sight of Father's Back", pinyin: "bèi yǐng",
      passage: [["wǒ","wǒ" as any].slice(0,2) as [string,string],["yǔ","yǔ" as any].slice(0,2) as [string,string],["fù","fù" as any].slice(0,2) as [string,string],["qīn","qīn" as any].slice(0,2) as [string,string],["bú","bú" as any].slice(0,2) as [string,string],["jiàn","jiàn" as any].slice(0,2) as [string,string],["yǐ","yǐ" as any].slice(0,2) as [string,string],["èr","èr" as any].slice(0,2) as [string,string],["yú","yú" as any].slice(0,2) as [string,string],["nián","nián" as any].slice(0,2) as [string,string],["yú","yú" as any].slice(0,2) as [string,string],["yǐ","yǐ" as any].slice(0,2) as [string,string],["。","。"]],
      note: "朱自清。父亲爬月台买橘子的背影，四次写背影、四次流泪。父爱深沉。",
      recognize: [{ch:"交",py:"jiāo",word:"交卸"},{ch:"卸",py:"xiè",word:"交卸"},{ch:"赋",py:"fù",word:"赋闲"},{ch:"迂",py:"yū",word:"迂腐"}],
      write: [{ch:"交",py:"jiāo",strokes:6,radical:"亠",word:"交卸"},{ch:"卸",py:"xiè",strokes:9,radical:"卩",word:"卸载"},{ch:"赋",py:"fù",strokes:12,radical:"贝",word:"赋闲"},{ch:"迂",py:"yū",strokes:6,radical:"辶",word:"迂回"}],
      practice: ["朗读。","几次写背影？几次流泪？","父爱体现在哪？"],
      think: "你注意过父母的背影吗？",
    }),
    gardenPage("四", ["识字加油站：情感字--交、卸、赋、迂。","字词句运用：用细节写亲情。","书写提示：注意「卸」「赋」的结构。","日积月累：钱塘湖春行。"], { zhTitle: "钱塘湖春行", lines: ["孤山寺北贾亭西，", "水面初平云脚低。", "几处早莺争暖树，", "谁家新燕啄春泥。"] }),

    unitPage("五", "说明文", "Expository", "中国石拱桥、苏州园林、蝉、梦回繁华。", ["中国石拱桥", "苏州园林", "蝉"]),
    ...lessonPage({
      zhTitle: "苏州园林", enTitle: "Suzhou Gardens", pinyin: "sū zhōu yuán lín",
      passage: [["sū","sū" as any].slice(0,2) as [string,string],["zhōu","zhōu" as any].slice(0,2) as [string,string],["yuán","yuán" as any].slice(0,2) as [string,string],["lín","lín" as any].slice(0,2) as [string,string],["shì","shì" as any].slice(0,2) as [string,string],["wǒ","wǒ" as any].slice(0,2) as [string,string],["guó","guó" as any].slice(0,2) as [string,string],["yuán","yuán" as any].slice(0,2) as [string,string],["lín","lín" as any].slice(0,2) as [string,string],["de","de" as any].slice(0,2) as [string,string],["yí","yí" as any].slice(0,2) as [string,string],["gè","gè" as any].slice(0,2) as [string,string],["yàng","yàng" as any].slice(0,2) as [string,string],["pǐn","pǐn" as any].slice(0,2) as [string,string],["。","。"]],
      note: "叶圣陶。苏州园林务必使游览者无论站在哪个点上眼前总是一幅完美的图画。图画美。",
      recognize: [{ch:"轩",py:"xuān",word:"轩榭"},{ch:"榭",py:"xiè",word:"轩榭"},{ch:"沼",py:"zhǎo",word:"池沼"},{ch:"壑",py:"hè",word:"丘壑"}],
      write: [{ch:"轩",py:"xuān",strokes:7,radical:"车",word:"轩榭"},{ch:"榭",py:"xiè",strokes:14,radical:"木",word:"水榭"},{ch:"沼",py:"zhǎo",strokes:8,radical:"氵",word:"池沼"},{ch:"壑",py:"hè",strokes:17,radical:"土",word:"丘壑"}],
      practice: ["朗读。","苏州园林的共同点是什么？","从哪些方面写图画美？"],
      think: "为什么说是一幅画？",
    }),
    gardenPage("五", ["识字加油站：园林字--轩、榭、沼、壑。","字词句运用：用说明方法介绍一处建筑。","书写提示：注意「榭」「壑」的结构。","日积月累：饮酒。"], { zhTitle: "饮酒", lines: ["结庐在人境，", "而无车马喧。", "采菊东篱下，", "悠然见南山。"] }),

    unitPage("六", "品格", "Character", "孟子二章、愚公移山、周亚夫军细柳、诗词五首。", ["孟子二章", "愚公移山", "周亚夫军细柳"]),
    ...lessonPage({
      zhTitle: "愚公移山", enTitle: "The Foolish Old Man Moves Mountains", pinyin: "yú gōng yí shān",
      passage: [["tài","tài" as any].slice(0,2) as [string,string],["háng","háng" as any].slice(0,2) as [string,string],["wáng","wáng" as any].slice(0,2) as [string,string],["wū","wū" as any].slice(0,2) as [string,string],["èr","èr" as any].slice(0,2) as [string,string],["shān","shān" as any].slice(0,2) as [string,string],["，","，"],["fāng","fāng" as any].slice(0,2) as [string,string],["qī","qī" as any].slice(0,2) as [string,string],["bǎi","bǎi" as any].slice(0,2) as [string,string],["lǐ","lǐ" as any].slice(0,2) as [string,string],["。","。"]],
      note: "列子。愚公年九十移太行王屋，智叟笑他，他说子子孙孙无穷匮。坚持不懈、人定胜天。",
      recognize: [{ch:"仞",py:"rèn",word:"万仞"},{ch:"惩",py:"chéng",word:"惩山北之塞"},{ch:"塞",py:"sè",word:"阻塞"},{ch:"匮",py:"kuì",word:"穷匮"}],
      write: [{ch:"仞",py:"rèn",strokes:5,radical:"亻",word:"万仞"},{ch:"惩",py:"chéng",strokes:12,radical:"心",word:"惩罚"},{ch:"塞",py:"sāi",strokes:13,radical:"土",word:"堵塞"},{ch:"匮",py:"kuì",strokes:11,radical:"匚",word:"匮乏"}],
      practice: ["朗读。","愚公和智叟谁对？","愚公精神是什么？"],
      think: "今天还需要愚公精神吗？",
    }),
    gardenPage("六", ["识字加油站：品格字--仞、惩、塞、匮。","字词句运用：用对比写愚公智叟。","书写提示：注意「惩」「匮」的结构。","日积月累：春望。"], { zhTitle: "春望", lines: ["国破山河在，", "城春草木深。", "感时花溅泪，", "恨别鸟惊心。"] }),

    strokePage("识字表（会认）", "八年级上册会认字约 160 个。重点：芜、荻、溃、塞、绯、挟、畸、诲、佃、溺、蔼、阙、叠、嶂、溯、遂、藻、荇、交、卸、赋、迂、轩、榭、沼、壑、仞、惩、塞、匮。"),
    strokePage("写字表（会写）", "八年级上册会写字约 160 个。重点：芜、荻、溃、塞、绯、挟、畸、诲、佃、劳、碌、私、阙、叠、嶂、溯、遂、藻、荇、闲、交、卸、赋、迂、轩、榭、沼、壑、仞、惩、塞、匮。"),
    strokePage("词语表", "芜湖、荻港、溃退、要塞、绯红、挟持、畸形、教诲、佃农、劳动、忙碌、无私、宫阙、重叠、叠嶂、追溯、遂至、水藻、藻荇、闲人、交卸、卸载、赋闲、迂回、轩榭、水榭、池沼、丘壑、万仞、惩罚、堵塞、匮乏。"),
    { kind: "back", title: { en: "Afterword", zh: "后记" }, body: { en: <>You finished Grade 8 Book One.</>, zh: <>你读完了八年级上册。八年级 · 下册 从这里继续。</> } },
  ],
};
