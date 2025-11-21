import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-display font-bold mb-16 text-center text-slate-900 dark:text-white"
      >
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESUME_DATA.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800/60 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] hover:border-accent/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 h-full flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full">
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono text-accent/90 mb-2 bg-accent/10 px-3 py-2 rounded-lg border border-accent/20 inline-flex items-center gap-2">
                  <Code className="w-3 h-3" />
                  {project.techStack}
                </div>
              </div>

              <div className="space-y-3 flex-grow">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-light">
                    {desc}
                  </p>
                ))}
              </div>

              {project.link && (
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/50">
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 dark:hover:text-white transition-colors group/link">
                    View Source <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                   </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;