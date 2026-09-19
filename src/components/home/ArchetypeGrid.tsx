'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ARCHETYPES } from '@/data/archetypes';
import { logEvent } from '@/lib/analytics';
import { Archetype } from '@/types';

export default function ArchetypeGrid() {
  const router = useRouter();

  const handleArchetypeClick = (archetype: Archetype) => {
    logEvent('archetype_select', { archetype: archetype.id });
    router.push(`/stories?archetype=${archetype.id}`);
  };

  return (
    <section id="archetypes" className="py-24 bg-parchment-100 border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-ink-600 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curiosity Entry Points</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 tracking-tight">
            WHAT DRAWS YOU IN?
          </h2>
          <p className="font-editorial italic text-xl sm:text-2xl text-ink-700">
            Start with what interests you.
          </p>
          <p className="text-xs text-ink-500 font-sans max-w-md mx-auto">
            These are narrative entry points, not personality classifications. Choose the impulse that sparks your curiosity.
          </p>
        </div>

        {/* 5 Archetype Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ARCHETYPES.map((arch) => (
            <div
              key={arch.id}
              onClick={() => handleArchetypeClick(arch)}
              className="group cursor-pointer relative h-[380px] rounded-sm overflow-hidden border border-parchment-300/80 bg-ink-950 text-parchment-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-6"
            >
              {/* Background Image with Slow Hover Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-40 group-hover:opacity-30"
                style={{ backgroundImage: `url(${arch.image})` }}
                aria-hidden="true"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent pointer-events-none" />

              {/* Foreground Content */}
              <div className="relative z-10 space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-amber-200/80">
                    Perspective
                  </span>
                  <h3 className="font-serif text-xl font-bold text-parchment-100 group-hover:text-amber-200 transition-colors">
                    {arch.title}
                  </h3>
                </div>

                <p className="text-xs text-parchment-300 font-medium font-sans">
                  {arch.subtitle}
                </p>

                <p className="text-xs text-ink-300 line-clamp-3 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {arch.description}
                </p>

                {/* Animated CTA */}
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 group-hover:translate-x-1 transition-transform">
                  <span>{arch.ctaText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
