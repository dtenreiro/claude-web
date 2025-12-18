'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { containerClasses, focusRingClasses } from '@/lib/styles';

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 flex justify-center border-b backdrop-blur-sm">
      <nav className={`${containerClasses} py-16 md:py-16 lg:py-16`}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-foreground hover:text-muted-foreground font-semibold transition-colors rounded-md ${focusRingClasses}`}
          >
            {siteConfig.name}
          </Link>
          <ul className="flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors rounded-md ${focusRingClasses} focus-visible:text-foreground ${pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
