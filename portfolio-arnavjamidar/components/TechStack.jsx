"use client";

import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const techCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Layout size={24} className="text-blue-500" />,
    skills: ["JavaScript/TypeScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    id: 2,
    title: "Backend & Systems",
    icon: <Server size={24} className="text-emerald-500" />,
    skills: ["Node.js", "Python", "Java", "REST APIs"],
  },
  {
    id: 3,
    title: "Databases",
    icon: <Database size={24} className="text-purple-500" />,
    skills: ["PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    id: 4,
    title: "Tools & DevOps",
    icon: <Wrench size={24} className="text-orange-500" />,
    skills: ["Git & GitHub", "Docker", "Linux / Bash", "Vercel", "AWS (EC2)"],
  }
];

export default function TechStack() {
  // Staggered animation for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id='tech' className="min-h-screen py-32 px-6 flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-slate-900 mb-4"
          >
            My Tech Stack.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            The tools, languages, and frameworks I use to build scalable applications and solve complex problems.
          </motion.p>
        </div>

        {/* Tech Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techCategories.map((category) => (
            <motion.div 
              key={category.id}
              variants={cardVariants}
              className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}