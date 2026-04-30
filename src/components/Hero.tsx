'use client';
import React from 'react';
import { ArrowUpRight, Layers, Terminal, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 px-6 max-w-7xl mx-auto overflow-hidden" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="bg-glow -top-20 -left-20"
      ></motion.div>
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white font-bold"
          >
            <span className="block text-5xl md:text-6xl mb-2">Hi, I'm</span>
            <span className="gradient-text text-6xl md:text-8xl tracking-tight">Niloy Nag</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed"
          >
            I build scalable full-stack applications using React, Next.js,<br className="hidden md:block" />
            Node.js, Express, and PostgreSQL. I focus on<br className="hidden md:block" />
            clean code and fast, responsive UIs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a className="btn-primary text-white px-8 py-4 rounded-full font-bold" href="#projects">
              View Projects
            </a>
            <a className="btn-outline text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 group" href="#contact">
              Let's Collaborate <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center h-[500px] md:h-[600px]"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_80px_rgba(59,130,246,0.15)] z-20">
            <img
              alt="Niloy Nag"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB0SSHRyxoUUdcBr0omccJIs1B748_g_mjdL0FWBFgtdCKHMcnDHHRAXAUd_bscuybdnyBKckICPC0066L67ggbuQa8W4dH3kWzUycu6Cv68S58yvV0UYlw9TAuhSWgcZ4cEFU27Y_pRL0DkQhrweKUQVNxmbx7Pj0VHSSAkvHDaBNBdzYXPTPARczpxY6k9mG3VdINNoba3GvS45XIjnFEXhHSemGRJvMNxFHe08P_WCyqMyZxrVjmM7RMwEJ4i3P0ndkZvX3oWg3"
            />
          </div>
          {/* Orbiting Icons */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            <div className="absolute -top-4 right-1/4 w-12 h-12 bg-slate-900/90 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.4)] rotate-[-45deg]">
              <Layers className="text-primary w-6 h-6" />
            </div>
            <div className="absolute top-1/4 -left-4 w-12 h-12 bg-slate-900/90 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.4)] rotate-[15deg]">
              <Terminal className="text-primary w-6 h-6" />
            </div>
            <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-slate-900/90 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.4)] rotate-[120deg]">
              <Terminal className="text-primary w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 left-1/4 w-12 h-12 bg-slate-900/90 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.4)] rotate-[-160deg]">
              <Database className="text-primary w-6 h-6" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-3xl -z-10 opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
