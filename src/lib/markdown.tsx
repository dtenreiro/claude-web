import { ReactNode } from 'react';

/**
 * Parse markdown-style bold text (**text**) into React elements
 */
export function parseBoldText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/**
 * Render paragraphs with markdown-style bold text support
 */
export function renderBioParagraphs(fullBio: string): ReactNode {
  return fullBio.split('\n\n').map((paragraph, index) => (
    <p key={index} className="text-foreground leading-relaxed">
      {parseBoldText(paragraph)}
    </p>
  ));
}
