import { focusRingClasses, linkTransitionClasses, cn } from '@/lib/styles';

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Check if a URL is external (should open in new tab)
 * Handles: http://, https://, protocol-relative (//), mailto:, tel:
 */
function isExternalUrl(href: string): boolean {
  // Protocol-relative URLs (//example.com)
  if (href.startsWith('//')) return true;
  // HTTP/HTTPS URLs
  if (href.startsWith('http://') || href.startsWith('https://')) return true;
  // mailto and tel links should open in default app, not new tab
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  // Everything else is internal
  return false;
}

/**
 * Smart link component that handles external vs internal links
 * - External links (http/https, protocol-relative) open in new tab with security attributes
 * - Internal links and mailto/tel open in same tab/app
 */
export function ExternalLink({ href, className, children }: ExternalLinkProps) {
  const isExternal = isExternalUrl(href);

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(linkTransitionClasses, focusRingClasses, 'rounded-md', className)}
    >
      {children}
    </a>
  );
}
