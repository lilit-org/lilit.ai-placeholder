'use client';

import AnimatedStars from '../components/AnimatedStars';

export default function JobsPage() {
  return (
    <div className="values-page">
      <AnimatedStars />
      <div className="values-container">
        <h1 className="values-title title-glow mb-16 md:mb-16 pt-8">
          <span className="values-title-text">join our stellar team</span>
          <div className="values-title-glow title-bg" />
        </h1>
        <div className="space-y-8">
          <div className="values-card">
            <h2 className="values-card-title">researcher-president</h2>
            <p className="values-card-text">
              we are seeking a visionary leader who combines research expertise with exceptional leadership skills. 
              this role calls for someone capable of showcasing our scientific initiatives while guiding the company toward its ambitious goals. 
              as a key representative of our community, you will be the face of our mission to the world — championing our vision and inspiring others with our values.
            </p>
          </div>

          <div className="values-card">
            <h2 className="values-card-title">researcher-software-engineers</h2>
            <p className="values-card-text">
              we are looking for talented humans who can bridge the gap between research and software development. 
              this role combines scientific analysis with implementation of our pioneering technology ( 
              <a 
                href="https://www.youtube.com/watch?v=7s9C92Pkcc0&t=14s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[rgb(255,220,150)] title-glow relative z-10"
              >
                 and it&apos;s a lot of fun
              </a>
              ). this is an ongoing opportunity.
            </p> 
          </div>

          <div className="mt-12">
            <h2 className="values-title title-glow mb-8 text-3xl sm:text-4xl text-left">
              <span className="values-title-text">how to apply</span>
              <div className="values-title-glow title-bg" />
            </h2>
            <p className="values-card-text">
              to apply for either position, please send an introduction letter (in plain text) to{' '}
              <span className="relative inline-block">
                <a href="mailto:hello@lilit.ai" className="text-[rgb(255,220,150)] title-glow relative z-10">
                  hello@lilit.ai
                </a>
                <div className="values-title-glow title-bg absolute inset-0" />
              </span> with the following:
              <ul className="list-disc ml-6 mt-4">
                <li>your relevant experience and expertise</li>
                <li>links to your online presence (personal website, youtube, github, etc.)</li>
                <li>why you&apos;re interested in joining our mission and which of our values resonate most with you</li>
                <li>your birth chart or big 3, and anything you think is intereresting about your avatar</li>
              </ul>
              <br />
              we provide above-market compensation and equity, a comprehensive benefits package, and the rare opportunity
              to collaborate with some of the brightest minds of our generation, backed by the best investors in the industry.
              we look forward to connecting with you and hopefully welcoming you to our team!
              <br />
              note: although we will be interviewing candidates on a rolling basis, positions are expected to be filled around fall of 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
