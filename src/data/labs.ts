import type { FocusArea } from './faculty';

export interface Lab {
  id: string;
  name: string;
  slug: string;
  director: string;
  focusAreas: FocusArea[];
  description: string;
  equipment: string[];
  location: string;
  contact: string;
  /** If true, appears in the Analytical Laboratories nav dropdown */
  analytical?: boolean;
  services?: string[];
  connectUrl?: string;
}

export const labs: Lab[] = [
  {
    id: 'l12',
    name: 'Stable Isotope & Organic Molecular Biogeochemistry Laboratory',
    slug: 'stable-isotope-organic-molecular-biogeochemistry-lab',
    director: 'Michael Hren',
    focusAreas: ['soil', 'water'],
    description:
      'The Stable Isotope and Organic Molecular Biogeochemistry Laboratory investigates the cycling of carbon, hydrogen, and other elements through Earth\'s surface environments using molecular-level organic geochemistry and stable isotope approaches. Research spans paleoclimate reconstruction from speleothems and lake sediments, blue carbon dynamics in coastal wetlands, and fire-climate-vegetation interactions recorded in geological archives. The lab integrates compound-specific isotope analysis (CSIA), lipid biomarker quantification, and mass spectrometric screening to link modern ecosystem processes with the deep-time and historical records they leave behind.',
    equipment: [
      'GC–isotope ratio mass spectrometer (GC-IRMS) for compound-specific δ¹³C and δD of leaf waxes and biomarkers',
      'Elemental analyzer – IRMS (EA-IRMS) for bulk δ¹³C, δ¹⁵N, and %C/%N of sediments and organic matter',
      'UHPLC–MS/MS (triple quadrupole) for quantification of PAHs, anhydrosugars, and lipid biomarkers',
      'Accelerated solvent extractor (ASE 350) for lipid extraction from sediment, soil, and carbonate',
      'Automated solid-phase extraction (SPE) for sample cleanup and compound class separation',
      'Rotary evaporator and nitrogen blow-down concentrator for solvent reduction',
      'Freeze-dryer for sample preparation of wet sediment and organic-rich materials',
    ],
    location: 'Castleman Building, Room 203, Storrs Campus',
    contact: 'michael.hren@uconn.edu',
  },
  {
    id: 'l1',
    name: 'Environmental Biotechnology Laboratory',
    slug: 'environmental-biotechnology-lab',
    director: 'Baikun Li',
    focusAreas: ['water'],
    description:
      'The Environmental Biotechnology Laboratory (EBL) pioneers microbial electrochemical technologies for wastewater treatment and energy recovery. EBL develops and scales microbial fuel cells (MFCs), microbial electrolysis cells (MECs), and bioelectrochemical systems for decentralized water infrastructure.',
    equipment: [
      'Multichannel potentiostat/galvanostat (BioLogic VSP-300)',
      'Gas chromatograph for H2/CH4 analysis (Shimadzu GC-2014)',
      'Dissolved oxygen and nutrient analyzers',
      'Scanning electron microscope (JEOL JSM-6010LA)',
      'Anaerobic glovebox',
      'Flow-through reactor systems (1 L – 100 L)',
    ],
    location: 'Castleman Building, Room 205, Storrs Campus',
    contact: 'baikun.li@uconn.edu',
  },
  {
    id: 'l2',
    name: 'Nanostructured Membrane Laboratory',
    slug: 'nanostructured-membrane-lab',
    director: 'Jeff McCutcheon',
    focusAreas: ['water'],
    description:
      'The Nanostructured Membrane Laboratory (NML) designs, fabricates, and characterizes advanced membranes for water purification and desalination. Research areas include forward osmosis, reverse osmosis, membrane distillation, and electrospun nanofiber membranes.',
    equipment: [
      'Electrospinning systems (single- and co-axial)',
      'Cross-flow membrane test cells',
      'Forward osmosis bench-scale systems',
      'Atomic force microscope (AFM)',
      'Contact angle goniometer',
      'Zeta potential analyzer',
      'FESEM for membrane morphology',
    ],
    location: 'Engineering II, Room 318, Storrs Campus',
    contact: 'jeff.mccutcheon@uconn.edu',
  },
  {
    id: 'l3',
    name: 'Aquatic Biogeochemistry Laboratory',
    slug: 'aquatic-biogeochemistry-lab',
    director: 'Ashley Helton',
    focusAreas: ['water', 'soil'],
    description:
      'The Aquatic Biogeochemistry Laboratory investigates nutrient cycling, contaminant fate, and microbial processes at the interface of water and land in urban watersheds. Field-collected samples are analyzed for stable isotopes, dissolved nutrients, and organic matter composition.',
    equipment: [
      'Elemental analyzer / isotope ratio mass spectrometer (EA-IRMS)',
      'Ion chromatograph for anion analysis',
      'Total organic carbon (TOC) analyzer',
      'Fluorescence spectrophotometer (EEMs)',
      'Continuous water quality sondes',
      'Automated stream water samplers',
    ],
    location: 'Torrey Life Science Building, Room 404, Storrs Campus',
    contact: 'ashley.helton@uconn.edu',
  },
  {
    id: 'l4',
    name: 'Urban Ecology & Forest Systems Laboratory',
    slug: 'urban-ecology-forest-systems-lab',
    director: 'Robert Fahey',
    focusAreas: ['soil'],
    description:
      'The Urban Ecology & Forest Systems Laboratory studies how urban trees and soils provide ecosystem services, from carbon storage to stormwater regulation. The lab integrates field ecology, soil science, and remote sensing to assess urban green infrastructure across New England.',
    equipment: [
      'Portable photosynthesis system (LI-COR LI-6800)',
      'Soil CO2 flux chambers (LI-COR LI-8100A)',
      'Increment borers and dendrometers',
      'Terrestrial LiDAR scanner (FARO Focus)',
      'Soil coring equipment (up to 1 m depth)',
      'Soil nutrient extraction and analysis bench',
    ],
    location: 'Wood Hall, Room 109, Storrs Campus',
    contact: 'robert.fahey@uconn.edu',
  },
  {
    id: 'l5',
    name: 'Soil Microfluidics & Bioremediation Laboratory',
    slug: 'soil-microfluidics-bioremediation-lab',
    director: 'Leslie Shor',
    focusAreas: ['soil', 'water'],
    description:
      'The Soil Microfluidics & Bioremediation Laboratory develops transparent, microfluidic pore-network devices that replicate soil and sediment architectures at the pore scale. These platforms enable real-time imaging of microbial activity, contaminant transport, and biofilm formation to inform field-scale bioremediation design.',
    equipment: [
      'Confocal laser scanning microscope (Zeiss LSM 900)',
      'Soft lithography (PDMS) fabrication facility',
      'High-speed fluorescence microscopy system',
      'Microfluidic pump and pressure controller arrays',
      'Particle tracking velocimetry (PTV) system',
      'Fluorescence plate reader',
    ],
    location: 'Engineering II, Room 207, Storrs Campus',
    contact: 'leslie.shor@uconn.edu',
  },
  {
    id: 'l6',
    name: 'Contaminant Fate & Transport Laboratory',
    slug: 'contaminant-fate-transport-lab',
    director: 'Tim Vadas',
    focusAreas: ['water', 'air'],
    description:
      'The Contaminant Fate & Transport Laboratory quantifies the occurrence, transport, and transformation of emerging contaminants—including PFAS, microplastics, and pharmaceuticals—in urban water bodies and the atmosphere. Field and laboratory studies directly support regulatory decision-making and remediation planning.',
    equipment: [
      'High-performance liquid chromatograph – triple quadrupole mass spectrometer (HPLC-MS/MS)',
      'Gas chromatograph – mass spectrometer (GC-MS)',
      'Microplastic extraction and fluorescence analysis bench',
      'Passive air samplers (polyurethane foam, XAD)',
      'Stormwater runoff simulation flume',
      'Freeze dryer for sample processing',
    ],
    location: 'Castleman Building, Room 310, Storrs Campus',
    contact: 'tim.vadas@uconn.edu',
  },
  {
    id: 'l7',
    name: 'GIS & Environmental Spatial Analysis Laboratory',
    slug: 'gis-environmental-spatial-analysis-lab',
    director: 'Chuanrong (Cindy) Zhang',
    focusAreas: ['air', 'soil'],
    description:
      'The GIS & Environmental Spatial Analysis Laboratory develops and applies geospatial methods—including machine learning, geostatistics, and remote sensing—to map environmental hazards and monitor ecosystem changes. Applications include urban air quality, soil contamination, and land cover dynamics.',
    equipment: [
      'ArcGIS Pro and QGIS workstations (20-seat lab)',
      'ERDAS Imagine and ENVI remote sensing software',
      'GPU-accelerated computing cluster (4× NVIDIA A100)',
      'Drone photogrammetry kit (DJI Matrice 300 RTK + P1 camera)',
      'Portable XRF soil analyzer',
      'Ground truth GPS (Trimble R10)',
    ],
    location: 'Beach Hall, Room 214, Storrs Campus',
    contact: 'chuanrong.zhang@uconn.edu',
  },
  {
    id: 'l8',
    name: 'Wetland & Plant Ecology Laboratory',
    slug: 'wetland-plant-ecology-lab',
    director: 'Beth Lawrence',
    focusAreas: ['soil', 'water'],
    description:
      'The Wetland & Plant Ecology Laboratory investigates how plant communities and soil microbial networks interact to regulate carbon, nitrogen, and water fluxes in urban and suburban wetlands. The lab combines mesocosm experiments, field monitoring, and molecular ecology techniques.',
    equipment: [
      'Greenhouse mesocosm facility (16 controlled tanks)',
      'Portable gas exchange system for plant physiology',
      'Soil moisture and temperature datalogger networks',
      'qPCR for microbial community quantification',
      'Stable isotope preparation benches',
      'Peat corer and volumetric soil sampler',
    ],
    location: 'Torrey Life Science Building, Room 201, Storrs Campus',
    contact: 'beth.lawrence@uconn.edu',
  },
  {
    id: 'l9',
    name: 'Organic Molecular Analysis Laboratory',
    slug: 'organic-molecular-analysis-laboratory',
    director: 'Anthony Provatas',
    focusAreas: ['water', 'air', 'soil'],
    analytical: true,
    description:
      'The Organic Molecular Analysis Laboratory (OMAL) provides state-of-the-art analytical services for the identification and quantification of organic compounds in environmental matrices—water, air, soil, sediment, and biological tissue. OMAL supports both CESE-affiliated research projects and external collaborators from academia, government, and industry seeking expert environmental chemistry analysis.',
    equipment: [
      'High-performance liquid chromatograph – triple quadrupole mass spectrometer (HPLC-MS/MS) for PFAS, pharmaceuticals, and pesticides',
      'Gas chromatograph – high-resolution mass spectrometer (GC-HRMS) for PAHs, PCBs, and dioxins',
      'Gas chromatograph – triple quadrupole mass spectrometer (GC-MS/MS) for volatile and semi-volatile organics',
      'Ultra-performance liquid chromatograph – quadrupole time-of-flight (UPLC-QTOF) for non-targeted screening',
      'Total organic carbon (TOC) / total nitrogen (TN) analyzer',
      'Automated solid-phase extraction (SPE) workstation',
      'Freeze-dryer and rotary evaporator for sample concentration',
      'Fume hoods and clean-room preparation space',
    ],
    services: [
      'PFAS quantification in water, soil, and biosolids (EPA Methods 533, 537.1)',
      'Pesticide and herbicide screening in surface water and groundwater',
      'Polycyclic aromatic hydrocarbon (PAH) analysis in sediments',
      'Pharmaceutical and personal care product (PPCP) detection',
      'Non-targeted organic contaminant screening',
      'Microplastic-associated organic additive analysis',
      'Method development and validation for novel analytes',
      'Quality assurance / quality control (QA/QC) reporting',
    ],
    location: 'Castleman Building, Room 112, Storrs Campus',
    contact: 'cese-omal@uconn.edu',
    connectUrl: 'mailto:cese-omal@uconn.edu',
  },
  {
    id: 'l11',
    name: 'PerkinElmer Innovation Laboratory',
    slug: 'perkinelmer-innovation-lab',
    director: 'Christopher Perkins',
    focusAreas: ['water', 'air', 'soil'],
    analytical: true,
    description:
      'The PerkinElmer Innovation Laboratory is a collaborative analytical facility operated in partnership with PerkinElmer, Inc. As a designated PerkinElmer Center of Excellence, the lab provides access to leading separations science, elemental spectroscopy, and thermal analysis platforms for environmental, biomedical, and materials research.',
    equipment: [
      'ICP-OES Avio 550 Max for simultaneous multi-element environmental analysis',
      'Flexar UHPLC system for high-resolution separations of complex environmental matrices',
      'QSight 420 LC-MS/MS triple quadrupole for trace contaminant screening',
      'AAnalyst 800 atomic absorption spectrometer (flame and graphite furnace)',
      'DSC 8500 differential scanning calorimeter for thermal characterization',
      'TGA 8000 thermogravimetric analyzer for organic matter and moisture quantification',
      'EnVision multimode microplate reader for high-throughput toxicology screening',
    ],
    services: [
      'Multi-element water quality analysis',
      'PFAS and pesticide screening by UHPLC-MS/MS',
      'Thermal analysis of soils and engineered materials (TGA/DSC)',
      'Instrument training and PerkinElmer certification',
      'Method development for EPA, ASTM, and ISO compliance',
      'PerkinElmer application demonstrations and feasibility studies',
    ],
    location: 'Castleman Building, Room 110, Storrs Campus',
    contact: 'cese-peil@uconn.edu',
    connectUrl: 'mailto:cese-peil@uconn.edu',
  },
  {
    id: 'l10',
    name: 'Inorganic Analysis Laboratory',
    slug: 'inorganic-analysis-laboratory',
    director: 'Stephanie Kexel',
    focusAreas: ['water', 'soil'],
    analytical: true,
    description:
      'The Inorganic Analysis Laboratory (IAL) delivers precise, multi-element analysis of metals, metalloids, nutrients, and anions across a wide range of environmental sample types. The IAL serves CESE research programs and external clients requiring rigorous inorganic characterization for regulatory compliance, environmental monitoring, and scientific investigation.',
    equipment: [
      'Inductively coupled plasma – mass spectrometer (ICP-MS) for trace and ultra-trace metals (Agilent 7900)',
      'Inductively coupled plasma – optical emission spectrometer (ICP-OES) for major and minor elements (PerkinElmer Avio 500)',
      'Graphite furnace atomic absorption spectrometer (GFAAS) for lead, arsenic, and cadmium',
      'Cold vapor atomic fluorescence spectrometer (CVAFS) for mercury (EPA Method 1631)',
      'Ion chromatograph for anions: nitrate, nitrite, sulfate, chloride, phosphate (Dionex ICS-6000)',
      'Flow injection analyzer for ammonia, TKN, and reactive phosphorus',
      'Portable XRF (pXRF) for rapid in-field soil metal screening',
      'Microwave digestion system for sample preparation (CEM MARS 6)',
    ],
    services: [
      'Drinking water metals analysis (EPA Methods 200.7, 200.8)',
      'Soil and sediment heavy metal characterization (EPA Methods 3050B, 3051A)',
      'Nutrient analysis: TN, TP, ammonia, nitrate/nitrite, orthophosphate',
      'Mercury speciation in water and sediments (EPA Method 1631)',
      'Wastewater and leachate inorganic profiling',
      'Regulatory compliance sampling and reporting',
      'Standard additions and matrix spike recovery verification',
      'Certified reference material verification and QA/QC documentation',
    ],
    location: 'Castleman Building, Room 115, Storrs Campus',
    contact: 'cese-ial@uconn.edu',
    connectUrl: 'mailto:cese-ial@uconn.edu',
  },
];
