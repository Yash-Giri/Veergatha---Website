'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function JoinTheJourneySection() {
  return (
    <section id="join-the-journey" className="py-24 bg-parchment-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
            Chapter 07 · Co-Creation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-950">
            JOIN THE JOURNEY
          </h2>
          <p className="font-editorial italic text-xl text-ink-700 max-w-2xl mx-auto">
            VEERGATHA is built through collaboration. Sign up to receive design prototypes, historical source materials, and early access to new worlds as we continue to explore India's many stories together.
          </p>
        </div>

        {/* Early Access Call-to-Action */}
        <div className="mt-16 bg-parchment-100 border border-parchment-300 rounded-xl p-10 text-center">
          <h3 className="font-serif text-3xl font-bold text-ink-950 mb-6">
            Help Shape the Collection
          </h3>
          <p className="text-sm text-ink-600 mb-6 max-w-2xl mx-auto">
            By joining our early access list, you'll get exclusive access to historical research, design concepts, and opportunities to provide feedback that directly influences the VEERGATHA collections.
          </p>
          <Link
            href="/stories/chola"
            className="inline-flex items-center gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-ink-950 text-parchment-100 hover:bg-ink-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-950"
          >
            <span>Explore Chola Stories →</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Validation Dashboard Mention */}
        <div className="mt-16 border-t border-parchment-300/80 pt-12 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-ink-500">
            Behind the Scenes
          </p>
          <h3 className="font-serif text-2xl font-bold text-ink-950">
            Experimental Validation
          </h3>
          <p className="text-sm text-ink-600 max-w-xl mx-auto">
            Every concept undergoes validation through our experimental framework, where heritage preferences and expression interests help us understand which narratives resonate most deeply with contemporary audiences.
          </p>
        </div>
      </div>
    </section>
  );
}