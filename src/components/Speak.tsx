"use client";

// 真实发音辅助：用浏览器内置中文语音朗读，无需音频资产。
// 点击有活体反馈——朗读时按钮外圈脉冲；不支持语音的环境按钮自动禁用并提示，绝不造假。

import { useEffect, useRef, useState } from "react";
import type { Word } from "@/lib/chineseCurriculum";

function useSpeechReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);
  return ready;
}

export function SpeakButton({
  text,
  label,
  size = "md",
  className = "",
}: {
  text: string;
  label?: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const ready = useSpeechReady();
  const [speaking, setSpeaking] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const dim = size === "sm" ? "h-7 w-7" : "h-9 w-9";
  const icon = size === "sm" ? 14 : 17;

  const speak = () => {
    if (!ready || typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-CN";
    u.rate = 0.9;
    u.pitch = 1;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    utterRef.current = u;
    window.speechSynthesis.speak(u);
  };

  useEffect(() => () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  return (
    <button
      type="button"
      onClick={speak}
      disabled={!ready}
      aria-label={label ?? `Read “${text}” aloud`}
      title={ready ? (label ?? `Read “${text}”`) : "Audio needs a browser that supports speech"}
      className={`group/spk relative inline-flex ${dim} shrink-0 items-center justify-center rounded-full border border-teal/25 bg-white text-teal transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:bg-teal hover:text-white active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:text-teal ${className}`}
    >
      {speaking && (
        <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-teal/40" />
      )}
      <svg width={icon} height={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative">
        <path d="M11 5 6 9H3v6h3l5 4z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" className="opacity-70 transition-opacity duration-200 group-hover/spk:opacity-100" />
        <path d="M18.5 6a8 8 0 0 1 0 12" className="opacity-40 transition-opacity duration-200 group-hover/spk:opacity-100" />
      </svg>
    </button>
  );
}

// 可发音字块：大字 + 拼音 + 发音按钮，可选英文释义。
export function WordChip({
  word,
  showEn = false,
  variant = "card",
}: {
  word: Word;
  showEn?: boolean;
  variant?: "card" | "inline";
}) {
  if (variant === "inline") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-teal/15 bg-white px-3 py-1.5">
        <span className="font-serif-sc text-lg text-ink">{word.char}</span>
        <span className="text-xs font-medium text-teal">{word.pinyin}</span>
        <SpeakButton text={word.char} size="sm" />
      </span>
    );
  }
  return (
    <div className="group/chip flex items-center justify-between gap-3 rounded-xl border border-teal/12 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_12px_26px_-18px_rgb(31_74_56/0.5)]">
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-serif-sc text-2xl leading-none text-ink">{word.char}</span>
          <span className="text-sm font-medium text-teal">{word.pinyin}</span>
        </div>
        {showEn && <p className="mt-1 truncate text-xs text-ink-light">{word.en.en}</p>}
      </div>
      <SpeakButton text={word.char} />
    </div>
  );
}
