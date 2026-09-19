'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { logEvent } from '@/lib/analytics';
import EarlyAccessModal from '@/components/common/EarlyAccessModal';

export default function PollSection() {
  const [selectedWorld, setSelectedWorld] = useState<string>('chola');
  const [customStory, setCustomStory] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  const worlds = [
    { id: 'chola', label: 'Chola', sub: 'Maritime empire & bronzes' },
    { id: 'maratha', label: 'Maratha', sub: 'Swarajya, forts & navy' },
    { id: 'rajputana', label: 'Rajputana', sub: 'Citadels & courtly ateliers' },
    { id: 'ahom', label: 'Ahom', sub: 'Saraighat resistance & Buranjis' },
    { id: 'gupta', label: 'Gupta', sub: 'Science, coinage & poetry' },
    { id: 'mauryan', label: 'Mauryan', sub: 'Arthashastra & rock edicts' },
    { id: 'other', label: 'Other', sub: 'Suggest an unrepresented world' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalWorld = selectedWorld === 'other' ? customStory.trim() || 'custom_story' : selectedWorld;

    logEvent('heritage_preference', {
      world_id: finalWorld,
      source: 'homepage_validation_poll',
    });

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  return (
    <>
      <section className="py-24 bg-parchment-200/50 border-b border-parchment-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-300/80 border border-parchment-400 text-ink-700 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Concept Validation Poll</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950">
              HELP US BUILD VEERGATHA.
            </h2>
            <p className="font-editorial italic text-2xl sm:text-3xl text-ink-700">
              Which story should we develop next?
            </p>
            <p className="text-xs text-ink-600 font-sans max-w-lg mx-auto">
              Your voice determines the historical archives we unlock and the design prototypes we bring to physical realization first.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-parchment-50 border border-parchment-300 rounded-sm text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-ink-950">
                  Preference Recorded in Validation Engine
                </h3>
                <p className="text-sm text-ink-600 max-w-md mx-auto">
                  Thank you. Your selection has updated our live Meaningful Heritage Engagement data store.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setEarlyAccessOpen(true)}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-ink-900 text-parchment-100 hover:bg-ink-800 rounded-sm transition-all shadow-sm"
                >
                  Keep Me Updated on This Story →
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-ink-700 hover:text-ink-950 transition-colors"
                >
                  Change Selection
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Radio Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {worlds.map((w) => {
                  const isSelected = selectedWorld === w.id;
                  return (
                    <label
                      key={w.id}
                      onClick={() => setSelectedWorld(w.id)}
                      className={`cursor-pointer p-4 rounded-sm border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-parchment-50 border-ink-900 shadow-sm ring-1 ring-ink-900'
                          : 'bg-parchment-100/80 border-parchment-300 hover:border-ink-400 hover:bg-parchment-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif text-base font-bold text-ink-950">
                          {w.label}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-ink-900 bg-ink-900 text-parchment-100'
                              : 'border-ink-300 bg-parchment-50'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <span className="text-xs text-ink-500 font-sans">
                        {w.sub}
                      </span>
                    </label>
                  );
                })}
              </div>

              {selectedWorld === 'other' && (
                <div className="animate-in fade-in duration-200">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                    What historical kingdom or regional tradition would you like to see?
                  </label>
                  <input
                    type="text"
                    value={customStory}
                    onChange={(e) => setCustomStory(e.target.value)}
                    placeholder="e.g. Vijayanagara, Pallavas, Kalinga, Sikh Miri-Piri, etc."
                    className="w-full px-4 py-3 bg-parchment-50 border border-parchment-400 rounded-sm text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-900 placeholder:text-ink-400"
                    required
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest bg-ink-900 text-parchment-100 hover:bg-ink-800 transition-all rounded-sm shadow-sm active:scale-[0.99]"
                >
                  <span>Select Your Story →</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEarlyAccessOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-ink-800 hover:text-ink-950 border border-parchment-400 hover:border-ink-900 bg-parchment-50 rounded-sm transition-all"
                >
                  <span>Keep Me Updated</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <EarlyAccessModal
        isOpen={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
        defaultWorldId={selectedWorld !== 'other' ? selectedWorld : undefined}
      />
    </>
  );
}
