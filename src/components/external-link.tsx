import { focusRingClasses, linkTransitionClasses, cn } from '@/lib/styles';

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Smart link component that handles external vs internal links
 * - External links (http/https) open in new tab with security attributes
 * - Internal links open in same tab
 */
export function ExternalLink({ href, className, children }: ExternalLinkProps) {
  const isExternal = href.startsWith('http');

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
