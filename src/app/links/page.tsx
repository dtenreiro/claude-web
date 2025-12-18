import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Links',
  description: `Links and social profiles for ${siteConfig.name}`,
};

export default function LinksPage() {
  return (
    <article className="space-y-20">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Links</h1>
        <p className="text-muted-foreground">Find me elsewhere on the internet.</p>
      </header>

      {/* Links Grid */}
      <section className="space-y-4">
        <div className="grid gap-3">
          {siteConfig.allLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group border-border hover:bg-muted/50 flex items-center justify-between rounded-xl border p-5 transition-all hover:shadow-sm"
            >
              <div className="space-y-1.5">
                <h2 className="font-semibold tracking-tight transition-colors group-hover:text-foreground">
                  {link.name}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{link.description}</p>
              </div>
              <div className="bg-muted group-hover:bg-background flex h-8 w-8 items-center justify-center rounded-full transition-colors">
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
                  className="text-muted-foreground group-hover:text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
