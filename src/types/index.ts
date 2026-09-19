export type WorldId = 'rajputana' | 'maratha' | 'chola' | 'ahom' | 'gupta' | 'mauryan';

export type ExpressionCategory = 'wear' | 'display' | 'collect' | 'explore' | 'desk';

export type ArchetypeId = 'strategist' | 'warrior' | 'explorer' | 'builder' | 'polymath';

export interface HistoricalSource {
  title: string;
  authorOrBody: string;
  yearOrRef?: string;
  institution?: string;
  notes?: string;
}

export interface StoryDimension {
  id: string;
  title: string;
  subtitle: string;
  shortHook: string; // Layer 2: <= 60 words
  deepRead: string;  // Layer 3: rich historical narrative
  keyTakeaway: string;
  sources: HistoricalSource[];
}

export interface ConceptPreviewItem {
  id: string;
  worldId: WorldId;
  title: string;
  category: ExpressionCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  conceptualMedium: string;
  imageUrl: string;
  colorHex: string;
}

export interface HeritageWorld {
  id: WorldId;
  name: string;
  devanagariName: string;
  era: string;
  region: string;
  tagline: string;
  hook: string;
  description: string;
  accent: string;
  accentHex: string;
  accentBg: string;
  accentBorder: string;
  heroImage: string;
  editorialQuote: string;
  dimensions: StoryDimension[];
  themes: string[];
  sampleConcepts: ConceptPreviewItem[];
  sources: HistoricalSource[];
}

export interface Archetype {
  id: ArchetypeId;
  title: string;
  subtitle: string;
  keywords: string[];
  description: string;
  ctaText: string;
  pullsFrom: string;
  recommendedWorlds: WorldId[];
  accentColor: string;
  image: string;
}

// Analytics and Validation Engine Types
export type DeviceType = 'mobile' | 'desktop' | 'tablet';

export interface BaseEvent {
  visitor_id: string;
  session_id: string;
  timestamp: string; // ISO 8601
  device_type: DeviceType;
  is_internal: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}

export type EventName =
  | 'page_view'
  | 'archetype_select'
  | 'story_view'
  | 'story_explore'
  | 'story_depth'
  | 'heritage_preference'
  | 'theme_preference'
  | 'expression_preference'
  | 'early_access'
  | 'return_visit'
  | 'merchandise_view'
  | 'merchandise_index_return'
  | 'merchandise_world_explore';

export interface StoredAnalyticsEvent extends BaseEvent {
  id: string;
  event_name: EventName;
  properties: Record<string, any>;
}

export interface EarlyAccessSubmission {
  visitor_id: string;
  world_id?: string;
  email?: string;
  whatsapp?: string;
  preferred_story?: string;
  channel: 'email' | 'whatsapp' | 'both';
  consent: boolean;
  consent_timestamp: string;
  consent_text_version: string;
}

export interface MherResult {
  totalUniqueVisitors: number;
  qualifiedVisitors: number;
  rate: number; // percentage e.g. 13.9
  hasData: boolean;
}
