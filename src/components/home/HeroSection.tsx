'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/heritage/chola/hero-indian-ocean-routes-temple-geometry.svg';

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageLoaded(false);
    };
  }, []);

  return (
    <section className="relative flex h-[calc(100vh-4.5rem)] w-full items-center justify-center overflow-hidden bg-parchment-100">
      {/* Background Visual - To be replaced with actual heritage visual */}
      {imageLoaded ? (
        <div className="absolute inset-0 bg-cover bg-center opacity-75"
             style={{ backgroundImage: `url('/images/heritage/chola/hero-indian-ocean-routes-temple-geometry.svg')` }}
             aria-hidden="true"
        />
      ) : (
        <div className="absolute inset-0 bg-cover bg-center opacity-75"
             aria-hidden="true"
        >
          {/* Deliberate placeholder with heritage world styling */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-ink-950">
                VISUAL CONCEPT
              </h3>
              <p className="text-sm text-ink-600 font-sans">
                Asset pending — deliberate placeholder
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Overlay for text readability */}
      <div className="absolute inset-0 bg-parchment-100/70" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6 sm:px-8">
        {/* Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-parchment-300 bg-parchment-50/80">
          <span className="w-2 h-2 rounded-full bg-ink-800" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-sans font-semibold text-ink-800">
            VEERGATHA
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink-950 mb-4">
          FIND THE STORY<br />
          <span className="font-editorial italic font-normal text-ink-800">
            THAT SPEAKS TO YOU.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="font-serif text-lg md:text-xl text-ink-700 max-w-2xl">
          India is not one story.<br />
          It is thousands of stories of ambition, craft, knowledge, resistance and imagination.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/stories"
            className="flex-1 flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-widest uppercase bg-ink-950 text-parchment-100 hover:bg-ink-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-950"
          >
            EXPLORE THE STORIES →
          </Link>

          <Link
            href="/stories"
            className="flex-1 flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-widest uppercase border border-parchment-300 hover:border-parchment-400 bg-transparent text-ink-950 hover:text-ink-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-950"
          >
            DISCOVER YOUR HERITAGE →
          </Link>
        </div>
      </div>
    </section>
  );
}