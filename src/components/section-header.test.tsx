import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from './section-header';

describe('SectionHeader', () => {
  it('renders the title text', () => {
    render(<SectionHeader title="Experience" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Experience');
  });

  it('applies custom className', () => {
    render(<SectionHeader title="Test" className="custom-class" />);
    expect(screen.getByRole('heading')).toHaveClass('custom-class');
  });

  it('renders as h2 element', () => {
    render(<SectionHeader title="About" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.tagName).toBe('H2');
  });
});
