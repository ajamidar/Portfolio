"use client";

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Code2, Forklift, Gamepad, GraduationCap, Laptop, Laptop2, Rocket, Volleyball } from 'lucide-react';

// --- YOUR JOURNEY DATA ---
const journeyData = [
  {
    id: 1,
    year: "2022",
    title: "The Spark",
    description: "Wrote my very first lines of code. Discovered a deep passion for logical problem-solving and decided to dive deeper into computer science.",
    icon: <Code2 size={24} className="text-amber-600" />,
    align: "left"
  },
  {
    id: 2,
    year: "2023-2024",
    title: "FitMetrix",
    description: "Built my first coding project - a python program with a GUI that acts as an all-in-one fitness tracker. Gained hands-on experience with Python, Tkinter, and database management.",
    icon: <Laptop size={24} className="text-amber-600" />,
    align: "right"
  },
  {
    id: 3,
    year: "2024",
    title: "University of York",
    description: "Started my MEng Computer Science degree at the University of York. Excited to learn from world-class professors and collaborate with talented peers on innovative projects.",
    icon: <GraduationCap size={24} className="text-amber-600" />,
    align: "left"
  },
  {
    id: 4,
    year: "2025 Summer",
    title: "PrepIt",
    description: "Built PrepIt, a web application that helps students prepare for job interviews. Gained experience with Next.js, API integration, and Firebase while solving real-world problems.",
    icon: <Rocket size={24} className="text-amber-600" />,
    align: "right"
  },
  {
    id: 5,
    year: "2025 Autumn",
    title: "PremStats",
    description: "Built PremStats, a Java-based Spring Boot application that provides rich access to Premier League player and team statistics. Gained experience with PostgreSQL, Python scraping pipelines, and enterprise-grade backend systems.",
    icon: <Volleyball size={24} className="text-amber-600" />,
    align: "left"
  },
  {
    id: 6,
    year: "2026",
    title: "GreenLink Logistics",
    description: "Built GreenLink Logistics, a full-stack logistics platform that solves the Vehicle Routing Problem (VRP) using a hybrid Java/Python backend architecture with a Next.js frontend. Gained experience with real-time tracking, secure authentication, and scalable backend systems.",
    icon: <Forklift size={24} className="text-amber-600" />,
    align: "right"
  },
  {
    id: 7,
    year: "2026",
    title: "Looking Ahead",
    description: "Currently seeking Summer 2026 software engineering internships to apply my academic knowledge to scalable, real-world systems.",
    icon: <Laptop2 size={24} className="text-amber-600" />,
    align: "left"
  }
];

export default function Journey() {
  const containerRef = useRef(null);

  // Tracks how far the user has scrolled down the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Adds a smooth, springy physics effect to the scroll line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // scroll-mt-24 ensures the fixed navbar doesn't cover the title when clicking the link!
    <section id="journey" className="py-24 px-6 bg-slate-50 min-h-screen relative overflow-hidden" ref={containerRef}>
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-slate-900 mb-4"
          >
            My Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            How I went from writing my first print statement to building full-stack applications at the University of York.
          </motion.p>
        </div>

        {/* The Timeline Container */}
        <div className="relative">
          
          {/* 1. The Background Line (Faded) */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* 2. The Animated Fluid Line (Draws on scroll) */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[28px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-amber-500 origin-top z-10"
          ></motion.div>

          {/* 3. The Milestones */}
          <div className="space-y-12 md:space-y-24">
            {journeyData.map((item, index) => (
              <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between">
                
                {/* Center Node (The Icon) */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 bg-white border-4 border-amber-100 rounded-full flex items-center justify-center z-20 shadow-md"
                >
                  {item.icon}
                </motion.div>

                {/* Left Side (Empty on Mobile, holds content if align === 'left' on Desktop) */}
                <div className={`hidden md:block w-1/2 pr-16 ${item.align === 'left' ? 'text-right' : 'opacity-0'}`}>
                  {item.align === 'left' && (
                    <JourneyCard item={item} direction={-50} />
                  )}
                </div>

                {/* Right Side / Mobile View */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-16 ${item.align === 'right' ? 'text-left' : 'md:hidden'}`}>
                  <JourneyCard item={item} direction={50} />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// --- HELPER COMPONENT FOR THE CARDS ---
function JourneyCard({ item, direction }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all group"
    >
      <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-100 rounded-full">
        {item.year}
      </span>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}