import { siteConfig } from '@/lib/config';
import Link from 'next/link';

export default function HomePage() {
  return (
    <article className="space-y-12">
      {/* Intro */}
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{siteConfig.name}</h1>
        <p className="text-muted-foreground text-lg">
          {siteConfig.title} &mdash; {siteConfig.location}
        </p>
      </header>

      {/* Bio */}
      <section className="prose">
        {siteConfig.fullBio.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-foreground">
            {paragraph}
          </p>
        ))}
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
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    {job.company}
                  </a>
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

      {/* CTA */}
      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          href="/links"
          className="bg-accent text-accent-foreground inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>
    </article>
  );
}
