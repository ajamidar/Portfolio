"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  // Simple, elegant fade-up animations
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 } },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 md:pt-10 lg:pt-0 pb-20 md:pb-10 lg:pb-0 bg-slate-50 overflow-hidden"
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-rose-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpVariants} className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-amber-900 bg-rose-50 rounded-full">
              University of York • MEng Computer Science
            </span>
          </motion.div>

          <motion.h1 variants={fadeUpVariants} className="text-3xl md:text-5xl lg:text-5xl font-serif text-slate-900 leading-tight mb-4">
            I&apos;m Arnav Jamidar👋.<br />
            I engineer <span className="text-slate-500">elegant solutions</span> to <span className="text-slate-500">complex problems</span>.
          </motion.h1>

          <motion.p variants={fadeUpVariants} className="max-w-lg mx-auto md:mx-0 text-amber-900 md:text-lg font-semibold mb-8 leading-relaxed">
            I am a 2nd-year aspiring software engineer passionate about scalable applications and robust software systems.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
            <Link 
              href="#projects" 
              className="flex items-center gap-2 px-7 py-3 text-sm font-medium text-white transition-colors bg-slate-900 rounded-full hover:bg-slate-800"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            
            <a 
              href="/Arnav Jamidar CV - 24.02.2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 text-sm font-medium text-slate-700 transition-colors bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUpVariants} className="flex items-center justify-center md:justify-start gap-5 text-slate-500">
            <a href="https://github.com/ajamidar" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              <Github size={22} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/arnav-jamidar-569b89374/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={22} strokeWidth={1.5} />
            </a>
            <a href="mailto:jamidararnav@gmail.com" className="hover:text-rose-500 transition-colors">
              <Mail size={22} strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Standard Professional Image */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end w-full max-w-sm md:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Simple, clean image container with a soft shadow */}
          <div className="flex justify-center items-center w-45 h-45 md:w-80 md:h-80 lg:w-90 lg:h-90 hover:scale-105 transition-transform duration-300 rounded-full ">
            <img 
              src="/arnav.jpeg" 
              alt="Arnav Jamidar" 
              className="rounded-full"
              onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Arnav+Jamidar&background=f1f5f9&color=0f172a&size=512' }} 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}