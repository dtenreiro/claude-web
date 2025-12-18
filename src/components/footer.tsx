import { siteConfig } from '@/lib/config';
import { containerClasses } from '@/lib/styles';
import { ExternalLink } from '@/components/external-link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', url: siteConfig.links.twitter },
    { name: 'GitHub', url: siteConfig.links.github },
    { name: 'LinkedIn', url: siteConfig.links.linkedin },
  ].filter((link) => link.url);

  return (
    <footer className="border-border flex justify-center border-t">
      <div className={`${containerClasses} py-16 md:py-24 lg:py-32`}>
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p>
            &copy; {currentYear} {siteConfig.name}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <ExternalLink key={link.name} href={link.url!}>
                {link.name}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
