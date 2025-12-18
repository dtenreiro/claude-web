import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Now',
  description: `What ${siteConfig.name} is doing now`,
};

export default function NowPage() {
  return (
    <article className="space-y-24 md:space-y-32">
      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Now</h1>
        <div className="space-y-2">
          <p className="font-light text-xl md:text-2xl text-muted-foreground">
            What I&apos;m focused on at this point in my life.
          </p>
          <p className="text-muted-foreground/60 text-sm font-medium uppercase tracking-widest">
            Last updated: {siteConfig.now.updated}
          </p>
        </div>
      </header>

      {/* Sections */}
      <div className="space-y-20">
        {siteConfig.now.sections.map((section, index) => (
          <section key={index} className="space-y-6">
            <h2 className="pt-4 text-lg font-bold tracking-[0.2em] uppercase text-muted-foreground/60 border-b border-border pb-4">{section.title}</h2>
            <p className="text-lg text-foreground leading-relaxed max-w-4xl">{section.content}</p>
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
            className="underline underline-offset-2 hover:opacity-80 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            now page
          </a>
          . If you have your own site, you should make one too.
        </p>
      </footer>
    </article>
  );
}
