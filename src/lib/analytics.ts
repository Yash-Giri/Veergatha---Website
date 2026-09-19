import { BaseEvent, DeviceType, EventName, StoredAnalyticsEvent, EarlyAccessSubmission } from '@/types';

const STORAGE_EVENTS_KEY = 'veergatha_events_v1';
const STORAGE_VISITOR_KEY = 'veergatha_visitor_id';
const STORAGE_SESSION_KEY = 'veergatha_session_id';
const STORAGE_LAST_VISIT_KEY = 'veergatha_last_visit_timestamp';
const STORAGE_INTERNAL_KEY = 'veergatha_is_internal';
const STORAGE_EARLY_ACCESS_KEY = 'veergatha_early_access_vault';
const STORAGE_CONSENT_KEY = 'veergatha_cookie_consent';

export function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') return 'server_render';
  let visitorId = localStorage.getItem(STORAGE_VISITOR_KEY);
  if (!visitorId) {
    visitorId = 'v_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    localStorage.setItem(STORAGE_VISITOR_KEY, visitorId);
  }
  return visitorId;
}

export function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'server_session';
  let sessionId = sessionStorage.getItem(STORAGE_SESSION_KEY);
  if (!sessionId) {
    sessionId = 's_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    sessionStorage.setItem(STORAGE_SESSION_KEY, sessionId);

    // Check for return visit
    const lastVisit = localStorage.getItem(STORAGE_LAST_VISIT_KEY);
    const now = Date.now();
    if (lastVisit) {
      const daysSince = Math.floor((now - parseInt(lastVisit, 10)) / (1000 * 60 * 60 * 24));
      if (daysSince > 0) {
        logEvent('return_visit', { days_since_last: daysSince });
      }
    }
    localStorage.setItem(STORAGE_LAST_VISIT_KEY, now.toString());
  }
  return sessionId;
}

export function detectDeviceType(): DeviceType {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

export function isInternalTraffic(): boolean {
  if (typeof window === 'undefined') return false;
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('internal') === 'true') {
    localStorage.setItem(STORAGE_INTERNAL_KEY, 'true');
    return true;
  }
  if (urlParams.get('internal') === 'false') {
    localStorage.removeItem(STORAGE_INTERNAL_KEY);
    return false;
  }
  return localStorage.getItem(STORAGE_INTERNAL_KEY) === 'true';
}

export function setInternalTraffic(isInternal: boolean): void {
  if (typeof window === 'undefined') return;
  if (isInternal) {
    localStorage.setItem(STORAGE_INTERNAL_KEY, 'true');
  } else {
    localStorage.removeItem(STORAGE_INTERNAL_KEY);
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('veergatha_settings_updated'));
  }
}

export function getUtmParameters(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
    const val = params.get(key);
    if (val) utm[key] = val;
  });
  return utm;
}

export function getConsentStatus(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_CONSENT_KEY) === 'accepted';
}

export function setConsentStatus(accepted: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_CONSENT_KEY, accepted ? 'accepted' : 'declined');
  window.dispatchEvent(new CustomEvent('veergatha_consent_changed', { detail: { accepted } }));
}

/**
 * Append-only Event Logger adhering to PRD §9.1 Schema
 */
export function logEvent(eventName: EventName, properties: Record<string, any> = {}): StoredAnalyticsEvent | null {
  if (typeof window === 'undefined') return null;

  const visitor_id = getOrCreateVisitorId();
  const session_id = getOrCreateSessionId();
  const device_type = detectDeviceType();
  const is_internal = isInternalTraffic();
  const utm = getUtmParameters();

  const event: StoredAnalyticsEvent = {
    id: 'evt_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now(),
    event_name: eventName,
    visitor_id,
    session_id,
    timestamp: new Date().toISOString(),
    device_type,
    is_internal,
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_content: utm.utm_content,
    properties,
  };

  try {
    const raw = localStorage.getItem(STORAGE_EVENTS_KEY);
    const events: StoredAnalyticsEvent[] = raw ? JSON.parse(raw) : [];
    events.push(event);
    localStorage.setItem(STORAGE_EVENTS_KEY, JSON.stringify(events));

    // Dispatch realtime event for dashboard
    window.dispatchEvent(new CustomEvent('veergatha_event_logged', { detail: event }));
  } catch (err) {
    console.error('Failed to persist analytics event:', err);
  }

  return event;
}

/**
 * Early Access Store - Kept separate from behavioral logs for privacy (PRD §9.2)
 */
export function storeEarlyAccess(submission: Omit<EarlyAccessSubmission, 'visitor_id' | 'consent_timestamp' | 'consent_text_version'>): void {
  if (typeof window === 'undefined') return;

  const fullRecord: EarlyAccessSubmission = {
    ...submission,
    visitor_id: getOrCreateVisitorId(),
    consent_timestamp: new Date().toISOString(),
    consent_text_version: 'v1.0_dpdp_sept2026',
  };

  try {
    const raw = localStorage.getItem(STORAGE_EARLY_ACCESS_KEY);
    const list: EarlyAccessSubmission[] = raw ? JSON.parse(raw) : [];
    list.push(fullRecord);
    localStorage.setItem(STORAGE_EARLY_ACCESS_KEY, JSON.stringify(list));

    // Also fire the behavioural event
    logEvent('early_access', {
      world_id: submission.world_id,
      channel: submission.channel,
      consent: submission.consent,
    });
  } catch (err) {
    console.error('Failed to store early access submission:', err);
  }
}

export function getStoredEvents(): StoredAnalyticsEvent[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_EVENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearStoredEvents(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_EVENTS_KEY);
  localStorage.removeItem(STORAGE_EARLY_ACCESS_KEY);
  window.dispatchEvent(new CustomEvent('veergatha_event_logged', { detail: null }));
}
