'use client';

import React from 'react';
import { ConceptPreviewItem } from '@/types';
import { Sparkles } from 'lucide-react';

interface ConceptCardsProps {
  concepts: ConceptPreviewItem[];
  worldName: string;
}

export default function ConceptCards({ concepts, worldName }: ConceptCardsProps) {
  if (!concepts || concepts.length === 0) return null;

  return (
    <div className="space-y-6 pt-4">
      <div className="space-y-1">
        <span className="text-[11px] font-mono uppercase tracking-widest text-ink-500">
          Archetypal Form Studies
        </span>
        <h3 className="font-serif text-2xl font-bold text-ink-950">
          Conceptual Physical Explorations
        </h3>
        <p className="text-xs text-ink-600 font-sans max-w-xl">
          Visualizing how the stories and iconography of {worldName} could materialize into contemporary objects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.map((item) => (
          <div
            key={item.id}
            className="bg-parchment-50 border border-parchment-300 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-ink-800 transition-all duration-300 shadow-xs"
          >
            {/* Visual - Increased height for more prominence (60-70% of card) */}
            <div className="relative h-[220px] overflow-hidden">
              <img
                src={item.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  // Create a deliberate placeholder with heritage world styling
                  const placeholderDiv = document.createElement('div');
                  placeholderDiv.style.position = 'absolute';
                  placeholderDiv.style.inset = '0';
                  placeholderDiv.style.backgroundColor = 'var(--bg-parchment-50)';
                  placeholderDiv.style.display = 'flex';
                  placeholderDiv.style.alignItems = 'center';
                  placeholderDiv.style.justifyContent = 'center';
                  placeholderDiv.style.textAlign = 'center';
                  placeholderDiv.style.padding = '2rem';

                  const heading = document.createElement('h4');
                  heading.className = 'font-serif text-lg font-bold text-ink-950';
                  heading.textContent = 'VISUAL CONCEPT';

                  const subheading = document.createElement('p');
                  subheading.className = 'text-xs text-ink-600 font-sans mt-2';
                  subheading.textContent = 'Asset pending — deliberate placeholder';

                  placeholderDiv.appendChild(heading);
                  placeholderDiv.appendChild(subheading);

                  e.target.parentNode?.insertBefore(placeholderDiv, e.target.nextSibling);
                  e.target.style.display = 'none';
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent pointer-events-none" />

              {/* Mandatory PRD Disclaimer Badge */}
              <div className="absolute top-3 left-3 right-3 z-10">
                <p className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 bg-ink-950/90 text-amber-200 border border-ink-700 text-center rounded-xs backdrop-blur-xs">
                  CONCEPTUAL EXPLORATION — NOT CURRENTLY AVAILABLE FOR SALE.
                </p>
              </div>

              <div className="absolute bottom-3 left-4 right-4 z-10 text-parchment-100">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300">
                  {item.categoryLabel}
                </span>
                <h4 className="font-serif text-lg font-bold">
                  {item.title}
                </h4>
              </div>
            </div>

            {/* Details */}
            <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
              <p className="text-xs text-ink-600 font-sans leading-relaxed">
                {item.description}
              </p>

              <div className="pt-3 border-t border-parchment-200 space-y-1">
                <span className="text-[10px] font-mono uppercase text-ink-400 block">
                  Conceptual Specification:
                </span>
                <p className="text-xs font-mono text-ink-700">
                  {item.conceptualMedium}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}