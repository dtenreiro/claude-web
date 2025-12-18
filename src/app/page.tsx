import { siteConfig } from '@/lib/config';

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="space-y-6 mb-24 md:mb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{siteConfig.name}</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light">{siteConfig.tagline}</p>
      </header>

      <article className="space-y-24 md:space-y-32 lg:space-y-40">
        {/* Bio */}
        <section className="prose prose-neutral dark:prose-invert max-w-none">
          {siteConfig.fullBio.split('\n\n').map((paragraph, index) => {
            // Simple bold replacement for the bio
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={index} className="text-foreground leading-relaxed">
                {parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </p>
            );
          })}
        </section>

        {/* Experience */}
        <section className="space-y-12">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground/60 border-b border-border pb-4">Experience</h2>
          <div className="space-y-16">
            {siteConfig.experience.map((job, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-medium text-foreground">
                    {job.title} at{' '}
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-foreground transition-colors"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span>{job.company}</span>
                    )}
                  </h3>
                  <span className="text-sm text-muted-foreground tabular-nums">{job.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-12">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground/60 border-b border-border pb-4">Education</h2>
          <div className="space-y-12">
            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-foreground">Yale University</h3>
                <span className="text-sm text-muted-foreground tabular-nums">2019</span>
              </div>
              <p className="text-muted-foreground">B.A. Economics</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-foreground">Regis High School</h3>
                <span className="text-sm text-muted-foreground tabular-nums">2015</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}