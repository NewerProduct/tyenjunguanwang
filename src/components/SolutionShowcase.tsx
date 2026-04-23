"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const img1 = '/static/picture/p1.jpg'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const img2 = '/static/picture/p2.jpg'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const img3 = '/static/picture/p3.jpg'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const img6 = '/static/picture/p6.jpg'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const img7 = '/static/picture/p7.jpg'

const images = [
  { id: 1, src: img1, title: '缺陷检测 01' },
  { id: 2, src: img2, title: '缺陷检测 02' },
  { id: 3, src: img3, title: '缺陷检测 03' },
  { id: 4, src: img6, title: '缺陷检测 04' },
  { id: 5, src: img7, title: '缺陷检测 05' },
];

const vid2 = '/static/video/v2.mp4';
const vid4 = '/static/video/v4.mp4';
const vid5 = '/static/video/v5.mp4';
const vid6 = '/static/video/v6.mp4';
const vid7 = '/static/video/v7.mp4';
const vid8 = '/static/video/v8.mp4';
const vid9 = '/static/video/v9.mp4'

const videos = [
  { id: 1, src: vid2, title: 'AI行为分析 01' },
  { id: 3, src: vid4, title: 'AI行为分析 02' },
  { id: 4, src: vid5, title: 'AI行为分析 03' },
  { id: 5, src: vid6, title: 'AI行为分析 04' },
  { id: 6, src: vid7, title: 'AI行为分析 05' },
  { id: 7, src: vid8, title: 'AI行为分析 06' },
  { id: 8, src: vid9, title: 'AI行为分析 07' },
];

const SolutionShowcase = ({ hideImageTab = true, hideViewMore = false }: { hideImageTab?: boolean, hideViewMore?: boolean }) => {
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('video');
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [previewItem, setPreviewItem] = useState<{ type: 'image' | 'video', src: any, title: string } | null>(null);

  const items = activeTab === 'image' ? images : videos;
  const maxVisible = 5;
  const visibleItems = items.slice(startIndex, startIndex + maxVisible);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openPreview = (item: any) => {
    setPreviewItem({ type: activeTab, src: item.src, title: item.title });
  };

  return (
    <section id="solutions" className="py-24 bg-slate-200/30 relative border-t border-slate-300/50">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="w-full mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              标杆场景: AI行为分析
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              真实缺陷检测案例，直击传统人工质检痛点。
            </p>
          </div>
          
          {/* Tabs & View More */}
          {!hideViewMore && (
            <div className="flex flex-wrap items-center justify-end gap-4 mb-8 w-full">
              <Link 
                href="/solutions" 
                className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 transition-all group"
              >
                查看更多
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Accordion Gallery */}
        <div className="relative group">
          {startIndex > 0 && (
            <button 
              onClick={() => {
                setStartIndex(s => s - 1);
                setHoveredIndex(0);
              }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center backdrop-blur text-slate-800 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}

          <div className="w-full h-[500px] flex gap-2 overflow-hidden rounded-3xl p-2 bg-slate-100 border border-slate-300/50 shadow-inner">
            {visibleItems.map((item, index) => {
              const isActive = hoveredIndex === index;
              return (
                <div
                  key={`${activeTab}-${item.id}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => openPreview(item)}
                  className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer
                    ${isActive ? 'flex-[5] md:flex-[8] shadow-xl' : 'flex-1 shadow-sm hover:flex-[1.5]'}
                  `}
                >
                  {/* Content */}
                  <div className="absolute inset-0 w-full h-full bg-slate-800">
                    {activeTab === 'image' ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60 grayscale-[50%]'}`}
                      />
                    ) : (
                      <video
                        ref={(el) => {
                          if (el && el.paused) {
                            el.play().catch(() => {});
                          }
                        }}
                        src={item.src}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60 grayscale-[50%]'}`}
                        loop
                        muted
                        preload="none"
                        playsInline
                        autoPlay
                      />
                    )}
                  </div>

                  {/* Overlay & Title */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 flex flex-col justify-end h-full ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-white text-2xl font-bold whitespace-nowrap transform transition-transform duration-500 translate-y-0">
                      {item.title}
                    </h3>
                    {isActive && (
                      <p className="text-white/80 mt-2 text-sm max-w-md whitespace-normal line-clamp-2 animate-fade-in">
                        在实际的工业场景中，实时分析每一帧细节，提供精准的检测与反馈。
                      </p>
                    )}
                  </div>
                
                  {/* Vertical Title for non-active items */}
                  <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-300 whitespace-nowrap -rotate-90 origin-bottom ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <span className="text-white font-medium tracking-wider drop-shadow-md">{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {startIndex + maxVisible < items.length && (
            <button 
              onClick={() => {
                setStartIndex(s => s + 1);
                setHoveredIndex(0);
              }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center backdrop-blur text-slate-800 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8" onClick={() => setPreviewItem(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-[60] text-5xl leading-none"
            onClick={(e) => {
              e.stopPropagation();
              setPreviewItem(null);
            }}
          >
            &times;
          </button>
          
          <div 
            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {previewItem.type === 'image' ? (
              <Image
                src={previewItem.src}
                alt={previewItem.title}
                fill
                loading="lazy"
                sizes="100vw"
                className="object-contain"
              />
            ) : (
               <video
                ref={(el) => { 
                  if (el && el.currentTime !== 0 && !el.paused === false) { 
                    el.currentTime = 0; 
                    el.play().catch(e => console.log(e)); 
                  } 
                }}
                src={previewItem.src}
                className="w-full h-full object-contain outline-none"
                controls
                autoPlay
                preload="none"
                playsInline
              />
            )}
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
              {previewItem.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionShowcase;
