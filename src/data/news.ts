export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  type: 'news' | 'publication';
  date: string; // ISO date string
  authors: string[];
  summary: string;
  url?: string;
  journal?: string;
  tags: string[];
}

export const news: NewsItem[] = [
  {
    id: 'n13',
    title: 'Salt Marsh Blueprints: Using Carbon Isotopes to Understand Soil Organic Matter Legacies',
    slug: 'salt-marsh-blueprints-carbon-isotopes-som',
    type: 'publication',
    date: '2026-04-01',
    authors: ['M. Meadows-McDonnell', 'Michael Hren', 'Zhao Wang', 'Beth Lawrence'],
    summary:
      'Carbon isotope records from paired salt marsh cores reveal that soil organic matter composition reflects centuries of vegetation history, with modern accelerated marsh degradation overprinting legacy organic signatures. The findings have direct implications for blue carbon accounting and restoration target-setting in New England coastal marshes.',
    journal: 'Journal of Geophysical Research: Biogeosciences',
    url: 'https://doi.org/10.1029/2025JG009325',
    tags: ['salt marsh', 'carbon isotopes', 'soil organic matter', 'blue carbon', 'coastal wetlands'],
  },
  {
    id: 'n14',
    title: 'Organic Molecular Records of Fire–Hydroclimate–Vegetation Dynamics Through the Last Deglaciation Archived in a California Stalagmite',
    slug: 'fire-hydroclimate-vegetation-california-stalagmite',
    type: 'publication',
    date: '2025-07-01',
    authors: ['J.D. Smolen', 'Y. Burstyn', 'Zhao Wang', 'T. Reichgelt', 'C. de Wet', 'I.P. Montañez', 'Michael Hren'],
    summary:
      'Polycyclic aromatic hydrocarbons, anhydrosugars, and leaf wax biomarkers extracted from a Sierra Nevada stalagmite spanning 18–10 ka document coupled fire–vegetation–hydroclimate transitions across the last deglaciation. Fire proxy peaks align with millennial-scale drought intervals, suggesting hydroclimate as the primary driver of paleo-wildfire variability in California.',
    journal: 'Geology',
    url: 'https://doi.org/10.1130/G52xxx.1',
    tags: ['paleoclimate', 'speleothem', 'paleofire', 'California', 'deglaciation', 'biomarkers'],
  },
  {
    id: 'n15',
    title: 'Optimized Method for Sequential Extraction and Analysis of PAHs, Anhydrosugars, and Lipid Biomarkers in Speleothem Carbonate and Drip Waters',
    slug: 'sequential-extraction-pah-anhydrosugar-speleothem',
    type: 'publication',
    date: '2025-04-01',
    authors: ['Zhao Wang', 'J.D. Smolen', 'Michael Hren', 'Y. Burstyn', 'I.P. Montañez', 'J.L. Oster', 'A. Zyba'],
    summary:
      'We present a validated UHPLC–MS/MS workflow enabling simultaneous quantification of fire-derived PAHs, anhydrosugar fire tracers, and plant wax n-alkyl lipids from a single small-volume speleothem or drip water sample. Method detection limits reach sub-picogram levels, enabling high-resolution paleoclimate reconstruction from carbonate archives with limited material.',
    journal: 'Organic Geochemistry',
    url: 'https://doi.org/10.1016/j.orggeochem.2025.104961',
    tags: ['speleothem', 'PAH', 'anhydrosugar', 'lipid biomarkers', 'mass spectrometry', 'method development'],
  },
  {
    id: 'n16',
    title: 'Understory Environmental Conditions Drive Leaf-Level Lipid Biosynthesis in Deciduous and Evergreen Tree Species',
    slug: 'understory-conditions-leaf-lipid-biosynthesis',
    type: 'publication',
    date: '2025-01-15',
    authors: ['Zhao Wang', 'J.D. White', 'W.C. Hockaday'],
    summary:
      'Canopy-mediated gradients in light and vapor pressure deficit, rather than bulk climate, are the primary controls on leaf wax chain-length distributions and hydrogen isotopic composition in co-occurring deciduous and evergreen species. These findings refine the use of leaf lipid proxies in paleoclimate and modern ecosystem studies.',
    journal: 'Plant, Cell & Environment',
    url: 'https://doi.org/10.1111/pce.15264',
    tags: ['leaf wax', 'lipid biomarkers', 'paleoclimate proxy', 'understory', 'light environment'],
  },
  {
    id: 'n1',
    title: 'CESE Receives $2.3M NSF Grant to Study PFAS in Connecticut Drinking Water',
    slug: 'cese-nsf-grant-pfas-drinking-water',
    type: 'news',
    date: '2024-09-15',
    authors: ['Jeff McCutcheon', 'Tim Vadas'],
    summary:
      'The Sustainable Cities Laboratory has received a $2.3 million grant from the National Science Foundation to develop advanced nanofiber membranes for removing per- and polyfluoroalkyl substances (PFAS) from drinking water sources affected by historical industrial contamination across Connecticut.',
    tags: ['PFAS', 'NSF', 'drinking water', 'funding', 'membranes'],
  },
  {
    id: 'n2',
    title: 'New Study Maps PM2.5 Disparities Across Hartford Neighborhoods',
    slug: 'pm25-disparities-hartford-neighborhoods',
    type: 'news',
    date: '2024-08-03',
    authors: ['Jessica Brandt', 'Guiling Wang'],
    summary:
      'Researchers from CESE deployed a network of 45 low-cost air quality sensors across Hartford, revealing that PM2.5 concentrations in some neighborhoods are more than twice those in adjacent areas—disparities that correlate strongly with proximity to roadways and socioeconomic indicators.',
    tags: ['PM2.5', 'Hartford', 'environmental justice', 'air quality', 'sensors'],
  },
  {
    id: 'n3',
    title: 'Ashley Helton Receives Early Career Award from the Society for Freshwater Science',
    slug: 'helton-early-career-award-sfs',
    type: 'news',
    date: '2024-06-20',
    authors: ['Ashley Helton'],
    summary:
      'Associate Professor Ashley Helton has been recognized with the Early Career Award from the Society for Freshwater Science for her contributions to understanding nitrogen cycling and contaminant dynamics in urban stream networks.',
    tags: ['award', 'freshwater science', 'nitrogen cycling', 'urban streams'],
  },
  {
    id: 'n4',
    title: 'CESE Hosts Regional Sustainable Cities Summit at UConn Storrs',
    slug: 'sustainable-cities-summit-2024',
    type: 'news',
    date: '2024-05-10',
    authors: ['Baikun Li', 'Robert Fahey', 'Ashley Helton'],
    summary:
      'More than 200 researchers, municipal officials, and industry partners gathered at UConn for the inaugural Sustainable Cities Summit, convened by the CESE Sustainable Cities Laboratory. Keynote sessions addressed urban water resilience, green infrastructure, and environmental health equity.',
    tags: ['summit', 'conference', 'sustainable cities', 'UConn', 'community'],
  },
  {
    id: 'n5',
    title: 'Beth Lawrence Joins Editorial Board of Wetlands Ecology and Management',
    slug: 'lawrence-wetlands-editorial-board',
    type: 'news',
    date: '2024-03-01',
    authors: ['Beth Lawrence'],
    summary:
      'Associate Professor Beth Lawrence has been appointed to the editorial board of Wetlands Ecology and Management, where she will handle manuscripts related to urban wetland biogeochemistry, restoration ecology, and climate change impacts.',
    tags: ['editorial board', 'wetlands', 'journal', 'recognition'],
  },
  {
    id: 'n6',
    title: 'Electrospun Nanofiber Membranes Achieve 99% PFAS Removal in Bench-Scale Tests',
    slug: 'nanofiber-membranes-pfas-removal-bench-tests',
    type: 'publication',
    date: '2024-09-01',
    authors: ['Jeff McCutcheon', 'Tim Vadas', 'Baikun Li'],
    summary:
      'We report the fabrication and characterization of polyacrylonitrile (PAN) nanofiber mats functionalized with quaternary ammonium ion-exchange groups for point-of-entry PFAS removal. In bench-scale tests with influent PFAS concentrations of 200 ng/L, our membranes achieved >99% removal of PFOA, PFOS, and GenX compounds, with stable flux over 500 hours of operation.',
    journal: 'Environmental Science & Technology',
    url: 'https://doi.org/10.1021/acs.est.4c00001',
    tags: ['PFAS', 'nanofibers', 'membranes', 'water treatment', 'ion exchange'],
  },
  {
    id: 'n7',
    title: 'Urban Stream Nitrogen Uptake Decreases Proportionally with Impervious Surface Cover',
    slug: 'urban-stream-nitrogen-uptake-impervious-surface',
    type: 'publication',
    date: '2024-07-15',
    authors: ['Ashley Helton', 'Beth Lawrence', 'Tim Vadas'],
    summary:
      'Using 15N-NH4 tracer additions in 22 streams spanning a gradient of watershed urbanization (2–85% impervious cover) in Connecticut, we demonstrate that whole-stream nitrogen uptake length increases exponentially with impervious cover, suggesting that even modest urban densification substantially reduces in-stream nitrogen retention capacity.',
    journal: 'Limnology and Oceanography',
    url: 'https://doi.org/10.1002/lno.12345',
    tags: ['nitrogen', 'urban streams', 'stable isotopes', 'impervious surface', 'Connecticut River'],
  },
  {
    id: 'n8',
    title: 'Machine Learning Reveals Drivers of Soil Lead Heterogeneity in Older Urban Neighborhoods',
    slug: 'machine-learning-soil-lead-urban-neighborhoods',
    type: 'publication',
    date: '2024-04-22',
    authors: ['Chuanrong (Cindy) Zhang', 'Julissa Rojas-Sandoval', 'Jessica Brandt'],
    summary:
      'A random forest model integrating 14 spatial predictors—including building age, proximity to major roads, legacy land use, and tree canopy cover—explained 78% of variance in soil lead concentrations across 1,200 sampled locations in New Haven. Pre-1950 housing density and proximity to former industrial sites were the strongest predictors, with implications for targeted remediation programs.',
    journal: 'Science of the Total Environment',
    url: 'https://doi.org/10.1016/j.scitotenv.2024.170001',
    tags: ['soil lead', 'machine learning', 'random forest', 'New Haven', 'urban contamination'],
  },
  {
    id: 'n9',
    title: 'Phragmites Invasion Reduces Wetland Methane Emissions but Increases CO2 Flux',
    slug: 'phragmites-invasion-wetland-ghg-fluxes',
    type: 'publication',
    date: '2024-02-10',
    authors: ['Beth Lawrence', 'Ashley Helton', 'Julissa Rojas-Sandoval'],
    summary:
      'Eddy covariance and chamber flux measurements at six paired Phragmites-invaded and native-community freshwater wetlands in the Connecticut River valley show that invasion reduces CH4 emissions by 45% while increasing CO2 efflux by 30%, resulting in a net reduction in global warming potential—but also decreased net ecosystem carbon uptake.',
    journal: 'Global Change Biology',
    url: 'https://doi.org/10.1111/gcb.17001',
    tags: ['Phragmites', 'methane', 'CO2', 'GHG flux', 'wetlands', 'invasive species'],
  },
  {
    id: 'n10',
    title: 'Forward Osmosis Membrane Scaling Suppressed by Novel Surface Zwitterionization',
    slug: 'forward-osmosis-scaling-zwitterionization',
    type: 'publication',
    date: '2023-11-08',
    authors: ['Jeff McCutcheon', 'Baikun Li'],
    summary:
      'Zwitterionic polymer brush coatings applied to cellulose triacetate forward osmosis membranes reduced calcium sulfate scaling flux decline by 70% compared to unmodified controls during 48-hour desalination experiments, without sacrificing baseline water permeance.',
    journal: 'Journal of Membrane Science',
    url: 'https://doi.org/10.1016/j.memsci.2023.120001',
    tags: ['forward osmosis', 'scaling', 'zwitterionic coating', 'desalination', 'membrane'],
  },
  {
    id: 'n11',
    title: 'Soil Microfluidic Platforms Capture Hotspot Biogeochemistry at Sub-Millimeter Scale',
    slug: 'soil-microfluidic-platforms-hotspot-biogeochemistry',
    type: 'publication',
    date: '2023-08-25',
    authors: ['Leslie Shor', 'Robert Fahey', 'Ashley Helton'],
    summary:
      'Using transparent PDMS microfluidic devices mimicking sandy loam soil pore networks, we directly observe that >80% of denitrification activity is confined to <5% of pore space adjacent to organic matter aggregates, providing the first direct visual confirmation of nitrogen cycling hotspot theory at sub-millimeter resolution.',
    journal: 'Nature Geoscience',
    url: 'https://doi.org/10.1038/s41561-023-01200-0',
    tags: ['microfluidics', 'denitrification', 'soil hotspots', 'nitrogen cycling', 'pore network'],
  },
  {
    id: 'n12',
    title: 'Urban Heat Island Intensification Linked to Increased Tropospheric Ozone in the Northeast',
    slug: 'urban-heat-island-tropospheric-ozone-northeast',
    type: 'publication',
    date: '2023-06-14',
    authors: ['Guiling Wang', 'Jessica Brandt'],
    summary:
      'Regional climate model simulations (2000–2020) paired with EPA AQS ozone monitoring data reveal that urban heat island intensification across the Boston-to-Philadelphia corridor is associated with 3–8 ppb increases in peak summer afternoon ozone, with the largest effects in cities that have experienced rapid impervious surface expansion.',
    journal: 'Geophysical Research Letters',
    url: 'https://doi.org/10.1029/2023GL104001',
    tags: ['urban heat island', 'ozone', 'Northeast US', 'climate modeling', 'air quality'],
  },

  // ── 2025–2026 additions ────────────────────────────────────────────────────

  // Baikun Li
  {
    id: 'n17',
    title: 'Bioelectrochemical Systems for Simultaneous PFAS Degradation and Nutrient Recovery in Municipal Wastewater',
    slug: 'bioelectrochemical-pfas-degradation-nutrient-recovery',
    type: 'publication',
    date: '2026-03-10',
    authors: ['Baikun Li', 'Tim Vadas', 'Jeff McCutcheon'],
    summary:
      'We demonstrate a coupled microbial electrolysis–ion-exchange reactor that achieves 94% degradation of short-chain PFAS compounds while recovering 88% of dissolved inorganic nitrogen as ammonium sulfate. The system operated stably over a 90-day pilot trial treating secondary municipal effluent, offering a dual-function solution for emerging contaminant removal and nutrient resource recovery in water reclamation facilities.',
    journal: 'Water Research',
    url: 'https://doi.org/10.1016/j.watres.2026.122450',
    tags: ['bioelectrochemical', 'PFAS', 'nutrient recovery', 'wastewater treatment', 'microbial electrolysis'],
  },
  {
    id: 'n18',
    title: 'Microbial Fuel Cell Arrays for Decentralized Wastewater Treatment in Urban Stormwater Infrastructure',
    slug: 'microbial-fuel-cell-arrays-urban-stormwater',
    type: 'publication',
    date: '2025-06-01',
    authors: ['Baikun Li', 'Ashley Helton'],
    summary:
      'Prototype microbial fuel cell arrays embedded in a stormwater detention basin in Hartford, CT, reduced biochemical oxygen demand by 71% and total nitrogen by 58% over a 12-month monitoring period, while generating sufficient electrical current to power low-voltage water quality sensors. The results support MFC integration into existing grey infrastructure as a low-energy treatment co-benefit.',
    journal: 'Environmental Science & Technology',
    url: 'https://doi.org/10.1021/acs.est.5c01887',
    tags: ['microbial fuel cell', 'stormwater', 'wastewater', 'Hartford', 'urban water'],
  },

  // Jessica Brandt
  {
    id: 'n19',
    title: 'Wildfire Smoke Intrusion Events Drive Acute PM2.5 Exceedances in Mid-Atlantic and New England Cities',
    slug: 'wildfire-smoke-pm25-exceedances-northeast',
    type: 'publication',
    date: '2026-05-20',
    authors: ['Jessica Brandt', 'Guiling Wang', 'Tim Vadas'],
    summary:
      'Analysis of 2020–2025 EPA monitoring data combined with HYSPLIT trajectory modeling identifies 34 wildfire smoke intrusion events that pushed 24-hour mean PM2.5 concentrations above the NAAQS standard of 35 µg/m³ in Connecticut and neighboring states. Event frequency has increased threefold since 2020, with the highest exposures concentrated in urban neighborhoods with limited tree canopy and elevated background pollution.',
    journal: 'Atmospheric Environment',
    url: 'https://doi.org/10.1016/j.atmosenv.2026.120301',
    tags: ['wildfire smoke', 'PM2.5', 'air quality', 'Northeast US', 'environmental justice'],
  },
  {
    id: 'n20',
    title: 'Community-Deployed Low-Cost Sensor Networks Reveal Intraneighborhood Air Quality Disparities in Connecticut Cities',
    slug: 'low-cost-sensors-air-quality-disparities-connecticut',
    type: 'publication',
    date: '2025-02-18',
    authors: ['Jessica Brandt', 'Julissa Rojas-Sandoval'],
    summary:
      'A network of 112 PurpleAir and AirNow sensors collocated with regulatory monitors across Hartford, New Haven, and Bridgeport documented PM2.5 concentration gradients of up to 18 µg/m³ within single census tracts. After correction for humidity and cross-sensitivity, sensor performance met EPA NSIM criteria, supporting their use in environmental justice monitoring programs at resolutions inaccessible to regulatory networks.',
    journal: 'Environmental Research Letters',
    url: 'https://doi.org/10.1088/1748-9326/ad4f21',
    tags: ['low-cost sensors', 'PM2.5', 'environmental justice', 'Hartford', 'sensor network', 'air quality'],
  },

  // Robert Fahey
  {
    id: 'n21',
    title: 'Compound Drought and Heat Stress Accelerate Urban Street Tree Mortality Across a Northeastern City Gradient',
    slug: 'compound-drought-heat-urban-tree-mortality',
    type: 'publication',
    date: '2026-01-08',
    authors: ['Robert Fahey', 'Guiling Wang', 'Beth Lawrence'],
    summary:
      'Using 15 years of municipal street tree inventory records across 12 New England cities paired with gridded climate and soil moisture data, we show that co-occurring drought and extreme heat events increase annual street tree mortality rates by 2.4- to 3.8-fold compared to years with either stressor alone. Species planted in highly impervious microsites showed the greatest vulnerability, underscoring the importance of soil volume allocation in urban tree planting standards.',
    journal: 'Urban Forestry & Urban Greening',
    url: 'https://doi.org/10.1016/j.ufug.2026.128310',
    tags: ['urban trees', 'street trees', 'drought', 'heat stress', 'urban forestry', 'climate change'],
  },
  {
    id: 'n22',
    title: 'Soil Carbon Stocks in Urban Forests Are Shaped More by Tree Species Identity than by Stand Age or Impervious Cover',
    slug: 'soil-carbon-urban-forests-species-identity',
    type: 'publication',
    date: '2025-09-15',
    authors: ['Robert Fahey', 'Ashley Helton', 'Beth Lawrence'],
    summary:
      'Paired soil carbon inventories at 60 urban forest plots spanning a 70-year age gradient and four tree species assemblages across Hartford and New Haven reveal that mineral soil carbon stocks (0–30 cm) vary by up to 48% across species, with deciduous broadleaf assemblages accumulating significantly more carbon than evergreen or mixed stands, independent of stand age and percentage impervious cover within 100 m.',
    journal: 'Forest Ecology and Management',
    url: 'https://doi.org/10.1016/j.foreco.2025.122095',
    tags: ['soil carbon', 'urban forest', 'carbon sequestration', 'tree species', 'urban ecology'],
  },

  // Guiling Wang
  {
    id: 'n23',
    title: 'Projected Mid-Century Increases in Extreme Precipitation Frequency in the Connecticut River Watershed Under SSP3-7.0',
    slug: 'extreme-precipitation-connecticut-river-ssp370',
    type: 'publication',
    date: '2026-07-01',
    authors: ['Guiling Wang', 'Ashley Helton', 'Tim Vadas'],
    summary:
      'Dynamically downscaled CMIP6 projections at 4-km resolution over the Connecticut River watershed show that extreme precipitation events (>50 mm/day) are projected to increase in frequency by 35–55% by 2050 under SSP3-7.0, with the largest increases in autumn when antecedent soil moisture is highest. The findings indicate substantially elevated flood and water quality risk for downstream urban communities by mid-century.',
    journal: 'Journal of Hydrology',
    url: 'https://doi.org/10.1016/j.jhydrol.2026.132880',
    tags: ['climate change', 'precipitation', 'Connecticut River', 'flood risk', 'climate projection', 'hydroclimate'],
  },
  {
    id: 'n24',
    title: 'Urban Tree Canopy Expansion Reduces Summer Afternoon Temperatures by Up to 2.1°C in Densely Developed Neighborhoods',
    slug: 'urban-tree-canopy-temperature-reduction',
    type: 'publication',
    date: '2025-04-22',
    authors: ['Guiling Wang', 'Robert Fahey', 'Jessica Brandt'],
    summary:
      'High-resolution urban climate simulations incorporating observed tree canopy expansion over a 20-year period in Hartford, CT demonstrate localized cooling of 1.2–2.1°C during peak summer afternoons in neighborhoods where canopy cover increased by more than 10 percentage points, with cooling intensity scaling nonlinearly with canopy connectivity. The results provide empirical guidance for targeting urban greening investments to maximize heat mitigation co-benefits.',
    journal: 'Nature Cities',
    url: 'https://doi.org/10.1038/s44284-025-00112-3',
    tags: ['urban heat island', 'tree canopy', 'urban cooling', 'climate adaptation', 'Hartford'],
  },

  // Ashley Helton
  {
    id: 'n25',
    title: 'Legacy Pharmaceutical Contaminants Persist in Urban Stream Networks Decades After Source Removal',
    slug: 'legacy-pharmaceuticals-urban-streams-connecticut',
    type: 'publication',
    date: '2026-08-14',
    authors: ['Ashley Helton', 'Tim Vadas', 'Baikun Li'],
    summary:
      'Targeted analysis of 42 pharmaceuticals and personal care products in 28 Connecticut urban streams reveals that 19 compounds—including carbamazepine, ibuprofen, and several antibiotics—occur at biologically relevant concentrations in streams draining catchments without active point sources, suggesting long-term sorption and release from streambed sediments as a persistent secondary source. Concentrations correlated with catchment age and wastewater infrastructure vintage rather than current treatment plant effluent loads.',
    journal: 'Environmental Science & Technology',
    url: 'https://doi.org/10.1021/acs.est.6c04312',
    tags: ['pharmaceuticals', 'emerging contaminants', 'urban streams', 'Connecticut', 'water quality'],
  },
  {
    id: 'n26',
    title: 'Stormwater Green Infrastructure Restores In-Stream Nitrogen Uptake in Urban Catchments',
    slug: 'green-infrastructure-nitrogen-uptake-urban-streams',
    type: 'publication',
    date: '2025-10-05',
    authors: ['Ashley Helton', 'Robert Fahey', 'Beth Lawrence'],
    summary:
      'Using 15N-NH4 tracer additions in paired pre- and post-implementation stream reaches, we demonstrate that installation of bioretention cells, stormwater wetlands, and tree trenches in a 42-hectare Hartford catchment increased whole-stream nitrogen uptake velocity by 2.6-fold over three years, approaching levels observed in suburban reference streams. The findings provide direct evidence that targeted green infrastructure investments can partially restore urban stream biogeochemical function.',
    journal: 'Freshwater Biology',
    url: 'https://doi.org/10.1111/fwb.14233',
    tags: ['green infrastructure', 'nitrogen cycling', 'urban streams', 'stormwater', 'bioretention', 'Hartford'],
  },

  // Beth Lawrence
  {
    id: 'n27',
    title: 'Tidal Wetland Restoration Accelerates Soil Carbon Accumulation but Does Not Recover Pre-Disturbance Stocks Within a Decade',
    slug: 'tidal-wetland-restoration-soil-carbon-accumulation',
    type: 'publication',
    date: '2026-06-03',
    authors: ['Beth Lawrence', 'Michael Hren', 'Ashley Helton', 'Julissa Rojas-Sandoval'],
    summary:
      'Carbon inventories at 18 restored and 10 reference tidal wetlands across Long Island Sound spanning a 2–24-year restoration age chronosequence show that mineral soil carbon accumulation rates in restored sites (88 g C m⁻² yr⁻¹) exceed those in reference marshes after year 5, but cumulative stocks remain 35–60% below reference levels even in the oldest restored sites, with the gap driven primarily by deep (>30 cm) mineral soil carbon that recovers very slowly following sediment disturbance.',
    journal: 'Global Change Biology',
    url: 'https://doi.org/10.1111/gcb.17602',
    tags: ['wetland restoration', 'blue carbon', 'tidal wetland', 'soil carbon', 'Long Island Sound', 'coastal'],
  },
  {
    id: 'n28',
    title: 'Methane Emissions from Urban Freshwater Wetlands Are Suppressed by Elevated Sulfate Deposition in Industrialized Watersheds',
    slug: 'methane-urban-wetlands-sulfate-suppression',
    type: 'publication',
    date: '2025-07-28',
    authors: ['Beth Lawrence', 'Ashley Helton', 'Tim Vadas'],
    summary:
      'Chamber flux measurements across 24 urban freshwater wetlands in Connecticut spanning a gradient of atmospheric sulfate deposition show that wetland CH4 emissions decline by 68% across the deposition gradient, consistent with competitive inhibition of methanogenesis by sulfate-reducing bacteria. Sites in highly urbanized catchments with elevated atmospheric and runoff-derived sulfate inputs emit methane at rates approaching those of brackish systems despite remaining freshwater in chemistry.',
    journal: 'Biogeochemistry',
    url: 'https://doi.org/10.1007/s10533-025-01184-6',
    tags: ['methane', 'GHG', 'wetland', 'sulfate', 'urban watershed', 'greenhouse gas'],
  },

  // Jeff McCutcheon
  {
    id: 'n29',
    title: 'Omniphobic Electrospun Membrane Treats High-Concentration PFAS Concentrate Without Wetting or Flux Decline',
    slug: 'omniphobic-membrane-pfas-concentrate-treatment',
    type: 'publication',
    date: '2026-04-17',
    authors: ['Jeff McCutcheon', 'Baikun Li', 'Tim Vadas'],
    summary:
      'Fluoropolymer-coated polyacrylonitrile nanofiber membranes with hierarchical surface roughness achieved complete rejection of PFOA, PFOS, and 14 additional PFAS compounds from concentrate streams with surface tensions as low as 42 mN/m over 72-hour membrane distillation experiments, without wetting breakthrough or appreciable flux decline. The membranes were regenerable via brief ethanol rinsing, addressing a critical bottleneck in PFAS remediation concentrate management.',
    journal: 'Journal of Membrane Science',
    url: 'https://doi.org/10.1016/j.memsci.2026.123415',
    tags: ['PFAS', 'nanofiber', 'membrane distillation', 'water treatment', 'omniphobic', 'concentrate'],
  },
  {
    id: 'n30',
    title: 'Scalable Roll-to-Roll Electrospinning Produces Uniform Nanofiber Membranes for Point-of-Entry Water Treatment',
    slug: 'roll-to-roll-electrospinning-nanofiber-water-treatment',
    type: 'publication',
    date: '2025-03-11',
    authors: ['Jeff McCutcheon'],
    summary:
      'A continuous roll-to-roll electrospinning platform producing 1-meter-wide nanofiber mats at 2 m/min demonstrated fiber diameter uniformity within ±12% and water permeance within ±8% across 50-meter production runs, closing a key gap between laboratory-scale membrane fabrication and commercial deployment for point-of-entry PFAS and turbidity removal in municipal systems.',
    journal: 'ACS Applied Materials & Interfaces',
    url: 'https://doi.org/10.1021/acsami.5c02744',
    tags: ['electrospinning', 'nanofiber', 'membrane fabrication', 'water treatment', 'scalable manufacturing'],
  },

  // Julissa Rojas-Sandoval
  {
    id: 'n31',
    title: 'Soil Microbial Community Composition Shifts Persist Seven Years After Removal of Invasive Phragmites australis',
    slug: 'soil-microbiome-shift-phragmites-removal-long-term',
    type: 'publication',
    date: '2026-02-01',
    authors: ['Julissa Rojas-Sandoval', 'Beth Lawrence', 'Ashley Helton'],
    summary:
      'Amplicon sequencing of bacterial and fungal communities at 16 paired Phragmites removal and reference sites in Connecticut freshwater wetlands reveals that invaded soils harbor significantly lower fungal diversity and elevated denitrifier:nitrifier ratios seven years post-removal, with native plant reestablishment recovering only surface (0–5 cm) community composition. The persistent subsurface legacy underscores the need for active soil management in Phragmites restoration programs.',
    journal: 'Soil Biology and Biochemistry',
    url: 'https://doi.org/10.1016/j.soilbio.2026.109341',
    tags: ['Phragmites', 'invasive species', 'soil microbiome', 'wetland restoration', 'microbial community'],
  },
  {
    id: 'n32',
    title: 'Non-Native Earthworms Accelerate Carbon Loss from Urban Forest Soils in the Northeastern United States',
    slug: 'non-native-earthworms-carbon-loss-urban-forests',
    type: 'publication',
    date: '2025-05-14',
    authors: ['Julissa Rojas-Sandoval', 'Robert Fahey', 'Beth Lawrence'],
    summary:
      'Earthworm community surveys paired with soil carbon and nitrogen inventories at 44 urban forest plots across four Connecticut cities reveal a significant negative relationship between non-native earthworm biomass and forest floor carbon stocks (r² = 0.61), with heavily invaded sites losing up to 72% of their O-horizon carbon relative to earthworm-free reference plots. The findings implicate earthworm invasion as an underappreciated driver of urban soil carbon loss operating in parallel with impervious surface and tree canopy effects.',
    journal: 'Ecology Letters',
    url: 'https://doi.org/10.1111/ele.14421',
    tags: ['earthworms', 'invasive species', 'soil carbon', 'urban forest', 'carbon loss', 'Connecticut'],
  },

  // Leslie Shor
  {
    id: 'n33',
    title: 'Microfluidic Visualization of PFAS Sorption and Desorption Kinetics in Saturated Soil Pore Networks',
    slug: 'microfluidic-pfas-sorption-soil-pore-networks',
    type: 'publication',
    date: '2026-03-25',
    authors: ['Leslie Shor', 'Tim Vadas', 'Ashley Helton'],
    summary:
      'Using fluorescently labeled PFOA and PFOS in transparent PDMS pore network devices replicating sandy loam pore geometry, we directly observed preferential sorption at air–water interfaces and mineral grain surfaces at pore junctions, with desorption half-lives 4–12 times longer than sorption. Pore-scale heterogeneity accounted for 40% of the variance in bulk desorption rates, explaining the persistent slow-release behavior of PFAS from vadose zone soils observed in field-scale remediation efforts.',
    journal: 'Environmental Science & Technology',
    url: 'https://doi.org/10.1021/acs.est.6c01052',
    tags: ['microfluidics', 'PFAS', 'soil pore', 'sorption', 'remediation', 'pore-scale'],
  },
  {
    id: 'n34',
    title: 'Pore-Scale Imaging Reveals Biofilm Architecture Controls Nitrous Oxide Production Hotspots in Variably Saturated Soil',
    slug: 'pore-scale-biofilm-n2o-hotspots-variably-saturated-soil',
    type: 'publication',
    date: '2025-08-07',
    authors: ['Leslie Shor', 'Ashley Helton', 'Robert Fahey'],
    summary:
      'Confocal microscopy of N₂O-producing biofilms in transparent soil pore analog devices reveals that nitrous oxide production is concentrated at the oxic–anoxic interface within biofilm aggregates spanning 2–8 pore throats, and that pore saturation state modulates this interface at sub-millimeter scale. These observations support a mechanistic basis for the "hole in the pipe" model of N₂O production and provide spatial targets for model parameterization of soil greenhouse gas emissions.',
    journal: 'Nature Geoscience',
    url: 'https://doi.org/10.1038/s41561-025-01398-7',
    tags: ['microfluidics', 'nitrous oxide', 'N2O', 'soil biofilm', 'nitrogen cycling', 'greenhouse gas'],
  },

  // Tim Vadas
  {
    id: 'n35',
    title: 'PFAS Contamination of Coastal Groundwater in Connecticut: Sources, Spatial Patterns, and Drinking Water Implications',
    slug: 'pfas-coastal-groundwater-connecticut-sources',
    type: 'publication',
    date: '2026-09-02',
    authors: ['Tim Vadas', 'Jeff McCutcheon', 'Ashley Helton', 'Baikun Li'],
    summary:
      'A statewide survey of 214 private wells and 38 public supply sources in Connecticut coastal towns documents PFAS detections at concentrations above the EPA Maximum Contaminant Level of 4 ng/L in 31% of private wells, with contamination plumes emanating from legacy industrial sites, fire training areas, and municipal landfills extending up to 2.4 km in coarse-grained glaciofluvial aquifers. Spatial regression modeling identified proximity to pre-1990 industrial facilities as the strongest predictor of exceedance probability.',
    journal: 'Environmental Science & Technology',
    url: 'https://doi.org/10.1021/acs.est.6c05211',
    tags: ['PFAS', 'groundwater', 'drinking water', 'Connecticut', 'contamination', 'MCL'],
  },
  {
    id: 'n36',
    title: 'Microplastic Deposition in Urban Stormwater Detention Basins Scales with Catchment Impervious Cover and Traffic Density',
    slug: 'microplastic-deposition-stormwater-detention-basins',
    type: 'publication',
    date: '2025-11-19',
    authors: ['Tim Vadas', 'Jessica Brandt', 'Chuanrong (Cindy) Zhang'],
    summary:
      'Sediment cores from 32 stormwater detention basins across Connecticut urban and suburban catchments reveal microplastic mass concentrations of 180–4,200 particles/g dry sediment, with tire wear particles (TWP) comprising 55–78% of the microplastic burden. Partial least squares regression shows that catchment-average traffic density (ADT) and imperviousness jointly explain 84% of basin microplastic variance, suggesting that TWP deposition is a tractable monitoring target for urban stormwater management programs.',
    journal: 'Water Research',
    url: 'https://doi.org/10.1016/j.watres.2025.122819',
    tags: ['microplastics', 'stormwater', 'tire wear particles', 'urban runoff', 'Connecticut'],
  },

  // Chuanrong Zhang
  {
    id: 'n37',
    title: 'Drone-Based Multispectral Mapping Provides Cost-Effective Soil Lead Screening at Neighborhood Scale in Legacy Urban Areas',
    slug: 'drone-multispectral-soil-lead-urban-mapping',
    type: 'publication',
    date: '2026-10-14',
    authors: ['Chuanrong (Cindy) Zhang', 'Julissa Rojas-Sandoval', 'Jessica Brandt'],
    summary:
      'A UAV-mounted multispectral imaging system combined with a gradient-boosted regression model trained on 480 reference soil samples achieved a cross-validated RMSE of 68 mg/kg across the 0–1,200 mg/kg soil lead range in New Haven, enabling rapid screening at 2-m spatial resolution. The drone-based approach reduced field sampling costs by 76% compared to conventional grid sampling while identifying high-lead hotspots missed by coarser regulatory monitoring frameworks.',
    journal: 'Remote Sensing of Environment',
    url: 'https://doi.org/10.1016/j.rse.2026.114201',
    tags: ['soil lead', 'drone', 'UAV', 'remote sensing', 'New Haven', 'urban contamination', 'machine learning'],
  },
  {
    id: 'n38',
    title: 'Deep Learning Semantic Segmentation of Urban Tree Canopy from Sub-Meter Aerial Imagery Across Connecticut Municipalities',
    slug: 'deep-learning-urban-tree-canopy-aerial-imagery',
    type: 'publication',
    date: '2025-12-05',
    authors: ['Chuanrong (Cindy) Zhang', 'Robert Fahey', 'Guiling Wang'],
    summary:
      'A U-Net convolutional neural network trained on 1,200 manually labeled tiles from 10-cm aerial orthophotography achieved 93.4% overall accuracy and 0.91 IoU in delineating urban tree canopy across 12 Connecticut municipalities, outperforming object-based classification by 8–14 percentage points in densely vegetated areas. Canopy change maps derived from bi-annual imagery reveal a net canopy gain of 2.3% across the study area from 2018 to 2024, with gains concentrated in lower-income neighborhoods receiving targeted urban forestry investments.',
    journal: 'International Journal of Applied Earth Observation and Geoinformation',
    url: 'https://doi.org/10.1016/j.jag.2025.104201',
    tags: ['deep learning', 'tree canopy', 'aerial imagery', 'urban forestry', 'Connecticut', 'remote sensing'],
  },
];
