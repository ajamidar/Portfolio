"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'tech', label: 'Tech Stack', href: '/#tech' },
  { id: 'journey', label: 'Journey', href: '/#journey' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-md bg-linear-to-b from-[#ffc09358] to-[#e8e8e809] ">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* 1. Left Section: Logo / Name */}
        <div className="text-2xl font-serif font-bold tracking-tight text-gray-900 z-50">
          <a href="/#home">
            Arnav<span className="text-amber-600">'</span>s Portfolio
          </a>
        </div>

        {/* 2. Center Section: Desktop Floating Pill (Hidden on Mobile) */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-full px-2 py-1.5">
          <div 
            className="flex items-center gap-2"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-gray-900 transition-colors rounded-full hover:font-medium 
                         hover:bg-[#ffc09358] hover:shadow-md hover:z-4 hover:scale-105 hover:text-gray-900 hover:transition-transform hover:duration-100"
              >
                {hoveredLink === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gray-100/80 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* 3. Right Section: Actions & Mobile Toggle */}
        <div className="flex items-center gap-3 z-50">
          
          {/* Desktop Contact Button */}
          <a 
            href="#cv" 
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900 transition-all border border-gray-300 rounded-full hover:bg-[#fafafa8d] 
            hover:shadow-md hover:text-gray-900 hover:transition-transform hover:duration-100"
          >
            View CV <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:bg-[#ffc09358] hover:rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  className="text-lg font-medium text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <a 
                href="#cv" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white transition-all bg-gray-900 rounded-full hover:bg-[#ffc09358] hover:text-gray-900 hover:transition-transform hover:duration-100"
              >
                View CV<ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}