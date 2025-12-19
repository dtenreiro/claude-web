'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface TweetEmbedProps {
  tweetUrl: string;
  theme?: 'light' | 'dark';
  maxRetries?: number;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          tweetId: string,
          container: HTMLElement,
          options?: object
        ) => Promise<HTMLElement | undefined>;
      };
    };
  }
}

// Extract tweet ID from various URL formats
function extractTweetId(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    // Handle /username/status/ID format
    const statusIndex = pathParts.indexOf('status');
    if (statusIndex !== -1 && pathParts[statusIndex + 1]) {
      return pathParts[statusIndex + 1].split('?')[0];
    }
    // Fallback to last path segment
    const lastPart = pathParts.pop();
    return lastPart?.split('?')[0] || null;
  } catch {
    // Fallback for malformed URLs
    return url.split('/').pop()?.split('?')[0] || null;
  }
}

// Detect current theme from document
function detectTheme(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'light';
  if (document.documentElement.classList.contains('dark')) return 'dark';
  if (document.documentElement.classList.contains('light')) return 'light';
  // Check system preference
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

export function TweetEmbed({ tweetUrl, theme, maxRetries = 3 }: TweetEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [retryCount, setRetryCount] = useState(0);
  const initialized = useRef(false);

  const renderTweet = useCallback(
    (tweetId: string, container: HTMLElement, currentTheme: 'light' | 'dark') => {
      if (window.twttr?.widgets) {
        window.twttr.widgets
          .createTweet(tweetId, container, {
            theme: currentTheme,
            dnt: true,
            conversation: 'none',
          })
          .then((el) => {
            if (el) {
              setStatus('loaded');
            } else {
              throw new Error('Tweet not found');
            }
          })
          .catch(() => {
            setRetryCount((prev) => prev + 1);
          });
      }
    },
    []
  );

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const tweetId = extractTweetId(tweetUrl);
    if (!tweetId || !containerRef.current) {
      setStatus('error');
      return;
    }

    const container = containerRef.current;
    const currentTheme = theme || detectTheme();

    // Load Twitter widget script if not already loaded
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => renderTweet(tweetId, container, currentTheme);
      script.onerror = () => setStatus('error');
      document.body.appendChild(script);
    } else {
      renderTweet(tweetId, container, currentTheme);
    }
  }, [tweetUrl, theme, renderTweet]);

  // Handle retry logic
  useEffect(() => {
    if (retryCount === 0 || retryCount > maxRetries) {
      if (retryCount > maxRetries) {
        setStatus('error');
      }
      return;
    }

    const tweetId = extractTweetId(tweetUrl);
    if (!tweetId || !containerRef.current) {
      setStatus('error');
      return;
    }

    const container = containerRef.current;
    const currentTheme = theme || detectTheme();

    // Clear container and retry after delay
    const timeoutId = setTimeout(() => {
      container.innerHTML = '';
      renderTweet(tweetId, container, currentTheme);
    }, 1000 * retryCount); // Exponential backoff

    return () => clearTimeout(timeoutId);
  }, [retryCount, maxRetries, tweetUrl, theme, renderTweet]);

  const handleRetry = () => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }
    setStatus('loading');
    setRetryCount(0);
    initialized.current = false;
  };

  return (
    <div className="min-h-[100px]">
      {status === 'loading' && (
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading tweet...
          {retryCount > 0 && <span>(retry {retryCount}/{maxRetries})</span>}
        </div>
      )}
      {status === 'error' && (
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground text-sm">Failed to load tweet.</p>
          <div className="flex gap-3">
            <button
              onClick={handleRetry}
              className="text-sm text-foreground underline underline-offset-2 hover:opacity-80"
            >
              Try again
            </button>
            <a
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline underline-offset-2 hover:opacity-80"
            >
              View on X
            </a>
          </div>
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}
