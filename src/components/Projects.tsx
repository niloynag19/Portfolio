'use client';
import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Persistence
  useEffect(() => {
    const savedIndex = sessionStorage.getItem('projectIndex');
    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('projectIndex', currentIndex.toString());
  }, [currentIndex]);

  const projects: Project[] = [
    {
      title: 'FoodHub',
      description: 'A full-stack food ordering platform with role-based access for users, providers, and admin.',
      image: 'https://cdn.creativefabrica.com/2022/08/23/Food-web-banner-template-design-Graphics-36901974-1.jpg',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
      githubUrl: 'https://github.com/niloynag19/FoodHub_Frontend',
      liveUrl: 'https://foodhub-frontend-zeta.vercel.app',
    },
    {
      title: 'Eco Spark',
      description: 'An eco-friendly awareness platform promoting sustainable living and green initiatives.',
      image: 'https://img.magnific.com/free-psd/eco-friendly-banner-template-concept_23-2148457765.jpg',
      tags: ['Next.js', 'Postgre SQL', 'TypeScript', 'Node.js'],
      githubUrl: 'https://github.com/niloynag19/EcoSpark-Hub-Frontend',
      liveUrl: 'https://eco-spark-hub-frontend-mu.vercel.app',
    },
    {
      title: 'PH Healthcare Management System',
      description: 'A healthcare platform to manage patients, doctors, and appointments efficiently.',
      image: 'https://img.magnific.com/premium-vector/health-care-cover-web-banner-template_544391-443.jpg',
      tags: ['Next.js', 'Express.js', 'Postgre Sql'],
      githubUrl: 'https://github.com/niloynag19/PH-HealthCare-Backend',
      liveUrl: '#',
    },
    {
      title: 'Study and Travel',
      description: 'A platform to explore study opportunities abroad along with travel planning features.',
      image: 'https://img.magnific.com/free-psd/travel-tourism-web-banner-background-template_120329-5871.jpg?semt=ais_hybrid&w=740&q=80',
      tags: ['React', 'Firebase'],
      githubUrl: 'https://github.com/niloynag19/Study-And-Travel',
      liveUrl: 'https://higherstudyusa.vercel.app',
    },
    {
      title: 'Vehicle Rental System',
      description: 'A rental platform for booking vehicles with real-time availability and management system.',
      image: 'https://img.magnific.com/free-psd/car-rental-automotive-facebook-cover-template_106176-2475.jpg',
      tags: ['Node.js', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/niloynag19/Vehicle-Rental-System-Backend',
      liveUrl: 'https://vehicle-rental-system-flax.vercel.app',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Work</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A collection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-primary hover:text-primary transition-all bg-surface/50 backdrop-blur-sm shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-primary hover:text-primary transition-all bg-surface/50 backdrop-blur-sm shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{ minWidth: `calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)` }}
              className="gradient-card rounded-2xl p-6 flex flex-col group overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-white/5">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                  src={project.image}
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6"
                >
                   <p className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project Details</p>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-on-surface-variant/80 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/5 text-primary text-[10px] uppercase tracking-wider px-3 py-1 rounded-md border border-primary/10 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 btn-primary text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <Code className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors border border-white/5"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-12">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-10 bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)]' : 'w-2 bg-white/10 hover:bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
