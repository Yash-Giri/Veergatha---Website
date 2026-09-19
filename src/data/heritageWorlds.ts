import { HeritageWorld } from '@/types';

export const HERITAGE_WORLDS: Record<string, HeritageWorld> = {
  chola: {
    id: 'chola',
    name: 'Chola',
    devanagariName: 'चोल साम्राज्य',
    era: 'c. 848 – 1279 CE',
    region: 'Tamilakam & The Indian Ocean Rim',
    tagline: 'Maritime Power · Trade · Architecture · Art',
    hook: 'An empire that looked beyond the shore.',
    description: 'Ruling from the fertile Kaveri delta, the Imperial Cholas turned the Bay of Bengal into a shared maritime network. They engineered thousand-year granite architecture, cast fluid lost-wax bronzes, and sustained autonomous local assemblies that redefined oceanic civilization.',
    accent: 'chola',
    accentHex: '#B07D33',
    accentBg: '#FBF6EE',
    accentBorder: '#E3C89C',
    heroImage: '/images/heritage/chola/hero-oceanic-maritime-network-chola.jpg',
    editorialQuote: 'The Cholas did not merely sail the sea; they chartered sovereign trade corridors across the Strait of Malacca, uniting peninsular India with Southeast Asian realms through trade, art, and statecraft.',
    dimensions: [
      {
        id: 'chola_maritime',
        title: 'Maritime Expeditions',
        subtitle: 'The Indian Ocean Network',
        shortHook: 'Under Rajendra Chola I, the Chola armada traversed the Bay of Bengal to secure crucial oceanic trade routes through the Strait of Malacca and Sri Lanka.',
        deepRead: 'In the 11th century, Chola maritime fleets engaged the maritime kingdom of Srivijaya. Unlike standard conquests, these expeditions safeguarded trans-oceanic merchant guilds (such as the Manigramam and Ayyavole 500) who carried spices, silk, and sacred bronzes across modern-day Indonesia, Malaysia, and coastal China. Maritime logistics transformed ports like Nagapattinam into vibrant cosmopolitan hubs.',
        keyTakeaway: 'Oceanic trade statecraft that prioritized merchant guild freedom and international maritime security.',
        sources: [
          {
            authorOrBody: 'K.A. Nilakanta Sastri',
            title: 'The Colas',
            yearOrRef: 'University of Madras, 1955',
            institution: 'University of Madras Heritage Repository',
            notes: 'Primary scholarly authority on Chola naval expeditions and Srivijaya records.'
          },
          {
            authorOrBody: 'Noboru Karashima',
            title: 'Ancient and Medieval Commercial Activities in the Indian Ocean',
            yearOrRef: 'Oxford University Press, 2002',
            institution: 'Tokyo University / OUP'
          }
        ]
      },
      {
        id: 'chola_architecture',
        title: 'Monumental Granite',
        subtitle: 'The Brihadisvara Engineering',
        shortHook: 'Rajaraja I built the Brihadisvara Temple at Thanjavur: an engineering feat rising 66 meters, topped with an 80-tonne monolithic granite cupola.',
        deepRead: 'Constructed completely from hard granite in a region with no local stone quarries, the Brihadisvara temple stands as a testament to interlocking dry-stone masonry. It served not only as a spiritual sanctuary but as a vast civic nerve center supporting dancers, musicians, administrators, and treasuries with precision accounting inscribed directly into its plinth walls.',
        keyTakeaway: 'Granite architecture engineered without mortar to endure for over a millennium as both sanctuary and civic treasury.',
        sources: [
          {
            authorOrBody: 'Archaeological Survey of India (ASI)',
            title: 'Brihadisvara Temple, Thanjavur: Monument Monograph',
            yearOrRef: 'World Heritage Site Documentation #250',
            institution: 'UNESCO & ASI Archives'
          }
        ]
      },
      {
        id: 'chola_bronze',
        title: 'Lost-Wax Bronze Casting',
        subtitle: 'The Cosmic Nataraja & Sacred Forms',
        shortHook: 'Chola master metalworkers perfected the cire-perdue (lost-wax) technique, sculpting bronzes with fluid poise, spiritual kinetic balance, and anatomical elegance.',
        deepRead: 'The Chola casting technique produced iconic forms like the Nataraja (Lord of Dance), balancing cosmic creation and dissolution inside an arch of flames. Each sculpture was unique: once cast in molten bronze, the clay mold was cracked open, meaning no two bronzes were ever identical. Auguste Rodin famously remarked that the Chola Nataraja captured the ultimate rhythm of life.',
        keyTakeaway: 'Mastery of lost-wax metallurgy blending theological precision with timeless geometric balance.',
        sources: [
          {
            authorOrBody: 'Ananda K. Coomaraswamy',
            title: 'The Dance of Shiva: Fourteen Indian Essays',
            yearOrRef: 'Sunwise Turn, 1918',
            institution: 'Metropolitan Museum of Art Reference Library'
          }
        ]
      },
      {
        id: 'chola_administration',
        title: 'Uttaramerur Assemblies',
        subtitle: 'Grassroots Democratic Governance',
        shortHook: 'The 10th-century Uttaramerur inscriptions document an autonomous democratic village electoral system with secret ballots, qualifications, and disqualification rules.',
        deepRead: 'Carved upon the stone walls of the Vaikunta Perumal temple in Uttaramerur, these edicts detail the Kudavolai system. Palm-leaf ballots were cast into pots in the presence of assemblies. Candidates were strictly evaluated on moral conduct, property transparency, and administrative competence, while those failing to submit audits were barred from future governance.',
        keyTakeaway: 'Rigorous electoral and fiscal accountability carved into stone centuries before modern parliamentary models.',
        sources: [
          {
            authorOrBody: 'Epigraphia Indica',
            title: 'Uttaramerur Inscriptions of Parantaka I (Vol. XXII)',
            yearOrRef: 'Archaeological Survey of India, 1933',
            institution: 'Government Epigraphist Archives, Mysore'
          }
        ]
      }
    ],
    themes: ['Exploration', 'Leadership', 'Innovation', 'Art & culture', 'Statecraft'],
    sampleConcepts: [
      {
        id: 'chola_poster',
        worldId: 'chola',
        title: 'Oceanic Waypoints: Bay of Bengal Maritime Chart',
        category: 'display',
        categoryLabel: 'Art Print',
        tagline: 'Archival stone-lithograph print',
        description: 'Archival cotton paper lithograph tracing 11th-century monsoon trade corridors and merchant guild navigational stars across the Indian Ocean.',
        conceptualMedium: 'Screenprinted on 310gsm Hahnemühle cotton rag',
        imageUrl: '/images/heritage/chola/concept-oceanic-trade-routes-map-chola.jpg',
        colorHex: '#B07D33'
      },
      {
        id: 'chola_token',
        worldId: 'chola',
        title: 'Kudavolai Ballot Commemorative Palm Token',
        category: 'collect',
        categoryLabel: 'Collectible',
        tagline: 'Lost-wax bronze casting',
        description: 'A pocket-sized bronze casting honoring the transparent democratic voting inscriptions of 10th-century Uttaramerur.',
        conceptualMedium: 'Cold-cast bell metal bronze with antique patina',
        imageUrl: '/images/heritage/chola/concept-uttaramerur-democracy-token-chola.jpg',
        colorHex: '#82581A'
      },
      {
        id: 'chola_desk',
        worldId: 'chola',
        title: 'Brihadisvara Monolith Granite Paperweight',
        category: 'desk',
        categoryLabel: 'Desk Object',
        tagline: 'Hand-carved architectural stone',
        description: 'Solid grey granite carved to reflect the octagonal geometry of the Thanjavur Vimana capstone.',
        conceptualMedium: 'Honed Indian Black & Grey Granite',
        imageUrl: '/images/heritage/chola/concept-brihadisvara-capstone-paperweight-chola.jpg',
        colorHex: '#B07D33'
      }
    ],
    sources: [
      {
        authorOrBody: 'Prof. K.A. Nilakanta Sastri',
        title: 'The Colas (Complete Edition)',
        yearOrRef: '1955',
        institution: 'University of Madras'
      },
      {
        authorOrBody: 'Archaeological Survey of India',
        title: 'Epigraphia Indica & Annual Reports on Indian Epigraphy',
        yearOrRef: '1890-1980',
        institution: 'Ministry of Culture, Government of India'
      }
    ]
  },

  maratha: {
    id: 'maratha',
    name: 'Maratha',
    devanagariName: 'मराठा साम्राज्य',
    era: 'c. 1674 – 1818 CE',
    region: 'Western Ghats, Deccan & Central India',
    tagline: 'Swarajya · Forts · Statecraft · Military Innovation',
    hook: 'The architecture of Swarajya.',
    description: 'Forged amidst the rugged basalt peaks of the Sahyadris, the Maratha polity was anchored in Chhatrapati Shivaji’s vision of Hindavi Swarajya—self-rule founded upon ethical governance, indigenous maritime defense, and revolutionary guerrilla warfare.',
    accent: 'maratha',
    accentHex: '#D97706',
    accentBg: '#FEF8EE',
    accentBorder: '#F6CD96',
    heroImage: '/images/heritage/maratha/hero-sahyadri-fort-network-maratha.jpg',
    editorialQuote: 'Shivaji understood that sovereignty did not live in royal courts alone; it resided in basalt hillforts, agrarian discipline, and a fleet that safeguarded the Konkan coastline from imperial dominance.',
    dimensions: [
      {
        id: 'maratha_swarajya',
        title: 'The Swarajya Philosophy',
        subtitle: 'Ethical Governance & Meritocracy',
        shortHook: 'Chhatrapati Shivaji established Hindavi Swarajya not as personal conquest, but as ethical public welfare governed by the Ashta Pradhan council of ministers.',
        deepRead: 'At the heart of the Maratha rise was the Ashta Pradhan—a council of eight dedicated ministers handling finances, foreign policy, justice, and defense. Shivaji abolished hereditary jagir land grants to prevent feudal corruption, instituted cash salaries for soldiers, and enforced strict protection of agrarian peasants and captured civilians during warfare.',
        keyTakeaway: 'A meritocratic administration breaking feudal monopolies to champion people-centered governance.',
        sources: [
          {
            authorOrBody: 'Sir Jadunath Sarkar',
            title: 'Shivaji and His Times',
            yearOrRef: 'M.C. Sarkar & Sons, 1919',
            institution: 'National Archives of India Reference'
          }
        ]
      },
      {
        id: 'maratha_forts',
        title: 'Basalt Citadel Network',
        subtitle: 'Sahyadri Topographical Mastery',
        shortHook: 'Over 300 hill and sea forts formed an interconnected defense spine that transformed rugged mountain geography into an impregnable fortress system.',
        deepRead: 'Citadels like Raigad, Rajgad, Torna, and Sinhagad utilized sheer volcanic basalt cliffs as natural battlements. Water retention cisterns cut into solid rock allowed garrisons to withstand multi-year sieges, while narrow ridge pathways forced enemy columns into natural choke points.',
        keyTakeaway: 'Architectural engineering tuned precisely to terrain and defensive hydraulic resilience.',
        sources: [
          {
            authorOrBody: 'Govind Sakharam Sardesai',
            title: 'New History of the Marathas',
            yearOrRef: 'Phoenix Publications, 1946',
            institution: 'Deccan College Post-Graduate and Research Institute'
          }
        ]
      },
      {
        id: 'maratha_navy',
        title: 'The Western Naval Defense',
        subtitle: 'Kanhoji Angre & Ocean Fortresses',
        shortHook: 'Under Admiral Kanhoji Angre, the Maratha Navy dominated the Konkan coastline from coastal sea forts like Sindhudurg and Vijaydurg.',
        deepRead: 'Shivaji recognized early that "He who commands the sea rules the land." The Marathas built sea-citadels with lead-melted foundations like Sindhudurg and fielded agile shallow-draft vessels (Galbats and Gurabs) that could navigate tidal estuaries to outmaneuver heavy European colonial galleons.',
        keyTakeaway: 'Pioneering indigenous maritime defense capable of repelling major naval powers for decades.',
        sources: [
          {
            authorOrBody: 'B.K. Apte',
            title: 'A History of the Maratha Navy and Merchantships',
            yearOrRef: 'State Board for Literature and Culture, Maharashtra, 1973',
            institution: 'University of Bombay'
          }
        ]
      },
      {
        id: 'maratha_tactics',
        title: 'Ganimi Kava Warfare',
        subtitle: 'The Doctrine of Asymmetric Strategy',
        shortHook: 'Ganimi Kava (guerrilla warfare) prioritized rapid cavalry mobility, precise reconnaissance, and deception over static head-on battlefield clashes.',
        deepRead: 'Operating on hardy Deccan ponies and traveling light with minimal baggage trains, Maratha detachments struck supply lines and vanished into mountain passes before larger conventional imperial armies could organize defensive lines. It fundamentally altered subcontinental military science.',
        keyTakeaway: 'Tactical asymmetry converting geographical familiarity into overwhelming strategic leverage.',
        sources: [
          {
            authorOrBody: 'Stewart Gordon',
            title: 'The Marathas 1600–1818 (New Cambridge History of India)',
            yearOrRef: 'Cambridge University Press, 1993',
            institution: 'Cambridge University'
          }
        ]
      }
    ],
    themes: ['Warrior spirit', 'Strategy', 'Statecraft', 'Leadership', 'Legacy'],
    sampleConcepts: [
      {
        id: 'maratha_apparel',
        worldId: 'maratha',
        title: 'Sahyadri Topography Heavyweight Overshirt',
        category: 'wear',
        categoryLabel: 'Apparel',
        tagline: 'Dyed canvas field jacket',
        description: 'Structured unbleached cotton twill jacket featuring contour line cartography of the Raigad escarpment stitched into interior yoke.',
        conceptualMedium: '14oz organic cotton canvas, vegetable dye wash',
        imageUrl: '/images/heritage/maratha/concept-sahyadri-contour-overshirt-maratha.jpg',
        colorHex: '#D97706'
      },
      {
        id: 'martha_cards',
        worldId: 'maratha',
        title: 'Ashta Pradhan: Governance Strategy Cards',
        category: 'explore',
        categoryLabel: 'Historical Cards',
        tagline: 'Archival boxed folio set',
        description: 'Eight illustrated informational cards exploring the responsibilities, edicts, and fiscal balance of Shivaji’s premier council.',
        conceptualMedium: 'Letterpress on antique board with linen slipcase',
        imageUrl: '/images/heritage/maratha/concept-ashta-pradhan-strategy-cards-maratha.jpg',
        colorHex: '#A15303'
      },
      {
        id: 'maratha_desk',
        worldId: 'maratha',
        title: 'Sindhudurg Bastion Cast Brass Seal',
        category: 'desk',
        categoryLabel: 'Desk Object',
        tagline: 'Hand-finished brass paperweight',
        description: 'Solid raw brass faceted paperweight replicating the five-sided marine bastions of the Sindhudurg island fortress.',
        conceptualMedium: 'Machined & sand-cast naval brass',
        imageUrl: '/images/heritage/maratha/concept-sindhudurg-bastion-seal-maratha.jpg',
        colorHex: '#D97706'
      }
    ],
    sources: [
      {
        authorOrBody: 'Sir Jadunath Sarkar',
        title: 'Shivaji and His Times',
        yearOrRef: '1919',
        institution: 'Calcutta University'
      },
      {
        authorOrBody: 'Stewart Gordon',
        title: 'The Marathas 1600–1818',
        yearOrRef: '1993',
        institution: 'Cambridge University Press'
      }
    ]
  },

  rajputana: {
    id: 'rajputana',
    name: 'Rajputana',
    devanagariName: 'राजपूताना',
    era: 'c. 7th – 18th Century CE',
    region: 'Thar Desert, Mewar & Aravalli Ranges',
    tagline: 'Warrior Traditions · Forts · Resistance · Courtly Culture',
    hook: 'Stone, valor, and enduring resistance.',
    description: 'Rising from the golden sands of Rajasthan and the cliffs of Mewar, Rajputana cultivated architectural grandeur and heroic chivalry. Their massive citadels, intricate stepwells, and miniature painting schools created a vibrant culture where defiance and delicate poetry existed side-by-side.',
    accent: 'rajputana',
    accentHex: '#C15332',
    accentBg: '#FDF4F0',
    accentBorder: '#E8B6A7',
    heroImage: '/images/heritage/rajputana/hero-mewar-fortress-rajputana.jpg',
    editorialQuote: 'Rajput architecture was an oath carved into sandstone—fortresses that rose like extensions of natural cliffs, sheltering vibrant ateliers of miniature art, poetry, and civic memory.',
    dimensions: [
      {
        id: 'rajput_forts',
        title: 'Hill Forts of Rajasthan',
        subtitle: 'Living Citadel Architecture',
        shortHook: 'The UNESCO-listed hill forts of Chittorgarh, Kumbhalgarh, and Mehrangarh stand as masterclasses in sandstone masonry and defensive perimeter design.',
        deepRead: 'Kumbhalgarh boasts the second-longest continuous wall in the world (over 36 kilometers long). Built by Rana Kumbha, these forts integrated entire communities, agricultural terraces, and water harvesting reservoirs within their gates, allowing independent survival through multi-month blockades.',
        keyTakeaway: 'Fortresses conceived as complete self-sustaining civic habitats built atop sheer rocky crests.',
        sources: [
          {
            authorOrBody: 'UNESCO World Heritage Centre',
            title: 'Hill Forts of Rajasthan (Nomination Dossier 247rev)',
            yearOrRef: 'UNESCO, 2013',
            institution: 'UNESCO Archives'
          }
        ]
      },
      {
        id: 'rajput_resistance',
        title: 'Mewar’s Enduring Resistance',
        subtitle: 'Maharana Pratap & Haldighati',
        shortHook: 'Maharana Pratap chose exile in the Aravalli hills over imperial subjugation, organizing tribal Bhil allies into a resilient mountain resistance movement.',
        deepRead: 'Refusing diplomatic compromises that demanded vassalage, Pratap operated from the forests of Chavand. By uniting with indigenous Bhil archers who knew every defile of the Aravalli hills, Mewar sustained an asymmetric campaign that recaptured most of its ancestral lands before his passing.',
        keyTakeaway: 'Uncompromising defense of regional autonomy powered by inter-community tribal solidarity.',
        sources: [
          {
            authorOrBody: 'James Tod',
            title: 'Annals and Antiquities of Rajast’han',
            yearOrRef: 'Smith, Elder and Co., 1829',
            institution: 'Royal Asiatic Society of Great Britain and Ireland'
          }
        ]
      },
      {
        id: 'rajput_art',
        title: 'Miniature Painting Schools',
        subtitle: 'Mewar, Kishangarh & Bundi Ateliers',
        shortHook: 'Rajput court artists developed distinct regional visual idioms using crushed lapis lazuli, gold leaf, and malachite to illuminate epic poems and seasonal moods.',
        deepRead: 'Unlike classical imperial realism, Rajput miniatures emphasized intense emotional landscapes, stylized lotus eyes, and symbolic color palettes. Ateliers in Kishangarh (famed for Bani Thani) and Bundi captured the Ragamala series, uniting classical musical modes with painterly lyricism.',
        keyTakeaway: 'Delicate artistic mastery balancing courtly elegance with expressive spiritual vibrancy.',
        sources: [
          {
            authorOrBody: 'B.N. Goswamy',
            title: 'The Spirit of Indian Painting: Close Encounters with 101 Great Works',
            yearOrRef: 'Penguin Books, 2014',
            institution: 'Panjab University'
          }
        ]
      }
    ],
    themes: ['Warrior spirit', 'Art & culture', 'Legacy', 'Leadership', 'Strategy'],
    sampleConcepts: [
      {
        id: 'rajput_print',
        worldId: 'rajputana',
        title: 'Kumbhalgarh Bastion Architectural Elevation',
        category: 'display',
        categoryLabel: 'Art Print',
        tagline: 'Fine art copperplate lithograph',
        description: 'Detailed architectural drawing of the massive thirty-six kilometer perimeter bastion and stepped battlements.',
        conceptualMedium: 'Archival deckle-edge paper print',
        imageUrl: '/images/heritage/rajputana/concept-kumbhalgarh-fort-elevation-rajputana.jpg',
        colorHex: '#C15332'
      },
      {
        id: 'rajput_wear',
        worldId: 'rajputana',
        title: 'Mewar Sandstone Relaxed Linen Shirt',
        category: 'wear',
        categoryLabel: 'Apparel',
        tagline: 'Handloom linen silhouette',
        description: 'Breathable desert-sand tone handspun linen shirt with concealed placket and subtle geometric Aravalli fort embroidery.',
        conceptualMedium: '100% Belgian flax linen, natural earth wash',
        imageUrl: '/images/heritage/rajputana/concept-mewar-linen-work-shirt-rajputana.jpg',
        colorHex: '#9B391C'
      }
    ],
    sources: [
      {
        authorOrBody: 'James Tod',
        title: 'Annals and Antiquities of Rajasthan (Vols I & II)',
        yearOrRef: '1829',
        institution: 'Royal Asiatic Society'
      },
      {
        authorOrBody: 'B.N. Goswamy',
        title: 'Essays on Rajput Miniature Painting',
        yearOrRef: '1999',
        institution: 'National Museum New Delhi'
      }
    ]
  },

  ahom: {
    id: 'ahom',
    name: 'Ahom',
    devanagariName: 'आहोम साम्राज्य',
    era: 'c. 1228 – 1826 CE',
    region: 'Brahmaputra Valley, Assam & Northeast India',
    tagline: 'Resistance · Statecraft · Military History · Northeast India',
    hook: 'Six centuries of unbroken sovereignty.',
    description: 'Ruling the emerald Brahmaputra valley for nearly 600 years, the Ahom kingdom successfully repelled seventeen major imperial invasions. Led by leaders like Lachit Borphukan, they combined naval river tactics, systematic state mobilization through the Paik system, and the meticulous Buranji chronicle tradition.',
    accent: 'ahom',
    accentHex: '#2A634B',
    accentBg: '#EEF7F2',
    accentBorder: '#9DCBB5',
    heroImage: '/images/heritage/ahom/hero-brahmaputra-valley-ahom.jpg',
    editorialQuote: 'The Ahoms proved that victory against massive armies lay in river currents, earthen ramparts, and an unbending conviction that duty to homeland superseded all personal kinship.',
    dimensions: [
      {
        id: 'ahom_saraighat',
        title: 'The Battle of Saraighat',
        subtitle: 'Lachit Borphukan & River Naval Warfare',
        shortHook: 'In 1671, General Lachit Borphukan defeated a numerically superior imperial force on the waters of the Brahmaputra at Saraighat through sheer naval tactical mastery.',
        deepRead: 'Battling personal illness, Lachit rallied his fleet of agile river boats (bacharis) across the narrowest stretch of the Brahmaputra near modern Guwahati. By luring the enemy’s heavy ships into mud shoals and coordinating earthen fortification ramparts on the riverbanks, the Ahoms achieved one of the greatest river battles in global history.',
        keyTakeaway: 'Riverine naval combat exploiting hydrological dynamics to shatter imperial expansion.',
        sources: [
          {
            authorOrBody: 'Surya Kumar Bhuyan',
            title: 'Lachit Barphukan and His Times',
            yearOrRef: 'Department of Historical and Antiquarian Studies, Assam, 1947',
            institution: 'Guwahati University Archives'
          }
        ]
      },
      {
        id: 'ahom_buranjis',
        title: 'The Buranji Chronicles',
        subtitle: 'An Unbroken Tradition of Written History',
        shortHook: 'The Ahoms maintained Buranjis: official, highly detailed historical prose chronicles recording diplomacy, court debates, wars, and daily governance for centuries.',
        deepRead: 'Unlike many ancient courts that recorded history through mythologized poetry, Buranjis were written in clear, precise prose—first in the Tai-Ahom language and later in Assamese. Scribes recorded exact dates, diplomatic correspondence, administrative appointments, and military maneuvers on Sanchi-bark manuscripts.',
        keyTakeaway: 'One of the world’s most systematic and honest indigenous traditions of continuous historiography.',
        sources: [
          {
            authorOrBody: 'Edward Gait',
            title: 'A History of Assam',
            yearOrRef: 'Thacker, Spink & Co., 1906',
            institution: 'Government of Eastern Bengal and Assam'
          }
        ]
      },
      {
        id: 'ahom_paik',
        title: 'The Paik Administration',
        subtitle: 'Universal Civic & Engineering Mobilization',
        shortHook: 'Every adult male was part of the Paik system, providing rotation-based labor for public dykes, stone bridges, rice terraces, and defensive militias.',
        deepRead: 'The Paik system made the kingdom remarkably resilient. During peacetime, teams of four citizens (a got) rotated so three farmed and sustained families while one constructed massive flood-control bunds or state infrastructure. In wartime, the entire society could mobilize rapidly without depending on costly mercenaries.',
        keyTakeaway: 'Sophisticated public works mobilization transforming floodplains into fertile agrarian security.',
        sources: [
          {
            authorOrBody: 'Amalendu Guha',
            title: 'Medieval and Early Colonial Assam: Society, Polity, Economy',
            yearOrRef: 'K.P. Bagchi & Co., 1991',
            institution: 'Centre for Studies in Social Sciences, Calcutta'
          }
        ]
      }
    ],
    themes: ['Resistance', 'Strategy', 'Statecraft', 'Innovation', 'Legacy'],
    sampleConcepts: [
      {
        id: 'ahom_folio',
        worldId: 'ahom',
        title: 'Buranji Sanchi-Bark Style Journal',
        category: 'desk',
        categoryLabel: 'Stationery',
        tagline: 'Bound handmade botanical paper notebook',
        description: 'Hardcover journal bound with tea-dyed handloom fabric, containing acid-free bark-textured paper inspired by 16th-century Ahom chronicles.',
        conceptualMedium: 'Botanical paper with natural indigo stitching',
        imageUrl: '/images/heritage/ahom/concept-buranji-chronicle-journal-ahom.jpg',
        colorHex: '#2A634B'
      },
      {
        id: 'ahom_print',
        worldId: 'ahom',
        title: 'Saraighat River Navigational Defile Print',
        category: 'display',
        categoryLabel: 'Art Print',
        tagline: 'Topographical hydro-graphic chart',
        description: 'Detailed cartographic depiction of the Brahmaputra river bend at Saraighat illustrating the 1671 tactical positioning.',
        conceptualMedium: 'Two-color letterpress on archival cotton paper',
        imageUrl: '/images/heritage/ahom/concept-saraighat-river-navigation-chart-ahom.jpg',
        colorHex: '#1C4533'
      }
    ],
    sources: [
      {
        authorOrBody: 'Sir Edward Gait',
        title: 'A History of Assam',
        yearOrRef: '1906',
        institution: 'Calcutta Archives'
      },
      {
        authorOrBody: 'Dr. Surya Kumar Bhuyan',
        title: 'Anglo-Assamese Relations and Studies in the Literature of Assam',
        yearOrRef: '1949',
        institution: 'Guwahati Historical Society'
      }
    ]
  },

  gupta: {
    id: 'gupta',
    name: 'Gupta',
    devanagariName: 'गुप्त साम्राज्य',
    era: 'c. 319 – 550 CE',
    region: 'Gangetic Plains, Malwa & Northern India',
    tagline: 'Arts · Science · Knowledge · Empire · Culture',
    hook: 'The golden confluence of science, art, and statecraft.',
    description: 'A celebrated era of philosophical inquiry, mathematical discovery, and refined artistic poise. The Gupta age witnessed the birth of the decimal system and zero, the immortal poetry of Kalidasa, astronomical treatises by Aryabhata, and masterworks of metallurgy like the rustless Iron Pillar.',
    accent: 'gupta',
    accentHex: '#BFA047',
    accentBg: '#FCF8EE',
    accentBorder: '#E8D499',
    heroImage: '/images/heritage/gupta/hero-knowledge-empire-gupta.jpg',
    editorialQuote: 'The Gupta age demonstrated that civilizational zenith is measured not by conquest alone, but by mathematics, astronomical insight, and art that captures the serene stillness of the inner human spirit.',
    dimensions: [
      {
        id: 'gupta_science',
        title: 'Aryabhata & Scientific Thought',
        subtitle: 'The Mathematics of the Cosmos',
        shortHook: 'In 499 CE, Aryabhata authored the Aryabhatiya, calculating the value of pi, proposing that the Earth rotates on its axis, and explaining eclipses scientifically.',
        deepRead: 'The Gupta period established institutions where mathematics, metallurgy, and astronomy flourished. Aryabhata approximated pi to four decimal places (3.1416) and recognized that apparent celestial movement was caused by the Earth’s own axial rotation, establishing foundations for computational trigonometry.',
        keyTakeaway: 'Rigorous empirical mathematics explaining planetary cycles with unprecedented precision.',
        sources: [
          {
            authorOrBody: 'George Gheverghese Joseph',
            title: 'The Crest of the Peacock: Non-European Roots of Mathematics',
            yearOrRef: 'Princeton University Press, 2011',
            institution: 'Princeton University'
          }
        ]
      },
      {
        id: 'gupta_coinage',
        title: 'Imperial Gold Coinage',
        subtitle: 'The Dinars of Samudragupta & Chandragupta II',
        shortHook: 'Gupta gold dinars achieved unmatched numismatic beauty, depicting monarchs as poets, lute (veena) players, and archers with metrical Sanskrit legends.',
        deepRead: 'The Prayaga Prashasti inscription on the Allahabad pillar describes Samudragupta as both a military strategist and a patron of musicians. His gold coins reflect this dual identity: the "Lyrist type" shows the king seated on a high-backed couch playing the veena, symbolizing intellectual cultivation alongside sovereign power.',
        keyTakeaway: 'High-purity gold coinage balancing imperial strength with refined artistic sensitivity.',
        sources: [
          {
            authorOrBody: 'P.L. Gupta',
            title: 'Coins (India: The Land and the People)',
            yearOrRef: 'National Book Trust, 1969',
            institution: 'National Museum Numismatics Division'
          }
        ]
      },
      {
        id: 'gupta_metallurgy',
        title: 'The Iron Pillar of Delhi',
        subtitle: 'Sixteen Centuries of Rustless Metallurgy',
        shortHook: 'Standing over seven meters tall, this 4th-century wrought-iron pillar has withstood sixteen centuries of tropical weathering without corroding.',
        deepRead: 'Forged during the reign of Chandragupta II Vikramaditya, the pillar demonstrates an advanced mastery of forge-welding and high-phosphorus iron chemistry. A protective crystalline film (misawite) formed on the surface, sealing the core against oxidation—a metallurgy standard that baffled early modern scientists.',
        keyTakeaway: 'Mastery of chemical metallurgy producing rustless wrought iron enduring through sixteen centuries.',
        sources: [
          {
            authorOrBody: 'R. Balasubramaniam',
            title: 'Delhi Iron Pillar: New Insights',
            yearOrRef: 'Indian Institute of Advanced Study & Aryan Books, 2002',
            institution: 'IIT Kanpur Department of Materials and Metallurgical Engineering'
          }
        ]
      }
    ],
    themes: ['Innovation', 'Art & culture', 'Statecraft', 'Leadership', 'Legacy'],
    sampleConcepts: [
      {
        id: 'gupta_token',
        worldId: 'gupta',
        title: 'Samudragupta Lyrist Gold-Finish Medallion',
        category: 'collect',
        categoryLabel: 'Collectible',
        tagline: 'High-relief commemorative piece',
        description: 'A tactile commemorative medallion casting Samudragupta playing the seven-stringed veena in classical Gupta relief.',
        conceptualMedium: 'Antique brass with brushed gold electroplate',
        imageUrl: '/images/heritage/gupta/concept-samudragupta-lyrist-medallion-gupta.jpg',
        colorHex: '#BFA047'
      },
      {
        id: 'gupta_timeline',
        worldId: 'gupta',
        title: 'Aryabhatiya Astronomical Coordinate Folio',
        category: 'explore',
        categoryLabel: 'Historical Cards',
        tagline: 'Concertina accordion timeline',
        description: 'Accordion fold-out folio mapping the mathematical constants, sine tables, and planetary models developed in 5th-century Pataliputra.',
        conceptualMedium: 'Letterpress on heavy warm cream paper',
        imageUrl: '/images/heritage/gupta/concept-aryabhatiya-astronomy-folio-gupta.jpg',
        colorHex: '#8B7127'
      }
    ],
    sources: [
      {
        authorOrBody: 'R.C. Majumdar & A.S. Altekar',
        title: 'The Vakataka-Gupta Age',
        yearOrRef: 'Motilal Banarsidass, 1946',
        institution: 'Bharatiya Itihas Samiti'
      },
      {
        authorOrBody: 'Upinder Singh',
        title: 'A History of Ancient and Early Medieval India',
        yearOrRef: 'Pearson, 2008',
        institution: 'University of Delhi'
      }
    ]
  },

  mauryan: {
    id: 'mauryan',
    name: 'Mauryan',
    devanagariName: 'मौर्य साम्राज्य',
    era: 'c. 322 – 185 BCE',
    region: 'Pan-Subcontinental, Pataliputra & Magadha',
    tagline: 'Strategy · Administration · Empire · Statecraft',
    hook: 'The foundations of subcontinental statecraft.',
    description: 'The first pan-subcontinental empire united by Chandragupta Maurya and codified through Chanakya’s Arthashastra. Under Ashoka the Great, it transformed imperial authority from raw conquest to moral statecraft (Dhamma), inscribing human rights and environmental protection across thousands of miles of polished stone.',
    accent: 'mauryan',
    accentHex: '#726456',
    accentBg: '#F6F3EF',
    accentBorder: '#C5B9AC',
    heroImage: '/images/heritage/mauryan/hero-pataliputra-administration-mauryan.jpg',
    editorialQuote: 'The Mauryas built the intellectual armature of Indian statecraft—balancing the sharp realpolitik of Kautilya with Ashoka’s unprecedented vision of state authority grounded in moral conscience.',
    dimensions: [
      {
        id: 'mauryan_arthashastra',
        title: 'Chanakya & The Arthashastra',
        subtitle: 'The Science of Political Economy',
        shortHook: 'Authored by Kautilya (Chanakya), the Arthashastra remains one of humanity’s foundational treatises on statecraft, intelligence networks, taxation, and economic sovereignty.',
        deepRead: 'The Arthashastra was fundamentally pragmatic. Chanakya analyzed the saptanga (seven limbs) of sovereignty: the king, the minister, the countryside, the fortified city, the treasury, the army, and the ally. He advocated that state wealth was rooted in agricultural productivity and strictly regulated trade standards.',
        keyTakeaway: 'The ancient world’s most comprehensive systematic treatise on political economy and governance.',
        sources: [
          {
            authorOrBody: 'R. Shamasastry (Translator)',
            title: 'Kautilya’s Arthashastra',
            yearOrRef: 'Government Press Bangalore, 1915',
            institution: 'Oriental Research Institute, Mysore'
          },
          {
            authorOrBody: 'Patrick Olivelle',
            title: 'King, Governance, and Law in Ancient India: Kautilya’s Arthashastra',
            yearOrRef: 'Oxford University Press, 2013',
            institution: 'Oxford University'
          }
        ]
      },
      {
        id: 'mauryan_edicts',
        title: 'Ashokan Edicts & Dhamma',
        subtitle: 'Human Rights Carved in Stone',
        shortHook: 'Ashoka inscribed thirty-three royal edicts across cliffs and polished sandstone pillars from Afghanistan to Karnataka, proclaiming non-violence and social welfare.',
        deepRead: 'Following the devastating Kalinga war, Ashoka renounced conquest by sword (digvijaya) in favor of conquest by moral persuasion (dharmavijaya). Written in Prakrit, Greek, and Aramaic in Brahmi script, the edicts ordered hospitals for humans and animals, the planting of shade trees along roads, and respect across differing faiths.',
        keyTakeaway: 'An unprecedented state proclamation substituting imperial aggression with ethics and environmental care.',
        sources: [
          {
            authorOrBody: 'Romila Thapar',
            title: 'Asoka and the Decline of the Mauryas',
            yearOrRef: 'Oxford University Press, 1961',
            institution: 'Jawaharlal Nehru University'
          }
        ]
      },
      {
        id: 'mauryan_pataliputra',
        title: 'Pataliputra Administration',
        subtitle: 'Megasthenes’ Account of Imperial Urbanism',
        shortHook: 'The Greek ambassador Megasthenes recorded Pataliputra as a grand walled metropolis governed by municipal boards overseeing trade, birth records, and public safety.',
        deepRead: 'Stretching along the confluence of the Ganga and Son rivers, Pataliputra was defended by sixty-four gates and hundreds of timber towers. Six municipal boards of five members each managed city affairs: manufacturing standards, monitoring foreigner welfare, recording births and deaths, and preventing marketplace fraud.',
        keyTakeaway: 'Sophisticated municipal civic administration matching the scale of Hellenistic capitals.',
        sources: [
          {
            authorOrBody: 'J.W. McCrindle',
            title: 'Ancient India as Described by Megasthenes and Arrian',
            yearOrRef: 'Thacker, Spink & Co., 1877',
            institution: 'British Library Asian Collections'
          }
        ]
      }
    ],
    themes: ['Strategy', 'Leadership', 'Statecraft', 'Innovation', 'Legacy'],
    sampleConcepts: [
      {
        id: 'mauryan_print',
        worldId: 'mauryan',
        title: 'Ashokan Major Rock Edict XIII Rubbing Lithograph',
        category: 'display',
        categoryLabel: 'Art Print',
        tagline: 'Archival epigraphical print',
        description: 'Crisp facsimile print documenting the Brahmi characters of Major Rock Edict XIII renouncing violence after the Kalinga campaign.',
        conceptualMedium: 'Charcoal relief on unbleached handmade paper',
        imageUrl: '/images/heritage/mauryan/concept-ashokan-rock-edict-xiii-mauryan.jpg',
        colorHex: '#726456'
      },
      {
        id: 'mauryan_desk',
        worldId: 'mauryan',
        title: 'Chunars Sandstone Polished Desk Weight',
        category: 'desk',
        categoryLabel: 'Desk Object',
        tagline: 'Mirror-polished buff sandstone',
        description: 'Smooth rounded desk stone referencing the renowned glass-like polish unique to 3rd-century BCE Mauryan pillar capitals.',
        conceptualMedium: 'Natural Chunar-quarried sandstone',
        imageUrl: '/images/heritage/mauryan/concept-chunar-sandstone-desk-weight-mauryan.jpg',
        colorHex: '#4F4439'
      }
    ],
    sources: [
      {
        authorOrBody: 'Romila Thapar',
        title: 'The Mauryas Revisited',
        yearOrRef: 'K.P. Bagchi & Co., 1987',
        institution: 'Centre for Historical Studies, JNU'
      },
      {
        authorOrBody: 'Upinder Singh',
        title: 'Political Violence in Ancient India',
        yearOrRef: 'Harvard University Press, 2017',
        institution: 'Harvard University'
      }
    ]
  }
};

export const HERITAGE_WORLDS_LIST: HeritageWorld[] = Object.values(HERITAGE_WORLDS);

export const COMING_SOON_WORLDS = [
  { name: 'Vijayanagara', region: 'Deccan & Hampi', hook: 'The city of victory and architectural renaissance.' },
  { name: 'Satavahana', region: 'Deccan & Western Ghats', hook: 'Pioneers of Indian Ocean trade and Amaravati Buddhist art.' },
  { name: 'Pallava', region: 'Coromandel Coast', hook: 'Shore temples and the stone-carving genesis of Mamallapuram.' },
  { name: 'Sikh Historical Traditions', region: 'Punjab & Northwest', hook: 'Sovereignty, justice, and the spirit of Miri-Piri.' },
  { name: 'Kalinga', region: 'Odisha & Eastern Seaboard', hook: 'Maritime voyages of Boita Bandana and stone temple mastery.' },
  { name: 'Kashmir', region: 'Himalayan Valleys', hook: 'Sanskrit poetics, Lalitaditya’s architecture, and Shaiva philosophy.' },
];