"use client";

// 单网址双语方案（家长拍板：按钮切换，不拆 /en /zh 两套网址）
// 服务端默认渲染英文 → Google 可索引英文内容；
// 客户端根据浏览器语言自动切中文，用户也可手动切换。

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "zh";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("zh")) {
      setLang("zh");
    }
  }, []);

  const toggle = () => setLang((prev) => (prev === "en" ? "zh" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** 双语文案取值：t(pick) → 当前语言的文本 */
export function useT() {
  const { lang } = useLang();
  return <T,>(pick: Record<Lang, T>): T => pick[lang];
}
