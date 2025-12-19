import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { parseMarkdownText, parseBoldText, renderBioParagraphs } from './markdown';

describe('parseMarkdownText', () => {
  it('returns plain text unchanged', () => {
    const result = parseMarkdownText('Hello world');
    expect(result).toHaveLength(1);
    expect(result[0]).toBe('Hello world');
  });

  it('parses bold text with **', () => {
    render(<p>{parseMarkdownText('Hello **world**')}</p>);
    const strong = document.querySelector('strong');
    expect(strong).toBeInTheDocument();
    expect(strong).toHaveTextContent('world');
  });

  it('parses italic text with *', () => {
    render(<p>{parseMarkdownText('Hello *world*')}</p>);
    const em = document.querySelector('em');
    expect(em).toBeInTheDocument();
    expect(em).toHaveTextContent('world');
  });

  it('parses links with [text](url)', () => {
    render(<p>{parseMarkdownText('Visit [Google](https://google.com)')}</p>);
    const link = screen.getByRole('link', { name: 'Google' });
    expect(link).toHaveAttribute('href', 'https://google.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('handles multiple formatting in same text', () => {
    render(<p>{parseMarkdownText('**Bold** and *italic* and [link](url)')}</p>);
    expect(document.querySelector('strong')).toHaveTextContent('Bold');
    expect(document.querySelector('em')).toHaveTextContent('italic');
    expect(screen.getByRole('link')).toHaveTextContent('link');
  });

  it('preserves text between formatted parts', () => {
    render(<p>{parseMarkdownText('Start **bold** middle *italic* end')}</p>);
    expect(document.body).toHaveTextContent('Start bold middle italic end');
  });

  it('handles empty string', () => {
    const result = parseMarkdownText('');
    expect(result).toHaveLength(0);
  });
});

describe('parseBoldText (legacy)', () => {
  it('works as alias for parseMarkdownText', () => {
    render(<p>{parseBoldText('Hello **world**')}</p>);
    const strong = document.querySelector('strong');
    expect(strong).toBeInTheDocument();
    expect(strong).toHaveTextContent('world');
  });
});

describe('renderBioParagraphs', () => {
  it('splits text into paragraphs', () => {
    render(<div>{renderBioParagraphs('First paragraph\n\nSecond paragraph')}</div>);
    const paragraphs = document.querySelectorAll('p');
    expect(paragraphs).toHaveLength(2);
    expect(paragraphs[0]).toHaveTextContent('First paragraph');
    expect(paragraphs[1]).toHaveTextContent('Second paragraph');
  });

  it('applies markdown formatting within paragraphs', () => {
    render(<div>{renderBioParagraphs('**Bold** text\n\n*Italic* text')}</div>);
    expect(document.querySelector('strong')).toHaveTextContent('Bold');
    expect(document.querySelector('em')).toHaveTextContent('Italic');
  });

  it('handles single paragraph', () => {
    render(<div>{renderBioParagraphs('Single paragraph')}</div>);
    const paragraphs = document.querySelectorAll('p');
    expect(paragraphs).toHaveLength(1);
  });
});
