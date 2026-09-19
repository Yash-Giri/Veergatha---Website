'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HERITAGE_WORLDS } from '@/data/heritageWorlds';

export default function FeaturedStorySection() {
  // Feature Chola as the example story (could be rotated or made dynamic)
  const world = HERITAGE_WORLDS.chola;

  return (
    <section id="featured-story" className="py-20 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-4 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
            Chapter 04 · Spotlight
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-950">
            ONE FEATURED STORY
          </h2>
        </div>

        {/* Split Layout: Text | Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink-950">
              {world.name.toUpperCase()}
            </h3>
            <p className="font-editorial italic text-2xl md:text-3xl text-amber-100/95">
              “{world.hook}”
            </p>
            <p className="text-sm text-ink-600 leading-relaxed max-w-lg">
              {world.description}
            </p>
            <Link
              href={`/stories/${world.id}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-ink-950 text-parchment-100 hover:bg-ink-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-950"
            >
              <span>Explore {world.name} →</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visual Side */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-xl border border-parchment-300 bg-ink-950">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
              style={{ backgroundImage: `url(${world.heroImage})` }}
              aria-hidden="true"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />

            {/* Era Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-widest bg-parchment-200/80 text-ink-600">
              {world.era.split('–')[0]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}