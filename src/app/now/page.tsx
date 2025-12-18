import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { articleSpacingClasses, focusRingClasses } from '@/lib/styles';
import { SectionHeader } from '@/components/section-header';

export const metadata: Metadata = {
  title: 'Now',
  description: `What ${siteConfig.name} is doing now`,
};

export default function NowPage() {
  return (
    <article className={articleSpacingClasses}>
      {/* Header */}
      <header className="space-y-8 py-16 md:py-20 lg:py-24">
        <h2 className="text-4xl py-4 md:text-4xl font-bold tracking-tight leading-tight">
          Now
        </h2>
      </header>
      <section className="space-y-20 pt-20 md:pt-24 lg:pt-28">
        <p className="text-xl md:text-2xl py-4 text-muted-foreground font-light leading-relaxed">
          What I&apos;m focused on at this point in my life.
        </p>
        <div className="prose prose-neutral dark:prose-invert max-w-none py-2">
          Last updated: {siteConfig.now.updated}.
        </div>
      </section>

      {/* Sections */}
      <div className="space-y-24 md:space-y-28 lg:space-y-32">
        {siteConfig.now.sections.map((section, index) => (
          <section key={index} className="space-y-10 py-12 md:py-16 lg:py-20">
            <SectionHeader title={section.title} className="py-12 md:py-14" />
            <p className="text-lg text-foreground leading-loose max-w-4xl">{section.content}</p>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <footer className="border-border border-t pt-12 md:pt-16">
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
