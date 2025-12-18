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
  'pt-4 text-lg font-bold tracking-[0.2em] uppercase text-muted-foreground/60 border-b border-border pb-4';

/**
 * Container width classes for consistent layout
 */
export const containerClasses = 'w-[90%] max-w-6xl';

/**
 * Article spacing classes for page layouts
 */
export const articleSpacingClasses = 'space-y-24 md:space-y-32';

/**
 * Link hover transition classes
 */
export const linkTransitionClasses = 'hover:text-foreground transition-colors';

/**
 * Combine multiple class strings
 */
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
