'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookCheck, Shield } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-parchment-300 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-500 hover:text-ink-950"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-xs font-mono uppercase tracking-wider text-ink-600">
            <BookCheck className="w-3.5 h-3.5" />
            <span>Ethical Terms & Disclaimers</span>
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-950 tracking-tight">
          TERMS OF USE & ETHICAL SOURCING
        </h1>
        <p className="font-editorial italic text-xl text-ink-700">
          Rules governing the concept validation platform.
        </p>
      </div>

      <div className="space-y-10 text-sm text-ink-700 font-sans leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            1. Non-Commercial Status
          </h2>
          <p>
            VEERGATHA does not currently sell physical products or collect payments. Any images of garments, art prints, desk weights, or collector medallions represent <strong>conceptual explorations</strong> designed to measure audience interest. No binding commercial contract is created by selecting expressions or submitting preferences.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            2. Weapon & Replica Exclusion Policy
          </h2>
          <p>
            In accordance with PRD §11.2, VEERGATHA categorically excludes functional or decorative weapon replicas (swords, daggers, knives) from all conceptual merchandise studies and advertising creatives. Our focus remains exclusively on design-led cultural media: apparel, lithographs, epigraph rubbings, fine stationery, and architectural objects.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            3. Intellectual Property Integrity
          </h2>
          <p>
            All original writings, layouts, user interface designs, and conceptual renders are the intellectual property of the VEERGATHA venture. Historical epigraphy and citations are quoted under educational fair practice. We strictly prohibit scraping our database or utilizing our brand identity for unauthorized commercial counterfeits.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            4. Academic & Historical Accuracy
          </h2>
          <p>
            Our team reviews all dimension cards against peer-reviewed academic literature. However, history is an evolving discipline with regional interpretations. We welcome scholarly feedback and corrections through our transparent editorial channel.
          </p>
        </section>
      </div>
    </div>
  );
}
