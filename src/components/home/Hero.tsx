"use client";

import { motion } from 'motion/react';
import { FloatingShape } from './FloatingShape';
import Spline from '@splinetool/react-spline';

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape
          color="from-[#ff5100] to-[#ff7733]"
          size="w-96 h-96"
          position="top-20 left-10"
          delay={0}
          duration={20}
        />
        <FloatingShape
          color="from-white to-gray-100"
          size="w-72 h-72"
          position="top-40 right-20"
          delay={1}
          duration={25}
        />
        <FloatingShape
          color="from-[#ff5100]/30 to-[#ff7733]/20"
          size="w-64 h-64"
          position="bottom-20 left-1/4"
          delay={2}
          duration={30}
        />
        <FloatingShape
          color="from-orange-200 to-orange-100"
          size="w-80 h-80"
          position="bottom-40 right-1/4"
          delay={1.5}
          duration={22}
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className='flex flex-col-reverse lg:flex-row items-center lg:items-center'>
          <div className="text-center lg:text-left w-full lg:w-1/2 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6">
                <span className="text-gray-900">Menghadirkan </span>
                <span className="text-[#ff5100]">Solusi Digital</span>
                <span className="text-gray-900"> Masa Depan</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Kami menggabungkan kreativitas dan teknologi untuk menciptakan transformasi digital yang inovatif untuk bisnis Anda.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-[#ff5100] to-[#ff7733] text-white px-12 py-5 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
              style={{
                boxShadow: '0 20px 60px rgba(255, 81, 0, 0.4)',
              }}
            >
              <a href='https://wa.me/6285712353595?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Anda.' className="text-xl">Mulai Sekarang</a>
            </motion.button>
          </div>
          <div className='relative w-full lg:w-1/2 h-[400px] lg:h-[600px]'>
            <Spline
              className='absolute lg:top-[-20%] bottom-0 lg:left-[20%] sm:left-[-2%]'
              scene="https://prod.spline.design/Mk-BQ4DmGKTu9soM/scene.splinecode" 
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}