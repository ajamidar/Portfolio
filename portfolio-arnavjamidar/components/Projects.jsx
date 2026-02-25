"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// --- DUMMY DATA ---
// Replace these with your actual 4 projects and image paths (store images in the /public folder)
const projectsData = [
  {
    id: 1,
    title: "PrepIt: AI-Powered Job Interview Preparation Platform",
    description: "An AI-powered platform designed to help you prepare for job interviews using voice AI agents, real-time feedback, and a modern user experience. Built with a cutting-edge tech stack, PrepIt makes interview practice seamless, personalized, and effective.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Firebase", "Gemini API", "Vapi AI API"],
    github: "https://github.com/ajamidar/PrepIt",
    live: "https://prep-it-zeta.vercel.app/",
    images: [
      "/prepit-1.png",
      "/prepit-2.png",
      "/prepit-3.png",
      "/prepit-4.png",
    ]
  },
  {
    id: 2,
    title: "GreenLink Logistics: Intelligent Logistics & Route Optimization Platform",
    description: "An enterprise-grade, full-stack logistics platform designed to solve the Vehicle Routing Problem (VRP) using a hybrid Java/Python architecture. It empowers businesses to optimize delivery routes, track drivers in real-time, and manage orders through a secure, modern dashboard.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Java 21", "Python", "Leaflet", "Spring Boot", "PostgreSQL", "AWS(EC2)", "Docker", "REST APIs"],
    github: "https://github.com/ajamidar/GreenLink-Logistics",
    live: "https://www.youtube.com/watch?v=N4sF84_3fSA&feature=youtu.be",
    images: [
      "/greenlink-1.png",
      "/greenlink-2.png",
      "/greenlink-3.png",
    ]
  },
  {
    id: 3,
    title: "PremStats - Premier League StatFinder",
    description: "A Java-based Spring Boot application backed by PostgreSQL, designed to give football analysts, fans, and developers rich access to Premier League player and team statistics. The system ingests real-time-esque scraped data via a Python scraping pipeline, normalizes it into CSV, and persists it for fast, filterable querying",
    tech: ["Java 17", "Spring Boot", "PostgreSQL", "Python", "BeautifulSoup", "pandas"],
    github: "https://github.com/ajamidar/PremStats",
    live: "https://www.youtube.com/watch?v=HKyv-CQXnxA&feature=youtu.be",
    images: [
      "/premstats-1.png",
      "/premstats-2.png",
      "/premstats-3.png",
      "/premstats-4.png",
    ]
  },
  {
    id: 4,
    title: "FitMetrix - All-in-One Fitness Tracker",
    description: "A comprehensive fitness tracking application designed to help users manage and monitor their health journey. With secure authentication, personalized workout and diet plans, and visual progress tracking, FitMetrix offers a powerful, user-friendly solution to support fitness goals.",
    tech: ["Python", "MySQL", "SQLite3", "Tkinter", "Matplotlib"],
    github: "https://github.com/ajamidar/FitMetrix",
    live: "/FINAL NEA DOCUMENTATION.pdf",
    images: [
      "/fitmetrix-1.png",
      "/fitmetrix-2.png",
      "/fitmetrix-3.png",
    ]
  }
];

// --- HELPER COMPONENT: Image Carousel ---
// This handles the sliding logic for the screenshots inside each card
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden bg-gray-100 rounded-t-2xl aspect-video group">
      {/* Sliding Track */}
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Screenshot ${index + 1}`} 
            className="object-contain w-full h-full shrink-0"
          />
        ))}
      </div>

      {/* Navigation Arrows (Show on Hover) */}
      <div className="absolute inset-0 flex items-center justify-between p-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <button 
          onClick={prevImage}
          className="p-1.5 text-gray-800 transition-colors bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow-sm"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextImage}
          className="p-1.5 text-gray-800 transition-colors bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute flex gap-1.5 bottom-3 left-1/2 -translate-x-1/2">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-3' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="scroll-mt-24 py-0 px-6 bg-slate-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">My Projects</h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            A selection of my recent work, focusing on scalable backend systems and responsive, user-friendly front-end experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers animation when scrolled into view
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              className="flex flex-col bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 group"
            >
              {/* Top: The Image Carousel */}
              <ImageCarousel images={project.images} />

              {/* Bottom: Project Info */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                
                {/* Title and Links Row */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-400">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-rose-500 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}