import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HighlightsPage from './page';
import { siteConfig } from '@/lib/config';

// Mock TweetEmbed since it relies on external Twitter widget
vi.mock('@/components/tweet-embed', () => ({
  TweetEmbed: ({ tweetUrl }: { tweetUrl: string }) => (
    <div data-testid="tweet-embed">{tweetUrl}</div>
  ),
}));

describe('HighlightsPage', () => {
  it('renders the main heading', () => {
    render(<HighlightsPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Highlights');
  });

  it('renders the description text', () => {
    render(<HighlightsPage />);
    expect(
      screen.getByText('Notable mentions, reviews, and selected writing.')
    ).toBeInTheDocument();
  });

  it('renders all section categories from config', () => {
    render(<HighlightsPage />);
    siteConfig.highlights.forEach((section) => {
      expect(screen.getByRole('heading', { name: section.category })).toBeInTheDocument();
    });
  });

  it('renders section subjects when present', () => {
    render(<HighlightsPage />);
    siteConfig.highlights.forEach((section) => {
      if (section.subject) {
        expect(screen.getByText(section.subject)).toBeInTheDocument();
      }
    });
  });

  it('renders quotes in blockquotes', () => {
    render(<HighlightsPage />);
    const blockquotes = document.querySelectorAll('blockquote');
    expect(blockquotes.length).toBeGreaterThan(0);
  });

  it('renders tweet embeds for items with embedUrl', () => {
    render(<HighlightsPage />);
    const tweetEmbeds = screen.getAllByTestId('tweet-embed');
    expect(tweetEmbeds.length).toBeGreaterThan(0);
  });

  it('renders author attributions', () => {
    render(<HighlightsPage />);
    // Check for at least one author from config
    expect(screen.getByText(/Paul W. Gleason/)).toBeInTheDocument();
  });

  it('renders links with correct attributes for external sources', () => {
    render(<HighlightsPage />);
    const externalLinks = screen.getAllByRole('link');
    const externalLink = externalLinks.find(
      (link) => link.getAttribute('href')?.startsWith('http')
    );
    if (externalLink) {
      expect(externalLink).toHaveAttribute('target', '_blank');
      expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});
