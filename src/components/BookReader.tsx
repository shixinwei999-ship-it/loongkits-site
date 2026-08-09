"use client";

import { useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";

// 一页书的内容
export interface BookPage {
  kind: "cover" | "copyright" | "toc" | "lesson" | "practice" | "writing" | "garden" | "speaking" | "reading" | "vocablist" | "back";
  title: { en: string; zh: string };
  // 自由内容块
  body?: { en: ReactNode; zh: ReactNode };
}

export interface Book {
  gradeId: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  pages: BookPage[];
}

export function BookReader({ book, onClose }: { book: Book; onClose: () => void }) {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  const page = book.pages[i];
  const total = book.pages.length;
  const isCover = page.kind === "cover";
  // 当前页所属单元（仿人教版页眉"第一单元·识字"）
  let unitHeader = "";
  for (let k = i; k >= 0; k--) {
    const t = book.pages[k].title.zh;
    if (/^第.+单元/.test(t)) { unitHeader = t; break; }
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#1a1a1a]/95 backdrop-blur-sm">
      {/* 顶栏 */}
      <div className="flex items-center justify-between px-5 py-3 text-white/70">
        <button onClick={onClose} className="font-inter text-sm font-medium hover:text-white">
          ✕ {lang === "en" ? "Close book" : "合上书"}
        </button>
        <span className="font-inter text-xs tracking-wider text-white/40">
          {book.title[lang]} · {i + 1} / {total}
        </span>
      </div>

      {/* 书页 */}
      <div className="flex flex-1 items-stretch justify-center overflow-hidden px-3 pb-3 sm:px-8 sm:pb-8">
        <div
          className={`relative flex w-full max-w-3xl flex-col overflow-hidden rounded-r-sm bg-[#fbf8f2] shadow-2xl ${
            isCover ? "" : "ring-1 ring-black/5"
          }`}
          style={{ boxShadow: "inset 6px 0 12px -8px rgba(0,0,0,0.15)" }}
        >
          {/* 装订线 */}
          {!isCover && <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#e8e0d0] to-transparent" />}

          <div className="flex flex-1 flex-col overflow-y-auto px-6 py-8 sm:px-14 sm:py-12">
            {page.kind === "cover" ? (
              <CoverPage book={book} />
            ) : page.kind === "toc" ? (
              <TocPage book={book} onJump={(n) => setI(n)} />
            ) : (
              <article className="prose-book flex flex-1 flex-col">
                {unitHeader && (
                  <p className="mb-3 inline-block rounded-sm bg-[#2d6a4f]/10 px-2 py-0.5 font-serif-sc text-xs font-medium text-[#2d6a4f]">
                    {unitHeader}
                  </p>
                )}
                <p className="mb-2 font-inter text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#b3121f]">
                  {kindLabel(page.kind, lang)}
                </p>
                <h2 className="mb-4 font-serif-sc text-2xl font-bold text-ink sm:text-3xl">{page.title[lang]}</h2>
                <div className="text-[15px] leading-[1.9] text-ink/85">{page.body?.[lang]}</div>
                {/* 底部撑底装饰，让每页视觉饱满、大小统一 */}
                <div className="mt-auto flex justify-center pt-10">
                  <svg viewBox="0 0 220 60" className="h-14 w-auto opacity-70" aria-hidden>
                    <path d="M10 45 Q60 30 110 42 Q160 52 210 38" stroke="#2d6a4f" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M30 52 Q80 42 130 50 Q170 55 200 48" stroke="#c9a24a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
                    <circle cx="185" cy="20" r="7" fill="#c8102e" opacity="0.85" />
                    <text x="185" y="24" textAnchor="middle" fontSize="9" fill="#faf7f2" fontWeight="700">龙</text>
                  </svg>
                </div>
              </article>
            )}
          </div>

          {/* 页码 */}
          {!isCover && (
            <div className="px-6 pb-3 text-center font-serif-sc text-xs text-ink-light/60 sm:px-14">
              — {i + 1} —
            </div>
          )}
        </div>
      </div>

      {/* 翻页 */}
      <div className="flex items-center justify-between px-5 py-3 sm:px-12">
        <button
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
          className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80 enabled:hover:bg-white/10 disabled:opacity-30"
        >
          ‹ {lang === "en" ? "Prev" : "上一页"}
        </button>
        <div className="flex max-w-[60%] flex-wrap justify-center gap-1">
          {book.pages.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              className={`h-1.5 rounded-full transition-all ${n === i ? "w-5 bg-[#e8d089]" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
              aria-label={`page ${n + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setI((v) => Math.min(total - 1, v + 1))}
          disabled={i === total - 1}
          className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80 enabled:hover:bg-white/10 disabled:opacity-30"
        >
          {lang === "en" ? "Next" : "下一页" } ›
        </button>
      </div>
    </div>
  );
}

function kindLabel(kind: BookPage["kind"], lang: "en" | "zh") {
  const m: Record<string, { en: string; zh: string }> = {
    cover: { en: "Cover", zh: "封面" },
    copyright: { en: "Copyright", zh: "版权" },
    toc: { en: "Contents", zh: "目录" },
    lesson: { en: "Lesson", zh: "课文" },
    practice: { en: "Practice", zh: "练习" },
    writing: { en: "Writing", zh: "写字" },
    garden: { en: "Language Garden", zh: "语文园地" },
    speaking: { en: "Speaking", zh: "口语交际" },
    reading: { en: "Reading Club", zh: "快乐读书吧" },
    vocablist: { en: "Character List", zh: "生字表" },
    back: { en: "Back", zh: "后记" },
  };
  return m[kind][lang];
}

function CoverPage({ book }: { book: Book }) {
  const { lang } = useLang();
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="mb-6 h-px w-16 bg-[#b3121f]" />
      <p className="mb-3 font-inter text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#b3121f]">Loong Kits</p>
      <h1 className="font-serif-sc text-4xl font-bold text-ink sm:text-6xl">{book.title[lang]}</h1>
      <p className="mt-3 font-serif-sc text-lg text-ink/60">{book.subtitle[lang]}</p>
      <div className="mt-8 h-px w-16 bg-[#b3121f]" />
      <p className="mt-6 font-serif-sc text-7xl font-bold text-[#c9a24a]/30">龙</p>
      <p className="mt-8 text-xs text-ink-light">Bilingual Chinese Textbook · 双语中文教材</p>
    </div>
  );
}

function TocPage({ book, onJump }: { book: Book; onJump: (n: number) => void }) {
  const { lang } = useLang();
  // 按单元分组（仿人教版目录：单元为栏头，课编号+页码）
  const groups: { header?: { title: string; n: number }; items: { title: string; n: number; num?: number }[] }[] = [];
  let cur: { header?: { title: string; n: number }; items: { title: string; n: number; num?: number }[] } | null = null;
  book.pages.forEach((p, n) => {
    if (p.kind === "cover" || p.kind === "copyright" || p.kind === "toc") return;
    const t = p.title.zh;
    if (/^第.+单元/.test(t)) {
      cur = { header: { title: t, n }, items: [] };
      groups.push(cur);
    } else {
      if (!cur) { cur = { items: [] }; groups.push(cur); }
      cur.items.push({ title: t, n });
    }
  });
  return (
    <div>
      <h2 className="mb-5 text-center font-serif-sc text-2xl font-bold text-ink">{lang === "en" ? "Contents" : "目录"}</h2>
      <div className="space-y-5">
        {groups.map((g, gi) => (
          <div key={gi}>
            {g.header && (
              <button onClick={() => onJump(g.header!.n)} className="mb-2 block font-serif-sc text-base font-bold text-[#2d6a4f] hover:text-[#b3121f]">
                {g.header.title}
              </button>
            )}
            <ol className="space-y-1.5 pl-4 text-sm">
              {g.items.map((it, ii) => (
                <li key={it.n}>
                  <button onClick={() => onJump(it.n)} className="group flex w-full items-baseline gap-2 text-left text-ink/80 hover:text-[#b3121f]">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2d6a4f]/10 font-inter text-[0.6rem] font-bold text-[#2d6a4f]">{ii + 1}</span>
                    <span className="font-serif-sc font-medium">{it.title}</span>
                    <span className="mx-1 flex-1 border-b border-dotted border-ink/20" />
                    <span className="font-inter text-xs text-ink-light/60 tabular-nums">{it.n + 1}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
