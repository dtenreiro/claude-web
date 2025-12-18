import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <section className="space-y-8">
        {/* Intro */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {siteConfig.title} &mdash; {siteConfig.location}
          </p>
        </div>

        {/* Bio */}
        <div className="prose">
          <p className="text-foreground">
            {siteConfig.shortBio}
          </p>
        </div>

        {/* Current */}
        <div className="space-y-2">
          <p className="text-muted-foreground">
            Currently{" "}
            <span className="text-foreground">{siteConfig.currentRole}</span> at{" "}
            <a
              href={siteConfig.currentCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:opacity-80"
            >
              {siteConfig.currentCompany}
            </a>
            .
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/about"
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            About me
          </Link>
          <Link
            href="/links"
            className="inline-flex items-center px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
