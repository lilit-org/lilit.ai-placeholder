'use client';

import AnimatedStars from '../components/AnimatedStars';
import Link from 'next/link';

export default function VisionPage() {
  return (
    <div className="values-page">
      <AnimatedStars />
      <div className="values-container">
        <h1 className="values-title title-glow mb-16 md:mb-16">
          <span className="values-title-text">our vision</span>
          <div className="values-title-glow title-bg" />
        </h1>
        <div className="values-card max-w-4xl mx-auto p-8 md:p-12">
          <p className="values-card-text text-center text-xl md:text-2xl leading-relaxed">
            for millennia, scientists have studied the stars in an effort to comprehend reality and foresee the future. now, for the first time, 
            a rigorous language has been invented, and aided by artificial intelligence, we are beginning to truly grasp their nature and significance.
            <br /><br />
            our protocol integrates real-time celestial pattern analysis with aggregated data from multiple sources to deliver actionable insights for 
            personal growth, decision-making, and financial planning — decentralized and crypto-native by design.
            <br /><br />
            but you don&apos;t need to worry about the science behind our groundbreaking technology — we&apos;ve wrapped that wisdom in an intuitive, safe, 
            and user-friendly platform, so you can simply sit back and enjoy your new magical powers. coming very soon, just for you — 
            and we&apos;re confident you&apos;ll love it.
          </p>
          
          <div className="mt-12 text-center">
            <Link href="/careers" className="text-xl font-semibold text-[rgb(255,220,150)] title-glow hover:text-[rgb(255,220,150)] transition-colors">
              join our stellar team →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
