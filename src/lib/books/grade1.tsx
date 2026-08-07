import type { Book } from "@/components/BookReader";

// 一年级（上册）完整一本书。按真教材密度编写：每课含拼音注音课文全文、
// 会认字表、会写字表（笔画/部首/组词）、课后练习、思考说话。参考部编版一年级上册骨架。

const Ruby = ({ py, ch }: { py: string; ch: string }) => (
  <ruby className="ruby-zh">
    {ch}
    <rt>{py}</rt>
  </ruby>
);

// 一段课文：汉字与拼音逐字配对
function Passage({ pairs }: { pairs: [string, string][] }) {
  return (
    <p className="font-serif-sc text-2xl leading-[2.6] text-ink sm:text-3xl">
      {pairs.map(([py, ch], i) => (
        <Ruby key={i} py={py} ch={ch} />
      ))}
    </p>
  );
}

// 会认字表
function Recognize({ rows }: { rows: { ch: string; py: string; word: string }[] }) {
  return (
    <div className="mt-5">
      <p className="mb-2 font-bold text-[#b3121f]">会认字</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {rows.map((r) => (
          <div key={r.ch} className="rounded-md bg-[#b3121f]/5 px-3 py-2 text-center">
            <div className="font-serif-sc text-2xl font-bold text-ink">{r.ch}</div>
            <div className="text-xs text-ink-light">{r.py}</div>
            <div className="text-xs text-teal-dark">{r.word}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 会写字表（笔画/部首/组词）
function Write({ rows }: { rows: { ch: string; py: string; strokes: number; radical: string; word: string }[] }) {
  return (
    <div className="mt-5">
      <p className="mb-2 font-bold text-[#2d6a4f]">会写字</p>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="text-xs text-ink-light">
            <th className="border-b border-teal/15 py-1 text-left">字</th>
            <th className="border-b border-teal/15 py-1 text-left">拼音</th>
            <th className="border-b border-teal/15 py-1 text-left">笔画</th>
            <th className="border-b border-teal/15 py-1 text-left">部首</th>
            <th className="border-b border-teal/15 py-1 text-left">组词</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.ch} className="border-b border-teal/8">
              <td className="py-2 font-serif-sc text-xl font-bold text-ink">{r.ch}</td>
              <td className="py-2 text-ink-light">{r.py}</td>
              <td className="py-2 text-ink-light">{r.strokes} 画</td>
              <td className="py-2 text-ink-light">{r.radical}</td>
              <td className="py-2 text-teal-dark">{r.word}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Practice({ items }: { items: string[] }) {
  return (
    <div className="mt-5 rounded-lg bg-teal/5 p-4">
      <p className="mb-2 font-bold text-teal">课后练习</p>
      <ol className="list-decimal space-y-1.5 pl-5 text-sm text-ink/80">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ol>
    </div>
  );
}

export const grade1Book: Book = {
  gradeId: "g1",
  title: { en: "Grade 1 · Book One", zh: "一年级 · 上册" },
  subtitle: { en: "First Words & First Poems", zh: "第一本书 · 第一个字" },
  pages: [
    { kind: "cover", title: { en: "Cover", zh: "封面" } },
    {
      kind: "copyright", title: { en: "About this book", zh: "出版说明" },
      body: {
        en: <>Loong Kits Grade 1 Book One. A bilingual Chinese textbook. Read it cover to cover, one page at a time. Every lesson has the full text with pinyin, the characters to read and to write, exercises, and a thinking question. There is no shortcut to reading Chinese - only turning pages.</>,
        zh: <>《Loong Kits 一年级 · 上册》。一本双语中文教材。从封面一页一页读到封底。每课都有带拼音的课文全文、要认的字、要写的字、课后练习、思考题。学中文没有捷径，只有一页一页翻。</>,
      },
    },
    { kind: "toc", title: { en: "Contents", zh: "目录" } },

    // 我上学了
    {
      kind: "lesson", title: { en: "I Go to School", zh: "我上学了" },
      body: {
        en: <>Welcome to Chinese! You will learn your first 100 characters and first poems.<br/><b>Speak:</b> 你好 (nǐ hǎo) = Hello. <b>老师</b> (lǎo shī) = Teacher. <b>同学</b> (tóng xué) = Classmate. <b>学校</b> (xué xiào) = School.<br/>Chinese is not harder - just different. Each character is a small picture with a story.</>,
        zh: <>欢迎来到中文课！你会认识第一批 100 个字、第一批古诗。<br/><b>说：</b>你好（nǐ hǎo）= hello。<b>老师</b>（lǎo shī）= teacher。<b>同学</b>（tóng xué）= classmate。<b>学校</b>（xué xiào）= school。<br/>中文不更难，只是不一样。每个字都是一幅有故事的小画。</>,
      },
    },

    // ── 汉语拼音 1-13（每页：发音讲解 + 练读音节 + 书写提示 + 绕口令）──
    pinyinPage("a o e", ["a -> mā 妈妈", "o -> ó 哦", "e -> é 鹅"], "三个开口韵母。张大嘴发 a（像看医生啊），圆唇发 o（哦），嘴角向两边咧发 e（鹅）。三个音几乎出现在每个中文词里。", "a：左半圆，竖右弯。o：一笔圆。e：中格写横再左半圆。", "哥哥打鼓 gē ge dǎ gǔ"),
    pinyinPage("i u ü", ["i -> yī 一", "u -> wǔ 五", "ü -> yú 鱼"], "再三个韵母。i 齐齿（嘴角咧开），u 圆唇（像吹口哨），ü 先发 i 再把嘴唇往前突。ü 是英语里没有的音。", "i：竖加一点。u：先竖右弯再竖。ü：同 u 加两点。", "马虎 mǎ hu，拖拉机 tuō lā jī"),
    pinyinPage("b p m f", ["bà 爸", "pí 皮", "mā 妈", "fá 罚"], "双唇音。b 不送气（像收音机），p 送气（嘴前放纸会动），m 闭嘴鼻音，f 上齿咬下唇。", "b：右半圆竖。p：右半圆竖，竖出格。m：两个右半圆。f：左竖弯加点。", "八百标兵 bā bǎi biāo bīng"),
    pinyinPage("d t n l", ["dà 大", "tù 兔", "nǐ 你", "lǜ 绿"], "舌尖抵上齿龈。d 不送气，t 送气，n 鼻音（气流从鼻出），l 舌尖抵住从两边出气。", "d：左下半圆。t：竖右弯加横。n：右半圆竖。l：一竖带点。", "大头大头 dà tóu dà tóu"),
    pinyinPage("g k h", ["gē 哥", "kāi 开", "hǎo 好"], "舌根音。g 像鸽子咕咕，k 送气像咳嗽，h 呼气。", "g：左半圆竖左弯。k：左半圆竖左弯加左斜。h：左竖弯左斜。", "哥哥画虎 gē ge huà hǔ"),
    pinyinPage("j q x", ["jī 鸡", "qì 气", "xī 西"], "舌面音。j 紧贴不送气，q 紧贴送气，x 留缝擦。重要：j q x 后面跟 ü 要写成 u。", "j：左竖弯左斜加点。q：左半圆竖右弯。x：左斜右斜交叉。", "鸡吃米 jī chī mǐ"),
    pinyinPage("z c s", ["zì 字", "cǎi 彩", "sān 三"], "平舌音，舌尖抵齿背。z 不送气，c 送气，s 擦。", "z：左半圆横。c：左半圆。s：左半圆连弯。", "三思 sān sī，自私 zì sī"),
    pinyinPage("zh ch sh r", ["zhī 知", "chī 吃", "shī 师", "rì 日"], "翘舌音，舌尖翘起抵硬腭。zh ch sh 都是擦送气，r 是浊擦音（声带振动）。", "zh ch sh：在 z c s 后加 h。r：左竖弯带捺。", "四是四 shì shì shì"),
    pinyinPage("ai ei ui", ["ài 爱", "hěi 黑", "shuǐ 水"], "复韵母，两个音连读。ai 像爱，ei 像诶，ui 像威（实读 uei）。", "ai：先 a 后 i。ei：先 e 后 i。ui：先 u 后 i。", "白菜 bái cài，梅花 méi huā"),
    pinyinPage("ao ou iu", ["hǎo 好", "gǒu 狗", "liù 六"], "ao 像奥，ou 像欧，iu 像优（实读 iou）。", "ao：先 a 后 o。ou：先 o 后 u。iu：先 i 后 u。", "小猫 xiǎo māo，皮球 pí qiú"),
    pinyinPage("ie üe er", ["jié 节", "xuě 雪", "èr 二"], "ie 像耶，üe 像约，er 卷舌韵母，单独成音节（儿化音用它）。", "ie üe：前音后 e。er：e 加 r 卷舌。", "下雪 xià xuě，花儿 huā er"),
    pinyinPage("an en in un ün", ["sān 三", "rén 人", "jīn 金", "chūn 春", "yún 云"], "前鼻韵母，结尾舌尖抵上齿龈，气流从鼻出。", "前鼻音都以 n 结尾。", "蓝天 lán tiān，森林 sēn lín"),
    pinyinPage("ang eng ing ong", ["bāng 帮", "fēng 风", "xīng 星", "dōng 东"], "后鼻韵母，结尾舌根抵软腭，气流从鼻出，比前鼻音更沉。", "后鼻音都以 ng 结尾。", "帮助 bāng zhù，星星 xīng xing"),

    // ── 课文 1 秋天 ──
    lessonPage({
      zhTitle: "秋天", enTitle: "Autumn", pinyin: "qiū tiān",
      passage: [
        ["qiū", "秋"], ["tiān", "天"], ["qì", "气"], ["liáng", "凉"], ["le", "了"], ["，", "，"],
        ["shù", "树"], ["yè", "叶"], ["huáng", "黄"], ["le", "了"], ["，", "，"],
        ["yī", "一"], ["piàn", "片"], ["piàn", "片"], ["yè", "叶"], ["zi", "子"], ["cóng", "从"], ["shù", "树"], ["shàng", "上"], ["luò", "落"], ["xià", "下"], ["lái", "来"], ["。", "。"],
      ],
      note: "孩子最早读到的散文诗。「一片片」是叠词，让落叶有了节奏。大雁排成「人」字「一」字，是真实的自然现象，也是汉字最早的形状。",
      recognize: [
        { ch: "秋", py: "qiū", word: "秋天" }, { ch: "气", py: "qì", word: "天气" }, { ch: "树", py: "shù", word: "大树" },
        { ch: "叶", py: "yè", word: "树叶" }, { ch: "片", py: "piàn", word: "一片" }, { ch: "飞", py: "fēi", word: "飞鸟" },
        { ch: "会", py: "huì", word: "不会" }, { ch: "个", py: "gè", word: "一个" },
      ],
      write: [
        { ch: "了", py: "le", strokes: 2, radical: "乙", word: "来了" }, { ch: "子", py: "zi", strokes: 3, radical: "子", word: "叶子" },
        { ch: "人", py: "rén", strokes: 2, radical: "人", word: "人们" }, { ch: "大", py: "dà", strokes: 3, radical: "大", word: "大人" },
      ],
      practice: [
        "朗读课文，注意「一片片」要读出落叶一片接一片的感觉。",
        "背诵全文。",
        "「一会儿……一会儿……」造句。（例：云一会儿像狗，一会儿像山。）",
        "找一找课文里的叠词：一片片、黄黄。",
      ],
      think: "大雁为什么要往南飞？（提示：北方变冷，它们去温暖的地方过冬。）",
    }),

    // ── 课文 2 小小的船 ──
    lessonPage({
      zhTitle: "小小的船", enTitle: "The Small Boat", pinyin: "xiǎo xiǎo de chuán",
      passage: [
        ["wān", "弯"], ["wān", "弯"], ["de", "的"], ["yuè", "月"], ["er", "儿"], ["xiǎo", "小"], ["xiǎo", "小"], ["de", "的"], ["chuán", "船"], ["，", "，"],
        ["xiǎo", "小"], ["xiǎo", "小"], ["de", "的"], ["chuán", "船"], ["er", "儿"], ["liǎng", "两"], ["tóu", "头"], ["jiān", "尖"], ["。", "。"],
        ["wǒ", "我"], ["zài", "在"], ["xiǎo", "小"], ["xiǎo", "小"], ["de", "的"], ["chuán", "船"], ["lǐ", "里"], ["zuò", "坐"], ["，", "，"],
        ["zhǐ", "只"], ["kàn", "看"], ["jiàn", "见"], ["shǎn", "闪"], ["shǎn", "闪"], ["de", "的"], ["xīng", "星"], ["lán", "蓝"], ["lán", "蓝"], ["de", "的"], ["tiān", "天"], ["。", "。"],
      ],
      note: "叶圣陶写的儿歌。把弯月比作一只小船--这叫「比喻」。全诗没有一个生僻字，孩子能整首背下来。",
      recognize: [
        { ch: "船", py: "chuán", word: "小船" }, { ch: "弯", py: "wān", word: "弯弯" }, { ch: "尖", py: "jiān", word: "尖尖" },
        { ch: "坐", py: "zuò", word: "坐下" }, { ch: "看", py: "kàn", word: "看见" }, { ch: "星", py: "xīng", word: "星星" },
        { ch: "蓝", py: "lán", word: "蓝天" }, { ch: "只", py: "zhǐ", word: "只是" },
      ],
      write: [
        { ch: "月", py: "yuè", strokes: 4, radical: "月", word: "月亮" }, { ch: "头", py: "tóu", strokes: 5, radical: "大", word: "两头" },
        { ch: "里", py: "lǐ", strokes: 7, radical: "里", word: "里面" }, { ch: "可", py: "kě", strokes: 5, radical: "口", word: "可爱" },
      ],
      practice: [
        "朗读，读出叠词的轻柔（弯弯、小小、闪闪、蓝蓝）。",
        "背诵全诗。",
        "数一数诗里用了几次叠词？分别是什么？",
        "「弯弯的月儿」像什么？把月亮比作什么？（比喻）",
      ],
      think: "你抬头看过月亮吗？它有时弯有时圆，你更喜欢哪一个样子？为什么？",
    }),

    // ── 课文 3 江南 ──
    lessonPage({
      zhTitle: "江南", enTitle: "Jiangnan", pinyin: "jiāng nán",
      passage: [
        ["jiāng", "江"], ["nán", "南"], ["kě", "可"], ["cǎi", "采"], ["lián", "莲"], ["，", "，"],
        ["lián", "莲"], ["yè", "叶"], ["hé", "何"], ["tián", "田"], ["tián", "田"], ["。", "。"],
        ["yú", "鱼"], ["xì", "戏"], ["lián", "莲"], ["yè", "叶"], ["jiān", "间"], ["。", "。"],
        ["yú", "鱼"], ["xì", "戏"], ["lián", "莲"], ["yè", "叶"], ["dōng", "东"], ["，", "，"],
        ["yú", "鱼"], ["xì", "戏"], ["lián", "莲"], ["yè", "叶"], ["xī", "西"], ["，", "，"],
        ["yú", "鱼"], ["xì", "戏"], ["lián", "莲"], ["yè", "叶"], ["nán", "南"], ["，", "，"],
        ["yú", "鱼"], ["xì", "戏"], ["lián", "莲"], ["yè", "叶"], ["běi", "北"], ["。", "。"],
      ],
      note: "汉乐府，两千年前的民歌。「田田」形容莲叶茂盛。鱼在东西南北游--重复的句式像鱼真的在游，是民歌特有的节奏。",
      recognize: [
        { ch: "江", py: "jiāng", word: "江南" }, { ch: "南", py: "nán", word: "南方" }, { ch: "采", py: "cǎi", word: "采莲" },
        { ch: "莲", py: "lián", word: "莲花" }, { ch: "鱼", py: "yú", word: "小鱼" }, { ch: "北", py: "běi", word: "北方" },
        { ch: "东", py: "dōng", word: "东方" }, { ch: "西", py: "xī", word: "西方" },
      ],
      write: [
        { ch: "可", py: "kě", strokes: 5, radical: "口", word: "可以" }, { ch: "东", py: "dōng", strokes: 5, radical: "一", word: "东西" },
        { ch: "西", py: "xī", strokes: 6, radical: "襾", word: "西方" }, { ch: "北", py: "běi", strokes: 5, radical: "匕", word: "北方" },
      ],
      practice: [
        "朗读，注意「鱼戏莲叶东……」四句节奏相同，像鱼在游。",
        "背诵全诗。",
        "「田田」是什么意思？（莲叶茂盛的样子。）",
        "数一数「鱼戏莲叶」出现了几次？后面跟了几个方向？",
      ],
      think: "江南指长江以南的地方，水多、莲多。你家乡有水有莲吗？说说你见过的水。",
    }),

    // ── 课文 4 四季 ──
    lessonPage({
      zhTitle: "四季", enTitle: "Four Seasons", pinyin: "sì jì",
      passage: [
        ["cǎo", "草"], ["yá", "芽"], ["jiān", "尖"], ["jiān", "尖"], ["，", "，"], ["tā", "他"], ["duì", "对"], ["xiǎo", "小"], ["niǎo", "鸟"], ["shuō", "说"], ["：", "："], ["「", "「"], ["wǒ", "我"], ["shì", "是"], ["chūn", "春"], ["tiān", "天"], ["。", "。"], ["」", "」"],
        ["hé", "荷"], ["yè", "叶"], ["yuán", "圆"], ["yuán", "圆"], ["，", "，"], ["tā", "他"], ["duì", "对"], ["qīng", "青"], ["wā", "蛙"], ["shuō", "说"], ["：", "："], ["「", "「"], ["wǒ", "我"], ["shì", "是"], ["xià", "夏"], ["tiān", "天"], ["。", "。"], ["」", "」"],
        ["gǔ", "谷"], ["suì", "穗"], ["wān", "弯"], ["wān", "弯"], ["，", "，"], ["tā", "他"], ["jū", "鞠"], ["zhe", "着"], ["gōng", "躬"], ["shuō", "说"], ["：", "："], ["「", "「"], ["wǒ", "我"], ["shì", "是"], ["qiū", "秋"], ["tiān", "天"], ["。", "。"], ["」", "」"],
        ["xuě", "雪"], ["rén", "人"], ["dà", "大"], ["dù", "肚"], ["zi", "子"], ["yì", "一"], ["tǐng", "挺"], ["，", "，"], ["shuō", "说"], ["：", "："], ["「", "「"], ["wǒ", "我"], ["shì", "是"], ["dōng", "冬"], ["tiān", "天"], ["。", "。"], ["」", "」"],
      ],
      note: "一首童诗，每个季节选一个代表事物说话。注意四季的形状：尖、圆、弯、挺--四个动词四个画面。",
      recognize: [
        { ch: "春", py: "chūn", word: "春天" }, { ch: "夏", py: "xià", word: "夏天" }, { ch: "秋", py: "qiū", word: "秋天" },
        { ch: "冬", py: "dōng", word: "冬天" }, { ch: "草", py: "cǎo", word: "小草" }, { ch: "雪", py: "xuě", word: "下雪" },
        { ch: "说", py: "shuō", word: "说话" }, { ch: "圆", py: "yuán", word: "圆圆" },
      ],
      write: [
        { ch: "天", py: "tiān", strokes: 4, radical: "大", word: "春天" }, { ch: "四", py: "sì", strokes: 5, radical: "囗", word: "四季" },
        { ch: "是", py: "shì", strokes: 9, radical: "日", word: "是的" }, { ch: "对", py: "duì", strokes: 5, radical: "又", word: "对错" },
      ],
      practice: [
        "朗读，每个季节读出不同语气：春天活泼、夏天热闹、秋天谦逊、冬天调皮。",
        "背诵全诗。",
        "四季分别用什么代表？什么形状？（尖、圆、弯、挺）",
        "仿写一句「××的××，他对×说：我是×天。」",
      ],
      think: "你最喜欢哪个季节？选一个，说一个它代表性的东西。",
    }),

    // ── 语文园地一 ──
    {
      kind: "garden", title: { en: "Language Garden 1", zh: "语文园地 一" },
      body: {
        en: <><b>识字加油站：</b> 人 口 手 目 耳 足--六字都是身体，也都是象形字。画一画它们古时的样子，就记住了。<br/><br/><b>字词句运用：</b> 比一比「人」和「入」、「大」和「天」。差一笔，意思全不同。<br/><br/><b>书写提示：</b> 笔顺「从上到下，先横后竖」。写「十」：先横后竖。<br/><br/><b>日积月累：</b> 一去二三里，烟村四五家。亭台六七座，八九十枝花。<br/><br/><b>和大人一起读：</b> 《小松鼠找花生》--大人读一段，你读认识的字。</>,
        zh: <><b>识字加油站：</b> 人 口 手 目 耳 足--六字都是身体，也都是象形字。画一画它们古时的样子，就记住了。<br/><br/><b>字词句运用：</b> 比一比「人」和「入」、「大」和「天」。差一笔，意思全不同。<br/><br/><b>书写提示：</b> 笔顺「从上到下，先横后竖」。写「十」：先横后竖。<br/><br/><b>日积月累：</b> 一去二三里，烟村四五家。亭台六七座，八九十枝花。<br/><br/><b>和大人一起读：</b>《小松鼠找花生》--大人读一段，你读认识的字。</>,
      },
    },

    // ── 课文 5 画 ──
    lessonPage({
      zhTitle: "画", enTitle: "A Painting", pinyin: "huà",
      passage: [
        ["yuǎn", "远"], ["kàn", "看"], ["shān", "山"], ["yǒu", "有"], ["sè", "色"], ["，", "，"],
        ["jìn", "近"], ["tīng", "听"], ["shuǐ", "水"], ["wú", "无"], ["shēng", "声"], ["。", "。"],
        ["chūn", "春"], ["qù", "去"], ["huā", "花"], ["hái", "还"], ["zài", "在"], ["，", "，"],
        ["rén", "人"], ["lái", "来"], ["niǎo", "鸟"], ["bù", "不"], ["jīng", "惊"], ["。", "。"],
      ],
      note: "一首谜语诗，谜底是「画」。画里的山有色、画里的水无声、画里的花不谢、画里的鸟不怕人--四句都是反常，因为这是画不是真。",
      recognize: [
        { ch: "远", py: "yuǎn", word: "远处" }, { ch: "色", py: "sè", word: "颜色" }, { ch: "近", py: "jìn", word: "近处" },
        { ch: "声", py: "shēng", word: "声音" }, { ch: "惊", py: "jīng", word: "惊动" }, { ch: "无", py: "wú", word: "没有" },
        { ch: "来", py: "lái", word: "过来" }, { ch: "还", py: "hái", word: "还在" },
      ],
      write: [
        { ch: "人", py: "rén", strokes: 2, radical: "人", word: "人们" }, { ch: "来", py: "lái", strokes: 7, radical: "木", word: "过来" },
        { ch: "去", py: "qù", strokes: 5, radical: "厶", word: "过去" }, { ch: "水", py: "shuǐ", strokes: 4, radical: "水", word: "流水" },
      ],
      practice: [
        "朗读，读出反常的语气（远看有色？近听无声？）。",
        "背诵全诗。",
        "这首诗的谜底是什么？为什么？（画。）",
        "找反义词：远-近、有-无、来-去。",
      ],
      think: "为什么画里的水没有声音？画里的花为什么不会谢？",
    }),

    // ── 课文 6 大小多少 ──
    lessonPage({
      zhTitle: "大小多少", enTitle: "Big, Small, More, Less", pinyin: "dà xiǎo duō shǎo",
      passage: [
        ["yī", "一"], ["gè", "个"], ["dà", "大"], ["，", "，"], ["yī", "一"], ["gè", "个"], ["xiǎo", "小"], ["，", "，"], ["yī", "一"], ["zhī", "只"], ["huáng", "黄"], ["niú", "牛"], ["yī", "一"], ["zhī", "只"], ["māo", "猫"], ["。", "。"],
        ["yī", "一"], ["biān", "边"], ["duō", "多"], ["，", "，"], ["yī", "一"], ["biān", "边"], ["shǎo", "少"], ["，", "，"], ["yī", "一"], ["qún", "群"], ["yā", "鸭"], ["zi", "子"], ["yī", "一"], ["zhī", "只"], ["niǎo", "鸟"], ["。", "。"],
        ["yī", "一"], ["gè", "个"], ["dà", "大"], ["，", "，"], ["yī", "一"], ["gè", "个"], ["xiǎo", "小"], ["，", "，"], ["yī", "一"], ["gè", "个"], ["píng", "苹"], ["guǒ", "果"], ["yī", "一"], ["kē", "颗"], ["zǎo", "枣"], ["。", "。"],
        ["yī", "一"], ["biān", "边"], ["duō", "多"], ["，", "，"], ["yī", "一"], ["biān", "边"], ["shǎo", "少"], ["，", "，"], ["yī", "一"], ["duī", "堆"], ["xìng", "杏"], ["zi", "子"], ["yī", "一"], ["gè", "个"], ["táo", "桃"], ["。", "。"],
      ],
      note: "儿歌，专门练「量词」。注意：一只（动物）、一个（苹果）、一颗（小而圆）、一堆（许多）。不同东西用不同量词，是中文的特点。",
      recognize: [
        { ch: "多", py: "duō", word: "多少" }, { ch: "少", py: "shǎo", word: "很少" }, { ch: "只", py: "zhī", word: "一只" },
        { ch: "颗", py: "kē", word: "一颗" }, { ch: "堆", py: "duī", word: "一堆" }, { ch: "苹", py: "píng", word: "苹果" },
        { ch: "杏", py: "xìng", word: "杏子" }, { ch: "桃", py: "táo", word: "桃子" },
      ],
      write: [
        { ch: "小", py: "xiǎo", strokes: 3, radical: "小", word: "大小" }, { ch: "少", py: "shǎo", strokes: 4, radical: "小", word: "多少" },
        { ch: "牛", py: "niú", strokes: 4, radical: "牛", word: "黄牛" }, { ch: "果", py: "guǒ", strokes: 8, radical: "木", word: "苹果" },
      ],
      practice: [
        "朗读，注意量词：一只、一个、一颗、一堆。",
        "背诵前两段。",
        "填空：一（ ）牛，一（ ）苹果，一（ ）枣，一（ ）杏子。",
        "找一找：哪些是动物？哪些是水果？",
      ],
      think: "为什么鸭子用「一群」？群和只、个有什么不一样？",
    }),

    // ── 课文 7 小书包 ──
    lessonPage({
      zhTitle: "小书包", enTitle: "My Little Schoolbag", pinyin: "xiǎo shū bāo",
      passage: [
        ["wǒ", "我"], ["de", "的"], ["xiǎo", "小"], ["shū", "书"], ["bāo", "包"], ["，", "，"], ["bǎo", "宝"], ["bèi", "贝"], ["zhēn", "真"], ["bù", "不"], ["shǎo", "少"], ["。", "。"],
        ["qiān", "铅"], ["bǐ", "笔"], ["xiàng", "橡"], ["pí", "皮"], ["zhuǎn", "转"], ["bǐ", "笔"], ["dāo", "刀"], ["，", "，"],
        ["zuò", "作"], ["yè", "业"], ["běn", "本"], ["，", "，"], ["liàn", "练"], ["xí", "习"], ["cè", "册"], ["，", "，"],
        ["tiān", "天"], ["tiān", "天"], ["shàng", "上"], ["xué", "学"], ["dài", "带"], ["zhe", "着"], ["wǒ", "我"], ["，", "，"],
        ["xué", "学"], ["xí", "习"], ["xiě", "写"], ["zì", "字"], ["shǎo", "少"], ["bù", "不"], ["liǎo", "了"], ["。", "。"],
      ],
      note: "一首生活儿歌，把文具拟人化：「天天上学带着我」。学这首诗顺便认识文具的词。",
      recognize: [
        { ch: "书", py: "shū", word: "书包" }, { ch: "包", py: "bāo", word: "书包" }, { ch: "笔", py: "bǐ", word: "铅笔" },
        { ch: "刀", py: "dāo", word: "小刀" }, { ch: "本", py: "běn", word: "本子" }, { ch: "学", py: "xué", word: "上学" },
        { ch: "早", py: "zǎo", word: "早上" }, { ch: "校", py: "xiào", word: "学校" },
      ],
      write: [
        { ch: "书", py: "shū", strokes: 4, radical: "乙", word: "书本" }, { ch: "本", py: "běn", strokes: 5, radical: "木", word: "本子" },
        { ch: "早", py: "zǎo", strokes: 6, radical: "日", word: "早上" }, { ch: "刀", py: "dāo", strokes: 2, radical: "刀", word: "小刀" },
      ],
      practice: [
        "朗读，读出对书包的喜爱。",
        "说一说你的书包里都有什么？（铅笔、橡皮、本子……）",
        "「带着我」是谁带着谁？这是什么修辞？（拟人。）",
        "「学」字几画？书空一遍笔顺。",
      ],
      think: "书包每天陪着你上学，你要怎么爱惜它和里面的文具？",
    }),

    // ── 课文 8 日月明 ──
    lessonPage({
      zhTitle: "日月明", enTitle: "Sun, Moon, Bright", pinyin: "rì yuè míng",
      passage: [
        ["rì", "日"], ["yuè", "月"], ["míng", "明"], ["，", "，"], ["tián", "田"], ["lì", "力"], ["nán", "男"], ["。", "。"],
        ["xiǎo", "小"], ["dà", "大"], ["jiān", "尖"], ["，", "，"], ["xiǎo", "小"], ["tǔ", "土"], ["chén", "尘"], ["。", "。"],
        ["èr", "二"], ["rén", "人"], ["cóng", "从"], ["，", "，"], ["sān", "三"], ["rén", "人"], ["zhòng", "众"], ["。", "。"],
        ["shuāng", "双"], ["mù", "木"], ["lín", "林"], ["，", "，"], ["sān", "三"], ["mù", "木"], ["sēn", "森"], ["。", "。"],
      ],
      note: "一首讲「会意字」的诗--两个字合在一起变成新字。日+月=明，田+力=男，小+大=尖，小+土=尘。这就是汉字的「组装」之法。",
      recognize: [
        { ch: "明", py: "míng", word: "明白" }, { ch: "男", py: "nán", word: "男生" }, { ch: "尖", py: "jiān", word: "尖尖" },
        { ch: "尘", py: "chén", word: "灰尘" }, { ch: "从", py: "cóng", word: "从前" }, { ch: "众", py: "zhòng", word: "群众" },
        { ch: "林", py: "lín", word: "树林" }, { ch: "森", py: "sēn", word: "森林" },
      ],
      write: [
        { ch: "木", py: "mù", strokes: 4, radical: "木", word: "树木" }, { ch: "林", py: "lín", strokes: 8, radical: "木", word: "树林" },
        { ch: "土", py: "tǔ", strokes: 3, radical: "土", word: "泥土" }, { ch: "力", py: "lì", strokes: 2, radical: "力", word: "力气" },
      ],
      practice: [
        "朗读，注意每个新字都是两个字合起来的。",
        "背诵全诗。",
        "说一说：日+月=？田+力=？小+大=？小+土=？",
        "猜一猜：人+木=？（休，人靠树休息。）",
      ],
      think: "汉字像积木，可以拼。你还能想到哪些「拼」出来的字？",
    }),

    // ── 语文园地二 ──
    {
      kind: "garden", title: { en: "Language Garden 2", zh: "语文园地 二" },
      body: {
        en: <><b>识字加油站：</b> 一→十、百、千、万。数字越拼越大。<br/><br/><b>我的发现：</b> 「明、男、林、森」都是两个字合起来的「会意字」。再找一个：休=人+木。<br/><br/><b>字词句运用：</b> 把这册学过的字读给家人听，错一个重学一个。<br/><br/><b>日积月累：</b> 咏鹅--鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。<br/><br/><b>和大人一起读：</b>《小白兔和小灰兔》--说说两只兔子哪里不一样。</>,
        zh: <><b>识字加油站：</b> 一→十、百、千、万。数字越拼越大。<br/><br/><b>我的发现：</b>「明、男、林、森」都是两个字合起来的「会意字」。再找一个：休=人+木。<br/><br/><b>字词句运用：</b> 把这册学过的字读给家人听，错一个重学一个。<br/><br/><b>日积月累：</b> 咏鹅--鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。<br/><br/><b>和大人一起读：</b>《小白兔和小灰兔》--说说两只兔子哪里不一样。</>,
      },
    },

    // ── 口语交际 ──
    {
      kind: "speaking", title: { en: "Speaking: Make Friends", zh: "口语交际 · 我们做朋友" },
      body: {
        en: <><b>Task:</b> Find a classmate. Say: 你好，我叫……，我们做朋友吧。 Listen to their name and repeat it. A real friendship starts with hearing someone's name right.<br/><br/><b>Tips:</b> Look at their eyes. Speak clearly. Smile. If they don't hear, say it again slowly - that is not failing, that is caring.<br/><br/>Remember: in Chinese, say the family name first if you know it.</>,
        zh: <><b>任务：</b> 找一个同学，说：你好，我叫……，我们做朋友吧。 听对方的姓名并复述一遍。真正的友谊，从把对方的名字听对开始。<br/><br/><b>小贴士：</b> 看着对方的眼睛，说清楚，微笑。对方没听清，再慢慢说一遍--这不是失败，这是在乎。<br/><br/>记住：知道对方姓的话，中文里先说姓。</>,
      },
    },

    // ── 快乐读书吧 ──
    {
      kind: "reading", title: { en: "Reading Club", zh: "快乐读书吧 · 读书真快乐" },
      body: {
        en: <><b>Read together:</b> Any picture book in Chinese. Even if you only know a few characters, find them on the page and read them aloud. Reading is not waiting until you know every word - it is enjoying the words you already know.<br/><br/><b>After reading, tell someone:</b><br/>1. One character you found.<br/>2. One picture you liked.<br/>3. One thing that happened in the story.<br/><br/>Books are friends that never get tired of you.</>,
        zh: <><b>一起读：</b> 任何一本中文图画书。哪怕只认识几个字，在书页上把它们找出来大声读。读书不是等认识所有字才读--是享受你已经认识的字。<br/><br/><b>读完告诉一个人：</b><br/>1. 你找到的一个字。<br/>2. 你喜欢的一幅画。<br/>3. 故事里发生的一件事。<br/><br/>书是永远不会嫌你的朋友。</>,
      },
    },

    // ── 生字表（会认）──
    {
      kind: "vocablist", title: { en: "Characters to Read", zh: "生字表（会认）" },
      body: {
        en: <>100 characters to <b>recognize</b> by the end of this book. Read aloud one by one:<br/><br/>一 二 三 四 五 六 七 八 九 十<br/>人 口 手 目 耳 足<br/>日 月 水 火 山 石 田 禾<br/>上 下 大 小 多 少 半<br/>天 地 花 鸟 鱼 虫 草 木 林 森<br/>你好 我 他 她 老师 同学 学校<br/>春夏秋冬 风 云 雨 雪<br/>书 包 笔 本 刀 学 早 校<br/>明 男 尖 尘 从 众 休<br/>远 近 色 声 惊 无 来<br/>船 弯 坐 看 星 蓝 只<br/>江南 采 莲 东西 北<br/>苹果 枣 杏 桃 鸭 猫 牛 鸟 青蛙<br/>谷穗 雪人 挺 鞠躬 圆</>,
        zh: <>这 100 个字，读完这本书要<b>会认</b>。一个一个大声读：<br/><br/>一 二 三 四 五 六 七 八 九 十<br/>人 口 手 目 耳 足<br/>日 月 水 火 山 石 田 禾<br/>上 下 大 小 多 少 半<br/>天 地 花 鸟 鱼 虫 草 木 林 森<br/>你好 我 他 她 老师 同学 学校<br/>春夏秋冬 风 云 雨 雪<br/>书 包 笔 本 刀 学 早 校<br/>明 男 尖 尘 从 众 休<br/>远 近 色 声 惊 无 来<br/>船 弯 坐 看 星 蓝 只<br/>江南 采 莲 东西 北<br/>苹果 枣 杏 桃 鸭 猫 牛 鸟 青蛙<br/>谷穗 雪人 挺 鞠躬 圆</>,
      },
    },
    {
      kind: "vocablist", title: { en: "Characters to Write", zh: "生字表（会写）" },
      body: {
        en: <>These you should <b>write</b> from memory. Practice stroke by stroke:<br/><br/>一 二 三 十 禾 木 土 力<br/>上 下 大 小 多 少<br/>日月水火山石田<br/>人口手足目耳<br/>你好我他她<br/>春夏秋冬<br/>书包笔本刀学早校<br/>明男尖尘从众林森<br/>来了 子 人们 大人 月头里可<br/>东西南北 天四是对<br/>人去来水 小少牛果 书本早刀 木林土力</>,
        zh: <>这些要<b>会写</b>，一笔一笔练：<br/><br/>一 二 三 十 禾 木 土 力<br/>上 下 大 小 多 少<br/>日月水火山石田<br/>人口手足目耳<br/>你好我他她<br/>春夏秋冬<br/>书包笔本刀学早校<br/>明男尖尘从众林森<br/>来了 子 人们 大人 月头里可<br/>东西南北 天四是对<br/>人去来水 小少牛果 书本早刀 木林土力</>,
      },
    },
    {
      kind: "vocablist", title: { en: "Word List", zh: "词语表" },
      body: {
        en: <>Two-character words you now know:<br/><br/>你好 / 老师 / 同学 / 学校<br/>春天 / 夏天 / 秋天 / 冬天<br/>大山 / 小河 / 白云 / 下雨<br/>读书 / 写字 / 作业 / 本子<br/>朋友 / 家人 / 我们 / 他们<br/>大雁 / 小鸟 / 鱼儿 / 青蛙<br/>荷花 / 草芽 / 谷穗 / 雪人<br/>苹果 / 枣 / 杏 / 桃<br/>明白 / 男生 / 树林 / 森林</>,
        zh: <>你已经会的两字词：<br/><br/>你好 / 老师 / 同学 / 学校<br/>春天 / 夏天 / 秋天 / 冬天<br/>大山 / 小河 / 白云 / 下雨<br/>读书 / 写字 / 作业 / 本子<br/>朋友 / 家人 / 我们 / 他们<br/>大雁 / 小鸟 / 鱼儿 / 青蛙<br/>荷花 / 草芽 / 谷穗 / 雪人<br/>苹果 / 枣 / 杏 / 桃<br/>明白 / 男生 / 树林 / 森林</>,
      },
    },
    {
      kind: "back", title: { en: "Afterword", zh: "后记" },
      body: {
        en: <>You finished your first Chinese book. You can now read about a hundred characters and recite four poems. The next book goes further - but you have already done the hardest thing: you started. Grade 1 Book Two continues from here.</>,
        zh: <>你读完了第一本中文书。你现在能认约一百个字、会背四首诗。下一本会走得更远--但你已经做了最难的事：你开始了。一年级 · 下册 从这里继续。</>,
      },
    },
  ],
};

// ── 页面构造辅助 ──
function pinyinPage(title: string, words: string[], teach: string, stroke: string, tongue: string) {
  return {
    kind: "lesson" as const,
    title: { en: `Pinyin: ${title}`, zh: `汉语拼音：${title}` },
    body: {
      en: <>
        <p className="text-base leading-relaxed text-ink/80">{teach}</p>
        <div className="mt-4 rounded-lg bg-[#b3121f]/5 p-4">
          <p className="mb-2 font-bold text-[#b3121f]">读一读</p>
          <p className="font-serif-sc text-2xl tracking-wider">{words.join("   ")}</p>
        </div>
        <div className="mt-4 rounded-lg bg-teal/5 p-4">
          <p className="mb-2 font-bold text-teal">书写提示</p>
          <p className="text-sm text-ink/80">{stroke}</p>
        </div>
        <div className="mt-4 rounded-lg bg-amber-50/60 p-4">
          <p className="mb-2 font-bold text-amber-700">练口令</p>
          <p className="font-serif-sc text-lg">{tongue}</p>
        </div>
      </>,
      zh: <>
        <p className="text-base leading-relaxed text-ink/80">{teach}</p>
        <div className="mt-4 rounded-lg bg-[#b3121f]/5 p-4">
          <p className="mb-2 font-bold text-[#b3121f]">读一读</p>
          <p className="font-serif-sc text-2xl tracking-wider">{words.join("   ")}</p>
        </div>
        <div className="mt-4 rounded-lg bg-teal/5 p-4">
          <p className="mb-2 font-bold text-teal">书写提示</p>
          <p className="text-sm text-ink/80">{stroke}</p>
        </div>
        <div className="mt-4 rounded-lg bg-amber-50/60 p-4">
          <p className="mb-2 font-bold text-amber-700">绕口令</p>
          <p className="font-serif-sc text-lg">{tongue}</p>
        </div>
      </>,
    },
  };
}

function lessonPage(opts: {
  zhTitle: string; enTitle: string; pinyin: string;
  passage: [string, string][];
  note: string;
  recognize: { ch: string; py: string; word: string }[];
  write: { ch: string; py: string; strokes: number; radical: string; word: string }[];
  practice: string[];
  think: string;
}) {
  return {
    kind: "lesson" as const,
    title: { en: opts.enTitle, zh: opts.zhTitle },
    body: {
      en: <>
        <Passage pairs={opts.passage} />
        <p className="mt-2 text-xs text-ink-light/60">{opts.pinyin}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70"><b>讲一讲：</b>{opts.note}</p>
        <Recognize rows={opts.recognize} />
        <Write rows={opts.write} />
        <Practice items={opts.practice} />
        <p className="mt-4 rounded-lg bg-amber-50/60 p-3 text-sm text-ink/80"><b>思考：</b>{opts.think}</p>
      </>,
      zh: <>
        <Passage pairs={opts.passage} />
        <p className="mt-2 text-xs text-ink-light/60">{opts.pinyin}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70"><b>讲一讲：</b>{opts.note}</p>
        <Recognize rows={opts.recognize} />
        <Write rows={opts.write} />
        <Practice items={opts.practice} />
        <p className="mt-4 rounded-lg bg-amber-50/60 p-3 text-sm text-ink/80"><b>思考：</b>{opts.think}</p>
      </>,
    },
  };
}
