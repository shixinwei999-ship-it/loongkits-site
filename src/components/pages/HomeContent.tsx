"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { levels, getBand } from "@/lib/levels";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight } from "@/components/icons";

export function HomeContent() {
  const { lang } = useLang();
  const t = home[lang];

  return (
    <>
      {/* ═══════════ HERO：Scope-style 超大排版 + 龙作为背景纹理 ═══════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#f5f2ed]">
        {/* 龙字 — 巨大背景纹理，呼吸动画 */}
        <span
          aria-hidden
          className="calligraphy-pulse pointer-events-none absolute -right-[5%] top-[10%] select-none font-serif-sc text-[40vw] leading-[0.8] text-[#2d6a4f]/[0.04] sm:text-[35vw] lg:text-[30vw]"
        >
          龙
        </span>

        {/* 金龙图 — 右上角，小尺寸，作为点缀而非主角 */}
        <div aria-hidden className="pointer-events-none absolute right-[3%] top-[8%] w-[28vw] max-w-[400px] opacity-60 sm:opacity-80">
          <div className="dragon-breathe relative aspect-square w-full">
            <Image src="/hero/golden-dragon.webp" alt="" fill sizes="28vw" className="object-contain" />
          </div>
        </div>

        {/* 主文字 — 占据整个视口下半部分 */}
        <div className="relative z-10 px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <Reveal>
            <p className="mb-4 font-inter text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#2d6a4f]/50 sm:text-xs">
              {lang === "en" ? "Bilingual Chinese Curriculum" : "中英双语中文课程"}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif-sc text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.88] tracking-[-0.02em] text-[#1a1a1a]">
              {lang === "en" ? (
                <>Speak<br />Chinese,<br /><span className="text-[#2d6a4f]">level by level</span></>
              ) : (
                <>一级一级，<br /><span className="text-[#2d6a4f]">开口说中文</span></>
              )}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#1a1a1a]/60 sm:text-base">
              {t.hero.subtitle}
            </p>
          </Reveal>
        </div>

        {/* 底部滚动提示 */}
        <div className="relative z-10 flex items-center justify-center pb-6">
          <span className="font-inter text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[#1a1a1a]/30">
            {lang === "en" ? "Scroll" : "向下"}
          </span>
        </div>
      </section>

      {/* ═══════════ 跑马灯：十二生肖 ═══════════ */}
      <section className="overflow-hidden border-y border-[#1a1a1a]/10 bg-[#f5f2ed] py-4">
        <div className="marquee-track flex whitespace-nowrap">
          {[..."鼠牛虎兔龙蛇马羊猴鸡狗猪鼠牛虎兔龙蛇马羊猴鸡狗猪"].map((ch, i) => (
            <span key={i} className="mx-6 font-serif-sc text-2xl text-[#1a1a1a]/15 sm:text-3xl">{ch}</span>
          ))}
        </div>
      </section>

      {/* ═══════════ 板块一：免费学习 — Scope-style 大文字块 ═══════════ */}
      <section id="free-learn" className="scroll-mt-20 bg-[#f5f2ed]">
        <div className="border-b border-[#1a1a1a]/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <Reveal>
            <p className="mb-3 font-inter text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#2d6a4f]/50">
              {lang === "en" ? "Free · Open to everyone" : "免费 · 所有人开放"}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-serif-sc text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.9] text-[#1a1a1a]">
              {lang === "en" ? "From Level 1\nto Level 10" : "从第 1 级\n到第 10 级"}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#1a1a1a]/50 sm:text-base">
              {t.agePath.desc}
            </p>
          </Reveal>
        </div>

        {/* 10 级 — 大文字索引列表，不是卡片网格 */}
        <div className="divide-y divide-[#1a1a1a]/8">
          {levels.map((lv, i) => {
            const band = getBand(lv.band);
            return (
              <Reveal key={lv.n} delay={i * 30}>
                <Link
                  href={`/learn/levels#lvl-${lv.n}`}
                  className="group flex items-baseline gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#2d6a4f]/[0.03] sm:gap-8 sm:px-8 sm:py-6 lg:px-12 lg:py-7"
                >
                  <span className="font-inter text-xs font-medium tabular-nums text-[#1a1a1a]/25 sm:text-sm">
                    {String(lv.n).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif-sc text-xl font-bold text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#2d6a4f] sm:text-2xl lg:text-3xl">
                    {lv.title[lang]}
                  </span>
                  {band && (
                    <span className="hidden font-inter text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[#1a1a1a]/30 sm:block">
                      {band.name[lang]}
                    </span>
                  )}
                  <IconArrowRight size={16} className="text-[#1a1a1a]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2d6a4f]" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════ 板块二：会员 — 三个大文字块 ═══════════ */}
      <section className="bg-[#1a1a1a] text-white">
        <div className="border-b border-white/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <Reveal>
            <p className="mb-3 font-inter text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/30">
              {lang === "en" ? "Members · Structured Curriculum" : "会员 · 成套教材"}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-serif-sc text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.9] text-white">
              {lang === "en" ? "Textbooks,\nnot just lessons" : "是教材，\n不只是课"}
            </h2>
          </Reveal>
        </div>

        <div className="divide-y divide-white/10">
          {[
            { href: "/members?tab=kids", num: "01", title: { en: "Kids", zh: "儿童" }, desc: { en: "Pre-K to Grade 6 — textbook-style units with poems, stories, and tests", zh: "学前到六年级 — 教材式单元，含古诗、故事、试卷" } },
            { href: "/members?tab=self", num: "02", title: { en: "Self-Study", zh: "自学" }, desc: { en: "Beginner to Advanced, HSK-aligned — for teens and adults", zh: "入门到高级，对标 HSK — 适合青少年和成人" } },
            { href: "/members?tab=teachers", num: "03", title: { en: "Teachers", zh: "教师" }, desc: { en: "Lesson plans, poems, history, culture notes, printable tests", zh: "教案、古诗、历史、文化注、可打印试卷" } },
          ].map((item, i) => (
            <Reveal key={item.num} delay={i * 60}>
              <Link
                href={item.href}
                className="group flex items-baseline gap-4 px-5 py-8 transition-colors duration-300 hover:bg-white/[0.03] sm:gap-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
              >
                <span className="font-inter text-xs font-medium tabular-nums text-white/20 sm:text-sm">{item.num}</span>
                <div className="flex-1">
                  <h3 className="font-serif-sc text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4a853] sm:text-3xl lg:text-4xl">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-white/40">{item.desc[lang]}</p>
                </div>
                <IconArrowRight size={20} className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d4a853]" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════ 板块三：商城 — 简洁列表 ═══════════ */}
      <section className="bg-[#f5f2ed]">
        <div className="border-b border-[#1a1a1a]/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <Reveal>
            <p className="mb-3 font-inter text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#2d6a4f]/50">
              {lang === "en" ? "Shop · Printable Downloads" : "商城 · 可打印下载"}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-serif-sc text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[0.9] text-[#1a1a1a]">
              {lang === "en" ? "Test packs\n& workbooks" : "试卷包\n与练习册"}
            </h2>
          </Reveal>
        </div>

        <div className="divide-y divide-[#1a1a1a]/8">
          {[
            { title: { en: "Test Packs", zh: "试卷包" }, price: "$2.99–3.99", desc: { en: "By grade, 3 tests each", zh: "按年级，每包 3 份" } },
            { title: { en: "Stroke Workbooks", zh: "笔顺练习册" }, price: "$5.99", desc: { en: "100 chars, trace grids", zh: "100 字，描红格" } },
            { title: { en: "Poem Flashcards", zh: "古诗闪卡" }, price: "$4.99", desc: { en: "Tang & Song, 20 cards", zh: "唐宋，20 张" } },
            { title: { en: "HSK Mock Exams", zh: "HSK 模拟考" }, price: "$3.99–4.99", desc: { en: "Full exams + answer key", zh: "完整试卷 + 答案" } },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 40}>
              <Link
                href="/shop"
                className="group flex items-baseline gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#2d6a4f]/[0.03] sm:gap-8 sm:px-8 sm:py-6 lg:px-12 lg:py-7"
              >
                <span className="flex-1 font-serif-sc text-xl font-bold text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#2d6a4f] sm:text-2xl lg:text-3xl">
                  {item.title[lang]}
                </span>
                <span className="hidden font-inter text-xs text-[#1a1a1a]/30 sm:block">{item.desc[lang]}</span>
                <span className="font-inter text-sm font-medium text-[#b3121f]">{item.price}</span>
                <IconArrowRight size={16} className="text-[#1a1a1a]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2d6a4f]" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
