"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";

export interface PassageSentence {
  zh: string;
  en: string;
  pinyin: string;
}

export interface Passage {
  title: { en: string; zh: string };
  intro?: { en: string; zh: string };
  sentences: PassageSentence[];
}

function speakChar(ch: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(ch);
  u.lang = "zh-CN";
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

function speakAll(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = 0.8;
  window.speechSynthesis.speak(u);
}

export function ReadingPassage({ passage, autoHighlight = true }: { passage: Passage; autoHighlight?: boolean }) {
  const { lang } = useLang();
  const [showEn, setShowEn] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    const fullText = passage.sentences.map((s) => s.zh).join("，");
    speakAll(fullText);
    setIsPlaying(true);
    setActiveIdx(0);
    passage.sentences.forEach((_, i) => {
      setTimeout(() => {
        if (i < passage.sentences.length - 1) {
          setActiveIdx(i + 1);
        } else {
          setActiveIdx(-1);
          setIsPlaying(false);
        }
      }, (i + 1) * 3500);
    });
  };

  const stop = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setActiveIdx(-1);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="font-nunito text-lg font-extrabold text-ink">
          {passage.title[lang]}
        </h3>
        <div className="flex gap-2">
          {isPlaying ? (
            <button
              type="button"
              onClick={stop}
              className="rounded-full bg-[#b3121f] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#9c0f1b]"
            >
              ◼ {lang === "en" ? "Stop" : "停"}
            </button>
          ) : (
            <button
              type="button"
              onClick={play}
              className="rounded-full bg-teal px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white transition-colors hover:bg-teal-dark"
            >
              ▶ {lang === "en" ? "Read aloud" : "朗读"}
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowEn(!showEn)}
            className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-amber-700 transition-colors hover:bg-amber-100"
          >
            {showEn ? (lang === "en" ? "Hide EN" : "藏 EN") : (lang === "en" ? "Show EN" : "看 EN")}
          </button>
        </div>
      </div>

      {passage.intro && (
        <p className="text-sm text-ink-light italic leading-relaxed border-l-2 border-amber-400 pl-3">
          {passage.intro[lang]}
        </p>
      )}

      <div className="space-y-3">
        {passage.sentences.map((s, i) => {
          const active = autoHighlight && i === activeIdx;
          return (
            <div
              key={i}
              className={`rounded-xl border p-4 transition-all duration-300 ${
                active ? "border-teal bg-teal/5 shadow-[0_8px_24px_-12px_rgba(45,106,79,0.5)]" : "border-teal/12 bg-white"
              }`}
            >
              <div className="flex flex-wrap items-baseline gap-x-0.5">
                {s.zh.split("").map((ch, ci) => (
                  <button
                    key={ci}
                    type="button"
                    onClick={() => speakChar(ch)}
                    className={`font-serif-sc text-xl leading-none px-1 py-0.5 rounded transition-colors hover:bg-teal/10 hover:text-teal cursor-pointer ${
                      active ? "text-teal" : "text-ink"
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
              <p className="mt-2 font-mono text-[0.72rem] tracking-wide text-teal/70">{s.pinyin}</p>
              {showEn && <p className="mt-1 text-sm text-ink-light/80 italic">{s.en}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
