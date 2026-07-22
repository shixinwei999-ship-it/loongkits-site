// 中文教学课程数据：拼音、声调、声母、韵母、拼读、笔画、偏旁、高频字、起步词。
// 这是“教中文”的主轴内容，文化只是练习这些语言点的语境。
// 所有可点发音的字/词，由 SpeakButton 用浏览器中文语音朗读（无音频资产、不造假按钮）。

import type { Lang } from "./i18n";

type Bi<T> = Record<Lang, T>;

export interface Word {
  char: string;
  pinyin: string;
  en: Bi<string>;
}

export interface Tone {
  id: string;
  mark: string;
  value: string;
  curve: number[]; // 5 个音高采样 1..5，用于画调型折线
  approx: Bi<string>;
  gesture: Bi<string>;
  examples: Word[];
}

export const tones: Tone[] = [
  {
    id: "1",
    mark: "ˉ",
    value: "55",
    curve: [5, 5, 5, 5, 5],
    approx: { en: "high and flat, like holding a note", zh: "高而平，像拖长一个音" },
    gesture: { en: "Hold your hand straight out at shoulder height.", zh: "手平举在肩高，保持不动。" },
    examples: [
      { char: "妈", pinyin: "mā", en: { en: "mum", zh: "妈妈" } },
      { char: "天", pinyin: "tiān", en: { en: "sky / day", zh: "天" } },
      { char: "一", pinyin: "yī", en: { en: "one", zh: "一" } },
    ],
  },
  {
    id: "2",
    mark: "ˊ",
    value: "35",
    curve: [3, 3.5, 4, 4.5, 5],
    approx: { en: "rising, like asking “huh?”", zh: "往上扬，像问“啊？”" },
    gesture: { en: "Sweep your hand upward, like a question.", zh: "手往上扬，像提问。" },
    examples: [
      { char: "麻", pinyin: "má", en: { en: "hemp", zh: "麻" } },
      { char: "人", pinyin: "rén", en: { en: "person", zh: "人" } },
      { char: "龙", pinyin: "lóng", en: { en: "dragon", zh: "龙" } },
    ],
  },
  {
    id: "3",
    mark: "ˇ",
    value: "214",
    curve: [2, 1.5, 1, 2.5, 4],
    approx: { en: "dips down, then rises", zh: "先降后升，拐个弯" },
    gesture: { en: "Dip your hand down, then lift it.", zh: "手先往下，再往上。" },
    examples: [
      { char: "马", pinyin: "mǎ", en: { en: "horse", zh: "马" } },
      { char: "好", pinyin: "hǎo", en: { en: "good", zh: "好" } },
      { char: "水", pinyin: "shuǐ", en: { en: "water", zh: "水" } },
    ],
  },
  {
    id: "4",
    mark: "ˋ",
    value: "51",
    curve: [5, 4, 3, 2, 1],
    approx: { en: "falls sharply, like “no!”", zh: "短促往下，像说“不！”" },
    gesture: { en: "Chop your hand down, short and firm.", zh: "手短促往下切，干脆。" },
    examples: [
      { char: "骂", pinyin: "mà", en: { en: "scold", zh: "骂" } },
      { char: "大", pinyin: "dà", en: { en: "big", zh: "大" } },
      { char: "四", pinyin: "sì", en: { en: "four", zh: "四" } },
    ],
  },
  {
    id: "5",
    mark: "·",
    value: "neutral",
    curve: [3, 2.4, 2, 2, 2],
    approx: { en: "light and short, no stress", zh: "又轻又短，不重读" },
    gesture: { en: "A tiny tap — quick and soft.", zh: "轻轻一点，又快又轻。" },
    examples: [
      { char: "吗", pinyin: "ma", en: { en: "(question particle)", zh: "吗（疑问语气）" } },
      { char: "的", pinyin: "de", en: { en: "(of / 's)", zh: "的" } },
      { char: "们", pinyin: "men", en: { en: "(plural)", zh: "们（复数）" } },
    ],
  },
];

// 21 个辅音声母，char 为呼读音（TTS 可读），pinyin 为声母字母。
export const initials: Word[] = [
  { char: "玻", pinyin: "b", en: { en: "b as in “bo”", zh: "b，如“玻”" } },
  { char: "坡", pinyin: "p", en: { en: "p as in “po”", zh: "p，如“坡”" } },
  { char: "摸", pinyin: "m", en: { en: "m as in “mo”", zh: "m，如“摸”" } },
  { char: "佛", pinyin: "f", en: { en: "f as in “fo”", zh: "f，如“佛”" } },
  { char: "得", pinyin: "d", en: { en: "d as in “de”", zh: "d，如“得”" } },
  { char: "特", pinyin: "t", en: { en: "t as in “te”", zh: "t，如“特”" } },
  { char: "讷", pinyin: "n", en: { en: "n as in “ne”", zh: "n，如“讷”" } },
  { char: "勒", pinyin: "l", en: { en: "l as in “le”", zh: "l，如“勒”" } },
  { char: "哥", pinyin: "g", en: { en: "g as in “ge”", zh: "g，如“哥”" } },
  { char: "科", pinyin: "k", en: { en: "k as in “ke”", zh: "k，如“科”" } },
  { char: "喝", pinyin: "h", en: { en: "h as in “he”", zh: "h，如“喝”" } },
  { char: "基", pinyin: "j", en: { en: "j as in “ji”", zh: "j，如“基”" } },
  { char: "欺", pinyin: "q", en: { en: "q as in “qi”", zh: "q，如“欺”" } },
  { char: "希", pinyin: "x", en: { en: "x as in “xi”", zh: "x，如“希”" } },
  { char: "知", pinyin: "zh", en: { en: "zh as in “zhi”", zh: "zh，如“知”" } },
  { char: "蚩", pinyin: "ch", en: { en: "ch as in “chi”", zh: "ch，如“蚩”" } },
  { char: "诗", pinyin: "sh", en: { en: "sh as in “shi”", zh: "sh，如“诗”" } },
  { char: "日", pinyin: "r", en: { en: "r as in “ri”", zh: "r，如“日”" } },
  { char: "资", pinyin: "z", en: { en: "z as in “zi”", zh: "z，如“资”" } },
  { char: "雌", pinyin: "c", en: { en: "c as in “ci”", zh: "c，如“雌”" } },
  { char: "思", pinyin: "s", en: { en: "s as in “si”", zh: "s，如“思”" } },
];

// 24 个韵母，char 为直读代表字（TTS 可读），pinyin 为韵母字母。
export const finals: Word[] = [
  { char: "啊", pinyin: "a", en: { en: "a as in “father”", zh: "a，如“啊”" } },
  { char: "哦", pinyin: "o", en: { en: "o as in “or”", zh: "o，如“哦”" } },
  { char: "鹅", pinyin: "e", en: { en: "e as in “uh”", zh: "e，如“鹅”" } },
  { char: "衣", pinyin: "i", en: { en: "i as in “see”", zh: "i，如“衣”" } },
  { char: "乌", pinyin: "u", en: { en: "u as in “boot”", zh: "u，如“乌”" } },
  { char: "鱼", pinyin: "ü", en: { en: "ü, lips round like “u”, say “ee”", zh: "ü，嘴圆发“衣”" } },
  { char: "哀", pinyin: "ai", en: { en: "ai as in “eye”", zh: "ai，如“哀”" } },
  { char: "欸", pinyin: "ei", en: { en: "ei as in “hey”", zh: "ei，如“欸”" } },
  { char: "威", pinyin: "ui", en: { en: "ui as in “way”", zh: "ui，如“威”" } },
  { char: "凹", pinyin: "ao", en: { en: "ao as in “cow”", zh: "ao，如“凹”" } },
  { char: "欧", pinyin: "ou", en: { en: "ou as in “oh”", zh: "ou，如“欧”" } },
  { char: "优", pinyin: "iu", en: { en: "iu as in “yo”", zh: "iu，如“优”" } },
  { char: "耶", pinyin: "ie", en: { en: "ie as in “yeah”", zh: "ie，如“耶”" } },
  { char: "约", pinyin: "üe", en: { en: "üe as in “yue”", zh: "üe，如“约”" } },
  { char: "耳", pinyin: "er", en: { en: "er, curled “r”", zh: "er，卷舌" } },
  { char: "安", pinyin: "an", en: { en: "an as in “on”", zh: "an，如“安”" } },
  { char: "恩", pinyin: "en", en: { en: "en as in “un”", zh: "en，如“恩”" } },
  { char: "因", pinyin: "in", en: { en: "in as in “seen”", zh: "in，如“因”" } },
  { char: "温", pinyin: "un", en: { en: "un as in “won”", zh: "un，如“温”" } },
  { char: "晕", pinyin: "ün", en: { en: "ün, round lips + “n”", zh: "ün，圆唇加 n" } },
  { char: "昂", pinyin: "ang", en: { en: "ang as in “song”", zh: "ang，如“昂”" } },
  { char: "鞥", pinyin: "eng", en: { en: "eng, like “ung”", zh: "eng，后鼻音" } },
  { char: "英", pinyin: "ing", en: { en: "ing as in “sing”", zh: "ing，如“英”" } },
  { char: "嗡", pinyin: "ong", en: { en: "ong as in “wrong”", zh: "ong，如“嗡”" } },
];

// 拼读：声母 + 韵母 → 带调例字（点例字听真实发音）。
export const blends: { initial: string; final: string; result: Word }[] = [
  { initial: "b", final: "a", result: { char: "八", pinyin: "bā", en: { en: "eight", zh: "八" } } },
  { initial: "m", final: "a", result: { char: "妈", pinyin: "mā", en: { en: "mum", zh: "妈" } } },
  { initial: "d", final: "a", result: { char: "大", pinyin: "dà", en: { en: "big", zh: "大" } } },
  { initial: "h", final: "ao", result: { char: "好", pinyin: "hǎo", en: { en: "good", zh: "好" } } },
  { initial: "x", final: "ie", result: { char: "谢", pinyin: "xiè", en: { en: "thanks", zh: "谢" } } },
  { initial: "l", final: "ong", result: { char: "龙", pinyin: "lóng", en: { en: "dragon", zh: "龙" } } },
  { initial: "p", final: "eng", result: { char: "朋", pinyin: "péng", en: { en: "friend", zh: "朋" } } },
  { initial: "sh", final: "ui", result: { char: "水", pinyin: "shuǐ", en: { en: "water", zh: "水" } } },
];

export interface Stroke {
  name: Bi<string>;
  pinyin: string;
  en: string;
  path: string; // 0..100 viewBox 内的笔画形状
  example: Word;
  tip: Bi<string>;
}

export const strokes: Stroke[] = [
  { name: { en: "horizontal", zh: "横" }, pinyin: "héng", en: "héng", path: "M16 52 H84", example: { char: "一", pinyin: "yī", en: { en: "one", zh: "一" } }, tip: { en: "Left to right, level.", zh: "从左到右，平。" } },
  { name: { en: "vertical", zh: "竖" }, pinyin: "shù", en: "shù", path: "M50 16 V84", example: { char: "十", pinyin: "shí", en: { en: "ten", zh: "十" } }, tip: { en: "Top to bottom, straight.", zh: "从上到下，直。" } },
  { name: { en: "left-falling", zh: "撇" }, pinyin: "piě", en: "piě", path: "M72 20 Q44 48 24 82", example: { char: "人", pinyin: "rén", en: { en: "person", zh: "人" } }, tip: { en: "From upper-right, sweep down-left.", zh: "右上起，向左下撇出。" } },
  { name: { en: "right-falling", zh: "捺" }, pinyin: "nà", en: "nà", path: "M24 24 L66 70 L82 78", example: { char: "大", pinyin: "dà", en: { en: "big", zh: "大" } }, tip: { en: "Down-right, then press and lift.", zh: "向右下，顿笔再提。" } },
  { name: { en: "dot", zh: "点" }, pinyin: "diǎn", en: "diǎn", path: "M46 28 C58 38 56 54 47 60", example: { char: "六", pinyin: "liù", en: { en: "six", zh: "六" } }, tip: { en: "A short, firm tap.", zh: "短促一点，顿住。" } },
  { name: { en: "rising", zh: "提" }, pinyin: "tí", en: "tí", path: "M28 76 L74 34", example: { char: "打", pinyin: "dǎ", en: { en: "hit", zh: "打" } }, tip: { en: "From lower-left, flick up-right.", zh: "左下起，向右上挑。" } },
  { name: { en: "turn", zh: "折" }, pinyin: "zhé", en: "zhé", path: "M24 30 H72 V78", example: { char: "口", pinyin: "kǒu", en: { en: "mouth", zh: "口" } }, tip: { en: "Go across, pause, turn down.", zh: "先横，顿一下，再折向下。" } },
  { name: { en: "hook", zh: "钩" }, pinyin: "gōu", en: "gōu", path: "M52 18 V72 L40 62", example: { char: "小", pinyin: "xiǎo", en: { en: "small", zh: "小" } }, tip: { en: "Go down, then hook back.", zh: "向下，末端回钩。" } },
];

export interface Radical {
  char: string;
  name: Bi<string>;
  meaning: Bi<string>;
  examples: Word[];
}

export const radicals: Radical[] = [
  { char: "亻", name: { en: "person side", zh: "单人旁" }, meaning: { en: "about people", zh: "与人有关" }, examples: [{ char: "你", pinyin: "nǐ", en: { en: "you", zh: "你" } }, { char: "们", pinyin: "men", en: { en: "(plural)", zh: "们" } }, { char: "他", pinyin: "tā", en: { en: "he", zh: "他" } }] },
  { char: "氵", name: { en: "water side", zh: "三点水" }, meaning: { en: "about water / liquid", zh: "与水、液体有关" }, examples: [{ char: "海", pinyin: "hǎi", en: { en: "sea", zh: "海" } }, { char: "河", pinyin: "hé", en: { en: "river", zh: "河" } }, { char: "洗", pinyin: "xǐ", en: { en: "wash", zh: "洗" } }] },
  { char: "木", name: { en: "tree side", zh: "木字旁" }, meaning: { en: "about trees / wood", zh: "与树木、木材有关" }, examples: [{ char: "林", pinyin: "lín", en: { en: "woods", zh: "林" } }, { char: "树", pinyin: "shù", en: { en: "tree", zh: "树" } }, { char: "桌", pinyin: "zhuō", en: { en: "table", zh: "桌" } }] },
  { char: "口", name: { en: "mouth side", zh: "口字旁" }, meaning: { en: "about mouth / speech", zh: "与嘴、说话有关" }, examples: [{ char: "吃", pinyin: "chī", en: { en: "eat", zh: "吃" } }, { char: "叫", pinyin: "jiào", en: { en: "call", zh: "叫" } }, { char: "吗", pinyin: "ma", en: { en: "(question)", zh: "吗" } }] },
  { char: "扌", name: { en: "hand side", zh: "提手旁" }, meaning: { en: "about hand actions", zh: "与手的动作有关" }, examples: [{ char: "打", pinyin: "dǎ", en: { en: "hit", zh: "打" } }, { char: "找", pinyin: "zhǎo", en: { en: "find", zh: "找" } }, { char: "把", pinyin: "bǎ", en: { en: "(grasp)", zh: "把" } }] },
  { char: "女", name: { en: "woman side", zh: "女字旁" }, meaning: { en: "about women / family", zh: "与女性、亲属有关" }, examples: [{ char: "妈", pinyin: "mā", en: { en: "mum", zh: "妈" } }, { char: "姐", pinyin: "jiě", en: { en: "elder sister", zh: "姐" } }, { char: "好", pinyin: "hǎo", en: { en: "good", zh: "好" } }] },
  { char: "讠", name: { en: "speech side", zh: "言字旁" }, meaning: { en: "about words / speech", zh: "与言语有关" }, examples: [{ char: "说", pinyin: "shuō", en: { en: "speak", zh: "说" } }, { char: "话", pinyin: "huà", en: { en: "words", zh: "话" } }, { char: "读", pinyin: "dú", en: { en: "read", zh: "读" } }] },
  { char: "艹", name: { en: "grass top", zh: "草字头" }, meaning: { en: "about plants", zh: "与植物有关" }, examples: [{ char: "花", pinyin: "huā", en: { en: "flower", zh: "花" } }, { char: "草", pinyin: "cǎo", en: { en: "grass", zh: "草" } }, { char: "茶", pinyin: "chá", en: { en: "tea", zh: "茶" } }] },
];

export interface FirstChar extends Word {
  strokes: number;
}

export const firstChars: FirstChar[] = [
  { char: "一", pinyin: "yī", en: { en: "one", zh: "一" }, strokes: 1 },
  { char: "二", pinyin: "èr", en: { en: "two", zh: "二" }, strokes: 2 },
  { char: "三", pinyin: "sān", en: { en: "three", zh: "三" }, strokes: 3 },
  { char: "人", pinyin: "rén", en: { en: "person", zh: "人" }, strokes: 2 },
  { char: "大", pinyin: "dà", en: { en: "big", zh: "大" }, strokes: 3 },
  { char: "小", pinyin: "xiǎo", en: { en: "small", zh: "小" }, strokes: 3 },
  { char: "上", pinyin: "shàng", en: { en: "up", zh: "上" }, strokes: 3 },
  { char: "下", pinyin: "xià", en: { en: "down", zh: "下" }, strokes: 3 },
  { char: "中", pinyin: "zhōng", en: { en: "middle", zh: "中" }, strokes: 4 },
  { char: "口", pinyin: "kǒu", en: { en: "mouth", zh: "口" }, strokes: 3 },
  { char: "日", pinyin: "rì", en: { en: "sun / day", zh: "日" }, strokes: 4 },
  { char: "月", pinyin: "yuè", en: { en: "moon / month", zh: "月" }, strokes: 4 },
  { char: "水", pinyin: "shuǐ", en: { en: "water", zh: "水" }, strokes: 4 },
  { char: "火", pinyin: "huǒ", en: { en: "fire", zh: "火" }, strokes: 4 },
  { char: "山", pinyin: "shān", en: { en: "mountain", zh: "山" }, strokes: 3 },
  { char: "木", pinyin: "mù", en: { en: "tree / wood", zh: "木" }, strokes: 4 },
];

// 起步 20 词：第一批能开口说的词。
export const firstWords: Word[] = [
  { char: "你好", pinyin: "nǐ hǎo", en: { en: "hello", zh: "你好" } },
  { char: "谢谢", pinyin: "xiè xie", en: { en: "thank you", zh: "谢谢" } },
  { char: "再见", pinyin: "zài jiàn", en: { en: "goodbye", zh: "再见" } },
  { char: "妈妈", pinyin: "mā ma", en: { en: "mum", zh: "妈妈" } },
  { char: "爸爸", pinyin: "bà ba", en: { en: "dad", zh: "爸爸" } },
  { char: "老师", pinyin: "lǎo shī", en: { en: "teacher", zh: "老师" } },
  { char: "朋友", pinyin: "péng you", en: { en: "friend", zh: "朋友" } },
  { char: "水", pinyin: "shuǐ", en: { en: "water", zh: "水" } },
  { char: "吃", pinyin: "chī", en: { en: "eat", zh: "吃" } },
  { char: "好", pinyin: "hǎo", en: { en: "good", zh: "好" } },
  { char: "大", pinyin: "dà", en: { en: "big", zh: "大" } },
  { char: "小", pinyin: "xiǎo", en: { en: "small", zh: "小" } },
  { char: "家", pinyin: "jiā", en: { en: "home", zh: "家" } },
  { char: "年", pinyin: "nián", en: { en: "year", zh: "年" } },
  { char: "龙", pinyin: "lóng", en: { en: "dragon", zh: "龙" } },
  { char: "红", pinyin: "hóng", en: { en: "red", zh: "红" } },
  { char: "我", pinyin: "wǒ", en: { en: "I / me", zh: "我" } },
  { char: "你", pinyin: "nǐ", en: { en: "you", zh: "你" } },
  { char: "是", pinyin: "shì", en: { en: "to be", zh: "是" } },
  { char: "不", pinyin: "bù", en: { en: "not / no", zh: "不" } },
];

// 声调试听：同一个音节 mā / má / mǎ / mà / ma，最直观感受四声。
export const toneDemo: Word[] = [
  { char: "妈", pinyin: "mā", en: { en: "mum (1st)", zh: "妈（一声）" } },
  { char: "麻", pinyin: "má", en: { en: "hemp (2nd)", zh: "麻（二声）" } },
  { char: "马", pinyin: "mǎ", en: { en: "horse (3rd)", zh: "马（三声）" } },
  { char: "骂", pinyin: "mà", en: { en: "scold (4th)", zh: "骂（四声）" } },
  { char: "吗", pinyin: "ma", en: { en: "? (neutral)", zh: "吗（轻声）" } },
];
