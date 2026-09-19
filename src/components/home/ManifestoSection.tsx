'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ManifestoSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/heritage/gupta/hero-knowledge-astronomy-coinage.jpg';

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageLoaded(false);
    };
  }, []);

  return (
    <section className="py-28 bg-ink-950 text-parchment-100 border-b border-ink-800 relative overflow-hidden">
      {/* Background Architectural Etching / Geometry */}
      {imageLoaded ? (
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('/images/heritage/gupta/hero-knowledge-astronomy-coinage.jpg')`,
          }}
          aria-hidden="true"
        />
      ) : (
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-overlay"
          aria-hidden="true"
        >
          {/* Deliberate placeholder with Gupta heritage styling */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-BFA047">/* gupta accentHex */
                GUPTA HERITAGE
              </h2>
              <p className="text-sm text-ink-600 font-sans mt-4 max-w-xl">
                Arts · Science · Knowledge · Empire · Culture
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 text-center sm:text-left">
        <div className="space-y-2">
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300">
            Manifesto · Why VEERGATHA Exists
          </span>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-parchment-100 leading-[1.12]">
            HISTORY ISN’T JUST SOMETHING TO REMEMBER.
          </h2>
          <div className="space-y-2 font-editorial text-3xl sm:text-5xl md:text-6xl italic font-normal text-amber-100/90 leading-[1.15]">
            <p>IT IS SOMETHING TO DISCOVER,</p>
            <p>UNDERSTAND,</p>
            <p>AND CARRY FORWARD.</p>
          </div>
        </div>

        <div className="max-w-2xl space-y-6 pt-4 text-ink-300 font-sans text-base sm:text-lg leading-relaxed">
          <p>
            For too long, India’s vast civilizational expanse has been flattened into either patriotic clichés or dry textbook dates. We believe our heritage deserves the same design rigor, subtlety, and reverence that the world’s greatest design houses bring to their cultures.
          </p>
          <p className="font-serif italic text-parchment-300 text-xl">
            “The visitor should feel: This belongs to me too.”
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/vision"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-950 hover:bg-parchment-200 transition-all rounded-sm shadow-md"
          >
            <span>Read Our Full Vision</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/stories"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest border border-parchment-300 hover:text-parchment-100 hover:border-parchment-300 transition-all rounded-sm"
          >
            <span>Explore The 6 Worlds</span>
          </Link>
        </div>
      </div>
    </section>
  );
}