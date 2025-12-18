import { siteConfig } from '@/lib/config';
import Link from 'next/link';

export default function HomePage() {
  return (
    <article className="space-y-12">
      {/* Intro */}
      <header className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{siteConfig.name}</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <span className="text-primary">/</span> {siteConfig.location}
          </p>
        </div>

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
                  return <strong key={i}>{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </p>
          );
        })}
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="space-y-8">
          {siteConfig.experience.map((job, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-medium">
                  {job.title} at{' '}
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:opacity-80"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span>{job.company}</span>
                  )}
                </h3>
                <span className="text-muted-foreground text-sm">{job.period}</span>
              </div>
              <p className="text-muted-foreground">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <p className="text-muted-foreground">
          Yale University, Economics (2019) &bull; Regis High School (2015)
        </p>
      </section>

    </article>
  );
}
