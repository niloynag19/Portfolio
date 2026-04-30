'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full btn-primary flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      onClick={scrollToTop}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;
