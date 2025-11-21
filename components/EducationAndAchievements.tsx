import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Trophy } from 'lucide-react';

const EducationAndAchievements: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Education Column */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="p-3 bg-primary/10 rounded-xl">
             <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Education</h2>
        </motion.div>
        
        <div className="space-y-6">
          {RESUME_DATA.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 p-8 rounded-2xl hover:border-primary/30 transition-all group shadow-sm dark:shadow-none"
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{edu.school}</h3>
              <p className="text-primary/80 text-base font-medium mb-4">{edu.degree}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-slate-500 dark:text-gray-400 border-t border-slate-200 dark:border-slate-800/50 pt-4 mt-2 gap-2">
                <span className="bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">{edu.duration}</span>
                <span className="text-slate-700 dark:text-gray-300 font-medium">{edu.details}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Column */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="p-3 bg-yellow-500/10 rounded-xl">
             <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Achievements</h2>
        </motion.div>

        <div className="space-y-4">
          {RESUME_DATA.achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-5 p-6 bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-xl hover:bg-white/80 dark:hover:bg-slate-800/60 hover:border-yellow-500/30 transition-all group shadow-sm dark:shadow-none"
            >
              <div className="mt-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] group-hover:shadow-[0_0_15px_rgba(234,179,8,0.8)] transition-shadow"></div>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{ach.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default EducationAndAchievements;