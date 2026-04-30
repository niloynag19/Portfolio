'use client';
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative" id="contact">
      <div className="bg-glow bottom-0 left-1/2 -translate-x-1/2 opacity-20"></div>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Column: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Have a question or a project in mind? I'd love to hear from you. Let's build something amazing together.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant">Email</p>
                <p className="text-base text-white font-medium">hello@niloynag.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant">Phone</p>
                <p className="text-base text-white font-medium">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant">Location</p>
                <p className="text-base text-white font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gradient-card p-8 rounded-2xl border-white/5"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-on-surface-variant ml-1">Name</label>
                <input
                  className="w-full bg-slate-950 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-lg p-4 text-white placeholder-slate-500 transition-all outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-on-surface-variant ml-1">Email</label>
                <input
                  className="w-full bg-slate-950 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-lg p-4 text-white placeholder-slate-500 transition-all outline-none"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-on-surface-variant ml-1">Message</label>
              <textarea
                className="w-full bg-slate-950 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-lg p-4 text-white placeholder-slate-500 transition-all outline-none"
                placeholder="How can I help you?"
                rows={5}
              ></textarea>
            </div>
            <button className="w-full btn-primary text-white py-4 rounded-full font-bold" type="submit">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
