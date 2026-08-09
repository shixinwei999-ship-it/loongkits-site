import type { Book } from "@/components/BookReader";
import { lessonPage, gardenPage, unitPage, poemPage, strokePage } from "./grade1";

// 九年级 · 上册（部编版九年级上册结构）
export const grade9Book: Book = {
  gradeId: "g9",
  title: { en: "Grade 9 · Book One", zh: "九年级 · 上册" },
  subtitle: { en: "Poetry, Duty & Homeland", zh: "诗歌、责任与家国" },
  pages: [
    { kind: "cover", title: { en: "Cover", zh: "封面" } },
    { kind: "copyright", title: { en: "About", zh: "出版说明" }, body: { en: <>Grade 9 Book One, after the PEP ninth-grade textbook.</>, zh: <>《九年级 · 上册》，按部编版九年级上册结构编写。</> } },
    { kind: "toc", title: { en: "Contents", zh: "目录" } },

    unitPage("一", "诗歌", "Poetry", "沁园春雪、我爱这土地、乡愁、你是人间的四月天。", ["沁园春·雪", "我爱这土地", "乡愁", "你是人间的四月天"]),
    ...lessonPage({
      zhTitle: "沁园春·雪", enTitle: "Snow - to the tune of Qinyuanchun", pinyin: "qìn yuán chūn xuě",
      passage: [["běi","北"],["guó","国"],["fēng","风"],["guāng","光"],["，","，"],["qiān","千"],["lǐ","里"],["bīng","冰"],["fēng","封"],["，","，"],["wàn","万"],["lǐ","里"],["xuě","雪"],["piāo","piāo" as any].slice(0,2) as [string,string],["。","。"]],
      note: "毛泽东。上阕写北国雪景壮丽，下阕评古论今，数风流人物还看今朝。豪迈。",
      recognize: [{ch:"沁",py:"qìn",word:"沁园春"},{ch:"莽",py:"mǎng",word:"莽莽"},{ch:"娆",py:"ráo",word:"妖娆"},{ch:"骚",py:"sāo",word:"风骚"}],
      write: [{ch:"沁",py:"qìn",strokes:7,radical:"氵",word:"沁人心脾"},{ch:"莽",py:"mǎng",strokes:10,radical:"艹",word:"莽莽"},{ch:"娆",py:"ráo",strokes:9,radical:"女",word:"妖娆"},{ch:"骚",py:"sāo",strokes:12,radical:"马",word:"风骚"}],
      practice: ["朗读并背诵。","上阕写什么景？下阕评什么人？","主旨是什么？"],
      think: "「数风流人物还看今朝」表达什么？",
    }),
    ...lessonPage({
      zhTitle: "我爱这土地", enTitle: "I Love This Land", pinyin: "wǒ ài zhè tǔ dì",
      passage: [["jiǎ","jiǎ" as any].slice(0,2) as [string,string],["rú","rú" as any].slice(0,2) as [string,string],["wǒ","wǒ" as any].slice(0,2) as [string,string],["shì","shì" as any].slice(0,2) as [string,string],["yì","yì" as any].slice(0,2) as [string,string],["zhī","zhī" as any].slice(0,2) as [string,string],["niǎo","niǎo" as any].slice(0,2) as [string,string],["，","，"],["wǒ","wǒ" as any].slice(0,2) as [string,string],["yě","yě" as any].slice(0,2) as [string,string],["yīng","yīng" as any].slice(0,2) as [string,string],["gāi","gāi" as any].slice(0,2) as [string,string],["yòng","yòng" as any].slice(0,2) as [string,string],["sī","sī" as any].slice(0,2) as [string,string],["yǎ","yǎ" as any].slice(0,2) as [string,string],["hóu","hóu" as any].slice(0,2) as [string,string],["gē","gē" as any].slice(0,2) as [string,string],["chàng","chàng" as any].slice(0,2) as [string,string],["。","。"]],
      note: "艾青。假如我是一只鸟，用嘶哑的喉咙歌唱土地、河流、风、黎明。为什么我的眼里常含泪水？因为我对这土地爱得深沉。",
      recognize: [{ch:"嘶",py:"sī",word:"嘶哑"},{ch:"哑",py:"yǎ",word:"嘶哑"},{ch:"喉",py:"hóu",word:"喉咙"},{ch:"咙",py:"lóng",word:"喉咙"}],
      write: [{ch:"嘶",py:"sī",strokes:15,radical:"口",word:"嘶哑"},{ch:"哑",py:"yǎ",strokes:9,radical:"口",word:"哑巴"},{ch:"喉",py:"hóu",strokes:12,radical:"口",word:"喉咙"},{ch:"咙",py:"lóng",strokes:8,radical:"口",word:"喉咙"}],
      practice: ["朗读。","鸟歌唱了哪些事物？","最后两句表达什么？"],
      think: "诗人为什么爱这土地？",
    }),
    ...lessonPage({
      zhTitle: "乡愁", enTitle: "Nostalgia", pinyin: "xiāng chóu",
      passage: [["xiāng","xiāng" as any].slice(0,2) as [string,string],["chóu","chóu" as any].slice(0,2) as [string,string],["shì","shì" as any].slice(0,2) as [string,string],["yì","yì" as any].slice(0,2) as [string,string],["méi","méi" as any].slice(0,2) as [string,string],["xiǎo","xiǎo" as any].slice(0,2) as [string,string],["xiǎo","xiǎo" as any].slice(0,2) as [string,string],["de","de" as any].slice(0,2) as [string,string],["yóu","yóu" as any].slice(0,2) as [string,string],["piào","piào" as any].slice(0,2) as [string,string],["。","。"]],
      note: "余光中。乡愁是邮票、船票、坟墓、海峡。把抽象乡愁具体化，层层加深。",
      recognize: [{ch:"枚",py:"méi",word:"一枚"},{ch:"湾",py:"wān",word:"海峡"},{ch:"峡",py:"xiá",word:"海峡"}],
      write: [{ch:"枚",py:"méi",strokes:8,radical:"木",word:"一枚"},{ch:"湾",py:"wān",strokes:12,radical:"氵",word:"海湾"},{ch:"峡",py:"xiá",strokes:9,radical:"山",word:"海峡"},{ch:"愁",py:"chóu",strokes:13,radical:"心",word:"乡愁"}],
      practice: ["朗读并背诵。","乡愁比作了哪四样？","情感如何层层加深？"],
      think: "你的乡愁是什么？",
    }),
    gardenPage("一", ["识字加油站：诗歌字--沁、莽、娆、骚。","字词句运用：用意象写情感。","书写提示：注意「娆」「骚」的结构。","日积月累：行路难。"], { zhTitle: "行路难", lines: ["金樽清酒斗十千，", "玉盘珍羞直万钱。", "长风破浪会有时，", "直挂云帆济沧海。"] }),

    unitPage("二", "敬业", "Dedication", "敬业与乐业、就英法联军远征中国致巴特勒上尉的信、论教养。", ["敬业与乐业", "就英法联军远征中国致巴特勒上尉的信", "论教养"]),
    ...lessonPage({
      zhTitle: "敬业与乐业", enTitle: "Respect and Enjoy Your Work", pinyin: "jìng yè yǔ lè yè",
      passage: [["jìng","jìng" as any].slice(0,2) as [string,string],["yè","yè" as any].slice(0,2) as [string,string],["hé","hé" as any].slice(0,2) as [string,string],["lè","lè" as any].slice(0,2) as [string,string],["yè","yè" as any].slice(0,2) as [string,string],["，","，"],["shì","shì" as any].slice(0,2) as [string,string],["rén","rén" as any].slice(0,2) as [string,string],["shēng","shēng" as any].slice(0,2) as [string,string],["huó","huó" as any].slice(0,2) as [string,string],["de","de" as any].slice(0,2) as [string,string],["bù","bù" as any].slice(0,2) as [string,string],["èr","èr" as any].slice(0,2) as [string,string],["fǎ","fǎ" as any].slice(0,2) as [string,string],["mén","mén" as any].slice(0,2) as [string,string],["。","。"]],
      note: "梁启超。有业是前提，敬业是责任心，乐业是趣味。要敬业乐业。",
      recognize: [{ch:"佝",py:"gōu",word:"佝偻"},{ch:"偻",py:"lóu",word:"佝偻"},{ch:"骛",py:"wù",word:"旁骛"},{ch:"聒",py:"guō",word:"强聒"}],
      write: [{ch:"佝",py:"gōu",strokes:8,radical:"亻",word:"佝偻"},{ch:"偻",py:"lóu",strokes:11,radical:"亻",word:"佝偻"},{ch:"骛",py:"wù",strokes:13,radical:"马",word:"心无旁骛"},{ch:"聒",py:"guō",strokes:12,radical:"耳",word:"聒噪"}],
      practice: ["朗读。","敬业和乐业各指什么？","为什么有业是前提？"],
      think: "你怎么做到乐业？",
    }),
    gardenPage("二", ["识字加油站：敬业字--佝、、骛、。","字词句运用：用「因为……所以……」论证。","书写提示：注意「骛」「聒」的结构。","日积月累：酬乐天扬州初逢席上见赠。"], { zhTitle: "酬乐天扬州初逢席上见赠", lines: ["巴山楚水凄凉地，", "二十三年弃置身。", "沉舟侧畔千帆过，", "病树前头万木春。"] }),

    unitPage("三", "古仁人", "The Ancients", "岳阳楼记、醉翁亭记、湖心亭看雪、诗词三首。", ["岳阳楼记", "醉翁亭记", "湖心亭看雪"]),
    ...lessonPage({
      zhTitle: "岳阳楼记", enTitle: "On Yueyang Tower", pinyin: "yuè yáng lóu jì",
      passage: [["qìng","qìng" as any].slice(0,2) as [string,string],["lì","lì" as any].slice(0,2) as [string,string],["sì","sì" as any].slice(0,2) as [string,string],["nián","nián" as any].slice(0,2) as [string,string],["chūn","chūn" as any].slice(0,2) as [string,string],["，","，"],["téng","téng" as any].slice(0,2) as [string,string],["zǐ","zǐ" as any].slice(0,2) as [string,string],["jīng","jīng" as any].slice(0,2) as [string,string],["zhé","zhé" as any].slice(0,2) as [string,string],["shǒu","shǒu" as any].slice(0,2) as [string,string],["bā","bā" as any].slice(0,2) as [string,string],["líng","líng" as any].slice(0,2) as [string,string],["jùn","jùn" as any].slice(0,2) as [string,string],["。","。"]],
      note: "范仲淹。写岳阳楼阴晴两景，迁客骚人悲喜，引出「不以物喜不以己悲」「先天下之忧而忧，后天下之乐而乐」。",
      recognize: [{ch:"谪",py:"zhé",word:"谪守"},{ch:"晖",py:"huī",word:"朝晖"},{ch:"潇",py:"xiāo",word:"潇湘"},{ch:"汀",py:"tīng",word:"汀兰"}],
      write: [{ch:"谪",py:"zhé",strokes:13,radical:"讠",word:"贬谪"},{ch:"晖",py:"huī",strokes:10,radical:"日",word:"朝晖"},{ch:"潇",py:"xiāo",strokes:14,radical:"氵",word:"潇洒"},{ch:"汀",py:"tīng",strokes:5,radical:"氵",word:"汀兰"}],
      practice: ["朗读并背诵。","阴晴两景各写什么？","作者的政治抱负是什么？"],
      think: "「先忧后乐」在今天有意义吗？",
    }),
    ...lessonPage({
      zhTitle: "醉翁亭记", enTitle: "The Old Drunkard's Pavilion", pinyin: "zuì wēng tíng jì",
      passage: [["huán","huán" as any].slice(0,2) as [string,string],["chú","chú" as any].slice(0,2) as [string,string],["jiē","jiē" as any].slice(0,2) as [string,string],["shān","shān" as any].slice(0,2) as [string,string],["yě","yě" as any].slice(0,2) as [string,string],["。","。"]],
      note: "欧阳修。环滁皆山，醉翁亭，山水之乐，与民同乐。醉翁之意不在酒，在乎山水之间。",
      recognize: [{ch:"滁",py:"chú",word:"滁州"},{ch:"壑",py:"hè",word:"林壑"},{ch:"蔚",py:"wèi",word:"蔚然"},{ch:"辄",py:"zhé",word:"饮少辄醉"}],
      write: [{ch:"滁",py:"chú",strokes:12,radical:"氵",word:"滁州"},{ch:"壑",py:"hè",strokes:17,radical:"土",word:"丘壑"},{ch:"蔚",py:"wèi",strokes:14,radical:"艹",word:"蔚然"},{ch:"辄",py:"zhé",strokes:11,radical:"车",word:"动辄"}],
      practice: ["朗读并背诵。","醉翁之意在哪里？","与民同乐体现在哪？"],
      think: "欧阳修的乐是什么乐？",
    }),
    gardenPage("三", ["识字加油站：古文宇--谪、晖、潇、汀。","字词句运用：用对偶写景。","书写提示：注意「谪」「蔚」的结构。","日积月累：水调歌头。"], { zhTitle: "水调歌头", lines: ["明月几时有？把酒问青天。", "人有悲欢离合，", "月有阴晴圆缺，", "此事古难全。", "但愿人长久，", "千里共婵娟。"] }),

    unitPage("四", "故乡", "Homeland", "故乡、我的叔叔于勒、孤独之旅。", ["故乡", "我的叔叔于勒", "孤独之旅"]),
    ...lessonPage({
      zhTitle: "故乡", enTitle: "My Old Home", pinyin: "gù xiāng",
      passage: [["wǒ","wǒ" as any].slice(0,2) as [string,string],["mào","mào" as any].slice(0,2) as [string,string],["zhe","zhe" as any].slice(0,2) as [string,string],["yán","yán" as any].slice(0,2) as [string,string],["hán","hán" as any].slice(0,2) as [string,string],["huí","huí" as any].slice(0,2) as [string,string],["gù","gù" as any].slice(0,2) as [string,string],["xiāng","xiāng" as any].slice(0,2) as [string,string],["qù","qù" as any].slice(0,2) as [string,string],["。","。"]],
      note: "鲁迅。回故乡所见：闰土由小英雄变麻木，杨二嫂由豆腐西施变刻薄。希望本无所谓有无所谓无，走的人多了也便成了路。",
      recognize: [{ch:"晦",py:"huì",word:"阴晦"},{ch:"萧",py:"xiāo",word:"萧索"},{ch:"索",py:"suǒ",word:"萧索"},{ch:"伶",py:"líng",word:"伶仃"}],
      write: [{ch:"晦",py:"huì",strokes:11,radical:"日",word:"阴晦"},{ch:"萧",py:"xiāo",strokes:11,radical:"艹",word:"萧条"},{ch:"索",py:"suǒ",strokes:10,radical:"糸",word:"索取"},{ch:"伶",py:"líng",strokes:7,radical:"亻",word:"伶俐"}],
      practice: ["朗读。","闰土前后有什么变化？","「路」的比喻是什么？"],
      think: "希望是本无所谓有无所谓无，怎么理解？",
    }),
    gardenPage("四", ["识字加油站：故乡字--晦、萧、索、伶。","字词句运用：用对比写人物变化。","书写提示：注意「晦」「萧」的结构。","日积月累：月夜。"], { zhTitle: "月夜", lines: ["更深月色半人家，", "北斗阑干南斗斜。", "今夜偏知春气暖，", "虫声新透绿窗纱。"] }),

    unitPage("五", "议论文", "Argumentation", "中国人失掉自信力了吗、怀疑与学问、创造宣言。", ["中国人失掉自信力了吗", "怀疑与学问", "创造宣言"]),
    ...lessonPage({
      zhTitle: "中国人失掉自信力了吗", enTitle: "Have the Chinese Lost Self-Confidence?", pinyin: "zhōng guó rén shī diào zì xìn lì le ma",
      passage: [["cóng","cóng" as any].slice(0,2) as [string,string],["gōng","gōng" as any].slice(0,2) as [string,string],["kāi","kāi" as any].slice(0,2) as [string,string],["de","de" as any].slice(0,2) as [string,string],["wén","wén" as any].slice(0,2) as [string,string],["zhāng","zhāng" as any].slice(0,2) as [string,string],["shàng","shàng" as any].slice(0,2) as [string,string],["，","，"],["zǒng","zǒng" as any].slice(0,2) as [string,string],["shì","shì" as any].slice(0,2) as [string,string],["huái","huái" as any].slice(0,2) as [string,string],["zhe","zhe" as any].slice(0,2) as [string,string],["zì","zì" as any].slice(0,2) as [string,string],["kuā","kuā" as any].slice(0,2) as [string,string],["zì","zì" as any].slice(0,2) as [string,string],["dì","dì" as any].slice(0,2) as [string,string],["dà","dà" as any].slice(0,2) as [string,string],["guó","guó" as any].slice(0,2) as [string,string],["。","。"]],
      note: "鲁迅。驳「中国人失掉自信力」，指出有埋头苦干、拼命硬干的人在，他们是中国的脊梁。",
      recognize: [{ch:"玄",py:"xuán",word:"玄虚"},{ch:"虚",py:"xū",word:"玄虚"},{ch:"脊",py:"jǐ",word:"脊梁"},{ch:"梁",py:"liáng",word:"脊梁"}],
      write: [{ch:"玄",py:"xuán",strokes:5,radical:"玄",word:"玄虚"},{ch:"虚",py:"xū",strokes:11,radical:"虍",word:"虚心"},{ch:"脊",py:"jǐ",strokes:10,radical:"月",word:"脊梁"},{ch:"梁",py:"liáng",strokes:11,radical:"木",word:"栋梁"}],
      practice: ["朗读。","对方的论点是什么？","作者怎么驳？","中国的脊梁是谁？"],
      think: "今天谁是中国的脊梁？",
    }),
    gardenPage("五", ["识字加油站：议论字--玄、虚、脊、梁。","字词句运用：用驳论写一段话。","书写提示：注意「脊」「梁」的结构。","日积月累：商山早行。"], { zhTitle: "商山早行", lines: ["晨起动征铎，", "客行悲故乡。", "鸡声茅店月，", "人迹板桥霜。"] }),

    unitPage("六", "古典小说", "Classical Novels", "智取生辰纲、范进中举、三顾茅庐、刘姥姥进大观园。", ["智取生辰纲", "范进中举", "三顾茅庐"]),
    ...lessonPage({
      zhTitle: "智取生辰纲", enTitle: "Outsmarting the Birthday Convoy", pinyin: "zhì qǔ shēng chén gāng",
      passage: [["yáng","yáng" as any].slice(0,2) as [string,string],["zhì","zhì" as any].slice(0,2) as [string,string],["yā","yā" as any].slice(0,2) as [string,string],["zhe","zhe" as any].slice(0,2) as [string,string],["shēng","shēng" as any].slice(0,2) as [string,string],["chén","chén" as any].slice(0,2) as [string,string],["gāng","gāng" as any].slice(0,2) as [string,string],["wǎng","wǎng" as any].slice(0,2) as [string,string],["gāng","gāng" as any].slice(0,2) as [string,string],["shàng","shàng" as any].slice(0,2) as [string,string],["zǒu","zǒu" as any].slice(0,2) as [string,string],["。","。"]],
      note: "施耐庵《水浒》。杨志押送生辰纲，吴用等用计（酒中下药）智取。智在多算、团结。",
      recognize: [{ch:"嗔",py:"chēn",word:"嗔怒"},{ch:"歇",py:"xiē",word:"歇息"},{ch:"干",py:"gān",word:"干系"},{ch:"逞",py:"chěng",word:"逞辩"}],
      write: [{ch:"嗔",py:"chēn",strokes:12,radical:"口",word:"嗔怒"},{ch:"歇",py:"xiē",strokes:13,radical:"欠",word:"歇息"},{ch:"干",py:"gān",strokes:3,radical:"干",word:"干系"},{ch:"逞",py:"chěng",strokes:10,radical:"辶",word:"逞能"}],
      practice: ["朗读。","杨志为什么失败？","吴用的计妙在哪？"],
      think: "智取「智」在哪里？",
    }),
    gardenPage("六", ["识字加油站：小说字--嗔、歇、干、逞。","字词句运用：用情节写人物。","书写提示：注意「嗔」「逞」的结构。","日积月累：长沙过贾谊宅。"], { zhTitle: "左迁至蓝关示侄孙湘", lines: ["一封朝奏九重天，", "夕贬潮州路八千。", "欲为圣明除弊事，", "肯将衰朽惜残年。"] }),

    strokePage("识字表（会认）", "九年级上册会认字约 140 个。重点：沁、莽、娆、骚、嘶、哑、喉、咙、枚、湾、峡、佝、偻、骛、聒、谪、晖、潇、汀、滁、壑、蔚、辄、晦、萧、索、伶、玄、虚、脊、梁、嗔、歇、干、逞。"),
    strokePage("写字表（会写）", "九年级上册会写字约 140 个。重点：沁、莽、娆、骚、嘶、哑、喉、咙、枚、湾、峡、愁、佝、偻、骛、聒、谪、晖、潇、汀、滁、壑、蔚、辄、晦、萧、索、伶、玄、虚、脊、梁、嗔、歇、干、逞。"),
    strokePage("词语表", "沁人心脾、莽莽、妖娆、风骚、嘶哑、哑巴、喉咙、一枚、海湾、海峡、乡愁、佝偻、心无旁骛、聒噪、贬谪、朝晖、潇洒、汀兰、滁州、丘壑、蔚然、动辄、阴晦、萧条、索取、伶俐、玄虚、虚心、脊梁、栋梁、嗔怒、歇息、干系、逞能。"),
    { kind: "back", title: { en: "Afterword", zh: "后记" }, body: { en: <>You finished Grade 9 Book One - the last middle-school book.</>, zh: <>你读完了九年级上册--初中最后一册。高中从这里继续。</> } },
  ],
};
