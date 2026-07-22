import { IconDownload } from "@/components/icons";
import { zodiacAnimalsResource } from "@/lib/resources";

interface ResourceDownloadsProps {
  labels: {
    a4: string;
    letter: string;
  };
  compact?: boolean;
}

export function ResourceDownloads({ labels, compact = false }: ResourceDownloadsProps) {
  const classes = compact ? "text-sm px-4 py-2.5" : "text-base";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={zodiacAnimalsResource.formats.a4.href}
        download
        className={`btn-primary ${classes}`}
      >
        <IconDownload size={18} />
        {labels.a4}
      </a>
      <a
        href={zodiacAnimalsResource.formats.letter.href}
        download
        className={`btn-secondary ${classes}`}
      >
        <IconDownload size={18} />
        {labels.letter}
      </a>
    </div>
  );
}
