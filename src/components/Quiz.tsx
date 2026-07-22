"use client";

// 通用即时反馈小测：选中即判对错、给解释，一题一题翻。
// 用于每级“作业小测”和“分级自评”。结果块可由父级定制（placement 用它给建议级别）。
// 不存任何数据、不假装智能——对错就是对照标准答案，诚实且即时。

import { useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import type { QuizQ } from "@/lib/levels";

export function Quiz({
  questions,
  renderResult,
  compact = false,
  intro,
}: {
  questions: QuizQ[];
  renderResult?: (score: number, total: number) => ReactNode;
  compact?: boolean;
  intro?: string;
}) {
  const { lang } = useLang();
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[idx];
  const locked = picked !== null;
  const isLast = idx === questions.length - 1;

  const pick = (i: number) => {
    if (locked) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (isLast) {
      setDone(true);
    } else {
      setIdx((n) => n + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="rounded-xl border border-teal/15 bg-cream/70 p-4">
        {renderResult ? (
          renderResult(score, questions.length)
        ) : (
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-ink">
              <span className="font-nunito text-lg font-extrabold text-teal">{score}/{questions.length}</span>{" "}
              <span className="text-ink-light">{lang === "en" ? "correct — nice work." : "答对，不错。"}</span>
            </p>
            <button type="button" onClick={restart} className="shrink-0 rounded-lg border border-teal/30 px-3 py-1.5 text-xs font-bold text-teal transition-colors hover:bg-teal hover:text-white">
              {lang === "en" ? "Retry" : "再来一次"}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`rounded-xl border border-teal/15 bg-cream/70 ${compact ? "p-4" : "p-5"}`}>
      {intro && <p className="mb-3 text-xs text-ink-light">{intro}</p>}
      <div className="mb-3 flex items-center gap-2">
        <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#b3121f]">
          {lang === "en" ? `Check ${idx + 1}/${questions.length}` : `小测 ${idx + 1}/${questions.length}`}
        </span>
        <span aria-hidden className="h-1 flex-1 overflow-hidden rounded-full bg-teal/10">
          <span className="block h-full rounded-full bg-[#b3121f] transition-all duration-500" style={{ width: `${((idx + (locked ? 1 : 0)) / questions.length) * 100}%` }} />
        </span>
      </div>
      <p className="font-nunito text-base font-bold leading-snug text-ink">{q.q[lang]}</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {q.options.map((opt, i) => {
          const correct = locked && i === q.answer;
          const wrong = locked && i === picked && i !== q.answer;
          return (
            <button
              key={i}
              type="button"
              onClick={() => pick(i)}
              disabled={locked}
              className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                correct
                  ? "border-teal bg-teal/10 text-teal-dark"
                  : wrong
                    ? "border-rose-400 bg-rose-50 text-rose-700"
                    : locked
                      ? "border-teal/10 bg-white/60 text-ink-light"
                      : "border-teal/15 bg-white text-ink hover:-translate-y-0.5 hover:border-[#b3121f]/40 hover:shadow-[0_10px_22px_-16px_rgba(157,15,27,0.5)]"
              }`}
            >
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold ${correct ? "bg-teal text-white" : wrong ? "bg-rose-500 text-white" : "bg-teal/10 text-teal"}`}>
                {correct ? "✓" : wrong ? "✕" : String.fromCharCode(65 + i)}
              </span>
              <span className={correct || wrong ? "" : ""}>{opt}</span>
            </button>
          );
        })}
      </div>
      {locked && (
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-white px-3 py-2.5 text-sm leading-relaxed text-ink-light">
          <span className={`mt-0.5 shrink-0 ${picked === q.answer ? "text-teal" : "text-rose-500"}`}>{picked === q.answer ? "✓" : "✕"}</span>
          <span>{q.explain[lang]}</span>
        </div>
      )}
      {locked && (
        <button type="button" onClick={next} className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[#b3121f] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#9c0f1b]">
          {isLast ? (lang === "en" ? "See result" : "看结果") : (lang === "en" ? "Next" : "下一题")} →
        </button>
      )}
    </div>
  );
}
