'use client';

import React, { useState } from 'react';
import { X, Check, Mail, Phone, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { storeEarlyAccess } from '@/lib/analytics';
import { WorldId } from '@/types';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultWorldId?: WorldId | string;
}

export default function EarlyAccessModal({
  isOpen,
  onClose,
  defaultWorldId,
}: EarlyAccessModalProps) {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedStory, setSelectedStory] = useState(defaultWorldId || 'chola');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !whatsapp) {
      setError('Please provide at least an email address or WhatsApp number.');
      return;
    }
    if (!consent) {
      setError('Please agree to receive updates to proceed.');
      return;
    }

    setError('');
    const channel = email && whatsapp ? 'both' : email ? 'email' : 'whatsapp';

    storeEarlyAccess({
      email: email.trim() || undefined,
      whatsapp: whatsapp.trim() || undefined,
      preferred_story: selectedStory,
      channel,
      consent: true,
      world_id: selectedStory,
    });

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#B07D33', '#C15332', '#D97706', '#2A634B'],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setWhatsapp('');
    setConsent(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="early-access-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-parchment-50 border border-parchment-300 rounded-sm shadow-2xl p-6 sm:p-8 text-ink-900 font-sans">
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-ink-500 hover:text-ink-950 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-ink-900"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink-950">
              You’re with us.
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed max-w-sm mx-auto">
              Thank you for contributing to the validation of VEERGATHA. We will reach out when the initial physical concepts and community prototypes take form.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest bg-ink-900 text-parchment-100 hover:bg-ink-800 rounded-sm transition-all"
              >
                Return to Exploring
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-widest font-mono text-ink-500">
                Building in the open
              </span>
              <h2 id="early-access-title" className="font-serif text-2xl sm:text-3xl font-bold text-ink-950 leading-tight">
                Want to see what VEERGATHA creates next?
              </h2>
              <p className="text-sm text-ink-600 font-sans">
                We’re building VEERGATHA. Help us decide what comes next.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full pl-9 pr-3 py-2.5 bg-parchment-100 border border-parchment-400 rounded-sm text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:border-transparent transition-all placeholder:text-ink-400"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700">
                    WhatsApp Number
                  </label>
                  <span className="text-[11px] text-ink-400 font-normal">Optional</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 bg-parchment-100 border border-parchment-400 rounded-sm text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:border-transparent transition-all placeholder:text-ink-400"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700">
                    Story you’d like to see first
                  </label>
                  <span className="text-[11px] text-ink-400 font-normal">Optional</span>
                </div>
                <select
                  value={selectedStory}
                  onChange={(e) => setSelectedStory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-parchment-100 border border-parchment-400 rounded-sm text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:border-transparent transition-all"
                >
                  <option value="chola">The Cholas (Maritime & Bronzes)</option>
                  <option value="maratha">The Marathas (Swarajya & Forts)</option>
                  <option value="rajputana">Rajputana (Valor & Miniature Art)</option>
                  <option value="ahom">The Ahoms (Saraighat & Buranjis)</option>
                  <option value="gupta">The Guptas (Sciences, Coinage & Poetry)</option>
                  <option value="mauryan">The Mauryas (Arthashastra & Edicts)</option>
                  <option value="other">Other unrepresented heritage region</option>
                </select>
              </div>

              {/* Explicit Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-ink-600 select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-parchment-400 text-ink-900 focus:ring-ink-900 h-4 w-4"
                    required
                  />
                  <span>
                    I agree to receive updates and concept design invitations from VEERGATHA. (Consent can be withdrawn at any time).
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-widest bg-ink-900 text-parchment-100 hover:bg-ink-800 transition-all rounded-sm shadow-sm"
                >
                  <span>Keep Me Updated</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
