'use client';

import AnimatedStars from '../components/AnimatedStars';
import Link from 'next/link';

export default function ValuesPage() {
  return (
    <div className="values-page">
      <AnimatedStars />
      <div className="values-container">
        <h1 className="values-title title-glow mb-16 md:mb-16">
          <span className="values-title-text">our values</span>
          <div className="values-title-glow title-bg" />
        </h1>
        <div className="space-y-6">
          <div className="values-card">
            <h2 className="values-card-title">I. sustainable foundations; positive-sum games</h2>
            <p className="values-card-text">
              we build with an eye on longevity, setting roots that will flourish far into the future.
            </p>
          </div>

          <div className="values-card">
            <h2 className="values-card-title">II. deliberate action; resolute impact</h2>
            <p className="values-card-text">
              with a blend of caution and determination, we ensure each step forward is purposeful and steadfast.
            </p>
          </div>

          <div className="values-card">
            <h2 className="values-card-title">III. trailblazers; not followers</h2>
            <p className="values-card-text">
              we challenge convention and reject the status quo to drive bold, meaningful innovation.
            </p>
          </div>

          <div className="values-card">
            <h2 className="values-card-title">IV. ownership; meritocracy; privacy</h2>
            <p className="values-card-text">
              we hold dear the principles of personal freedom, embedding them into the fabric of all we do.
            </p>
          </div>

          <div className="values-card">
            <h2 className="values-card-title">V. love; dedication; integrity</h2>
            <p className="values-card-text">
              we are here to create a golden future for every human, and we refuse to settle for less.
            </p>
          </div>
          
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
