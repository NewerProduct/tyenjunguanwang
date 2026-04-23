"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { productsData } from '@/config/products';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TechMatrixProps {
  hideMoreButton?: boolean;
}

const TechMatrix = ({ hideMoreButton = false }: TechMatrixProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    '/static/ruan_pic/ruan1.jpg',
    '/static/ying_pic/ying1.jpg',
    '/static/suan_pic/suan1.jpg'
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="products" className="py-16 md:py-20 bg-background relative border-t border-slate-300/50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            核心技术矩阵
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            融汇智能可视化软件、专业级硬件架构与核心底层算法，以“软、硬、算”三位一体的全栈能力，全面重塑工业智造。
          </p>
          {!hideMoreButton && (
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all bg-geekBlue rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
            >
              了解更多
            </Link>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl text-slate-600 hover:text-geekBlue hover:scale-110 transition-all"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl text-slate-600 hover:text-geekBlue hover:scale-110 transition-all"
          >
            <ChevronRight size={28} />
          </button>

          <div 
            className="overflow-hidden py-8 px-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {productsData.map((item, index) => (
                <div key={item.id} className="w-full shrink-0 md:px-12 lg:px-16" style={{ minWidth: '100%' }}>
                  <motion.div
                    initial="hidden"
                    animate={currentIndex === index ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="group min-h-[700px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
                  >
                    {/* Glow Effect */}
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-400/10 blur-[100px] group-hover:bg-blue-300/20 transition-all pointer-events-none" />

                    {/* Left Side: Clear Text Content */}
                    <div className="relative z-10 flex flex-col justify-center h-full order-2 lg:order-1">
                      <motion.div variants={itemVariants} className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm scale-110 origin-left">
                        {item.icon}
                      </motion.div>
                      
                      <motion.h3 variants={itemVariants} className="text-4xl font-bold text-slate-900 mb-6">
                        {item.title}
                      </motion.h3>
                      <motion.p variants={itemVariants} className="text-slate-700 text-xl mb-10 leading-relaxed font-semibold">
                        {item.description}
                      </motion.p>
                      
                      <motion.ul variants={itemVariants} className="space-y-5">
                        {item.stats.map((stat, i) => (
                          <li key={i} className="flex items-center gap-4 text-lg text-slate-900 font-bold">
                            <span className="w-2.5 h-2.5 rounded-full bg-geekBlue shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                            {stat}
                          </li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Right Side: Clear Image Content */}
                    <div 
                      className="relative w-full h-[400px] lg:h-full min-h-[500px] z-10 rounded-2xl overflow-hidden cursor-pointer bg-slate-50/50 border border-slate-100/80 order-1 lg:order-2 group-hover:border-geekBlue/20 transition-all"
                      onClick={() => setSelectedImg(images[index % images.length])}
                      title="点击查看大图"
                    >
                      <Image
                        src={images[index % images.length]}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105 p-2 md:p-6"
                        priority={index === 0}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {productsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  idx === currentIndex 
                    ? 'w-10 bg-geekBlue shadow-md' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Image Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full max-w-6xl h-full max-h-[90vh]">
            <Image
              src={selectedImg}
              alt="Large view"
              fill
              className="object-contain"
            />
          </div>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-2 rounded-full transition-all z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default TechMatrix;
