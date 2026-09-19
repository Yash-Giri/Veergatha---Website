'use client';

import React from 'react';
import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function IdeaSection() {
  return (
    <section id="idea-section" className="py-20 bg-parchment-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Headline Block */}
        <div className="space-y-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
            Chapter 01 · The Thesis
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-950">
            INDIA HAS MORE THAN ONE STORY.
          </h2>
          <p className="font-editorial italic text-xl text-ink-700 max-w-2xl mx-auto">
            India’s history is not a single narrative. It is a tapestry of countless stories—each thread representing a unique civilization, ambition, craft, and imagination waiting to be discovered.
          </p>
        </div>

        {/* Closing Provocation */}
        <div className="mt-12 border-t border-parchment-300/80 pt-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-sm font-sans uppercase tracking-widest text-ink-500">
              From the Indus Valley to the Brahmaputra · From the Himalayas to the Indian Ocean
            </p>
            <p className="font-serif text-3xl md:text-4xl font-bold text-ink-950">
              Which one speaks to you?
            </p>
          </div>

          <Link
            href="/stories"
            className="inline-flex items-center gap-3 px-6 py-3 text-xs font-semibold tracking-widest uppercase bg-ink-950 text-parchment-100 hover:bg-ink-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-950"
          >
            <span>Explore All Stories</span>
            <Compass className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}