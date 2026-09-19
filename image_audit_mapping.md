# VEERGATHA Image Audit Mapping

This document maps all images currently used in the VEERGATHA project and identifies which ones need to be replaced with purpose-built merchandise mockups as per the user's visual redesign request.

## Audit Criteria
An image should be replaced if it does not clearly answer: "Why is THIS image being shown for THIS historical story and THIS merchandise concept?"
If no clear answer exists, DO NOT USE THE IMAGE.

## 1. Heritage Worlds Hero Images (src/data/heritageWorlds.ts)

| World ID | Current Image URL | Associated World | Relevance Assessment | Replacement Required |
|----------|-------------------|------------------|----------------------|----------------------|
| chola | https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80 | Chola | Generic landscape/water image - does not specifically represent Chola maritime heritage, architecture, or bronze casting | YES |
| maratha | https://images.unsplash.com/photo-1570784409199-e68574d6df14?auto=format&fit=crop&w=1600&q=80 | Maratha | Generic mountain/fort image - does not specifically represent Maratha fort network, navy, or Swarajya philosophy | YES |
| rajputana | https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80 | Rajputana | Generic fort/image - does not specifically represent Rajputana jharokha patterns, resistance history, or miniature art | YES |
| ahom | https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80 | Ahom | Generic landscape/river image - does not specifically represent Ahom naval warfare, Buranjis, or Paik system | YES |
| gupta | https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80 | Gupta | Generic archaeological site - does not specifically represent Gupta science, coinage, or Iron Pillar | YES |
| mauryan | https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80 | Mauryan | Generic landscape/water image (same as Chola) - does not specifically represent Mauryan administration, edicts, or Pataliputra | YES |

## 2. Heritage Worlds Sample Concepts Images (src/data/heritageWorlds.ts)

### Chola Sample Concepts
| Concept ID | Current Image URL | Associated Concept | Relevance Assessment | Replacement Required |
|------------|-------------------|-------------------|----------------------|----------------------|
| chola_poster | https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80 | Oceanic Waypoints: Bay of Bengal Maritime Chart | Generic map/chart image - does not specifically show Chola maritime trade corridors or navigational stars | YES |
| chola_token | https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80 | Kudavolai Ballot Commemorative Palm Token | Generic metallic/artifact image - does not specifically show palm leaf ballot or Kudavolai system | YES |
| chola_desk | https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80 | Brihadisvara Monolith Granite Paperweight | Generic landscape/water image (same as heroImage) - does not specifically show granite monolith or temple architecture | YES |

### Maratha Sample Concepts
| Concept ID | Current Image URL | Associated Concept | Relevance Assessment | Replacement Required |
|------------|-------------------|-------------------|----------------------|----------------------|
| maratha_apparel | https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80 | Sahyadri Topography Heavyweight Overshirt | Generic apparel image - does not specifically show topographic contour lines or fort embroidery | YES |
| maratha_cards | https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80 | Ashta Pradhan: Governance Strategy Cards | Generic historical document image - does not specifically show governance strategy cards or council edicts | YES |
| maratha_desk | https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80 | Sindhudurg Bastion Cast Brass Seal | Generic metallic object image - does not specifically show bastion design or naval fortress seal | YES |

### Rajputana Sample Concepts
| Concept ID | Current Image URL | Associated Concept | Relevance Assessment | Replacement Required |
|------------|-------------------|-------------------|----------------------|----------------------|
| rajput_print | https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80 | Kumbhalgarh Bastion Architectural Elevation | Same as heroImage - generic fort image, does not specifically show architectural elevation or bastion details | YES |
| rajput_wear | https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80 | Mewar Sandstone Relaxed Linen Shirt | Generic apparel image - does not specifically show sandstone patterns, jharokha motifs, or shield embroidery | YES |

### Ahom Sample Concepts
| Concept ID | Current Image URL | Associated Concept | Relevance Assessment | Replacement Required |
|------------|-------------------|-------------------|----------------------|----------------------|
| ahom_folio | https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80 | Buranji Sanchi-Bark Style Journal | Generic historical document image (same as maratha_cards) - does not specifically show Sanchi-bark journal or chronicles | YES |
| ahom_print | https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80 | Saraighat River Navigational Defile Print | Generic map/chart image (same as chola_poster) - does not specifically show Saraighat battle positioning or river navigational defile | YES |

### Gupta Sample Concepts
| Concept ID | Current Image URL | Associated Concept | Relevance Assessment | Replacement Required |
|------------|-------------------|-------------------|----------------------|----------------------|
| gupta_token | https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80 | Samudragupta Lyrist Gold-Finish Medallion | Generic metallic/artifact image (same as chola_token) - does not specifically show lyrist pose or Gupta coinage | YES |
| gupta_timeline | https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80 | Aryabhatiya Astronomical Coordinate Folio | Generic historical document image (same as maratha_cards) - does not specifically show astronomical folio or sine tables | YES |

### Mauryan Sample Concepts
| Concept ID | Current Image URL | Associated Concept | Relevance Assessment | Replacement Required |
|------------|-------------------|-------------------|----------------------|----------------------|
| mauryan_print | https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80 | Ashokan Major Rock Edict XIII Rubbing Lithograph | Generic map/chart image (same as chola_poster) - does not specifically show Ashokan edict or Brahmi rubbing | YES |
| mauryan_desk | https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80 | Chunars Sandstone Polished Desk Weight | Generic landscape/water image (same as heroImage) - does not specifically show polished sandstone or Mauryan pillar capital | YES |

## 3. Conceptual Expressions Sample Images (src/data/concepts.ts)

| Expression | Current Image URL | Associated Expression | Relevance Assessment | Replacement Required |
|------------|-------------------|----------------------|----------------------|----------------------|
| wear | https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80 | WEAR | Generic apparel image (same as maratha_apparel) - does not specifically show heritage-integrated garment design with topographic contour linings or fort-geometry stitchwork | YES |
| display | https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80 | DISPLAY | Generic map/chart image (same as chola_poster) - does not specifically show archival art prints, lithographs, or wall art with heritage motifs | YES |
| collect | https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80 | COLLECT | Generic metallic/artifact image (same as chola_token) - does not specifically show commemorative medallions, bronze castings, or historic artifacts | YES |
| explore | https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80 | EXPLORE | Generic historical document image (same as maratha_cards) - does not specifically show historical folios, timeline codices, or informational cards with heritage content | YES |
| desk | https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1200&q=80 | DESK | Generic metallic object image (same as maratha_desk) - does not specifically show desk objects, stone sculptures, or fine stationery with heritage designs | YES |

## 4. Conceptual Expressions Conceptual Visuals Images (src/data/concepts.ts)

### WEAR Expression Visuals
| Visual ID | Current Image URL | Associated Visual | Relevance Assessment | Replacement Required |
|-----------|-------------------|-------------------|----------------------|----------------------|
| Sahyadri Contour Utility Shirt | https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80 | Topographic elevation lines on apparel | Generic apparel image (same as maratha_apparel) - does not specifically show topographic contour lines or Rajgad fort embroidery | YES |
| Kaveri Monsoon Indigo Linen Tunics | https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80 | Indigo-dyed linen tunics | Generic apparel image (same as rajput_wear) - does not specifically show indigo-dyed linen or maritime sailcloth seamwork | YES |

### DISPLAY Expression Visuals
| Visual ID | Current Image URL | Associated Visual | Relevance Assessment | Replacement Required |
|-----------|-------------------|-------------------|----------------------|----------------------|
| Bay of Bengal Trade Winds Cartogram | https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80 | Monsoon winds and ancient waypoints map | Generic map/chart image (same as chola_poster) - does not specifically show trade winds cartogram or Nagapattinam-Kedah waypoints | YES |
| Ashokan Rock Edict XIII Rubbing | https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80 | Tactile relief facsimile of Brahmi epigraphy | Generic landscape/water image (same as chola heroImage) - does not specifically show Ashokan edict rubbing or Brahmi epigraphy | YES |

### COLLECT Expression Visuals
| Visual ID | Current Image URL | Associated Visual | Relevance Assessment | Replacement Required |
|-----------|-------------------|-------------------|----------------------|----------------------|
| Samudragupta Lyrist Tribute Coin | https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80 | Cast commemorative medallion | Generic metallic/artifact image (same as chola_token) - does not specifically show lyrist pose or Gupta numismatic art | YES |
| Uttaramerur Palm Ballot Commemorative Seal | https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80 | Palm leaf ballot seal token | Generic metallic object image (same as maratha_desk) - does not specifically show palm leaf ballot or Tamil-Brahmi script | YES |

### EXPLORE Expression Visuals
| Visual ID | Current Image URL | Associated Visual | Relevance Assessment | Replacement Required |
|-----------|-------------------|-------------------|----------------------|----------------------|
| Ashta Pradhan: The Architecture of Statecraft | https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80 | 8-Card Letterpress Folio Box | Generic historical document image (same as maratha_cards) - does not specifically show administrative council cards or ministerial portfolios | YES |
| Aryabhatiya Planetary Calculation Concertina | https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80 | Fold-out Accordion Codex | Generic map/chart image (same as chola_poster) - does not specifically show astronomical calculations or planetary models | YES |

### DESK Expression Visuals
| Visual ID | Current Image URL | Associated Visual | Relevance Assessment | Replacement Required |
|-----------|-------------------|-------------------|----------------------|----------------------|
| Thanjavur Octagonal Granite Capstone | https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80 | Sculptural desk weight | Generic landscape/water image (same as chola heroImage) - does not specifically show octagonal granite capstone or temple geometry | YES |
| Buranji Sanchi-Bark Notebook | https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80 | Hardbound desk journal | Generic historical document image (same as maratha_cards) - does not specifically show Sanchi-bark paper or chronicle notebook | YES |

## 5. Merchandise Pages Images

### Merchandise Landing Page (src/app/merchandise/page.tsx)
- Uses HERITAGE_WORLDS[].heroImage for each world card (covered in section 1)
- All hero images require replacement as assessed above

### World-Specific Merchandise Page (src/app/merchandise/[worldId]/page.tsx)
- Uses random Unsplash images for wear concepts grid:
  ```javascript
  style={{ backgroundImage: `url('https://images.unsplash.com/photo-${Math.floor(Math.random() * (1580000000 - 1520000000) + 1520000000)}?auto=format&fit=crop&w=800&q=80')` }}
  ```
- These are completely random images with no connection to heritage worlds or merchandise concepts
- Replacement Required: YES for all instances (6 concepts per world × 6 worlds = 36 images)

## 6. Stories Pages Images

### Story Index Page (src/app/stories/page.tsx)
- Uses HERITAGE_WORLDS[].heroImage for each world card (covered in section 1)
- All hero images require replacement as assessed above

### Individual Story Page (src/app/stories/[slug]/page.tsx)
- Uses world.heroImage for hero background (covered in section 1)
- Requires replacement as assessed above

## Summary of Images Requiring Replacement

Total images to audit: ~70+ images
Images requiring replacement: ~70+ images (essentially all current images)

Breakdown by category:
1. Heritage Worlds Hero Images: 6 images
2. Heritage Worlds Sample Concepts: 18 images (3 per world × 6 worlds)
3. Conceptual Expressions Sample Images: 5 images
4. Conceptual Expressions Conceptual Visuals: 10 images (2 per expression × 5 expressions)
5. Merchandise Pages Random Images: 36 images (6 concepts × 6 worlds)
6. Stories Pages Images: Covered in sections 1 and 2

## Replacement Guidelines per User Request

For each Heritage World, create original conceptual product mockups for:

### WEAR Category (Primary Focus):
- Premium T-shirt
- Oversized T-shirt
- Embroidered apparel
- Sweatshirt
- Jacket
- Cap
- Tote bag

### DISPLAY Category:
- Art print
- Framed print
- Historical map
- Architectural print
- Poster
- Wall artwork

### COLLECT Category:
- Heritage card
- Collector box
- Coin-inspired object
- Plaque
- Historical card set
- Decorative object

### EXPLORE Category:
- Historical cards
- Timeline
- Book
- Field guide
- Map
- Illustrated folio

### DESK Category:
- Notebook
- Journal
- Bookmark
- Desk plaque
- Paperweight
- Architectural miniature
- Stationery

## Visual Systems by Heritage World (Per User Request)

### Rajputana:
- Fort geometry
- Jharokha architecture
- Stone textures
- Architectural silhouettes
- Courtyard geometry
- Regional map forms
- Courtly manuscript-inspired layouts

### Maratha:
- Sahyadri topography
- Fort locations
- Geographic contour lines
- Historical routes
- Fort architecture
- Map-based information design

### Chola:
- Indian Ocean routes
- Temple geometry
- Bronze traditions
- Chola Maritime Field Guide

### Ahom:
- Brahmaputra landscape
- River systems
- Buranji chronicle tradition
- Statecraft
- Northeast Indian historical geography
- Resistance history

### Gupta:
- Knowledge
- Astronomy
- Mathematics
- Literature
- Art
- Coinage
- Sculpture

### Mauryan:
- Statecraft
- Administration
- Empire
- Ashokan edicts
- Historical geography

### Samudragupta Special Collection:
- Warrior + Strategist + Patron of the Arts themes

## Implementation Requirements

1. All mockups must look like professional brand photography
2. Appropriate settings for each category (e.g., studio shot for apparel, museum setting for art prints)
3. Visual consistency across entire website:
   - Similar lighting
   - Similar image quality
   - Similar framing
   - Editorial sophistication
   - Similar background treatment
   - Similar colour grading
4. Redesign concept cards to give more prominence to images (60-70% of card)
5. Integrate merchandise concepts into story pages (each Heritage World page should show relevant concept merchandise under "WHAT COULD IT BECOME?")
6. Preserve existing analytics logic
7. Keep conceptual disclaimer exactly visible
8. Final visual target: "A24 × premium Indian design studio × contemporary museum exhibition × luxury editorial"

## Next Steps

1. Begin replacing images starting with Heritage Worlds hero images
2. Then replace sample concepts images
3. Then replace conceptual expressions images
4. Fix merchandise page random images
5. Update concept card layouts to emphasize images
6. Integrate merchandise concepts into story pages