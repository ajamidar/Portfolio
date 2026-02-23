"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// --- DUMMY DATA ---
// Replace these with your actual 4 projects and image paths (store images in the /public folder)
const projectsData = [
  {
    id: 1,
    title: "Project Alpha: E-Commerce API",
    description: "A robust backend system for an e-commerce platform, handling user authentication, inventory management, and secure payment processing.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    images: [
      "https://placehold.co/600x400/1e293b/ffffff?text=Screenshot+1",
      "https://placehold.co/600x400/334155/ffffff?text=Screenshot+2",
      "https://placehold.co/600x400/475569/ffffff?text=Screenshot+3",
      "https://placehold.co/600x400/64748b/ffffff?text=Screenshot+4",
    ]
  },
  {
    id: 2,
    title: "TaskMaster Pro",
    description: "A full-stack productivity web application allowing users to organize daily tasks, set priorities, and track progress with interactive charts.",
    tech: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    images: [
      "https://placehold.co/600x400/0f172a/ffffff?text=App+View+1",
      "https://placehold.co/600x400/1e293b/ffffff?text=App+View+2",
      "https://placehold.co/600x400/334155/ffffff?text=App+View+3",
    ]
  },
  {
    id: 3,
    title: "Algorithm Visualizer",
    description: "An interactive educational tool that visualizes common sorting and pathfinding algorithms to help Computer Science students learn.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
    github: "https://github.com",
    live: "", // Leave empty if there is no live demo
    images: [
      "https://placehold.co/600x400/020617/ffffff?text=Sorting+Alg",
      "https://placehold.co/600x400/0f172a/ffffff?text=Pathfinding",
      "https://placehold.co/600x400/1e293b/ffffff?text=Graph+View",
      "https://placehold.co/600x400/334155/ffffff?text=Code+Snippet",
    ]
  },
  {
    id: 4,
    title: "Weather Dashboard App",
    description: "A responsive weather application that fetches real-time meteorological data using third-party APIs and displays interactive forecasts.",
    tech: ["React", "REST APIs", "Framer Motion", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    images: [
      "https://placehold.co/600x400/1e1b4b/ffffff?text=Dashboard",
      "https://placehold.co/600x400/312e81/ffffff?text=Weekly+Forecast",
      "https://placehold.co/600x400/4338ca/ffffff?text=Radar+Map",
      "https://placehold.co/600x400/4f46e5/ffffff?text=Settings",
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
            className="object-cover w-full h-full shrink-0"
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
    <section id="projects" className="scroll-mt-24 py-0 px-6 bg-white min-h-screen flex flex-col justify-center">
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