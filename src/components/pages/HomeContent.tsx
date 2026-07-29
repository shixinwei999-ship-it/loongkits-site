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
      {/* ═══════════ HERO：龙做全屏背景 + 文字叠在上面 ═══════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f5f2ed]">
        {/* 龙 — 全屏背景，object-cover 铺满 */}
        <div className="absolute inset-0">
          <Image
            src="/hero/golden-dragon.webp"
            alt={lang === "en" ? "Golden Chinese dragon" : "金色中国龙"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%] opacity-90"
          />
          {/* 文字可读性遮罩 — 中心实白椭圆，边缘透出龙 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_48%,rgba(245,242,237,0.97),rgba(245,242,237,0.7)_55%,rgba(245,242,237,0.15)_80%,transparent)]" />
        </div>

        {/* 文字 — 叠在龙上面 */}
        <div className="relative z-10 px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-5 font-inter text-[0.6rem] font-medium uppercase tracking-[0.4em] text-[#2d6a4f]/50 sm:text-[0.7rem] sm:tracking-[0.5em]">
              {lang === "en" ? "Bilingual Chinese Curriculum" : "中 英 双 语 中 文 课 程"}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif-sc text-[clamp(2.2rem,7.5vw,6.5rem)] font-bold leading-[1.15] tracking-[0.1em] text-[#1a1a1a] sm:tracking-[0.15em]">
              {lang === "en" ? (
                <>Speak Chinese,<br />level by level.</>
              ) : (
                <>一级一级，<br />开口说中文。</>
              )}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-sm text-xs leading-relaxed text-[#1a1a1a]/40 sm:text-sm">
              {t.hero.subtitle}
            </p>
          </Reveal>
        </div>

        {/* 底部滚动提示 */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <span className="font-inter text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[#1a1a1a]/25">
            {lang === "en" ? "Scroll" : "向下"}
          </span>
        </div>
      </section>

      {/* ═══════════ 跑马灯 ═══════════ */}
      <section className="overflow-hidden border-y border-[#1a1a1a]/8 bg-[#f5f2ed] py-4">
        <div className="marquee-track flex whitespace-nowrap">
          {[..."鼠牛虎兔龙蛇马羊猴鸡狗猪鼠牛虎兔龙蛇马羊猴鸡狗猪"].map((ch, i) => (
            <span key={i} className="mx-8 font-serif-sc text-3xl text-[#1a1a1a]/10 sm:text-4xl">{ch}</span>
          ))}
        </div>
      </section>

      {/* ═══════════ 板块一：免费学习 ═══════════ */}
      <section id="free-learn" className="scroll-mt-20 bg-[#f5f2ed]">
        {/* 居中大标题 */}
        <div className="px-5 py-14 text-center sm:px-8 sm:py-20 lg:py-28">
          <Reveal>
            <p className="mb-4 font-inter text-[0.6rem] font-medium uppercase tracking-[0.35em] text-[#2d6a4f]/35 sm:text-[0.7rem]">
              {lang === "en" ? "Free · Open to everyone" : "免 费 · 所 有 人 开 放"}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif-sc text-[clamp(1.8rem,5.5vw,4.5rem)] font-bold leading-[1.1] tracking-[0.08em] text-[#1a1a1a] sm:tracking-[0.12em]">
              {lang === "en" ? "From Level 1 to Level 10" : "从第 1 级 到第 10 级"}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-[#1a1a1a]/35 sm:text-sm">
              {t.agePath.desc}
            </p>
          </Reveal>
        </div>

        {/* 全宽图 */}
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(30vh, 40vw, 50vh)" }}>
          <Image src="/age-topics/prek-greet.webp" alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>

        {/* 10 级列表 */}
        <div className="divide-y divide-[#1a1a1a]/8">
          {levels.map((lv, i) => {
            const band = getBand(lv.band);
            return (
              <Reveal key={lv.n} delay={i * 25}>
                <Link
                  href={`/learn/levels#lvl-${lv.n}`}
                  className="group flex items-baseline gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#2d6a4f]/[0.03] sm:gap-8 sm:px-8 sm:py-6 lg:px-12 lg:py-7"
                >
                  <span className="font-inter text-xs font-medium tabular-nums text-[#1a1a1a]/20 sm:text-sm">
                    {String(lv.n).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif-sc text-xl font-bold text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#2d6a4f] sm:text-2xl lg:text-3xl">
                    {lv.title[lang]}
                  </span>
                  {band && (
                    <span className="hidden font-inter text-[0.6rem] font-medium uppercase tracking-[0.15em] text-[#1a1a1a]/25 sm:block">
                      {band.name[lang]}
                    </span>
                  )}
                  <IconArrowRight size={16} className="text-[#1a1a1a]/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2d6a4f]" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════ 板块二：会员 ═══════════ */}
      <section className="bg-[#1a1a1a] text-white">
        {/* 居中大标题 */}
        <div className="px-5 py-14 text-center sm:px-8 sm:py-20 lg:py-28">
          <Reveal>
            <p className="mb-4 font-inter text-[0.6rem] font-medium uppercase tracking-[0.35em] text-white/20 sm:text-[0.7rem]">
              {lang === "en" ? "Members · Structured Curriculum" : "会 员 · 成 套 教 材"}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif-sc text-[clamp(1.8rem,5.5vw,4.5rem)] font-bold leading-[1.1] tracking-[0.08em] text-white sm:tracking-[0.12em]">
              {lang === "en" ? "Textbooks, not just lessons" : "是教材，不只是课"}
            </h2>
          </Reveal>
        </div>

        {/* 全宽图 */}
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(30vh, 40vw, 50vh)" }}>
          <Image src="/age-topics/g68-region.webp" alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>

        {/* 列表 */}
        <div className="divide-y divide-white/8">
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
                <span className="font-inter text-xs font-medium tabular-nums text-white/15 sm:text-sm">{item.num}</span>
                <div className="flex-1">
                  <h3 className="font-serif-sc text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4a853] sm:text-3xl lg:text-4xl">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-white/30">{item.desc[lang]}</p>
                </div>
                <IconArrowRight size={20} className="text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d4a853]" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════ 板块三：商城 ═══════════ */}
      <section className="bg-[#f5f2ed]">
        {/* 居中大标题 */}
        <div className="px-5 py-14 text-center sm:px-8 sm:py-20 lg:py-28">
          <Reveal>
            <p className="mb-4 font-inter text-[0.6rem] font-medium uppercase tracking-[0.35em] text-[#2d6a4f]/35 sm:text-[0.7rem]">
              {lang === "en" ? "Shop · Printable Downloads" : "商 城 · 可 打 印 下 载"}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif-sc text-[clamp(1.8rem,5.5vw,4.5rem)] font-bold leading-[1.1] tracking-[0.08em] text-[#1a1a1a] sm:tracking-[0.12em]">
              {lang === "en" ? "Test packs & workbooks" : "试卷包 与练习册"}
            </h2>
          </Reveal>
        </div>

        {/* 全宽图 */}
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(30vh, 40vw, 50vh)" }}>
          <Image src="/age-topics/g15-reunion.webp" alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>

        {/* 列表 */}
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
                <span className="hidden font-inter text-xs text-[#1a1a1a]/25 sm:block">{item.desc[lang]}</span>
                <span className="font-inter text-sm font-medium text-[#b3121f]">{item.price}</span>
                <IconArrowRight size={16} className="text-[#1a1a1a]/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2d6a4f]" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
