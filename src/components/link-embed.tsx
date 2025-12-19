import { focusRingClasses } from '@/lib/styles';

interface LinkEmbedProps {
  url: string;
  title: string;
  source: string;
  description?: string;
  date?: string;
}

export function LinkEmbed({ url, title, source, description, date }: LinkEmbedProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors ${focusRingClasses}`}
    >
      <div className="flex flex-col gap-2">
        <div className="text-sm text-muted-foreground">{source}</div>
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
        {date && (
          <div className="text-xs text-muted-foreground/60">{date}</div>
        )}
      </div>
    </a>
  );
}
