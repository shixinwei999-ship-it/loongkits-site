"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { WordChip } from "@/components/Speak";
import { IconArrowRight, IconCheck, IconClock } from "@/components/icons";
import type { Level, Lesson } from "@/lib/levels";

function useLessonComplete(n: number, k: number) {
  const key = `${n}-${k}`;
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("lk-lessons-done-v1");
      if (raw) {
        const set = new Set<string>(JSON.parse(raw) as string[]);
        setCompleted(set.has(key));
      }
    } catch {
      /* ignore */
    }
  }, [key]);
  const mark = () => {
    setCompleted(true);
    try {
      const raw = localStorage.getItem("lk-lessons-done-v1");
      const set = new Set<string>(raw ? JSON.parse(raw) as string[] : []);
      set.add(key);
      localStorage.setItem("lk-lessons-done-v1", JSON.stringify([...set]));
    } catch {
      /* ignore */
    }
  };
  const unmark = () => {
    setCompleted(false);
    try {
      const raw = localStorage.getItem("lk-lessons-done-v1");
      if (raw) {
        const set = new Set<string>(JSON.parse(raw) as string[]);
        set.delete(key);
        localStorage.setItem("lk-lessons-done-v1", JSON.stringify([...set]));
      }
    } catch {
      /* ignore */
    }
  };
  return { completed, mark, unmark };
}

export function LessonPage({
  level,
  lesson,
  k,
  total,
  interactive,
  backHref,
  nextHref,
  isReal,
}: {
  level: Level;
  lesson: Lesson;
  k: number;
  total: number;
  interactive: React.ReactNode;
  backHref: string;
  nextHref: string | null;
  isReal: boolean;
}) {
  const { lang } = useLang();
  const { completed, mark, unmark } = useLessonComplete(level.n, k);

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-[#b3121f]/8 blur-3xl" />
          <div className="absolute left-1/4 top-1/2 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
          <span className="vert-calligraphy absolute bottom-2 right-6 hidden text-[12rem] leading-none text-[#b3121f]/[0.04] lg:block">
            {lang === "en" ? "L" : "课"}
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link href={backHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
              <IconArrowRight size={14} className="rotate-180" /> {lang === "en" ? `Back to Level ${level.n}` : `返回第 ${level.n} 级`}
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full bg-[#b3121f] px-3 py-1 font-inter text-[0.62rem] font-bold uppercase tracking-wider text-white">
                {lang === "en" ? `Level ${level.n}` : `第 ${level.n} 级`}
              </span>
              <span className="text-xs text-ink-light">{k}/{total}</span>
              {completed && (
                <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-teal">
                  <IconCheck size={11} /> {lang === "en" ? "Completed" : "已学"}
                </span>
              )}
            </div>
            <h1 className="display-zh text-ink mt-4 !text-[clamp(2rem,6vw,4rem)] !leading-[0.98]">{lesson.title[lang]}</h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-light">{lesson.learn[lang]}</p>
          </Reveal>
        </div>
      </section>

      {/* 互动区 */}
      {isReal && interactive && (
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-teal/12 bg-white/80 p-6 sm:p-8 shadow-[0_24px_60px_-32px_rgb(31_74_56/0.5)]">
                <div className="mb-5 flex items-center gap-2">
                  <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#b3121f]">
                    {lang === "en" ? "Practice" : "练一练"}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-teal/10" />
                </div>
                {interactive}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 建设中提示 */}
      {!isReal && (
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Reveal delay={80}>
              <div className="rounded-2xl border-2 border-dashed border-teal/20 bg-cream/60 p-12 text-center">
                <p className="font-nunito text-2xl font-extrabold text-ink-light">
                  {lang === "en" ? "Lesson in progress" : "此课正在制作中"}
                </p>
                <p className="mt-4 text-sm text-ink-light leading-relaxed max-w-md mx-auto">
                  {lang === "en"
                    ? "This lesson is being built. In the meantime, head to the practice room or the level overview."
                    : "本课正在制作中。你先去练功房试试，或回到等级总览。"}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/learn/chinese" className="btn-primary text-sm">{lang === "en" ? "Go to practice room" : "去练功房"} <IconArrowRight size={16} /></Link>
                  <Link href={backHref} className="btn-secondary text-sm">{lang === "en" ? "Back to level" : "返回等级"} <IconArrowRight size={16} /></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 作业 */}
      <section className="section-teal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-4">
                  {lang === "en" ? "Homework" : "作业"}
                </p>
                <div className="flex items-start gap-3 rounded-xl bg-white/10 p-5 text-white/90 leading-relaxed">
                  <span className="mt-0.5 shrink-0 text-amber-400">✎</span>
                  <span>{lesson.practice[lang]}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:items-end lg:justify-center">
                {nextHref ? (
                  <Link href={nextHref} className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-teal-dark transition-colors hover:bg-amber-50">
                    {lang === "en" ? "Next lesson" : "下一课"} <IconArrowRight size={16} />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-extrabold text-[#7a2a00]">
                    🎉 {lang === "en" ? "End of this level" : "本级最后一课"}
                  </span>
                )}
                <Link href={backHref} className="text-xs text-white/70 hover:text-white transition-colors">
                  {lang === "en" ? "Back to level overview" : "回到等级总览"}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 标记本课完成 */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-2xl border border-teal/12 bg-white p-6 sm:p-8 shadow-[0_18px_44px_-30px_rgb(31_74_56/0.45)]">
              <div className="flex flex-col items-center gap-4 text-center">
                {completed ? (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-teal">
                      <IconCheck size={14} /> {lang === "en" ? "Lesson complete" : "本课已学"}
                    </span>
                    <p className="text-sm text-ink-light">
                      {lang === "en"
                        ? "Nice. Your progress is saved on this device."
                        : "不错。进度已记在这台设备上。"}
                    </p>
                    <button
                      type="button"
                      onClick={unmark}
                      className="text-[0.7rem] font-semibold uppercase tracking-wider text-ink-light underline-offset-2 hover:underline"
                    >
                      {lang === "en" ? "Mark as not done" : "标记为未学"}
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={mark}
                    className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-teal-dark"
                  >
                    <IconCheck size={14} /> {lang === "en" ? "Mark this lesson complete" : "标记本课完成"}
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}