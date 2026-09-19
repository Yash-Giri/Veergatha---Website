'use client';

import React, { useState } from 'react';
import { Check, Shirt, Image as ImageIcon, Award, BookOpen, PenTool, Sparkles } from 'lucide-react';
import { WorldId, ExpressionCategory } from '@/types';
import { logEvent } from '@/lib/analytics';

interface ExpressionModuleProps {
  worldId: WorldId;
  onExpressionSelected?: (expression: ExpressionCategory) => void;
}

const EXPRESSIONS = [
  {
    id: 'wear' as ExpressionCategory,
    name: 'WEAR',
    label: 'Apparel',
    detail: 'Tailored silhouettes, organic cotton twills, fort-contour linings',
    icon: Shirt,
  },
  {
    id: 'display' as ExpressionCategory,
    name: 'DISPLAY',
    label: 'Art Prints & Wall Art',
    detail: 'Archival stone lithographs, epigraph rubbings, deckle-edge prints',
    icon: ImageIcon,
  },
  {
    id: 'collect' as ExpressionCategory,
    name: 'COLLECT',
    label: 'Memorabilia & Collectibles',
    detail: 'Lost-wax bronze casts, numismatic medallions, non-weapon tokens',
    icon: Award,
  },
  {
    id: 'explore' as ExpressionCategory,
    name: 'EXPLORE',
    label: 'Cards, Books & Timelines',
    detail: 'Boxed strategy folios, concertina timelines, bilingual translations',
    icon: BookOpen,
  },
  {
    id: 'desk' as ExpressionCategory,
    name: 'DESK',
    label: 'Desk Objects & Stationery',
    detail: 'Hand-carved granite paperweights, botanical paper journals, brass seals',
    icon: PenTool,
  },
];

const DETAILED_CATEGORIES = [
  { id: 'apparel', label: 'Apparel & Silhouettes' },
  { id: 'art_prints', label: 'Archival Art Prints' },
  { id: 'collectibles', label: 'Cast Collectibles' },
  { id: 'desk_memorabilia', label: 'Desk Sculptures' },
  { id: 'stationery', label: 'Fine Stationery & Journals' },
  { id: 'historical_cards', label: 'Informational Cards & Folios' },
];

export default function ExpressionModule({ worldId, onExpressionSelected }: ExpressionModuleProps) {
  const [selectedExpression, setSelectedExpression] = useState<ExpressionCategory | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectExpression = (expr: ExpressionCategory) => {
    setSelectedExpression(expr);
  };

  const toggleCategory = (catId: string) => {
    if (selectedCategories.includes(catId)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== catId));
    } else {
      setSelectedCategories([...selectedCategories, catId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExpression) return;

    // Fire expression_preference event (PRD §9.1)
    logEvent('expression_preference', {
      world_id: worldId,
      expression: selectedExpression,
      category: selectedCategories.length > 0 ? selectedCategories : [selectedExpression],
    });

    setSubmitted(true);
    if (onExpressionSelected) {
      onExpressionSelected(selectedExpression);
    }
  };

  return (
    <div className="bg-parchment-50 border border-parchment-300 rounded-sm p-8 sm:p-10 space-y-8 shadow-xs">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-ink-600 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Expression Layer</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-950">
          HOW WOULD YOU LIKE TO EXPERIENCE THIS STORY?
        </h3>
        <p className="font-editorial italic text-lg sm:text-xl text-ink-700">
          “If this story became something you could own, how would you want to experience it?”
        </p>
        <p className="text-xs text-ink-500 font-sans max-w-xl">
          We translate historical stories into physical forms. These are conceptual expressions to gauge your interest, not ready commercial products.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 5 Expression Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {EXPRESSIONS.map((expr) => {
            const isSelected = selectedExpression === expr.id;
            const Icon = expr.icon;
            return (
              <div
                key={expr.id}
                onClick={() => handleSelectExpression(expr.id)}
                className={`cursor-pointer p-5 rounded-sm border transition-all duration-200 flex flex-col justify-between select-none ${
                  isSelected
                    ? 'bg-parchment-100 border-ink-900 shadow-sm ring-1 ring-ink-900'
                    : 'bg-parchment-50 border-parchment-300 hover:border-ink-400 hover:bg-parchment-100/60'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-ink-950' : 'text-ink-600'}`} />
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-ink-900 bg-ink-900 text-parchment-100'
                          : 'border-ink-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-ink-950">
                      {expr.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-600 font-sans">
                      {expr.label}
                    </p>
                  </div>

                  <p className="text-[11px] text-ink-500 leading-relaxed font-sans">
                    {expr.detail}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-parchment-200 text-[10px] font-mono uppercase text-ink-400">
                  Concept Form
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Follow-up Multi-Select Categories */}
        {selectedExpression && (
          <div className="pt-4 border-t border-parchment-200 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-800">
                Specific items you’d prioritize in this story
              </label>
              <span className="text-[11px] text-ink-400 font-mono">Optional</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {DETAILED_CATEGORIES.map((cat) => {
                const isCatSelected = selectedCategories.includes(cat.id);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xs text-xs font-sans transition-all border ${
                      isCatSelected
                        ? 'bg-ink-800 text-parchment-100 border-ink-800'
                        : 'bg-parchment-100 text-ink-700 border-parchment-300 hover:border-ink-500'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Mandatory Conceptual Disclaimer */}
        <div className="p-3 bg-parchment-200/50 border border-parchment-300 rounded-sm text-center">
          <p className="text-[11px] font-mono text-ink-600 uppercase tracking-wider">
            CONCEPTUAL EXPLORATION — NOT CURRENTLY AVAILABLE FOR SALE.
          </p>
        </div>

        {/* Submit Row */}
        <div className="flex items-center justify-between gap-4 pt-2">
          {submitted ? (
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-2 rounded-sm border border-emerald-200 w-full justify-center">
              <Check className="w-4 h-4" />
              <span>Expression preference recorded. Thank you for validating this direction.</span>
            </div>
          ) : (
            <button
              type="submit"
              disabled={!selectedExpression}
              className={`w-full sm:w-auto px-8 py-3 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all ${
                selectedExpression
                  ? 'bg-ink-900 text-parchment-100 hover:bg-ink-800 shadow-sm cursor-pointer'
                  : 'bg-parchment-300 text-ink-400 cursor-not-allowed'
              }`}
            >
              Record Expression Preference
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
