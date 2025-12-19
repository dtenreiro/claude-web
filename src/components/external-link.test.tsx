import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExternalLink } from './external-link';

describe('ExternalLink', () => {
  it('renders children correctly', () => {
    render(<ExternalLink href="https://example.com">Click me</ExternalLink>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('opens https links in new tab with security attributes', () => {
    render(<ExternalLink href="https://example.com">External</ExternalLink>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('opens http links in new tab with security attributes', () => {
    render(<ExternalLink href="http://example.com">External</ExternalLink>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('opens protocol-relative URLs in new tab', () => {
    render(<ExternalLink href="//example.com/path">Protocol Relative</ExternalLink>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('opens internal links in same tab', () => {
    render(<ExternalLink href="/about">Internal</ExternalLink>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('opens mailto links in same tab (default mail app)', () => {
    render(<ExternalLink href="mailto:test@example.com">Email</ExternalLink>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('opens tel links in same tab (default phone app)', () => {
    render(<ExternalLink href="tel:+1234567890">Call</ExternalLink>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('applies custom className', () => {
    render(
      <ExternalLink href="/test" className="custom-class">
        Link
      </ExternalLink>
    );
    expect(screen.getByRole('link')).toHaveClass('custom-class');
  });

  it('sets correct href attribute', () => {
    render(<ExternalLink href="https://github.com">GitHub</ExternalLink>);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://github.com');
  });
});
