"use client"

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, TechCorp',
    content: 'Digdaya Digital memberikan solusi yang luar biasa. Tim mereka profesional dan hasil kerjanya melebihi ekspektasi kami.',
    avatar: 'BS',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Siti Rahma',
    role: 'Marketing Director, InnovateLabs',
    content: 'Kerja sama yang sangat memuaskan. Proyek kami selesai tepat waktu dengan kualitas yang sempurna.',
    avatar: 'SR',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Ahmad Wijaya',
    role: 'CTO, FutureSoft',
    content: 'Sangat direkomendasikan! Digdaya Digital memahami kebutuhan bisnis dan memberikan solusi yang tepat.',
    avatar: 'AW',
    color: 'from-green-400 to-green-600',
  },
];

export function Testimonials() {
  return (
    <section id="testimoni" className="py-24 px-6 bg-linear-to-br from-white to-orange-50 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-4">Testimoni</h2>
          <p className="text-xl text-gray-600">Apa kata klien kami</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
              style={{ perspective: '1000px' }}
              className="group"
            >
              <div
                className="bg-white rounded-[40px] p-8 shadow-xl relative overflow-hidden h-full"
                style={{
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.12)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-6 right-6 opacity-20"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote className="w-16 h-16 text-[#ff5100]" />
                </motion.div>

                {/* Avatar */}
                <motion.div
                  className={`w-20 h-20 bg-linear-to-br ${testimonial.color} rounded-[25px] flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white text-2xl">{testimonial.avatar}</span>
                </motion.div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-800 mb-1">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>

                {/* Decorative blob */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-linear-to-br from-orange-100 to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}