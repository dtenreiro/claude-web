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
        <header className="space-y-8 py-20 md:py-28 lg:py-32">
          <h2 className="text-4xl py-6 md:text-5xl font-bold tracking-tight leading-tight">
            About Daniel
          </h2>
        </header>
        <section className="space-y-24 pt-24 md:pt-32 lg:pt-40">
          <SectionHeader title="Bio" className="py-10 md:py-12" />
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {renderBioParagraphs(siteConfig.fullBio)}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-24 py-20 md:py-28 lg:py-32">
          <SectionHeader title="Experience" className="py-10 md:py-12" />
          <div className="space-y-20">
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

        <section className="space-y-24 pt-32 md:pt-40 lg:pt-48">
          <SectionHeader title="Education" className="py-10 md:py-12" />
          <div className="space-y-20">
            <EducationItem institution="Yale University" year="2019" degree="B.A. Economics" />
            <EducationItem institution="Regis High School" year="2015" />
          </div>
        </section>
      </article>
    </>
  );
}
