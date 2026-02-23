"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Get in Touch.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            I am currently looking for Software Engineering internships for Summer 2026. 
            Whether you have an opportunity or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* LEFT COLUMN: Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <a href="mailto:your.email@york.ac.uk" className="flex items-center gap-4 text-slate-600 hover:text-amber-600 transition-colors group">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Email</p>
                  <p className="text-lg font-medium text-slate-900 group-hover:text-amber-600 transition-colors">jamidararnav@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Location</p>
                  <p className="text-lg font-medium text-slate-900">York, United Kingdom</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-4">Socials</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all hover:scale-105"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-105"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Form */}
          <motion.div variants={itemVariants} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            {/* Formspree is the easiest way to make this form functional for free! */}
            <form action="https://formspree.io/f/mvzbvvrq" method="POST" className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  placeholder="John Doe"
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  placeholder="youremail@example.com"
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required
                  placeholder="Hi Arnav, I came across your portfolio and wanted to reach out regarding..."
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all bg-gray-900 rounded-xl hover:bg-black hover:-translate-y-1 shadow-md shadow-gray-900/10 active:scale-95"
              >
                Send Message <Send size={18} />
              </button>

            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}