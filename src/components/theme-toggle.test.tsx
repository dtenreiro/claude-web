import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ThemeToggle } from './theme-toggle';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('ThemeToggle', () => {
  beforeEach(() => {
    // Clear localStorage mock before each test
    localStorageMock.clear();
    vi.clearAllMocks();
    // Reset document classes
    document.documentElement.classList.remove('light', 'dark');
  });

  it('renders the toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('starts with system theme by default', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Current theme: system. Click to change.');
  });

  it('cycles from system to light on click', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(localStorage.getItem('theme')).toBe('light');
    expect(button).toHaveAttribute('aria-label', 'Current theme: light. Click to change.');
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });

  it('cycles from light to dark on click', () => {
    localStorage.setItem('theme', 'light');
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(localStorage.getItem('theme')).toBe('dark');
    expect(button).toHaveAttribute('aria-label', 'Current theme: dark. Click to change.');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('cycles from dark to system on click', () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(localStorage.getItem('theme')).toBe('system');
    expect(button).toHaveAttribute('aria-label', 'Current theme: system. Click to change.');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(document.documentElement.classList.contains('light')).toBe(false);
  });

  it('has correct title attribute', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Theme: system');
  });

  it('displays sun icon for light theme', () => {
    localStorage.setItem('theme', 'light');
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    // Check SVG exists within button
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // Sun icon has a circle element
    expect(svg?.querySelector('circle')).toBeInTheDocument();
  });

  it('displays moon icon for dark theme', () => {
    localStorage.setItem('theme', 'dark');
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // Moon icon has a specific path, no circle
    expect(svg?.querySelector('circle')).not.toBeInTheDocument();
    expect(svg?.querySelector('path')).toBeInTheDocument();
  });

  it('displays system icon for system theme', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // System icon has a rect element (monitor shape)
    expect(svg?.querySelector('rect')).toBeInTheDocument();
  });

  it('has theme-toggle class', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('theme-toggle');
  });
});
