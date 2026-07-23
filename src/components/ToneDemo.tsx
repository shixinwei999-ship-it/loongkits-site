"use client";

import { toneDemo, tones } from "@/lib/chineseCurriculum";
import { ToneGraph } from "@/components/ToneCards";
import { useLang } from "@/lib/i18n";

export function ToneDemo() {
  const { lang } = useLang();
  return (
    <div className="rounded-2xl border border-teal/12 bg-white/80 p-6 shadow-[0_30px_70px_-40px_rgb(31_74_56/0.5)] backdrop-blur-sm sm:p-7">
      <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-orange">
        {lang === "en" ? "Hear the four tones + neutral" : "先听四声加轻声"}
      </p>
      <div className="mt-5 grid grid-cols-5 gap-2 sm:gap-3">
        {toneDemo.map((w, i) => (
          <button
            key={w.char}
            type="button"
            onClick={() => {
              if (typeof window !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(w.char);
                u.lang = "zh-CN"; u.rate = 0.85;
                window.speechSynthesis.speak(u);
              }
            }}
            className="group/td flex flex-col items-center rounded-xl border border-teal/10 bg-cream/60 py-3 transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:bg-white hover:shadow-[0_14px_28px_-18px_rgb(31_74_56/0.55)]"
          >
            <ToneGraph curve={tones[i].curve} />
            <span className="mt-1 font-serif-sc text-2xl text-ink transition-colors group-hover/td:text-teal">{w.char}</span>
            <span className="text-[0.7rem] font-medium text-teal">{w.pinyin}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-ink-light">
        {lang === "en"
          ? "Same syllable “ma”, five pitches. Tap any tile — your browser reads it in Chinese."
          : "同一个音节“ma”，五种音高。点任意一格，浏览器用中文读给你听。"}
      </p>
    </div>
  );
}