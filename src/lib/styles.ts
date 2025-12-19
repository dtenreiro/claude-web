// Shared Tailwind class utilities to eliminate duplication

/**
 * Focus ring classes for accessibility
 * Used on interactive elements (links, buttons)
 */
export const focusRingClasses =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]';

/**
 * Section header classes for consistent styling
 */
export const sectionHeaderClasses =
  'text-base font-bold tracking-[0.1em] uppercase text-muted-foreground/80 border-b border-border pb-2';

/**
 * Container width classes for consistent layout
 */
export const containerClasses = 'w-[90%] max-w-6xl';

/**
 * Article spacing classes for page layouts (main sections)
 */
export const articleSpacingClasses = 'flex flex-col gap-4 md:gap-6';

/**
 * Section internal spacing (between header and content)
 */
export const sectionSpacingClasses = 'flex flex-col gap-1 md:gap-2';

/**
 * Shared vertical padding for the main container
 */
export const pagePaddingClasses = 'px-4 pt-6 pb-6 md:pt-8 md:pb-8';

/**
 * Shared vertical padding for the navigation
 */
export const navPaddingClasses = 'py-4 md:py-4 lg:py-4';

/**
 * Shared vertical padding for the footer
 */
export const footerPaddingClasses = 'py-6 md:py-6 lg:py-6';

/**
 * Link hover transition classes
 */
export const linkTransitionClasses = 'hover:text-foreground transition-colors';

/**
 * Page title heading classes (h1)
 */
export const pageTitleClasses = 'text-4xl md:text-5xl font-bold tracking-tight leading-tight';

/**
 * Page subtitle/description classes
 */
export const pageSubtitleClasses = 'text-xl md:text-2xl text-muted-foreground font-light leading-relaxed';

/**
 * Inline link styling (underline with hover)
 */
export const inlineLinkClasses = 'underline underline-offset-2 hover:opacity-80';

/**
 * Blockquote styling
 */
export const blockquoteClasses =
  'text-lg text-foreground leading-relaxed border-l-2 border-border pl-4 italic';

/**
 * Prose text styling for body content
 */
export const proseTextClasses = 'text-foreground leading-relaxed';

/**
 * Muted text for secondary content
 */
export const mutedTextClasses = 'text-muted-foreground';

/**
 * Combine multiple class strings
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
