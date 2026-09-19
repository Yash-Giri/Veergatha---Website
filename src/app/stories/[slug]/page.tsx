'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Compass, Shield, Sparkles, BookOpen, Share2, Check, ShoppingBag } from 'lucide-react';
import { HERITAGE_WORLDS, HERITAGE_WORLDS_LIST } from '@/data/heritageWorlds';
import DimensionCard from '@/components/story/DimensionCard';
import ResonanceModule from '@/components/story/ResonanceModule';
import ExpressionModule from '@/components/story/ExpressionModule';
import ConceptCards from '@/components/story/ConceptCards';
import EarlyAccessModal from '@/components/common/EarlyAccessModal';
import { logEvent } from '@/lib/analytics';
import { WorldId } from '@/types';

// Helper function to generate wear concepts for story pages
function generateStoryWearConcepts(world: any) {
  const baseConcepts = [
    // Premium T-shirt
    {
      id: `${world.id}_tshirt_premium`,
      title: `${world.name} Heritage Premium Tee`,
      category: 'wear' as const,
      categoryLabel: 'Premium T-shirt',
      tagline: 'Organic cotton · Minimal heritage motif',
      description: 'A premium organic cotton t-shirt featuring a subtle, contemporary interpretation of [KEY_ELEMENT] from the [WORLD_NAME] heritage, designed for everyday wear with meaningful cultural resonance.',
      conceptualMedium: '100% GOTS-certified organic cotton, water-based eco-inks',
    },
    // Oversized T-shirt
    {
      id: `${world.id}_tshirt_oversized`,
      title: `${world.name} Narrative Overshirt`,
      category: 'wear' as const,
      categoryLabel: 'Oversized T-shirt',
      tagline: 'Drape-fit · Storytelling graphic',
      description: 'An oversized, drape-fit t-shirt showcasing an artistic interpretation of [HISTORICAL_EVENT] from [WORLD_NAME] heritage, blending historical narrative with contemporary streetwear aesthetics.',
      conceptualMedium: 'Heavyweight organic cotton jersey, silicone-based print',
    },
    // Minimal embroidered apparel
    {
      id: `${world.id}_embroidered`,
      title: `${world.name} Heritage Embroidery`,
      category: 'wear' as const,
      categoryLabel: 'Embroidered Apparel',
      tagline: 'Tonal stitching · Heirloom quality',
      description: 'A minimalist embroidered detail on premium apparel, featuring [SYMBOLIC_ELEMENT] rendered in tonal thread work that references [CULTURAL_ASPECT] of the [WORLD_NAME] legacy.',
      conceptualMedium: 'Tone-on-tone silk embroidery on organic cotton-linen blend',
    }
  ];

  // Customize concepts based on world-specific themes and dimensions
  return baseConcepts.map(concept => {
    // World-specific customizations
    let customizedDescription = concept.description;
    let customizedTitle = concept.title;
    let customizedTagline = concept.tagline;
    const customizedMedium = concept.conceptualMedium;
    let imageUrl = '';

    // Replace placeholders with world-specific content
    switch (world.id) {
      case 'chola':
        customizedDescription = customizedDescription
          .replace('[KEY_ELEMENT]', 'Chola maritime navigation stars and wave motifs')
          .replace('[WORLD_NAME]', 'Chola')
          .replace('[HISTORICAL_EVENT]', 'the Chola armada\'s voyage across the Bay of Bengal')
          .replace('[SYMBOLIC_ELEMENT]', 'the Chola tiger emblem')
          .replace('[CULTURAL_ASPECT]', 'maritime trade statecraft')
          .replace('[ARCHITECTURAL_ELEMENT]', 'the interlocking granite geometry of Brihadisvara Temple')
          .replace('[FUNCTIONAL_ELEMENT]', 'maritime traders\' pocket layouts and securing systems')
          .replace('[SYMBOLIC_MOTIF]', 'the Chola fishing boat prow design')
          .replace('[NARRATIVE_SCENE]', 'monsoon trade routes across the Indian Ocean');
        customizedTitle = 'Chola Maritime Premium Tee';
        customizedTagline = 'Organic cotton · Navigation star motif';

        // Set image URL based on concept type
        if (concept.id.includes('tshirt_premium')) {
          imageUrl = '/images/heritage/chola/merchandise-premium-tshirt.svg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/chola/merchandise-oversized-tshirt.svg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/chola/merchandise-embroidered-apparel.svg';
        }
        break;

      case 'maratha':
        customizedDescription = customizedDescription
          .replace('[KEY_ELEMENT]', 'Maratha fort contour lines and battle flags')
          .replace('[WORLD_NAME]', 'Maratha')
          .replace('[HISTORICAL_EVENT]', 'Shivaji\'s guerrilla tactics in the Sahyadri mountains')
          .replace('[SYMBOLIC_ELEMENT]', 'the Bhagwa (saffron) flag motif')
          .replace('[CULTURAL_ASPECT]', 'the Swarajya philosophy of self-rule')
          .replace('[ARCHITECTURAL_ELEMENT]', 'the basalt architecture of hillforts like Raigad')
          .replace('[FUNCTIONAL_ELEMENT]', 'Maratha cavalry\'s quick-access cartridge systems')
          .replace('[SYMBOLIC_MOTIF]', 'the Maratha sword hilt design')
          .replace('[NARRATIVE_SCENE]', 'the network of hillforts communication system');
        customizedTitle = 'Maratha Warrior Premium Tee';
        customizedTagline = 'Organic cotton · Fort contour line art';

        // Set image URL based on concept type
        if (concept.id.includes('tshirt_premium')) {
          imageUrl = '/images/heritage/maratha/merchandise-premium-tshirt.svg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/maratha/merchandise-oversized-tshirt.svg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/maratha/merchandise-embroidered-apparel.svg';
        }
        break;

      case 'rajputana':
        customizedDescription = customizedDescription
          .replace('[KEY_ELEMENT]', 'Rajputana jharokha (balcony) patterns and shield motifs')
          .replace('[WORLD_NAME]', 'Rajputana')
          .replace('[HISTORICAL_EVENT]', 'Maharana Pratap\'s stand at Haldighati')
          .replace('[SYMBOLIC_ELEMENT]', 'the Rajputana shield and spear emblem')
          .replace('[CULTURAL_ASPECT]', 'the warrior tradition of Mewar')
          .replace('[ARCHITECTURAL_ELEMENT]', 'the sandstone jaali (lattice) work of Rajput forts')
          .replace('[FUNCTIONAL_ELEMENT]', 'Rajput warriors\' weapon storage and access systems')
          .replace('[SYMBOLIC_MOTIF]', 'the Rajputana kamarbandh (waistband) pattern')
          .replace('[NARRATIVE_SCENE]', 'the Aravalli hill landscape and fort silhouettes');
        customizedTitle = 'Rajputana Valor Premium Tee';
        customizedTagline = 'Organic cotton · Jharokha window pattern';

        // Set image URL based on concept type
        if (concept.id.includes('tshirt_premium')) {
          imageUrl = '/images/heritage/rajputana/merchandise-premium-tshirt.svg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/rajputana/merchandise-oversized-tshirt.svg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/rajputana/merchandise-embroidered-apparel.svg';
        }
        break;

      case 'ahom':
        customizedDescription = customizedDescription
          .replace('[KEY_ELEMENT]', 'Ahom dragon (mung-khaang) motifs and river wave patterns')
          .replace('[WORLD_NAME]', 'Ahom')
          .replace('[HISTORICAL_EVENT]', 'Lachit Borphukan\'s naval victory at Saraighat')
          .replace('[SYMBOLIC_ELEMENT]', 'the Ahom dragon-river emblem')
          .replace('[CULTURAL_ASPECT]', 'the Ahom kingdom\'s resistance and statecraft')
          .replace('[ARCHITECTURAL_ELEMENT]', 'the Ahom-era brick construction and earthen fortification techniques')
          .replace('[FUNCTIONAL_ELEMENT]', 'Ahom naval officers\' tide chart and navigation systems')
          .replace('[SYMBOLIC_MOTIF]', 'the Ahom royal seal lotus motif')
          .replace('[NARRATIVE_SCENE]', 'the Brahmaputra river during the Battle of Saraighat');
        customizedTitle = 'Ahom Resistance Premium Tee';
        customizedTagline = 'Organic cotton · Dragon-river wave motif';

        // Set image URL based on concept type
        if (concept.id.includes('tshirt_premium')) {
          imageUrl = '/images/heritage/ahom/merchandise-premium-tshirt.svg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/ahom/merchandise-oversized-tshirt.svg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/ahom/merchandise-embroidered-apparel.svg';
        }
        break;

      case 'gupta':
        customizedDescription = customizedDescription
          .replace('[KEY_ELEMENT]', 'Gupta period astronomical symbols and lotus motifs')
          .replace('[WORLD_NAME]', 'Gupta')
          .replace('[HISTORICAL_EVENT]', 'Aryabhata\'s astronomical discoveries in Pataliputra')
          .replace('[SYMBOLIC_ELEMENT]', 'the Gupta period chakra and decimal point motif')
          .replace('[CULTURAL_ASPECT]', 'the Gupta renaissance of science and art')
          .replace('[ARCHITECTURAL_ELEMENT]', 'the Gupta period temple architecture and pillar design')
          .replace('[FUNCTIONAL_ELEMENT]', 'Gupta scholars\' writing implement and manuscript storage systems')
          .replace('[SYMBOLIC_MOTIF]', 'the Gupta period coin veena (lute) design')
          .replace('[NARRATIVE_SCENE]', 'the night sky as charted by Gupta astronomers');
        customizedTitle = 'Gupta Renaissance Premium Tee';
        customizedTagline = 'Organic cotton · Astronomical symbol pattern';

        // Set image URL based on concept type
        if (concept.id.includes('tshirt_premium')) {
          imageUrl = '/images/heritage/gupta/merchandise-premium-tshirt.svg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/gupta/merchandise-oversized-tshirt.svg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/gupta/merchandise-embroidered-apparel.svg';
        }
        break;

      case 'mauryan':
        customizedDescription = customizedDescription
          .replace('[KEY_ELEMENT]', 'Mauryan pillar capital patterns and chariot wheel motifs')
          .replace('[WORLD_NAME]', 'Mauryan')
          .replace('[HISTORICAL_EVENT]', 'Ashoka\'s conversion to Dhamma after the Kalinga war')
          .replace('[SYMBOLIC_ELEMENT]', 'the Mauryan lion capital and dharma chakra')
          .replace('[CULTURAL_ASPECT]', 'the Mauryan empire\'s administration and statecraft')
          .replace('[ARCHITECTURAL_ELEMENT]', 'the polished sandstone capital of Mauryan pillars')
          .replace('[FUNCTIONAL_ELEMENT]', 'Mauryan administrators\' seal and record-keeping systems')
          .replace('[SYMBOLIC_MOTIF]', 'the Mauryan chariot wheel and axle design')
          .replace('[NARRATIVE_SCENE]', 'the imperial procession route from Pataliputra to major cities');
        customizedTitle = 'Mauryan Foundation Premium Tee';
        customizedTagline = 'Organic cotton · Pillar capital geometry';

        // Set image URL based on concept type
        if (concept.id.includes('tshirt_premium')) {
          imageUrl = '/images/heritage/mauryan/merchandise-premium-tshirt.svg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/mauryan/merchandise-oversized-tshirt.svg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/mauryan/merchandise-embroidered-apparel.svg';
        }
        break;

      default:
        // Fallback - keep original placeholders
        customizedDescription = concept.description
          .replace('[KEY_ELEMENT]', 'heritage motifs')
          .replace('[WORLD_NAME]', world.name)
          .replace('[HISTORICAL_EVENT]', 'historical events')
          .replace('[SYMBOLIC_ELEMENT]', 'symbolic elements')
          .replace('[CULTURAL_ASPECT]', 'cultural aspects')
          .replace('[ARCHITECTURAL_ELEMENT]', 'architectural elements')
          .replace('[FUNCTIONAL_ELEMENT]', 'functional elements')
          .replace('[SYMBOLIC_MOTIF]', 'symbolic motifs')
          .replace('[NARRATIVE_SCENE]', 'narrative scenes');

        // Set fallback image URL
        imageUrl = '/images/fallback/merchandise-concept.svg';
    }

    return {
      ...concept,
      worldId: world.id,
      id: `${world.id}_${concept.id.split('_').slice(1).join('_')}`,
      title: customizedTitle,
      description: customizedDescription,
      tagline: customizedTagline,
      conceptualMedium: customizedMedium,
      imageUrl: imageUrl,
      colorHex: world.colorHex || '#8A6A45',
    };
  });
}

export default function StoryPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string)?.toLowerCase();
  const world = HERITAGE_WORLDS[slug];

  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [selectedWorldVote, setSelectedWorldVote] = useState<string>(slug || 'chola');
  const [worldVoteSubmitted, setWorldVoteSubmitted] = useState(false);

  useEffect(() => {
    if (world) {
      // Fire story_view on page load (PRD §9.1 & §11)
      logEvent('story_view', { world_id: world.id });

      // Track scroll depth (75% engagement -> story_depth)
      let depthFired = false;
      const handleScroll = () => {
        if (depthFired) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0 && window.scrollY / totalHeight >= 0.75) {
          depthFired = true;
          logEvent('story_depth', { world_id: world.id, trigger: 'scroll_75' });
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [world]);

  if (!world) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
        <h1 className="font-serif text-3xl font-bold text-ink-950">
          World Not Found
        </h1>
        <p className="text-sm text-ink-600 max-w-md">
          The requested heritage narrative is not yet in our active archive. Explore our six launch worlds.
        </p>
        <Link
          href="/stories"
          className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-ink-900 text-parchment-100 rounded-sm"
        >
          Return to Stories Index
        </Link>
      </div>
    );
  }

  const handleWorldVote = (targetWorldId: string) => {
    setSelectedWorldVote(targetWorldId);
    logEvent('heritage_preference', {
      world_id: targetWorldId,
      source: `story_footer_${world.id}`,
    });
    setWorldVoteSubmitted(true);
  };

  return (
    <article className="min-h-screen pb-28">
      {/* 1. Header & Immersive Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end justify-start overflow-hidden border-b border-parchment-300">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${world.heroImage})` }}
          aria-hidden="true"
        />
        {/* Cinematic Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/40" />

        {/* Top Floating Back Link */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink-900/80 hover:bg-ink-900 text-parchment-200 hover:text-parchment-100 text-xs font-mono uppercase tracking-wider backdrop-blur-sm border border-ink-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Heritage Worlds</span>
          </Link>
        </div>

        {/* Hero Title & Hook */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-parchment-100 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-sm bg-ink-900/80 border border-ink-700 text-amber-200">
              {world.era}
            </span>
            <span className="text-xs font-sans uppercase tracking-widest text-parchment-300">
              {world.region}
            </span>
            <span className="text-sm font-serif italic text-parchment-300">
              {world.devanagariName}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-parchment-100">
            THE {world.name.toUpperCase()}
          </h1>

          <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-amber-100/95 max-w-3xl leading-relaxed">
            “{world.hook}”
          </p>

          <p className="text-sm sm:text-base text-ink-300 font-sans max-w-2xl leading-relaxed">
            {world.description}
          </p>
        </div>
      </section>

      {/* Editorial Pull Quote */}
      <section className="py-12 bg-parchment-200/70 border-b border-parchment-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-2">
          <p className="font-serif italic text-lg sm:text-xl text-ink-800 leading-relaxed">
            {world.editorialQuote}
          </p>
        </div>
      </section>

      {/* Main Story Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* 2. Story Dimensions (Layer 2 & Layer 3) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-parchment-300">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-500">
                Layer 02 & 03
              </span>
              <h2 className="font-serif text-3xl font-bold text-ink-950">
                EXPLORE THE STORY DIMENSIONS
              </h2>
            </div>
            <p className="text-xs text-ink-500 font-sans">
              Click any dimension to reveal Layer 3 deep history and sources.
            </p>
          </div>

          <div className="space-y-4">
            {world.dimensions.map((dim, idx) => (
              <DimensionCard
                key={dim.id}
                dimension={dim}
                worldId={world.id}
                index={idx}
              />
            ))}
          </div>
        </section>

        {/* 3. Resonance Module (Theme Chips) */}
        <section id="resonance">
          <ResonanceModule worldId={world.id} />
        </section>

        {/* 4. Expression Module (Merchandise Form Choices) */}
        <section id="expression">
          <ExpressionModule worldId={world.id} />
        </section>

        {/* 5. WHAT COULD IT BECOME? (Merchandise Concepts) */}
        <section className="py-16">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-500">
              Material Exploration
            </span>
            <h3 className="font-serif text-3xl font-bold text-ink-950">
              WHAT COULD IT BECOME?
            </h3>
            <p className="text-sm text-ink-600 font-sans max-w-xl">
              Contemporary expressions of {world.name} heritage through conceptual merchandise design — where historical narratives inform modern wearables, objects, and experiences.
            </p>
          </div>

          <div className="py-12">
            <ConceptCards
              concepts={generateStoryWearConcepts(world)}
              worldName={world.name}
            />
          </div>
        </section>

        {/* 6. Concept Cards (With Mandatory Label) */}
        <section>
          <ConceptCards
            concepts={world.sampleConcepts}
            worldName={world.name}
          />
        </section>

        {/* 6. Heritage Preference Control (PRD §8.5: "Which world speaks to you most?") */}
        <section className="p-8 bg-parchment-100 border border-parchment-300 rounded-sm space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-500">
              Subculture Alignment
            </span>
            <h3 className="font-serif text-2xl font-bold text-ink-950">
              Which world speaks to you most?
            </h3>
            <p className="text-xs text-ink-600 font-sans">
              Compare this narrative with other historical realms. Tell us which subculture you identify with most deeply.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {HERITAGE_WORLDS_LIST.map((w) => {
              const isSelected = selectedWorldVote === w.id;
              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => handleWorldVote(w.id)}
                  className={`p-3 text-center rounded-sm border text-xs font-sans transition-all select-none ${
                    isSelected
                      ? 'bg-ink-900 text-parchment-100 border-ink-900 font-semibold'
                      : 'bg-parchment-50 text-ink-800 border-parchment-300 hover:border-ink-600'
                  }`}
                >
                  <p className="font-serif text-sm">{w.name}</p>
                  <p className="text-[10px] opacity-75 mt-0.5">{w.era.split('–')[0]}</p>
                </button>
              );
            })}
          </div>

          {worldVoteSubmitted && (
            <div className="text-xs text-emerald-800 bg-emerald-50 p-3 rounded-sm border border-emerald-200 flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>World preference logged in our validation store.</span>
            </div>
          )}
        </section>

        {/* 7. Early Access Prompt Specific to This World */}
        <section className="p-8 sm:p-12 bg-ink-950 text-parchment-100 rounded-sm space-y-6 text-center">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
              Co-create With Us
            </span>
            <h3 className="font-serif text-3xl font-bold text-parchment-100">
              Help us shape the {world.name} collection.
            </h3>
            <p className="text-xs sm:text-sm text-ink-300 font-sans leading-relaxed">
              We’re building VEERGATHA. Sign up to receive design prototypes, historical source folios, and early test previews for this world.
            </p>
          </div>

          <div>
            <button
              onClick={() => setEarlyAccessOpen(true)}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest bg-parchment-100 text-ink-950 hover:bg-parchment-200 rounded-sm transition-all shadow-md"
            >
              Join the {world.name} Early Access List →
            </button>
          </div>
        </section>
      </div>

      <EarlyAccessModal
        isOpen={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
        defaultWorldId={world.id}
      />
    </article>
  );
}
