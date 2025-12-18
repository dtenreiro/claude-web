import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Container } from '@/components/container';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <Navigation />
        <main className="flex w-full flex-1 flex-col items-center">
          <Container className="px-4 py-20 md:py-32 lg:py-40">{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
