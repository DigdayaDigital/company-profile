"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'ecommerce website modern',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: 'mobile banking app interface',
  },
  {
    title: 'Corporate Dashboard',
    category: 'UI/UX Design',
    image: 'dashboard analytics interface',
  },
  {
    title: 'Cloud Storage Solution',
    category: 'Cloud Services',
    image: 'cloud storage technology',
  },
  {
    title: 'Social Media Platform',
    category: 'Web Development',
    image: 'social media app interface',
  },
  {
    title: 'E-Learning Portal',
    category: 'Education Tech',
    image: 'online learning platform',
  },
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= projects.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, projects.length - itemsPerView) : prev - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerView);
  
  // Fill with projects from the beginning if needed
  while (visibleProjects.length < itemsPerView && projects.length >= itemsPerView) {
    visibleProjects.push(projects[visibleProjects.length % projects.length]);
  }

  return (
    <section id="portofolio" className="py-24 px-6 bg-linear-to-br from-orange-50 to-white relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-4">Portofolio</h2>
          <p className="text-xl text-gray-600">Karya terbaik kami untuk klien</p>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8"
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="shrink-0 w-full md:w-[calc(33.333%-1.5rem)]"
                  >
                    <motion.div
                      whileHover={{ y: -15, rotateY: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                      style={{ perspective: '1000px' }}
                    >
                      <div
                        className="bg-white rounded-[40px] overflow-hidden shadow-sm"
                        style={{
                          // boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <div className="aspect-4/3 overflow-hidden relative">
                          <ImageWithFallback
                            src={`https://source.unsplash.com/800x600/?${project.image.replace(' ', ',')}`}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <span className="text-sm text-[#ff5100] bg-orange-100 px-4 py-1 rounded-full">
                            {project.category}
                          </span>
                          <h3 className="text-2xl text-gray-800 mt-4">{project.title}</h3>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-4 shadow-xl hover:bg-[#ff5100] hover:text-white transition-colors z-10"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-4 shadow-xl hover:bg-[#ff5100] hover:text-white transition-colors z-10"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: Math.ceil(projects.length - itemsPerView + 1) }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#ff5100] w-8'
                    : 'bg-gray-300 hover:bg-[#ff5100]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}