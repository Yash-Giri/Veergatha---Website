'use client';

import React from 'react';

interface VEERGATHAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asChild?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function VEERGATHAButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  asChild = false,
  href,
  onClick,
}: VEERGATHAButtonProps) {
  // Base styles
  const baseClasses = 'inline-flex items-center justify-center rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  // Variant styles
  const variantClasses = {
    primary: 'bg-ink-900 text-parchment-100 hover:bg-ink-800',
    secondary: 'bg-parchment-200 text-ink-900 hover:bg-parchment-300',
    outline: 'border border-parchment-300 text-ink-900 hover:bg-parchment-100',
  }[variant];

  // Size styles
  const sizeClasses = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-5 py-2.5',
  }[size];

  // Link vs button rendering
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}