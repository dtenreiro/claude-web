'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-4 border border-border rounded-lg bg-background">
          <h2 className="text-lg font-semibold text-foreground mb-2">Something went wrong</h2>
          <p className="text-muted-foreground text-sm">
            This section failed to load. Please try refreshing the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Functional wrapper for easier use with Server Components
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
): React.ComponentType<P> {
  function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  }

  WithErrorBoundary.displayName = `WithErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithErrorBoundary;
}
