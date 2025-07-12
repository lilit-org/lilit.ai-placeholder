'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/global.css';
import AnimatedStars from './components/AnimatedStars';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Always set dark mode
    setIsDark(true);
    document.documentElement.classList.add('dark');

    // Remove the system preference listener since we're forcing dark mode
    return () => {};
  }, []);

  return (
    <main className="container">
      <AnimatedStars />
      <div className="hero pt-8 md:pt-12">
        <div className="mb-4 md:mb-8 group">
          <div className="group-hover:animate-scale">
            <Image
              src="/logo.svg"
              alt="LILIT Logo"
              width={80}
              height={80}
              priority
              className="w-20 h-20 md:w-[120px] md:h-[120px] transition-all duration-300 group-hover:brightness-110 neon-crystal"
              style={{ 
                backgroundColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(132,117,249,0.3))'
              }}
            />
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black mb-2 md:mb-4 glow-text tracking-wider">LILIT</h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 glow-text">coming very soon; just for you</h2>
        <p className="subtitle text-xs sm:text-sm md:text-base lg:text-lg">
          (we&apos;re building the next generation of prediction markets, and it&apos;s going to be awesome)
        </p>
      </div>

    </main>
  );
} 
