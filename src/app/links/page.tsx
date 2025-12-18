import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { articleSpacingClasses } from '@/lib/styles';
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
      <header className="space-y-8 py-16 md:py-20 lg:py-24">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Links</h1>
        <p className="text-xl md:text-2xl py-4 text-muted-foreground font-light">
          Find me elsewhere on the internet.
        </p>
      </header>

      {/* Links Grid */}
      <section className="space-y-12 py-16 md:py-20 lg:py-24">
        <SectionHeader title="Connect" className="py-8 md:py-10" />
        <div className="grid gap-6 py-6 sm:grid-cols-2">
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
