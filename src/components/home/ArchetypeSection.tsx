'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ARCHETYPES } from '@/data/archetypes';
import { Archetype } from '@/types';

export default function ArchetypeSection() {
  return (
    <section id="archetypes" className="py-20 bg-parchment-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
            Chapter 03 · Inner Compass
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-950">
            WHAT DRAWS YOU IN?
          </h2>
          <p className="font-editorial italic text-xl text-ink-700 max-w-2xl mx-auto">
            Start with what interests you. These archetypes represent different ways of engaging with history—through strategy, courage, exploration, building, or knowledge.
          </p>
        </div>

        {/* Archetypes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARCHETYPES.map((archetype) => (
            <ArchetypeCard key={archetype.id} archetype={archetype} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchetypeCard({ archetype }: { archetype: Archetype }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-parchment-300 bg-parchment-50 text-ink-900 transition-all duration-300 hover:border-ink-800">
      {/* Background Image */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${archetype.image})` }}
          aria-hidden="true"
        />
        {/* Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Archetype Number and Title */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-ink-950 text-parchment-100 font-mono text-[11px] uppercase tracking-wider">
            {/* Numbers would ideally come from archetype order, but using placeholder for now */}
            0{['strategist', 'warrior', 'explorer', 'builder', 'polymath'].indexOf(archetype.id) + 1}
          </span>
          <div className="space-y-1">
            <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300">
              {archetype.title.replace('THE ', '')}
            </span>
            <h3 className="font-serif text-2xl font-bold text-ink-950 tracking-tight">
              {archetype.subtitle}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-ink-600 leading-relaxed">
          {archetype.description}
        </p>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-3">
          <span>{archetype.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}