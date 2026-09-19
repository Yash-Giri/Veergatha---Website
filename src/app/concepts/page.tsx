'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Layers, ArrowRight, Check, Sparkles, AlertCircle } from 'lucide-react';
import { CONCEPT_LIST } from '@/data/concepts';
import { logEvent } from '@/lib/analytics';
import { ExpressionCategory } from '@/types';
import EarlyAccessModal from '@/components/common/EarlyAccessModal';

export default function ConceptsPage() {
  const [selectedExpr, setSelectedExpr] = useState<ExpressionCategory | 'all'>('all');
  const [preferredExpression, setPreferredExpression] = useState<string | null>(null);
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  useEffect(() => {
    logEvent('page_view', { page: '/concepts' });
  }, []);

  const handleRecordPreference = (catId: ExpressionCategory) => {
    setPreferredExpression(catId);
    logEvent('expression_preference', {
      world_id: 'cross_portfolio_concepts',
      expression: catId,
      category: [catId],
    });
  };

  const displayedExpressions =
    selectedExpr === 'all'
      ? CONCEPT_LIST
      : CONCEPT_LIST.filter((c) => c.id === selectedExpr);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-xs font-mono uppercase tracking-wider text-ink-600">
          <Layers className="w-3.5 h-3.5" />
          <span>The Five Expressions</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink-950 tracking-tight">
          CONCEPTUAL EXPRESSIONS
        </h1>
        <p className="font-editorial italic text-2xl sm:text-3xl text-ink-700">
          From Story to Object.
        </p>
        <p className="text-sm text-ink-600 font-sans leading-relaxed">
          We translate historical stories into physical forms. This is not an e-commerce catalogue: there are no shopping carts, prices, or inventory. Every artifact here represents an active design inquiry to determine what forms of heritage the contemporary world wishes to carry.
        </p>
      </div>

      {/* Mandatory PRD Notice Banner */}
      <div className="p-4 bg-parchment-200/60 border border-parchment-400 rounded-sm flex items-start gap-3 text-ink-800 text-xs font-sans">
        <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold uppercase tracking-wide text-ink-950 font-mono">Notice: </span>
          All items shown are conceptual explorations in design prototyping. None are currently produced, stocked, or offered for sale.
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-2">
        <button
          onClick={() => setSelectedExpr('all')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all select-none border ${
            selectedExpr === 'all'
              ? 'bg-ink-900 text-parchment-100 border-ink-900 shadow-xs'
              : 'bg-parchment-100 text-ink-700 border-parchment-300 hover:border-ink-500'
          }`}
        >
          All Expressions (5)
        </button>
        {CONCEPT_LIST.map((expr) => (
          <button
            key={expr.id}
            onClick={() => setSelectedExpr(expr.id)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all select-none border ${
              selectedExpr === expr.id
                ? 'bg-ink-900 text-parchment-100 border-ink-900 shadow-xs'
                : 'bg-parchment-100 text-ink-700 border-parchment-300 hover:border-ink-500'
            }`}
          >
            {expr.name}
          </button>
        ))}
      </div>

      {/* Visual Expression Galleries */}
      <div className="space-y-20">
        {displayedExpressions.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="p-8 sm:p-12 bg-parchment-50 border border-parchment-300 rounded-sm space-y-10"
          >
            {/* Expression Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-parchment-300">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-ink-500">
                  Category: {category.id.toUpperCase()}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-950">
                  {category.name}
                </h2>
                <p className="font-editorial italic text-xl text-ink-800">
                  {category.tagline}
                </p>
                <p className="text-xs sm:text-sm text-ink-600 font-sans leading-relaxed pt-1">
                  {category.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
                <button
                  type="button"
                  onClick={() => handleRecordPreference(category.id)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all flex items-center gap-2 border ${
                    preferredExpression === category.id
                      ? 'bg-ink-900 text-parchment-100 border-ink-900 shadow-xs'
                      : 'bg-parchment-100 text-ink-800 border-parchment-300 hover:border-ink-700'
                  }`}
                >
                  {preferredExpression === category.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Preference Logged</span>
                    </>
                  ) : (
                    <span>Vote for {category.name} →</span>
                  )}
                </button>
                <span className="text-[10px] font-mono text-ink-400">
                  Logs expression_preference event
                </span>
              </div>
            </div>

            {/* Visual Prototypes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.conceptualVisuals.map((vis, i) => (
                <div
                  key={i}
                  className="bg-parchment-100 border border-parchment-300 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-ink-800 transition-all duration-300"
                >
                  {/* Visual Preview */}
                  <div className="relative h-64 bg-ink-950 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-70"
                      style={{ backgroundImage: `url(${vis.imageUrl})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent pointer-events-none" />

                    {/* Mandatory Label */}
                    <div className="absolute top-3 left-3 right-3 z-10">
                      <p className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 bg-ink-950/90 text-amber-200 border border-ink-700 text-center rounded-xs backdrop-blur-xs">
                        CONCEPTUAL EXPLORATION — NOT CURRENTLY AVAILABLE FOR SALE.
                      </p>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 text-parchment-100">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300">
                        {vis.storyReference}
                      </span>
                      <h3 className="font-serif text-xl font-bold">
                        {vis.title}
                      </h3>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-ink-500">
                        <span>Form: {vis.form}</span>
                      </div>
                      <p className="text-xs text-ink-700 font-sans leading-relaxed">
                        {vis.details}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-parchment-200 text-xs font-mono text-ink-600">
                      <span className="text-[10px] text-ink-400 block uppercase">Materials:</span>
                      <span>{vis.materials}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Early Access CTA */}
      <section className="p-10 bg-ink-950 text-parchment-100 rounded-sm text-center space-y-5">
        <h3 className="font-serif text-3xl font-bold">
          Want to see these concepts manufactured?
        </h3>
        <p className="text-sm text-ink-300 font-sans max-w-xl mx-auto leading-relaxed">
          We’re validating which physical expressions deserve production. Join our private early-access circle to vote on material samples and prototypes.
        </p>
        <button
          onClick={() => setEarlyAccessOpen(true)}
          className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-950 hover:bg-parchment-200 rounded-sm transition-all shadow-sm"
        >
          Join the Early Access Circle →
        </button>
      </section>

      <EarlyAccessModal
        isOpen={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
      />
    </div>
  );
}
