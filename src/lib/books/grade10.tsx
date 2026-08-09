import type { Book } from "@/components/BookReader";
import { lessonPage, gardenPage, unitPage, poemPage, strokePage } from "./grade1";

// 十年级 · 上册（部编版高中必修上册结构）
export const grade10Book: Book = {
  gradeId: "g10",
  title: { en: "Grade 10 · Book One", zh: "十年级 · 上册" },
  subtitle: { en: "Youth, Labor & Classics", zh: "青春、劳动与经典" },
  pages: [
    { kind: "cover", title: { en: "Cover", zh: "封面" } },
    { kind: "copyright", title: { en: "About", zh: "出版说明" }, body: { en: <>Grade 10 Book One, after the PEP senior-high compulsory textbook.</>, zh: <>《十年级 · 上册》，按部编版高中必修上册结构编写。</> } },
    { kind: "toc", title: { en: "Contents", zh: "目录" } },

    unitPage("一", "青春", "Youth", "沁园春长沙、立在地球边上放号、红烛、峨日朵雪峰之侧、致云雀。", ["沁园春·长沙", "红烛", "致云雀"]),
    ...lessonPage({
      zhTitle: "沁园春·长沙", enTitle: "Changsha - to the tune of Qinyuanchun", pinyin: "qìn yuán chūn cháng shā",
      passage: [["dú","独"],["lì","立"],["hán","寒"],["qiū","秋"],["，","，"],["jú","橘"],["zǐ","子"],["zhōu","洲"],["tóu","头"],["。","。"]],
      note: "毛泽东。独立寒秋，看万山红遍、百舸争流，问苍茫大地谁主沉浮，忆同学少年。青春豪情。",
      recognize: [{ch:"橘",py:"jú",word:"橘子洲"},{ch:"舸",py:"gě",word:"百舸"},{ch:"寥",py:"liáo",word:"寥廓"},{ch:"遒",py:"qiú",word:"遒劲"}],
      write: [{ch:"橘",py:"jú",strokes:16,radical:"木",word:"橘子"},{ch:"舸",py:"gě",strokes:11,radical:"舟",word:"百舸"},{ch:"寥",py:"liáo",strokes:14,radical:"宀",word:"寥廓"},{ch:"遒",py:"qiú",strokes:12,radical:"辶",word:"遒劲"}],
      practice: ["朗读并背诵。","上阕写什么景？下阕忆什么人？","谁主沉浮表达什么？"],
      think: "你的青春志向是什么？",
    }),
    ...lessonPage({
      zhTitle: "红烛", enTitle: "The Red Candle", pinyin: "hóng zhú",
      passage: [["hóng","hóng" as any].slice(0,2) as [string,string],["zhú","zhú" as any].slice(0,2) as [string,string],["a","a" as any].slice(0,2) as [string,string],["！","！"],["zhè","zhè" as any].slice(0,2) as [string,string],["yàng","yàng" as any].slice(0,2) as [string,string],["hóng","hóng" as any].slice(0,2) as [string,string],["，","，"],["zhè","zhè" as any].slice(0,2) as [string,string],["yàng","yàng" as any].slice(0,2) as [string,string],["de","de" as any].slice(0,2) as [string,string],["hóng","hóng" as any].slice(0,2) as [string,string],["！","！"]],
      note: "闻一多。红烛燃烧自己照亮别人，莫问收获但问耕耘。奉献精神。",
      recognize: [{ch:"烛",py:"zhú",word:"红烛"},{ch:"烧",py:"shāo",word:"燃烧"},{ch:"沸",py:"fèi",word:"沸腾"}],
      write: [{ch:"烛",py:"zhú",strokes:10,radical:"火",word:"蜡烛"},{ch:"烧",py:"shāo",strokes:10,radical:"火",word:"燃烧"},{ch:"沸",py:"fèi",strokes:8,radical:"氵",word:"沸腾"},{ch:"耕",py:"gēng",strokes:10,radical:"耒",word:"耕耘"}],
      practice: ["朗读。","红烛象征什么？","莫问收获但问耕耘什么意思？"],
      think: "你愿意做红烛吗？",
    }),
    gardenPage("一", ["识字加油站：青春字--橘、舸、寥、遒。","字词句运用：用意象写青春。","书写提示：注意「寥」「遒」的结构。","日积月累：短歌行。"], { zhTitle: "短歌行", lines: ["对酒当歌，人生几何！", "譬如朝露，去日苦多。", "周公吐哺，天下归心。"] }),

    unitPage("二", "劳动", "Labor", "喜看稻菽千重浪、心有一团火、以工匠精神雕琢时代品质。", ["喜看稻菽千重浪", "心有一团火，温暖众人心", "以工匠精神雕琢时代品质"]),
    ...lessonPage({
      zhTitle: "喜看稻菽千重浪", enTitle: "Joy at a Thousand Waves of Rice", pinyin: "xǐ kàn dào shū qiān chóng làng",
      passage: [["yuán","yuán" as any].slice(0,2) as [string,string],["lóng","lóng" as any].slice(0,2) as [string,string],["píng","píng" as any].slice(0,2) as [string,string],["shì","shì" as any].slice(0,2) as [string,string],["yí","yí" as any].slice(0,2) as [string,string],["wèi","wèi" as any].slice(0,2) as [string,string],["zá","zá" as any].slice(0,2) as [string,string],["jiāo","jiāo" as any].slice(0,2) as [string,string],["zhī","zhī" as any].slice(0,2) as [string,string],["jiā","jiā" as any].slice(0,2) as [string,string],["。","。"]],
      note: "记袁隆平。他扎根田野，研究杂交水稻，解决吃饭问题。科学精神与朴实。",
      recognize: [{ch:"菽",py:"shū",word:"稻菽"},{ch:"蕊",py:"ruǐ",word:"花蕊"},{ch:"穗",py:"suì",word:"稻穗"}],
      write: [{ch:"菽",py:"shū",strokes:11,radical:"艹",word:"稻菽"},{ch:"蕊",py:"ruǐ",strokes:15,radical:"艹",word:"花蕊"},{ch:"穗",py:"suì",strokes:17,radical:"禾",word:"麦穗"},{ch:"耕",py:"gēng",strokes:10,radical:"耒",word:"耕耘"}],
      practice: ["朗读。","袁隆平做了什么事？","他有什么精神？"],
      think: "劳动的价值是什么？",
    }),
    gardenPage("二", ["识字加油站：劳动字--菽、蕊、穗、耕。","字词句运用：用细节写劳动者。","书写提示：注意「蕊」「穗」的结构。","日积月累：归园田居。"], { zhTitle: "归园田居", lines: ["少无适俗韵，性本爱丘山。", "开荒南野际，守拙归园田。"] }),

    unitPage("三", "思辨", "Critical Thinking", "劝学、师说、反对党八股、读书目的和前提。", ["劝学", "师说", "读书目的和前提"]),
    ...lessonPage({
      zhTitle: "劝学", enTitle: "On Learning", pinyin: "quàn xué",
      passage: [["jūn","jūn" as any].slice(0,2) as [string,string],["zǐ","zǐ" as any].slice(0,2) as [string,string],["yuē","yuē" as any].slice(0,2) as [string,string],["：","："],["xué","xué" as any].slice(0,2) as [string,string],["bù","bù" as any].slice(0,2) as [string,string],["kě","kě" as any].slice(0,2) as [string,string],["yǐ","yǐ" as any].slice(0,2) as [string,string],["。","。"]],
      note: "荀子。学不可以已。青出于蓝、冰寒于水；不积跬步无以至千里。学习贵在积累、坚持、专一。",
      recognize: [{ch:"靛",py:"diàn",word:"靛青"},{ch:"砺",py:"lì",word:"磨砺"},{ch:"跬",py:"kuǐ",word:"跬步"},{ch:"骥",py:"jì",word:"骐骥"}],
      write: [{ch:"靛",py:"diàn",strokes:13,radical:"青",word:"靛青"},{ch:"砺",py:"lì",strokes:10,radical:"石",word:"砥砺"},{ch:"跬",py:"kuǐ",strokes:13,radical:"足",word:"跬步"},{ch:"骥",py:"jì",strokes:19,radical:"马",word:"骐骥"}],
      practice: ["朗读并背诵。","荀子认为学习有什么意义？","用了哪些比喻？"],
      think: "「学不可以已」对你有什么启发？",
    }),
    ...lessonPage({
      zhTitle: "师说", enTitle: "On Teachers", pinyin: "shī shuō",
      passage: [["gǔ","gǔ" as any].slice(0,2) as [string,string],["zhī","zhī" as any].slice(0,2) as [string,string],["xué","xué" as any].slice(0,2) as [string,string],["zhě","zhě" as any].slice(0,2) as [string,string],["，","，"],["bì","bì" as any].slice(0,2) as [string,string],["yǒu","yǒu" as any].slice(0,2) as [string,string],["shī","shī" as any].slice(0,2) as [string,string],["。","。"]],
      note: "韩愈。古之学者必有师。师者传道受业解惑。道之所存师之所存。弟子不必不如师。",
      recognize: [{ch:"谀",py:"yú",word:"阿谀"},{ch:"贻",py:"yí",word:"贻笑"},{ch:"蟠",py:"pán",word:"蟠龙"}],
      write: [{ch:"谀",py:"yú",strokes:11,radical:"讠",word:"谄谀"},{ch:"贻",py:"yí",strokes:9,radical:"贝",word:"贻误"},{ch:"蟠",py:"pán",strokes:18,radical:"虫",word:"蟠曲"},{ch:"授",py:"shòu",strokes:11,radical:"扌",word:"教授"}],
      practice: ["朗读并背诵。","老师的作用是什么？","为什么从师不分贵贱？"],
      think: "「弟子不必不如师」对吗？",
    }),
    gardenPage("三", ["识字加油站：思辨字--靛、砺、跬、骥。","字词句运用：用比喻论证学习。","书写提示：注意「骥」「蟠」的结构。","日积月累：静女。"], { zhTitle: "静女", lines: ["静女其姝，俟我于城隅。", "爱而不见，搔首踟蹰。"] }),

    unitPage("四", "自然与人生", "Nature & Life", "故都的秋、荷塘月色、我与地坛、赤壁赋、登泰山记。", ["故都的秋", "荷塘月色", "赤壁赋"]),
    ...lessonPage({
      zhTitle: "故都的秋", enTitle: "Autumn in the Old Capital", pinyin: "gù dū de qiū",
      passage: [["qiū","qiū" as any].slice(0,2) as [string,string],["tiān","tiān" as any].slice(0,2) as [string,string],["wú","wú" as any].slice(0,2) as [string,string],["lùn","lùn" as any].slice(0,2) as [string,string],["zài","zài" as any].slice(0,2) as [string,string],["shén","shén" as any].slice(0,2) as [string,string],["me","么"], ["dì","地"], ["fāng","方"], ["dōu","都"], ["shì","是"], ["hǎo","好"], ["de","的"], ["。","。"]],
      note: "郁达夫。故都的秋清、静、悲凉。写牵牛花、槐树、秋蝉、秋雨。对故都秋的眷恋。",
      recognize: [{ch:"沌",py:"dùn",word:"混沌"},{ch:"潭",py:"tán",word:"潭柘寺"},{ch:"柘",py:"zhè",word:"潭柘寺"},{ch:"蕊",py:"ruǐ",word:"花蕊"}],
      write: [{ch:"混",py:"hùn",strokes:11,radical:"氵",word:"混沌"},{ch:"潭",py:"tán",strokes:15,radical:"氵",word:"深潭"},{ch:"柘",py:"zhè",strokes:9,radical:"木",word:"柘树"},{ch:"蕊",py:"ruǐ",strokes:15,radical:"艹",word:"花蕊"}],
      practice: ["朗读。","故都的秋有什么特点？","写了哪些秋景？"],
      think: "为什么作者喜欢悲凉的秋？",
    }),
    ...lessonPage({
      zhTitle: "赤壁赋", enTitle: "Ode on the Red Cliffs", pinyin: "chì bì fù",
      passage: [["rén","rén" as any].slice(0,2) as [string,string],["xū","xū" as any].slice(0,2) as [string,string],["qiū","qiū" as any].slice(0,2) as [string,string],["qī","qī" as any].slice(0,2) as [string,string],["wàng","wàng" as any].slice(0,2) as [string,string],["qī","qī" as any].slice(0,2) as [string,string],["shí","shí" as any].slice(0,2) as [string,string],["liù","liù" as any].slice(0,2) as [string,string],["，","，"],["sū","sū" as any].slice(0,2) as [string,string],["zǐ","zǐ" as any].slice(0,2) as [string,string],["yǔ","yǔ" as any].slice(0,2) as [string,string],["kè","kè" as any].slice(0,2) as [string,string],["fàn","fàn" as any].slice(0,2) as [string,string],["zhōu","zhōu" as any].slice(0,2) as [string,string],["yóu","yóu" as any].slice(0,2) as [string,string],["yú","yú" as any].slice(0,2) as [string,string],["chì","chì" as any].slice(0,2) as [string,string],["bì","bì" as any].slice(0,2) as [string,string],["zhī","zhī" as any].slice(0,2) as [string,string],["xià","xià" as any].slice(0,2) as [string,string],["。","。"]],
      note: "苏轼。泛舟赤壁，主客问答。逝者如斯而未尝往也。变与不变的哲理，旷达。",
      recognize: [{ch:"壬",py:"rén",word:"壬戌"},{ch:"戌",py:"xū",word:"壬戌"},{ch:"属",py:"zhǔ",word:"举酒属客"},{ch:"窈",py:"yǎo",word:"窈窕"}],
      write: [{ch:"壬",py:"rén",strokes:4,radical:"士",word:"壬戌"},{ch:"戌",py:"xū",strokes:6,radical:"戈",word:"戊戌"},{ch:"属",py:"zhǔ",strokes:12,radical:"尸",word:"属于"},{ch:"窈",py:"yǎo",strokes:10,radical:"穴",word:"窈窕"}],
      practice: ["朗读并背诵。","主客各表达了什么？","苏轼怎么看待变与不变？"],
      think: "苏轼的旷达给你什么启发？",
    }),
    gardenPage("四", ["识字加油站：文言字--壬、戌、属、窈。","字词句运用：用问答写哲理。","书写提示：注意「戌」「窈」的结构。","日积月累：涉江采芙蓉。"], { zhTitle: "涉江采芙蓉", lines: ["涉江采芙蓉，兰泽多芳草。", "采之欲遗谁？所思在远道。"] }),

    strokePage("识字表（会认）", "十年级上册会认字约 120 个。重点：橘、舸、寥、遒、烛、烧、沸、耕、菽、蕊、穗、靛、砺、跬、骥、谀、贻、蟠、授、沌、潭、柘、混、壬、戌、属、窈。"),
    strokePage("写字表（会写）", "十年级上册会写字约 120 个。重点：橘、舸、寥、遒、烛、烧、沸、耕、菽、蕊、穗、靛、砺、跬、骥、谀、贻、蟠、授、混、潭、柘、蕊、壬、戌、属、窈。"),
    strokePage("词语表", "橘子、百舸、寥廓、遒劲、蜡烛、燃烧、沸腾、耕耘、稻菽、花蕊、麦穗、靛青、砥砺、跬步、骥、谄谀、贻误、蟠曲、教授、混沌、深潭、柘树、花蕊、壬戌、戊戌、属于、窈窕。"),
    { kind: "back", title: { en: "Afterword", zh: "后记" }, body: { en: <>You finished Grade 10 Book One. Ten years of Chinese, from first characters to the classics.</>, zh: <>你读完了十年级上册。从第一个字到经典，十年中文路。继续读下去。</> } },
  ],
};
