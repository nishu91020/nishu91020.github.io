import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 p-4">
          <div className="max-w-md text-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-red-200 dark:border-red-900/50 shadow-xl">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 font-display">Something went wrong</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We encountered an unexpected error while loading the 3D experience.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;