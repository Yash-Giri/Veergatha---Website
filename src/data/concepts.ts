import { ExpressionCategory } from '@/types';

export interface ConceptualExpression {
  id: ExpressionCategory;
  name: string;
  tagline: string;
  subhead: string;
  description: string;
  mediums: string[];
  examples: string[];
  sampleImage: string;
  conceptualVisuals: {
    title: string;
    storyReference: string;
    form: string;
    materials: string;
    details: string;
    imageUrl: string;
  }[];
}

export const CONCEPTUAL_EXPRESSIONS: Record<ExpressionCategory, ConceptualExpression> = {
  wear: {
    id: 'wear',
    name: 'WEAR',
    tagline: 'Apparel · Tailored Silhouettes · Handloom Weaves',
    subhead: 'History worn with modern understatement.',
    description: 'Rejecting loud graphic slogans and cheap prints. VEERGATHA conceptualizes garments where heritage is integrated structurally: topographic contour linings, fort-geometry stitchwork, natural indigo and madder dyeing, and heavy unbleached cotton twills.',
    mediums: ['Handspun Khadi Cotton', 'Heavyweight Twill', 'Belgian Flax Linen', 'Vegetable Dyes'],
    examples: ['Topographic Overshirts', 'Monochrome Inscribed T-Shirts', 'Handloom Wool Stoles', 'Structured Field Jackets'],
    sampleImage: '/images/concepts/wear-conceptual-apparel-india.jpg',
    conceptualVisuals: [
      {
        title: 'Sahyadri Contour Utility Shirt',
        storyReference: 'Maratha Basalt Fort Networks',
        form: 'Relaxed Overshirt',
        materials: '100% Unbleached 320gsm Organic Twill',
        details: 'Subtle topographic elevation lines of Rajgad fort embroidered tone-on-tone on interior chest pocket.',
        imageUrl: '/images/concepts/wear-sahyadri-contour-utility-shirt.jpg'
      },
      {
        title: 'Kaveri Monsoon Indigo Linen Tunics',
        storyReference: 'Chola Maritime Port Guilds',
        form: 'Minimalist Handloom Tunic',
        materials: 'Natural Indigo-dyed Pure Linen',
        details: 'Constructed using traditional flat-felled seamwork inspired by maritime sailcloth.',
        imageUrl: '/images/concepts/wear-kaveri-monsoon-indigo-linen-tunics.jpg'
      }
    ]
  },
  display: {
    id: 'display',
    name: 'DISPLAY',
    tagline: 'Archival Art Prints · Lithographs · Wall Art',
    subhead: 'Enduring civilizational aesthetics for contemporary spaces.',
    description: 'Transforming ancient epigraphy, naval cartography, architectural elevations, and courtly miniature styles into limited archival art prints produced on museum-grade cotton rag paper.',
    mediums: ['Letterpress', 'Stone Lithography', '310gsm Hahnemühle Cotton Rag', 'Mineral Inks'],
    examples: ['Monochrome Edict Rubbings', 'Naval Passage Charts', 'Temple Elevation Blueprints', 'Miniature Atelier Studies'],
    sampleImage: '/images/concepts/display-conceptual-art-print-india.jpg',
    conceptualVisuals: [
      {
        title: 'Bay of Bengal Trade Winds Cartogram',
        storyReference: 'Chola Imperial Naval Corridors',
        form: 'Archival Map Print (18 x 24 in)',
        materials: 'Heavyweight archival bamboo paper, charcoal ink',
        details: 'Traces seasonal monsoon winds and ancient waypoints between Nagapattinam and Kedah.',
        imageUrl: '/images/concepts/display-bay-of-bengal-trade-winds-cartogram.jpg'
      },
      {
        title: 'Ashokan Rock Edict XIII Rubbing',
        storyReference: 'Mauryan Moral Proclamations',
        form: 'Relief Print (12 x 36 in)',
        materials: 'Japanese Kozo paper with archival charcoal pigments',
        details: 'Direct tactile relief facsimile of Brahmi epigraphy renouncing war in favor of moral fellowship.',
        imageUrl: '/images/concepts/display-ashokan-rock-edict-xiii-rubbing.jpg'
      }
    ]
  },
  collect: {
    id: 'collect',
    name: 'COLLECT',
    tagline: 'Commemorative Medallions · Bronze Castings · Collectibles',
    subhead: 'Tactile artifacts of historic turning points.',
    description: 'Strictly non-weapon commemorations of Indian civilizational moments. Hand-cast medals, lost-wax miniature seals, and numismatic tributes created in collaboration with traditional craft clusters.',
    mediums: ['Lost-Wax Bell Metal', 'Brushed Naval Brass', 'Terracotta Patina', 'Solid Pewter'],
    examples: ['Numismatic Medallions', 'Ancient Guild Seals', 'Vessel Prow Replicas', 'Dynastic Seal Castings'],
    sampleImage: '/images/concepts/collect-conceptual-medallion-india.jpg',
    conceptualVisuals: [
      {
        title: 'Samudragupta Lyrist Tribute Coin',
        storyReference: 'Gupta Classical Numismatics',
        form: 'Cast Commemorative Medallion (45mm)',
        materials: 'Solid brass with brushed 22k gold electroplate',
        details: 'Features Samudragupta playing the classical veena on an antique throne, numbered edition.',
        imageUrl: '/images/concepts/collect-samudragupta-lyrist-tribute-coin.jpg'
      },
      {
        title: 'Uttaramerur Palm Ballot Commemorative Seal',
        storyReference: 'Chola Local Democratic Assemblies',
        form: 'Desk Seal Token',
        materials: 'Lost-wax cast bronze with verdigris patina',
        details: 'Miniature casting of a palm leaf ballot marked with historical Tamil-Brahmi script.',
        imageUrl: '/images/concepts/collect-uttaramerur-palm-ballot-commemorative-seal.jpg'
      }
    ]
  },
  explore: {
    id: 'explore',
    name: 'EXPLORE',
    tagline: 'Historical Folios · Timeline Codices · Informational Cards',
    subhead: 'Knowledge designed for curious minds.',
    description: 'Rich, non-encyclopedic printed literature that invites slow reading. Curated boxed cards, fold-out accordion chronologies, and bilingual source extracts that make complex historiography accessible.',
    mediums: ['Letterpress Printing', 'Linen Slipcases', 'FSC-Certified Archival Paper', 'Concertina Binding'],
    examples: ['Ashta Pradhan Strategy Box', 'Aryabhatiya Math Folio', 'Buranji Chronicle Facsimiles', 'Dynasty Timelines'],
    sampleImage: '/images/concepts/explore-conceptual-folio-india.jpg',
    conceptualVisuals: [
      {
        title: 'Ashta Pradhan: The Architecture of Statecraft',
        storyReference: 'Maratha Administrative Council',
        form: '8-Card Letterpress Folio Box',
        materials: 'Greyboard slipcase wrapped in book cloth, blind-debossed title',
        details: 'Each card breaks down one ministerial portfolio with translated 17th-century edicts.',
        imageUrl: '/images/concepts/explore-ashta-pradhan-statecraft-folio.jpg'
      },
      {
        title: 'Aryabhatiya Planetary Calculation Concertina',
        storyReference: 'Gupta Scientific & Astronomical Tradition',
        form: 'Fold-out Accordion Codex (6 panels)',
        materials: 'Heavy cream cotton paper with bronze metallic ink printing',
        details: 'Presents Aryabhata’s Sanskrit mathematical verses with modern trigonometric diagrams.',
        imageUrl: '/images/concepts/explore-aryabhatiya-planetary-concertina.jpg'
      }
    ]
  },
  desk: {
    id: 'desk',
    name: 'DESK',
    tagline: 'Desk Objects · Stone Sculptures · Fine Stationery',
    subhead: 'Heritage that grounds your everyday work.',
    description: 'Tactile physical anchors for modern workspaces. Heavy granite paperweights cut with temple geometry, unglazed terracotta incense holders, machined brass fort bastions, and fountain pen notebooks.',
    mediums: ['Black & Grey Granite', 'Solid Brass', 'Terracotta', 'Handmade Botanical Paper'],
    examples: ['Brihadisvara Vimana Paperweight', 'Sindhudurg Naval Bastion Weight', 'Buranji Sanchi-Bark Journal', 'Ashokan Sandstone Pen Rest'],
    sampleImage: '/images/concepts/desk-conceptual-object-india.jpg',
    conceptualVisuals: [
      {
        title: 'Thanjavur Octagonal Granite Capstone',
        storyReference: 'Chola Monolithic Engineering',
        form: 'Sculptural Desk Weight',
        materials: 'Solid polished black Indian granite',
        details: 'Faceted paperweight echoing the geometric profile of the 80-tonne Brihadisvara cupola.',
        imageUrl: '/images/concepts/desk-thanjavur-octagonal-granite-capstone.jpg'
      },
      {
        title: 'Buranji Sanchi-Bark Notebook',
        storyReference: 'Ahom Prose Chronicles',
        form: 'Hardbound Desk Journal',
        materials: 'Indigo-washed cloth cover, handmade tree-free botanical paper',
        details: 'Lays flat 180 degrees for fountain pen journaling, with ribbon bookmark and ribbon closure.',
        imageUrl: '/images/concepts/desk-buranji-sanchi-bark-notebook.jpg'
      }
    ]
  }
};

export const CONCEPT_LIST = Object.values(CONCEPTUAL_EXPRESSIONS);