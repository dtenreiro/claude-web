import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Links',
  description: `Links and social profiles for ${siteConfig.name}`,
};

export default function LinksPage() {
  return (
    <article className="space-y-12">
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
              className="group border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
            >
              <div className="space-y-1">
                <h2 className="font-medium underline-offset-2 group-hover:underline">
                  {link.name}
                </h2>
                <p className="text-muted-foreground text-sm">{link.description}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
