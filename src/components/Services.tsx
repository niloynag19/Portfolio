'use client';
import React from 'react';
import { Smartphone, Monitor, Settings, Database, ShieldCheck, ShoppingCart, Zap, CloudUpload } from 'lucide-react';
import { motion } from 'framer-motion';
import { Service } from '../types';

const Services = () => {
  const services: Service[] = [
    {
      title: 'Full-Stack Web Development',
      description: 'End-to-end web applications using React, Node.js, Express, and MongoDB with clean architecture and scalable code.',
      icon: 'Monitor',
    },
    {
      title: 'Frontend Development',
      description: 'Fast, responsive, and user-friendly interfaces built with React and modern UI frameworks like Tailwind CSS.',
      icon: 'Smartphone',
    },
    {
      title: 'Backend & API Development',
      description: 'Secure and efficient REST APIs using Node.js and Express, optimized for performance and scalability.',
      icon: 'Settings',
    },
    {
      title: 'Database Design & Management',
      description: 'Well-structured MongoDB databases with optimized queries for speed, reliability, and data integrity.',
      icon: 'Database',
    },
    {
      title: 'Authentication & Authorization',
      description: 'Implementation of secure login systems using JWT, role-based access control, and best security practices.',
      icon: 'ShieldCheck',
    },
    {
      title: 'E-Commerce Development',
      description: 'Product listings, cart systems, checkout flows, and payment gateway integrations for demo or real projects.',
      icon: 'ShoppingCart',
    },
    {
      title: 'Performance Optimization',
      description: 'Improving load times, API response speed, and overall application performance for better user experience.',
      icon: 'Zap',
    },
    {
      title: 'Deployment & Hosting Support',
      description: 'Deploying applications on cloud platforms with proper environment setup and production-ready configuration.',
      icon: 'CloudUpload',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-12 h-12 text-primary" />;
      case 'Smartphone': return <Smartphone className="w-12 h-12 text-primary" />;
      case 'Settings': return <Settings className="w-12 h-12 text-primary" />;
      case 'Database': return <Database className="w-12 h-12 text-primary" />;
      case 'ShieldCheck': return <ShieldCheck className="w-12 h-12 text-primary" />;
      case 'ShoppingCart': return <ShoppingCart className="w-12 h-12 text-primary" />;
      case 'Zap': return <Zap className="w-12 h-12 text-primary" />;
      case 'CloudUpload': return <CloudUpload className="w-12 h-12 text-primary" />;
      default: return <Monitor className="w-12 h-12 text-primary" />;
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="services">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">Services I Provide</h2>
        <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          I offer design and development services focused on building fast, modern, and user-friendly digital experiences.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="gradient-border-card p-8 flex flex-col items-center text-center group"
          >
            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-white font-bold mb-4 text-lg group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
