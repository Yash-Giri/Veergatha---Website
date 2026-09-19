'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';
import { CONCEPT_LIST } from '@/data/concepts';

export default function ConceptPreview() {
  return (
    <section className="py-24 bg-parchment-100 border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-parchment-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-ink-600 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Philosophy of Form</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 tracking-tight">
              FROM STORY TO OBJECT.
            </h2>
            <p className="font-editorial italic text-2xl sm:text-3xl text-ink-700">
              A story can take many forms.
            </p>
          </div>

          <Link
            href="/concepts"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-800 hover:text-ink-950 group"
          >
            <span>View All Conceptual Expressions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Narrative Journey Indicator */}
        <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-ink-600">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-ink-900 text-parchment-100 flex items-center justify-center font-bold text-[10px]">1</span>
              <span>Historical Story</span>
            </div>
            <span className="text-ink-300">→</span>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-ink-900 text-parchment-100 flex items-center justify-center font-bold text-[10px]">2</span>
              <span>Heritage World</span>
            </div>
            <span className="text-ink-300">→</span>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-ink-900 text-parchment-100 flex items-center justify-center font-bold text-[10px]">3</span>
              <span>Personal Resonance</span>
            </div>
            <span className="text-ink-300">→</span>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-ink-900 text-parchment-100 flex items-center justify-center font-bold text-[10px]">4</span>
              <span>Physical Expression</span>
            </div>
          </div>
        </div>

        {/* 5 Conceptual Form Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CONCEPT_LIST.map((concept) => (
            <div
              key={concept.id}
              className="bg-parchment-50 border border-parchment-300 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-ink-800 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              {/* Concept Visual Representation */}
              <div className="relative h-48 bg-ink-950 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60"
                  style={{ backgroundImage: `url(${concept.sampleImage})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent pointer-events-none" />

                {/* Mandatory Disclaimer Tag */}
                <div className="absolute top-2.5 left-2.5 right-2.5">
                  <span className="block text-[9px] font-mono uppercase tracking-wider px-2 py-1 bg-ink-950/90 text-amber-200 border border-ink-700 backdrop-blur-xs text-center rounded-xs">
                    Conceptual Exploration
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-parchment-100">
                  <h3 className="font-serif text-xl font-bold tracking-wider">
                    {concept.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-ink-800 font-sans">
                    {concept.subhead}
                  </p>
                  <p className="text-xs text-ink-600 leading-relaxed font-sans line-clamp-3">
                    {concept.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-parchment-200 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {concept.mediums.slice(0, 2).map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-mono px-2 py-0.5 bg-parchment-200 text-ink-700 rounded-xs"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <p className="text-[10px] font-mono text-ink-400">
                    Not currently available for sale.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
