"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconDownload } from "@/components/icons";

interface ShopItem {
  id: string;
  title: Bi<string>;
  desc: Bi<string>;
  grade: Bi<string>;
  pages: number;
  price: string;
  tag?: Bi<string>;
}

const shopItems: ShopItem[] = [
  { id: "test-prek-u1", title: { en: "Pre-K Unit 1 Test Pack", zh: "学前第一单元试卷包" }, desc: { en: "3 printable tests: pinyin, characters, listening. 30 questions total.", zh: "3 份可打印试卷：拼音、汉字、听力。共 30 题。" }, grade: { en: "Pre-K", zh: "学前" }, pages: 6, price: "$2.99", tag: { en: "New", zh: "新品" } },
  { id: "test-g1-u1", title: { en: "Grade 1 Unit 1 Test Pack", zh: "一年级第一单元试卷包" }, desc: { en: "3 printable tests: vocab, reading, writing. 40 questions total.", zh: "3 份可打印试卷：词汇、阅读、写作。共 40 题。" }, grade: { en: "Grade 1", zh: "一年级" }, pages: 8, price: "$2.99" },
  { id: "test-g2-u1", title: { en: "Grade 2 Unit 1 Test Pack", zh: "二年级第一单元试卷包" }, desc: { en: "3 printable tests: vocab, reading comprehension, composition prompt.", zh: "3 份可打印试卷：词汇、阅读理解、作文题。" }, grade: { en: "Grade 2", zh: "二年级" }, pages: 8, price: "$2.99" },
  { id: "test-g3-u1", title: { en: "Grade 3 Unit 1 Test Pack", zh: "三年级第一单元试卷包" }, desc: { en: "3 printable tests: fables reading, idiom fill-in, short essay.", zh: "3 份可打印试卷：寓言阅读、成语填空、短文写作。" }, grade: { en: "Grade 3", zh: "三年级" }, pages: 10, price: "$3.99" },
  { id: "poem-cards", title: { en: "Classical Poem Flashcards (Set 1)", zh: "古诗闪卡（第一套）" }, desc: { en: "20 poem cards: Tang & Song dynasty. Front: poem + pinyin. Back: translation + notes.", zh: "20 张古诗卡：唐宋。正面：诗+拼音。背面：翻译+注释。" }, grade: { en: "All ages", zh: "全年龄" }, pages: 20, price: "$4.99", tag: { en: "Popular", zh: "热门" } },
  { id: "stroke-workbook", title: { en: "Stroke Order Workbook (100 chars)", zh: "笔顺练习册（100 字）" }, desc: { en: "100 characters with stroke order guides, trace grids, and free-writing space.", zh: "100 个字的笔顺指导、描红格和自由书写空间。" }, grade: { en: "Pre-K – Grade 2", zh: "学前–二年级" }, pages: 40, price: "$5.99" },
  { id: "hsk1-mock", title: { en: "HSK 1 Mock Exam", zh: "HSK 1 模拟考试" }, desc: { en: "Full mock exam: listening, reading, writing. Answer key included.", zh: "完整模拟考试：听力、阅读、写作。含答案。" }, grade: { en: "Beginner", zh: "入门" }, pages: 12, price: "$3.99" },
  { id: "hsk3-mock", title: { en: "HSK 3 Mock Exam", zh: "HSK 3 模拟考试" }, desc: { en: "Full mock exam with listening audio scripts. Answer key included.", zh: "完整模拟考试，含听力原文。含答案。" }, grade: { en: "Elementary", zh: "初级" }, pages: 16, price: "$4.99" },
  { id: "culture-reader", title: { en: "Culture Reader: 12 Festivals", zh: "文化读本：12 个节日" }, desc: { en: "12 illustrated readings on Chinese festivals with comprehension questions.", zh: "12 篇中国节日配图阅读，附理解题。" }, grade: { en: "Grade 3+", zh: "三年级+" }, pages: 36, price: "$6.99", tag: { en: "New", zh: "新品" } },
];

export function ShopContent() {
  const { lang } = useLang();

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1c1917]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-[0.04]" />
          <span className="absolute left-[5%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[20rem] leading-none text-amber-400/[0.04]">卷</span>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-amber-400/80 mb-5">
              {lang === "en" ? "Shop · printable downloads" : "商城 · 可打印下载"}
            </p>
            <h1 className="display-zh text-white !text-[clamp(2.5rem,6vw,4.5rem)] !leading-[0.98]">
              {lang === "en" ? "Test packs, workbooks, flashcards" : "试卷包、练习册、闪卡"}
            </h1>
            <p className="mt-5 text-lg text-stone-300 leading-relaxed max-w-2xl">
              {lang === "en"
                ? "Printable PDFs that reinforce what you learn. Test packs by grade, stroke workbooks, poem flashcards, HSK mock exams, and culture readers."
                : "强化学习的可打印 PDF。按年级的试卷包、笔顺练习册、古诗闪卡、HSK 模拟考试、文化读本。"}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shopItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 50}>
                <div className="group flex flex-col h-full rounded-xl border border-teal/12 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b3121f]/30 hover:shadow-[0_14px_30px_-20px_rgba(157,15,27,0.4)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-teal/8 px-2.5 py-0.5 text-xs font-bold text-teal">{item.grade[lang]}</span>
                    {item.tag && (
                      <span className="rounded-full bg-[#b3121f] px-2.5 py-0.5 text-xs font-bold text-white">{item.tag[lang]}</span>
                    )}
                  </div>
                  <h3 className="font-nunito text-lg font-extrabold text-ink leading-tight mb-2 group-hover:text-[#b3121f] transition-colors">
                    {item.title[lang]}
                  </h3>
                  <p className="text-sm text-ink-light leading-relaxed flex-1">{item.desc[lang]}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-teal/10 pt-4">
                    <span className="font-nunito text-xl font-extrabold text-[#b3121f]">{item.price}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-ink/5 px-3 py-1.5 text-xs font-bold text-ink-light">
                      <IconDownload size={13} /> {item.pages} {lang === "en" ? "pages" : "页"}
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled
                    className="mt-3 w-full rounded-lg bg-teal/10 px-4 py-2.5 text-sm font-bold text-teal/50 cursor-not-allowed"
                    title={lang === "en" ? "Payment system coming soon" : "支付系统即将上线"}
                  >
                    {lang === "en" ? "Coming soon" : "即将上线"}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

type Bi<T> = Record<"en" | "zh", T>;
