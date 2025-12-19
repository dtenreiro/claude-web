# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimal personal website built with modern web technologies. The site serves as a portfolio/personal brand page with biographical information, work experience, current activities, and social links.

**Live URL**: https://dtenreiro.github.io/claude-web/

## Tech Stack

- **Next.js 16** - React framework configured for static export
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first styling with CSS variables
- **TypeScript 5** - Strict mode enabled
- **ESLint 9** - With Next.js and Prettier integration
- **Prettier** - Code formatting with Tailwind plugin

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navigation and Footer
│   ├── page.tsx           # Home page (bio, experience, education)
│   ├── globals.css        # Global styles and CSS variables
│   ├── now/page.tsx       # "Now" page - current activities
│   └── links/page.tsx     # Social/contact links page
├── components/
│   ├── navigation.tsx     # Sticky header navigation (client component)
│   └── footer.tsx         # Site footer with social links
└── lib/
    └── config.ts          # Centralized site configuration
```

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/config.ts` | **All site content** - bio, experience, links, navigation |
| `src/app/globals.css` | CSS variables for theming (light/dark mode) |
| `next.config.ts` | Static export + GitHub Pages basePath configuration |
| `.prettierrc` | Code formatting rules |
| `eslint.config.mjs` | ESLint flat config with Next.js + Prettier |

## Development Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build static export to ./out
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## Code Conventions

### TypeScript
- Strict mode enabled
- Use path alias `@/*` for imports from `src/`
- Export types explicitly when needed

### Styling
- Use Tailwind CSS utility classes
- CSS variables defined in `globals.css` for theming
- Colors: `--background`, `--foreground`, `--muted`, `--muted-foreground`, `--border`, `--accent`
- Supports automatic dark mode via `prefers-color-scheme`
- Use semantic color classes: `text-foreground`, `bg-background`, `text-muted-foreground`, etc.

### Components
- Use `'use client'` directive only when needed (e.g., `usePathname` in navigation)
- Server components by default
- Page metadata defined with `export const metadata: Metadata`

### Formatting
- Semicolons: required
- Quotes: single
- Tab width: 2 spaces
- Print width: 100 characters
- Trailing commas: all

## Content Updates

**To update site content, edit `src/lib/config.ts`:**

```typescript
export const siteConfig = {
  name: 'Your Name',
  location: 'City, Country',
  siteUrl: 'https://yoursite.com',
  shortBio: '...',
  fullBio: '...',
  currentRole: '...',
  currentCompany: '...',
  experience: [...],
  now: { updated: 'Month Year', sections: [...] },
  links: { email, twitter, github, linkedin },
  allLinks: [...],
  navigation: [...],
};
```

## Deployment

- **Platform**: GitHub Pages via GitHub Actions
- **Trigger**: Push to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Output**: Static files exported to `./out`

### Important Configuration
The site uses a basePath (`/claude-web`) for GitHub Pages:
```typescript
// next.config.ts
basePath: isProd ? '/claude-web' : '',
assetPrefix: isProd ? '/claude-web' : '',
```

For custom domains, remove basePath and assetPrefix.

## Design Patterns

### Layout Structure
```
┌─────────────────────────────────────┐
│  Navigation (sticky, blur backdrop) │
├─────────────────────────────────────┤
│                                     │
│  Main Content (centered, max-w-6xl) │
│                                     │
├─────────────────────────────────────┤
│  Footer (social links, copyright)   │
└─────────────────────────────────────┘
```

### Responsive Breakpoints
- Mobile-first approach
- Key breakpoints: `sm:`, `md:`, `lg:`
- Content width: `w-[90%] max-w-6xl`

### Section Headers
Consistent styling pattern:
```tsx
<h2 className="pt-4 text-lg font-bold tracking-[0.2em] uppercase text-muted-foreground/60 border-b border-border pb-4">
  Section Title
</h2>
```

## Common Tasks

### Adding a new page
1. Create `src/app/[page-name]/page.tsx`
2. Export metadata for SEO
3. Add to `siteConfig.navigation` array in `config.ts`

### Adding a new link
Add to `siteConfig.allLinks` array:
```typescript
{ name: 'Platform', url: 'https://...', description: 'Description' }
```

### Updating experience
Modify `siteConfig.experience` array with new job entries.

### Changing colors
Edit CSS variables in `src/app/globals.css` for both `:root` (light) and `@media (prefers-color-scheme: dark)` (dark mode).
