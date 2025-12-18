import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} - ${siteConfig.tagline}`,
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <article className="space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">About</h1>
          <p className="text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </header>

        {/* Bio */}
        <section className="prose">
          {siteConfig.fullBio.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-foreground">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="space-y-8">
            {siteConfig.experience.map((job, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-medium">
                    {job.title} at{" "}
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:opacity-80"
                    >
                      {job.company}
                    </a>
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="text-muted-foreground">
            Yale University, Economics (2019) &bull; Regis High School (2015)
          </p>
        </section>
      </article>
    </div>
  );
}
