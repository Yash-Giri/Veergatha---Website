'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, FileCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-parchment-300 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-500 hover:text-ink-950"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-xs font-mono uppercase tracking-wider text-ink-600">
            <Shield className="w-3.5 h-3.5" />
            <span>DPDP Act Alignment</span>
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-950 tracking-tight">
          PRIVACY POLICY & DATA USE NOTE
        </h1>
        <p className="font-editorial italic text-xl text-ink-700">
          Radical transparency regarding concept-validation telemetry.
        </p>
        <p className="text-xs font-mono text-ink-500">
          Last Updated: September 18, 2026 · Standard Version: v1.0_dpdp_sept2026
        </p>
      </div>

      <div className="space-y-10 text-sm text-ink-700 font-sans leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            1. The Purpose of This Platform
          </h2>
          <p>
            VEERGATHA is a digital-first heritage discovery and concept-validation platform. This website functions as an empirical experiment to determine which Indian heritage stories resonate with contemporary audiences and in what physical forms audiences would like to experience them.
          </p>
          <p>
            We do not sell commercial products, process credit cards, or operate an e-commerce shopping cart.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            2. Anonymous Behavioral Telemetry
          </h2>
          <p>
            To calculate our North Star metric—the <strong>Meaningful Heritage Engagement Rate (MHER)</strong>—we record anonymous behavioral interactions such as:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-ink-600">
            <li>Visiting a heritage world page (<code>story_view</code>)</li>
            <li>Opening a historical story dimension card (<code>story_explore</code>)</li>
            <li>Selecting resonance themes and curiosity archetypes (<code>theme_preference</code>, <code>archetype_select</code>)</li>
            <li>Selecting physical merchandise preferences (<code>expression_preference</code>)</li>
            <li>General device category (mobile / desktop) and referral UTM tags</li>
          </ul>
          <p>
            These events are assigned a random pseudonymous visitor UUID (e.g. <code>v_abc123</code>). They contain no personal identity information.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            3. Strict Segregation of Personal Contact Data
          </h2>
          <p>
            If you voluntarily submit your email address or WhatsApp number via our Early Access form:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-ink-600">
            <li>Contact details are stored separately from behavioral telemetry in isolated records.</li>
            <li>We capture explicit consent, a cryptographic timestamp, and the consent notice version before storage.</li>
            <li>We do not sell, rent, or distribute your email or WhatsApp number to third-party ad networks.</li>
            <li>You may request complete erasure of your contact details at any time.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            4. Cookie Consent & Telemetry Controls
          </h2>
          <p>
            You can accept or decline non-essential telemetry via our consent banner. Declining stops behavioral logging without impairing your ability to browse and explore the stories.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-ink-950">
            5. Contact & Grievance Officer
          </h2>
          <p>
            Under India’s Digital Personal Data Protection Act, inquiries regarding data usage or requests for deletion should be directed to: <span className="font-mono text-ink-900">integrity@veergatha.in</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
