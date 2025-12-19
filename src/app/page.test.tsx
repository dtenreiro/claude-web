import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './page';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About Daniel');
  });

  it('renders the Bio section', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: 'Bio' })).toBeInTheDocument();
  });

  it('renders the Experience section', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  });

  it('renders the Education section', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument();
  });

  it('renders experience items from config', () => {
    render(<HomePage />);
    // Text is split across elements, use regex matcher
    expect(screen.getByText(/Managing Partner/)).toBeInTheDocument();
    // Autoencoder Holdings appears in both bio and experience, use getAllByText
    const autoencoderElements = screen.getAllByText(/Autoencoder Holdings/);
    expect(autoencoderElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders education items', () => {
    render(<HomePage />);
    // Education items are rendered as h3 headings
    expect(screen.getByRole('heading', { name: 'Yale University' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Regis High School' })).toBeInTheDocument();
  });

  it('renders bio content with markdown formatting', () => {
    render(<HomePage />);
    // Check that bold text is rendered (from **Autoencoder Holdings** in config)
    const strongElements = document.querySelectorAll('strong');
    expect(strongElements.length).toBeGreaterThan(0);
  });
});
