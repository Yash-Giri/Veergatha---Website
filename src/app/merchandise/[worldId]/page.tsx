'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Tag, Circle, Zap, ShoppingBag, Edit, Heart, Coffee, BookOpen, Frame, Shirt } from 'lucide-react';
import { HERITAGE_WORLDS } from '@/data/heritageWorlds';
import { logEvent } from '@/lib/analytics';
import { WorldId } from '@/types';

// Helper function to generate wear concepts based on world data
function generateWearConcepts(world: any) {
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
    },
    // Sweatshirt
    {
      id: `${world.id}_sweatshirt`,
      title: `${world.name} Heritage Sweatshirt`,
      category: 'wear' as const,
      categoryLabel: 'Sweatshirt',
      tagline: 'Heavyweight fleece · Architectural inspiration',
      description: 'A premium heavyweight sweatshirt drawing inspiration from [ARCHITECTURAL_ELEMENT] of [WORLD_NAME] heritage, translated into a contemporary geometric pattern on the chest and sleeves.',
      conceptualMedium: '80% organic cotton / 20% recycled polyester fleece, low-impact dyes',
    },
    // Jacket
    {
      id: `${world.id}_jacket`,
      title: `${world.name} Field Jacket`,
      category: 'wear' as const,
      categoryLabel: 'Jacket',
      tagline: 'Utility wear · Heritage functionality',
      description: 'A utility-inspired field jacket incorporating [FUNCTIONAL_ELEMENT] from [WORLD_NAME] heritage design principles, featuring thoughtful pocket placement and adjustable details for modern mobility.',
      conceptualMedium: 'Waxed organic cotton canvas, vegetable-tanned leather accents',
    },
    // Cap
    {
      id: `${world.id}_cap`,
      title: `${world.name} Heritage Cap`,
      category: 'wear' as const,
      categoryLabel: 'Cap',
      tagline: 'Structured · Subtle emblem',
      description: 'A structured six-panel cap featuring a minimalist emblem derived from [SYMBOLIC_MOTIF] of [WORLD_NAME] heritage, crafted for everyday wear with quiet cultural significance.',
      conceptualMedium: 'Organic cotton twill, recycled polyester closure, vegetable-dyed visor',
    },
    // Tote bag
    {
      id: `${world.id}_tote`,
      title: `${world.name} Heritage Tote`,
      category: 'wear' as const,
      categoryLabel: 'Tote Bag',
      tagline: 'Canvas carry · Narrative utility',
      description: 'A premium canvas tote bag featuring an artistic interpretation of [NARRATIVE_SCENE] from [WORLD_NAME] heritage, designed for daily use with interior pockets for modern essentials.',
      conceptualMedium: '14oz organic cotton canvas, vegetable dye, leather-reinforced handles',
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
          imageUrl = '/images/heritage/chola/merchandise-premium-tshirt.jpg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/chola/merchandise-oversized-tshirt.jpg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/chola/merchandise-embroidered-apparel.jpg';
        } else if (concept.id.includes('sweatshirt')) {
          imageUrl = '/images/heritage/chola/merchandise-sweatshirt.jpg';
        } else if (concept.id.includes('jacket')) {
          imageUrl = '/images/heritage/chola/merchandise-jacket.jpg';
        } else if (concept.id.includes('cap')) {
          imageUrl = '/images/heritage/chola/merchandise-cap.jpg';
        } else if (concept.id.includes('tote')) {
          imageUrl = '/images/heritage/chola/merchandise-tote-bag.jpg';
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
          imageUrl = '/images/heritage/maratha/merchandise-premium-tshirt.jpg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/maratha/merchandise-oversized-tshirt.jpg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/maratha/merchandise-embroidered-apparel.jpg';
        } else if (concept.id.includes('sweatshirt')) {
          imageUrl = '/images/heritage/maratha/merchandise-sweatshirt.jpg';
        } else if (concept.id.includes('jacket')) {
          imageUrl = '/images/heritage/maratha/merchandise-jacket.jpg';
        } else if (concept.id.includes('cap')) {
          imageUrl = '/images/heritage/maratha/merchandise-cap.jpg';
        } else if (concept.id.includes('tote')) {
          imageUrl = '/images/heritage/maratha/merchandise-tote-bag.jpg';
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
          imageUrl = '/images/heritage/rajputana/merchandise-premium-tshirt.jpg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/rajputana/merchandise-oversized-tshirt.jpg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/rajputana/merchandise-embroidered-apparel.jpg';
        } else if (concept.id.includes('sweatshirt')) {
          imageUrl = '/images/heritage/rajputana/merchandise-sweatshirt.jpg';
        } else if (concept.id.includes('jacket')) {
          imageUrl = '/images/heritage/rajputana/merchandise-jacket.jpg';
        } else if (concept.id.includes('cap')) {
          imageUrl = '/images/heritage/rajputana/merchandise-cap.jpg';
        } else if (concept.id.includes('tote')) {
          imageUrl = '/images/heritage/rajputana/merchandise-tote-bag.jpg';
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
          imageUrl = '/images/heritage/ahom/merchandise-premium-tshirt.jpg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/ahom/merchandise-oversized-tshirt.jpg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/ahom/merchandise-embroidered-apparel.jpg';
        } else if (concept.id.includes('sweatshirt')) {
          imageUrl = '/images/heritage/ahom/merchandise-sweatshirt.jpg';
        } else if (concept.id.includes('jacket')) {
          imageUrl = '/images/heritage/ahom/merchandise-jacket.jpg';
        } else if (concept.id.includes('cap')) {
          imageUrl = '/images/heritage/ahom/merchandise-cap.jpg';
        } else if (concept.id.includes('tote')) {
          imageUrl = '/images/heritage/ahom/merchandise-tote-bag.jpg';
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
          imageUrl = '/images/heritage/gupta/merchandise-premium-tshirt.jpg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/gupta/merchandise-oversized-tshirt.jpg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/gupta/merchandise-embroidered-apparel.jpg';
        } else if (concept.id.includes('sweatshirt')) {
          imageUrl = '/images/heritage/gupta/merchandise-sweatshirt.jpg';
        } else if (concept.id.includes('jacket')) {
          imageUrl = '/images/heritage/gupta/merchandise-jacket.jpg';
        } else if (concept.id.includes('cap')) {
          imageUrl = '/images/heritage/gupta/merchandise-cap.jpg';
        } else if (concept.id.includes('tote')) {
          imageUrl = '/images/heritage/gupta/merchandise-tote-bag.jpg';
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
          imageUrl = '/images/heritage/mauryan/merchandise-premium-tshirt.jpg';
        } else if (concept.id.includes('tshirt_oversized')) {
          imageUrl = '/images/heritage/mauryan/merchandise-oversized-tshirt.jpg';
        } else if (concept.id.includes('embroidered')) {
          imageUrl = '/images/heritage/mauryan/merchandise-embroidered-apparel.jpg';
        } else if (concept.id.includes('sweatshirt')) {
          imageUrl = '/images/heritage/mauryan/merchandise-sweatshirt.jpg';
        } else if (concept.id.includes('jacket')) {
          imageUrl = '/images/heritage/mauryan/merchandise-jacket.jpg';
        } else if (concept.id.includes('cap')) {
          imageUrl = '/images/heritage/mauryan/merchandise-cap.jpg';
        } else if (concept.id.includes('tote')) {
          imageUrl = '/images/heritage/mauryan/merchandise-tote-bag.jpg';
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
        imageUrl = '/images/fallback/merchandise-concept.jpg';
    }

    return {
      ...concept,
      id: `${world.id}_${concept.id.split('_').slice(1).join('_')}`,
      title: customizedTitle,
      description: customizedDescription,
      tagline: customizedTagline,
      conceptualMedium: customizedMedium,
      imageUrl: imageUrl,
    };
  });
}

export default function WorldMerchandisePage() {
  const params = useParams();
  const router = useRouter();
  const worldId = (params?.worldId as string)?.toLowerCase();
  const world = HERITAGE_WORLDS[worldId];
  const [wearConcepts, setWearConcepts] = useState<any[]>([]);

  useEffect(() => {
    if (world) {
      // Fire merchandise_view on page load
      logEvent('merchandise_view', {
        world_id: world.id,
        source: 'merchandise_world_page'
      });

      // Generate and set wear concepts
      setWearConcepts(generateWearConcepts(world));
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
          href="/merchandise"
          className="px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-ink-900 text-parchment-100 rounded-sm"
        >
          Return to Merchandise Index
        </Link>
      </div>
    );
  }

  const handleBackToIndex = () => {
    router.push('/merchandise');
    logEvent('merchandise_index_return', {
      source: 'world_merchandise_page',
      world_id: world.id
    });
  };

  return (
    <article className="min-h-screen bg-parchment-50">
      {/* Header */}
      <header className="border-b border-parchment-300 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center gap-2">
              <Link
                href="/merchandise"
                onClick={handleBackToIndex}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink-900/80 hover:bg-ink-900 text-parchment-200 hover:text-parchment-100 text-xs font-mono uppercase tracking-wider backdrop-blur-sm border border-ink-700 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Concepts</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-parchment-200 border border-parchment-300 text-xs font-mono uppercase tracking-wider text-ink-600">
              <Tag className="w-3.5 h-3.5" />
              <span>Wear Concepts</span>
            </div>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-950 tracking-tight mt-4">
            THE {world.name.toUpperCase()} WEAR COLLECTION
          </h1>
          <p className="font-editorial italic text-2xl sm:text-3xl text-amber-100/95 max-w-3xl">
            “{world.hook}”
          </p>
          <p className="text-sm text-ink-600 font-sans max-w-xl mt-4">
            Conceptual apparel designs exploring how {world.name} heritage translates into contemporary wearable expressions — each piece a thoughtful interpretation of {world.name.toLowerCase()} stories through material, form, and detail.
          </p>
        </div>
      </header>

      {/* Mandatory Disclaimer Banner */}
      <section className="bg-amber-50 border border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Circle className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-semibold text-amber-800">
                Important Note
              </h3>
              <p className="text-sm text-amber-600">
                All designs shown are conceptual explorations only. They are not currently
                available for purchase and do not represent actual products. Each concept
                includes the mandatory disclosure: "Conceptual exploration — not currently
                available for sale."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wear Concepts Grid */}
      {wearConcepts.length > 0 ? (
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-ink-500">
                  Wearable Heritage Explorations
                </span>
                <h3 className="font-serif text-3xl font-bold text-ink-950">
                  Contemporary Expression Through Premium Apparel
                </h3>
                <p className="text-sm text-ink-600 font-sans max-w-xl">
                  From premium tees to field jackets, each concept explores how {world.name}
                  heritage can inform modern clothing design through thoughtful material choices,
                  symbolic details, and functional adaptations — all while maintaining wearability
                  and contemporary aesthetic appeal.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {wearConcepts.map((concept) => (
                  <div
                    key={concept.id}
                    className="bg-white border border-parchment-300 rounded-xl overflow-hidden flex flex-col h-full group hover:border-ink-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {/* Visual */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={concept.imageUrl}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          // Create a deliberate placeholder with heritage world styling
                          const placeholderDiv = document.createElement('div');
                          placeholderDiv.style.position = 'absolute';
                          placeholderDiv.style.inset = '0';
                          placeholderDiv.style.backgroundColor = 'var(--bg-parchment-50)';
                          placeholderDiv.style.display = 'flex';
                          placeholderDiv.style.alignItems = 'center';
                          placeholderDiv.style.justifyContent = 'center';
                          placeholderDiv.style.textAlign = 'center';
                          placeholderDiv.style.padding = '2rem';

                          const heading = document.createElement('h4');
                          heading.className = 'font-serif text-lg font-bold text-ink-950';
                          heading.textContent = 'VISUAL CONCEPT';

                          const subheading = document.createElement('p');
                          subheading.className = 'text-xs text-ink-600 font-sans mt-2';
                          subheading.textContent = 'Asset pending — deliberate placeholder';

                          placeholderDiv.appendChild(heading);
                          placeholderDiv.appendChild(subheading);

                          const img = e.currentTarget as HTMLImageElement; img.parentNode?.insertBefore(placeholderDiv, img.nextSibling);
                          img.style.display = 'none';
                        }}
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent pointer-events-none" />

                      {/* Mandatory PRD Disclaimer Badge */}
                      <div className="absolute top-3 left-3 right-3 z-10">
                        <p className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 bg-ink-950/90 text-amber-200 border border-ink-700 text-center rounded-xs backdrop-blur-xs">
                          CONCEPTUAL EXPLORATION — NOT CURRENTLY AVAILABLE FOR SALE.
                        </p>
                      </div>

                      {/* Category Label */}
                      <div className="absolute bottom-3 left-4 right-4 z-10 text-parchment-100">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300">
                          {concept.categoryLabel}
                        </span>
                        <h4 className="font-serif text-lg font-bold">
                          {concept.title}
                        </h4>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                      <p className="text-sm text-ink-600 font-sans leading-relaxed flex-1">
                        {concept.description}
                      </p>

                      <div className="pt-4 border-t border-parchment-200 space-y-3">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase text-ink-400 block">
                            Conceptual Specification:
                          </span>
                          <p className="text-sm font-mono text-ink-700">
                            {concept.conceptualMedium}
                          </p>
                        </div>

                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-mono text-ink-500">
                            <Sparkles className="w-4 h-4" />
                            <span>Design Philosophy</span>
                          </div>
                          <p className="text-sm text-ink-600 leading-relaxed">
                            This concept follows the VEERGATHA design methodology:
                            Historical Story → {world.name} Heritage → Visual Language →
                            Contemporary Design → Merchandise Expression
                          </p>
                        </div>

                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-mono text-ink-500">
                            <Frame className="w-4 h-4" />
                            <span>Heritage Inspiration</span>
                          </div>
                          <p className="text-sm text-ink-600 leading-relaxed">
                            Inspired by the {world.name} world's themes of:
                            {world.themes.slice(0, 3).map((t: string, i: number) =>
                              i === world.themes.slice(0, 3).length - 1 && world.themes.slice(0, 3).length > 1
                                ? ` and ${t}`
                                : i === world.themes.slice(0, 3).length - 1
                                  ? t
                                  : `${t},`
                            ).join('')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center py-12">
              <p className="text-sm text-ink-600 font-sans">
                Wear concepts for {world.name} are being developed. Please check back soon.
              </p>
            </div>
          </div>
        </main>
      )}

      {/* Back to Stories Link */}
      <section className="bg-parchment-100 border-t border-parchment-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link
              href="/stories"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-ink-900 text-parchment-100 hover:bg-parchment-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Explore {world.name} Stories</span>
            </Link>
            <Link
              href="/merchandise"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-ink-900 text-parchment-100 hover:bg-parchment-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to All Concepts</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
