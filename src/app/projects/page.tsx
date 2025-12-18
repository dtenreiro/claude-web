import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { articleSpacingClasses } from '@/lib/styles';
import { SectionHeader } from '@/components/section-header';
import { LinkCard } from '@/components/link-card';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Selected projects by ${siteConfig.name}`,
};

export default function ProjectsPage() {
  return (
    <article className={articleSpacingClasses}>
      {/* Header */}
      <header className="space-y-6 py-8 md:py-10">
        <h1 className="text-5xl py-4 md:text-6xl font-bold tracking-tight leading-tight">Projects</h1>
        <p className="text-xl md:text-2xl py-2 text-muted-foreground font-light leading-relaxed">
          Things I&apos;ve built or explored recently.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="space-y-8 py-12 md:py-16">
        <SectionHeader title="Selected Work" className="py-4" />
        <div className="grid gap-4 py-4 sm:grid-cols-2">
          {siteConfig.projects.map((project, index) => (
            <LinkCard
              key={index}
              name={project.name}
              url={project.url}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
