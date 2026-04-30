'use client';
import { Code, Layout, Globe, Cpu, Layers, Terminal, Database, Shield, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Skill, ProfessionalSkill } from '../types';

const Skills = () => {
  const technicalSkills: Skill[] = [
    { name: 'JavaScript', percentage: 90, icon: 'Globe' },
    { name: 'TypeScript', percentage: 85, icon: 'Code' },
    { name: 'React', percentage: 90, icon: 'Cpu' },
    { name: 'Next.js', percentage: 85, icon: 'Layers' },
    { name: 'Node.js', percentage: 80, icon: 'Terminal' },
    { name: 'Express.js', percentage: 80, icon: 'Settings' },
    { name: 'PostgreSQL', percentage: 75, icon: 'Database' },
    { name: 'Prisma', percentage: 75, icon: 'Shield' },
    { name: 'Tailwind CSS', percentage: 95, icon: 'Layout' },
  ];

  const professionalSkills: ProfessionalSkill[] = [
    { name: 'Creativity', percentage: 90 },
    { name: 'Communication', percentage: 85 },
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Teamwork', percentage: 90 },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative" id="skills">
      <div className="bg-glow top-0 right-0 opacity-20"></div>
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Technologies</h2>
        <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
          I work with modern tools and technologies to build fast, scalable and efficient web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 items-start">
        {/* Left: Technical Skills */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Technical Skills</h3>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-8">
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">
                      {skill.icon === 'Globe' && <Globe className="w-5 h-5" />}
                      {skill.icon === 'Code' && <Code className="w-5 h-5" />}
                      {skill.icon === 'Cpu' && <Cpu className="w-5 h-5" />}
                      {skill.icon === 'Layers' && <Layers className="w-5 h-5" />}
                      {skill.icon === 'Terminal' && <Terminal className="w-5 h-5" />}
                      {skill.icon === 'Settings' && <Settings className="w-5 h-5" />}
                      {skill.icon === 'Database' && <Database className="w-5 h-5" />}
                      {skill.icon === 'Shield' && <Shield className="w-5 h-5" />}
                      {skill.icon === 'Layout' && <Layout className="w-5 h-5" />}
                    </span>
                    <span className="text-white font-semibold tracking-tight">{skill.name}</span>
                  </div>
                  <span className="bg-surface px-3 py-1 rounded-md text-xs font-bold text-primary border border-primary/20">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Professional Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Professional Skills</h3>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            {professionalSkills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-white/5"
                      cx="64"
                      cy="64"
                      fill="transparent"
                      r="58"
                      stroke="currentColor"
                      strokeWidth="6"
                    />
                    <motion.circle
                      className="text-primary drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                      cx="64"
                      cy="64"
                      fill="transparent"
                      r="58"
                      stroke="currentColor"
                      strokeDasharray="364.42"
                      initial={{ strokeDashoffset: 364.42 }}
                      whileInView={{ strokeDashoffset: 364.42 - (364.42 * skill.percentage) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      strokeLinecap="round"
                      strokeWidth="6"
                    />
                  </svg>
                  <span className="absolute text-white font-bold text-2xl group-hover:text-primary transition-colors">{skill.percentage}%</span>
                </div>
                <span className="text-on-surface-variant font-semibold tracking-tight group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
