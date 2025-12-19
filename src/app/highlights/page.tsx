import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { SectionHeader } from '@/components/section-header';
import { articleSpacingClasses, sectionSpacingClasses, focusRingClasses } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Highlights',
  description: `Notable mentions, reviews, and selected writing by ${siteConfig.name}`,
};

export default function HighlightsPage() {
  return (
    <article className={articleSpacingClasses}>
      {/* Header */}
      <header className={sectionSpacingClasses}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Highlights</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
          Notable mentions, reviews, and selected writing.
        </p>
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
                  {'quote' in item && item.quote && (
                    <blockquote className="text-lg text-foreground leading-relaxed border-l-2 border-border pl-4 italic">
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
                          className={`underline underline-offset-2 hover:opacity-80 ${focusRingClasses}`}
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h4>
                  )}
                  {'description' in item && item.description && (
                    <p className="text-muted-foreground">{item.description}</p>
                  )}
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
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
