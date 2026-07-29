"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { levels, getBand } from "@/lib/levels";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconDownload } from "@/components/icons";

export function HomeContent() {
  const { lang } = useLang();
  const t = home[lang];

  return (
    <>
      {/* ═══════════ HERO：亮底 + 金龙动画 + 极简文字 + 零按钮 ═══════════ */}
      <section className="group/hero relative isolate flex min-h-[92vh] items-center overflow-hidden bg-paper">
        {/* 水墨晕染动画背景 */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="ink-bloom absolute left-[10%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(45,106,79,0.06),transparent_70%)]" />
          <div className="ink-bloom-2 absolute right-[20%] bottom-[15%] h-[35rem] w-[35rem] rounded-full bg-[radial-gradient(circle,rgba(217,169,90,0.05),transparent_70%)]" />
          <div className="mist-drift absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d6a4f' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>

        {/* 龙字书法暗纹 — 呼吸脉动 */}
        <span aria-hidden className="calligraphy-pulse pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[24rem] sm:text-[32rem] leading-none text-teal/[0.04] lg:text-[40rem]">
          龙
        </span>

        {/* 金龙图 — 呼吸浮动动画 */}
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 flex h-full w-[55%] items-center justify-end sm:w-[48%]">
          <div className="dragon-breathe relative h-[85%] w-full">
            <Image
              src="/hero/golden-dragon.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 55vw, 48vw"
              className="object-contain object-right drop-shadow-[0_20px_60px_rgba(180,140,60,0.15)]"
            />
          </div>
        </div>

        {/* 左侧极简文字 — 零按钮 */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg lg:max-w-xl">
            <Reveal>
              <p className="mb-5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-teal/60 sm:text-sm">
                {lang === "en" ? "Loong Kits" : "龙基特"}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="display-zh text-ink !text-[clamp(2.8rem,7vw,5.5rem)] !leading-[0.95]">
                {t.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-light sm:text-lg">
                {t.hero.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <a href="#free-learn" aria-label={lang === "en" ? "Scroll" : "向下"} className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-teal/40 transition-colors hover:text-teal">
          <span className="font-inter text-[0.65rem] font-semibold uppercase tracking-[0.25em]">{lang === "en" ? "Explore" : "探索"}</span>
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
              { href: "/members", tab: "kids", title: { en: "Kids", zh: "儿童" }, desc: { en: "Pre-K to Grade 6. Textbook-style units with poems, stories, and tests.", zh: "学前到六年级。教材式单元，含古诗、故事、试卷。" }, img: "/age-topics/prek-greet.webp" },
              { href: "/members", tab: "self", title: { en: "Self-Study", zh: "自学" }, desc: { en: "Beginner to Advanced, HSK-aligned. For teens and adults.", zh: "入门到高级，对标 HSK。适合青少年和成人。" }, img: "/age-topics/g68-region.webp" },
              { href: "/members", tab: "teachers", title: { en: "Teachers", zh: "教师" }, desc: { en: "Lesson plans, poems, history, culture notes, printable tests.", zh: "教案、古诗、历史、文化注、可打印试卷。" }, img: "/age-topics/g15-reunion.webp" },
            ].map((card, i) => (
              <Reveal key={card.tab} delay={i * 80}>
                <Link href={`${card.href}?tab=${card.tab}`} className="group relative block h-80 sm:h-96 overflow-hidden rounded-2xl">
                  <Image src={card.img} alt={card.title[lang]} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <h3 className="font-nunito text-2xl sm:text-3xl font-extrabold text-white mb-2">{card.title[lang]}</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">{card.desc[lang]}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-300">
                      {lang === "en" ? "Explore" : "查看"} <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
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
      <section className="relative isolate overflow-hidden bg-cream/80 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="ink-bloom absolute left-[15%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(45,106,79,0.04),transparent_70%)]" />
          <span className="calligraphy-pulse absolute left-[3%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[14rem] sm:text-[18rem] leading-none text-teal/[0.03]">学</span>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="display-zh text-ink !text-3xl sm:!text-4xl !leading-[1.05]">{t.freeSample.title}</h2>
            <p className="mt-4 text-lg text-ink-light leading-relaxed max-w-xl mx-auto">{t.freeSample.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/free/zodiac-animals" className="inline-flex items-center gap-2 rounded-[0.85rem] bg-[#b3121f] px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_30px_-10px_rgba(179,18,31,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9c0f1b]">
                {t.freeSample.cta} <IconArrowRight size={18} />
              </Link>
              <Link href="/learn/levels" className="inline-flex items-center gap-2 rounded-[0.85rem] border-2 border-teal/30 px-6 py-3 text-base font-semibold text-teal transition-colors duration-200 hover:border-teal hover:bg-teal/5">
                {t.hero.learnCta} <IconArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
