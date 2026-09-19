'use client';

import React from 'react';

interface VEERGATHACardProps {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
  title?: string;
  categoryLabel?: string;
  description?: string;
}

export default function VEERGATHACard({
  children,
  className = '',
  imageUrl,
  title,
  categoryLabel,
  description,
}: VEERGATHACardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border border-parchment-300 bg-parchment-50 text-ink-900 transition-all duration-300 hover:border-ink-800 ${className}`}>
      {/* Image Container */}
      {imageUrl && (
        <div className="relative h-[220px] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent pointer-events-none" />

          {/* Mandatory Disclaimer */}
          <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-center px-2 py-1">
            <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 bg-ink-950/90 text-amber-200 border border-ink-700 text-center rounded-xs">
              Conceptual Exploration — Not Currently Available for Sale
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-5 space-y-4">
        {/* Title and Category */}
        {title || categoryLabel && (
          <div className="space-y-2">
            {categoryLabel && (
              <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300">
                {categoryLabel}
              </span>
            )}
            {title && (
              <h3 className="font-serif text-xl font-bold text-ink-950 tracking-wider">
                {title}
              </h3>
            )}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-ink-600 leading-relaxed">
            {description}
          </p>
        )}

        {/* Children Content */}
        {children}
      </div>
    </div>
  );
}