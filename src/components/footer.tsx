import { siteConfig } from '@/lib/config';
import { ExternalLink } from '@/components/external-link';
import { containerClasses, footerPaddingClasses } from '@/lib/styles';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', url: siteConfig.links.twitter },
    { name: 'GitHub', url: siteConfig.links.github },
    { name: 'LinkedIn', url: siteConfig.links.linkedin },
  ].filter((link) => link.url);

  return (
    <footer className="border-border bg-muted/30 mt-auto flex justify-center border-t">
      <div className={`${containerClasses} ${footerPaddingClasses}`}>
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p>
            &copy; {currentYear} {siteConfig.name}
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <ExternalLink
                key={link.name}
                href={link.url!}
                className="hover:text-link transition-colors"
              >
                {link.name}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
