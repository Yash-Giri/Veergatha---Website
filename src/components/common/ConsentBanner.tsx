'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Check, X } from 'lucide-react';
import { getConsentStatus, setConsentStatus } from '@/lib/analytics';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been recorded
    const isConsentRecorded = typeof window !== 'undefined' && localStorage.getItem('veergatha_cookie_consent') !== null;
    if (!isConsentRecorded) {
      // Small delay for smooth entry
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    setConsentStatus(true);
    setVisible(false);
  };

  const handleDecline = () => {
    setConsentStatus(false);
    setVisible(false);
  };

  return (
    <aside
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-parchment-50 border border-parchment-400 p-5 rounded-sm shadow-[0_10px_30px_rgba(28,25,23,0.12)] text-ink-900 font-sans">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-parchment-200 rounded-sm text-ink-800 shrink-0 mt-0.5">
            <Shield className="w-4 h-4" />
          </div>
          <div className="space-y-2 text-xs leading-relaxed">
            <p className="font-serif text-sm font-semibold text-ink-950">
              Honest Data & Consent
            </p>
            <p className="text-ink-600">
              VEERGATHA collects anonymous behavioral telemetry (such as story explorations and theme preferences) strictly to validate which Indian historical narratives resonate with people. We do not sell data or track across third-party websites.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px]">
              <Link href="/privacy" className="text-ink-800 underline hover:text-ink-950">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/asset-register" className="text-ink-800 underline hover:text-ink-950">
                IP Register
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-parchment-300 flex items-center justify-end gap-2.5">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 text-xs text-ink-600 hover:text-ink-900 transition-colors rounded-sm"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 text-xs font-medium bg-ink-900 text-parchment-100 hover:bg-ink-800 transition-all rounded-sm flex items-center gap-1.5 shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept Telemetry</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
