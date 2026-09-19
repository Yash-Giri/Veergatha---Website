'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, BookOpen, Compass, ArrowRight, Eye, Feather } from 'lucide-react';
import { logEvent } from '@/lib/analytics';
import EarlyAccessModal from '@/components/common/EarlyAccessModal';

export default function VisionPage() {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  useEffect(() => {
    logEvent('page_view', { page: '/vision' });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Editorial Header */}
      <div className="space-y-6 text-center sm:text-left border-b border-parchment-300 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-xs font-mono uppercase tracking-wider text-ink-600">
          <Feather className="w-3.5 h-3.5" />
          <span>Foundational Principles</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink-950 tracking-tight leading-tight">
          OUR VISION
        </h1>
        <p className="font-editorial italic text-2xl sm:text-3xl text-ink-800">
          “Find the story that speaks to you.”
        </p>
      </div>

      {/* Section 1: Why VEERGATHA Exists */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-400">01</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
            Why VEERGATHA Exists
          </h2>
        </div>
        <div className="space-y-4 text-ink-700 font-sans text-base leading-relaxed">
          <p>
            India’s past is not one monolithic chronicle. It is thousands of regional, civilizational, and dynastic narratives—from the maritime fleets of the Cholas to the mountain citadels of the Marathas; from the astronomical epiphanies of Gupta scholars to the river battles of the Ahoms.
          </p>
          <p>
            Yet today, Indian heritage merchandise is fragmented into three extremes: loud patriotic clichés, generic tourist souvenirs, or dry academic tomes. We believe our heritage belongs in the contemporary world with the same quiet luxury, typographic dignity, and design excellence that international design houses bestow on their cultural histories.
          </p>
        </div>
      </section>

      {/* Section 2: What We Believe */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-400">02</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
            What We Believe
          </h2>
        </div>
        <div className="p-8 bg-parchment-50 border border-parchment-300 rounded-sm space-y-4">
          <p className="font-serif text-xl sm:text-2xl text-ink-950 italic">
            Historical stories can become contemporary cultural experiences.
          </p>
          <p className="text-sm text-ink-700 font-sans leading-relaxed">
            People do not connect with "Indian history" as an abstract block. They connect with particular values: a strategist’s calculated statecraft, a warrior’s sacrifice for autonomy, a navigator’s courage into uncharted waters, or a polymath’s balance of science and poetry. The story must always lead; the object is its eventual expression.
          </p>
        </div>
      </section>

      {/* Section 3: Building in the Open */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-400">03</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
            Building in the Open
          </h2>
        </div>
        <div className="space-y-4 text-ink-700 font-sans text-base leading-relaxed">
          <p className="font-serif italic text-xl text-ink-900">
            “We’re building VEERGATHA. Help us decide what comes next.”
          </p>
          <p>
            We operate with radical honesty. We do not pretend to have sold thousands of units or have manufactured products sitting in warehouses. This platform is an empirical concept-validation experiment: we listen to which heritage stories resonate with people before committing resources to production.
          </p>
        </div>
      </section>

      {/* Section 4: Historical Sourcing Standard */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-400">04</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
            Historical Sourcing Standard
          </h2>
        </div>
        <div className="space-y-4 text-ink-700 font-sans text-base leading-relaxed">
          <p>
            Every story dimension on VEERGATHA is verified against credible epigraphical records, scholarly university monographs, and national archives (including the Archaeological Survey of India, Epigraphia Indica, and historical university repositories).
          </p>
          <p>
            Our tone is strictly informative, calm, and respectful of community sensibilities—never sensationalist or chauvinistic. Where historical interpretations diverge, we state so with academic care.
          </p>
        </div>
      </section>

      {/* Section 5: Originality & Intellectual Property */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-400">05</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
            Originality & Intellectual Property
          </h2>
        </div>
        <div className="space-y-4 text-ink-700 font-sans text-base leading-relaxed">
          <p>
            We maintain a strict principle: <span className="font-semibold text-ink-900">Publicly available ≠ commercially usable.</span> We do not borrow commercial artwork from social media or print existing artists’ work. All layouts, typography systems, vector etchings, and conceptual physical expressions are either originally created, licensed, or sourced from verified public-domain archives.
          </p>
          <div className="pt-2">
            <Link
              href="/asset-register"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-900 hover:underline"
            >
              <ShieldCheck className="w-4 h-4 text-ink-700" />
              <span>Inspect Our Complete Asset & Licensing Register →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: The Roadmap (Enchanted -> Elevated) */}
      <section className="space-y-6 pt-4 border-t border-parchment-300">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-400">06</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
            The Roadmap: Enchanted → Elevated
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-amber-100 text-amber-900 rounded-xs">
              Current Stage
            </span>
            <h3 className="font-serif text-xl font-bold text-ink-950">
              ENCHANTED
            </h3>
            <p className="text-xs text-ink-600 font-sans leading-relaxed">
              Digital heritage validation. Low-risk prototypes: archival art prints, linen shirts, informational strategy folios, and botanical stationery. Measuring true resonance via the Meaningful Heritage Engagement Rate (MHER).
            </p>
          </div>

          <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-3 opacity-80">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-parchment-200 text-ink-600 rounded-xs">
              Future Horizon
            </span>
            <h3 className="font-serif text-xl font-bold text-ink-950">
              ELEVATED
            </h3>
            <p className="text-xs text-ink-600 font-sans leading-relaxed">
              Follows proven community demand and sustainable economics: handcrafted lost-wax bronze sculptures, architectural granite desk editions, and museum-grade collector folios.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="p-10 bg-ink-950 text-parchment-100 rounded-sm text-center space-y-5">
        <h3 className="font-serif text-3xl font-bold">
          Be Part of the Genesis
        </h3>
        <p className="text-sm text-ink-300 font-sans max-w-md mx-auto leading-relaxed">
          Join our early access list to participate in community feedback sessions and prototype reviews.
        </p>
        <button
          onClick={() => setEarlyAccessOpen(true)}
          className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-950 hover:bg-parchment-200 rounded-sm transition-all shadow-sm"
        >
          Keep Me Updated →
        </button>
      </div>

      <EarlyAccessModal
        isOpen={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
      />
    </div>
  );
}
