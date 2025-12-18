import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { articleSpacingClasses } from '@/lib/styles';
import { renderBioParagraphs } from '@/lib/markdown';
import { SectionHeader } from '@/components/section-header';
import { ExperienceItem } from '@/components/experience-item';
import { EducationItem } from '@/components/education-item';

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.shortBio,
};

export default function HomePage() {
  return (
    <>
      <article className={articleSpacingClasses}>
        <header className="space-y-6 py-12 md:py-16">
          <h2 className="text-4xl py-4 md:text-4xl font-bold tracking-tight leading-tight">
            About Daniel
          </h2>
        </header>
        <section className="space-y-16 pt-16 md:pt-20">
          <SectionHeader title="Bio" className="py-8 md:py-10" />
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {renderBioParagraphs(siteConfig.fullBio)}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-16 py-12 md:py-16">
          <SectionHeader title="Experience" className="py-8 md:py-10" />
          <div className="space-y-16">
            {siteConfig.experience.map((job, index) => (
              <ExperienceItem
                key={index}
                title={job.title}
                company={job.company}
                companyUrl={job.companyUrl || undefined}
                period={job.period}
                description={job.description}
              />
            ))}
          </div>
        </section>

        <section className="space-y-16 pt-24 md:pt-32">
          <SectionHeader title="Education" className="py-8 md:py-10" />
          <div className="space-y-16">
            <EducationItem institution="Yale University" year="2019" degree="B.A. Economics" />
            <EducationItem institution="Regis High School" year="2015" />
          </div>
        </section>
      </article>
    </>
  );
}
