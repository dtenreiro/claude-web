interface EducationItemProps {
  institution: string;
  year: string;
  degree?: string;
}

/**
 * Reusable education entry component
 */
export function EducationItem({ institution, year, degree }: EducationItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between">
        <h3 className="font-medium text-foreground">{institution}</h3>
        <span className="text-sm text-muted-foreground tabular-nums">{year}</span>
      </div>
      {degree && <p className="text-muted-foreground">{degree}</p>}
    </div>
  );
}
