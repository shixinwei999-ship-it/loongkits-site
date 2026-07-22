"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { kits, featuredKitIds } from "@/lib/kits";
import { levels, getBand } from "@/lib/levels";
import { KitCard } from "@/components/KitCard";
import { Reveal } from "@/components/Reveal";
import { CharacterSpotlight } from "@/components/CharacterSpotlight";
import { DecoSeal } from "@/components/Illustration";
import {
  IconDownload,
  IconPrint,
  IconHeartHands,
  IconCheck,
  IconArrowRight,
} from "@/components/icons";

const stepIcons = [IconDownload, IconPrint, IconHeartHands];
const MILESTONES = [1, 4, 7, 10];

export function HomeContent() {
  const { lang } = useLang();
  const t = home[lang];
  const featured = featuredKitIds
    .map((id) => kits.find((k) => k.id === id))
    .filter((k): k is NonNullable<typeof k> => Boolean(k));
  const milestoneLevels = MILESTONES.map((n) => levels.find((l) => l.n === n)!).filter(Boolean);

  return (
    <>
      {/* ============ HERO：纯中国红 + 右侧金龙，单一行动 ============ */}
      <section className="group/hero relative isolate flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-br from-[#c01525] via-[#b3121f] to-[#8e0d18]">
        {/* 纸纹 + 金光氛围 */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-[0.12]" />
          <div className="hero-float absolute left-[6%] top-16 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl" />
          <div className="hero-float-slow absolute left-[28%] bottom-6 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />
        </div>

        {/* 右侧金龙：品牌呼应。桌面醒目、移动端淡纹理，单一节点避免歧义 */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 flex w-[80%] items-end justify-end opacity-25 sm:w-[46%] sm:opacity-100">
          <Image
            src="/hero/golden-dragon.webp"
            alt=""
            width={954}
            height={1442}
            priority
            sizes="(max-width: 640px) 80vw, 46vw"
            className="hero-float-slow h-[112%] w-auto max-w-none object-contain object-right-bottom drop-shadow-[0_18px_60px_rgba(255,196,84,0.28)]"
          />
        </div>
        {/* 左侧压字渐变，保证白字在龙/红上都清晰 */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#8e0d18] via-[#8e0d18]/55 to-transparent sm:via-[#8e0d18]/35" />

        {/* 内容 */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 sm:text-sm">
                <span className="hero-dot inline-block h-2 w-2 rounded-full bg-amber-300" />
                {lang === "en" ? "A real Chinese course · 10 levels" : "一门真正的中文课 · 十个等级"}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-zh text-white !text-[clamp(2.9rem,8.5vw,6.25rem)] !leading-[0.96] drop-shadow-[0_2px_18px_rgba(0,0,0,0.3)]">
                {t.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-rose-50/90 sm:text-xl">{t.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="/learn/levels"
                  className="group/btn inline-flex items-center gap-2 rounded-[0.85rem] bg-white px-7 py-3.5 text-base font-bold text-[#b3121f] shadow-[0_16px_36px_-14px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-50"
                >
                  {t.hero.learnCta}
                  <IconArrowRight size={18} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href="/learn/chinese"
                  className="inline-flex items-center gap-2 rounded-[0.85rem] border-2 border-white/55 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
                >
                  {t.hero.earCta}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={330}>
              <dl className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/20 pt-6 text-xs font-medium text-rose-50/80 sm:text-sm">
                {(lang === "en"
                  ? ["10 levels, not ages", "Lessons + homework", "Tap-to-hear Chinese", "Printable PDFs"]
                  : ["十个等级，不限年龄", "有课，有作业", "点一下就听中文", "可打印 PDF"]
                ).map((label, i) => (
                  <div key={label} className="flex items-center gap-5">
                    {i > 0 && <span aria-hidden className="h-3 w-px bg-white/25" />}
                    <span>{label}</span>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <a
          href="#level-path"
          aria-label={lang === "en" ? "Scroll to explore" : "向下浏览"}
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white lg:flex"
        >
          <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.22em]">{lang === "en" ? "Explore" : "浏览"}</span>
          <svg className="hero-bounce h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* ============ 此刻一字：进来就能学一个字（深绿带） ============ */}
      <section className="relative isolate overflow-hidden bg-teal-dark py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-[0.08]" />
          <div className="hero-float absolute -left-16 top-10 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
          <div className="hero-float-slow absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
          <span className="vert-calligraphy absolute top-10 right-8 hidden text-[12rem] leading-none text-white/[0.04] lg:block">字</span>
        </div>
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2.5 font-inter text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 sm:text-sm">
                <span className="hero-dot inline-block h-2 w-2 rounded-full bg-amber-300" />
                {lang === "en" ? "Start right here · your first character" : "就从这里开始 · 你的第一个字"}
              </p>
              <h2 className="font-nunito text-3xl font-extrabold text-white sm:text-4xl">
                {lang === "en" ? "Learn one character, right now" : "现在就学会一个字"}
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                {lang === "en"
                  ? "Tap the character to hear it, watch the strokes light up in order, read a real sentence, then mark it practised. This is exactly how every lesson feels."
                  : "点这个字听发音，看笔画按顺序亮起，读一句真句子，再打个勾标记练过。每一课，都是这个感觉。"}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <CharacterSpotlight />
          </Reveal>
        </div>
      </section>

      {/* ============ 等级里程碑墙（米白带） ============ */}
      <section id="level-path" className="scroll-mt-20 bg-paper py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
            <Reveal className="max-w-2xl">
              <p className="font-inter font-semibold uppercase tracking-[0.12em] text-[#b3121f] text-xs sm:text-sm mb-5">{t.agePath.kicker}</p>
              <h2 className="display-zh text-ink !text-3xl sm:!text-5xl">{t.agePath.title}</h2>
              <p className="text-lg text-ink-light leading-relaxed mt-5">{t.agePath.desc}</p>
            </Reveal>
            <Reveal delay={80}>
              <Link href="/learn/levels" className="arrow-link text-[#b3121f] font-bold hover:underline text-base sm:text-lg">
                {t.agePath.viewAll} <IconArrowRight size={20} className="arrow" />
              </Link>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-x-7 gap-y-12">
            {milestoneLevels.map((lv, i) => {
              const band = getBand(lv.band);
              return (
                <Reveal key={lv.n} delay={i * 80}>
                  <article className="group border-t-2 border-[#b3121f]/25 pt-4">
                    <Link href={`/learn/levels#lvl-${lv.n}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b3121f]">
                      <div className="relative overflow-hidden rounded-xl bg-ink aspect-[3/2]">
                        {lv.image && (
                          <Image src={lv.image} alt={lv.title[lang]} fill loading="eager" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                        <span className="absolute top-4 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#b3121f]">
                          {lang === "en" ? `Level ${lv.n}` : `第 ${lv.n} 级`}
                        </span>
                        {band && (
                          <span className={`absolute top-4 right-5 font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] ${band.accent} rounded-full bg-white/85 px-2.5 py-1`}>
                            {band.name[lang]}
                          </span>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <h3 className="font-nunito text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{lv.title[lang]}</h3>
                          <p className="text-white/80 text-sm sm:text-base mt-1.5 leading-snug">{lv.tagline[lang]}</p>
                        </div>
                      </div>
                      <span className="arrow-link mt-4 inline-flex text-[#b3121f] font-bold">{t.agePath.cta} <IconArrowRight size={16} className="arrow" /></span>
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS（深绿带，左对齐，去居中三件套） ============ */}
      <section className="section-teal py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="font-inter font-semibold uppercase tracking-[0.14em] text-orange text-xs sm:text-sm mb-4">
                {lang === "en" ? "Three steps" : "三步上手"}
              </p>
              <h2 className="display !text-white !text-4xl sm:!text-5xl text-left">{t.howItWorks.title}</h2>
              <div className="mt-5 w-16 h-1.5 bg-orange rounded-full" aria-hidden />
            </div>
          </Reveal>
          <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            <div aria-hidden className="hidden md:block absolute top-8 left-[16%] right-[16%] border-t-2 border-dashed border-white/20" />
            {t.howItWorks.steps.map((step, index) => {
              const Ic = stepIcons[index];
              return (
                <Reveal key={index} delay={index * 120} className="group/step relative">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover/step:-translate-y-1">
                      <Ic size={30} />
                    </span>
                    <span className="font-nunito text-5xl font-extrabold leading-none text-white/15">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold text-white font-nunito">{step.title}</h3>
                  <p className="mt-2 text-white/70 leading-relaxed">{step.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED KITS（暖色带，左对齐，写实封面统一语言） ============ */}
      <section className="section-warm py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-4 mb-14">
              <div className="max-w-xl">
                <span className="chip mb-4">
                  <DecoSeal char="精" className="w-5 h-5" />
                  {lang === "en" ? "Most loved" : "最受欢迎"}
                </span>
                <h2 className="display text-ink !text-4xl sm:!text-5xl text-left">{t.featuredKits.title}</h2>
              </div>
              <Link href="/kits" className="arrow-link text-teal font-bold hover:underline text-lg">
                {t.featuredKits.viewAll} <IconArrowRight size={20} className="arrow" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {featured.map((kit, i) => (
              <Reveal key={kit.id} delay={i * 120}>
                <KitCard kit={kit} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROMISE（米白带，左对齐） ============ */}
      <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">
                {lang === "en" ? "Made for real tables" : "为真实的学习桌而做"}
              </p>
              <h2 className="display-zh text-ink !text-3xl sm:!text-4xl mb-6">{t.promise.title}</h2>
              <p className="text-lg text-ink/80 leading-relaxed mb-9 max-w-xl">{t.promise.text}</p>
              <ul className="grid sm:grid-cols-3 gap-x-8 gap-y-4 border-t border-teal/15 pt-6">
                {t.promise.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal shrink-0 mt-0.5"><IconCheck size={18} /></span>
                    <span className="text-ink text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ AUDIENCE（深绿带，左对齐大标题 + 两满块，去细线两栏） ============ */}
      <section className="section-teal py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="font-inter font-semibold uppercase tracking-[0.14em] text-orange text-xs sm:text-sm mb-4">
                {lang === "en" ? "Made for real learning contexts" : "为真实的学习场景而做"}
              </p>
              <h2 className="display !text-white !text-4xl sm:!text-5xl text-left">
                {lang === "en" ? "Two ways in, one ladder" : "两个入口，同一架梯子"}
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Link href="/families" className="group block h-full rounded-2xl bg-white p-9 sm:p-10 transition-transform duration-300 hover:-translate-y-1.5">
                <p className="font-nunito text-sm font-extrabold text-teal/40 mb-4">01</p>
                <h3 className="font-nunito text-3xl font-extrabold text-ink">{t.audience.families.title}</h3>
                <p className="text-ink-light mt-4 leading-relaxed">{t.audience.families.desc}</p>
                <span className="arrow-link text-teal font-bold mt-7 inline-flex">{t.audience.families.cta} <IconArrowRight size={18} className="arrow" /></span>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/teachers" className="group block h-full rounded-2xl bg-orange p-9 sm:p-10 text-white shadow-[0_24px_50px_-20px_rgba(244,162,97,0.7)] transition-transform duration-300 hover:-translate-y-1.5">
                <p className="font-nunito text-sm font-extrabold text-white/50 mb-4">02</p>
                <h3 className="font-nunito text-3xl font-extrabold">{t.audience.teachers.title}</h3>
                <p className="text-white/85 mt-4 leading-relaxed">{t.audience.teachers.desc}</p>
                <span className="arrow-link font-bold mt-7 inline-flex">{t.audience.teachers.cta} <IconArrowRight size={18} className="arrow" /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FREE（暖色带，左对齐，去居中） ============ */}
      <section className="section-warm py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2.5 mb-5">
                <DecoSeal char="赠" className="w-9 h-9" />
                <span className="font-inter font-semibold uppercase tracking-[0.14em] text-teal text-xs sm:text-sm">
                  {lang === "en" ? "Free to start" : "免费起步"}
                </span>
              </span>
              <h2 className="display text-ink !text-4xl sm:!text-5xl text-left">{t.freeSample.title}</h2>
              <p className="text-lg text-ink-light mt-5 leading-relaxed max-w-xl">{t.freeSample.desc}</p>
              <Link href="/free/zodiac-animals" className="btn-primary mt-8 inline-flex text-base">
                {t.freeSample.cta} <IconArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
