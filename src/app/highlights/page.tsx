import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { SectionHeader } from '@/components/section-header';
import { TweetEmbed } from '@/components/tweet-embed';
import { LinkEmbed } from '@/components/link-embed';
import {
  articleSpacingClasses,
  sectionSpacingClasses,
  focusRingClasses,
  pageTitleClasses,
  pageSubtitleClasses,
  blockquoteClasses,
  inlineLinkClasses,
  mutedTextClasses,
} from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Highlights',
  description: `Notable mentions, reviews, and selected writing by ${siteConfig.name}`,
};

export default function HighlightsPage() {
  return (
    <article className={articleSpacingClasses}>
      {/* Header */}
      <header className={sectionSpacingClasses}>
        <h1 className={pageTitleClasses}>Highlights</h1>
        <p className={pageSubtitleClasses}>Notable mentions, reviews, and selected writing.</p>
      </header>

      {/* Highlight Sections */}
      <div className={articleSpacingClasses}>
        {siteConfig.highlights.map((section, sectionIndex) => (
          <section key={sectionIndex} className={sectionSpacingClasses}>
            <SectionHeader title={section.category} />
            {section.subject && (
              <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">
                {section.subject}
              </h3>
            )}
            <div className="flex flex-col gap-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col gap-2">
                  {'embedUrl' in item && item.embedUrl && (
                    <TweetEmbed tweetUrl={item.embedUrl} />
                  )}
                  {'linkEmbed' in item && item.linkEmbed && (
                    <LinkEmbed {...item.linkEmbed} />
                  )}
                  {'quote' in item && item.quote && (
                    <blockquote className={blockquoteClasses}>
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  )}
                  {'title' in item && item.title && (
                    <h4 className="text-lg font-semibold text-foreground">
                      {'sourceUrl' in item && item.sourceUrl ? (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${inlineLinkClasses} ${focusRingClasses}`}
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h4>
                  )}
                  {'description' in item && item.description && (
                    <p className={mutedTextClasses}>{item.description}</p>
                  )}
                  {!('embedUrl' in item && item.embedUrl) &&
                    !('linkEmbed' in item && item.linkEmbed) && (
                    <div className="text-sm text-muted-foreground">
                      {'author' in item && item.author && <span>&mdash;{item.author}</span>}
                      {'source' in item && item.source && (
                        <span>
                          {'author' in item && item.author && ', '}
                          {'sourceUrl' in item && item.sourceUrl ? (
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`italic underline underline-offset-2 hover:opacity-80 ${focusRingClasses}`}
                            >
                              {item.source}
                            </a>
                          ) : (
                            <span className="italic">{item.source}</span>
                          )}
                        </span>
                      )}
                      {'date' in item && item.date && (
                        <span className="ml-2 text-muted-foreground/60">({item.date})</span>
                      )}
                      {'context' in item && item.context && (
                        <span className="block mt-1 text-muted-foreground/80">{item.context}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
