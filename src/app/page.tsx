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
        <section className="space-y-16">
          <SectionHeader title="Bio" />
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {renderBioParagraphs(siteConfig.fullBio)}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-16">
          <SectionHeader title="Experience" />
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

        <section className="space-y-16 pt-12 md:pt-16">
          <SectionHeader title="Education" className="pt-6" />
          <div className="space-y-16">
            <EducationItem institution="Yale University" year="2019" degree="B.A. Economics" />
            <EducationItem institution="Regis High School" year="2015" />
          </div>
        </section>
      </article>
    </>
  );
}
