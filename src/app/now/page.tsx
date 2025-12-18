import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Now',
  description: `What ${siteConfig.name} is doing now`,
};

export default function NowPage() {
  return (
    <article className="space-y-20">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Now</h1>
        <div className="space-y-1">
          <p className="font-medium text-lg">
            What I&apos;m focused on at this point in my life.
          </p>
          <p className="text-muted-foreground text-sm">
            Last updated: {siteConfig.now.updated}
          </p>
        </div>
      </header>

      {/* Sections */}
      <div className="space-y-12">
        {siteConfig.now.sections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground/80">{section.title}</h2>
            <p className="text-foreground leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <footer className="border-border border-t pt-8">
        <p className="text-muted-foreground text-sm">
          This is a{' '}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80"
          >
            now page
          </a>
          . If you have your own site, you should make one too.
        </p>
      </footer>
    </article>
  );
}
