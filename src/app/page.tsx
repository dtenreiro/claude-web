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
        <header className="space-y-8 py-16 md:py-20 lg:py-24">
          <h2 className="text-4xl py-4 md:text-4xl font-bold tracking-tight leading-tight">
            About Daniel
          </h2>
        </header>
        <section className="space-y-20 pt-20 md:pt-24 lg:pt-28">
          <SectionHeader title="Bio" className="py-10 md:py-12" />
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {renderBioParagraphs(siteConfig.fullBio)}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-20 py-16 md:py-20 lg:py-24">
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

        <section className="space-y-20 pt-28 md:pt-36 lg:pt-40">
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
