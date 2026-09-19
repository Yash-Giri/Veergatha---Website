export interface AssetRecord {
  assetName: string;
  type: 'Typography' | 'Photography' | 'Historical Text / Epigraphy' | 'Texture';
  source: string;
  license: string;
  approvalDate: string;
  approvedBy: string;
  usageLocation: string;
  commercialStatus: string;
  notes: string;
}

export const ASSET_REGISTER: AssetRecord[] = [
  {
    assetName: 'Cinzel Font Family',
    type: 'Typography',
    source: 'Google Fonts / Natanael Gama',
    license: 'SIL Open Font License 1.1',
    approvalDate: '2026-09-18',
    approvedBy: 'Design Lead (VEERGATHA)',
    usageLocation: 'Brand Display Headings & Inscriptional Titles',
    commercialStatus: 'Fully Approved for Digital & Commercial Use',
    notes: 'Inspired by 1st-century Roman & classical monumental epigraphical proportions.',
  },
  {
    assetName: 'Cormorant Garamond Font Family',
    type: 'Typography',
    source: 'Google Fonts / Christian Thalmann',
    license: 'SIL Open Font License 1.1',
    approvalDate: '2026-09-18',
    approvedBy: 'Design Lead (VEERGATHA)',
    usageLocation: 'Editorial Subheadings & Pull Quotes',
    commercialStatus: 'Fully Approved for Digital & Commercial Use',
    notes: 'Traditional French renaissance serif suited for refined long-form reading.',
  },
  {
    assetName: 'Plus Jakarta Sans Font Family',
    type: 'Typography',
    source: 'Google Fonts / Tokotype',
    license: 'SIL Open Font License 1.1',
    approvalDate: '2026-09-18',
    approvedBy: 'Design Lead (VEERGATHA)',
    usageLocation: 'Body text, metadata, UI controls, navigation',
    commercialStatus: 'Fully Approved for Digital & Commercial Use',
    notes: 'Contemporary clean geometric sans-serif optimized for mobile screen legibility.',
  },
  {
    assetName: 'Indian Architectural Stone & Sculpture Photography',
    type: 'Photography',
    source: 'Unsplash Verified Editorial Archive (Curated Heritage Series)',
    license: 'Unsplash Free Commercial License (Unsplash Terms)',
    approvalDate: '2026-09-18',
    approvedBy: 'Creative Director (VEERGATHA)',
    usageLocation: 'Heritage World Hero Backdrops & Story Visuals',
    commercialStatus: 'Non-exclusive editorial representation; conceptual exploration only',
    notes: 'All visuals strictly avoid battle/weapon gore; focus on stone masonry, landscapes, and sculpture.',
  },
  {
    assetName: 'Tactile Noise / Paper Grain Vector',
    type: 'Texture',
    source: 'Custom Inline SVG Fractal Turbulence Generator',
    license: 'Proprietary Original Code (VEERGATHA)',
    approvalDate: '2026-09-18',
    approvedBy: 'Technical Lead (VEERGATHA)',
    usageLocation: 'Global Viewport Background Texture',
    commercialStatus: 'Original Creation',
    notes: 'Zero external network request, lightweight SVG rendering.',
  },
  {
    assetName: 'The Colas (Monograph)',
    type: 'Historical Text / Epigraphy',
    source: 'Prof. K.A. Nilakanta Sastri, University of Madras (1955)',
    license: 'Academic Historical Citation & Public Epigraphy',
    approvalDate: '2026-09-18',
    approvedBy: 'Historical Accuracy Reviewer',
    usageLocation: 'Chola Maritime & Inscriptional Story Dimensions',
    commercialStatus: 'Scholarly Reference',
    notes: 'Primary historical basis for Chola naval logistics and overseas trade guilds.',
  },
  {
    assetName: 'Shivaji and His Times',
    type: 'Historical Text / Epigraphy',
    source: 'Sir Jadunath Sarkar (1919)',
    license: 'Academic Historical Citation & Public Record',
    approvalDate: '2026-09-18',
    approvedBy: 'Historical Accuracy Reviewer',
    usageLocation: 'Maratha Swarajya & Ashta Pradhan Story Dimensions',
    commercialStatus: 'Scholarly Reference',
    notes: 'Critical foundation for civilian agrarian administration under the Marathas.',
  },
  {
    assetName: 'A History of Assam & Buranji Archives',
    type: 'Historical Text / Epigraphy',
    source: 'Sir Edward Gait (1906) & Dr. S.K. Bhuyan (1947)',
    license: 'Academic Historical Citation & Public Record',
    approvalDate: '2026-09-18',
    approvedBy: 'Historical Accuracy Reviewer',
    usageLocation: 'Ahom Saraighat & Buranji Chronicle Dimensions',
    commercialStatus: 'Scholarly Reference',
    notes: 'Verified historical documentation of the Battle of Saraighat and Paik system.',
  },
  {
    assetName: 'Asoka and the Decline of the Mauryas',
    type: 'Historical Text / Epigraphy',
    source: 'Prof. Romila Thapar, Oxford University Press (1961)',
    license: 'Academic Historical Citation & Epigraphia Indica',
    approvalDate: '2026-09-18',
    approvedBy: 'Historical Accuracy Reviewer',
    usageLocation: 'Mauryan Dhamma & Rock Edict Dimensions',
    commercialStatus: 'Scholarly Reference',
    notes: 'Standard academic translation reference for Major Rock Edicts.',
  }
];
