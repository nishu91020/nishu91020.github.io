import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 backdrop-blur-md bg-white/40 dark:bg-slate-950/40 p-10 md:p-14 rounded-3xl border border-white/30 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      >
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary to-secondary dark:from-white dark:via-primary dark:to-secondary tracking-tight">
          {RESUME_DATA.name}
        </h1>
        <h2 className="font-display text-2xl md:text-4xl text-slate-700 dark:text-gray-200 mb-8 font-light tracking-wide">
          Full-stack Software Developer
        </h2>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-gray-400 mb-10 leading-relaxed font-light mx-auto">
          Passionate about building scalable systems, low-level system design, and solving complex engineering problems. 
          Experienced in Full Stack Development, Cloud Infrastructure, and AI Integration.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 rounded-full transition-all border border-slate-200 dark:border-white/10 hover:border-primary/50 group hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] text-slate-700 dark:text-slate-200">
            <Linkedin className="w-5 h-5 text-primary group-hover:text-primary dark:group-hover:text-white transition-colors" />
            <span className="font-medium tracking-wide">LinkedIn</span>
          </a>
          <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 rounded-full transition-all border border-slate-200 dark:border-white/10 hover:border-secondary/50 group hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] text-slate-700 dark:text-slate-200">
            <Github className="w-5 h-5 text-secondary group-hover:text-secondary dark:group-hover:text-white transition-colors" />
            <span className="font-medium tracking-wide">GitHub</span>
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <p className="text-slate-500 dark:text-gray-500 text-sm tracking-widest uppercase font-medium">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;