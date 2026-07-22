// 品牌字标：一枚朱印「龙」+ 中英字名。克制、喜庆、可缩放，不再使用卡通龙图。
const RED = "#C8102E";
const RED_D = "#9E0C24";
const CREAM = "#FAF7F2";

export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Loong Kits"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="44" height="44" rx="10" fill={RED} />
      <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#lkSeal)" />
      <rect x="6.5" y="6.5" width="35" height="35" rx="6" fill="none" stroke={CREAM} strokeWidth="1.6" opacity="0.85" />
      <g stroke={CREAM} strokeWidth="1.4" opacity="0.55" strokeLinecap="round">
        <path d="M9 12 V9 H12" />
        <path d="M39 12 V9 H36" />
        <path d="M9 36 V39 H12" />
        <path d="M39 36 V39 H36" />
      </g>
      <text x="24" y="33" textAnchor="middle" fontFamily="'Noto Serif SC', 'Songti SC', serif" fontWeight="700" fontSize="25" fill={CREAM}>
        龙
      </text>
      <defs>
        <linearGradient id="lkSeal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor={RED_D} stopOpacity="0.35" />
        </linearGradient>
      </defs>
    </svg>
  );
}
