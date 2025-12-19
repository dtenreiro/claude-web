import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NowPage from './page';
import { siteConfig } from '@/lib/config';

describe('NowPage', () => {
  it('renders the main heading', () => {
    render(<NowPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Now');
  });

  it('renders the description text', () => {
    render(<NowPage />);
    expect(
      screen.getByText("What I'm focused on at this point in my life.")
    ).toBeInTheDocument();
  });

  it('renders the last updated date', () => {
    render(<NowPage />);
    expect(screen.getByText(`Last updated: ${siteConfig.now.updated}.`)).toBeInTheDocument();
  });

  it('renders all sections from config', () => {
    render(<NowPage />);
    siteConfig.now.sections.forEach((section) => {
      expect(screen.getByRole('heading', { name: section.title })).toBeInTheDocument();
    });
  });

  it('renders section content', () => {
    render(<NowPage />);
    siteConfig.now.sections.forEach((section) => {
      expect(screen.getByText(section.content)).toBeInTheDocument();
    });
  });

  it('renders the now page footer with link', () => {
    render(<NowPage />);
    const nowPageLink = screen.getByRole('link', { name: 'now page' });
    expect(nowPageLink).toHaveAttribute('href', 'https://nownownow.com/about');
    expect(nowPageLink).toHaveAttribute('target', '_blank');
    expect(nowPageLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the footer encouragement text', () => {
    render(<NowPage />);
    expect(
      screen.getByText(/If you have your own site, you should make one too/i)
    ).toBeInTheDocument();
  });
});
