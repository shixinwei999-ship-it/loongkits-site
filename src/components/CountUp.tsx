"use client";

// 活数字：滚进视口时从 0 计数到目标，给“这门课有多大”的真实体量感。
// 关键不变量——终值才是 resting 状态：组件初始就显示终值，只有当动效确实允许、
// 且元素滚入视口的那一刻，才短暂归零再数上来。这样任何“动画没跑”的情况
// （reduced-motion、截图冻结终态、observer 未触发）都稳稳显示真实数字，绝不留一个 0。
// 数字均为真实计数（篇章/等级/课/字/年），非编造用户数。

import { useEffect, useRef, useState } from "react";

function motionAllowed() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (document.documentElement.classList.contains("shot-final")) return false; // 截图冻结态：不动画
  return true;
}

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1200,
  className = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to); // 默认即终值
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const play = () => {
      if (animated.current) return;
      animated.current = true;
      if (!motionAllowed()) {
        setVal(to); // 保险：动效不允许就钉死终值
        return;
      }
      setVal(0); // 仅此刻短暂归零，开始数
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) requestAnimationFrame(tick);
        else setVal(to);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}
