"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";
import { kits, featuredKitIds } from "@/lib/kits";
import { levels, getBand } from "@/lib/levels";
import { KitCard } from "@/components/KitCard";
import { Reveal } from "@/components/Reveal";
import { DecoCloud, DecoSeal } from "@/components/Illustration";
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
      {/* ============ HERO：喜庆红全出血，单一行动 ============ */}
      <section className="group/hero relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[#b3121f]">
        {/* 全出血喜庆主视觉 */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/hero/festive-hero.webp"
            alt={t.hero.mascotAlt}
            fill
            priority
            sizes="100vw"
            className="hero-kenburns object-cover object-[78%_center]"
          />
          {/* 左侧深红压字 + 整体节庆暖调 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9c0f1b] via-[#b3121f]/85 to-transparent lg:via-[#b3121f]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#9c0f1b]/70 via-transparent to-[#9c0f1b]/30" />
        </div>

        {/* ambient：浮动金光 + 竖排水印 */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="hero-float absolute right-[12%] top-16 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="hero-float-slow absolute left-[8%] bottom-10 h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
          <span className="vert-calligraphy absolute bottom-6 right-6 hidden text-[13rem] leading-none text-amber-200/10 lg:block">
            学
          </span>
        </div>

        {/* 内容：白字，强字号对比，单一主行动 */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2.5 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 sm:text-sm">
                <span className="hero-dot inline-block h-2 w-2 rounded-full bg-amber-300" />
                {lang === "en" ? "A real Chinese course · 10 levels" : "一门真正的中文课 · 十个等级"}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-zh text-white !text-[clamp(2.9rem,8.5vw,6.25rem)] !leading-[0.96] drop-shadow-[0_2px_18px_rgba(0,0,0,0.25)]">
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

        {/* scroll cue */}
        <a
          href="#level-path"
          aria-label={lang === "en" ? "Scroll to explore" : "向下浏览"}
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white lg:flex"
        >
          <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.22em]">
            {lang === "en" ? "Explore" : "浏览"}
          </span>
          <svg className="hero-bounce h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* ============ 等级里程碑墙：1→10 的代表级，大图形式 ============ */}
      <section id="level-path" className="scroll-mt-20 bg-paper py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
            <Reveal className="max-w-2xl">
              <p className="font-inter font-semibold uppercase tracking-[0.12em] text-[#b3121f] text-xs sm:text-sm mb-5">
                {t.agePath.kicker}
              </p>
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
                          <Image
                            src={lv.image}
                            alt={lv.title[lang]}
                            fill
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                          />
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
                      <span className="arrow-link mt-4 inline-flex text-[#b3121f] font-bold">
                        {t.agePath.cta} <IconArrowRight size={16} className="arrow" />
                      </span>
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS（深色翻页） ============ */}
      <section className="section-teal py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="chip !bg-white/10 !text-white !border-white/20 mb-5">
                {lang === "en" ? "Three steps" : "三步上手"}
              </span>
              <h2 className="display !text-white !text-4xl sm:!text-5xl mb-4">{t.howItWorks.title}</h2>
              <div className="w-16 h-1.5 bg-orange rounded-full mx-auto" aria-hidden />
            </div>
          </Reveal>
          <div className="relative grid md:grid-cols-3 gap-12">
            <div aria-hidden className="hidden md:block absolute top-12 left-[18%] right-[18%] border-t-2 border-dashed border-white/25" />
            {t.howItWorks.steps.map((step, index) => {
              const Ic = stepIcons[index];
              return (
                <Reveal key={index} delay={index * 130} className="group/step relative text-center">
                  <div className="icon-stage w-24 h-24 mx-auto mb-7 bg-white text-teal relative z-10 shadow-[0_16px_30px_-12px_rgb(0_0_0/0.5)]">
                    <Ic size={44} />
                  </div>
                  <span className="block text-sm font-extrabold text-orange tracking-[0.3em] mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-2 font-nunito">{step.title}</h3>
                  <p className="text-white/70">{step.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED KITS ============ */}
      <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-4 mb-14">
              <div>
                <span className="chip mb-4">
                  <DecoSeal char="精" className="w-5 h-5" />
                  {lang === "en" ? "Most loved" : "最受欢迎"}
                </span>
                <h2 className="display text-ink !text-4xl sm:!text-5xl">{t.featuredKits.title}</h2>
              </div>
              <Link href="/kits" className="arrow-link text-teal font-bold hover:underline text-lg">
                {t.featuredKits.viewAll} <IconArrowRight size={20} className="arrow" />
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((kit, i) => (
              <Reveal key={kit.id} delay={i * 120}>
                <KitCard kit={kit} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROMISE ============ */}
      <section className="section-warm py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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

      {/* ============ AUDIENCE ============ */}
      <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter font-semibold uppercase tracking-[0.12em] text-teal text-xs sm:text-sm mb-5">
            {lang === "en" ? "Made for real learning contexts" : "为真实的学习场景而做"}
          </p>
          <div className="grid md:grid-cols-2 border-y border-teal/20">
            <Reveal>
              <Link href="/families" className="group block py-10 md:pr-12 md:border-r border-teal/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
                <p className="text-sm font-semibold text-teal mb-4">01</p>
                <h3 className="font-nunito text-3xl font-extrabold text-ink">{t.audience.families.title}</h3>
                <p className="text-ink-light mt-4 max-w-md leading-relaxed">{t.audience.families.desc}</p>
                <span className="arrow-link text-teal font-bold mt-7">
                  {t.audience.families.cta} <IconArrowRight size={18} className="arrow" />
                </span>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/teachers" className="group block py-10 md:pl-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
                <p className="text-sm font-semibold text-orange mb-4">02</p>
                <h3 className="font-nunito text-3xl font-extrabold text-ink">{t.audience.teachers.title}</h3>
                <p className="text-ink-light mt-4 max-w-md leading-relaxed">{t.audience.teachers.desc}</p>
                <span className="arrow-link text-teal font-bold mt-7">
                  {t.audience.teachers.cta} <IconArrowRight size={18} className="arrow" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FREE ============ */}
      <section className="bg-paper py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <DecoCloud className="absolute top-12 left-8 w-24 opacity-70 float-2" />
        <Reveal>
          <div className="max-w-3xl mx-auto text-center relative">
            <DecoSeal char="赠" className="w-14 h-14 mx-auto mb-7 float-1" />
            <h2 className="display text-ink !text-4xl sm:!text-5xl mb-5">{t.freeSample.title}</h2>
            <p className="text-lg text-ink-light mb-7 max-w-xl mx-auto">{t.freeSample.desc}</p>
            <Link href="/free/zodiac-animals" className="btn-primary text-base">
              {t.freeSample.cta} <IconArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
