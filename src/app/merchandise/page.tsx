'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Tag, ShoppingBag, Circle, Zap } from 'lucide-react';
import { HERITAGE_WORLDS, HERITAGE_WORLDS_LIST } from '@/data/heritageWorlds';
import { logEvent } from '@/lib/analytics';

export default function MerchandisePage() {
  const handleExploreWorld = (worldId: string) => {
    logEvent('merchandise_world_explore', {
      world_id: worldId,
      source: 'merchandise_page',
    });
  };

  return (
    <div className="min-h-screen bg-parchment-50">
      {/* Header */}
      <header className="border-b border-parchment-300 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-xs font-mono uppercase tracking-wider text-ink-600">
              <Tag className="w-3.5 h-3.5" />
              <span>Conceptual Explorations</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-950 tracking-tight">
              VEERGATHA MERCHANDISE CONCEPTS
            </h1>
            <p className="font-editorial italic text-2xl sm:text-3xl text-ink-700 max-w-3xl">
              Premium wearable expressions inspired by India's living civilizational heritage
            </p>
            <p className="text-sm text-ink-600 font-sans max-w-xl">
              These are conceptual explorations — not currently available for sale. Each piece
              represents a contemporary design interpretation of historical narratives, crafted
              to embody the spirit of VEERGATHA's six Heritage Worlds.
            </p>
          </div>
        </div>
      </header>

      {/* Disclaimer Banner */}
      <section className="bg-amber-50 border border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Circle className="w-5 h-5 text-amber-400" />
            <div className="space-y-1">
              <h3 className="font-semibold text-amber-800">
                Important Note
              </h3>
              <p className="text-sm text-amber-600">
                All designs shown are conceptual explorations only. They are not currently
                available for purchase and do not represent actual products. Each concept
                includes the mandatory disclosure: "Conceptual exploration — not currently
                available for sale."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worlds Grid */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {HERITAGE_WORLDS_LIST.map((world) => (
              <Link
                key={world.id}
                href={`/merchandise/${world.id}`}
                className="group bg-white border border-parchment-300 rounded-xl overflow-hidden flex flex-col h-full hover:border-ink-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => handleExploreWorld(world.id)}
              >
                {/* Hero Image */}
                <div className="relative h-48 bg-ink-950 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-65"
                    style={{ backgroundImage: `url(${world.heroImage})` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent pointer-events-none" />

                  {/* World Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-parchment-100">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300">
                      {world.region}
                    </span>
                    <h2 className="font-serif text-2xl font-bold tracking-tight">
                      {world.name.toUpperCase()}
                    </h2>
                  </div>
                </div>

                {/* World Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1 space-y-3">
                    <p className="font-editorial italic text-lg text-ink-800 line-clamp-2">
                      “{world.hook}”
                    </p>
                    <p className="text-sm text-ink-600 font-sans flex-1 line-clamp-3">
                      {world.description}
                    </p>
                  </div>

                  {/* Explore Button */}
                  <div className="mt-6 pt-4 border-t border-parchment-200">
                    <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wider">
                      <span>Explore Concepts</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-ink-950 text-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Conceptual Wear Collection
            </h2>
            <p className="text-lg text-parchment-200 max-w-2xl mx-auto">
              Discover how each Heritage World inspires contemporary apparel design — from
              premium tees to embroidered jackets — each piece telling a story of innovation,
              resistance, artistry, and statecraft through thoughtful material expression.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/merchandise/chola"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-900 hover:bg-parchment-200 transition-colors"
              >
                Chola Maritime
              </Link>
              <Link
                href="/merchandise/maratha"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-900 hover:bg-parchment-200 transition-colors"
              >
                Maratha Warrior
              </Link>
              <Link
                href="/merchandise/rajputana"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-900 hover:bg-parchment-200 transition-colors"
              >
                Rajputana Valor
              </Link>
              <Link
                href="/merchandise/ahom"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-900 hover:bg-parchment-200 transition-colors"
              >
                Ahom Resistance
              </Link>
              <Link
                href="/merchandise/gupta"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-900 hover:bg-parchment-200 transition-colors"
              >
                Gupta Renaissance
              </Link>
              <Link
                href="/merchandise/mauryan"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-900 hover:bg-parchment-200 transition-colors"
              >
                Mauryan Foundation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}