export interface DiagramLabel {
  id: string;
  name: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  description: string;
  boardTip?: string;
}

export interface BiologyDiagram {
  id: string;
  title: string;
  chapterNo: number;
  chapterTitle: string;
  subtitle: string;
  boardRelevance: string;
  labels: DiagramLabel[];
  svgType: 'heart' | 'digestive' | 'mitosis' | 'cell';
}

export const BIOLOGY_DIAGRAMS: BiologyDiagram[] = [
  {
    id: 'diag-heart',
    title: 'Longitudinal Section of Human Heart',
    chapterNo: 9,
    chapterTitle: 'Transport',
    subtitle: 'Internal anatomy showing 4 chambers, major vessels, and semilunar/AV valves',
    boardRelevance: 'Section C high-yield detailed question. Always carry 4 to 6 marks for neat diagram with clear labeling.',
    svgType: 'heart',
    labels: [
      {
        id: 'svc',
        name: 'Superior Vena Cava',
        x: 28,
        y: 18,
        description: 'Brings deoxygenated blood from the upper head, neck, and arms into the right atrium.',
        boardTip: 'Label on top-left of heart diagram.'
      },
      {
        id: 'aorta',
        name: 'Aorta',
        x: 52,
        y: 12,
        description: 'Largest systemic artery. Pumps oxygenated blood under high pressure to the entire body.',
        boardTip: 'Notice the arched structure branching into 3 carotid/subclavian arteries.'
      },
      {
        id: 'pa',
        name: 'Pulmonary Artery',
        x: 72,
        y: 22,
        description: 'Carries deoxygenated blood from right ventricle to lungs. Only artery with deoxygenated blood!',
        boardTip: 'Crucial MCQ point: only artery carrying deoxygenated blood.'
      },
      {
        id: 'ra',
        name: 'Right Atrium',
        x: 25,
        y: 42,
        description: 'Thin-walled upper right receiving chamber collecting deoxygenated systemic venous return.',
        boardTip: 'Connected via Tricuspid valve to right ventricle.'
      },
      {
        id: 'la',
        name: 'Left Atrium',
        x: 75,
        y: 42,
        description: 'Upper left chamber receiving four pulmonary veins filled with oxygenated blood from lungs.',
        boardTip: 'Connected to left ventricle via Bicuspid (Mitral) valve.'
      },
      {
        id: 'tv',
        name: 'Tricuspid Valve',
        x: 35,
        y: 56,
        description: 'Three fibrous cusps preventing backflow of blood from right ventricle into right atrium during systole.',
        boardTip: 'Remember: Tri-cuspid on Right, Bi-cuspid on Left.'
      },
      {
        id: 'bv',
        name: 'Bicuspid (Mitral) Valve',
        x: 65,
        y: 56,
        description: 'Two cusps preventing backflow from left ventricle into left atrium during ventricular contraction.',
        boardTip: 'Also known as Mitral valve.'
      },
      {
        id: 'rv',
        name: 'Right Ventricle',
        x: 32,
        y: 75,
        description: 'Muscular chamber pumping deoxygenated blood to lungs through pulmonary valve.',
        boardTip: 'Wall is thinner than left ventricle because pulmonary circuit resistance is low.'
      },
      {
        id: 'lv',
        name: 'Left Ventricle',
        x: 68,
        y: 75,
        description: 'Thickest muscular chamber (3x thicker). Pumps blood against massive systemic vascular resistance.',
        boardTip: 'Always draw left ventricle wall significantly thicker in exams.'
      },
      {
        id: 'septum',
        name: 'Interventricular Septum',
        x: 50,
        y: 72,
        description: 'Thick muscular dividing wall separating oxygenated left side from deoxygenated right side.',
        boardTip: 'Prevents mixing of oxygenated and deoxygenated blood.'
      }
    ]
  },
  {
    id: 'diag-digestive',
    title: 'Human Alimentary Canal & Digestive Glands',
    chapterNo: 8,
    chapterTitle: 'Nutrition',
    subtitle: 'From oral cavity to rectum with liver, gallbladder, and pancreas',
    boardRelevance: 'Section C favorite in BSEK Karachi and Sindh board annual examinations.',
    svgType: 'digestive',
    labels: [
      {
        id: 'mouth',
        name: 'Oral Cavity (Mouth)',
        x: 50,
        y: 10,
        description: 'Site of ingestion, mastication by teeth, and chemical digestion of starch by salivary amylase (ptyalin).',
        boardTip: 'pH 6.8 - neutral environment for amylase.'
      },
      {
        id: 'esophagus',
        name: 'Esophagus (Gullet)',
        x: 50,
        y: 24,
        description: 'Muscular tube conveying food bolus from pharynx to stomach through wave-like Peristalsis.',
        boardTip: 'No digestive enzymes produced here; purely transport.'
      },
      {
        id: 'stomach',
        name: 'Stomach',
        x: 55,
        y: 38,
        description: 'J-shaped muscular sac producing gastric juice (HCl + Pepsinogen). Churns food into acidic chyme.',
        boardTip: 'HCl kills microbes and provides acidic pH 1.5-2.0.'
      },
      {
        id: 'liver',
        name: 'Liver',
        x: 32,
        y: 36,
        description: 'Largest internal gland. Synthesizes bile salts for fat emulsification and processes absorbed nutrients.',
        boardTip: 'Produces bile, which contains NO enzymes.'
      },
      {
        id: 'gallbladder',
        name: 'Gallbladder',
        x: 35,
        y: 45,
        description: 'Small muscular sac that stores and concentrates bile before releasing it into the duodenum.',
        boardTip: 'Bile duct empties into the duodenum.'
      },
      {
        id: 'pancreas',
        name: 'Pancreas',
        x: 62,
        y: 46,
        description: 'Heterocrine gland secreting alkaline pancreatic juice containing amylase, trypsin, and lipase.',
        boardTip: 'Located beneath stomach in the C-loop of duodenum.'
      },
      {
        id: 'duodenum',
        name: 'Duodenum (Small Intestine)',
        x: 48,
        y: 49,
        description: 'First 25 cm of small intestine. Primary site of chemical emulsification and enzymatic digestion.',
        boardTip: 'Receives both bile and pancreatic juice.'
      },
      {
        id: 'small_intestine',
        name: 'Ileum & Villi',
        x: 50,
        y: 64,
        description: 'Coiled portion lined with millions of microscopic villi for maximum nutrient absorption into blood and lymph.',
        boardTip: 'Glucose/amino acids go to blood capillaries; fatty acids go to lacteal.'
      },
      {
        id: 'large_intestine',
        name: 'Colon (Large Intestine)',
        x: 48,
        y: 78,
        description: 'Surrounds small intestine. Absorbs residual water, minerals, and vitamins, converting waste into feces.',
        boardTip: 'Site of water reabsorption to prevent dehydration.'
      },
      {
        id: 'rectum',
        name: 'Rectum & Anus',
        x: 50,
        y: 92,
        description: 'Stores feces until eliminated through the anal sphincters via egestion (defecation).',
        boardTip: 'Terminal organ of alimentary canal.'
      }
    ]
  },
  {
    id: 'diag-mitosis',
    title: 'Stages of Mitosis in Animal Cell',
    chapterNo: 5,
    chapterTitle: 'Cell Cycle',
    subtitle: 'Sequential karyokinesis: Prophase, Metaphase, Anaphase, and Telophase',
    boardRelevance: 'Carries direct 12 marks or 6-mark sub-part in Section C. Teachers evaluate sequence and spindle labeling.',
    svgType: 'mitosis',
    labels: [
      {
        id: 'prophase',
        name: '1. Prophase',
        x: 24,
        y: 30,
        description: 'Chromatin condenses into distinct chromosomes. Centrosomes migrate to opposite poles forming spindle. Nuclear envelope disintegrates.',
        boardTip: 'First and longest stage of karyokinesis.'
      },
      {
        id: 'metaphase',
        name: '2. Metaphase',
        x: 76,
        y: 30,
        description: 'Chromosomes line up along the equatorial plane (Metaphase Plate). Spindle fibers firmly attach to kinetochores.',
        boardTip: 'Best stage to examine chromosome morphology and count.'
      },
      {
        id: 'anaphase',
        name: '3. Anaphase',
        x: 24,
        y: 75,
        description: 'Centromeres divide; sister chromatids separate and are pulled toward opposite centrosome poles as daughter chromosomes.',
        boardTip: 'Chromosomes take V, L, or J shapes while migrating.'
      },
      {
        id: 'telophase',
        name: '4. Telophase & Cytokinesis',
        x: 76,
        y: 75,
        description: 'Nuclear membranes reassemble around two daughter nuclei. Chromatin uncoils. Cleavage furrow pinches cell into two identical cells.',
        boardTip: 'Exact reversal of events in prophase.'
      }
    ]
  },
  {
    id: 'diag-cell',
    title: 'Plant Cell vs Animal Cell Ultrastructure',
    chapterNo: 4,
    chapterTitle: 'Cells and Tissues',
    subtitle: 'Comparison of cell wall, chloroplasts, central vacuole, and centrioles',
    boardRelevance: 'Section B differentiation table and Section C diagram question in almost every board paper.',
    svgType: 'cell',
    labels: [
      {
        id: 'wall',
        name: 'Cell Wall (Plant only)',
        x: 25,
        y: 18,
        description: 'Rigid outer layer composed of cellulose fibrils. Provides turgor support, protection, and fixed shape.',
        boardTip: 'Completely absent in animal cells.'
      },
      {
        id: 'chloroplast',
        name: 'Chloroplast (Plant only)',
        x: 20,
        y: 42,
        description: 'Double-membrane organelle containing chlorophyll thylakoids and stroma. Performs photosynthesis.',
        boardTip: 'Contains chlorophyll; green pigment.'
      },
      {
        id: 'vacuole',
        name: 'Large Central Vacuole (Plant)',
        x: 30,
        y: 65,
        description: 'Single large vacuole bounded by tonoplast, maintaining cellular turgidity and storing cell sap.',
        boardTip: 'In animals, vacuoles are multiple and tiny.'
      },
      {
        id: 'centriole',
        name: 'Centrosome & Centrioles (Animal)',
        x: 75,
        y: 22,
        description: 'Pair of cylindrical microtubule structures organizing spindle fibers during animal mitosis.',
        boardTip: 'Absent in higher plants.'
      },
      {
        id: 'nucleus',
        name: 'Nucleus & Nucleolus (Both)',
        x: 50,
        y: 50,
        description: 'Double-membrane control center enclosing chromatin (DNA) and nucleolus for ribosome assembly.',
        boardTip: 'Plant nucleus is pushed to side; animal nucleus is central.'
      },
      {
        id: 'mitochondria',
        name: 'Mitochondria (Both)',
        x: 78,
        y: 65,
        description: 'Powerhouse of cell with folded cristae and matrix. Generates cellular ATP through cellular respiration.',
        boardTip: 'Present in both plant and animal cells.'
      }
    ]
  }
];
