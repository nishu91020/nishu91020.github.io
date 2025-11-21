import React, { Suspense, useState, useEffect } from 'react';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationAndAchievements from './components/EducationAndAchievements';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  // Toggle Theme Function
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Apply theme class to HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ErrorBoundary>
      <main className="relative min-h-screen w-full overflow-x-hidden text-slate-800 dark:text-slate-200 selection:bg-primary/30 selection:text-primary-foreground transition-colors duration-500">
        {/* 3D Background Layer */}
        <Suspense fallback={<Loading />}>
          <Background3D isDark={isDark} />
        </Suspense>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400 group-hover:rotate-90 transition-transform duration-500" />
          ) : (
            <Moon className="w-6 h-6 text-slate-600 group-hover:-rotate-12 transition-transform duration-500" />
          )}
        </button>

        {/* Content Layer */}
        <div className="relative z-0">
          <Hero />
          
          <div className="space-y-12 pb-20 bg-gradient-to-b from-transparent via-slate-50/50 dark:via-slate-950/50 to-transparent">
            <Skills />
            <Experience />
            <Projects />
            <EducationAndAchievements />
          </div>

          <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur">
            <p>© {new Date().getFullYear()} Nishu Rai.</p>
          </footer>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default App;