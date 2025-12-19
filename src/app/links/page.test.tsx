import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LinksPage from './page';
import { siteConfig } from '@/lib/config';

describe('LinksPage', () => {
  it('renders the main heading', () => {
    render(<LinksPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Links');
  });

  it('renders the description text', () => {
    render(<LinksPage />);
    expect(screen.getByText('Find me elsewhere on the internet.')).toBeInTheDocument();
  });

  it('renders the Connect section header', () => {
    render(<LinksPage />);
    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument();
  });

  it('renders all links from config', () => {
    render(<LinksPage />);
    siteConfig.allLinks.forEach((link) => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });

  it('renders link descriptions', () => {
    render(<LinksPage />);
    siteConfig.allLinks.forEach((link) => {
      expect(screen.getByText(link.description)).toBeInTheDocument();
    });
  });

  it('renders correct number of link cards', () => {
    render(<LinksPage />);
    const links = screen.getAllByRole('link');
    // Should have at least the number of allLinks
    expect(links.length).toBeGreaterThanOrEqual(siteConfig.allLinks.length);
  });
});
