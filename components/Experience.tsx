import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-display font-bold mb-20 text-center text-slate-900 dark:text-white"
      >
        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Journey</span>
      </motion.h2>

      <div className="relative border-l border-slate-300 dark:border-slate-800 ml-4 md:ml-10 space-y-16">
        {RESUME_DATA.experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[7px] top-2 w-[14px] h-[14px] rounded-full bg-slate-50 dark:bg-darker border-[3px] border-secondary shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>

            <div className="bg-white/60 dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200 dark:border-slate-800/50 p-8 rounded-2xl hover:border-secondary/30 hover:bg-white/80 dark:hover:bg-slate-900/40 transition-all shadow-sm dark:shadow-none">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-3">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    {job.role}
                  </h3>
                  <span className="text-lg text-secondary font-medium flex items-center gap-2 mt-1">
                    <Briefcase className="w-4 h-4" /> {job.company}
                  </span>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">
                  {job.duration}
                </span>
              </div>
              
              <ul className="space-y-3 text-slate-600 dark:text-gray-400 text-base leading-relaxed">
                {job.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                     <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors shrink-0"></span> 
                     <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;