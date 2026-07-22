"use client";

// 中文学习等级系统：用 1–10 级取代按年龄，因为十几岁才开始学的人也从 1 级走起。
// 结构 = 篇章 → 等级 → 课(学什么 + 作业)。顶部一条“汉字三千年”演化时间线讲清中文怎么走到今天。
// 每级可展开看课表、可发音词、本级产出与配套下载；篇章 chips 随滚动高亮，点任意一级可锚点定位。

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { SpeakButton, WordChip } from "@/components/Speak";
import { IconArrowRight, IconDownload, IconCheck } from "@/components/icons";
import { bands, levels, getBand, type Level } from "@/lib/levels";
import { getResource } from "@/lib/learningPaths";

type Bi<T> = Record<"en" | "zh", T>;

const EVOLUTION: { era: Bi<string>; when: Bi<string>; char: string; note: Bi<string>; trait: Bi<string> }[] = [
  { era: { en: "Oracle bone", zh: "甲骨文" }, when: { en: "c. 1200 BCE", zh: "约公元前 1200 年" }, char: "日", note: { en: "Carved on bone and shell — thin, angular, still close to a picture.", zh: "刻在龟甲兽骨上——细瘦、方折，还像一幅画。" }, trait: { en: "picture → line", zh: "图画 → 线条" } },
  { era: { en: "Bronze", zh: "金文" }, when: { en: "c. 1000 BCE", zh: "约公元前 1000 年" }, char: "月", note: { en: "Cast into bronze vessels — rounder, fuller, more confident strokes.", zh: "铸在青铜器上——笔画更圆、更饱满、更笃定。" }, trait: { en: "angular → round", zh: "方折 → 圆转" } },
  { era: { en: "Seal script", zh: "小篆" }, when: { en: "221 BCE", zh: "公元前 221 年" }, char: "山", note: { en: "One empire, one script — even, symmetrical, tall and elegant.", zh: "书同文——匀称、对称、修长而典雅。" }, trait: { en: "many → one standard", zh: "多样 → 统一" } },
  { era: { en: "Clerical", zh: "隶书" }, when: { en: "c. 200 BCE", zh: "约公元前 200 年" }, char: "水", note: { en: "Flattened and squared for speed — the birth of the modern boxy shape.", zh: "为求快而压扁、变方——现代方块字的诞生。" }, trait: { en: "round → square", zh: "圆转 → 方折" } },
  { era: { en: "Regular", zh: "楷书" }, when: { en: "c. 200 CE → now", zh: "约公元 200 年至今" }, char: "马", note: { en: "Clear, balanced, printable — the script you and I write today.", zh: "清晰、端正、可印刷——你我今天写的字。" }, trait: { en: "the shape we use", zh: "沿用至今" } },
];

function useActiveBand(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v) setActive(v.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function LevelCard({ lv, defaultOpen }: { lv: Level; defaultOpen: boolean }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(defaultOpen);
  const band = getBand(lv.band);
  const resource = lv.resourceSlug ? getResource(lv.resourceSlug) : undefined;
  const dl = lang === "en" ? { a4: "A4 PDF", letter: "US Letter" } : { a4: "A4 PDF", letter: "US Letter" };

  return (
    <div
      id={`lvl-${lv.n}`}
      className="scroll-mt-28 group/lv rounded-2xl border border-teal/12 bg-white transition-all duration-300 hover:border-[#b3121f]/35 hover:shadow-[0_22px_50px_-34px_rgba(157,15,27,0.55)]"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-5 p-5 text-left sm:p-6"
      >
        <span className="font-nunito text-4xl font-extrabold leading-none text-[#b3121f]/25 tabular-nums transition-colors duration-300 group-hover/lv:text-[#b3121f]/50 sm:text-5xl">
          {String(lv.n).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-nunito text-xl font-extrabold text-ink sm:text-2xl">{lv.title[lang]}</h3>
            {band && <span className={`rounded-full bg-teal/8 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider ${band.accent}`}>{band.name[lang]}</span>}
          </div>
          <p className="mt-1 text-sm text-ink-light leading-relaxed">{lv.tagline[lang]}</p>
        </div>
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 shrink-0 text-teal transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-teal/10 px-5 pb-6 pt-5 sm:px-6">
          {/* 课表：学什么 + 作业 */}
          <ol className="space-y-3">
            {lv.lessons.map((lesson, i) => (
              <li key={i} className="rounded-xl bg-cream/70 p-4">
                <p className="font-nunito text-sm font-bold text-[#b3121f]">{lesson.title[lang]}</p>
                <p className="mt-1.5 text-sm text-ink leading-relaxed">
                  <span className="font-semibold text-teal">{lang === "en" ? "Learn · " : "学 · "}</span>
                  {lesson.learn[lang]}
                </p>
                <p className="mt-1.5 flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm text-ink leading-relaxed">
                  <span className="mt-0.5 shrink-0 text-amber-600">✎</span>
                  <span>
                    <span className="font-semibold text-amber-700">{lang === "en" ? "Homework · " : "作业 · "}</span>
                    {lesson.practice[lang]}
                  </span>
                </p>
              </li>
            ))}
          </ol>

          {/* 可发音词 + 产出 + 下载 */}
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-2.5 font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-teal/70">
                {lang === "en" ? "Words in this level · tap to hear" : "本级的字 · 点一下听"}
              </p>
              <div className="flex flex-wrap gap-2">
                {lv.words.map((w) => (
                  <WordChip key={w.char} word={w} variant="inline" />
                ))}
              </div>
              <p className="mt-4 flex items-start gap-2 text-sm text-ink-light leading-relaxed">
                <IconCheck size={16} className="mt-0.5 shrink-0 text-teal" />
                <span>
                  <span className="font-semibold text-ink">{lang === "en" ? "By the end · " : "学完能 · "}</span>
                  {lv.outcome[lang]}
                </span>
              </p>
            </div>
            {resource && (
              <div className="flex flex-col gap-2 rounded-xl border border-teal/15 bg-white p-3 lg:w-52">
                <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-orange">{lang === "en" ? "Printable pack" : "可打印包"}</span>
                <span className="text-sm font-semibold text-ink leading-tight">{resource.title[lang]}</span>
                <div className="flex gap-2 pt-1">
                  <a href={resource.downloads.a4.href} download className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg bg-teal px-2.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-teal-dark">
                    <IconDownload size={13} /> {dl.a4}
                  </a>
                  <a href={resource.downloads.letter.href} download className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg border border-teal px-2.5 py-1.5 text-xs font-bold text-teal transition-colors hover:bg-teal hover:text-white">
                    <IconDownload size={13} /> {dl.letter}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function LevelSystem() {
  const { lang } = useLang();
  const active = useActiveBand(bands.map((b) => `band-${b.id}`));

  const t = {
    eyebrow: { en: "The course · 10 levels", zh: "课程 · 十个等级" },
    title: { en: "One ladder, from zero to fluent", zh: "一架梯子，从零到自如" },
    intro: {
      en: "No ages, no grades — just levels. A teenager who starts today and a six-year-old both stand on Level 1 and climb the same rungs. Each level has real lessons and homework you can print; tap any character to hear it.",
      zh: "不看年龄、不看年级，只看等级。今天才开始的十几岁孩子，和六岁的孩子，都站在第 1 级，爬同一架梯子。每一级都有真正的课和能打印的作业；点任何一个字都能听。",
    },
    earTitle: { en: "Brand new? Warm up your ear first", zh: "完全零基础？先练练耳朵" },
    earText: { en: "Before Level 1, play with the four tones, pinyin and strokes in the interactive room — no account, no pressure.", zh: "在第 1 级之前，先去互动练功房玩四声、拼音和笔画——不用注册，没有压力。" },
    earCta: { en: "Open the practice room", zh: "打开练功房" },
    evoEyebrow: { en: "How Chinese got here", zh: "中文是怎么走到今天的" },
    evoTitle: { en: "Three thousand years, one living script", zh: "三千年，一套活着的文字" },
    evoIntro: {
      en: "The characters you will learn did not appear all at once. They were carved, cast, standardised, squared and refined — the same word reshaped by the tool that wrote it. Follow one script from bone to the page in your hand.",
      zh: "你要学的这些字，不是一下子出现的。它们被刻、被铸、被统一、被压方、被打磨——同一个字，被书写它的工具一次次重塑。跟着一套文字，从骨头走到你手里的纸。",
    },
    levelsEyebrow: { en: "The ten levels", zh: "十个等级" },
    levelsTitle: { en: "Pick a rung, open it up", zh: "选一格，展开看" },
    jump: { en: "Jump to", zh: "跳到" },
  };

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-8 h-80 w-80 rounded-full bg-[#b3121f]/8 blur-3xl" />
          <div className="absolute left-1/4 top-1/2 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
          <span className="vert-calligraphy absolute bottom-2 right-6 hidden text-[14rem] leading-none text-[#b3121f]/[0.04] lg:block">级</span>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2.5 font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#b3121f] sm:text-sm">
              <span className="hero-dot inline-block h-2 w-2 rounded-full bg-amber-400" />
              {t.eyebrow[lang]}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-zh text-ink max-w-3xl !text-[clamp(2.6rem,7vw,5rem)] !leading-[0.98]">{t.title[lang]}</h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-light">{t.intro[lang]}</p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-teal/15 bg-white/70 p-5 sm:p-6 max-w-2xl">
              <div className="flex-1 min-w-0">
                <p className="font-nunito text-lg font-extrabold text-ink">{t.earTitle[lang]}</p>
                <p className="mt-1 text-sm text-ink-light leading-relaxed">{t.earText[lang]}</p>
              </div>
              <Link href="/learn/chinese" className="btn-primary shrink-0 text-sm">
                {t.earCta[lang]} <IconArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 演化时间线 */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-[#b3121f] mb-4">{t.evoEyebrow[lang]}</p>
            <h2 className="display-zh text-ink !text-3xl sm:!text-4xl max-w-2xl">{t.evoTitle[lang]}</h2>
            <p className="mt-4 max-w-3xl text-ink-light leading-relaxed">{t.evoIntro[lang]}</p>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mt-12">
              {/* 贯穿轴线 */}
              <div aria-hidden className="absolute left-0 right-0 top-[2.1rem] hidden h-0.5 bg-gradient-to-r from-[#b3121f]/30 via-amber-400/40 to-teal/30 lg:block" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {EVOLUTION.map((e, i) => (
                  <div key={e.era.en} className="group/evo relative">
                    <span aria-hidden className="absolute left-7 top-[1.7rem] hidden h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-[#b3121f] shadow lg:block" />
                    <div className="rounded-2xl border border-teal/12 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b3121f]/35 hover:shadow-[0_20px_44px_-30px_rgba(157,15,27,0.5)] lg:mt-8">
                      <div className="flex items-center justify-between">
                        <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-wider text-ink-light">{e.era[lang]}</span>
                        <span className="text-[0.62rem] font-medium text-teal/70">{e.when[lang]}</span>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="font-serif-sc text-5xl leading-none text-ink transition-colors duration-300 group-hover/evo:text-[#b3121f]">{e.char}</span>
                        <SpeakButton text={e.char} />
                      </div>
                      <p className="mt-3 text-sm text-ink-light leading-relaxed">{e.note[lang]}</p>
                      <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[0.65rem] font-semibold text-amber-700">
                        {i < EVOLUTION.length - 1 ? "→ " : "✓ "}
                        {e.trait[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 等级体系：篇章 scroll-spy + 可展开等级卡 */}
      <section className="bg-cream/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-[#b3121f] mb-4">{t.levelsEyebrow[lang]}</p>
            <h2 className="display-zh text-ink !text-3xl sm:!text-4xl">{t.levelsTitle[lang]}</h2>
          </Reveal>

          {/* 篇章跳转 chips */}
          <div className="sticky top-16 z-30 -mx-4 mt-8 overflow-x-auto border-y border-teal/10 bg-cream/90 px-4 py-3 backdrop-blur sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2">
              <span className="mr-1 shrink-0 font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-light">{t.jump[lang]}</span>
              {bands.map((b) => {
                const on = active === `band-${b.id}`;
                return (
                  <a
                    key={b.id}
                    href={`#band-${b.id}`}
                    className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                      on ? "border-[#b3121f] bg-[#b3121f] text-white" : "border-teal/20 bg-white text-ink hover:border-[#b3121f]/40 hover:text-[#b3121f]"
                    }`}
                  >
                    <span className="opacity-60">{b.index}</span> {b.name[lang]}
                  </a>
                );
              })}
            </div>
          </div>

          {/* 篇章区块 */}
          <div className="mt-10 space-y-14">
            {bands.map((b) => (
              <div key={b.id} id={`band-${b.id}`} className="scroll-mt-32">
                <div className="mb-5 flex items-baseline gap-4 border-b border-teal/15 pb-3">
                  <span className={`font-nunito text-3xl font-extrabold ${b.accent}`}>{b.index}</span>
                  <div>
                    <h3 className="font-nunito text-2xl font-extrabold text-ink">{b.name[lang]}</h3>
                    <p className="text-sm text-ink-light">{b.motto[lang]}</p>
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  {levels
                    .filter((lv) => lv.band === b.id)
                    .map((lv) => (
                      <LevelCard key={lv.n} lv={lv} defaultOpen={lv.n === 1} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
