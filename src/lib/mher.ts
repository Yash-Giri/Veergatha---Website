import { StoredAnalyticsEvent, MherResult } from '@/types';

export interface FunnelCounts {
  totalVisitors: number;
  viewedWorld: number;
  exploredDimension: number;
  expressedHeritage: number;
  expressedTheme: number;
  expressedExpression: number;
  joinedEarlyAccess: number;
}

export interface AnalyticsSummary {
  mher: MherResult;
  funnel: FunnelCounts;
  totalEvents: number;
  heritageDistribution: Record<string, number>;
  themeDistribution: Record<string, number>;
  expressionDistribution: Record<string, number>;
  sourceDistribution: Record<string, number>;
  returnVisitorsCount: number;
  archetypeClicks: Record<string, number>;
  rawEvents: StoredAnalyticsEvent[];
}

/**
 * Computes MHER strictly according to PRD §5.2
 */
export function computeAnalyticsSummary(
  events: StoredAnalyticsEvent[],
  filterInternal: boolean = true
): AnalyticsSummary {
  const activeEvents = filterInternal ? events.filter((e) => !e.is_internal) : events;

  // Group events by visitor_id
  const visitorEventsMap = new Map<string, StoredAnalyticsEvent[]>();
  activeEvents.forEach((evt) => {
    if (!visitorEventsMap.has(evt.visitor_id)) {
      visitorEventsMap.set(evt.visitor_id, []);
    }
    visitorEventsMap.get(evt.visitor_id)!.push(evt);
  });

  const totalUniqueVisitors = visitorEventsMap.size;
  let qualifiedVisitorsCount = 0;

  // Funnel tracking sets
  const viewedWorldVisitors = new Set<string>();
  const exploredDimensionVisitors = new Set<string>();
  const expressedHeritageVisitors = new Set<string>();
  const expressedThemeVisitors = new Set<string>();
  const expressedExpressionVisitors = new Set<string>();
  const earlyAccessVisitors = new Set<string>();
  const returnVisitors = new Set<string>();

  const heritageCounts: Record<string, number> = {};
  const themeCounts: Record<string, number> = {};
  const expressionCounts: Record<string, number> = {};
  const sourceCounts: Record<string, number> = {};
  const archetypeCounts: Record<string, number> = {};

  visitorEventsMap.forEach((vEvents, visitorId) => {
    // Sort chronological
    vEvents.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    let earliestExploreTimestamp: number | null = null;
    let hasViewedWorld = false;

    vEvents.forEach((evt) => {
      // Traffic source attribution
      const source = evt.utm_source || 'organic_direct';
      sourceCounts[source] = (sourceCounts[source] || 0) + 1;

      if (evt.event_name === 'return_visit') {
        returnVisitors.add(visitorId);
      }

      if (evt.event_name === 'archetype_select') {
        const arch = evt.properties.archetype || 'unknown';
        archetypeCounts[arch] = (archetypeCounts[arch] || 0) + 1;
      }

      if (evt.event_name === 'story_view') {
        hasViewedWorld = true;
        viewedWorldVisitors.add(visitorId);
      }

      if (evt.event_name === 'story_explore') {
        exploredDimensionVisitors.add(visitorId);
        const time = new Date(evt.timestamp).getTime();
        if (earliestExploreTimestamp === null || time < earliestExploreTimestamp) {
          earliestExploreTimestamp = time;
        }
      }

      if (evt.event_name === 'heritage_preference') {
        expressedHeritageVisitors.add(visitorId);
        const world = evt.properties.world_id;
        if (world) {
          heritageCounts[world] = (heritageCounts[world] || 0) + 1;
        }
      }

      if (evt.event_name === 'theme_preference') {
        expressedThemeVisitors.add(visitorId);
        const themes = evt.properties.theme || [];
        themes.forEach((t: string) => {
          themeCounts[t] = (themeCounts[t] || 0) + 1;
        });
      }

      if (evt.event_name === 'expression_preference') {
        expressedExpressionVisitors.add(visitorId);
        const expr = evt.properties.expression;
        if (expr) {
          expressionCounts[expr] = (expressionCounts[expr] || 0) + 1;
        }
      }

      if (evt.event_name === 'early_access') {
        earlyAccessVisitors.add(visitorId);
      }
    });

    // Evaluate MHER qualification:
    // 1. Must have explored (story_view + story_explore)
    // 2. Must subsequently submit a preference (heritage, theme, or expression)
    if (earliestExploreTimestamp !== null && hasViewedWorld) {
      const qualifyingPreference = vEvents.find((evt) => {
        const isPreferenceEvent =
          evt.event_name === 'heritage_preference' ||
          evt.event_name === 'theme_preference' ||
          evt.event_name === 'expression_preference';
        if (!isPreferenceEvent) return false;

        const eventTime = new Date(evt.timestamp).getTime();
        const diffMs = eventTime - earliestExploreTimestamp!;
        // Must follow exploration and occur within a 30-day window
        return diffMs >= 0 && diffMs <= 30 * 24 * 60 * 60 * 1000;
      });

      if (qualifyingPreference) {
        qualifiedVisitorsCount++;
      }
    }
  });

  const rate = totalUniqueVisitors > 0
    ? Number(((qualifiedVisitorsCount / totalUniqueVisitors) * 100).toFixed(1))
    : 0;

  return {
    mher: {
      totalUniqueVisitors,
      qualifiedVisitors: qualifiedVisitorsCount,
      rate,
      hasData: totalUniqueVisitors > 0,
    },
    funnel: {
      totalVisitors: totalUniqueVisitors,
      viewedWorld: viewedWorldVisitors.size,
      exploredDimension: exploredDimensionVisitors.size,
      expressedHeritage: expressedHeritageVisitors.size,
      expressedTheme: expressedThemeVisitors.size,
      expressedExpression: expressedExpressionVisitors.size,
      joinedEarlyAccess: earlyAccessVisitors.size,
    },
    totalEvents: activeEvents.length,
    heritageDistribution: heritageCounts,
    themeDistribution: themeCounts,
    expressionDistribution: expressionCounts,
    sourceDistribution: sourceCounts,
    returnVisitorsCount: returnVisitors.size,
    archetypeClicks: archetypeCounts,
    rawEvents: activeEvents.slice().reverse(), // latest first
  };
}

/**
 * Seeds a realistic cohort of synthetic test visitors strictly for test verification and demonstration.
 * PRD §5.6 & §15.5: Allows testing MHER calculation before real public launch.
 */
export function seedTestCohort(visitorCount: number = 60): StoredAnalyticsEvent[] {
  const worlds = ['chola', 'maratha', 'rajputana', 'ahom', 'gupta', 'mauryan'];
  const themes = ['Strategy', 'Warrior spirit', 'Exploration', 'Leadership', 'Statecraft', 'Innovation', 'Art & culture', 'Legacy'];
  const expressions = ['wear', 'display', 'collect', 'explore', 'desk'];
  const archetypes = ['strategist', 'warrior', 'explorer', 'builder', 'polymath'];
  const sources = ['instagram_ad', 'cultural_substack', 'reddit_history', 'organic_direct', 'twitter_thread'];

  const generatedEvents: StoredAnalyticsEvent[] = [];
  const now = Date.now();

  for (let i = 0; i < visitorCount; i++) {
    const visitorId = `sim_v_${1000 + i}`;
    const sessionId = `sim_s_${2000 + i}`;
    const deviceType = Math.random() < 0.65 ? 'mobile' : 'desktop';
    const source = sources[Math.floor(Math.random() * sources.length)];
    let t = now - Math.floor(Math.random() * 5 * 24 * 3600 * 1000);

    const baseEvent = {
      visitor_id: visitorId,
      session_id: sessionId,
      device_type: deviceType as any,
      is_internal: false,
      utm_source: source,
      utm_medium: source.includes('ad') ? 'cpc' : 'referral',
      utm_campaign: 'concept_validation_wave1',
    };

    // 1. Page view
    generatedEvents.push({
      id: `evt_sim_${generatedEvents.length}`,
      event_name: 'page_view',
      timestamp: new Date(t).toISOString(),
      properties: { page: '/' },
      ...baseEvent,
    });

    // 80% look at an archetype
    if (Math.random() < 0.8) {
      t += 5000;
      const arch = archetypes[Math.floor(Math.random() * archetypes.length)];
      generatedEvents.push({
        id: `evt_sim_${generatedEvents.length}`,
        event_name: 'archetype_select',
        timestamp: new Date(t).toISOString(),
        properties: { archetype: arch },
        ...baseEvent,
      });
    }

    // 65% view a story page
    const world = worlds[Math.floor(Math.random() * worlds.length)];
    if (Math.random() < 0.65) {
      t += 8000;
      generatedEvents.push({
        id: `evt_sim_${generatedEvents.length}`,
        event_name: 'story_view',
        timestamp: new Date(t).toISOString(),
        properties: { world_id: world },
        ...baseEvent,
      });

      // 45% explore a dimension card (Step 1)
      if (Math.random() < 0.70) {
        t += 12000;
        generatedEvents.push({
          id: `evt_sim_${generatedEvents.length}`,
          event_name: 'story_explore',
          timestamp: new Date(t).toISOString(),
          properties: { world_id: world, card_id: `${world}_dim_1` },
          ...baseEvent,
        });

        // 35% express resonance theme (Step 2 - Qualifies MHER)
        if (Math.random() < 0.60) {
          t += 9000;
          const selectedThemes = [themes[Math.floor(Math.random() * themes.length)]];
          generatedEvents.push({
            id: `evt_sim_${generatedEvents.length}`,
            event_name: 'theme_preference',
            timestamp: new Date(t).toISOString(),
            properties: { world_id: world, theme: selectedThemes },
            ...baseEvent,
          });

          // 25% select expression preference
          if (Math.random() < 0.70) {
            t += 11000;
            const expr = expressions[Math.floor(Math.random() * expressions.length)];
            generatedEvents.push({
              id: `evt_sim_${generatedEvents.length}`,
              event_name: 'expression_preference',
              timestamp: new Date(t).toISOString(),
              properties: { world_id: world, expression: expr, category: ['apparel', 'art_prints'] },
              ...baseEvent,
            });

            // 10% opt into early access
            if (Math.random() < 0.35) {
              t += 15000;
              generatedEvents.push({
                id: `evt_sim_${generatedEvents.length}`,
                event_name: 'early_access',
                timestamp: new Date(t).toISOString(),
                properties: { world_id: world, channel: 'email', consent: true },
                ...baseEvent,
              });
            }
          }
        }
      }
    }
  }

  // Save to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('veergatha_events_v1', JSON.stringify(generatedEvents));
    window.dispatchEvent(new CustomEvent('veergatha_event_logged', { detail: null }));
  }

  return generatedEvents;
}
