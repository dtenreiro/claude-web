import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { SectionHeader } from '@/components/section-header';
import {
  articleSpacingClasses,
  sectionSpacingClasses,
  focusRingClasses,
  pageTitleClasses,
  pageSubtitleClasses,
} from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Now',
  description: `What ${siteConfig.name} is doing now`,
};

export default function NowPage() {
  return (
    <article className={articleSpacingClasses}>
      {/* Header */}
      <header className={sectionSpacingClasses}>
        <h1 className={pageTitleClasses}>Now</h1>
        <div className={sectionSpacingClasses}>
          <p className={pageSubtitleClasses}>What I&apos;m focused on at this point in my life.</p>
          <div className="text-foreground">
            Last updated: {siteConfig.now.updated}.
          </div>
        </div>
      </header>

      {/* Sections */}
      <div className={articleSpacingClasses}>
        {siteConfig.now.sections.map((section, index) => (
          <section key={index} className={sectionSpacingClasses}>
            <SectionHeader title={section.title} />
            <p className="text-lg text-foreground leading-loose max-w-4xl">{section.content}</p>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <footer className="border-border border-t pt-10 md:pt-12 lg:pt-14">
        <p className="text-muted-foreground text-sm">
          This is a{' '}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline underline-offset-2 hover:opacity-80 rounded-md ${focusRingClasses}`}
          >
            now page
          </a>
          . If you have your own site, you should make one too.
        </p>
      </footer>
    </article>
  );
}
