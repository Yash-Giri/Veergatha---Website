'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { HERITAGE_WORLDS_LIST } from '@/data/heritageWorlds';
import { HeritageWorld } from '@/types';

export default function HeritageWorldsSection() {
  return (
    <section id="worlds" className="py-20 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
              Chapter 02 · The Worlds
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-950 tracking-tight">
              HERITAGE WORLDS
            </h2>
            <p className="font-editorial italic text-2xl md:text-3xl text-ink-700 max-w-2xl">
              What part of India’s story is yours?
            </p>
          </div>

          <Link
            href="/stories"
            className="inline-flex items-center gap-3 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-ink-950 text-parchment-100 hover:bg-ink-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-950"
          >
            <span>Explore All 6 Worlds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Heritage Worlds Grid - 3x2 layout for 6 worlds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HERITAGE_WORLDS_LIST.map((world) => (
            <WorldCard key={world.id} world={world} />
          )))}
        </div>
      </div>
    </section>
  );
}

function WorldCard({ world }: { world: HeritageWorld }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = world.heroImage;

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageLoaded(false);
    };
  }, [world.heroImage]);

  return (
    <Link
      href={`/stories/${world.id}`}
      className="group relative overflow-hidden rounded-xl border border-parchment-300 bg-ink-950 text-parchment-100 transition-all duration-300 hover:border-ink-800 hover:bg-ink-900/50"
    >
      {/* Background Image with Subtle Zoom */}
      <div className="relative h-[320px] w-full overflow-hidden">
        {imageLoaded ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${world.heroImage})` }}
            aria-hidden="true"
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            aria-hidden="true"
          >
            {/* Deliberate placeholder with heritage world styling */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-4">
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
        {/* Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Era and Region Badges */}
        <div className="flex flex-wrap gap-3 mb-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest bg-parchment-200/80 text-ink-600">
            {world.era.split('–')[0]}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest bg-parchment-200/80 text-ink-600">
            {world.region.split(' & ')[0]}
          </span>
        </div>

        {/* World Name */}
        <h3 className="font-serif text-3xl font-bold text-parchment-100 tracking-tight">
          {world.name.toUpperCase()}
        </h3>

        {/* Hook / Tagline */}
        <p className="font-editorial italic text-lg text-ink-700">
          “{world.hook}”
        </p>

        {/* Description */}
        <p className="text-sm text-ink-600 leading-relaxed max-w-md">
          {world.description}
        </p>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-3">
          <span>Explore This World →</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}