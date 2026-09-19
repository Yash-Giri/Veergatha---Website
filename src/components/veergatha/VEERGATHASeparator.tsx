'use client';

import React from 'react';

interface VEERGATHASeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function VEERGATHASeparator({
  className = '',
  orientation = 'horizontal',
}: VEERGATHASeparatorProps) {
  const baseClasses = 'bg-parchment-300';
  const orientationClasses = orientation === 'horizontal'
    ? 'h-0.5 w-full'
    : 'w-0.5 h-full';

  return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />
  );
}