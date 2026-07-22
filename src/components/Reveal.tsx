// 页面内容默认可见。首屏信息不能依赖 IntersectionObserver 回调，
// 否则在弱脚本环境或自动化浏览器中会留下空白区块。

import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
