'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Sparkles,
  Layers,
  Shield,
  RefreshCw,
  Trash2,
  Play,
  CheckCircle2,
  Info,
  Compass,
} from 'lucide-react';
import {
  getStoredEvents,
  clearStoredEvents,
  isInternalTraffic,
  setInternalTraffic,
} from '@/lib/analytics';
import { computeAnalyticsSummary, seedTestCohort, AnalyticsSummary } from '@/lib/mher';
import { formatDate } from '@/lib/utils';
import { HERITAGE_WORLDS } from '@/data/heritageWorlds';

export default function ValidationDashboard() {
  const [filterInternal, setFilterInternal] = useState(true);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'funnel' | 'distributions' | 'raw_events'>('overview');
  const [isSimulating, setIsSimulating] = useState(false);

  const refreshData = () => {
    const events = getStoredEvents();
    const data = computeAnalyticsSummary(events, filterInternal);
    setSummary(data);
  };

  useEffect(() => {
    refreshData();

    // Listen to real-time custom event logging
    const handleEventLogged = () => refreshData();
    window.addEventListener('veergatha_event_logged', handleEventLogged);
    return () => window.removeEventListener('veergatha_event_logged', handleEventLogged);
  }, [filterInternal]);

  const handleToggleInternalFilter = () => {
    setFilterInternal(!filterInternal);
  };

  const handleSeedSimulation = () => {
    setIsSimulating(true);
    seedTestCohort(60);
    setTimeout(() => {
      refreshData();
      setIsSimulating(false);
    }, 400);
  };

  const handleClearData = () => {
    if (confirm('Clear all stored telemetry events? This will reset the dashboard to "No data yet" to verify the empty state.')) {
      clearStoredEvents();
      refreshData();
    }
  };

  if (!summary) return null;

  const hasData = summary.mher.hasData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-parchment-300">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Concept Validation Telemetry</span>
            </span>
            <span className="text-xs font-mono text-ink-500">
              PRD §5.1 & §9.3 Spec
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-950 tracking-tight">
            VALIDATION DASHBOARD
          </h1>
          <p className="font-editorial italic text-xl sm:text-2xl text-ink-700">
            Meaningful Heritage Engagement & Cohort Resonance
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleSeedSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-ink-900 text-parchment-100 hover:bg-ink-800 rounded-sm transition-all shadow-xs"
            title="Seed 60 realistic visitor sessions adhering to the event schema for verification"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isSimulating ? 'Simulating...' : 'Simulate Test Cohort (60)'}</span>
          </button>

          <button
            onClick={handleClearData}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-red-700 hover:text-red-900 border border-red-200 bg-red-50/60 rounded-sm hover:bg-red-50 transition-all"
            title="Purge all telemetry to test zero-data empty state"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Purge Data</span>
          </button>

          <button
            onClick={refreshData}
            className="p-2 text-ink-600 hover:text-ink-900 border border-parchment-300 rounded-sm bg-parchment-50 transition-colors"
            title="Refresh analytics view"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter and Integrity Notice */}
      <div className="p-4 bg-parchment-50 border border-parchment-300 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans">
        <div className="flex items-center gap-2 text-ink-700">
          <Info className="w-4 h-4 text-ink-500 shrink-0" />
          <span>
            Strict PRD Rule: All numbers shown are computed dynamically from append-only raw events. No pre-aggregated counters.
          </span>
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-ink-800 select-none">
          <input
            type="checkbox"
            checked={filterInternal}
            onChange={handleToggleInternalFilter}
            className="rounded border-parchment-400 text-ink-900 focus:ring-ink-900 h-4 w-4"
          />
          <span className="font-medium">Filter internal / developer traffic</span>
        </label>
      </div>

      {/* North Star KPI Card (§5.1 & §5.2) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Primary North Star (MHER) */}
        <div className="md:col-span-2 p-8 bg-ink-950 text-parchment-100 rounded-sm space-y-4 shadow-md relative overflow-hidden">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-semibold">
              North Star Metric (PRD §5.1)
            </span>
            <h2 className="font-serif text-2xl font-bold text-parchment-100">
              Meaningful Heritage Engagement Rate (MHER)
            </h2>
          </div>

          <div className="py-2">
            {hasData ? (
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-amber-300">
                  {summary.mher.rate}%
                </span>
                <span className="text-sm text-ink-400 font-mono">
                  ({summary.mher.qualifiedVisitors} of {summary.mher.totalUniqueVisitors} visitors)
                </span>
              </div>
            ) : (
              <div className="space-y-1">
                <span className="font-serif text-5xl font-bold text-ink-600">—</span>
                <p className="text-xs text-amber-200/80 font-mono">No data yet</p>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-ink-800 text-xs text-ink-300 font-sans leading-relaxed">
            <span className="font-semibold text-parchment-200">Rule: </span>
            A unique visitor qualifies when they explore a Heritage World (`story_view` + `story_explore`) and subsequently submit a heritage, theme, or expression preference within 30 days.
          </div>
        </div>

        {/* Supporting Stat 1: Unique Visitors */}
        <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-ink-500">
              Unique Visitors
            </span>
            <div className="font-serif text-4xl font-bold text-ink-950">
              {hasData ? summary.mher.totalUniqueVisitors : 'No data yet'}
            </div>
          </div>
          <p className="text-xs text-ink-600 font-sans">
            Total unique anonymous visitor IDs recorded across sessions.
          </p>
        </div>

        {/* Supporting Stat 2: Early Access Opt-in */}
        <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-ink-500">
              Early Access Opt-ins
            </span>
            <div className="font-serif text-4xl font-bold text-ink-950">
              {hasData ? summary.funnel.joinedEarlyAccess : 'No data yet'}
            </div>
          </div>
          <p className="text-xs text-ink-600 font-sans">
            Visitors who explicitly gave DPDP consent for product updates.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-parchment-300 gap-6 text-sm font-semibold uppercase tracking-wider font-mono">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'overview'
              ? 'text-ink-950'
              : 'text-ink-400 hover:text-ink-800'
          }`}
        >
          Funnel & Progression
          {activeTab === 'overview' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ink-950" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('distributions')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'distributions'
              ? 'text-ink-950'
              : 'text-ink-400 hover:text-ink-800'
          }`}
        >
          Story & Expression Breakdown
          {activeTab === 'distributions' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ink-950" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('raw_events')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'raw_events'
              ? 'text-ink-950'
              : 'text-ink-400 hover:text-ink-800'
          }`}
        >
          Raw Append-Only Event Log ({summary.rawEvents.length})
          {activeTab === 'raw_events' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ink-950" />
          )}
        </button>
      </div>

      {/* TAB 1: Funnel Progression */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="p-8 bg-parchment-50 border border-parchment-300 rounded-sm space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-ink-950">
                Visitor Engagement Funnel (PRD §5.6 & §9.3)
              </h3>
              <p className="text-xs text-ink-600 font-sans">
                Tracking drop-off along the primary journey: Land → Discover → Explore → Resonate → Express → Early Access.
              </p>
            </div>

            {hasData ? (
              <div className="space-y-4 pt-2">
                <FunnelStep
                  stepNumber={1}
                  label="Unique Visitors Landed"
                  count={summary.funnel.totalVisitors}
                  total={summary.funnel.totalVisitors}
                  eventTrigger="page_view"
                />
                <FunnelStep
                  stepNumber={2}
                  label="Viewed a Heritage World"
                  count={summary.funnel.viewedWorld}
                  total={summary.funnel.totalVisitors}
                  eventTrigger="story_view"
                />
                <FunnelStep
                  stepNumber={3}
                  label="Explored Story Dimension Card (Step 1 Requirement)"
                  count={summary.funnel.exploredDimension}
                  total={summary.funnel.totalVisitors}
                  eventTrigger="story_explore"
                  highlight
                />
                <FunnelStep
                  stepNumber={4}
                  label="Expressed Resonance Theme Preference"
                  count={summary.funnel.expressedTheme}
                  total={summary.funnel.totalVisitors}
                  eventTrigger="theme_preference"
                />
                <FunnelStep
                  stepNumber={5}
                  label="Expressed Physical Merchandise Preference"
                  count={summary.funnel.expressedExpression}
                  total={summary.funnel.totalVisitors}
                  eventTrigger="expression_preference"
                />
                <FunnelStep
                  stepNumber={6}
                  label="Opted into Early Access"
                  count={summary.funnel.joinedEarlyAccess}
                  total={summary.funnel.totalVisitors}
                  eventTrigger="early_access"
                />
              </div>
            ) : (
              <div className="py-12 text-center space-y-3 bg-parchment-100 rounded-sm border border-parchment-300/60">
                <p className="font-serif text-lg text-ink-700 italic">
                  No data yet.
                </p>
                <p className="text-xs text-ink-500 max-w-sm mx-auto">
                  Click &ldquo;Simulate Test Cohort (60)&rdquo; above to generate a realistic verification batch, or browse the site to generate real interactions.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: Story & Expression Breakdown */}
      {activeTab === 'distributions' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Heritage World Preference Distribution */}
          <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-950">
              Heritage World Preference (Q2: Which stories resonate?)
            </h3>
            {hasData && Object.keys(summary.heritageDistribution).length > 0 ? (
              <div className="space-y-3 pt-2">
                {Object.entries(summary.heritageDistribution).map(([world, count]) => {
                  const name = HERITAGE_WORLDS[world]?.name || world;
                  const total = Object.values(summary.heritageDistribution).reduce((a, b) => a + b, 0);
                  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                  return (
                    <div key={world} className="space-y-1">
                      <div className="flex justify-between text-xs font-sans">
                        <span className="font-semibold text-ink-900 uppercase">{name}</span>
                        <span className="font-mono text-ink-600">{count} ({pct}%)</span>
                      </div>
                      <div className="w-full bg-parchment-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-ink-900 h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-ink-500 py-6 text-center font-mono">No data yet</p>
            )}
          </div>

          {/* Expression / Form Distribution */}
          <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-950">
              Expression Distribution (Q4: How would people experience it?)
            </h3>
            {hasData && Object.keys(summary.expressionDistribution).length > 0 ? (
              <div className="space-y-3 pt-2">
                {['wear', 'display', 'collect', 'explore', 'desk'].map((expr) => {
                  const count = summary.expressionDistribution[expr] || 0;
                  const total = Object.values(summary.expressionDistribution).reduce((a, b) => a + b, 0);
                  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                  return (
                    <div key={expr} className="space-y-1">
                      <div className="flex justify-between text-xs font-sans">
                        <span className="font-semibold text-ink-900 uppercase">{expr}</span>
                        <span className="font-mono text-ink-600">{count} ({pct}%)</span>
                      </div>
                      <div className="w-full bg-parchment-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-700 h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-ink-500 py-6 text-center font-mono">No data yet</p>
            )}
          </div>

          {/* Theme Resonance Distribution */}
          <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-950">
              Theme Resonance (Q3: What aspects resonate?)
            </h3>
            {hasData && Object.keys(summary.themeDistribution).length > 0 ? (
              <div className="space-y-3 pt-2">
                {Object.entries(summary.themeDistribution).map(([theme, count]) => {
                  const total = Object.values(summary.themeDistribution).reduce((a, b) => a + b, 0);
                  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                  return (
                    <div key={theme} className="space-y-1">
                      <div className="flex justify-between text-xs font-sans">
                        <span className="font-medium text-ink-800">{theme}</span>
                        <span className="font-mono text-ink-600">{count}</span>
                      </div>
                      <div className="w-full bg-parchment-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-800 h-full rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-ink-500 py-6 text-center font-mono">No data yet</p>
            )}
          </div>

          {/* Traffic Source & UTM Attribution */}
          <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-950">
              Traffic Source Split (UTM Attribution)
            </h3>
            {hasData && Object.keys(summary.sourceDistribution).length > 0 ? (
              <div className="space-y-3 pt-2">
                {Object.entries(summary.sourceDistribution).map(([src, count]) => {
                  const total = Object.values(summary.sourceDistribution).reduce((a, b) => a + b, 0);
                  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                  return (
                    <div key={src} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-ink-800">{src}</span>
                        <span className="text-ink-600">{count} ({pct}%)</span>
                      </div>
                      <div className="w-full bg-parchment-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-ink-700 h-full rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-ink-500 py-6 text-center font-mono">No data yet</p>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: Raw Append-Only Event Log */}
      {activeTab === 'raw_events' && (
        <div className="p-6 bg-parchment-50 border border-parchment-300 rounded-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-ink-950">
                Append-Only Telemetry Stream
              </h3>
              <p className="text-xs text-ink-500 font-mono">
                Showing latest events first. Adheres strictly to §9.1 schema.
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 bg-parchment-200 rounded-xs text-ink-700">
              Total Logged: {summary.rawEvents.length}
            </span>
          </div>

          <div className="max-h-[500px] overflow-y-auto border border-parchment-300 rounded-sm divide-y divide-parchment-200 font-mono text-xs">
            {summary.rawEvents.length > 0 ? (
              summary.rawEvents.map((evt) => (
                <div key={evt.id} className="p-3 hover:bg-parchment-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded-xs bg-ink-900 text-parchment-100">
                        {evt.event_name}
                      </span>
                      <span className="text-[11px] text-ink-500">
                        {evt.visitor_id.substring(0, 14)}...
                      </span>
                      {evt.device_type && (
                        <span className="text-[10px] text-ink-400">
                          [{evt.device_type}]
                        </span>
                      )}
                    </div>
                    <p className="text-ink-700 text-[11px]">
                      {JSON.stringify(evt.properties)}
                    </p>
                  </div>
                  <span className="text-[10px] text-ink-400 shrink-0">
                    {formatDate(evt.timestamp)}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-ink-500">
                No events in stream.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function FunnelStep({
  stepNumber,
  label,
  count,
  total,
  eventTrigger,
  highlight = false,
}: {
  stepNumber: number;
  label: string;
  count: number;
  total: number;
  eventTrigger: string;
  highlight?: boolean;
}) {
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div className={`p-4 rounded-sm border transition-all ${
      highlight
        ? 'bg-amber-50/70 border-amber-300'
        : 'bg-parchment-100/70 border-parchment-200'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-full bg-ink-900 text-parchment-100 flex items-center justify-center text-xs font-mono font-bold">
            {stepNumber}
          </span>
          <span className="font-semibold text-xs sm:text-sm text-ink-900 font-sans">
            {label}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-[11px] text-ink-400 px-2 py-0.5 bg-parchment-200 rounded-xs">
            event: {eventTrigger}
          </span>
          <span className="font-bold text-ink-900">
            {count} ({percentage}%)
          </span>
        </div>
      </div>

      <div className="w-full bg-parchment-300/80 h-2.5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            highlight ? 'bg-amber-600' : 'bg-ink-900'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
