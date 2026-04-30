'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const logoRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLogoHover = () => {
    gsap.to(logoRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
      color: "#3b82f6"
    });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10 transition-colors duration-300">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
        <div 
          ref={logoRef}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
          className="text-xl font-bold tracking-tighter text-on-surface cursor-pointer"
        >
          DevPortfolio
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-on-surface-variant transition-colors"
              href={link.href}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/20"
            href="#"
          >
            Resume
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
