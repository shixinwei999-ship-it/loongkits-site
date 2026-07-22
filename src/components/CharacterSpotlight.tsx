"use client";

// 今日一字：进来不用点进任何页面，就能当场“学会一个字”。
// 自动轮换（悬停暂停）、手动切换、点字听标准音、墨迹揭示、笔顺逐笔点亮、跟读打勾——
// 全是真实反馈，不假装语音识别：听一遍、自己读、打勾标记练过。

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { spotlightChars } from "@/lib/levels";
import { SpeakButton } from "@/components/Speak";
import { IconArrowRight } from "@/components/icons";

export function CharacterSpotlight() {
  const { lang } = useLang();
  const len = spotlightChars.length;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [seqKey, setSeqKey] = useState(0);
  const [practiced, setPracticed] = useState<Set<number>>(new Set());

  const c = spotlightChars[idx];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % len);
      setSeqKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, len]);

  const go = (dir: number) => {
    setIdx((i) => (i + dir + len) % len);
    setSeqKey((k) => k + 1);
  };

  const togglePracticed = () => {
    setPracticed((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const isPracticed = practiced.has(idx);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-[#b3121f]/15 bg-gradient-to-br from-[#fffaf6] to-[#fdf0ea] shadow-[0_30px_70px_-44px_rgba(157,15,27,0.5)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 宣纸纤维 + 朱印角标 */}
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-amber-300/15 blur-3xl" />
      <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#b3121f] px-3 py-1 font-inter text-[0.62rem] font-bold uppercase tracking-[0.16em] text-amber-50 shadow-sm">
        <span className="hero-dot inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
        {lang === "en" ? "Character of the moment" : "此刻一字"}
      </span>

      <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
        {/* 左：大字 + 听 + 跟读 */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-2xl border border-[#b3121f]/15 bg-white/70 sm:h-52 sm:w-52">
            <span aria-hidden className="absolute inset-3 rounded-xl border border-dashed border-teal/15" />
            <span key={`char-${idx}`} className="ink-reveal font-serif-sc text-[7rem] leading-none text-ink sm:text-[8.5rem]">
              {c.char}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="font-inter text-2xl font-bold text-[#b3121f]">{c.pinyin}</span>
            <SpeakButton text={c.char} />
          </div>
          <button
            type="button"
            onClick={togglePracticed}
            className={`mt-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
              isPracticed
                ? "border-teal bg-teal text-white shadow-[0_8px_18px_-10px_rgba(45,106,79,0.8)]"
                : "border-teal/30 bg-white text-teal hover:border-teal hover:bg-teal/5"
            }`}
          >
            {isPracticed ? (
              <>
                <span className="practice-pop">✓</span> {lang === "en" ? "Practised" : "练过了"}
              </>
            ) : (
              <>{lang === "en" ? "I said it — mark done" : "我读过了 · 打勾"}</>
            )}
          </button>
        </div>

        {/* 右：意思 + 例句 + 文化 + 笔顺 */}
        <div className="flex flex-col justify-center">
          <p className="font-nunito text-xl font-extrabold text-ink sm:text-2xl">
            {c.char} <span className="text-[#b3121f]">{c.pinyin}</span>{" "}
            <span className="text-base font-semibold text-ink-light">· {c.meaning[lang]}</span>
          </p>

          <p className="mt-4 text-base leading-relaxed text-ink">
            <span className="mr-1 inline-block rounded bg-teal/10 px-1.5 py-0.5 align-middle font-inter text-[0.6rem] font-bold uppercase tracking-wider text-teal">
              {lang === "en" ? "Use it" : "用它"}
            </span>
            {c.sentence[lang]}
          </p>

          <p className="mt-3 flex items-start gap-2 rounded-xl border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-ink-light">
            <span className="mt-0.5 text-amber-600">★</span>
            <span>{c.culture[lang]}</span>
          </p>

          {/* 笔顺逐笔点亮 */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-light">
                {lang === "en" ? `Stroke order · ${c.strokes} strokes` : `笔顺 · ${c.strokes} 笔`}
              </span>
              <button
                type="button"
                onClick={() => setSeqKey((k) => k + 1)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#b3121f] transition-colors hover:text-[#9c0f1b]"
              >
                ▶ {lang === "en" ? "Replay" : "再看一遍"}
              </button>
            </div>
            <div key={seqKey} className="flex flex-wrap gap-1.5">
              {c.order.map((name, i) => (
                <span
                  key={i}
                  className="seq-dot inline-flex items-center rounded-md border border-[#b3121f]/20 bg-white px-2 py-1 text-xs font-medium text-ink"
                  style={{ animationDelay: `${i * 0.32}s` }}
                >
                  <span className="mr-1 text-[0.6rem] font-bold text-[#b3121f]/50">{i + 1}</span>
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* 切换 + 进度 */}
          <div className="mt-6 flex items-center justify-between border-t border-[#b3121f]/10 pt-4">
            <div className="flex gap-1.5">
              {spotlightChars.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Character ${i + 1}`}
                  onClick={() => {
                    setIdx(i);
                    setSeqKey((k) => k + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-6 bg-[#b3121f]" : "w-1.5 bg-[#b3121f]/25 hover:bg-[#b3121f]/50"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b3121f]/25 bg-white text-[#b3121f] transition-colors hover:bg-[#b3121f] hover:text-white">
                <IconArrowRight size={16} className="rotate-180" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b3121f]/25 bg-white text-[#b3121f] transition-colors hover:bg-[#b3121f] hover:text-white">
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
