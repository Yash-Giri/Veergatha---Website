# VEERGATHA Asset Manifest

This document lists all required image assets for the VEERGATHA project as identified during the visual audit and redesign process.

## Missing Assets - Require Creation

### Heritage Worlds Hero Images
- /images/heritage/chola/hero-indian-ocean-routes-temple-geometry.jpg
- /images/heritage/maratha/hero-sahyadri-topography-fort-architecture.jpg  
- /images/heritage/rajputana/hero-jharokha-architecture-fort-geometry.jpg
- /images/heritage/ahom/hero-brahmaputra-landscape-river-systems.jpg
- /images/heritage/gupta/hero-knowledge-astronomy-coinage.jpg
- /images/heritage/mauryan/hero-statecraft-administration-edicts.jpg

### Heritage Worlds Sample Concepts (3 per world = 18 total)
#### Chola
- /images/heritage/chola/concept-oceanic-waypoints-maritime-chart.jpg
- /images/heritage/chola/concept-kudavolai-ballot-token.jpg
- /images/heritage/chola/concept-brihadisvara-granite-paperweight.jpg

#### Maratha
- /images/heritage/maratha/concept-sahyadri-topography-overshirt.jpg
- /images/heritage/maratha/concept-ashta-pradhan-cards.jpg
- /images/heritage/maratha/concept-sindhudurg-brass-seal.jpg

#### Rajputana
- /images/heritage/rajputana/concept-kumbhalgarh-architectural-elevation.jpg
- /images/heritage/rajputana/concept-mewar-linen-shirt.jpg

#### Ahom
- /images/heritage/ahom/concept-buranji-sanchi-bark-journal.jpg
- /images/heritage/ahom/concept-saraighat-river-navigational-print.jpg

#### Gupta
- /images/heritage/gupta/concept-samudragupta-lyrist-medallion.jpg
- /images/heritage/gupta/concept-aryabhatiya-timeline.jpg

#### Mauryan
- /images/heritage/mauryan/concept-ashokan-edict-rubbing.jpg
- /images/heritage/mauryan/concept-chunar-sandstone-desk-weight.jpg

### Conceptual Expressions Sample Images (5 total)
- /images/concepts/wear-sample.jpg
- /images/concepts/display-sample.jpg
- /images/concepts/collect-sample.jpg
- /images/concepts/explore-sample.jpg
- /images/concepts/desk-sample.jpg

### Conceptual Expressions Conceptual Visuals (2 per expression = 10 total)
#### WEAR
- /images/concepts/wear-sahyadri-contour-shirt.jpg
- /images/concepts/wear-kaveri-indigo-tunics.jpg

#### DISPLAY
- /images/concepts/display-bay-of-bengal-cartogram.jpg
- /images/concepts/display-ashokan-edict-rubbing.jpg

#### COLLECT
- /images/concepts/collect-samudragupta-lyrist-coin.jpg
- /images/concepts/collect-uttaramerur-palm-ballot-seal.jpg

#### EXPLORE
- /images/concepts/explore-ashta-pradhan.jpg
- /images/concepts/explore-aryabhatiya-concertina.jpg

#### DESK
- /images/concepts/desk-thanjavur-granite-capstone.jpg
- /images/concepts/desk-buranji-sanchi-bark-notebook.jpg

### Merchandise Concept Images (6 concepts × 6 worlds = 36 total)
#### Chola Merchandise
- /images/heritage/chola/merchandise-premium-tshirt.jpg
- /images/heritage/chola/merchandise-oversized-tshirt.jpg
- /images/heritage/chola/merchandise-embroidered-apparel.jpg
- /images/heritage/chola/merchandise-sweatshirt.jpg
- /images/heritage/chola/merchandise-jacket.jpg
- /images/heritage/chola/merchandise-cap.jpg
- /images/heritage/chola/merchandise-tote-bag.jpg

#### Maratha Merchandise
- /images/heritage/maratha/merchandise-premium-tshirt.jpg
- /images/heritage/maratha/merchandise-oversized-tshirt.jpg
- /images/heritage/maratha/merchandise-embroidered-apparel.jpg
- /images/heritage/maratha/merchandise-sweatshirt.jpg
- /images/heritage/maratha/merchandise-jacket.jpg
- /images/heritage/maratha/merchandise-cap.jpg
- /images/heritage/maratha/merchandise-tote-bag.jpg

#### Rajputana Merchandise
- /images/heritage/rajputana/merchandise-premium-tshirt.jpg
- /images/heritage/rajputana/merchandise-oversized-tshirt.jpg
- /images/heritage/rajputana/merchandise-embroidered-apparel.jpg
- /images/heritage/rajputana/merchandise-sweatshirt.jpg
- /images/heritage/rajputana/merchandise-jacket.jpg
- /images/heritage/rajputana/merchandise-cap.jpg
- /images/heritage/rajputana/merchandise-tote-bag.jpg

#### Ahom Merchandise
- /images/heritage/ahom/merchandise-premium-tshirt.jpg
- /images/heritage/ahom/merchandise-oversized-tshirt.jpg
- /images/heritage/ahom/merchandise-embroidered-apparel.jpg
- /images/heritage/ahom/merchandise-sweatshirt.jpg
- /images/heritage/ahom/merchandise-jacket.jpg
- /images/heritage/ahom/merchandise-cap.jpg
- /images/heritage/ahom/merchandise-tote-bag.jpg

#### Gupta Merchandise
- /images/heritage/gupta/merchandise-premium-tshirt.jpg
- /images/heritage/gupta/merchandise-oversized-tshirt.jpg
- /images/heritage/gupta/merchandise-embroidered-apparel.jpg
- /images/heritage/gupta/merchandise-sweatshirt.jpg
- /images/heritage/gupta/merchandise-jacket.jpg
- /images/heritage/gupta/merchandise-cap.jpg
- /images/heritage/gupta/merchandise-tote-bag.jpg

#### Mauryan Merchandise
- /images/heritage/mauryan/merchandise-premium-tshirt.jpg
- /images/heritage/mauryan/merchandise-oversized-tshirt.jpg
- /images/heritage/mauryan/merchandise-embroidered-apparel.jpg
- /images/heritage/mauryan/merchandise-sweatshirt.jpg
- /images/heritage/mauryan/merchandise-jacket.jpg
- /images/heritage/mauryan/merchandise-cap.jpg
- /images/heritage/mauryan/merchandise-tote-bag.jpg

### Fallback Images
- /images/fallback/merchandise-concept.jpg

## Total Assets Required: 86 images

## Recommended Placeholder Strategy

Until actual purpose-built merchandise mockups are created, use deliberate visual placeholders following the VEERGATHA design language:

1. **Typography-based placeholders**: Clean text layouts using the brand's accent colors and typography
2. **Geometric silhouettes**: Simple line drawings representing product categories
3. **Architectural line drawings**: For heritage-themed concepts
4. **Editorial compositions**: Minimal layouts that convey the concept without pretending to be final product photography
5. **Brand-consistent color blocking**: Using each heritage world's accent color in purposeful ways

Each placeholder should be clearly marked as conceptual and not attempt to deceive the user into thinking it's a final product image.

## Implementation Guidance

For missing assets, components should:
1. Display a deliberate VEERGATHA branded placeholder
2. Show text like "VISUAL CONCEPT" or "Asset pending" 
3. Use the appropriate heritage world's accent color and typography
4. Log the missing asset in development mode
5. Never fallback to random/unrelated photographs

Example placeholder text styling:
- Font: Brand typography (serif for headlines, sans for details)
- Color: Heritage world accent color
- Treatment: Clean, editorial, intentional
- Content: Clearly indicates conceptual/status (e.g., "VISUAL CONCEPT - [Concept Name]")