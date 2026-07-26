import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled React Exception caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-2xl font-bold mb-4">
            ⚠️
          </div>
          <h2 className="font-display font-bold text-2xl mb-2 text-white">Something went wrong</h2>
          <p className="text-white/70 text-sm max-w-md mb-4 leading-relaxed">
            An unexpected error occurred while loading this page.
          </p>

          {this.state.error && (
            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 max-w-lg w-full text-left overflow-auto max-h-48 text-xs font-mono text-red-300">
              <p className="font-bold text-red-400 mb-1">{this.state.error.toString()}</p>
              {this.state.errorInfo?.componentStack && (
                <pre className="text-[10px] text-white/50 whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null, errorInfo: null });
                window.location.reload();
              }}
              className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              Refresh Page
            </button>
            <button
              onClick={() => {
                try {
                  localStorage.clear();
                  sessionStorage.clear();
                } catch(e) {}
                window.location.href = '/';
              }}
              className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white/80 bg-white/10 border border-white/20 hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
            >
              Reset Cache & Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
