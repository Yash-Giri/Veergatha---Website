'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, BookOpen, ShieldCheck, FileText, BarChart3, ArrowUpRight } from 'lucide-react';
import EarlyAccessModal from '@/components/common/EarlyAccessModal';

export default function Footer() {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-ink-950 text-parchment-200 border-t border-ink-800 transition-colors">
        {/* Upper Editorial Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-ink-800/80">
            {/* Brand Manifesto Column */}
            <div className="md:col-span-6 lg:col-span-5 space-y-4">
              <Link href="/" className="inline-block group">
                <span className="font-serif text-3xl sm:text-4xl font-bold tracking-epic text-parchment-100 group-hover:text-parchment-300 transition-colors">
                  VEERGATHA
                </span>
                <p className="text-[11px] uppercase tracking-[0.25em] text-ink-400 font-sans mt-1">
                  वीरगाथा · Digital Heritage Discovery
                </p>
              </Link>

              <p className="font-serif text-xl sm:text-2xl text-parchment-200 italic font-normal max-w-md pt-2">
                “Find the story that speaks to you.”
              </p>

              <p className="text-sm text-ink-300 leading-relaxed max-w-md font-sans pt-1">
                India’s history is not one story. It is thousands of stories waiting to be discovered, remembered, and reimagined into contemporary design-led forms.
              </p>

              <div className="pt-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-900 border border-ink-800 text-xs text-amber-200/90 font-mono">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Stage: Concept Validation Experiment</span>
                </div>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 lg:col-span-3 space-y-4">
              <h3 className="text-xs uppercase font-semibold tracking-widest text-parchment-400 font-sans">
                Exploration
              </h3>
              <ul className="space-y-2.5 text-sm font-sans">
                <li>
                  <Link href="/stories" className="text-ink-300 hover:text-parchment-100 transition-colors flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-ink-400" />
                    <span>Heritage Worlds</span>
                  </Link>
                </li>
                <li>
                  <Link href="/concepts" className="text-ink-300 hover:text-parchment-100 transition-colors flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-ink-400" />
                    <span>Conceptual Expressions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/merchandise" className="text-ink-300 hover:text-parchment-100 transition-colors flex items-center gap-1">
                    <ShoppingBag className="w-3.5 h-3.5 text-ink-400" />
                    <span>Merchandise Concepts</span>
                  </Link>
                </li>
            </ul>

            {/* Integrity & Legal Column */}
            <div className="md:col-span-3 lg:col-span-4 space-y-4">
              <h3 className="text-xs uppercase font-semibold tracking-widest text-parchment-400 font-sans">
                Integrity & Governance
              </h3>
              <p className="text-xs text-ink-400 leading-relaxed font-sans">
                This platform is an open validation experiment. We never display fake reviews, manufactured sales, or claim proprietary designs until validated with real community interest.
              </p>
              <ul className="space-y-2 text-xs font-sans pt-1">
                <li>
                  <Link href="/asset-register" className="text-ink-300 hover:text-parchment-100 transition-colors flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-ink-400" />
                    <span>Transparent Asset & IP Register</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-ink-300 hover:text-parchment-100 transition-colors flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-ink-400" />
                    <span>Privacy Policy (DPDP Act Alignment)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-ink-300 hover:text-parchment-100 transition-colors">
                    Terms & Ethical Sourcing Standard
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Honest Stage Banner */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ink-400">
            <p className="font-serif text-base text-parchment-300 italic tracking-wide text-center sm:text-left">
              “We’re building VEERGATHA. Help us decide what comes next.”
            </p>
            <div className="flex items-center space-x-6 text-[11px] text-ink-500">
              <span>© {new Date().getFullYear()} VEERGATHA Venture. All rights reserved.</span>
              <span className="hidden sm:inline">·</span>
              <span className="text-amber-200/80">Conceptual exploration — not currently for sale.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
      />
    </>
  );
}
