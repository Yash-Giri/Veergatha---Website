'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONCEPT_LIST } from '@/data/concepts';

export default function ConceptualExpressionsSection() {
  return (
    <section id="conceptual-expressions" className="py-20 bg-parchment-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
            Chapter 05 · From Story to Object
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-950">
            WHAT COULD A STORY BECOME?
          </h2>
          <p className="font-editorial italic text-xl text-ink-700 max-w-2xl mx-auto">
            A story can take many forms. These conceptual expressions show how India's many stories might translate into contemporary design objects—each one an exploration of heritage, materiality, and meaning.
          </p>
        </div>

        {/* Concepts Grid - Show 4 concepts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONCEPT_LIST.slice(0, 4).map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptCard({ concept }: { concept: any }) {
  return (
    <Link
      href={`/concepts`}
      className="group relative overflow-hidden rounded-xl border border-parchment-300 bg-parchment-50 text-ink-900 transition-all duration-300 hover:border-ink-800"
    >
      {/* Concept Visual */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${concept.sampleImage})` }}
          aria-hidden="true"
        />
        {/* Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />

        {/* Mandatory Disclaimer */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-center px-2 py-1">
          <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 bg-ink-950/90 text-amber-200 border border-ink-700 text-center rounded-xs">
            Conceptual Exploration — Not Currently Available for Sale
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-4">
        {/* Concept Title and Category */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300">
            {concept.categoryLabel}
          </span>
          <h3 className="font-serif text-xl font-bold text-ink-950 tracking-wider">
            {concept.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-ink-600 leading-relaxed">
          {concept.description}
        </p>

        {/* CTA */}
        <div className="mt-4 flex items-center gap-3">
          <span>Explore This Expression →</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}