"use client";

// 邮件收集表单（诚实版）
// - 配置了 NEXT_PUBLIC_SUBSCRIBE_ENDPOINT（ConvertKit/Gumroad 接口）后，真实提交；
// - 未配置时不假装收集邮箱，而是引导用户关注社交账号。
// 家长补齐邮件工具后，只需在 Vercel 环境变量里加一条即可生效，代码不用动。

import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n";
import { subscribe } from "@/lib/content";
import { site } from "@/lib/site";

const endpoint = process.env.NEXT_PUBLIC_SUBSCRIBE_ENDPOINT ?? "";

export function SubscribeForm() {
  const { lang } = useLang();
  const t = subscribe[lang];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    if (!endpoint) return; // 未配置时表单不展示输入框，走不到这里
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  // 邮件工具未就位：诚实展示"即将上线 + 社交账号"
  if (!endpoint) {
    return (
      <div className="text-center">
        <p className="font-semibold text-teal mb-2">{t.launchingSoon}</p>
        <p className="text-ink-light mb-4">{t.followInstead}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {site.socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white text-teal text-sm font-medium hover:bg-teal/10 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setStatus("idle");
        }}
        placeholder={t.placeholder}
        className="flex-1 px-4 py-3 rounded-xl border border-teal/20 focus:border-teal focus:outline-none"
        aria-label={t.placeholder}
      />
      <button type="submit" disabled={status === "sending"} className="btn-primary whitespace-nowrap">
        {t.cta}
      </button>
      {status === "ok" && <p className="basis-full text-teal text-sm">{t.success}</p>}
      {status === "error" && (
        <p className="basis-full text-red text-sm">{email ? t.error : t.invalidEmail}</p>
      )}
    </form>
  );
}
