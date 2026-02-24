"use client";

import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, 
  SiHtml5, SiCss3, SiNodedotjs, SiPython, SiOpenjdk,
  SiPostgresql, SiMysql, SiRedis, SiFirebase,
  SiGit, SiGithub, SiDocker, SiLinux, SiGnubash, SiVercel, SiAmazon
} from 'react-icons/si';

const techCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Layout size={24} className="text-blue-500" />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <SiReact className="text-cyan-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "HTML/CSS", icon: <SiHtml5 className="text-orange-600" /> },
    ],
  },
  {
    id: 2,
    title: "Backend & Systems",
    icon: <Server size={24} className="text-emerald-500" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
      { name: "Java", icon: <SiOpenjdk className="text-red-600" /> },
      { name: "REST APIs", icon: <Server size={16} className="text-slate-600" /> },
    ],
  },
  {
    id: 3,
    title: "Databases",
    icon: <Database size={24} className="text-purple-500" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "Redis", icon: <SiRedis className="text-red-600" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    id: 4,
    title: "Tools & DevOps",
    icon: <Wrench size={24} className="text-orange-500" />,
    skills: [
      { name: "Git & GitHub", icon: <SiGithub className="text-black" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Linux / Bash", icon: <SiLinux className="text-yellow-600" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "AWS (EC2)", icon: <SiAmazon className="text-orange-500" /> },
    ],
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
                    className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100 hover:scale-105 transition-all cursor-default flex items-center gap-2"
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
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