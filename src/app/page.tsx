import { siteConfig } from '@/lib/config';

export default function HomePage() {
  return (
    <article className="space-y-16">
      {/* Intro */}
      <header className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{siteConfig.name}</h1>
          <div className="flex flex-wrap items-center gap-x-2 text-muted-foreground">
            <span className="text-foreground font-medium">{siteConfig.title}</span>
            <span aria-hidden="true">/</span>
            <span>{siteConfig.location}</span>
          </div>
        </div>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {siteConfig.tagline}
        </p>
      </header>

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
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="space-y-8">
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
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <div className="space-y-8">
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
  );
}