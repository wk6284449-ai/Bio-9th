import { Chapter, Question } from '../types';

export const CHAPTERS_LIST: Chapter[] = [
  {
    id: 1,
    number: 1,
    title: 'Introduction to Biology',
    summary: 'Divisions of biology, branches, Muslim & international scientists, levels of biological organization, unicellular, colonial and multicellular organisms (Mustard Plant & Frog).',
    totalQuestions: 14,
    highYieldTopics: ['Muslim Scientists', 'Levels of Organization', 'Mustard Plant (Brassica) & Frog (Rana)', 'Colonial vs Multicellular']
  },
  {
    id: 2,
    number: 2,
    title: 'Solving a Biological Problem',
    summary: 'Steps of the biological method (Observation, Hypothesis, Deduction, Experimentation, Theory, Law), and the historical malaria investigation.',
    totalQuestions: 11,
    highYieldTopics: ['Biological Method Steps', 'Hypothesis vs Theory vs Law', 'Malaria Case Study (Laveran, Ronald Ross)']
  },
  {
    id: 3,
    number: 3,
    title: 'Biodiversity',
    summary: 'Aims & principles of classification, binomial nomenclature by Carl Linnaeus, Two to Five kingdom classification systems, and endangered species of Pakistan.',
    totalQuestions: 13,
    highYieldTopics: ['Five Kingdom Classification (Whittaker)', 'Binomial Nomenclature Rules', 'Status of Virus', 'Endangered Species of Pakistan']
  },
  {
    id: 4,
    number: 4,
    title: 'Cells and Tissues',
    summary: 'Cell theory, microscopy (Light vs Electron), prokaryotic vs eukaryotic cells, cell organelles (Mitochondria, Nucleus, Plastids, ER, Golgi, Lysosomes), plant & animal tissues.',
    totalQuestions: 18,
    highYieldTopics: ['Prokaryote vs Eukaryote', 'Mitochondria & Plastids', 'Fluid Mosaic Model', 'Plant vs Animal Tissues']
  },
  {
    id: 5,
    number: 5,
    title: 'Cell Cycle',
    summary: 'Phases of cell cycle (Interphase: G1, S, G2), Mitosis stages (Prophase, Metaphase, Anaphase, Telophase), Meiosis, crossing over, and Apoptosis vs Necrosis.',
    totalQuestions: 14,
    highYieldTopics: ['Mitosis vs Meiosis', 'Stages of Mitosis with diagrams', 'Significance of Crossing Over', 'Apoptosis vs Necrosis']
  },
  {
    id: 6,
    number: 6,
    title: 'Enzymes',
    summary: 'Nature of enzymes, biocatalysis, active site, activation energy, Lock & Key vs Induced Fit models, factors affecting enzyme action (Temperature, pH, Substrate conc.).',
    totalQuestions: 12,
    highYieldTopics: ['Lock and Key vs Induced Fit Model', 'Optimum Temperature & Denaturation', 'Enzyme Characteristics & Uses']
  },
  {
    id: 7,
    number: 7,
    title: 'Bioenergetics',
    summary: 'Role of ATP, redox reactions, Photosynthesis (Light reaction, Photolysis, Dark reaction / Calvin Cycle), Respiration (Aerobic vs Anaerobic fermentation).',
    totalQuestions: 15,
    highYieldTopics: ['Light Reaction vs Dark Reaction', 'Aerobic vs Anaerobic Respiration', 'Role of ATP as Energy Currency', 'Photolysis of Water']
  },
  {
    id: 8,
    number: 8,
    title: 'Nutrition',
    summary: 'Autotrophic & heterotrophic nutrition, macronutrients & micronutrients, balanced diet, vitamins & deficiency diseases (Scurvy, Rickets, Night Blindness), human digestive system.',
    totalQuestions: 16,
    highYieldTopics: ['Human Digestive System & Alimentary Canal', 'Vitamin Deficiencies (A, C, D, K)', 'Digestion in Stomach & Small Intestine', 'Malnutrition & PEM']
  },
  {
    id: 9,
    number: 9,
    title: 'Transport',
    summary: 'Water & ion transport in plants, transpiration and its mechanisms, xylem & phloem, human circulatory system, composition of blood, ABO blood grouping, human heart structure & cardiac cycle.',
    totalQuestions: 17,
    highYieldTopics: ['Structure of Human Heart', 'Transpiration: A Necessary Evil', 'Arteries vs Veins vs Capillaries', 'ABO & Rh Blood Groups']
  }
];

export const ALL_QUESTIONS: Question[] = [
  // ==========================================
  // CHAPTER 1: INTRODUCTION TO BIOLOGY
  // ==========================================
  {
    id: 'ch1-mcq-1',
    chapterNo: 1,
    chapterTitle: 'Introduction to Biology',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'A localized group of organisms belonging to the same species living together in a particular area at the same time is called a:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 1 Review Q1(i)',
    options: {
      a: 'Biosphere',
      b: 'Community',
      c: 'Ecosystem',
      d: 'Population'
    },
    correctOption: 'd',
    explanation: 'A population is defined as a group of organisms of the same species living in the same habitat at the same time, capable of interbreeding.',
    modelAnswer: 'Correct Option: (d) Population\nExplanation: In the levels of biological organization, when individuals of the same species live together in the same geographical area at a particular time, they form a Population (e.g. human population of Karachi in 2026).'
  },
  {
    id: 'ch1-mcq-2',
    chapterNo: 1,
    chapterTitle: 'Introduction to Biology',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'Which Muslim scientist is known as the "Father of Arabic Alchemy" and authored famous books on plants and animals including "Al-Nabatat" and "Al-Haywan"?',
    marks: 1,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 1, Section 1.3',
    options: {
      a: 'Abdul Malik Asmai',
      b: 'Jabir Bin Hayyan',
      c: 'Bu Ali Sina',
      d: 'Al-Razi'
    },
    correctOption: 'b',
    explanation: 'Jabir Bin Hayyan was born in Iran and practiced medicine in Iraq. He wrote landmark books on plants (Al-Nabatat) and animals (Al-Haywan).',
    modelAnswer: 'Correct Option: (b) Jabir Bin Hayyan\nExplanation: Jabir Bin Hayyan is famous for his pioneering work in chemistry and biology, authoring Al-Nabatat (plants) and Al-Haywan (animals).'
  },
  {
    id: 'ch1-mcq-3',
    chapterNo: 1,
    chapterTitle: 'Introduction to Biology',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'The scientific name of the Mustard plant (Sarson) according to binomial nomenclature is:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 1, Section 1.5',
    options: {
      a: 'Rana tigrina',
      b: 'Brassica campestris',
      c: 'Homo sapiens',
      d: 'Allium cepa'
    },
    correctOption: 'b',
    explanation: 'Brassica campestris is the scientific name for the mustard plant, cultivated for its leaves as food and seeds for mustard oil.',
    modelAnswer: 'Correct Option: (b) Brassica campestris'
  },
  {
    id: 'ch1-diff-1',
    chapterNo: 1,
    chapterTitle: 'Introduction to Biology',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Colonial Organization and Multicellular Organization with examples.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 1 Review Q4(i)',
    modelAnswer: `Colonial Organization vs Multicellular Organization:

1. Cell Independence: In colonial organization, many unicellular organisms live together in a colony, but each individual cell performs all its vital life functions independently without being dependent on others. In multicellular organization, cells are specialized into tissues, organs, and organ systems with a true division of labor.
2. Division of Labor: Colonial has minimal or no division of labor between vegetative cells. Multicellular exhibits high division of labor (e.g. muscle cells for movement, nerve cells for coordination).
3. Tissue Formation: Colonies do not form true tissues or organs. Multicellular organisms organize cells into distinct tissues, organs, and organ systems.
4. Examples:
   - Colonial: Volvox (green photosynthetic algae living in a hollow spherical colony).
   - Multicellular: Frog (Rana tigrina) and Mustard plant (Brassica campestris).`,
    tabulatedData: {
      titleA: 'Colonial Organization',
      titleB: 'Multicellular Organization',
      rows: [
        {
          parameter: 'Definition',
          itemA: 'Many unicellular organisms live together forming a colony, but each cell retains its independence.',
          itemB: 'Millions of cells organize together into tissues, organs, and organ systems working cooperatively.'
        },
        {
          parameter: 'Division of Labor',
          itemA: 'Virtually absent; each cell conducts its own digestion, respiration, and excretion.',
          itemB: 'Distinct division of labor exists among specialized cell types (tissues, organs).'
        },
        {
          parameter: 'Tissue Formation',
          itemA: 'Cells do not differentiate to form genuine tissues or organs.',
          itemB: 'Cells differentiate into true tissues (epithelial, muscular, nervous, vascular).'
        },
        {
          parameter: 'Examples',
          itemA: 'Volvox (freshwater green alga).',
          itemB: 'Mustard plant (Brassica campestris) and Frog (Rana tigrina).'
        }
      ]
    },
    keyPoints: [
      'Contrast cellular independence vs tissue coordination',
      'Mention presence/absence of division of labor',
      'Provide accurate examples: Volvox vs Frog/Mustard'
    ]
  },
  {
    id: 'ch1-def-1',
    chapterNo: 1,
    chapterTitle: 'Introduction to Biology',
    section: 'Section_B',
    subtype: 'definition',
    questionText: 'Define the following branches of Biology: (a) Histology (b) Pharmacology (c) Morphology (d) Biotechnology.',
    marks: 4,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 1, Section 1.2',
    modelAnswer: `(a) Histology:
The branch of biology dealing with the microscopic study of plant and animal tissues.

(b) Pharmacology:
The scientific study of drugs, their chemical composition, mode of action, and physiological effects on the human body and living organisms.

(c) Morphology:
The study of the external and internal form, shape, and structure of living organisms and their specific structural features.

(d) Biotechnology:
The practical application of living organisms, cells, or biological processes for the manufacture of useful products and technologies for the welfare of human beings (e.g. insulin production).`,
    keyPoints: [
      'Histology = microscopic tissue study',
      'Pharmacology = drugs and bodily effects',
      'Morphology = form, shape, and external structures',
      'Biotechnology = using organisms for human benefit'
    ]
  },
  {
    id: 'ch1-reas-1',
    chapterNo: 1,
    chapterTitle: 'Introduction to Biology',
    section: 'Section_B',
    subtype: 'reasoning',
    questionText: 'Why is the study of Muslim scientists considered an essential foundation of modern medical and biological sciences?',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 1, Section 1.3',
    modelAnswer: `The contributions of Muslim scientists formed the foundation of modern biological sciences because:

1. Introduction of Experimental Methodology: Scientists like Jabir Bin Hayyan emphasized empirical observation and experimental testing over speculative philosophy.
2. Pioneer Zoological & Botanical Compilations: Abdul Malik Asmai wrote detailed scientific treatises on camels (Al-Kheil), horses, and wild animals, presenting the first comprehensive anatomical descriptions in the Islamic golden age.
3. The Canon of Medicine (Al-Qanun fi al-Tibb): Bu Ali Sina (Avicenna) authored this comprehensive medical encyclopedia, which served as the authoritative textbook of medicine in European and Asian universities for more than 500 years.
4. Scientific Classification & Terminology: They accurately classified medicinal herbs, documented physiological organ functions, and laid the groundwork for pharmacology and modern anatomy.`,
    keyPoints: [
      'Jabir Bin Hayyan: Experimental alchemy, Al-Nabatat and Al-Haywan',
      'Abdul Malik Asmai: First specialist zoological texts (Al-Ibil, Al-Kheil)',
      'Bu Ali Sina (Avicenna): Al-Qanun fi al-Tibb standard medical text for 500+ years'
    ]
  },
  {
    id: 'ch1-long-1',
    chapterNo: 1,
    chapterTitle: 'Introduction to Biology',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Describe in detail the various Levels of Biological Organization from subatomic particles to the Biosphere.',
    marks: 12,
    difficulty: 'hard',
    textbookRef: 'STBB Class 9 Biology, Chapter 1, Section 1.4',
    diagramNote: 'Hierarchy diagram from Subatomic particles -> Atom -> Molecule -> Organelle -> Cell -> Tissue -> Organ -> Organ System -> Organism -> Population -> Community -> Ecosystem -> Biosphere.',
    modelAnswer: `LEVELS OF BIOLOGICAL ORGANIZATION

Biological organization is a hierarchy of complex biological structures and systems that define life through a reductionist and holistic approach:

1. Subatomic and Atomic Level:
All matter is made of chemical elements. Atoms are composed of subatomic particles: protons, neutrons, and electrons. Sixteen biological elements (Bioelements) form 99% of living protoplasm (C, H, O, N, P, Ca make 99%).

2. Molecular Level:
Bioelements combine via ionic or covalent bonds to form biomolecules (micromolecules like glucose and water, and macromolecules like starch, proteins, and DNA).

3. Organelle and Cellular Level:
Biomolecules assemble in specific arrangements to construct subcellular structures called Organelles (Mitochondria, Nucleus, Ribosomes). The Cell is the fundamental structural and functional unit of all living things.

4. Tissue Level:
In multicellular organisms, a group of similar cells specialized for a common function forms a tissue (e.g. xylem and phloem in plants; muscular and nervous tissue in animals).

5. Organ and Organ System Level:
Different tissues work collectively to perform a specific major physiological task, forming an Organ (e.g. Stomach: epithelial tissue secretes gastric juice, muscular tissue churns food). Related organs integrate into an Organ System (e.g. Digestive System).

6. Individual / Organism Level:
Different organ systems coordinate harmoniously to construct an autonomous living individual (e.g. Man, Mustard plant).

7. Population Level:
A group of organisms of the same species inhabiting the same geographic area at the same time (e.g. human population in Pakistan).

8. Community Level:
All the populations of different species living and interacting together in a shared habitat (e.g. a forest community comprising trees, deer, wolves, fungi, and bacteria).

9. Ecosystem Level:
A biological community of interacting organisms and their physical abiotic environment (soil, water, sunlight, temperature).

10. Biosphere Level:
The entire zone of the Earth inhabited by living organisms, encompassing the lower atmosphere, land (lithosphere), and oceans/lakes (hydrosphere).`,
    keyPoints: [
      'Sequential hierarchy from Subatomic to Biosphere',
      'Bioelements (6 major make 99% of body mass)',
      'Distinction between cell, tissue, organ, organ system',
      'Ecological hierarchy: Population -> Community -> Ecosystem -> Biosphere'
    ]
  },

  // ==========================================
  // CHAPTER 2: SOLVING A BIOLOGICAL PROBLEM
  // ==========================================
  {
    id: 'ch2-mcq-1',
    chapterNo: 2,
    chapterTitle: 'Solving a Biological Problem',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'What is the correct logical sequence of steps in the Biological Method?',
    marks: 1,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 2 Review Q1(i)',
    options: {
      a: 'Observation → Experiment → Hypothesis → Deduction',
      b: 'Observation → Hypothesis → Deduction → Experiment',
      c: 'Hypothesis → Observation → Deduction → Experiment',
      d: 'Deduction → Hypothesis → Observation → Experiment'
    },
    correctOption: 'b',
    explanation: 'The standard scientific inquiry steps are: Observation → Formulating Hypothesis → Formulating Deductions (if...then) → Conducting controlled Experimentation → Formulating Theory/Law.',
    modelAnswer: 'Correct Option: (b) Observation → Hypothesis → Deduction → Experiment'
  },
  {
    id: 'ch2-mcq-2',
    chapterNo: 2,
    chapterTitle: 'Solving a Biological Problem',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'Who discovered that the pathogen causing Malaria is the microscopic parasite "Plasmodium" in 1878?',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 2, Section 2.2',
    options: {
      a: 'Ronald Ross',
      b: 'Alphonse Laveran',
      c: 'A.F.A. King',
      d: 'Robert Koch'
    },
    correctOption: 'b',
    explanation: 'A French army physician, Charles Louis Alphonse Laveran, observed tiny living microorganisms in the blood of malaria patients in 1878, later named Plasmodium.',
    modelAnswer: 'Correct Option: (b) Alphonse Laveran'
  },
  {
    id: 'ch2-diff-1',
    chapterNo: 2,
    chapterTitle: 'Solving a Biological Problem',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between a Hypothesis and a Biological Law / Principle.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 2 Review Q4',
    modelAnswer: `Hypothesis vs Biological Law:

1. Nature: A hypothesis is an tentative, testable proposition formulated to explain observations. A biological law is an irrefutable, universally verified fact of nature supported by overwhelming experimental evidence.
2. Degree of Certainty: A hypothesis has a high degree of uncertainty until tested. A law is virtually unchangeable and universally accepted.
3. Modification: A hypothesis can easily be rejected, modified, or replaced based on new experimental findings. A law is rarely if ever modified.
4. Examples:
   - Hypothesis: "Plasmodium is the causative agent of malaria."
   - Biological Law: Mendel's Laws of Inheritance, Hardy-Weinberg Law.`,
    tabulatedData: {
      titleA: 'Hypothesis',
      titleB: 'Biological Law / Principle',
      rows: [
        {
          parameter: 'Definition',
          itemA: 'A tentative, educated proposal offered as a testable answer to a biological problem.',
          itemB: 'A uniform or constant fact of nature confirmed by exhaustive empirical testing.'
        },
        {
          parameter: 'Certainty & Status',
          itemA: 'Uncertain and provisional; needs validation through experiment.',
          itemB: 'Universal, irrefutable, and accepted worldwide without contradiction.'
        },
        {
          parameter: 'Modifiability',
          itemA: 'Subject to falsification and frequently rejected or modified.',
          itemB: 'Permanent scientific statement; extremely rare to be disproved.'
        },
        {
          parameter: 'Examples',
          itemA: '"Marshy air causes malaria" or "Plasmodium causes malaria".',
          itemB: "Mendel's Law of Segregation and Independent Assortment."
        }
      ]
    },
    keyPoints: [
      'Hypothesis = tentative explanation awaiting test',
      'Law = universal, undeniable constant fact of nature',
      'Provide accurate biological examples for each'
    ]
  },
  {
    id: 'ch2-reas-1',
    chapterNo: 2,
    chapterTitle: 'Solving a Biological Problem',
    section: 'Section_B',
    subtype: 'reasoning',
    questionText: 'Why did Ronald Ross use sparrows instead of humans in his early malaria transmission experiments?',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 2, Section 2.2',
    modelAnswer: `Ronald Ross used sparrows in his initial experiments because:

1. Ethical and Safety Protocols: Malaria is a potentially fatal disease in humans. Directly allowing infected mosquitoes to bite healthy humans risked lethal consequences without confirmed scientific proof.
2. Culex Mosquito Affinity: Ross observed that Culex mosquitoes bite birds rather than humans, providing a convenient avian malaria model.
3. Rapid Life Cycle: Avian malaria in sparrows developed rapidly, allowing Ross to dissect mosquito stomachs, locate Plasmodium multiplying, and observe their migration to salivary glands within a short time frame.
4. Scientific Verification: Once the complete transmission cycle was conclusively demonstrated in sparrows, it established the proof of concept that later enabled testing in humans using Anopheles mosquitoes.`,
    keyPoints: [
      'Ethical precautions against human fatality',
      'Culex mosquito natural host for bird malaria',
      'Demonstrated Plasmodium multiplication in salivary glands'
    ]
  },
  {
    id: 'ch2-long-1',
    chapterNo: 2,
    chapterTitle: 'Solving a Biological Problem',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Explain in detail how the biological problem of Malaria was solved using the Biological Method (Observations, Hypotheses, Deductions, and Experiments).',
    marks: 12,
    difficulty: 'hard',
    textbookRef: 'STBB Class 9 Biology, Chapter 2, Section 2.2',
    modelAnswer: `SOLVING THE BIOLOGICAL PROBLEM OF MALARIA

Malaria is one of mankind's oldest diseases, derived from the Italian words "Mala" (bad) and "Aria" (air). Its discovery illustrates the classic steps of the scientific method:

1. Initial Observations:
- In ancient times, physicians noted that people living near marshy areas contracted malaria frequently.
- Drinking marsh water did not produce malaria (proving air/water was not toxic).
- Quinine bark (from Cinchona tree) was found effective in curing malaria.
- In 1878, French physician A. Laveran examined malaria patients' blood and spotted tiny microscopic organisms.
- In 1883, A.F.A. King made 20 critical observations, noting that people sleeping outdoors in open air caught malaria much more than those sleeping indoors under mosquito nets.

2. Formulation of Hypothesis:
Based on King's observations, the hypothesis proposed was:
"Plasmodium is transmitted to human beings by mosquitoes."

3. Making Deductions:
Scientists drew logical 'if...then' deductions from the hypothesis:
- Deduction 1: "If mosquitoes transmit Plasmodium, then Plasmodium must be present inside mosquitoes."
- Deduction 2: "If an infected mosquito bites a healthy individual, that individual should develop malaria."

4. Controlled Experimentation:
- Ronald Ross's Bird Experiment (1897): Ronald Ross allowed female Culex mosquitoes to bite sparrows suffering from malaria. Dissecting the mosquitoes over successive days, he found Plasmodium multiplying in the stomach wall and moving to the salivary glands. He then allowed these infected mosquitoes to bite healthy sparrows; the healthy sparrows developed malaria!
- Human Experiment (1898): Italian biologist Giovanni Battista Grassi allowed female Anopheles mosquitoes to bite malaria patients, then let them bite a healthy human volunteer. The volunteer developed malaria, verifying Plasmodium in his blood.

5. Conclusion and Theory:
The experimental results completely supported the hypothesis, proving beyond doubt that the female Anopheles mosquito is the biological vector that transmits Plasmodium, the true causative agent of malaria.`,
    keyPoints: [
      'Historical observations (Laveran, King)',
      'Clear hypothesis: Mosquitoes transmit Plasmodium',
      'Deductions formulated using if...then logic',
      'Ronald Ross mosquito-sparrow experiment details',
      'Grassi confirmation with Anopheles in humans'
    ]
  },

  // ==========================================
  // CHAPTER 3: BIODIVERSITY
  // ==========================================
  {
    id: 'ch3-mcq-1',
    chapterNo: 3,
    chapterTitle: 'Biodiversity',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'The basic and smallest unit of biological classification is the:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 3 Review Q1',
    options: {
      a: 'Genus',
      b: 'Order',
      c: 'Species',
      d: 'Family'
    },
    correctOption: 'c',
    explanation: 'A species is the basic structural unit of classification. It consists of similar organisms capable of interbreeding and producing fertile offspring.',
    modelAnswer: 'Correct Option: (c) Species'
  },
  {
    id: 'ch3-mcq-2',
    chapterNo: 3,
    chapterTitle: 'Biodiversity',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'In the Five-Kingdom system proposed by Robert Whittaker (1969), all prokaryotic organisms are placed in Kingdom:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 3, Section 3.3',
    options: {
      a: 'Monera',
      b: 'Protista',
      c: 'Fungi',
      d: 'Plantae'
    },
    correctOption: 'a',
    explanation: 'Kingdom Monera includes all prokaryotic unicellular organisms lacking a membrane-bound nucleus, such as bacteria and cyanobacteria.',
    modelAnswer: 'Correct Option: (a) Monera'
  },
  {
    id: 'ch3-diff-1',
    chapterNo: 3,
    chapterTitle: 'Biodiversity',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Kingdom Plantae and Kingdom Fungi based on their mode of nutrition and cell wall composition.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 3 Review Q4',
    modelAnswer: `Kingdom Plantae vs Kingdom Fungi:

1. Mode of Nutrition: Plants are autotrophic; they synthesize their organic food through photosynthesis using chlorophyll. Fungi are heterotrophic; they are absorptive heterotrophs (saprotrophic or parasitic) that secrete digestive enzymes onto organic matter and absorb nutrients.
2. Chlorophyll: Plants contain chlorophyll in chloroplasts. Fungi lack chlorophyll completely and cannot photosynthesize.
3. Cell Wall Composition: Plant cell walls are made of Cellulose. Fungal cell walls are made of Chitin (a complex nitrogenous polysaccharide).
4. Stored Food: Plants store surplus carbohydrate as Starch. Fungi store excess nutrients as Glycogen.`,
    tabulatedData: {
      titleA: 'Kingdom Plantae',
      titleB: 'Kingdom Fungi',
      rows: [
        {
          parameter: 'Nutrition',
          itemA: 'Autotrophic (photosynthetic producers with chlorophyll).',
          itemB: 'Absorptive heterotrophic (saprophytic decomposers or parasites).'
        },
        {
          parameter: 'Cell Wall',
          itemA: 'Composed primarily of Cellulose.',
          itemB: 'Composed of Chitin.'
        },
        {
          parameter: 'Chlorophyll',
          itemA: 'Present in chloroplasts.',
          itemB: 'Completely absent.'
        },
        {
          parameter: 'Stored Food',
          itemA: 'Stored as Starch.',
          itemB: 'Stored as Glycogen and oil droplets.'
        }
      ]
    },
    keyPoints: [
      'Cellulose vs Chitin cell wall',
      'Autotrophic vs Absorptive heterotrophs',
      'Presence vs absence of chlorophyll'
    ]
  },
  {
    id: 'ch3-reas-1',
    chapterNo: 3,
    chapterTitle: 'Biodiversity',
    section: 'Section_B',
    subtype: 'reasoning',
    questionText: 'Why are viruses not placed in any of the Five Kingdoms of living organisms?',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 3, Section 3.4',
    modelAnswer: `Viruses are excluded from the Five Kingdom Classification system because:

1. Acellular (Non-cellular) Nature: All five kingdoms are based on cellular organisms (prokaryotic or eukaryotic cells). Viruses lack cytoplasm, cell membrane, ribosomes, and cellular organelles.
2. Borderline Between Living and Non-Living:
   - Living characteristics: They contain genetic material (DNA or RNA) and reproduce inside a host cell.
   - Non-living characteristics: Outside a living host, they are inert, carry out no metabolism or respiration, and can be crystallized like ordinary chemicals.
3. Obligate Intracellular Parasites: They cannot synthesize ATP or proteins on their own and depend entirely on the host machinery.
Therefore, biologists classify viruses as acellular biological entities on the borderline of living and non-living.`,
    keyPoints: [
      'Acellular nature (no cytoplasm or organelles)',
      'Can be crystallized outside living cells',
      'Lacks independent metabolic machinery'
    ]
  },
  {
    id: 'ch3-long-1',
    chapterNo: 3,
    chapterTitle: 'Biodiversity',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Explain the Five Kingdom Classification System proposed by Robert Whittaker and modified by Margulis and Schwartz. List the diagnostic features of each kingdom.',
    marks: 12,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 3, Section 3.3',
    modelAnswer: `FIVE KINGDOM CLASSIFICATION SYSTEM

Proposed by Robert Whittaker (1969) and modified by Lynn Margulis and Karlene Schwartz (1988) based on three key criteria:
1. Cellular organization (Prokaryotic vs Eukaryotic, Unicellular vs Multicellular)
2. Mode of nutrition (Autotrophy, Absorptive heterotrophy, Ingestive heterotrophy)
3. Evolutionary / phylogenetic relationships.

The five kingdoms are:

1. Kingdom Monera:
- Microscopic, unicellular prokaryotes.
- Lack a true membrane-bound nucleus and organelles (mitochondria, chloroplasts).
- Cell wall is made of peptidoglycan (murein).
- Examples: Bacteria, Cyanobacteria (Blue-green algae).

2. Kingdom Protista:
- Eukaryotic unicellular or simple colonial/multicellular organisms without tissue differentiation.
- Extremely diverse:
  * Plant-like protists (Algae): Autotrophic (e.g. Chlamydomonas, Euglena).
  * Animal-like protists (Protozoa): Heterotrophic (e.g. Amoeba, Paramecium).
  * Fungus-like protists: Slime molds and water molds.

3. Kingdom Fungi:
- Eukaryotic, multicellular (except yeast which is unicellular) heterotrophs.
- Absorptive nutrition: secrete extracellular digestive enzymes and absorb decomposed nutrients.
- Cell wall made of Chitin. Body is made of thread-like filaments called Hyphae.
- Examples: Mushrooms, Yeast, Rhizopus (black bread mold).

4. Kingdom Plantae:
- Eukaryotic, multicellular autotrophic organisms.
- Possess chloroplasts containing chlorophyll-a and b for photosynthesis.
- Cell wall contains cellulose. Develop from embryos.
- Examples: Mosses, Ferns, Conifers, Flowering plants (Brassica campestris).

5. Kingdom Animalia:
- Eukaryotic, multicellular, ingestive heterotrophic organisms.
- Lack cell walls and plastids.
- Possess specialized nervous and muscular tissues for movement and sensory coordination.
- Examples: Sponges, Earthworms, Insects, Fish, Frogs, Birds, Humans.`,
    keyPoints: [
      'Criteria of classification (cellularity, nutrition, evolution)',
      'Monera (prokaryotic, peptidoglycan wall)',
      'Protista (unicellular eukaryotes, 3 sub-types)',
      'Fungi (absorptive heterotrophs, chitin wall)',
      'Plantae (photosynthetic autotrophs, cellulose wall)',
      'Animalia (ingestive heterotrophs, no cell wall, mobile)'
    ]
  },

  // ==========================================
  // CHAPTER 4: CELLS AND TISSUES
  // ==========================================
  {
    id: 'ch4-mcq-1',
    chapterNo: 4,
    chapterTitle: 'Cells and Tissues',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'The high resolving power of an electron microscope compared to a light microscope is primarily due to:',
    marks: 1,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 4 Review Q1',
    options: {
      a: 'Larger glass lenses used',
      b: 'Shorter wavelength of the electron beam',
      c: 'Higher voltage electricity',
      d: 'Thicker specimens'
    },
    correctOption: 'b',
    explanation: 'The resolution limit is inversely proportional to wavelength. Electrons have far shorter wavelengths than visible light, enabling resolution down to 0.2 nanometers.',
    modelAnswer: 'Correct Option: (b) Shorter wavelength of the electron beam'
  },
  {
    id: 'ch4-mcq-2',
    chapterNo: 4,
    chapterTitle: 'Cells and Tissues',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'Which cell organelle is known as the "Powerhouse of the Cell" because it is the primary site of aerobic ATP production?',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 4, Section 4.3',
    options: {
      a: 'Ribosome',
      b: 'Golgi body',
      c: 'Mitochondrion',
      d: 'Lysosome'
    },
    correctOption: 'c',
    explanation: 'Mitochondria are double-membraned organelles where the Krebs cycle and oxidative phosphorylation generate most of the cellular ATP.',
    modelAnswer: 'Correct Option: (c) Mitochondrion'
  },
  {
    id: 'ch4-diff-1',
    chapterNo: 4,
    chapterTitle: 'Cells and Tissues',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Prokaryotic Cell and Eukaryotic Cell with 4 standard parameters.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 4 Review Q4',
    modelAnswer: `Prokaryotic Cell vs Eukaryotic Cell:

1. Nucleus: Prokaryotes lack a distinct, membrane-bound nucleus; their circular DNA floats in the cytoplasm in a region called the nucleoid. Eukaryotes have a true nucleus surrounded by a double nuclear membrane.
2. Membrane-bound Organelles: Prokaryotes lack membrane-bound organelles like mitochondria, endoplasmic reticulum, and Golgi apparatus. Eukaryotes contain abundant membrane-bound organelles.
3. Ribosome Size: Prokaryotic ribosomes are 70S (smaller). Eukaryotic ribosomes are 80S (larger).
4. Cell Wall: Prokaryotic cell walls are composed of peptidoglycan (murein). Eukaryotic cell walls (when present, as in plants/fungi) are made of cellulose or chitin; animal cells lack cell walls entirely.`,
    tabulatedData: {
      titleA: 'Prokaryotic Cell',
      titleB: 'Eukaryotic Cell',
      rows: [
        {
          parameter: 'Nucleus',
          itemA: 'No nuclear membrane; genetic material lies naked in the nucleoid.',
          itemB: 'True nucleus bounded by a double nuclear envelope with nuclear pores.'
        },
        {
          parameter: 'Organelles',
          itemA: 'Membrane-bound organelles (Mitochondria, ER, Golgi) are absent.',
          itemB: 'Distinct membrane-bound organelles are present.'
        },
        {
          parameter: 'Ribosomes',
          itemA: 'Smaller (70S) distributed freely in cytoplasm.',
          itemB: 'Larger (80S) found attached to RER or free in cytosol.'
        },
        {
          parameter: 'Cell Division',
          itemA: 'Divide by binary fission; no mitotic spindle.',
          itemB: 'Divide by Mitosis and Meiosis with spindle fibers.'
        }
      ]
    },
    keyPoints: [
      'True nucleus vs nucleoid',
      'Presence vs absence of membrane-bound organelles',
      '70S vs 80S ribosomes',
      'Binary fission vs Mitosis/Meiosis'
    ]
  },
  {
    id: 'ch4-reas-1',
    chapterNo: 4,
    chapterTitle: 'Cells and Tissues',
    section: 'Section_B',
    subtype: 'reasoning',
    questionText: 'Why are Lysosomes commonly referred to as "Suicidal Bags" of the cell?',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 4, Section 4.3',
    modelAnswer: `Lysosomes are called the "suicidal bags" of the cell because:

1. Content of Powerful Hydrolytic Enzymes: They contain concentrated digestive enzymes (acid hydrolases, proteases, lipases, nucleases) capable of breaking down all biological macromolecules.
2. Autophagy and Cell Death: Under conditions of starvation, severe cellular injury, or programmed cell death (apoptosis), the lysosomal membrane ruptures.
3. Self-Digestion: The released hydrolytic enzymes digest the cell's own cytoplasm and vital organelles, resulting in complete self-destruction (autolysis) of the old or damaged cell.`,
    keyPoints: [
      'Contain strong hydrolytic enzymes',
      'Rupture during injury or apoptosis',
      'Engage in autolysis (self-digestion) of damaged cells'
    ]
  },
  {
    id: 'ch4-long-1',
    chapterNo: 4,
    chapterTitle: 'Cells and Tissues',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Describe the Fluid Mosaic Model of the Cell Membrane with a labeled diagram. Explain the functions of its major components.',
    marks: 12,
    difficulty: 'hard',
    textbookRef: 'STBB Class 9 Biology, Chapter 4, Section 4.3',
    diagramNote: 'Phospholipid bilayer with hydrophilic heads facing outward, hydrophobic fatty acid tails inward, embedded intrinsic/integral proteins, peripheral proteins, cholesterol, and carbohydrate glycolipids/glycoproteins.',
    modelAnswer: `FLUID MOSAIC MODEL OF CELL MEMBRANE

Proposed by S. Jonathan Singer and Garth L. Nicolson in 1972, this model is the universally accepted description of biological membranes.

1. Structural Architecture:
- Phospholipid Bilayer: The core framework is a dynamic, fluid sea of phospholipid molecules arranged in a double layer.
  * Hydrophilic Heads: Polar, water-attracting phosphate heads orient outward facing aqueous intra- and extracellular fluids.
  * Hydrophobic Tails: Non-polar, water-repelling fatty acid chains face inward toward each other, forming an impermeable hydrophobic core.
- Fluid Nature: Phospholipids and proteins move laterally within the plane of the membrane, providing flexibility and self-healing properties.

2. Membrane Proteins ("Mosaic"):
Globular proteins are interspersed in the lipid bilayer like "icebergs floating in a lipid sea":
- Integral (Intrinsic) Proteins: Embedded deeply within the bilayer, spanning both sides (transmembrane channels and carrier proteins for transport).
- Peripheral (Extrinsic) Proteins: Attached loosely to the outer or inner surface of the membrane, functioning as enzymes or structural anchors.

3. Conjugated Molecules & Cholesterol:
- Cholesterol: Embedded between phospholipid tails in animal membranes to regulate membrane fluidity and mechanical stability across temperatures.
- Glycoproteins & Glycolipids: Short carbohydrate chains attached to proteins and lipids on the outer leaflet, serving as biological markers, cell-to-cell recognition sites, and receptors.

4. Major Functions:
- Selectively Permeable Barrier: Controls the entry and exit of ions, nutrients, and waste products.
- Active & Passive Transport: Facilitates diffusion, osmosis, and active ion pumping.
- Cell Signaling & Communication: Hormone and neurotransmitter recognition.`,
    keyPoints: [
      'Proposed by Singer and Nicolson in 1972',
      'Phospholipid bilayer: hydrophilic heads outward, hydrophobic tails inward',
      'Proteins as icebergs in a lipid sea (integral and peripheral)',
      'Functions: selective permeability, cell recognition, active transport'
    ]
  },

  // ==========================================
  // CHAPTER 5: CELL CYCLE
  // ==========================================
  {
    id: 'ch5-mcq-1',
    chapterNo: 5,
    chapterTitle: 'Cell Cycle',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'During which phase of Mitosis do the sister chromatids separate and move towards opposite poles of the spindle?',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 5 Review Q1',
    options: {
      a: 'Prophase',
      b: 'Metaphase',
      c: 'Anaphase',
      d: 'Telophase'
    },
    correctOption: 'c',
    explanation: 'In Anaphase, kinetochore spindle fibers shorten, splitting the centromeres and pulling sister chromatids to opposite poles.',
    modelAnswer: 'Correct Option: (c) Anaphase'
  },
  {
    id: 'ch5-mcq-2',
    chapterNo: 5,
    chapterTitle: 'Cell Cycle',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'During which sub-phase of Interphase does DNA replication take place?',
    marks: 1,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 5, Section 5.1',
    options: {
      a: 'G1 phase',
      b: 'S phase (Synthesis)',
      c: 'G2 phase',
      d: 'G0 phase'
    },
    correctOption: 'b',
    explanation: 'In the S (Synthesis) phase, the cell duplicates its genetic material (DNA replication), so each chromosome consists of two sister chromatids.',
    modelAnswer: 'Correct Option: (b) S phase (Synthesis)'
  },
  {
    id: 'ch5-diff-1',
    chapterNo: 5,
    chapterTitle: 'Cell Cycle',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Mitosis and Meiosis with 4 distinct points.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 5 Review Q4',
    modelAnswer: `Mitosis vs Meiosis:

1. Occurrence: Mitosis takes place in somatic (body) cells. Meiosis occurs exclusively in germline (reproductive) cells during gamete formation.
2. Number of Daughter Cells: Mitosis produces 2 daughter cells. Meiosis produces 4 daughter cells.
3. Chromosome Number: In mitosis, the daughter cells maintain the exact diploid (2n) number of chromosomes as the parent cell (equational division). In meiosis, chromosome number is halved to haploid (n) (reductional division).
4. Crossing Over & Genetic Variation: In mitosis, homologous chromosomes do not pair up and crossing over does not occur, producing genetically identical clone cells. In meiosis, homologous chromosomes pair (synapsis) and exchange genetic segments (crossing over), creating genetic variation.`,
    tabulatedData: {
      titleA: 'Mitosis',
      titleB: 'Meiosis',
      rows: [
        {
          parameter: 'Location',
          itemA: 'Occurs in somatic (body) cells for growth and repair.',
          itemB: 'Occurs in germ cells during gamete (sperm/egg) formation.'
        },
        {
          parameter: 'Daughter Cells',
          itemA: 'Produces 2 daughter cells.',
          itemB: 'Produces 4 daughter cells.'
        },
        {
          parameter: 'Chromosome Number',
          itemA: 'Maintained diploid (2n) identical to parent (Equational division).',
          itemB: 'Halved to haploid (n) (Reduction division).'
        },
        {
          parameter: 'Crossing Over',
          itemA: 'Absent; daughter cells are genetically identical clones.',
          itemB: 'Present in Prophase-I; generates vital genetic variation.'
        }
      ]
    },
    keyPoints: [
      'Somatic vs Germ cells',
      '2 daughter cells vs 4 daughter cells',
      'Diploid (2n) vs Haploid (n)',
      'Absence vs Presence of crossing over'
    ]
  },
  {
    id: 'ch5-diff-2',
    chapterNo: 5,
    chapterTitle: 'Cell Cycle',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Apoptosis and Necrosis.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 5, Section 5.4',
    modelAnswer: `Apoptosis vs Necrosis:

1. Nature: Apoptosis is programmed, genetically controlled cell death (cellular suicide) essential for development. Necrosis is accidental, unprogrammed cell death caused by external physical injury, trauma, or toxins.
2. Inflammation: Apoptosis causes no inflammation because cellular fragments (apoptotic bodies) are engulfed by phagocytes without leakage. Necrosis causes severe inflammation because cells swell, burst, and spill toxic hydrolytic enzymes into surrounding tissues.
3. Energy Dependency: Apoptosis is an active process requiring ATP. Necrosis is a passive process that occurs due to energy depletion.`,
    tabulatedData: {
      titleA: 'Apoptosis',
      titleB: 'Necrosis',
      rows: [
        {
          parameter: 'Cause',
          itemA: 'Programmed, deliberate genetic event for development (e.g. digit separation).',
          itemB: 'Accidental cell death caused by trauma, infection, hypoxemia, or poison.'
        },
        {
          parameter: 'Cell Morphology',
          itemA: 'Cell shrinks, chromatin condenses, forms apoptotic bodies.',
          itemB: 'Cell swells, organelle membranes rupture, and cell lyses.'
        },
        {
          parameter: 'Inflammation',
          itemA: 'No inflammatory reaction in surrounding tissues.',
          itemB: 'Triggers acute inflammatory response due to cellular leakage.'
        },
        {
          parameter: 'Energy Requirement',
          itemA: 'Active process requiring ATP.',
          itemB: 'Passive process independent of cellular ATP.'
        }
      ]
    },
    keyPoints: [
      'Programmed physiological vs accidental pathological death',
      'No inflammation vs acute inflammation',
      'Shrinking into bodies vs swelling and lysis'
    ]
  },
  {
    id: 'ch5-long-1',
    chapterNo: 5,
    chapterTitle: 'Cell Cycle',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Describe the four successive stages of Mitosis (Karyokinesis) with labeled sketches of animal cell division.',
    marks: 12,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 5, Section 5.2',
    diagramNote: 'Diagram showing Prophase (condensing chromosomes, aster formation), Metaphase (equatorial plate alignment), Anaphase (chromatid separation), and Telophase (nuclear envelope reappearance, cleavage furrow).',
    modelAnswer: `STAGES OF MITOSIS (KARYOKINESIS)

Mitosis is the nuclear division in which a parent diploid nucleus divides into two genetically identical daughter nuclei with the same number of chromosomes. It consists of four distinct phases:

1. Prophase:
- Chromatin material condenses into thick, visible thread-like chromosomes.
- Each chromosome consists of two sister chromatids joined at a centromere.
- In animal cells, the centrosome duplicates and migrates to opposite poles, forming aster rays and mitotic spindle fibers made of microtubules.
- The nucleolus and nuclear envelope gradually disintegrate and disappear.

2. Metaphase:
- Spindle fibers attach to the kinetochores of chromosomes.
- Chromosomes are pulled to the equatorial plane of the cell and align in a straight line known as the Metaphase Plate (Equatorial Plate).
- This is the optimal stage for microscopic karyotyping and chromosome counting.

3. Anaphase:
- The centromere of each chromosome divides, separating the sister chromatids into daughter chromosomes.
- Kinetochore spindle fibers contract while non-kinetochore fibers elongate, pulling daughter chromosomes toward opposite poles of the cell in a characteristic 'V' or 'J' shape.

4. Telophase:
- The reverse of prophase occurs once chromosomes reach the poles.
- Chromosomes decondense, uncoil, and revert into diffuse chromatin threads.
- Nuclear envelope reassembles around each set of daughter chromosomes.
- Nucleoli reappear inside the newly formed nuclei, and spindle apparatus breaks down.

Followed by Cytokinesis:
In animal cells, cytokinesis occurs through a Cleavage Furrow that deepens from the cell cortex until the parent cell pinches into two separate daughter cells.`,
    keyPoints: [
      'Prophase: condensation, nuclear envelope vanishes, spindle develops',
      'Metaphase: chromosomes align at equatorial plate',
      'Anaphase: centromere splits, sister chromatids pulled to poles',
      'Telophase: nuclear envelopes reconstruct, chromatin uncoils',
      'Cytokinesis: cleavage furrow in animal cell'
    ]
  },

  // ==========================================
  // CHAPTER 6: ENZYMES
  // ==========================================
  {
    id: 'ch6-mcq-1',
    chapterNo: 6,
    chapterTitle: 'Enzymes',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'Chemically, almost all biological enzymes are composed of:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 6 Review Q1',
    options: {
      a: 'Carbohydrates',
      b: 'Globular Proteins',
      c: 'Triglycerides',
      d: 'Nucleic acids'
    },
    correctOption: 'b',
    explanation: 'Enzymes are three-dimensional globular proteins folded into precise tertiary structures with active sites.',
    modelAnswer: 'Correct Option: (b) Globular Proteins'
  },
  {
    id: 'ch6-mcq-2',
    chapterNo: 6,
    chapterTitle: 'Enzymes',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'The Induced Fit Model of enzyme-substrate interaction was proposed in 1958 by:',
    marks: 1,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 6, Section 6.2',
    options: {
      a: 'Emil Fischer',
      b: 'Daniel Koshland',
      c: 'Wilhelm Kuhne',
      d: 'Linus Pauling'
    },
    correctOption: 'b',
    explanation: 'Daniel Koshland proposed the Induced Fit Model, modifying Emil Fischer’s rigid Lock & Key model by stating that the active site is flexible.',
    modelAnswer: 'Correct Option: (b) Daniel Koshland'
  },
  {
    id: 'ch6-diff-1',
    chapterNo: 6,
    chapterTitle: 'Enzymes',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between the Lock and Key Model and the Induced Fit Model of enzyme mechanism.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 6 Review Q4',
    modelAnswer: `Lock and Key Model vs Induced Fit Model:

1. Proposed By: Lock and Key was proposed by German chemist Emil Fischer in 1894. Induced Fit was proposed by American biochemist Daniel Koshland in 1958.
2. Active Site Flexibility: The Lock and Key model postulates a rigid, pre-formed active site with a fixed geometric shape that fits only one specific substrate. The Induced Fit model asserts that the active site is flexible and molds around the substrate upon binding.
3. Conformational Change: Lock & Key suggests zero structural change upon binding. Induced Fit demonstrates that substrate binding induces conformational stress, straining substrate bonds and lowering activation energy.`,
    tabulatedData: {
      titleA: 'Lock & Key Model',
      titleB: 'Induced Fit Model',
      rows: [
        {
          parameter: 'Proposed By',
          itemA: 'Emil Fischer (1894).',
          itemB: 'Daniel Koshland (1958).'
        },
        {
          parameter: 'Active Site Rigidity',
          itemA: 'Rigid, non-flexible, pre-shaped geometric structure.',
          itemB: 'Flexible and dynamic; molds its shape to fit the substrate.'
        },
        {
          parameter: 'Conformational Change',
          itemA: 'No change occurs in active site during substrate attachment.',
          itemB: 'Substrate induces conformational realignment to catalyze reaction.'
        },
        {
          parameter: 'Modern Acceptance',
          itemA: 'Too rigid; cannot explain enzyme regulation or allostery.',
          itemB: 'Widely accepted as the accurate model of biocatalysis.'
        }
      ]
    },
    keyPoints: [
      'Emil Fischer (1894) vs Daniel Koshland (1958)',
      'Rigid static shape vs flexible dynamic conformation',
      'Catalytic stress on substrate bonds'
    ]
  },
  {
    id: 'ch6-reas-1',
    chapterNo: 6,
    chapterTitle: 'Enzymes',
    section: 'Section_B',
    subtype: 'reasoning',
    questionText: 'Why does human enzyme activity drop to zero when the temperature exceeds 50°C?',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 6, Section 6.3',
    modelAnswer: `Enzyme activity drops to zero above 50°C because of Enzyme Denaturation:

1. Thermal Kinetic Energy: At temperatures above the optimum (37°C for human enzymes), high thermal kinetic vibrations cause the protein molecule to oscillate violently.
2. Disruption of Hydrogen Bonds: The delicate non-covalent interactions (hydrogen bonds, ionic bonds, hydrophobic interactions) that maintain the 3D tertiary structure are broken.
3. Loss of Active Site Geometry: The precise shape of the catalytic active site is altered and destroyed.
4. Inability to Bind: The substrate can no longer fit into the denatured active site. This structural damage is irreversible, completely halting enzymatic catalysis.`,
    keyPoints: [
      'Optimum temperature is 37°C for human enzymes',
      'Excess thermal energy breaks hydrogen and ionic bonds',
      'Destroys tertiary shape of active site (irreversible denaturation)'
    ]
  },
  {
    id: 'ch6-long-1',
    chapterNo: 6,
    chapterTitle: 'Enzymes',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Explain the factors that affect the rate of enzyme action: (a) Temperature (b) pH (c) Substrate Concentration with graphical illustrations.',
    marks: 12,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 6, Section 6.3',
    modelAnswer: `FACTORS AFFECTING ENZYME ACTION

Enzymes are delicate biological catalysts whose rate of reaction is controlled by environmental parameters:

1. Effect of Temperature:
- Low Temperature: Enzyme activity is low because molecules have low kinetic energy, resulting in fewer collisions between enzyme and substrate.
- Optimum Temperature: As temperature increases, kinetic energy rises, increasing fruitful collisions. The rate reaches a maximum at the Optimum Temperature (approximately 37°C in humans).
- Above Optimum (>40°C - 50°C): Thermal vibration breaks hydrogen bonds maintaining the globular protein's tertiary conformation. The active site loses its shape, and the enzyme is irreversibly Denatured, causing activity to plummet to zero.

2. Effect of pH (Hydrogen Ion Concentration):
- Optimum pH: Every enzyme functions maximally within a narrow pH range known as its Optimum pH.
  * Pepsin (stomach protease): pH 1.5 - 2.0 (strongly acidic).
  * Salivary Amylase (oral cavity): pH 6.8 - 7.0 (neutral).
  * Trypsin (small intestine): pH 7.8 - 8.5 (alkaline).
- Any drastic deviation changes the ionic charge on the amino acid residues in the active site, disrupting binding and leading to reversible or irreversible denaturation.

3. Effect of Substrate Concentration:
- When enzyme concentration is kept constant and substrate concentration is increased, reaction rate initially increases proportionally because more active sites are engaged.
- Saturation Point (Vmax): As substrate concentration continues to rise, all active sites of the available enzyme molecules become fully occupied (saturated).
- Adding further substrate produces no increase in reaction rate; the reaction plateaus at its maximum velocity (Vmax). To increase the rate further, more enzyme must be added.`,
    keyPoints: [
      'Temperature: optimum 37°C, denaturation above 45-50°C',
      'pH: specific optimum for pepsin (2.0), amylase (7.0), trypsin (8.0)',
      'Substrate concentration: initial linear increase followed by saturation plateau (Vmax)'
    ]
  },

  // ==========================================
  // CHAPTER 7: BIOENERGETICS
  // ==========================================
  {
    id: 'ch7-mcq-1',
    chapterNo: 7,
    chapterTitle: 'Bioenergetics',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'The fundamental high-energy molecule produced during the light reaction of photosynthesis that provides chemical energy for dark reactions is:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 7 Review Q1',
    options: {
      a: 'ATP and NADPH',
      b: 'Glucose and Fructose',
      c: 'Pyruvate and Lactic acid',
      d: 'Carbon dioxide'
    },
    correctOption: 'a',
    explanation: 'The light reactions generate assimilatory power in the form of ATP (adenosine triphosphate) and NADPH, which power the Calvin cycle.',
    modelAnswer: 'Correct Option: (a) ATP and NADPH'
  },
  {
    id: 'ch7-mcq-2',
    chapterNo: 7,
    chapterTitle: 'Bioenergetics',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'The splitting of water molecules into hydrogen ions, electrons, and molecular oxygen in the presence of sunlight and chlorophyll is known as:',
    marks: 1,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 7, Section 7.2',
    options: {
      a: 'Hydrolysis',
      b: 'Photolysis',
      c: 'Glycolysis',
      d: 'Photophosphorylation'
    },
    correctOption: 'b',
    explanation: 'Photolysis (photo = light, lysis = splitting) occurs during the light reactions of photosynthesis where water is split to release electrons and oxygen gas.',
    modelAnswer: 'Correct Option: (b) Photolysis'
  },
  {
    id: 'ch7-diff-1',
    chapterNo: 7,
    chapterTitle: 'Bioenergetics',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Light Reaction and Dark Reaction (Calvin Cycle) of photosynthesis.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 7 Review Q4',
    modelAnswer: `Light Reaction vs Dark Reaction:

1. Location in Chloroplast: The light reaction takes place on the Thylakoid membranes (Grana) of chloroplasts where chlorophyll pigments are embedded. The dark reaction occurs in the fluid Stroma of the chloroplast.
2. Light Requirement: Light reaction is directly light-dependent and cannot proceed without solar photons. Dark reaction is light-independent (biochemical phase) and can take place in light or darkness provided ATP and NADPH are present.
3. Reactants & Products:
   - Light Reaction: Uses H2O and radiant energy; releases O2 gas as byproduct, producing ATP and NADPH.
   - Dark Reaction: Uses CO2 along with ATP and NADPH; reduces CO2 into Glucose (C6H12O6).`,
    tabulatedData: {
      titleA: 'Light Reaction (Photochemical)',
      titleB: 'Dark Reaction (Calvin Cycle)',
      rows: [
        {
          parameter: 'Site in Chloroplast',
          itemA: 'Thylakoid membranes (Grana).',
          itemB: 'Stroma (aqueous fluid matrix).'
        },
        {
          parameter: 'Light Dependency',
          itemA: 'Directly light-dependent; requires solar photons.',
          itemB: 'Light-independent; utilizes ATP and NADPH synthesized in light.'
        },
        {
          parameter: 'Primary Substrate',
          itemA: 'Water (H2O) split via Photolysis.',
          itemB: 'Carbon dioxide (CO2) fixed by RuBisCO.'
        },
        {
          parameter: 'End Products',
          itemA: 'ATP, NADPH, and O2 gas (released to atmosphere).',
          itemB: 'Glucose (C6H12O6), ADP, and NADP+.'
        }
      ]
    },
    keyPoints: [
      'Thylakoid grana vs Stroma',
      'Light dependent vs independent',
      'Photolysis of H2O yielding O2 vs CO2 fixation yielding Glucose'
    ]
  },
  {
    id: 'ch7-diff-2',
    chapterNo: 7,
    chapterTitle: 'Bioenergetics',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Aerobic Respiration and Anaerobic Respiration (Fermentation).',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 7 Review Q4',
    modelAnswer: `Aerobic vs Anaerobic Respiration:

1. Oxygen Requirement: Aerobic respiration requires molecular oxygen (O2) for complete oxidation of glucose. Anaerobic respiration occurs in the complete absence of oxygen.
2. Breakdown of Glucose: Aerobic respiration achieves complete oxidation of glucose into CO2 and H2O. Anaerobic respiration involves incomplete breakdown into Ethyl Alcohol + CO2 (Alcoholic fermentation) or Lactic Acid (Lactic acid fermentation).
3. Energy Yield: Aerobic respiration produces high net energy (~36 to 38 ATP molecules per glucose). Anaerobic respiration produces low net energy (only 2 ATP molecules per glucose).
4. Cellular Site: Aerobic occurs in both Cytoplasm (Glycolysis) and Mitochondria (Krebs cycle & ETC). Anaerobic occurs solely in the Cytoplasm.`,
    tabulatedData: {
      titleA: 'Aerobic Respiration',
      titleB: 'Anaerobic Respiration',
      rows: [
        {
          parameter: 'Oxygen Requirement',
          itemA: 'Requires free molecular oxygen (O2).',
          itemB: 'Occurs in the total absence of oxygen.'
        },
        {
          parameter: 'Site in Cell',
          itemA: 'Starts in Cytoplasm; completed in Mitochondria.',
          itemB: 'Occurs entirely within the Cytoplasm.'
        },
        {
          parameter: 'End Products',
          itemA: 'Carbon dioxide (CO2) and Water (H2O).',
          itemB: 'Lactic acid (in muscles) or Ethanol + CO2 (in yeast).'
        },
        {
          parameter: 'Energy Output',
          itemA: 'High yield (~36 to 38 ATP per glucose).',
          itemB: 'Low yield (only 2 ATP per glucose molecule).'
        }
      ]
    },
    keyPoints: [
      'O2 presence vs absence',
      'Complete oxidation to CO2 + H2O vs partial oxidation to lactic acid/ethanol',
      '36-38 ATP vs 2 ATP'
    ]
  },
  {
    id: 'ch7-long-1',
    chapterNo: 7,
    chapterTitle: 'Bioenergetics',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Describe the structure and role of ATP as the universal energy currency of living cells. Explain how ATP is synthesized and hydrolyzed.',
    marks: 12,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 7, Section 7.1',
    modelAnswer: `ADENOSINE TRIPHOSPHATE (ATP) - THE ENERGY CURRENCY OF THE CELL

1. Molecular Structure:
ATP is a nucleotide composed of three distinct chemical subunits:
- Adenine: A nitrogenous double-ring purine base.
- Ribose: A five-carbon pentose sugar ring.
- Three Phosphate Groups (PO4): Linked in series to the ribose sugar.
  * The bond between ribose and the first phosphate is a standard low-energy bond.
  * The two bonds connecting the second and third phosphate groups are High-Energy Phosphate Bonds (denoted by a wavy line '~').

2. Mechanism of Energy Release (Hydrolysis):
When a cell requires energy for metabolic work (muscle contraction, active transport, nerve impulse, protein synthesis), the terminal high-energy phosphate bond is cleaved by hydrolysis:
  ATP + H2O ──(ATPase)──> ADP + Pi + 7.3 kcal/mol (31.8 kJ/mol)
If further energy is needed, ADP can be hydrolyzed into Adenosine Monophosphate (AMP):
  ADP + H2O ──> AMP + Pi + 7.3 kcal/mol

3. Regeneration / Synthesis of ATP:
ATP is continuously regenerated by combining ADP with inorganic phosphate (Pi), powered by the chemical energy extracted from cellular respiration or photosynthesis:
  ADP + Pi + Energy (7.3 kcal/mol) ──(ATP Synthase)──> ATP + H2O
This cyclical interconversion is called the ATP-ADP Cycle.

4. Major Roles of ATP in Living Organisms:
- Chemical Work: Provides energy for synthesizing macromolecules (proteins, DNA, glycogen).
- Mechanical Work: Drives muscular contraction, movement of cilia and flagella, and chromosome separation during mitosis.
- Transport Work: Powers active transport across cell membranes (e.g. Sodium-Potassium pump).`,
    keyPoints: [
      'Components: Adenine, Ribose, 3 Phosphate groups',
      'High-energy phosphate bonds (~P) storing 7.3 kcal/mol',
      'Hydrolysis equation yielding ADP + Pi + 7.3 kcal',
      'Synthesis equation from ADP + Pi',
      'Primary cellular functions (chemical, mechanical, transport)'
    ]
  },

  // ==========================================
  // CHAPTER 8: NUTRITION
  // ==========================================
  {
    id: 'ch8-mcq-1',
    chapterNo: 8,
    chapterTitle: 'Nutrition',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'Severe deficiency of Vitamin C (Ascorbic acid) in human diet leads to the deficiency disease called:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 8 Review Q1',
    options: {
      a: 'Beriberi',
      b: 'Scurvy',
      c: 'Rickets',
      d: 'Night Blindness'
    },
    correctOption: 'b',
    explanation: 'Vitamin C is vital for collagen synthesis. Its deficiency causes Scurvy, characterized by bleeding spongy gums, loose teeth, and poor wound healing.',
    modelAnswer: 'Correct Option: (b) Scurvy'
  },
  {
    id: 'ch8-mcq-2',
    chapterNo: 8,
    chapterTitle: 'Nutrition',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'Which organ produces Bile, the fluid that emulsifies fats in the small intestine?',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 8, Section 8.3',
    options: {
      a: 'Gallbladder',
      b: 'Pancreas',
      c: 'Liver',
      d: 'Stomach'
    },
    correctOption: 'c',
    explanation: 'Bile is synthesized by the Liver and stored/concentrated in the Gallbladder before being discharged into the Duodenum.',
    modelAnswer: 'Correct Option: (c) Liver'
  },
  {
    id: 'ch8-diff-1',
    chapterNo: 8,
    chapterTitle: 'Nutrition',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Kwashiorkor and Marasmus (two forms of Protein-Energy Malnutrition).',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 8 Review Q4',
    modelAnswer: `Kwashiorkor vs Marasmus:

1. Cause: Kwashiorkor is caused by severe protein deficiency while caloric intake is somewhat adequate. Marasmus is caused by an overall deficiency of both proteins and calories (total starvation).
2. Age Group: Kwashiorkor typically affects children aged 1 to 3 years when weaned onto low-protein carbohydrates. Marasmus affects infants under 1 year of age.
3. Edema (Fluid Swelling): Kwashiorkor presents with severe edema (swelling of abdomen, legs, and face called "pot-belly"). Marasmus shows no edema; the infant appears skeletal, wasted, with withered skin and sunken eyes.`,
    tabulatedData: {
      titleA: 'Kwashiorkor',
      titleB: 'Marasmus',
      rows: [
        {
          parameter: 'Primary Cause',
          itemA: 'Severe protein deficiency with adequate caloric (carb) intake.',
          itemB: 'Severe deficiency of both proteins and total calories.'
        },
        {
          parameter: 'Age of Occurrence',
          itemA: 'Common in toddlers aged 1 to 3 years.',
          itemB: 'Common in infants under 1 year of age.'
        },
        {
          parameter: 'Edema (Swelling)',
          itemA: 'Marked edema present (pot-belly, swollen limbs).',
          itemB: 'No edema; body is severely emaciated with skin and bones.'
        },
        {
          parameter: 'Subcutaneous Fat',
          itemA: 'Some subcutaneous fat is preserved.',
          itemB: 'Subcutaneous fat is completely depleted.'
        }
      ]
    },
    keyPoints: [
      'Protein deficiency only vs Total calorie + protein starvation',
      'Age 1-3 years vs Under 1 year',
      'Edema / pot-belly present vs completely emaciated skeletal frame'
    ]
  },
  {
    id: 'ch8-reas-1',
    chapterNo: 8,
    chapterTitle: 'Nutrition',
    section: 'Section_B',
    subtype: 'reasoning',
    questionText: 'Why does the stomach not digest itself despite producing powerful hydrochloric acid (HCl) and protein-digesting pepsin?',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 8, Section 8.3',
    modelAnswer: `The stomach protects its own gastric mucosa through three vital adaptations:

1. Thick Alkaline Mucus Barrier: Goblet cells and mucus glands in the stomach wall secrete a thick, bicarbonate-rich mucus layer that lines the inner gastric epithelium, neutralizing acid near the cell surface.
2. Secretion of Pepsin in Inactive Form: The chief cells produce the protease as Pepsinogen (an inactive zymogen). It is only activated into destructive Pepsin in the gastric lumen after mixing with luminal HCl away from cellular interiors.
3. Rapid Epithelial Regeneration: The epithelial lining of the stomach is rapidly renewed every 3 to 5 days, quickly replacing any mildly damaged mucosal cells.`,
    keyPoints: [
      'Bicarbonate-rich mucus barrier shield',
      'Pepsin secreted as inactive precursor (pepsinogen)',
      'Rapid turnover of mucosal epithelial cells'
    ]
  },
  {
    id: 'ch8-long-1',
    chapterNo: 8,
    chapterTitle: 'Nutrition',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Describe the digestion and absorption of food in the Human Small Intestine (Duodenum, Jejunum, and Ileum). Explain the role of villi in absorption.',
    marks: 12,
    difficulty: 'hard',
    textbookRef: 'STBB Class 9 Biology, Chapter 8, Section 8.3',
    diagramNote: 'Diagram of Human Alimentary Canal highlighting Duodenum, Pancreas, Gallbladder, Liver, Jejunum, Ileum, and microscopic cross-section of an intestinal Villus with microvilli, capillary network, and central lacteal.',
    modelAnswer: `DIGESTION AND ABSORPTION IN THE HUMAN SMALL INTESTINE

The small intestine is the principal organ where chemical digestion is completed and virtually all nutrients are absorbed into the bloodstream. It consists of three anatomical sections:

1. Duodenum (First 25 cm):
Receives acidic chyme from the stomach and secretions from two major glands:
- Bile (from Liver via Gallbladder): Contains no enzymes, but bile salts emulsify large fat globules into tiny droplets (increasing surface area) and neutralize stomach acid.
- Pancreatic Juice (from Pancreas): Contains:
  * Pancreatic Amylase: Digests remaining starch into maltose.
  * Trypsin: Cleaves proteins and polypeptides into smaller peptides.
  * Pancreatic Lipase: Hydrolyzes emulsified fats into fatty acids and glycerol.

2. Jejunum and Ileum (Chemical Completion):
The intestinal wall secretes Intestinal Juice containing enzymes that complete breakdown:
- Peptidases (Erepsin): Break peptides into single Amino Acids.
- Disaccharidases (Maltase, Sucrase, Lactase): Convert disaccharides into monosaccharides (Glucose, Fructose, Galactose).
- Intestinal Lipase: Completes digestion of lipids.

3. Absorption Through Villi:
The inner mucosal lining of the Ileum is adapted for maximum absorption through millions of microscopic finger-like projections called Villi, which possess Microvilli on their epithelial surface:
- Surface Area Amplification: Increases the surface area of absorption manifold.
- Vascular Capillary Network: Surrounds each villus. Amino acids and monosaccharides (glucose) are absorbed into capillaries by active transport and facilitated diffusion, entering the Hepatic Portal Vein toward the liver.
- Central Lacteal: A blind lymphatic vessel at the core of each villus. Fatty acids and glycerol reassemble into chylomicrons and enter the lacteal, entering the lymphatic system before pouring into the thoracic duct.`,
    keyPoints: [
      'Duodenum actions: Bile emulsification + Pancreatic juice (amylase, trypsin, lipase)',
      'Jejunum & Ileum enzymes (peptidases, maltase, sucrase, lipase)',
      'Structure of Villus: epithelial layer, microvilli, blood capillaries, central lacteal',
      'Capillaries absorb amino acids & glucose; lacteal absorbs lipids'
    ]
  },

  // ==========================================
  // CHAPTER 9: TRANSPORT
  // ==========================================
  {
    id: 'ch9-mcq-1',
    chapterNo: 9,
    chapterTitle: 'Transport',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'The loss of water in the form of water vapor from the aerial parts of a plant, primarily through stomata, is called:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 9 Review Q1',
    options: {
      a: 'Guttation',
      b: 'Transpiration',
      c: 'Imbibition',
      d: 'Plasmolysis'
    },
    correctOption: 'b',
    explanation: 'Transpiration is the evaporative loss of water vapor from leaves and stems, creating the transpirational pull that drives sap ascent.',
    modelAnswer: 'Correct Option: (b) Transpiration'
  },
  {
    id: 'ch9-mcq-2',
    chapterNo: 9,
    chapterTitle: 'Transport',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'In the human ABO blood group system, an individual possessing both antigen A and antigen B on their red blood cells is known as the:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 9, Section 9.3',
    options: {
      a: 'Universal Donor',
      b: 'Universal Recipient',
      c: 'Rh Negative',
      d: 'Heterozygous O'
    },
    correctOption: 'b',
    explanation: 'Blood group AB individuals have both A and B antigens on RBCs and lack anti-A and anti-B antibodies in plasma, making them universal recipients.',
    modelAnswer: 'Correct Option: (b) Universal Recipient'
  },
  {
    id: 'ch9-mcq-3',
    chapterNo: 9,
    chapterTitle: 'Transport',
    section: 'Section_A',
    subtype: 'mcq',
    questionText: 'The movement of manufactured organic food (sucrose) through phloem sieve tubes is called:',
    marks: 1,
    difficulty: 'easy',
    textbookRef: 'STBB Class 9 Biology, Chapter 9, Section 9.2',
    options: {
      a: 'Transpiration',
      b: 'Translocation',
      c: 'Ascent of Sap',
      d: 'Guttation'
    },
    correctOption: 'b',
    explanation: 'Translocation is the transport of soluble organic food products from source (leaves) to sink (roots, fruits) via phloem.',
    modelAnswer: 'Correct Option: (b) Translocation'
  },
  {
    id: 'ch9-diff-1',
    chapterNo: 9,
    chapterTitle: 'Transport',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Arteries, Veins, and Capillaries in tabulated form.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 9 Review Q4',
    modelAnswer: `Arteries vs Veins vs Capillaries:

1. Direction of Blood Flow: Arteries carry blood away from the heart to body organs. Veins return blood back toward the heart. Capillaries connect arterioles to venules within tissues.
2. Blood Pressure and Flow: In arteries, blood flows under high pressure in rapid surges. In veins, blood flows under low, steady pressure. In capillaries, blood flows slowly under low pressure to facilitate nutrient exchange.
3. Wall Structure: Arteries have thick, highly muscular, and elastic walls. Veins have thinner muscular walls with wider lumens. Capillaries consist of a single layer of endothelial cells without muscle or elastic tissue.
4. Valves: Arteries have no internal valves (except semilunar valves at exits of ventricles). Veins possess semilunar valves to prevent backflow of blood. Capillaries have no valves.`,
    tabulatedData: {
      titleA: 'Arteries',
      titleB: 'Veins',
      rows: [
        {
          parameter: 'Direction of Flow',
          itemA: 'Carry blood away from heart toward organs.',
          itemB: 'Carry blood toward heart from tissues.'
        },
        {
          parameter: 'Wall Thickness & Muscle',
          itemA: 'Thick, muscular, and highly elastic walls.',
          itemB: 'Thin muscular wall with wide lumen.'
        },
        {
          parameter: 'Internal Valves',
          itemA: 'Absent (blood driven by ventricular pressure).',
          itemB: 'Present (semilunar valves prevent backflow).'
        },
        {
          parameter: 'Oxygenation Status',
          itemA: 'Carry oxygenated blood (except Pulmonary Artery).',
          itemB: 'Carry deoxygenated blood (except Pulmonary Veins).'
        }
      ]
    },
    keyPoints: [
      'Away from heart vs Toward heart',
      'Thick elastic muscular wall vs Thin wall with wide lumen',
      'No valves vs Semilunar valves present',
      'Oxygenated (except pulmonary artery) vs Deoxygenated (except pulmonary vein)'
    ]
  },
  {
    id: 'ch9-diff-2',
    chapterNo: 9,
    chapterTitle: 'Transport',
    section: 'Section_B',
    subtype: 'difference',
    questionText: 'Differentiate between Xylem and Phloem tissues in vascular plants.',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 9 Review Q4',
    modelAnswer: `Xylem vs Phloem:

1. Transport Substance: Xylem transports water and dissolved mineral ions upward from roots to leaves (Ascent of sap). Phloem transports manufactured organic food (sucrose and amino acids) from source to sinks (Translocation).
2. Direction of Transport: Xylem transport is strictly unidirectional (upward). Phloem transport is bidirectional (both upward to buds/fruits and downward to roots).
3. Living Status of Elements: Mature conducting elements of xylem (vessels and tracheids) are non-living (dead at maturity) with lignified cell walls. Conducting elements of phloem (sieve tube elements and companion cells) are living cells with cellulose walls.`,
    tabulatedData: {
      titleA: 'Xylem Tissue',
      titleB: 'Phloem Tissue',
      rows: [
        {
          parameter: 'Material Transported',
          itemA: 'Water and dissolved inorganic minerals (Ascent of Sap).',
          itemB: 'Soluble organic food, mainly sucrose (Translocation).'
        },
        {
          parameter: 'Direction of Flow',
          itemA: 'Unidirectional (strictly upward from roots to foliage).',
          itemB: 'Bidirectional (upward to growing shoots and downward to storage roots).'
        },
        {
          parameter: 'Conducting Cells',
          itemA: 'Xylem Vessels and Tracheids (dead at maturity with thick lignified walls).',
          itemB: 'Sieve tube elements and Companion cells (living cells with thin cellulose walls).'
        },
        {
          parameter: 'Driving Force',
          itemA: 'Transpirational pull (physical suction force).',
          itemB: 'Hydrostatic pressure gradient (Pressure-Flow hypothesis).'
        }
      ]
    },
    keyPoints: [
      'Water/minerals vs Organic food (sucrose)',
      'Unidirectional upward vs Bidirectional',
      'Dead lignified vessels vs Living sieve tubes + companion cells'
    ]
  },
  {
    id: 'ch9-reas-1',
    chapterNo: 9,
    chapterTitle: 'Transport',
    section: 'Section_B',
    subtype: 'reasoning',
    questionText: 'Why is Transpiration described by botanist Curtis as a "Necessary Evil"?',
    marks: 4,
    difficulty: 'medium',
    textbookRef: 'STBB Class 9 Biology, Chapter 9, Section 9.1',
    modelAnswer: `Transpiration is termed a "necessary evil" because:

Why it is an EVIL:
1. Massive Water Loss: Plants lose over 90% of the water absorbed by their roots through transpiration.
2. Wilting & Death: Under hot, arid, or windy conditions, transpirational water loss outpaces root water absorption, causing cells to lose turgor, leading to wilting, desiccation, and plant death.

Why it is NECESSARY:
1. Ascent of Sap: It creates the Transpirational Pull, the primary physical driving force that pulls water and minerals hundreds of feet up tall trees against gravity.
2. Evaporative Cooling: Evaporation of water lowers leaf temperature by several degrees, preventing thermal damage to enzymes and photosynthetic apparatus in scorching sunlight.
3. Mineral Uptake: It maintains continuous upward flow of soil nutrients needed for growth.
Thus, though it carries dangerous risks of water deficit, plant survival is impossible without it.`,
    keyPoints: [
      'Why evil: excessive water loss (>90%), wilting and potential desiccation',
      'Why necessary: generates transpirational pull for sap ascent, evaporative cooling'
    ]
  },
  {
    id: 'ch9-long-1',
    chapterNo: 9,
    chapterTitle: 'Transport',
    section: 'Section_C',
    subtype: 'detailed',
    questionText: 'Describe the internal structure and working mechanism of the Human Heart with a labeled diagram of its longitudinal section.',
    marks: 12,
    difficulty: 'hard',
    textbookRef: 'STBB Class 9 Biology, Chapter 9, Section 9.3',
    diagramNote: 'Longitudinal section of Human Heart showing Superior and Inferior Vena Cava, Right Atrium, Tricuspid Valve, Right Ventricle, Pulmonary Artery, Pulmonary Veins, Left Atrium, Bicuspid (Mitral) Valve, Left Ventricle, Aortic Semilunar Valve, and thick muscular Interventricular Septum.',
    modelAnswer: `STRUCTURE AND WORKING OF THE HUMAN HEART

The human heart is a hollow, muscular, four-chambered cone-shaped organ situated in the thoracic cavity between the lungs, enclosed within a double-layered protective pericardium.

1. Internal Anatomy:
- Four Chambers:
  * Two Atria (Upper Chambers): Thin-walled receiving chambers (Right Atrium and Left Atrium).
  * Two Ventricles (Lower Chambers): Thick-walled pumping chambers (Right Ventricle and Left Ventricle). The left ventricle wall is 3 times thicker than the right because it pumps blood against high systemic resistance to the entire body.
- Septum: A thick muscular Interatrial and Interventricular Septum completely separates the right and left sides, preventing the mixing of deoxygenated and oxygenated blood.

2. Heart Valves (Ensuring Unidirectional Flow):
- Atrioventricular (AV) Valves:
  * Tricuspid Valve: Located between Right Atrium and Right Ventricle (3 cusps).
  * Bicuspid (Mitral) Valve: Located between Left Atrium and Left Ventricle (2 cusps).
  Held in place by tough fibrous cords called Chordae Tendineae anchored to papillary muscles.
- Semilunar Valves:
  * Pulmonary Semilunar Valve: At the base of the Pulmonary Artery.
  * Aortic Semilunar Valve: At the base of the Systemic Aorta.

3. Flow Mechanism (Double Circulation):
- Pulmonary Circulation (Deoxygenated Blood):
  1. Deoxygenated blood from the upper and lower body enters the Right Atrium via Superior and Inferior Vena Cava.
  2. Right Atrium contracts, pushing blood through the open Tricuspid Valve into the Right Ventricle.
  3. Right Ventricle contracts, pumping blood through the Pulmonary Semilunar Valve into the Pulmonary Artery leading to the lungs for oxygenation.
- Systemic Circulation (Oxygenated Blood):
  1. Freshly oxygenated blood from the lungs returns via four Pulmonary Veins into the Left Atrium.
  2. Left Atrium contracts, driving blood through the Bicuspid (Mitral) Valve into the Left Ventricle.
  3. Left Ventricle contracts powerfully, sending oxygenated blood through the Aortic Valve into the Aorta, which distributes it to all tissues of the body.`,
    keyPoints: [
      'Four chambers (2 thin atria, 2 thick ventricles, left ventricle thickest)',
      'Interventricular septum preventing blood mixing',
      'Valves: Tricuspid, Bicuspid (Mitral), and Semilunar valves with chordae tendineae',
      'Stepwise tracing of double circulation: Pulmonary vs Systemic loop'
    ]
  }
];
