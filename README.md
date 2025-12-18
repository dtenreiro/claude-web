# Personal Website

A minimal, modern personal website built with Next.js 16, React 19, and Tailwind CSS 4. Designed for simplicity and easy customization.

## Features

- **Home** - Introduction with name, title, bio, and current role
- **About** - Extended biography and work experience
- **Now** - What you're currently focused on ([now page](https://nownownow.com/about) concept)
- **Links** - All your social and contact links in one place

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with static export
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

Generates a static export in the `out` directory.

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Run Prettier
npm run format
```

## Customization

All personal content is centralized in `src/lib/config.ts`. Update this file to personalize your site:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  tagline: "A brief tagline about yourself",
  location: "City, Country",
  shortBio: "...",
  fullBio: "...",
  currentRole: "...",
  currentCompany: "...",
  experience: [...],
  now: {...},
  links: {...},
  // ...
};
```

## Deployment

This site is configured for GitHub Pages deployment with automatic builds on push to `main`.

### GitHub Pages Setup

1. Go to your repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to `main` to trigger deployment

The site will be available at `https://yourusername.github.io/claude-web/`

### Custom Domain

To use a custom domain, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // Remove basePath for custom domain
  assetPrefix: '',
  // ...
};
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Home page
│   ├── about/page.tsx  # About page
│   ├── now/page.tsx    # Now page
│   ├── links/page.tsx  # Links page
│   └── layout.tsx      # Root layout
├── components/
│   ├── navigation.tsx  # Site navigation
│   └── footer.tsx      # Site footer
└── lib/
    └── config.ts       # Site configuration
```

## License

MIT
