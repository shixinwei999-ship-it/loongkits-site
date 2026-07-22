import Image from "next/image";
import { dragonAssets } from "@/lib/brandAssets";

interface DragonArtStageProps {
  className?: string;
  alt: string;
  variant?: "hero" | "compact";
}

function QuietLoongFallback({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 440" className={className} aria-hidden>
      {/* 临时构图不是假龙：只保留品牌名中的龙字、印章和两道东方龙身的抽象线。 */}
      <text x="220" y="285" textAnchor="middle" fontFamily="'Noto Serif SC', serif" fontSize="270" fontWeight="700" fill="#2D6A4F" opacity="0.07">
        龙
      </text>
      <path d="M70 235 C120 125 205 105 270 150 C322 186 348 242 376 278" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" opacity="0.22" />
      <path d="M64 286 C123 333 205 340 270 300 C318 270 344 208 372 162" fill="none" stroke="#D4807A" strokeWidth="2" strokeLinecap="round" opacity="0.22" />
      <rect x="159" y="150" width="122" height="122" rx="18" fill="#C8102E" />
      <rect x="170" y="161" width="100" height="100" rx="12" fill="none" stroke="#FAF7F2" strokeWidth="2" opacity="0.82" />
      <text x="220" y="236" textAnchor="middle" fontFamily="'Noto Serif SC', serif" fontSize="68" fontWeight="700" fill="#FAF7F2">龙</text>
      <circle cx="83" cy="205" r="4" fill="#F4A261" />
      <circle cx="356" cy="250" r="4" fill="#F4A261" />
    </svg>
  );
}

// 真实资产未到位时，展示克制的品牌锚；绝不降级为手画假龙。
export function DragonArtStage({ className = "", alt, variant = "hero" }: DragonArtStageProps) {
  if (!dragonAssets.ready) {
    return <QuietLoongFallback className={className} />;
  }

  const asset = variant === "compact" ? dragonAssets.logo : dragonAssets.hero;
  return (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      priority={variant === "hero"}
      sizes={variant === "hero" ? "(max-width: 1024px) 100vw, 42vw" : "56px"}
      className={`${className} object-contain`}
    />
  );
}
