import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Code2, Database, Server, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Languages": <Code2 className="w-8 h-8 mb-3 text-primary" />,
  "Libraries / Frameworks": <Server className="w-8 h-8 mb-3 text-secondary" />,
  "Databases / Platforms": <Database className="w-8 h-8 mb-3 text-accent" />,
  "Subjects": <Cpu className="w-8 h-8 mb-3 text-orange-400" />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-display font-bold mb-16 text-center text-slate-900 dark:text-white"
      >
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {RESUME_DATA.skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800/60 p-8 rounded-2xl hover:border-primary/50 dark:hover:border-slate-600 hover:bg-white/80 dark:hover:bg-slate-800/50 transition-all group hover:shadow-lg"
          >
            <div className="flex flex-col items-center text-center mb-6">
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-full border border-slate-200 dark:border-slate-800 mb-3 group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors shadow-sm">
                 {iconMap[category.category] || <Code2 className="w-8 h-8 text-gray-400" />}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white font-display tracking-wide">{category.category}</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-gray-400 text-sm rounded-lg border border-slate-200 dark:border-slate-800 group-hover:border-primary/30 group-hover:text-primary/90 dark:group-hover:text-primary/90 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;