import Image from "next/image";
import { dragonAssets } from "@/lib/brandAssets";
import { BrandMotif } from "@/components/Illustration";

interface DragonArtStageProps {
  className?: string;
  alt: string;
  variant?: "hero" | "compact";
}

// 真实资产未到位时，明确展示印章民俗组合；绝不降级为手画假龙。
export function DragonArtStage({ className = "", alt, variant = "hero" }: DragonArtStageProps) {
  if (!dragonAssets.ready) {
    return <BrandMotif className={className} />;
  }

  const asset = variant === "compact" ? dragonAssets.logo : dragonAssets.hero;
  return (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      priority={variant === "hero"}
      className={`${className} object-contain`}
    />
  );
}
