'use client';

import React, { useState } from 'react';
import { ChevronDown, ExternalLink, BookOpen, CheckCircle2 } from 'lucide-react';
import { StoryDimension, WorldId } from '@/types';
import { logEvent } from '@/lib/analytics';
import SourcesModal from './SourcesModal';

interface DimensionCardProps {
  dimension: StoryDimension;
  worldId: WorldId;
  index: number;
}

export default function DimensionCard({ dimension, worldId, index }: DimensionCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);

  const toggleExpand = () => {
    const nextState = !expanded;
    setExpanded(nextState);

    if (nextState) {
      // Step 1 event of MHER qualification!
      logEvent('story_explore', {
        world_id: worldId,
        card_id: dimension.id,
      });
      // Also log engagement depth
      logEvent('story_depth', {
        world_id: worldId,
        dimension_id: dimension.id,
      });
    }
  };

  return (
    <>
      <div className="bg-parchment-50 border border-parchment-300 rounded-sm overflow-hidden transition-all duration-300 shadow-xs hover:border-ink-700">
        {/* Card Header & Layer 2 Hook */}
        <div
          onClick={toggleExpand}
          className="p-6 cursor-pointer select-none flex flex-col sm:flex-row sm:items-start justify-between gap-4"
        >
          <div className="space-y-2 flex-grow">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-ink-400 font-semibold">
                0{index + 1}
              </span>
              <span className="text-xs uppercase tracking-wider text-ink-500 font-sans font-semibold">
                {dimension.subtitle}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-ink-950 hover:text-ink-800 transition-colors">
              {dimension.title}
            </h3>

            {/* Layer 2 Summary (Strictly <= 60 words) */}
            <p className="text-sm text-ink-700 font-sans leading-relaxed pt-1 max-w-3xl">
              {dimension.shortHook}
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-start shrink-0 pt-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-500 hidden sm:inline">
              {expanded ? 'Collapse' : 'Explore'}
            </span>
            <div
              className={`w-8 h-8 rounded-full border border-parchment-300 bg-parchment-100 flex items-center justify-center text-ink-700 transition-transform duration-300 ${
                expanded ? 'rotate-180 bg-ink-900 text-parchment-100 border-ink-900' : ''
              }`}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card Action Row (Discreet Sources Link) */}
        <div className="px-6 pb-4 pt-1 flex items-center justify-between border-t border-parchment-200/60 text-xs">
          <div className="flex items-center gap-2 text-ink-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            <span className="text-[11px] font-sans">Verified Historical Dimension</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSourcesOpen(true);
            }}
            className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-ink-600 hover:text-ink-950 hover:underline"
          >
            <span>Sources</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Layer 3 Deep Read Accordion Expansion */}
        {expanded && (
          <div className="px-6 pb-6 pt-2 bg-parchment-100/70 border-t border-parchment-300 space-y-4 animate-in fade-in duration-200">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500 font-semibold">
                Layer 3 · Historical Deep Dive
              </span>
              <p className="text-sm text-ink-800 leading-relaxed font-sans">
                {dimension.deepRead}
              </p>
            </div>

            {/* Key Takeaway */}
            <div className="p-3.5 bg-parchment-50 border border-parchment-300 rounded-sm flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-ink-700 shrink-0 mt-0.5" />
              <p className="text-xs text-ink-800 font-medium">
                <span className="font-semibold uppercase tracking-wider text-ink-900">Historical Significance: </span>
                {dimension.keyTakeaway}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Primary Sources Modal */}
      <SourcesModal
        isOpen={sourcesOpen}
        onClose={() => setSourcesOpen(false)}
        title={dimension.title}
        sources={dimension.sources}
      />
    </>
  );
}
