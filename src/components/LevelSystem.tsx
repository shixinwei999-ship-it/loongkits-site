"use client";

// 中文学习等级系统：用 1–10 级取代按年龄，因为十几岁才开始学的人也从 1 级走起。
// 闭环逻辑：点任意一关 = 进入该级（单开 + 平滑滚动 + 节点高亮“进行中”）；学完本级小测，
// 点“通关并进入下一级”会把进度记在这台设备（localStorage），梯子节点点亮为“已通关”，
// 并自动展开下一关——有进、有练、有结、有下一关，形成完整闭环。顶部进度条反映通关数。
// 每关 = 技能标签 + 课表(学什么+作业) + 即时反馈小测 + 可发音字 + 本级产出 + 可打印包。
// 顶部“汉字三千年”演化时间线讲清中文怎么走到今天；3 题自评帮你定位起点。

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { SpeakButton, WordChip } from "@/components/Speak";
import { CountUp } from "@/components/CountUp";
import { Quiz } from "@/components/Quiz";
import { IconArrowRight, IconDownload, IconCheck } from "@/components/icons";
import {
  bands,
  levels,
  getBand,
  courseStats,
  placementQuiz,
  placementLevel,
  type Level,
} from "@/lib/levels";
import { getResource } from "@/lib/learningPaths";

type Bi<T> = Record<"en" | "zh", T>;

const PROGRESS_KEY = "lk-levels-done-v1";

function useLevelProgress() {
  const [done, setDone] = useState<Set<number>>(new Set());
  useEffect(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      if (raw) setDone(new Set(JSON.parse(raw) as number[]));
    } catch {
      /* ignore */
    }
  }, []);
  const markDone = (n: number) =>
    setDone((prev) => {
      const next = new Set(prev);
      next.add(n);
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify([...next]));
      } catch {
        /* ignore */
      }
      return next;
    });
  const reset = () => {
    setDone(new Set());
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch {
      /* ignore */
    }
  };
  return { done, markDone, reset };
}

function scrollToLevel(n: number) {
  // 等 DOM 展开后再滚，sticky 顶栏由 scroll-mt 抵消。
  requestAnimationFrame(() => {
    document.getElementById(`lvl-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

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

function LevelCard({
  lv,
  open,
  done,
  onEnter,
  onToggle,
  onAdvance,
  isLastLevel,
}: {
  lv: Level;
  open: boolean;
  done: boolean;
  onEnter: () => void;
  onToggle: () => void;
  onAdvance: () => void;
  isLastLevel: boolean;
}) {
  const { lang } = useLang();
  const band = getBand(lv.band);
  const resource = lv.resourceSlug ? getResource(lv.resourceSlug) : undefined;

  // 节点三态：进行中(展开) / 已通关 / 未开始
  const nodeState = open ? "active" : done ? "done" : "todo";

  return (
    <div className="relative grid grid-cols-[2.75rem_1fr] gap-3 sm:gap-4">
      {/* 梯子节点 + 连线 */}
      <div className="flex flex-col items-center">
        <span aria-hidden className="h-6 w-0.5 bg-gradient-to-b from-transparent to-[#b3121f]/25" />
        <button
          type="button"
          onClick={onEnter}
          aria-expanded={open}
          aria-label={`${lang === "en" ? "Enter Level" : "进入第"} ${lv.n}`}
          title={lang === "en" ? `Enter Level ${lv.n}` : `进入第 ${lv.n} 级`}
          className={`relative z-10 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full font-nunito text-sm font-extrabold transition-all duration-300 hover:scale-110 ${
            nodeState === "active"
              ? "bg-[#b3121f] text-white shadow-[0_10px_24px_-10px_rgba(157,15,27,0.85)] ring-4 ring-[#b3121f]/15"
              : nodeState === "done"
                ? "bg-teal text-white shadow-[0_8px_18px_-10px_rgba(45,106,79,0.8)]"
                : "border-2 border-[#b3121f]/30 bg-white text-[#b3121f] hover:border-[#b3121f]"
          }`}
        >
          {nodeState === "active" && <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#b3121f]/30" />}
          <span className="relative">{nodeState === "done" ? "✓" : lv.n}</span>
        </button>
        <span aria-hidden className="w-0.5 flex-1 bg-gradient-to-b from-[#b3121f]/25 to-[#b3121f]/10" />
      </div>

      {/* 卡 */}
      <div
        id={`lvl-${lv.n}`}
        className={`scroll-mt-28 mb-5 rounded-2xl border bg-white transition-all duration-300 ${
          open ? "border-[#b3121f]/40 shadow-[0_22px_50px_-34px_rgba(157,15,27,0.55)]" : done ? "border-teal/30" : "border-teal/12 hover:border-[#b3121f]/30"
        }`}
      >
        <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full cursor-pointer items-center gap-4 p-5 text-left sm:p-6">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-nunito text-xl font-extrabold text-ink sm:text-2xl">{lv.title[lang]}</h3>
              {band && <span className={`rounded-full bg-teal/8 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider ${band.accent}`}>{band.name[lang]}</span>}
              {done && !open && (
                <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-0.5 text-[0.62rem] font-bold text-teal">
                  <IconCheck size={11} /> {lang === "en" ? "Cleared" : "已通关"}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-ink-light leading-relaxed">{lv.tagline[lang]}</p>
          </div>
          <span className="hidden shrink-0 rounded-lg bg-[#b3121f] px-3 py-1.5 text-xs font-bold text-white sm:inline-flex sm:items-center sm:gap-1">
            {open ? (lang === "en" ? "Close" : "收起") : (lang === "en" ? "Enter" : "进入")} <IconArrowRight size={13} className={open ? "rotate-90" : ""} />
          </span>
          <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 text-teal transition-transform duration-300 sm:hidden ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className="space-y-5 border-t border-teal/10 px-5 pb-6 pt-5 sm:px-6">
            {/* 技能标签云 */}
            <div className="flex flex-wrap gap-2">
              {lv.skillTags[lang].map((tag) => (
                <span key={tag} className="rounded-full border border-[#b3121f]/15 bg-[#b3121f]/5 px-3 py-1 text-xs font-semibold text-[#b3121f]">{tag}</span>
              ))}
            </div>

            {/* 课表 */}
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
                  <div className="mt-3 flex justify-end">
                    <Link
                      href={`/learn/level/${lv.n}/lesson/${i + 1}`}
                      className="inline-flex items-center gap-1 rounded-lg border border-teal/30 px-3 py-1.5 text-xs font-bold text-teal transition-colors hover:bg-teal hover:text-white"
                    >
                      {lv.n <= 1
                        ? (lang === "en" ? "Enter lesson" : "进入本课")
                        : (lang === "en" ? "View" : "查看")}
                      <IconArrowRight size={13} />
                    </Link>
                  </div>
                </li>
              ))}
            </ol>

            {/* 本级小测 */}
            <Quiz
              questions={lv.quiz}
              compact
              intro={lang === "en" ? "Quick check — instant feedback, no saving." : "随堂小测——即时反馈，不存数据。"}
            />

            {/* 可发音词 + 产出 + 下载 */}
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
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
                      <IconDownload size={13} /> A4
                    </a>
                    <a href={resource.downloads.letter.href} download className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg border border-teal px-2.5 py-1.5 text-xs font-bold text-teal transition-colors hover:bg-teal hover:text-white">
                      <IconDownload size={13} /> Letter
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 通关闭环 */}
            <div className="flex flex-wrap items-center gap-4 rounded-2xl border-2 border-dashed border-teal/30 bg-gradient-to-r from-teal/[0.05] to-amber-50/60 p-5">
              <div className="flex-1 min-w-[12rem]">
                {done ? (
                  <p className="flex items-center gap-2 font-nunito text-base font-extrabold text-teal">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal text-white"><IconCheck size={14} /></span>
                    {lang === "en" ? "Level cleared — well done." : "本级已通关，干得漂亮。"}
                  </p>
                ) : (
                  <p className="text-sm text-ink-light leading-relaxed">
                    {lang === "en" ? "Finished the lessons and the check above? Clear this level and unlock the next rung." : "上面的课和小测做完了？通关本级，点亮下一格。"}
                  </p>
                )}
              </div>
              {isLastLevel ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2.5 text-sm font-extrabold text-[#7a2a00] shadow-sm">
                  🎉 {lang === "en" ? "You reached the top" : "你已登顶"}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={onAdvance}
                  className="group/adv inline-flex items-center gap-2 rounded-xl bg-[#b3121f] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_26px_-12px_rgba(157,15,27,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9c0f1b]"
                >
                  {done
                    ? (lang === "en" ? `Re-enter Level ${lv.n + 1}` : `再进第 ${lv.n + 1} 级`)
                    : (lang === "en" ? `Clear & go to Level ${lv.n + 1}` : `通关 · 进入第 ${lv.n + 1} 级`)}
                  <IconArrowRight size={16} className="transition-transform duration-200 group-hover/adv:translate-x-1" />
                </button>
              )}
              <span className="w-full text-[0.68rem] text-ink-light/80 sm:w-auto">
                {lang === "en" ? "Progress is saved on this device only." : "通关进度只记在这台设备上。"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function LevelSystem() {
  const { lang } = useLang();
  const active = useActiveBand(bands.map((b) => `band-${b.id}`));
  const { done, markDone, reset } = useLevelProgress();
  const [openLevel, setOpenLevel] = useState<number | null>(1);

  const enter = (n: number) => {
    setOpenLevel(n);
    scrollToLevel(n);
  };
  const toggle = (n: number) => {
    setOpenLevel((cur) => {
      const next = cur === n ? null : n;
      if (next) scrollToLevel(next);
      return next;
    });
  };
  const advance = (n: number) => {
    markDone(n);
    if (n < levels.length) enter(n + 1);
  };

  // 支持从锚点 #lvl-n 进入对应等级（首页/自评跳转过来时自动展开）。
  useEffect(() => {
    const fromHash = () => {
      const m = /^#lvl-(\d+)$/.exec(window.location.hash);
      if (m) enter(Number(m[1]));
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cleared = done.size;
  const total = levels.length;
  const pct = Math.round((cleared / total) * 100);

  const t = {
    eyebrow: { en: "The course · 10 levels", zh: "课程 · 十个等级" },
    title: { en: "One ladder, from zero to fluent", zh: "一架梯子，从零到自如" },
    intro: {
      en: "No ages, no grades — just levels. Tap any rung to enter that level, work its lessons and check, then clear it to light the next one. A teenager who starts today and a six-year-old both stand on Level 1.",
      zh: "不看年龄、不看年级，只看等级。点任意一格进入该级，上课、做小测，通关后点亮下一格。今天才开始的十几岁孩子，和六岁的孩子，都站在第 1 级。",
    },
    progressLabel: { en: "Your progress", zh: "你的进度" },
    progressOf: { en: "cleared", zh: "已通关" },
    resetProgress: { en: "Reset", zh: "重置" },
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
    levelsTitle: { en: "Tap a rung to enter", zh: "点一格，进入这一关" },
    jump: { en: "Jump to", zh: "跳到" },
    placeEyebrow: { en: "Not sure where to start?", zh: "不知道从哪级开始？" },
    placeTitle: { en: "Three questions place you on the ladder", zh: "三道题，把你放到梯子上" },
    placeNote: { en: "A rough nudge, not a verdict — the practice room refines it.", zh: "只是个大致参考，不是定论——练功房能帮你细调。" },
    placeStart: { en: "Start the placement check", zh: "开始分级小测" },
    placeResult: { en: "We'd start you at", zh: "我们建议从" },
    placeResultTail: { en: "begin", zh: "开始" },
    placeRefine: { en: "Refine it in the practice room", zh: "去练功房细调" },
    statBands: { en: "stages", zh: "个篇章" },
    statLevels: { en: "levels", zh: "个等级" },
    statLessons: { en: "lessons", zh: "节课" },
    statChars: { en: "tap-to-hear words", zh: "个可听字" },
    statYears: { en: "years of script", zh: "年文字史" },
  };

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="paper-grain absolute inset-0 opacity-50" />
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

          {/* 活数字统计条 */}
          <Reveal delay={220}>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-teal/12 bg-teal/10 sm:grid-cols-5">
              {[
                { v: courseStats.bands, s: "", label: t.statBands },
                { v: courseStats.levels, s: "", label: t.statLevels },
                { v: courseStats.lessons, s: "", label: t.statLessons },
                { v: courseStats.characters, s: "+", label: t.statChars },
                { v: courseStats.years, s: "+", label: t.statYears },
              ].map((stat, i) => (
                <div key={i} className="bg-white px-4 py-5 text-center">
                  <dd className="font-nunito text-3xl font-extrabold text-[#b3121f] sm:text-4xl">
                    <CountUp to={stat.v} suffix={stat.s} />
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-ink-light">{stat.label[lang]}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-teal/15 bg-white/70 p-5 sm:p-6 max-w-2xl">
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
                        {i < EVOLUTION.length - 1 ? "→ " : "✓ "}{e.trait[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 分级自评 */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-[#b3121f]/15 bg-gradient-to-br from-[#fffaf6] to-[#fdf0ea] p-7 shadow-[0_24px_60px_-40px_rgba(157,15,27,0.5)] sm:p-9">
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-[#b3121f]">{t.placeEyebrow[lang]}</p>
              <h2 className="mt-2 font-nunito text-2xl font-extrabold text-ink sm:text-3xl">{t.placeTitle[lang]}</h2>
              <p className="mt-2 text-sm text-ink-light">{t.placeNote[lang]}</p>
              <div className="mt-5">
                <Quiz
                  questions={placementQuiz}
                  intro={t.placeStart[lang]}
                  renderResult={(score) => {
                    const lvl = placementLevel(score);
                    return (
                      <div>
                        <p className="text-sm text-ink">
                          {t.placeResult[lang]}{" "}
                          <span className="font-nunito text-2xl font-extrabold text-[#b3121f]">{lang === "en" ? `Level ${lvl}` : `第 ${lvl} 级`}</span>{" "}
                          {t.placeResultTail[lang]}（{score}/{placementQuiz.length}）
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <button type="button" onClick={() => enter(lvl)} className="inline-flex items-center gap-1.5 rounded-lg bg-[#b3121f] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#9c0f1b]">
                            {lang === "en" ? `Enter Level ${lvl}` : `进入第 ${lvl} 级`} <IconArrowRight size={15} />
                          </button>
                          <Link href="/learn/chinese" className="inline-flex items-center gap-1.5 rounded-lg border border-teal px-4 py-2 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white">
                            {t.placeRefine[lang]}
                          </Link>
                        </div>
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 等级梯子 */}
      <section className="bg-cream/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-[#b3121f] mb-4">{t.levelsEyebrow[lang]}</p>
                <h2 className="display-zh text-ink !text-3xl sm:!text-4xl">{t.levelsTitle[lang]}</h2>
              </div>
              {/* 进度 */}
              <div className="flex items-center gap-3 rounded-full border border-teal/15 bg-white px-4 py-2">
                <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink-light">{t.progressLabel[lang]}</span>
                <span className="font-nunito text-lg font-extrabold text-[#b3121f]">{cleared}/{total}</span>
                <span aria-hidden className="h-1.5 w-20 overflow-hidden rounded-full bg-teal/10">
                  <span className="block h-full rounded-full bg-teal transition-all duration-500" style={{ width: `${pct}%` }} />
                </span>
                {cleared > 0 && (
                  <button type="button" onClick={reset} className="text-[0.62rem] font-semibold text-ink-light underline-offset-2 hover:text-[#b3121f] hover:underline">
                    {t.resetProgress[lang]}
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          {/* 篇章跳转 chips */}
          <div className="sticky top-16 z-30 -mx-4 mt-8 overflow-x-auto border-y border-teal/10 bg-cream/90 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:px-4">
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

          {/* 篇章区块 + 梯子 */}
          <div className="mt-10 space-y-12">
            {bands.map((b) => {
              const bandLevels = levels.filter((lv) => lv.band === b.id);
              return (
                <div key={b.id} id={`band-${b.id}`} className="scroll-mt-32">
                  <div className="mb-5 flex items-baseline gap-4 border-b border-teal/15 pb-3">
                    <span className={`font-nunito text-3xl font-extrabold ${b.accent}`}>{b.index}</span>
                    <div>
                      <h3 className="font-nunito text-2xl font-extrabold text-ink">{b.name[lang]}</h3>
                      <p className="text-sm text-ink-light">{b.motto[lang]}</p>
                    </div>
                  </div>
                  <div>
                    {bandLevels.map((lv) => (
                      <LevelCard
                        key={lv.n}
                        lv={lv}
                        open={openLevel === lv.n}
                        done={done.has(lv.n)}
                        onEnter={() => enter(lv.n)}
                        onToggle={() => toggle(lv.n)}
                        onAdvance={() => advance(lv.n)}
                        isLastLevel={lv.n === total}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
