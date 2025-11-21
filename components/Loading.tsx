import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-950 z-50 transition-colors duration-500">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 font-display font-medium tracking-widest animate-pulse">
          INITIALIZING...
        </p>
      </div>
    </div>
  );
};

export default Loading;