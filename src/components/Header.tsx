"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/config/site';

const Header = () => {
  const pathname = usePathname();
  // 首页使用透明暗色导航栏，其他页面使用白底
  const isHomePage = pathname === '/';

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isHomePage 
        ? 'bg-slate-950/20 backdrop-blur-md border-b border-white/10' 
        : 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm'
    }`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center xl:max-w-full xl:px-10">
        <Link href="/" className="flex items-center gap-3" prefetch={true}>
          <Image 
            src="/favicon.ico" 
            alt="天军AI Logo" 
            width={64} 
            height={64} 
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
            priority
          />
          {/* <span className={`text-xl md:text-2xl font-bold tracking-wider ${isHomePage ? 'text-white' : 'text-slate-800'}`}>
            天军科技
          </span> */}
        </Link>
        <nav className="hidden md:flex gap-8 flex-1 justify-end mr-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const textBaseColor = isHomePage ? 'text-slate-300' : 'text-slate-600';
            const textHoverColor = isHomePage ? 'hover:text-white' : 'hover:text-geekBlue';
            const activeColor = isHomePage ? 'text-white' : 'text-geekBlue';
            const underlineColor = isHomePage ? 'bg-cyan-400' : 'bg-geekBlue';

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base font-medium transition-colors ${
                  isActive ? activeColor : `${textBaseColor} ${textHoverColor}`
                }`}
                prefetch={true}
              >
                {link.label}
                {isActive && (
                  <span className={`absolute left-0 right-0 -bottom-2 h-0.5 ${underlineColor} rounded-full`} />
                )}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className={`${
            isHomePage 
              ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_4px_15px_rgba(34,211,238,0.3)]' 
              : 'bg-geekBlue hover:bg-blue-600 text-white shadow-[0_4px_10px_rgba(24,144,255,0.3)]'
          } px-5 py-2 rounded-full text-base font-semibold transition-all whitespace-nowrap`}
          prefetch={true}
        >
          预约演示
        </Link>
      </div>
    </header>
  );
};

export default Header;
