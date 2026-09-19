'use client';

import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { WorldId } from '@/types';
import { logEvent } from '@/lib/analytics';

interface ResonanceModuleProps {
  worldId: WorldId;
  onThemesSelected?: (themes: string[]) => void;
}

const ALL_THEMES = [
  'Strategy',
  'Warrior spirit',
  'Exploration',
  'Leadership',
  'Statecraft',
  'Innovation',
  'Art & culture',
  'Legacy',
];

export default function ResonanceModule({ worldId, onThemesSelected }: ResonanceModuleProps) {
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleTheme = (theme: string) => {
    let next: string[];
    if (selectedThemes.includes(theme)) {
      next = selectedThemes.filter((t) => t !== theme);
    } else {
      next = [...selectedThemes, theme];
    }
    setSelectedThemes(next);
  };

  const handleConfirm = () => {
    if (selectedThemes.length === 0) return;

    // Fire theme_preference event (Step 2 qualification for MHER!)
    logEvent('theme_preference', {
      world_id: worldId,
      theme: selectedThemes,
    });

    setSubmitted(true);
    if (onThemesSelected) {
      onThemesSelected(selectedThemes);
    }
  };

  return (
    <div className="bg-parchment-50 border border-parchment-300 rounded-sm p-8 sm:p-10 space-y-6 shadow-xs">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-ink-600 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Resonance Layer</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
          WHAT PART OF THIS STORY SPEAKS TO YOU?
        </h3>
        <p className="text-sm text-ink-600 font-sans max-w-xl">
          Select the core qualities that resonated with your imagination. This helps us understand the true emotional pull behind history.
        </p>
      </div>

      {/* Selectable Chips */}
      <div className="flex flex-wrap gap-2.5 pt-2">
        {ALL_THEMES.map((theme) => {
          const isSelected = selectedThemes.includes(theme);
          return (
            <button
              key={theme}
              type="button"
              onClick={() => toggleTheme(theme)}
              className={`px-4 py-2.5 rounded-full text-xs font-sans font-medium transition-all duration-200 flex items-center gap-2 border select-none ${
                isSelected
                  ? 'bg-ink-900 text-parchment-100 border-ink-900 shadow-xs'
                  : 'bg-parchment-100 text-ink-800 border-parchment-300 hover:border-ink-600 hover:bg-parchment-200/50'
              }`}
            >
              <span>{theme}</span>
              {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
            </button>
          );
        })}
      </div>

      {/* Submission feedback */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-parchment-200">
        <div className="text-xs text-ink-500 font-sans">
          {selectedThemes.length === 0
            ? 'Select one or more themes above.'
            : `${selectedThemes.length} theme${selectedThemes.length > 1 ? 's' : ''} selected`}
        </div>

        {submitted ? (
          <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-sm border border-emerald-200">
            <Check className="w-4 h-4" />
            <span>Resonance preference logged in validation store</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleConfirm}
            disabled={selectedThemes.length === 0}
            className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all ${
              selectedThemes.length > 0
                ? 'bg-ink-900 text-parchment-100 hover:bg-ink-800 shadow-xs'
                : 'bg-parchment-300 text-ink-400 cursor-not-allowed'
            }`}
          >
            Confirm Resonance Selection
          </button>
        )}
      </div>
    </div>
  );
}
