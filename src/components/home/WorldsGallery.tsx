'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { HERITAGE_WORLDS_LIST } from '@/data/heritageWorlds';
import { HeritageWorld } from '@/types';

export default function WorldsGallery() {
  // We'll create an asymmetric editorial gallery:
  // Item 0 (Chola): Large hero feature card (spans 2 columns, large height)
  // Item 1 (Maratha): Tall vertical card
  // Item 2 (Rajputana): Standard editorial card
  // Item 3 (Ahom): Feature card
  // Item 4 (Gupta): Standard card
  // Item 5 (Mauryan): Standard card

  return (
    <section id="worlds" className="py-24 bg-parchment-200/40 border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-parchment-300">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
              Chapter 02 · The Worlds
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 tracking-tight">
              HERITAGE WORLDS
            </h2>
            <p className="font-editorial italic text-2xl sm:text-3xl text-ink-700">
              What part of India’s story is yours?
            </p>
          </div>

          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-800 hover:text-ink-950 group"
          >
            <span>Explore All 6 Worlds</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Chola (Large 8-col Feature) */}
          <div className="md:col-span-12 lg:col-span-8">
            <WorldCard world={HERITAGE_WORLDS_LIST[0]} size="large" />
          </div>

          {/* Card 2: Maratha (Tall 4-col Card) */}
          <div className="md:col-span-6 lg:col-span-4">
            <WorldCard world={HERITAGE_WORLDS_LIST[1]} size="tall" />
          </div>

          {/* Card 3: Rajputana (4-col Card) */}
          <div className="md:col-span-6 lg:col-span-4">
            <WorldCard world={HERITAGE_WORLDS_LIST[2]} size="standard" />
          </div>

          {/* Card 4: Ahom (4-col Card) */}
          <div className="md:col-span-6 lg:col-span-4">
            <WorldCard world={HERITAGE_WORLDS_LIST[3]} size="standard" />
          </div>

          {/* Card 5: Gupta (4-col Card) */}
          <div className="md:col-span-6 lg:col-span-4">
            <WorldCard world={HERITAGE_WORLDS_LIST[4]} size="standard" />
          </div>

          {/* Card 6: Mauryan (Full-width / 12-col Wide Feature) */}
          <div className="md:col-span-12">
            <WorldCard world={HERITAGE_WORLDS_LIST[5]} size="wide" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorldCard({ world, size }: { world: HeritageWorld; size: 'large' | 'tall' | 'standard' | 'wide' }) {
  const heightClass = {
    large: 'h-[440px] md:h-[500px]',
    tall: 'h-[440px] md:h-[500px]',
    standard: 'h-[380px]',
    wide: 'h-[360px] md:h-[400px]',
  }[size];

  return (
    <Link
      href={`/stories/${world.id}`}
      className={`group relative ${heightClass} w-full rounded-sm overflow-hidden border border-parchment-400 bg-ink-950 text-parchment-100 block shadow-sm hover:shadow-2xl transition-all duration-500`}
    >
      {/* Background Image with Slow Zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-55 group-hover:opacity-40"
        style={{ backgroundImage: `url(${world.heroImage})` }}
        aria-hidden="true"
      />

      {/* Atmospheric Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent pointer-events-none" />

      {/* Top Accent / Era Tag */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
        <span className="text-[11px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-sm bg-ink-900/80 backdrop-blur-sm border border-ink-700 text-parchment-200">
          {world.era}
        </span>
        <span className="text-xs font-serif italic text-parchment-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {world.devanagariName}
        </span>
      </div>

      {/* Bottom Content with Progressive Shift */}
      <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3 transform transition-transform duration-300 group-hover:-translate-y-1">
        <div className="space-y-1">
          <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-amber-200/90 font-medium">
            {world.region}
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-parchment-100 group-hover:text-amber-100 transition-colors">
            {world.name.toUpperCase()}
          </h3>
        </div>

        <p className="font-editorial italic text-lg sm:text-xl text-parchment-200 line-clamp-1">
          “{world.hook}”
        </p>

        <p className="text-xs text-ink-300 font-sans tracking-wide max-w-xl">
          {world.tagline}
        </p>

        {/* Hover CTA Indicator */}
        <div className="pt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300 opacity-90 group-hover:opacity-100">
          <span>Enter This World</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}
