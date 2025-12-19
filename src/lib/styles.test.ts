import { describe, it, expect } from 'vitest';
import { cn } from './styles';

describe('cn utility', () => {
  it('combines multiple class strings', () => {
    expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
  });

  it('filters out undefined values', () => {
    expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
  });

  it('filters out false values', () => {
    expect(cn('class1', false, 'class2')).toBe('class1 class2');
  });

  it('filters out empty strings', () => {
    expect(cn('class1', '', 'class2')).toBe('class1 class2');
  });

  it('returns empty string for no valid classes', () => {
    expect(cn(undefined, false)).toBe('');
  });

  it('handles single class', () => {
    expect(cn('single-class')).toBe('single-class');
  });
});
