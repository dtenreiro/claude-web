interface ExperienceItemProps {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
}

/**
 * Reusable experience/job entry component
 */
export function ExperienceItem({
  title,
  company,
  companyUrl,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-medium text-foreground">
          {title} at{' '}
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-foreground transition-colors"
            >
              {company}
            </a>
          ) : (
            <span>{company}</span>
          )}
        </h3>
        <span className="text-sm text-muted-foreground tabular-nums">{period}</span>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
