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
      {/* ═══════════ HERO：Scope 式留白排版 + 烫金龙字 monogram ═══════════ */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f5f2ed]">
        {/* 极淡龍字水印 + ambient 暖光，作为背景纹理 */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span className="calligraphy-pulse absolute -right-[6%] top-1/2 -translate-y-1/2 select-none font-serif-sc text-[44vw] leading-none text-[#2d6a4f]/[0.035] sm:text-[34vw]">
            龍
          </span>
          <div className="ink-bloom absolute left-[8%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(45,106,79,0.05),transparent_70%)]" />
          <div className="ink-bloom-2 absolute bottom-[12%] right-[28%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(201,162,74,0.06),transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12">
          {/* 左：克制排版 */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-7 font-inter text-[0.62rem] font-medium uppercase tracking-[0.42em] text-[#2d6a4f]/55 sm:text-[0.72rem] sm:tracking-[0.5em]">
                {lang === "en" ? "Bilingual Chinese Curriculum" : "中 英 双 语 中 文 课 程"}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-serif-sc text-[clamp(2.4rem,6.5vw,5.5rem)] font-bold leading-[1.08] tracking-[0.04em] text-[#1a1a1a] sm:tracking-[0.06em]">
                {lang === "en" ? (
                  <>Speak Chinese,<br />level by level.</>
                ) : (
                  <>一级一级，<br />开口说中文。</>
                )}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-sm leading-relaxed text-[#1a1a1a]/45 sm:text-base">
                {t.hero.subtitle}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/learn/levels"
                className="group mt-10 inline-flex items-center gap-3 border-b border-[#1a1a1a]/30 pb-1.5 font-serif-sc text-lg font-bold tracking-[0.08em] text-[#1a1a1a] transition-colors duration-300 hover:border-[#2d6a4f] hover:text-[#2d6a4f] sm:text-xl"
              >
                {lang === "en" ? "Start learning" : "开始学习"}
                <IconArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          {/* 右：烫金「龙」monogram */}
          <div className="flex items-center justify-center lg:col-span-5">
            <Reveal delay={150}>
              <span
                aria-hidden
                className="gold-foil select-none font-serif-sc font-bold leading-none"
                style={{ fontSize: "clamp(11rem, 26vw, 24rem)" }}
              >
                龙
              </span>
            </Reveal>
          </div>
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

        {/* 10 级列表 — 图铺底 + 文字压图上，划过图更亮、大词前移 */}
        <div className="mx-auto max-w-7xl space-y-4 px-5 sm:px-8 lg:px-12">
          {levels.map((lv, i) => {
            const band = getBand(lv.band);
            return (
              <Reveal key={lv.n} delay={i * 30}>
                <Link
                  href={`/learn/levels#lvl-${lv.n}`}
                  className="group relative block overflow-hidden rounded-xl"
                  style={{ height: "clamp(7rem, 14vw, 11rem)" }}
                >
                  <Image
                    src={lv.image ?? "/age-topics/prek-greet.webp"}
                    alt={lv.title[lang]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    loading={i < 2 ? "eager" : "lazy"}
                    className="object-cover object-center transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-110"
                  />
                  {/* 宣纸罩：划过变亮 */}
                  <div className="absolute inset-0 bg-[#faf7f2]/60 transition-colors duration-500 group-hover:bg-[#faf7f2]/25" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/25 to-transparent" />
                  {/* 文字压图上 */}
                  <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-10">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-inter text-xs font-semibold tabular-nums tracking-[0.2em] text-[#c9a24a] sm:text-sm">
                        {String(lv.n).padStart(2, "0")}
                      </span>
                      <span className="font-serif-sc text-2xl font-bold text-[#1a1a1a] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                        {lv.title[lang]}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {band && (
                        <span className="hidden rounded-full bg-[#faf7f2]/80 px-3 py-1 font-inter text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[#2d6a4f] sm:block">
                          {band.name[lang]}
                        </span>
                      )}
                      <IconArrowRight size={20} className="text-[#1a1a1a]/40 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-[#2d6a4f]" />
                    </div>
                  </div>
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

        {/* 三角色图文卡 — 图铺底 + 文字压图上 */}
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          {[
            { href: "/members?tab=kids", img: "/age-topics/g15-reunion.webp", num: "01", title: { en: "Kids", zh: "家长 · 儿童" }, desc: { en: "Pre-K to Grade 6 — textbook units with poems, stories, tests", zh: "学前到六年级 — 教材式单元，含古诗、故事、试卷" } },
            { href: "/members?tab=teachers", img: "/age-topics/g68-region.webp", num: "02", title: { en: "Teachers", zh: "教师" }, desc: { en: "Lesson plans, poems, history, culture notes, printable tests", zh: "教案、古诗、历史、文化注、可打印试卷" } },
            { href: "/members?tab=self", img: "/age-topics/g912-object.webp", num: "03", title: { en: "Self-Study", zh: "自学" }, desc: { en: "Beginner to Advanced, HSK-aligned — teens & adults", zh: "入门到高级，对标 HSK — 青少年与成人" } },
          ].map((item, i) => (
            <Reveal key={item.num} delay={i * 60}>
              <Link
                href={item.href}
                className="group relative block overflow-hidden rounded-xl"
                style={{ height: "clamp(16rem, 24vw, 22rem)" }}
              >
                <Image
                  src={item.img}
                  alt={item.title[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  loading={i === 0 ? "eager" : "lazy"}
                  className="object-cover object-center transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/25 to-transparent transition-colors duration-500 group-hover:from-[#1a1a1a]/70" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="font-inter text-[0.62rem] font-semibold tabular-nums tracking-[0.25em] text-[#e8d089]">{item.num}</span>
                  <h3 className="mt-1 font-serif-sc text-2xl font-bold text-white transition-transform duration-500 group-hover:translate-x-1.5 sm:text-3xl">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc[lang]}</p>
                </div>
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
