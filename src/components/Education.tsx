'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { EducationItem } from '../types';

const Education = () => {
  const education: EducationItem[] = [
    {
      year: '2022 - 2026',
      degree: 'Diploma in Computer Science',
      institution: 'Barishal Polytechnic Institute',
      details: 'Specialized focus on software engineering principles and systems design.',
      gpa: '3.70',
      color: 'primary',
    },
    {
      year: '2021',
      degree: 'SSC',
      institution: 'Palordi Model High School',
      details: 'Focused on core sciences and mathematics.',
      gpa: '5.00',
      color: 'secondary',
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="education">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
      >
        Education
      </motion.h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary opacity-20 transform md:-translate-x-1/2"></div>
        <div className="space-y-12">
          {education.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col md:flex-row items-center"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="flex-1 md:pr-16 md:text-right mb-4 md:mb-0">
                    <div className="gradient-card p-6 rounded-xl inline-block w-full hover:border-primary/30 transition-colors">
                      <span className="text-sm text-primary font-bold">{item.year}</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{item.degree}</h3>
                      <p className="text-on-surface-variant mt-2 font-medium">
                        {item.institution} — {item.details}
                      </p>
                      <p className="text-primary mt-1 font-bold">CGPA: {item.gpa}</p>
                    </div>
                  </div>
                  <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"></div>
                  <div className="flex-1 md:pl-16 hidden md:block"></div>
                </>
              ) : (
                <>
                  <div className="flex-1 md:pr-16 hidden md:block"></div>
                  <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-secondary rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(244,63,94,0.8)] z-10"></div>
                  <div className="flex-1 md:pl-16">
                    <div className="gradient-card p-6 rounded-xl inline-block w-full hover:border-secondary/30 transition-colors">
                      <span className="text-sm text-secondary font-bold">{item.year}</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{item.degree}</h3>
                      <p className="text-on-surface-variant mt-2 font-medium">
                        {item.institution} — {item.details}
                      </p>
                      <p className="text-secondary mt-1 font-bold">GPA: {item.gpa}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
