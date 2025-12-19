import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Container } from '@/components/container';
import { ErrorBoundary } from '@/components/error-boundary';
import { JsonLd } from '@/components/json-ld';
import { siteConfig } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.name,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.name,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { pagePaddingClasses } from '@/lib/styles';

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.add('light');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <Navigation />
        <main className="flex w-full flex-1 flex-col items-center">
          <Container className={`${pagePaddingClasses} animate-fade-in`}>
            <ErrorBoundary>{children}</ErrorBoundary>
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
