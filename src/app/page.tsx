import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { renderBioParagraphs } from '@/lib/markdown';
import { SectionHeader } from '@/components/section-header';
import { ExperienceItem } from '@/components/experience-item';
import { EducationItem } from '@/components/education-item';
import { articleSpacingClasses, sectionSpacingClasses } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.shortBio,
};

export default function HomePage() {
  return (
    <article className={articleSpacingClasses}>
      <header>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          About Daniel
        </h1>
      </header>

      <section className={sectionSpacingClasses}>
        <SectionHeader title="Bio" />
        <div className={sectionSpacingClasses}>
          {renderBioParagraphs(siteConfig.fullBio)}
        </div>
      </section>

      {/* Experience */}
      <section className={sectionSpacingClasses}>
        <SectionHeader title="Experience" />
        <div className={sectionSpacingClasses}>
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

      <section className={sectionSpacingClasses}>
        <SectionHeader title="Education" />
        <div className={sectionSpacingClasses}>
          <EducationItem institution="Yale University" year="2019" degree="B.A. Economics" />
          <EducationItem institution="Regis High School" year="2015" />
        </div>
      </section>
    </article>
  );
}
