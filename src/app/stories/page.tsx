'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Compass, Filter, Sparkles, Check } from 'lucide-react';
import ArchetypeGrid from '@/components/home/ArchetypeGrid';
import WorldsGallery from '@/components/home/WorldsGallery';
import { HERITAGE_WORLDS, HERITAGE_WORLDS_LIST, COMING_SOON_WORLDS } from '@/data/heritageWorlds';
import { ARCHETYPES } from '@/data/archetypes';
import { logEvent } from '@/lib/analytics';
import { WorldId, ArchetypeId } from '@/types';

function StoriesIndexContent() {
  const searchParams = useSearchParams();
  const initialArchetype = searchParams.get('archetype') as ArchetypeId | null;

  const [selectedArchetype, setSelectedArchetype] = useState<string>(initialArchetype || 'all');
  const [votedWorld, setVotedWorld] = useState<string | null>(null);

  useEffect(() => {
    logEvent('page_view', { page: '/stories', filter: selectedArchetype });
  }, [selectedArchetype]);

  // Filter worlds based on selected archetype
  const filteredWorlds = useMemo(() => {
    if (selectedArchetype === 'all') return HERITAGE_WORLDS_LIST;
    const arch = ARCHETYPES.find((a) => a.id === selectedArchetype);
    if (!arch) return HERITAGE_WORLDS_LIST;
    return HERITAGE_WORLDS_LIST.filter((w) => arch.recommendedWorlds.includes(w.id));
  }, [selectedArchetype]);

  const handleVote = (worldId: string) => {
    setVotedWorld(worldId);
    logEvent('heritage_preference', {
      world_id: worldId,
      source: 'stories_index_quick_selector',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
      {/* Header Block */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-xs font-mono uppercase tracking-wider text-ink-600">
          <Compass className="w-3.5 h-3.5" />
          <span>The Living Archive</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink-950 tracking-tight">
          STORIES
        </h1>
        <p className="font-editorial italic text-2xl sm:text-3xl text-ink-700">
          What part of India’s story is yours?
        </p>
        <p className="text-sm text-ink-600 font-sans leading-relaxed">
          Six distinct civilizational realms open for discovery at launch. Each world contains verified historical dimensions, architectural marvels, and cultural philosophies ready to be explored.
        </p>
      </div>

      {/* Exploration Entry Points */}
      <div className="space-y-8">
        <ArchetypeGrid />
        <WorldsGallery />
      </div>

      {/* Archetype Filter Tabs */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-500 font-mono">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter by Curiosity Archetype:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedArchetype('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all select-none border ${
              selectedArchetype === 'all'
                ? 'bg-ink-900 text-parchment-100 border-ink-900 shadow-xs'
                : 'bg-parchment-100 text-ink-700 border-parchment-300 hover:border-ink-500'
            }`}
          >
            All Worlds (6)
          </button>
          {ARCHETYPES.map((arch) => (
            <button
              key={arch.id}
              onClick={() => setSelectedArchetype(arch.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all select-none border ${
                selectedArchetype === arch.id
                  ? 'bg-ink-900 text-parchment-100 border-ink-900 shadow-xs'
                  : 'bg-parchment-100 text-ink-700 border-parchment-300 hover:border-ink-500'
              }`}
            >
              {arch.title.replace('THE ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Heritage Worlds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorlds.map((world) => (
          <Link
            key={world.id}
            href={`/stories/${world.id}`}
            className="group bg-parchment-50 border border-parchment-300 rounded-sm overflow-hidden flex flex-col justify-between hover:border-ink-800 transition-all duration-300 shadow-xs hover:shadow-xl"
          >
            {/* Card Image */}
            <div className="relative h-64 bg-ink-950 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-65 group-hover:opacity-50"
                style={{ backgroundImage: `url(${world.heroImage})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-ink-900/80 text-parchment-200 border border-ink-700 rounded-xs">
                  {world.era}
                </span>
                <span className="text-xs font-serif italic text-parchment-300">
                  {world.devanagariName}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 text-parchment-100">
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-amber-300 font-medium">
                  {world.region}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-parchment-100 group-hover:text-amber-100 transition-colors">
                  {world.name.toUpperCase()}
                </h2>
              </div>
            </div>

            {/* Card Info */}
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <p className="font-editorial italic text-lg text-ink-800 line-clamp-2">
                  “{world.hook}”
                </p>
                <p className="text-xs text-ink-600 font-sans leading-relaxed line-clamp-3">
                  {world.description}
                </p>
              </div>

              <div className="pt-4 border-t border-parchment-200 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {world.themes.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 bg-parchment-200 text-ink-700 rounded-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink-900 group-hover:text-ink-950 pt-1">
                  <span>Enter This World</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Affinity Poll Section (§8.5) */}
      <section className="p-8 bg-parchment-200/60 border border-parchment-300 rounded-sm space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500">
            Quick Signal
          </span>
          <h3 className="font-serif text-xl font-bold text-ink-950">
            Which world speaks to you most?
          </h3>
          <p className="text-xs text-ink-600 font-sans">
            Tap a world to submit a direct heritage preference signal into our validation engine.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-1">
          {HERITAGE_WORLDS_LIST.map((w) => {
            const isVoted = votedWorld === w.id;
            return (
              <button
                key={w.id}
                onClick={() => handleVote(w.id)}
                className={`p-3 rounded-sm border text-xs font-sans transition-all flex items-center justify-between ${
                  isVoted
                    ? 'bg-ink-900 text-parchment-100 border-ink-900'
                    : 'bg-parchment-50 text-ink-800 border-parchment-300 hover:border-ink-500'
                }`}
              >
                <span className="font-serif font-semibold">{w.name}</span>
                {isVoted && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>

        {votedWorld && (
          <p className="text-xs text-emerald-800 font-medium animate-in fade-in">
            ✓ Preference for {HERITAGE_WORLDS[votedWorld]?.name} recorded in experiment database.
          </p>
        )}
      </section>

      {/* More Worlds In Research (§8.3) */}
      <section className="space-y-6 pt-6 border-t border-parchment-300">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500">
            Phase 2 Pipeline
          </span>
          <h3 className="font-serif text-2xl font-bold text-ink-950">
            More Worlds in Research
          </h3>
          <p className="text-xs text-ink-600 font-sans max-w-xl">
            India’s history spans dozens of distinct kingdoms, seafaring federations, and intellectual movements. These realms are currently in historical review and will open in future cohorts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMING_SOON_WORLDS.map((item) => (
            <div
              key={item.name}
              className="p-5 bg-parchment-50 border border-parchment-300/80 rounded-sm space-y-2 opacity-90"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-ink-900">
                  {item.name}
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-parchment-200 text-ink-600 rounded-xs">
                  In Research
                </span>
              </div>
              <p className="text-[11px] font-mono text-ink-500">
                {item.region}
              </p>
              <p className="text-xs text-ink-600 font-sans italic">
                “{item.hook}”
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function StoriesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen p-12 text-center font-serif">Loading stories archive...</div>}>
      <StoriesIndexContent />
    </Suspense>
  );
}
