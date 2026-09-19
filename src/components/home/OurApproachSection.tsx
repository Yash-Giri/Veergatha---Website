'use client';

import React from 'react';

export default function OurApproachSection() {
  return (
    <section id="our-approach" className="py-20 bg-parchment-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
            Chapter 06 · Design Methodology
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-950">
            OUR APPROACH
          </h2>
          <p className="font-editorial italic text-xl text-ink-700 max-w-2xl mx-auto">
            VEERGATHA translates historical narratives into contemporary design through a rigorous 5-layer methodology: Story → Heritage → Visual Language → Contemporary Design → Merchandise Expression.
          </p>
        </div>

        {/* Approach Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Layer 1: Story */}
          <div className="bg-parchment-50 border border-parchment-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-ink-950 text-parchment-100 font-mono text-[11px] uppercase tracking-wider">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-950">STORY</h3>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">
              We begin with verified historical narratives—from maritime expeditions to democratic assemblies—each representing a unique civilizational expression waiting to be discovered.
            </p>
          </div>

          {/* Layer 2: Heritage */}
          <div className="bg-parchment-50 border border-parchment-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-ink-950 text-parchment-100 font-mono text-[11px] uppercase tracking-wider">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-950">HERITAGE</h3>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">
              We distill the essence of each world into heritage elements: architectural geometries, navigational systems, craft traditions, and governance philosophies that define cultural identity.
            </p>
          </div>

          {/* Layer 3: Visual Language */}
          <div className="bg-parchment-50 border border-parchment-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-ink-950 text-parchment-100 font-mono text-[11px] uppercase tracking-wider">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-950">VISUAL LANGUAGE</h3>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">
              Heritage elements are translated into a contemporary visual language—contour lines become stitchwork, fort geometries inspire patterns, and maritime charts inform graphic compositions.
            </p>
          </div>

          {/* Layer 4: Contemporary Design */}
          <div className="bg-parchment-50 border border-parchment-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-ink-950 text-parchment-100 font-mono text-[11px] uppercase tracking-wider">
                04
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-950">CONTEMPORARY DESIGN</h3>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">
              The visual language is applied through modern design principles—minimalism, functionality, and wearability—creating pieces that feel both timeless and thoroughly contemporary.
            </p>
          </div>

          {/* Layer 5: Merchandise Expression */}
          <div className="bg-parchment-50 border border-parchment-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-ink-950 text-parchment-100 font-mono text-[11px] uppercase tracking-wider">
                05
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-950">MERCHANDISE EXPRESSION</h3>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">
              The final expression emerges as conceptual merchandise—apparel, objects, and prints—that embody historical narratives through thoughtful material choices and symbolic details.
            </p>
          </div>

          {/* Validation & Feedback */}
          <div className="bg-parchment-50 border border-parchment-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-ink-950 text-parchment-100 font-mono text-[11px] uppercase tracking-wider">
                06
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-950">VALIDATION</h3>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">
              Each concept undergoes validation through preference signaling and experimental feedback, ensuring that our translations resonate with contemporary audiences while honoring historical integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}