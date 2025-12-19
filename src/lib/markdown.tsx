import { ReactNode } from 'react';

type ParsedPart = {
  type: 'text' | 'bold' | 'italic' | 'link';
  content: string;
  href?: string;
};

/**
 * Parse markdown text into structured parts
 * Supports: **bold**, *italic*, and [text](url) links
 */
function parseMarkdownParts(text: string): ParsedPart[] {
  const parts: ParsedPart[] = [];
  // Combined regex for bold, italic, and links
  // Order matters: bold (**) before italic (*) to avoid conflicts
  const regex = /(\*\*.*?\*\*)|(\*[^*]+?\*)|(\[.*?\]\(.*?\))/g;

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
    }

    const matchedText = match[0];

    if (match[1]) {
      // Bold: **text**
      parts.push({ type: 'bold', content: matchedText.slice(2, -2) });
    } else if (match[2]) {
      // Italic: *text*
      parts.push({ type: 'italic', content: matchedText.slice(1, -1) });
    } else if (match[3]) {
      // Link: [text](url)
      const linkMatch = matchedText.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        parts.push({ type: 'link', content: linkMatch[1], href: linkMatch[2] });
      }
    }

    lastIndex = match.index + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIndex) });
  }

  return parts;
}

/**
 * Parse markdown-style text into React elements
 * Supports: **bold**, *italic*, and [text](url) links
 */
export function parseMarkdownText(text: string): ReactNode[] {
  const parts = parseMarkdownParts(text);

  return parts.map((part, i) => {
    switch (part.type) {
      case 'bold':
        return (
          <strong key={i} className="font-semibold text-foreground">
            {part.content}
          </strong>
        );
      case 'italic':
        return (
          <em key={i} className="italic">
            {part.content}
          </em>
        );
      case 'link':
        return (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80"
          >
            {part.content}
          </a>
        );
      default:
        return part.content;
    }
  });
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use parseMarkdownText instead
 */
export function parseBoldText(text: string): ReactNode[] {
  return parseMarkdownText(text);
}

/**
 * Render paragraphs with markdown text support
 * Supports: **bold**, *italic*, and [text](url) links
 */
export function renderBioParagraphs(fullBio: string): ReactNode[] {
  return fullBio.split('\n\n').map((paragraph, index) => (
    <p key={index} className="text-foreground leading-relaxed">
      {parseMarkdownText(paragraph)}
    </p>
  ));
}
