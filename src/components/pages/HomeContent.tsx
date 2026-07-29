"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { levels, getBand } from "@/lib/levels";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconBook, IconUsers, IconTeacher, IconDownload } from "@/components/icons";

export function HomeContent() {
  const { lang } = useLang();
  const t = home[lang];

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="group/hero relative isolate flex min-h-[88vh] items-center overflow-hidden bg-[#1c1917]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-[0.06]" />
          <span className="absolute right-[2%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[28rem] sm:text-[36rem] leading-none text-amber-400/[0.06] lg:text-[42rem]">龙</span>
          <div className="absolute right-[10%] top-1/2 h-[80%] w-[50%] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(217,169,90,0.12),transparent_70%)] blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1c1917] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80 sm:text-sm">
                <span className="hero-dot inline-block h-2 w-2 rounded-full bg-amber-400" />
                {lang === "en" ? "A real Chinese course · 10 levels" : "一门真正的中文课 · 十个等级"}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-zh text-white !text-[clamp(2.9rem,8vw,6rem)] !leading-[0.95]">{t.hero.title}</h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-stone-300 sm:text-xl">{t.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href="/learn/levels" className="group/btn inline-flex items-center gap-2 rounded-[0.85rem] bg-amber-500 px-7 py-3.5 text-base font-bold text-stone-900 shadow-[0_16px_36px_-14px_rgba(217,169,90,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400">
                  {t.hero.learnCta} <IconArrowRight size={18} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
                <Link href="/learn/chinese" className="inline-flex items-center gap-2 rounded-[0.85rem] border-2 border-stone-500/50 px-6 py-3 text-base font-semibold text-stone-200 transition-colors duration-200 hover:border-amber-400/60 hover:text-amber-300">
                  {t.hero.earCta}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
        <a href="#free-learn" aria-label={lang === "en" ? "Scroll" : "向下"} className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone-500 transition-colors hover:text-amber-400 lg:flex">
          <span className="font-inter text-xs font-semibold uppercase tracking-[0.22em]">{lang === "en" ? "Explore" : "浏览"}</span>
          <svg className="hero-bounce h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M6 9l6 6 6-6" /></svg>
        </a>
      </section>

      {/* ═══════════ 板块一：免费学习区（1-10 级） ═══════════ */}
      <section id="free-learn" className="scroll-mt-20 bg-paper py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="font-inter font-semibold uppercase tracking-[0.12em] text-[#b3121f] text-xs sm:text-sm mb-4">
                  {lang === "en" ? "Free · open to everyone" : "免费 · 所有人开放"}
                </p>
                <h2 className="display-zh text-ink !text-3xl sm:!text-5xl">{t.agePath.title}</h2>
                <p className="text-lg text-ink-light leading-relaxed mt-4">{t.agePath.desc}</p>
              </div>
              <Link href="/learn/levels" className="arrow-link text-[#b3121f] font-bold hover:underline text-base sm:text-lg">
                {t.agePath.viewAll} <IconArrowRight size={20} className="arrow" />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {levels.map((lv, i) => {
              const band = getBand(lv.band);
              return (
                <Reveal key={lv.n} delay={i * 40}>
                  <Link href={`/learn/levels#lvl-${lv.n}`} className="group block rounded-xl border border-teal/12 bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b3121f]/30 hover:shadow-[0_14px_30px_-20px_rgba(157,15,27,0.4)] h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-nunito text-2xl sm:text-3xl font-extrabold text-[#b3121f]/15 leading-none">{String(lv.n).padStart(2, "0")}</span>
                      {band && <span className={`rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider ${band.accent} bg-teal/8`}>{band.name[lang]}</span>}
                    </div>
                    <h3 className="font-nunito text-base sm:text-lg font-extrabold text-ink leading-tight mb-1.5 group-hover:text-[#b3121f] transition-colors">{lv.title[lang]}</h3>
                    <p className="text-xs text-ink-light leading-relaxed line-clamp-2">{lv.tagline[lang]}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#b3121f] opacity-0 group-hover:opacity-100 transition-opacity">{t.agePath.cta} <IconArrowRight size={12} /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 板块二：会员区（3 个小板块） ═══════════ */}
      <section className="bg-cream/60 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-10">
              <p className="font-inter font-semibold uppercase tracking-[0.12em] text-[#b3121f] text-xs sm:text-sm mb-4">
                {lang === "en" ? "Members · structured curriculum" : "会员 · 成套教材"}
              </p>
              <h2 className="display-zh text-ink !text-3xl sm:!text-5xl">
                {lang === "en" ? "Textbooks, not just lessons" : "是教材，不只是课"}
              </h2>
              <p className="text-lg text-ink-light leading-relaxed mt-4">
                {lang === "en"
                  ? "Grade-by-grade units with vocabulary, reading, writing, classical poems, culture notes, and printable tests. Three tracks for three audiences."
                  : "按年级编排的单元：词汇、阅读、写作、古诗、文化注、可打印试卷。三条轨道，三种人群。"}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { href: "/members", tab: "kids", icon: IconBook, title: { en: "Kids", zh: "儿童" }, desc: { en: "Pre-K to Grade 6. Textbook-style units with poems, stories, and tests. For children learning Chinese from the start.", zh: "学前到六年级。教材式单元，含古诗、故事、试卷。适合从小开始学中文的孩子。" }, accent: "bg-teal/8 text-teal border-teal/20" },
              { href: "/members", tab: "self", icon: IconUsers, title: { en: "Self-Study", zh: "自学" }, desc: { en: "Beginner to Advanced, HSK-aligned. For teens and adults learning on their own or in a class.", zh: "入门到高级，对标 HSK。适合自学或培训班学习的青少年和成人。" }, accent: "bg-amber-50 text-amber-700 border-amber-200/50" },
              { href: "/members", tab: "teachers", icon: IconTeacher, title: { en: "Teachers", zh: "教师" }, desc: { en: "Lesson plans, classical poems, history, culture notes, and printable tests by grade. Everything you need for a class.", zh: "教案、古诗、历史、文化注、按年级的可打印试卷。上课需要的一切。" }, accent: "bg-[#b3121f]/8 text-[#b3121f] border-[#b3121f]/20" },
            ].map((card, i) => {
              const Ic = card.icon;
              return (
                <Reveal key={card.tab} delay={i * 80}>
                  <Link href={`${card.href}?tab=${card.tab}`} className="group block h-full rounded-2xl border border-teal/12 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b3121f]/30 hover:shadow-[0_20px_40px_-24px_rgba(157,15,27,0.4)]">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.accent} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                      <Ic size={26} />
                    </span>
                    <h3 className="font-nunito text-2xl font-extrabold text-ink mb-3 group-hover:text-[#b3121f] transition-colors">{card.title[lang]}</h3>
                    <p className="text-sm text-ink-light leading-relaxed mb-5">{card.desc[lang]}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#b3121f]">
                      {lang === "en" ? "Explore" : "查看"} <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 板块三：商城 / 下载区 ═══════════ */}
      <section className="bg-paper py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="font-inter font-semibold uppercase tracking-[0.12em] text-[#b3121f] text-xs sm:text-sm mb-4">
                  {lang === "en" ? "Shop · printable downloads" : "商城 · 可打印下载"}
                </p>
                <h2 className="display-zh text-ink !text-3xl sm:!text-5xl">
                  {lang === "en" ? "Test packs & workbooks" : "试卷包与练习册"}
                </h2>
                <p className="text-lg text-ink-light leading-relaxed mt-4">
                  {lang === "en"
                    ? "Reinforce what you learn with printable test packs, stroke workbooks, poem flashcards, and HSK mock exams."
                    : "用可打印的试卷包、笔顺练习册、古诗闪卡、HSK 模拟考试来强化学习。"}
                </p>
              </div>
              <Link href="/shop" className="arrow-link text-[#b3121f] font-bold hover:underline text-base sm:text-lg">
                {lang === "en" ? "See all products" : "查看全部商品"} <IconArrowRight size={20} className="arrow" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: { en: "Test Packs", zh: "试卷包" }, desc: { en: "By grade, 3 tests each", zh: "按年级，每包 3 份" }, price: "$2.99–3.99", icon: "📝" },
              { title: { en: "Stroke Workbooks", zh: "笔顺练习册" }, desc: { en: "100 chars, trace grids", zh: "100 字，描红格" }, price: "$5.99", icon: "✍️" },
              { title: { en: "Poem Flashcards", zh: "古诗闪卡" }, desc: { en: "Tang & Song, 20 cards", zh: "唐宋，20 张" }, price: "$4.99", icon: "📜" },
              { title: { en: "HSK Mock Exams", zh: "HSK 模拟考" }, desc: { en: "Full exams + answer key", zh: "完整试卷+答案" }, price: "$3.99–4.99", icon: "🎯" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link href="/shop" className="group block h-full rounded-xl border border-teal/12 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b3121f]/30 hover:shadow-[0_14px_30px_-20px_rgba(157,15,27,0.4)]">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-nunito text-lg font-extrabold text-ink mb-1 group-hover:text-[#b3121f] transition-colors">{item.title[lang]}</h3>
                  <p className="text-xs text-ink-light mb-3">{item.desc[lang]}</p>
                  <span className="font-nunito text-lg font-extrabold text-[#b3121f]">{item.price}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 底部行动带 ═══════════ */}
      <section className="relative isolate overflow-hidden bg-[#1c1917] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-[0.04]" />
          <span className="absolute left-[5%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[16rem] sm:text-[20rem] leading-none text-amber-400/[0.04]">学</span>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="display-zh text-white !text-3xl sm:!text-4xl !leading-[1.05]">{t.freeSample.title}</h2>
            <p className="mt-4 text-lg text-stone-300 leading-relaxed max-w-xl mx-auto">{t.freeSample.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/free/zodiac-animals" className="inline-flex items-center gap-2 rounded-[0.85rem] bg-amber-500 px-7 py-3.5 text-base font-bold text-stone-900 shadow-[0_12px_30px_-10px_rgba(217,169,90,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400">
                {t.freeSample.cta} <IconArrowRight size={18} />
              </Link>
              <Link href="/learn/levels" className="inline-flex items-center gap-2 rounded-[0.85rem] border-2 border-stone-500/50 px-6 py-3 text-base font-semibold text-stone-200 transition-colors duration-200 hover:border-amber-400/60 hover:text-amber-300">
                {t.hero.learnCta} <IconArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
