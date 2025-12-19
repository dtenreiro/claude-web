'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { containerClasses, focusRingClasses, navPaddingClasses } from '@/lib/styles';
import { ThemeToggle } from './theme-toggle';

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 flex justify-center border-b backdrop-blur-sm">
      <nav className={`${containerClasses} ${navPaddingClasses}`}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-foreground hover:text-link font-semibold transition-colors rounded-md ${focusRingClasses}`}
          >
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-md transition-colors rounded-md relative ${focusRingClasses} focus-visible:text-foreground ${
                      pathname === item.href
                        ? 'text-link font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-link rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
