'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import { ASSET_REGISTER } from '@/data/assetRegister';

export default function AssetRegisterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-500 hover:text-ink-950"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Governance & Legal Integrity</span>
          </span>
          <span className="text-xs font-mono text-ink-500">
            PRD §10.2 & §15.4
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-950 tracking-tight">
          TRANSPARENT ASSET & IP REGISTER
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-ink-700">
          Publicly available ≠ commercially usable.
        </p>
        <p className="text-sm text-ink-600 font-sans leading-relaxed">
          VEERGATHA does not use copyrighted artwork from Pinterest, Instagram, or unauthorized merchandise listings. Every font, editorial image, epigraphical text, and conceptual design on this platform has a recorded provenance, license, and approval standard.
        </p>
      </div>

      {/* Asset Table */}
      <div className="bg-parchment-50 border border-parchment-300 rounded-sm overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-xs divide-y divide-parchment-200">
            <thead className="bg-parchment-200/70 text-ink-900 font-mono uppercase tracking-wider">
              <tr>
                <th className="p-4">Asset / Work</th>
                <th className="p-4">Category</th>
                <th className="p-4">Source & Citation</th>
                <th className="p-4">License / Status</th>
                <th className="p-4">Usage Location</th>
                <th className="p-4">Reviewer Approval</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-parchment-200">
              {ASSET_REGISTER.map((row, idx) => (
                <tr key={idx} className="hover:bg-parchment-100 transition-colors">
                  <td className="p-4 font-semibold text-ink-950 font-serif text-sm">
                    {row.assetName}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded-xs bg-parchment-200 text-ink-700 font-mono text-[10px] uppercase">
                      {row.type}
                    </span>
                  </td>
                  <td className="p-4 text-ink-700">
                    <p>{row.source}</p>
                    <p className="text-[11px] text-ink-500 italic mt-0.5">{row.notes}</p>
                  </td>
                  <td className="p-4 font-mono text-ink-800">
                    <p>{row.license}</p>
                    <p className="text-[10px] text-emerald-800 font-semibold">{row.commercialStatus}</p>
                  </td>
                  <td className="p-4 text-ink-600 font-sans">
                    {row.usageLocation}
                  </td>
                  <td className="p-4 font-mono text-[11px] text-ink-600">
                    <p>{row.approvedBy}</p>
                    <p className="text-ink-400">{row.approvalDate}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sourcing Standard Note */}
      <div className="p-6 bg-parchment-100 border border-parchment-300 rounded-sm space-y-3">
        <h3 className="font-serif text-lg font-bold text-ink-950">
          Historical Sourcing Standard (PRD §10.3)
        </h3>
        <p className="text-xs text-ink-700 font-sans leading-relaxed">
          Every dimension card on VEERGATHA carries at least one credible reference from scholarly literature, university publications, or the Archaeological Survey of India. Contested claims are explicitly noted. We prioritize objective historical documentation over sensationalism.
        </p>
      </div>
    </div>
  );
}
