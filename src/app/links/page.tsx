import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { articleSpacingClasses, focusRingClasses } from '@/lib/styles';
import { SectionHeader } from '@/components/section-header';

export const metadata: Metadata = {
  title: 'Links',
  description: `Links and social profiles for ${siteConfig.name}`,
};

export default function LinksPage() {
  return (
    <article className={articleSpacingClasses}>
      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Links</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Find me elsewhere on the internet.
        </p>
      </header>

      {/* Links Grid */}
      <section className="space-y-8">
        <SectionHeader title="Connect" />
        <div className="grid gap-4 sm:grid-cols-2">
          {siteConfig.allLinks.map((link, index) => {
            const isExternal = link.url.startsWith('http');
            return (
              <a
                key={index}
                href={link.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`group border-border hover:bg-muted/50 ${focusRingClasses} flex items-center justify-between rounded-xl border p-5 transition-all hover:shadow-sm`}
              >
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-foreground/80 transition-colors group-hover:text-foreground group-focus-visible:text-foreground">
                    {link.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{link.description}</p>
                </div>
                <div className="bg-muted group-hover:bg-background group-focus-visible:bg-background flex h-8 w-8 items-center justify-center rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </article>
  );
}
