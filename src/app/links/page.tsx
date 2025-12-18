import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { articleSpacingClasses, sectionSpacingClasses } from '@/lib/styles';
import { SectionHeader } from '@/components/section-header';
import { LinkCard } from '@/components/link-card';

export const metadata: Metadata = {
  title: 'Links',
  description: `Links and social profiles for ${siteConfig.name}`,
};

export default function LinksPage() {
  return (
    <article className={articleSpacingClasses}>
      {/* Header */}
      <header className={sectionSpacingClasses}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Links</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Find me elsewhere on the internet.
        </p>
      </header>

      {/* Links Grid */}
      <section className={sectionSpacingClasses}>
        <SectionHeader title="Connect" />
        <div className="grid gap-6 sm:grid-cols-2">
          {siteConfig.allLinks.map((link, index) => {
            return (
              <LinkCard
                key={index}
                name={link.name}
                url={link.url}
                description={link.description}
              />
            );
          })}
        </div>
      </section>
    </article>
  );
}
