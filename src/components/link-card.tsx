import { focusRingClasses } from '@/lib/styles';

interface LinkCardProps {
  name: string;
  url: string;
  description: string;
}

export function LinkCard({ name, url, description }: LinkCardProps) {
  const isExternal = url.startsWith('http');

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`group border-border hover:bg-muted/50 hover:border-link/30 ${focusRingClasses} card-hover flex items-center justify-between rounded-xl border p-5 transition-all hover:shadow-md`}
    >
      <div className="space-y-1.5">
        <h3 className="text-lg font-semibold text-foreground/80 transition-colors group-hover:text-link group-focus-visible:text-link">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      <div className="bg-muted group-hover:bg-link/10 group-focus-visible:bg-link/10 flex h-8 w-8 items-center justify-center rounded-full transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground group-hover:text-link group-focus-visible:text-link transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </a>
  );
}
