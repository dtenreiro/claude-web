import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Links",
  description: `Links and social profiles for ${siteConfig.name}`,
};

export default function LinksPage() {
  return (
    <article className="space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Links</h1>
          <p className="text-muted-foreground">
            Find me elsewhere on the internet.
          </p>
        </header>

        {/* Links Grid */}
        <section className="space-y-4">
          <div className="grid gap-3">
            {siteConfig.allLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="space-y-1">
                  <h2 className="font-medium group-hover:underline underline-offset-2">
                    {link.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
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

        {/* Contact CTA */}
        <section className="pt-8 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <p className="text-muted-foreground">
              Feel free to reach out if you want to chat about technology,
              collaboration opportunities, or just to say hello.
            </p>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-md hover:opacity-90 transition-opacity"
            >
              Send an email
            </a>
          </div>
        </section>
    </article>
  );
}
