"use client"

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { MotionDiv, MotionButton } from '@/components/motion/MotionComponents';

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

export function PortfolioCarousel() {
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
    <div className="max-w-7xl mx-auto relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <MotionDiv 
          className="flex gap-8"
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <MotionDiv
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="shrink-0 w-full md:w-[calc(33.333%-1.5rem)]"
              >
                <MotionDiv
                  whileHover={{ y: -15, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                  style={{ perspective: '1000px' }}
                >
                  <div className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={`https://placehold.co/600x400?text=${encodeURIComponent(project.image)}`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-[#ff5100] mb-2">{project.category}</p>
                      <h3 className="text-xl text-gray-800">{project.title}</h3>
                    </div>
                  </div>
                </MotionDiv>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </MotionDiv>
      </div>

      {/* Navigation Buttons */}
      <MotionButton
        onClick={prevSlide}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-4 shadow-xl hover:bg-[#ff5100] hover:text-white transition-colors z-10"
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
      >
        <ChevronLeft className="w-6 h-6" />
      </MotionButton>

      <MotionButton
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-4 shadow-xl hover:bg-[#ff5100] hover:text-white transition-colors z-10"
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
      >
        <ChevronRight className="w-6 h-6" />
      </MotionButton>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-12">
        {Array.from({ length: Math.ceil(projects.length - itemsPerView + 1) }).map((_, index) => (
          <MotionButton
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
  );
}
