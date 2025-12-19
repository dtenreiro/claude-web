import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import {
  articleSpacingClasses,
  sectionSpacingClasses,
  pageTitleClasses,
  pageSubtitleClasses,
} from '@/lib/styles';
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
        <h1 className={pageTitleClasses}>Links</h1>
        <p className={pageSubtitleClasses}>Find me elsewhere on the internet.</p>
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
