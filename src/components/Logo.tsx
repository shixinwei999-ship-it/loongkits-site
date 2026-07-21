import Image from "next/image";
import { dragonAssets } from "@/lib/brandAssets";

const RED = "#C8102E";
const RED_D = "#9E0C24";
const CREAM = "#FAF7F2";

export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  // 真实双龙 Logo 到位后自动使用；在此之前保留清晰、诚实的龙字印章。
  if (dragonAssets.ready) {
    return (
      <Image
        src={dragonAssets.logo.src}
        alt="Loong Kits Hong and Qing dragon logo"
        width={dragonAssets.logo.width}
        height={dragonAssets.logo.height}
        className={`object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Loong Kits 临时龙字印章标志"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="44" height="44" rx="9" fill={RED} />
      <rect x="2" y="2" width="44" height="44" rx="9" fill="url(#sealShade)" />
      <rect x="6.5" y="6.5" width="35" height="35" rx="5.5" fill="none" stroke={CREAM} strokeWidth="1.6" opacity="0.85" />
      <g stroke={CREAM} strokeWidth="1.4" opacity="0.5" strokeLinecap="round">
        <path d="M9 12 V9 H12" />
        <path d="M39 12 V9 H36" />
        <path d="M9 36 V39 H12" />
        <path d="M39 36 V39 H36" />
      </g>
      <text x="24" y="33" textAnchor="middle" fontFamily="'Noto Serif SC', 'Songti SC', serif" fontWeight="700" fontSize="25" fill={CREAM}>
        龙
      </text>
      <defs>
        <linearGradient id="sealShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.12" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor={RED_D} stopOpacity="0.35" />
        </linearGradient>
      </defs>
    </svg>
  );
}
