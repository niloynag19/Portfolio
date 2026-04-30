import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#080c14] border-t border-white/5 w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-white">Niloy Nag</div>
          <p className="text-xs text-on-surface-variant">© 2026 Developer Portfolio. Built with precision.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-sm font-semibold" href="https://github.com/niloynag19" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5" /> GitHub
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-sm font-semibold" href="https://www.linkedin.com/in/niloynag" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-5 h-5" /> LinkedIn
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-sm font-semibold" href="https://leetcode.com/u/niloynag19" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="w-5 h-5" /> LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
