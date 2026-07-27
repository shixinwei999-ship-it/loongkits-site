import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { levels } from "@/lib/levels";
import { LessonPage } from "@/components/LessonPage";
import { ToneCards } from "@/components/ToneCards";
import { InitialGrid } from "@/components/InitialGrid";
import { FinalGrid } from "@/components/FinalGrid";
import { BlendRows } from "@/components/BlendRows";
import { WordChip } from "@/components/Speak";
import { firstWords } from "@/lib/chineseCurriculum";
import { radicals, strokes, firstChars } from "@/lib/chineseCurriculum";
import { SpeakButton } from "@/components/Speak";
import { SentenceScene, type Scene } from "@/components/SentenceScene";
import { ReadingPassage, type Passage } from "@/components/ReadingPassage";

const familyScene: Scene = {
  scenario: {
    en: "You meet a new friend at school and introduce your family.",
    zh: "你在学校认识了一个新朋友，并向他们介绍你的家人。",
  },
  lines: {
    en: [
      { chars: ["你", "好"], pinyin: "nǐ hǎo", en: { en: "Hello!", zh: "你好！" }, speaker: "you" },
      { chars: ["你", "好"], pinyin: "nǐ hǎo", en: { en: "Hello!", zh: "你好！" }, speaker: "them" },
      { chars: ["谢", "谢"], pinyin: "xiè xie", en: { en: "Thanks!", zh: "谢谢！" }, speaker: "you" },
      { chars: ["这", "是", "妈", "妈"], pinyin: "zhè shì mā ma", en: { en: "This is mum.", zh: "这是妈妈。" }, speaker: "narrator" },
      { chars: ["这", "是", "爸", "爸"], pinyin: "zhè shì bà ba", en: { en: "This is dad.", zh: "这是爸爸。" }, speaker: "narrator" },
      { chars: ["我", "是", "朋", "友"], pinyin: "wǒ shì péng yǒu", en: { en: "I am a friend.", zh: "我是一个朋友。" }, speaker: "you" },
      { chars: ["再", "见"], pinyin: "zài jiàn", en: { en: "Goodbye!", zh: "再见！" }, speaker: "you" },
    ],
    zh: [
      { chars: ["你", "好"], pinyin: "nǐ hǎo", en: { en: "Hello!", zh: "你好！" }, speaker: "you" },
      { chars: ["你", "好"], pinyin: "nǐ hǎo", en: { en: "Hello!", zh: "你好！" }, speaker: "them" },
      { chars: ["谢", "谢"], pinyin: "xiè xie", en: { en: "Thanks!", zh: "谢谢！" }, speaker: "you" },
      { chars: ["这", "是", "妈", "妈"], pinyin: "zhè shì mā ma", en: { en: "This is mum.", zh: "这是妈妈。" }, speaker: "narrator" },
      { chars: ["这", "是", "爸", "爸"], pinyin: "zhè shì bà ba", en: { en: "This is dad.", zh: "这是爸爸。" }, speaker: "narrator" },
      { chars: ["我", "是", "朋", "友"], pinyin: "wǒ shì péng yǒu", en: { en: "I am a friend.", zh: "我是一个朋友。" }, speaker: "you" },
      { chars: ["再", "见"], pinyin: "zài jiàn", en: { en: "Goodbye!", zh: "再见！" }, speaker: "you" },
    ],
  },
  hint: {
    en: "Tap any character to hear it. Try the whole conversation with a friend.",
    zh: "点任一字听发音。跟朋友试试整段对话。",
  },
};

const timeScene: Scene = {
  scenario: {
    en: "It's afternoon. You and a friend count things you see.",
    zh: "下午，你和朋友一起数你们看到的东西。",
  },
  lines: {
    en: [
      { chars: ["现", "在", "几", "点"], pinyin: "xiàn zài jǐ diǎn", en: { en: "What time is it?", zh: "现在几点了？" }, speaker: "you" },
      { chars: ["三", "点"], pinyin: "sān diǎn", en: { en: "Three o'clock.", zh: "三点。" }, speaker: "them" },
      { chars: ["我", "有", "一", "个", "家"], pinyin: "wǒ yǒu yí gè jiā", en: { en: "I have a home.", zh: "我有一个家。" }, speaker: "you" },
      { chars: ["我", "有", "三", "个"], pinyin: "wǒ yǒu sān gè", en: { en: "I have three.", zh: "我有三个。" }, speaker: "them" },
      { chars: ["好", "大"], pinyin: "hǎo dà", en: { en: "So big!", zh: "好大！" }, speaker: "you" },
    ],
    zh: [
      { chars: ["现", "在", "几", "点"], pinyin: "xiàn zài jǐ diǎn", en: { en: "What time is it?", zh: "现在几点了？" }, speaker: "you" },
      { chars: ["三", "点"], pinyin: "sān diǎn", en: { en: "Three o'clock.", zh: "三点。" }, speaker: "them" },
      { chars: ["我", "有", "一", "个", "家"], pinyin: "wǒ yǒu yí gè jiā", en: { en: "I have a home.", zh: "我有一个家。" }, speaker: "you" },
      { chars: ["我", "有", "三", "个"], pinyin: "wǒ yǒu sān gè", en: { en: "I have three.", zh: "我有三个。" }, speaker: "them" },
      { chars: ["好", "大"], pinyin: "hǎo dà", en: { en: "So big!", zh: "好大！" }, speaker: "you" },
    ],
  },
  hint: {
    en: "Tap each character. Try counting things you see around you.",
    zh: "点每一字听发音。试试数一数你周围的东西。",
  },
};

const shopScene: Scene = {
  scenario: {
    en: "You go to a shop to buy a drink.",
    zh: "你去商店买一瓶喝的。",
  },
  lines: {
    en: [
      { chars: ["你", "好"], pinyin: "nǐ hǎo", en: { en: "Hello!", zh: "你好！" }, speaker: "you" },
      { chars: ["你", "要", "什", "么"], pinyin: "nǐ yào shén me", en: { en: "What do you want?", zh: "你要什么？" }, speaker: "them" },
      { chars: ["我", "要", "水"], pinyin: "wǒ yào shuǐ", en: { en: "I want water.", zh: "我要水。" }, speaker: "you" },
      { chars: ["三", "块", "钱"], pinyin: "sān kuài qián", en: { en: "Three yuan.", zh: "三块钱。" }, speaker: "them" },
      { chars: ["好"], pinyin: "hǎo", en: { en: "OK!", zh: "好！" }, speaker: "you" },
    ],
    zh: [
      { chars: ["你", "好"], pinyin: "nǐ hǎo", en: { en: "Hello!", zh: "你好！" }, speaker: "you" },
      { chars: ["你", "要", "什", "么"], pinyin: "nǐ yào shén me", en: { en: "What do you want?", zh: "你要什么？" }, speaker: "them" },
      { chars: ["我", "要", "水"], pinyin: "wǒ yào shuǐ", en: { en: "I want water.", zh: "我要水。" }, speaker: "you" },
      { chars: ["三", "块", "钱"], pinyin: "sān kuài qián", en: { en: "Three yuan.", zh: "三块钱。" }, speaker: "them" },
      { chars: ["好"], pinyin: "hǎo", en: { en: "OK!", zh: "好！" }, speaker: "you" },
    ],
  },
  hint: {
    en: "Tap each character. Try the whole shop visit with a friend.",
    zh: "点每一字听发音。跟朋友试试整段购物。",
  },
};

const passages: Record<string, Passage> = {
  "4-1": { title: { en: "My little home", zh: "我的小家" }, intro: { en: "Look at this scene. Can you describe it?", zh: "看这个场景。你能描述吗？" }, sentences: [ { zh: "我有一个家。", en: "I have a home.", pinyin: "wǒ yǒu yí gè jiā." }, { zh: "家里有妈妈和爸爸。", en: "At home there is mum and dad.", pinyin: "jiā lǐ yǒu mā ma hé bà ba." }, { zh: "家里还有小黄。", en: "At home there is also Xiao Huang.", pinyin: "jiā lǐ hái yǒu xiǎo huáng." }, { zh: "我爱我的家。", en: "I love my home.", pinyin: "wǒ ài wǒ de jiā." } ] },
  "4-2": { title: { en: "A small diary", zh: "今天的小日记" }, intro: { en: "Read this diary entry. What did I do?", zh: "读这篇日记。今天我做了什么？" }, sentences: [ { zh: "今天天气好。", en: "Today the weather is good.", pinyin: "jīn tiān tiān qì hǎo." }, { zh: "我和妈妈去公园。", en: "I went to the park with mum.", pinyin: "wǒ hé mā ma qù gōng yuán." }, { zh: "公园里有花。", en: "There are flowers in the park.", pinyin: "gōng yuán lǐ yǒu huā." }, { zh: "我们回家吃饭。", en: "We went home to eat.", pinyin: "wǒ men huí jiā chī fàn." } ] },
  "4-3": { title: { en: "A note from a friend", zh: "朋友的短信" }, intro: { en: "Read this note. What are we doing?", zh: "读这封信。我们做什么？" }, sentences: [ { zh: "你好！好久不见。", en: "Hello! Long time no see.", pinyin: "nǐ hǎo! hǎo jiǔ bú jiàn." }, { zh: "今天我想吃饺子。", en: "Today I want to eat dumplings.", pinyin: "jīn tiān wǒ xiǎng chī jiǎo zi." }, { zh: "我们去饭馆吧。", en: "Let's go to a restaurant.", pinyin: "wǒ men qù fàn guǎn ba." }, { zh: "下午三点见。", en: "See you at 3 p.m.", pinyin: "xià wǔ sān diǎn jiàn." } ] },
  "5-1": { title: { en: "The story of Nian", zh: "年的故事" }, intro: { en: "An old Chinese story. How did the monster get its name?", zh: "一个古老的中国故事。怪兽为什么叫年？" }, sentences: [ { zh: "很久以前, 有一个怪物, 叫年。", en: "Long ago, there was a monster called Nian.", pinyin: "hěn jiǔ yǐ qián, yǒu yí gè guài wù, jiào nián." }, { zh: "冬天, 年来吃人和动物。", en: "In winter, Nian came to eat people and animals.", pinyin: "dōng tiān, nián lái chī rén hé dòng wù." }, { zh: "年怕红色, 也怕响声。", en: "Nian was afraid of red, and of loud sounds.", pinyin: "nián pà hóng sè, yě pà xiǎng shēng." }, { zh: "人们穿红衣, 放鞭炮。", en: "People wore red clothes, set off firecrackers.", pinyin: "rén men chuān hóng yī, fàng biān pào." }, { zh: "从那以后, 年不再来了。", en: "From then on, Nian never came again.", pinyin: "cóng nà yǐ hòu, nián bú zài lái le." } ] },
  "5-2": { title: { en: "Spring Festival", zh: "春节" }, intro: { en: "What happens at Spring Festival?", zh: "春节时大家做什么？" }, sentences: [ { zh: "春节是春天。", en: "Spring Festival is in spring.", pinyin: "chūn jié shì chūn tiān." }, { zh: "春节是新年。", en: "Spring Festival is the new year.", pinyin: "chūn jié shì xīn nián." }, { zh: "人们贴春联, 吃饺子。", en: "People put up spring couplets and eat dumplings.", pinyin: "rén men tiē chūn lián, chī jiǎo zi." }, { zh: "春节好!", en: "Happy New Year!", pinyin: "chūn jié hǎo!" } ] },
  "5-3": { title: { en: "The zodiac story", zh: "生肖的故事" }, intro: { en: "Why is the rat first in the zodiac?", zh: "为什么鼠是十二生肖的第一位？" }, sentences: [ { zh: "皇帝选了十二个动物。", en: "The emperor chose twelve animals.", pinyin: "huáng dì xuǎn le shí èr gè dòng wù." }, { zh: "牛先到, 鼠骑在牛背上。", en: "The ox arrived first; the rat rode on the ox's back.", pinyin: "niú xiān dào, shǔ qí zài niú bèi shàng." }, { zh: "鼠先跳下来。", en: "The rat jumped down first.", pinyin: "shǔ xiān tiào xià lái." }, { zh: "所以鼠排第一。", en: "So the rat is first.", pinyin: "suǒ yǐ shǔ pái dì yī." } ] },
  "6-1": { title: { en: "Because, so, but", zh: "因为 / 所以 / 但是" }, intro: { en: "Notice the connectors - they explain why.", zh: "注意连接词--它们解释了为什么。" }, sentences: [ { zh: "因为下雨, 我们在家。", en: "Because it's raining, we stay home.", pinyin: "yīn wèi xià yǔ, wǒ men zài jiā." }, { zh: "他很累, 所以他睡觉。", en: "He's tired, so he sleeps.", pinyin: "tā hěn lèi, suǒ yǐ tā shuì jiào." }, { zh: "他喜欢猫, 但是他不养。", en: "He likes cats, but he doesn't have one.", pinyin: "tā xǐ huān māo, dàn shì tā bù yǎng." } ] },
  "6-2": { title: { en: "Compare two things", zh: "比较两件事" }, intro: { en: "What is the same? What is different?", zh: "哪里一样？哪里不同？" }, sentences: [ { zh: "中国春节有红包, 美国圣诞节有礼物。", en: "Chinese New Year has red envelopes; American Christmas has gifts.", pinyin: "zhōng guó chūn jié yǒu hóng bāo, měi guó shèng dàn jié yǒu lǐ wù." }, { zh: "中国人喝茶, 美国人喝咖啡。", en: "Chinese people drink tea; Americans drink coffee.", pinyin: "zhōng guó rén hē chá, měi guó rén hē kā fēi." }, { zh: "两种都好!", en: "Both are good!", pinyin: "liǎng zhǒng dōu hǎo!" } ] },
  "6-3": { title: { en: "A letter of advice", zh: "一封建议信" }, intro: { en: "Read the letter and reply. What do you suggest?", zh: "读这封信并回信。你会建议什么？" }, sentences: [ { zh: "你好! 我刚学中文。", en: "Hello! I just started learning Chinese.", pinyin: "nǐ hǎo! wǒ gāng xué zhōng wén." }, { zh: "中文很难, 有什么建议吗?", en: "Chinese is hard. Any suggestions?", pinyin: "zhōng wén hěn nán, yǒu shén me jiàn yì ma?" }, { zh: "回: 中文不难, 很有意思。", en: "Reply: Chinese isn't hard, it's interesting.", pinyin: "huí: zhōng wén bù nán, hěn yǒu yì si." }, { zh: "每天学一点, 找朋友一起说。", en: "Learn a bit each day, find friends to speak with.", pinyin: "měi tiān xué yì diǎn, zhǎo péng yǒu yì qǐ shuō." } ] },
  "7-1": { title: { en: "The shape of Chinese", zh: "汉字的形状" }, intro: { en: "How did the shape of Chinese characters change over time?", zh: "汉字的形状是怎样随时间变化的？" }, sentences: [ { zh: "很久以前, 汉字刻在骨头上。", en: "Long ago, Chinese was carved on bone.", pinyin: "hěn jiǔ yǐ qián, hàn zì kè zài gǔ tóu shàng." }, { zh: "后来, 铸在青铜上。", en: "Later, it was cast on bronze.", pinyin: "hòu lái, zhù zài qīng tóng shàng." }, { zh: "之后, 写在竹简上。", en: "After that, it was written on bamboo.", pinyin: "zhī hòu, xiě zài zhú jiǎn shàng." }, { zh: "现在, 写在纸上。", en: "Now it is written on paper.", pinyin: "xiàn zài, xiě zài zhǐ shàng." }, { zh: "形状一直在变, 意思没变。", en: "The shape kept changing; the meaning didn't.", pinyin: "xíng zhuàng yì zhí zài biàn, yì si méi biàn." } ] },
  "7-2": { title: { en: "Two idioms", zh: "两个成语" }, intro: { en: "Each idiom hides a small story. What does it mean?", zh: "每个成语都藏着一个故事。什么意思？" }, sentences: [ { zh: "画蛇添足: 给蛇画脚, 多此一举。", en: "Draw feet on a snake: do something unnecessary.", pinyin: "huà shé tiān zú: gěi shé huà jiǎo, duō cǐ yī jǔ." }, { zh: "守株待兔: 等兔子, 不努力。", en: "Wait for a rabbit by a stump: wait for luck, no effort.", pinyin: "shǒu zhū dài tù: děng tù zǐ, bù nǔ lì." } ] },
  "7-3": { title: { en: "Two more idioms", zh: "再两个成语" }, intro: { en: "Two more idioms with stories inside them.", zh: "再两个藏着故事的成语。" }, sentences: [ { zh: "一箭双雕: 一支箭射两只鸟。", en: "One arrow, two eagles: achieve two goals with one act.", pinyin: "yī jiàn shuāng diāo: yī zhī jiàn shè liǎng zhī niǎo." }, { zh: "杯弓蛇影: 看弓, 以为蛇。", en: "Cup with a bow's shadow: fear that comes from imagination.", pinyin: "bēi gōng shé yǐng: kàn gōng, yǐ wéi shé." } ] },
  "8-1": { title: { en: "Oracle bone to paper", zh: "从甲骨到纸" }, intro: { en: "How did writing change when the tool changed?", zh: "工具变了, 字也变了。" }, sentences: [ { zh: "最早, 汉字刻在龟甲上。", en: "Earliest, characters were carved on turtle shells.", pinyin: "zuì zǎo, hàn zì kè zài guī jiǎ shàng." }, { zh: "后来, 铸在青铜器上。", en: "Later, cast on bronze vessels.", pinyin: "hòu lái, zhù zài qīng tóng qì shàng." }, { zh: "秦朝统一为小篆。", en: "The Qin dynasty unified them into seal script.", pinyin: "qín cháo tǒng yī wèi xiǎo zhuàn." }, { zh: "汉朝改为隶书, 变方了。", en: "The Han dynasty changed to clerical script, shapes became square.", pinyin: "hàn cháo gǎi wéi lì shū, biàn fāng le." }, { zh: "今天我们写楷书。", en: "Today we write regular script.", pinyin: "jīn tiān wǒ men xiě kǎi shū." } ] },
  "8-2": { title: { en: "Idioms with stories", zh: "成语里的故事" }, intro: { en: "Four characters, one whole story.", zh: "四个字, 一个完整的故事。" }, sentences: [ { zh: "画蛇添足: 做多余的事。", en: "Drawing feet on a snake: doing something unnecessary.", pinyin: "huà shé tiān zú: zuò duō yú de shì." }, { zh: "守株待兔: 不劳而获。", en: "Waiting by a stump for a rabbit: hoping to get something for nothing.", pinyin: "shǒu zhū dài tù: bù láo ér huò." }, { zh: "两个成语都告诫人不要偷懒。", en: "Both idioms warn against laziness and shortcuts.", pinyin: "liǎng gè chéng yǔ dōu gào jiè rén bú yào tōu lǎn." } ] },
  "8-3": { title: { en: "Two more idioms", zh: "再两个成语" }, intro: { en: "More wisdom in four characters.", zh: "四个字里更多智慧。" }, sentences: [ { zh: "亡羊补牢: 出了问题再补救。", en: "Mending the fence after losing a sheep: fix a problem after it happens.", pinyin: "wáng yáng bǔ láo: chū le wèn tí zài bǔ jiù." }, { zh: "塞翁失马: 坏事可能变好事。", en: "The old man lost his horse: bad luck may become good luck.", pinyin: "sāi wēng shī mǎ: huài shì kě néng biàn hǎo shì." }, { zh: "两个成语都讲变化。", en: "Both idioms are about change.", pinyin: "liǎng gè chéng yǔ dōu jiǎng biàn huà." } ] },
  "9-1": { title: { en: "A line of classical", zh: "一句文言" }, intro: { en: "Short, dense, beautiful - and still alive today.", zh: "短、密、美--而且今天还活着。" }, sentences: [ { zh: "学而时习之, 不亦说乎?", en: "To learn and practice it regularly - is that not a pleasure?", pinyin: "xué ér shí xí zhī, bù yì yuè hū?" }, { zh: "这是孔子说的。", en: "This was said by Confucius.", pinyin: "zhè shì kǒng zǐ shuō de." }, { zh: "两千五百年了, 还在学。", en: "Two and a half thousand years, and we still learn it.", pinyin: "liǎng qiān wǔ bǎi nián le, hái zài xué." } ] },
  "9-2": { title: { en: "Translate two ways", zh: "两种译法" }, intro: { en: "Literal or fluent - what do you keep?", zh: "直译还是意译--你保留什么?" }, sentences: [ { zh: "直译: 学, 然后, 经常, 温习, 它。", en: "Literal: Learn, then, often, review, it.", pinyin: "zhí yì: xué, rán hòu, jīng cháng, wēn xí, tā." }, { zh: "意译: 学了知识, 经常温习, 不也很快乐吗?", en: "Fluent: Having learned something, to review it often - is that not a joy?", pinyin: "yì yì: xué le zhī shi, jīng cháng wēn xí, bù yě hěn kuài lè ma?" }, { zh: "直译贴字面, 意译贴意思。", en: "Literal stays close to the words; fluent stays close to the meaning.", pinyin: "zhí yì tiē zì miàn, yì yì tiē yì si." } ] },
  "9-3": { title: { en: "A short poem", zh: "一首短诗" }, intro: { en: "Feel the rhythm before you chase the meaning.", zh: "先感受节奏, 再求意思。" }, sentences: [ { zh: "床前明月光", en: "Before my bed, the bright moonlight.", pinyin: "chuáng qián míng yuè guāng" }, { zh: "疑是地上霜", en: "I wonder - is it frost on the ground?", pinyin: "yí shì dì shàng shuāng" }, { zh: "举头望明月", en: "I raise my head to gaze at the bright moon.", pinyin: "jǔ tóu wàng míng yuè" }, { zh: "低头思故乡", en: "I lower my head, thinking of home.", pinyin: "dī tóu sī gù xiāng" } ] },
  "10-1": { title: { en: "Read like a curator", zh: "像策展人那样读" }, intro: { en: "Who wrote it? For whom? What is fact?", zh: "谁写的? 写给谁? 什么是事实?" }, sentences: [ { zh: "读一篇文章, 先问三个问题。", en: "When reading an article, first ask three questions.", pinyin: "dú yī piān wén zhāng, xiān wèn sān gè wèn tí." }, { zh: "谁写的? 为谁写的?", en: "Who wrote it? For whom was it written?", pinyin: "shuí xiě de? wèi shuí xiě de?" }, { zh: "哪些是事实? 哪些是观点?", en: "Which parts are facts? Which are opinions?", pinyin: "nǎ xiē shì shì shí? nǎ xiē shì guān diǎn?" } ] },
  "10-2": { title: { en: "Write a label", zh: "写一段展签" }, intro: { en: "150 words. Bilingual. Cited.", zh: "150 字。双语。有引用。" }, sentences: [ { zh: "选一件你感兴趣的物品。", en: "Choose an object that interests you.", pinyin: "xuǎn yí jiàn nǐ gǎn xìng qù de wù pǐn." }, { zh: "写: 它是什么? 从哪来? 谁用过?", en: "Write: What is it? Where did it come from? Who used it?", pinyin: "xiě: tā shì shén me? cóng nǎ lái? shuí yòng guò?" }, { zh: "加上你的理解, 标明来源。", en: "Add your interpretation, cite your sources.", pinyin: "jiā shàng nǐ de lǐ jiě, biāo míng lái yuán." } ] },
  "10-3": { title: { en: "Present it", zh: "做一次展示" }, intro: { en: "Three minutes. One clear point. Sources ready.", zh: "三分钟。一个清晰观点。来源就绪。" }, sentences: [ { zh: "把展签变成三分钟的讲稿。", en: "Turn the label into a three-minute talk.", pinyin: "bǎ zhǎn qiān biàn chéng sān fēn zhōng de jiǎng gǎo." }, { zh: "开头说一个观点。", en: "Start with one clear claim.", pinyin: "kāi tóu shuō yí gè guān diǎn." }, { zh: "中间给证据。", en: "Give evidence in the middle.", pinyin: "zhōng jiān gěi zhèng jù." }, { zh: "结尾回到观点, 致谢。", en: "Return to the claim at the end, and thank the audience.", pinyin: "jié wěi huí dào guān diǎn, zhì xiè." } ] },
};

const realLessons: Record<string, ReactNode> = {
  "1-1": <ToneCards />,
  "1-2": (
    <div className="space-y-8">
      <InitialGrid />
      <FinalGrid />
    </div>
  ),
  "1-3": (
    <div className="space-y-8">
      <BlendRows />
      <div>
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-3">Try saying</p>
        <div className="flex flex-wrap gap-2">
          {firstWords.slice(0, 6).map((w) => (
            <WordChip key={w.char} word={w} variant="inline" />
          ))}
        </div>
      </div>
    </div>
  ),
  "2-1": (
    <div className="grid gap-4 sm:grid-cols-2">
      {radicals.map((r) => (
        <div key={r.char} className="flex gap-4 rounded-2xl border border-teal/12 bg-white p-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-teal/8 font-serif-sc text-3xl text-teal">{r.char}</div>
          <div className="min-w-0 flex-1">
            <p className="font-nunito text-base font-bold text-ink">{r.name.en}</p>
            <p className="text-xs text-ink-light">{r.meaning.en}</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {r.examples.map((w) => (
                <WordChip key={w.char} word={w} variant="inline" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  "2-2": (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {strokes.map((s) => (
        <div key={s.en} className="rounded-2xl border border-teal/12 bg-white p-4">
          <svg viewBox="0 0 100 100" className="mx-auto h-20 w-20" aria-hidden>
            <rect x="6" y="6" width="88" height="88" rx="6" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-teal/10" />
            <line x1="50" y1="6" x2="50" y2="94" stroke="currentColor" strokeWidth="0.6" className="text-teal/10" />
            <line x1="6" y1="50" x2="94" y2="50" stroke="currentColor" strokeWidth="0.6" className="text-teal/10" />
            <path d={s.path} pathLength={1} className="stroke-path" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="mt-2 flex items-center justify-between gap-2">
            <div>
              <p className="font-nunito text-base font-bold text-ink">{s.name.en}</p>
              <p className="text-xs text-teal">{s.pinyin}</p>
            </div>
            <SpeakButton text={s.example.char} size="sm" />
          </div>
          <p className="mt-2 text-xs leading-relaxed text-ink-light">{s.tip.en}</p>
          <p className="mt-2 font-serif-sc text-lg text-ink">{s.example.char} <span className="text-xs text-ink-light">{s.example.pinyin}</span></p>
        </div>
      ))}
    </div>
  ),
  "2-3": (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {firstChars.map((c) => (
        <div key={c.char} className="flex items-center justify-between gap-2 rounded-xl border border-teal/12 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40">
          <div className="min-w-0">
            <span className="block font-serif-sc text-3xl leading-none text-ink">{c.char}</span>
            <span className="mt-1.5 block text-xs font-medium text-teal">{c.pinyin}</span>
            <span className="block text-[0.65rem] text-ink-light">{c.strokes} strokes</span>
          </div>
          <SpeakButton text={c.char} />
        </div>
      ))}
    </div>
  ),
  "3-1": <SentenceScene scene={familyScene} />,
  "3-2": <SentenceScene scene={timeScene} />,
  "3-3": <SentenceScene scene={shopScene} />,
  "4-1": <ReadingPassage passage={passages["4-1"]} />,
  "4-2": <ReadingPassage passage={passages["4-2"]} />,
  "4-3": <ReadingPassage passage={passages["4-3"]} />,
  "5-1": <ReadingPassage passage={passages["5-1"]} />,
  "5-2": <ReadingPassage passage={passages["5-2"]} />,
  "5-3": <ReadingPassage passage={passages["5-3"]} />,
  "6-1": <ReadingPassage passage={passages["6-1"]} />,
  "6-2": <ReadingPassage passage={passages["6-2"]} />,
  "6-3": <ReadingPassage passage={passages["6-3"]} />,
  "7-1": <ReadingPassage passage={passages["7-1"]} />,
  "7-2": <ReadingPassage passage={passages["7-2"]} />,
  "7-3": <ReadingPassage passage={passages["7-3"]} />,
  "8-1": <ReadingPassage passage={passages["8-1"]} />,
  "8-2": <ReadingPassage passage={passages["8-2"]} />,
  "8-3": <ReadingPassage passage={passages["8-3"]} />,
  "9-1": <ReadingPassage passage={passages["9-1"]} />,
  "9-2": <ReadingPassage passage={passages["9-2"]} />,
  "9-3": <ReadingPassage passage={passages["9-3"]} />,
  "10-1": <ReadingPassage passage={passages["10-1"]} />,
  "10-2": <ReadingPassage passage={passages["10-2"]} />,
  "10-3": <ReadingPassage passage={passages["10-3"]} />,
};

export default async function Page({ params }: { params: Promise<{ n: string; k: string }> }) {
  const { n, k } = await params;
  const nNum = parseInt(n, 10);
  const kNum = parseInt(k, 10);
  const lv = levels[nNum - 1];
  if (!lv || !lv.lessons[kNum - 1]) notFound();
  const lesson = lv.lessons[kNum - 1];
  const total = lv.lessons.length;
  const key = `${nNum}-${kNum}`;
  const interactive = realLessons[key] ?? null;
  const isReal = ["1-1","1-2","1-3","2-1","2-2","2-3","3-1","3-2","3-3","4-1","4-2","4-3","5-1","5-2","5-3","6-1","6-2","6-3","7-1","7-2","7-3","8-1","8-2","8-3","9-1","9-2","9-3","10-1","10-2","10-3"].includes(key);
  const backHref = `/learn/levels#lvl-${nNum}`;
  const nextHref = kNum < total ? `/learn/level/${nNum}/lesson/${kNum + 1}` : null;

  return (
    <LessonPage
      level={lv}
      lesson={lesson}
      k={kNum}
      total={total}
      interactive={interactive}
      backHref={backHref}
      nextHref={nextHref}
      isReal={isReal}
    />
  );
}