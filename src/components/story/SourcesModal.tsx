'use client';

import React from 'react';
import { X, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { HistoricalSource } from '@/types';

interface SourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sources: HistoricalSource[];
}

export default function SourcesModal({
  isOpen,
  onClose,
  title,
  sources,
}: SourcesModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sources-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-parchment-50 border border-parchment-400 rounded-sm shadow-2xl p-6 sm:p-8 text-ink-900 font-sans max-h-[85vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ink-500 hover:text-ink-950 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-ink-900"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-500">
            <ShieldCheck className="w-4 h-4 text-ink-700" />
            <span>Academic Sourcing & Epigraphy</span>
          </div>

          <div>
            <h2 id="sources-modal-title" className="font-serif text-2xl font-bold text-ink-950">
              Historical Citations
            </h2>
            <p className="text-xs text-ink-600 mt-1">
              Dimension: <span className="font-semibold text-ink-800">{title}</span>
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {sources.map((src, i) => (
              <div
                key={i}
                className="p-4 bg-parchment-100 border border-parchment-300 rounded-sm space-y-1.5"
              >
                <p className="text-xs font-bold text-ink-950 uppercase tracking-wider font-sans">
                  {src.authorOrBody}
                </p>
                <p className="font-serif italic text-base text-ink-900">
                  {src.title}
                </p>
                {src.yearOrRef && (
                  <p className="text-xs font-mono text-ink-500">
                    Ref: {src.yearOrRef}
                  </p>
                )}
                {src.institution && (
                  <p className="text-xs text-ink-600 font-sans">
                    Archive / Repository: {src.institution}
                  </p>
                )}
                {src.notes && (
                  <p className="text-xs text-ink-600 italic pt-1 border-t border-parchment-200">
                    {src.notes}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-parchment-300 text-[11px] text-ink-500 flex items-center justify-between">
            <span>Standard: Non-sensationalist, verifiable scholarship.</span>
            <button
              onClick={onClose}
              className="text-xs font-semibold uppercase tracking-wider text-ink-900 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
