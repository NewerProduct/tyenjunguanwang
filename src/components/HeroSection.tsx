"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';

const HeroSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full max-w-none object-cover sm:object-center object-right opacity-100"
        >
          <source src="/static/video/beijing2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-7xl pt-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm shadow-sm"
          >
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
              Streamline Your AI Visual Applications
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            SOP行为防错智检 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 whitespace-nowrap">
              中国工业AI全场景落地实践领跑者
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            天军机器人专注于 AI 视觉赋能工业自动化，深度融合 CV 与深度学习算法。
            为工业生产提供实时防错检测与预警，提升良率与智能化管理水平。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center sm:items-start">
            <a
              href="/solutions"
              className="group relative px-8 py-4 bg-geekBlue rounded-full text-white font-medium overflow-hidden transition-all hover:scale-105 shadow-[0_8px_20px_rgba(24,144,255,0.25)] border border-transparent"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                探索解决方案 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="/contact"
              className="px-8 py-4 rounded-full text-white font-medium border border-slate-600 hover:bg-white/10 hover:border-slate-400 backdrop-blur-sm transition-all shadow-sm"
            >
              联系技术专家
            </a>
            <button
              onClick={() => setShowVideoModal(true)}
              className="px-8 py-4 rounded-full text-white font-medium border border-slate-600 hover:bg-white/10 hover:border-slate-400 backdrop-blur-sm transition-all shadow-sm flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              播放示例
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <span className="text-slate-400 text-xs tracking-widest uppercase">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-red-500 rounded-full text-white backdrop-blur-md transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <video 
                src="/static/video/beijing2.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
