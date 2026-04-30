'use client';
import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="relative glass-card p-1 rounded-2xl overflow-hidden aspect-video">
            <img
              alt="Technical Workspace"
              className="w-full h-full object-cover rounded-xl opacity-70"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj1C8L3EKvNusammJPlIKcReiC-Byij9la6s5IuK-8XfFUl1lX3CfPjCEDoYasZa1j5JZKOvb0R9R_XRxJZFnD9_ymmu_Sh6cQX8kAbF_BMm9NOQW3Caxyf3R05AL7A7vBHQJwScO5f6oME_RdltjORS-hL2avb_is7n_xD1WY4aH8ZrF7hAEx7gFxEJsS5NJGKaUCiTIA10l2V7ihqhmfi591zpdpTeE7efNUWN9NNf98X_pcqVciLsb-ziIZU8FEiQr9p24IhO6Q"
            />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            My journey as a developer is driven by a deep curiosity for how things work under the hood. I am a passionate developer who loves bridging the gap between design and code, ensuring that every pixel serves a purpose while maintaining a robust technical foundation.
          </p>
          <p className="text-base text-on-surface-variant/80">
            Whether it's designing efficient database schemas with PostgreSQL or crafting reactive frontends with Next.js, I approach every project with a relentless focus on problem-solving and operational efficiency.
          </p>
          <div className="flex gap-8 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">4+</span>
              <span className="text-sm text-primary font-semibold">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">20+</span>
              <span className="text-sm text-primary font-semibold">Projects Done</span>
            </div>
          </div>
          <div className="pt-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2" 
              href="#"
            >
              Download Resume <Download className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
