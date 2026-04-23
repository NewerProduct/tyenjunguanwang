"use client";

import React from "react";
import Image from "next/image";

interface Partner {
  name: string;
  src: string;
}

export default function ClientAboutPage({ partnersData }: { partnersData: Partner[] }) {
  // 辅助函数：渲染单行滚动的 Logo
  const renderMarqueeRow = (data: Partner[], animationClass: string = "animate-marquee-infinite", offsetClass: string = "") => (
    <div className={`flex w-max ${animationClass} ${offsetClass}`}>
      {data.map((partner, index) => (
        <div
          key={`first-${index}`}
          className="flex-none mx-2 md:mx-4 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110"
        >
          <div className="relative w-20 h-10 md:w-32 md:h-14 bg-white/70 rounded-xl p-2 shadow-sm backdrop-blur-md border border-white/50 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
              
            </div>
          </div>
        </div>
      ))}
      {data.map((partner, index) => (
        <div
          key={`second-${index}`}
          className="flex-none mx-2 md:mx-4 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110"
        >
          <div className="relative w-20 h-10 md:w-32 md:h-14 bg-white/70 rounded-xl p-2 shadow-sm backdrop-blur-md border border-white/50 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ))}
      {data.map((partner, index) => (
        <div
          key={`third-${index}`}
          className="flex-none mx-2 md:mx-4 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110"
        >
          <div className="relative w-20 h-10 md:w-32 md:h-14 bg-white/70 rounded-xl p-2 shadow-sm backdrop-blur-md border border-white/50 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ))}
      {data.map((partner, index) => (
        <div
          key={`fourth-${index}`}
          className="flex-none mx-2 md:mx-4 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110"
        >
          <div className="relative w-20 h-10 md:w-32 md:h-14 bg-white/70 rounded-xl p-2 shadow-sm backdrop-blur-md border border-white/50 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // 为了让多行滑动看起来富有层次，对数组进行反转和移位处理
  const reversedData = [...partnersData].reverse();
  const shiftedData = [...partnersData.slice(2), ...partnersData.slice(0, 2)];

  return (
    <div className="absolute inset-0 w-[200%] md:w-[150%] left-0 md:left-auto right-[-20%] md:right-[-10%] h-[120%] -top-[10%] flex flex-col justify-center pointer-events-none opacity-40 overflow-hidden">
      <div className="transform flex flex-col gap-6 md:gap-8 py-10">
        {/* 第一行：从左到右 */}
        {renderMarqueeRow(partnersData, "animate-marquee-infinite", "")}
        {/* 第二行：从右到左，使用反转动画 */}
        {renderMarqueeRow(reversedData, "animate-marquee-infinite-reverse", "ml-12 md:ml-32")}
        {/* 第三行：从左到右，移位后的数组再次错开位置 */}
        {renderMarqueeRow(shiftedData, "animate-marquee-infinite", "-ml-12 md:-ml-24")}
      </div>
    </div>
  );
}
