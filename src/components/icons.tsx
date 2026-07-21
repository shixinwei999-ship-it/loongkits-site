// Loong Kits 手绘图标系统 —— 全站统一视觉语言，彻底替代 emoji
// 规范：24x24 视图，1.8 粗描边，圆头端点，主体 stroke=currentColor，
// 点睛填充用 --icon-accent（默认橙黄 #F4A261）。一套语言贯穿全站。

import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const ACCENT = "var(--icon-accent, #F4A261)";

export function IconDownload(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 3v10m0 0 3.5-3.5M12 13 8.5 9.5" />
      <path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" />
      <circle cx="12" cy="3" r="0.6" fill={ACCENT} stroke="none" />
    </Base>
  );
}

export function IconPrint(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M7 8V4h10v4" />
      <rect x="4" y="8" width="16" height="8" rx="2" />
      <rect x="7.5" y="13" width="9" height="7" rx="1" fill="#fff" />
      <path d="M9.5 16h5M9.5 18h3" />
      <circle cx="17" cy="11" r="0.7" fill={ACCENT} stroke="none" />
    </Base>
  );
}

export function IconHeartHands(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 9.2c1-1.7 3.6-1.5 4.2.4.5 1.6-.8 3-2.4 4.2L12 15l-1.8-1.2C8.6 12.6 7.3 11.2 7.8 9.6c.6-1.9 3.2-2.1 4.2-.4Z" fill={ACCENT} stroke="none" />
      <path d="M12 9.2c1-1.7 3.6-1.5 4.2.4.5 1.6-.8 3-2.4 4.2L12 15l-1.8-1.2C8.6 12.6 7.3 11.2 7.8 9.6c.6-1.9 3.2-2.1 4.2-.4Z" />
      <path d="M5 13v6M19 13v6M5 16h3l1.5 1M19 16h-3l-1.5 1" />
    </Base>
  );
}

export function IconLantern(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 3v2M12 19v2" />
      <rect x="7" y="5" width="10" height="14" rx="5" fill={ACCENT} stroke="none" opacity="0.18" />
      <rect x="7" y="5" width="10" height="14" rx="5" />
      <path d="M9.5 5.3C8.6 7 8.6 17 9.5 18.7M14.5 5.3C15.4 7 15.4 17 14.5 18.7" />
      <path d="M7 9h10M7 15h10" />
    </Base>
  );
}

export function IconRedEnvelope(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" fill="#C8102E" stroke="none" opacity="0.12" />
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M5 8c2.5 2.2 4.8 3.2 7 3.2S16.5 10.2 19 8" />
      <circle cx="12" cy="12.5" r="2.2" fill={ACCENT} stroke="none" />
      <circle cx="12" cy="12.5" r="2.2" />
    </Base>
  );
}

export function IconCloud(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M7 16a3.5 3.5 0 0 1 .4-7 4.5 4.5 0 0 1 8.7.6A3.2 3.2 0 0 1 16.5 16Z" />
    </Base>
  );
}

export function IconSeal(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="5" y="5" width="14" height="14" rx="3" fill="#C8102E" stroke="none" opacity="0.12" />
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M9 9.5h6M9 12h6M9 14.5h4" stroke="#C8102E" />
    </Base>
  );
}

export function IconBook(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 6c-1.6-1.2-3.6-1.6-6-1.5V18c2.4-.1 4.4.3 6 1.5 1.6-1.2 3.6-1.6 6-1.5V4.5c-2.4-.1-4.4.3-6 1.5Z" />
      <path d="M12 6v13.5" />
      <path d="M8.5 8.5h.01M15.5 8.5h.01" stroke={ACCENT} />
    </Base>
  );
}

export function IconBrush(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M15.5 4.5 19.5 8.5 11 17l-4 1 1-4Z" />
      <path d="M14 6 18 10" />
      <path d="M7 18c-1 .3-1.8 1.2-2 2.5 1.3-.2 2.2-1 2.5-2" fill={ACCENT} stroke="none" />
    </Base>
  );
}

export function IconFamily(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="8" cy="8" r="2.3" />
      <circle cx="16" cy="8.5" r="1.9" />
      <path d="M4 19v-1.5A3.5 3.5 0 0 1 7.5 14h1A3.5 3.5 0 0 1 12 17.5V19" />
      <path d="M13 19v-1a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3v1" />
      <circle cx="12" cy="12.5" r="1.3" fill={ACCENT} stroke="none" />
    </Base>
  );
}

export function IconTeacher(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="7.5" r="2.5" />
      <path d="M6.5 19v-1.5A4 4 0 0 1 10.5 13.5h3A4 4 0 0 1 17.5 17.5V19" />
      <path d="M12 3.5 19 6l-7 2.5L5 6Z" fill={ACCENT} stroke="none" opacity="0.25" />
      <path d="M12 3.5 19 6l-7 2.5L5 6Z" />
      <path d="M19 6v3" />
    </Base>
  );
}

export function IconScreenOff(p: IconProps) {
  return (
    <Base {...p}>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M9 20h6M12 16v4" />
      <path d="m6 7 12 7" stroke={ACCENT} />
    </Base>
  );
}

export function IconGlobe(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.3 3.5 8.5S14.3 18.2 12 20.5C9.7 18.2 8.5 15.2 8.5 12S9.7 5.8 12 3.5Z" />
    </Base>
  );
}

export function IconSparkle(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M12 3.5c.6 3.7 1.8 4.9 5.5 5.5-3.7.6-4.9 1.8-5.5 5.5-.6-3.7-1.8-4.9-5.5-5.5 3.7-.6 4.9-1.8 5.5-5.5Z" fill={ACCENT} stroke="none" opacity="0.25" />
      <path d="M12 3.5c.6 3.7 1.8 4.9 5.5 5.5-3.7.6-4.9 1.8-5.5 5.5-.6-3.7-1.8-4.9-5.5-5.5 3.7-.6 4.9-1.8 5.5-5.5Z" />
      <path d="M18.5 14.5c.3 1.6.8 2.1 2.5 2.5-1.7.4-2.2.9-2.5 2.5-.3-1.6-.8-2.1-2.5-2.5 1.7-.4 2.2-.9 2.5-2.5Z" />
    </Base>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M5 12h13m0 0-5-5m5 5-5 5" />
    </Base>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <Base {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </Base>
  );
}

export function IconStack(p: IconProps) {
  return (
    <Base {...p}>
      <path d="m12 3 8 4-8 4-8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16.5 8 4 8-4" stroke={ACCENT} />
    </Base>
  );
}

export function IconClock(p: IconProps) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Base>
  );
}

export function IconTag(p: IconProps) {
  return (
    <Base {...p}>
      <path d="M4 4h7l9 9-7 7-9-9Z" />
      <circle cx="8" cy="8" r="1.3" fill={ACCENT} stroke="none" />
    </Base>
  );
}
