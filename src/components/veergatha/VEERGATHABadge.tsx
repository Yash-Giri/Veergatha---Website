'use client';

import React from 'react';

interface VEERGATHABadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'heritage';
  className?: string;
}

export default function VEERGATHABadge({
  children,
  variant = 'primary',
  className = '',
}: VEERGATHABadgeProps) {
  // Base styles
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-xs text-[9px] font-mono uppercase tracking-wider';

  // Variant styles
  const variantClasses = {
    primary: 'bg-ink-950/90 text-amber-200 border border-ink-700',
    secondary: 'bg-parchment-200/80 text-ink-600 border border-parchment-300',
    accent: 'bg-amber-50 border border-amber-200 text-amber-800',
    heritage: 'bg-ink-950/90 text-parchment-100 border border-ink-700',
  }[variant];

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
}