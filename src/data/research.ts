import type { FocusArea } from './faculty';

export interface ResearchProject {
  id: string;
  title: string;
  slug: string;
  focusArea: FocusArea;
  principalInvestigator: string;
  collaborators: string[];
  summary: string;
  status: 'active' | 'completed';
  fundingSource: string;
  startYear: number;
  tags: string[];
}

export const research: ResearchProject[] = [
  // Air
  {
    id: 'r1',
    title: 'Urban Air Quality Inequities in Connecticut Mid-sized Cities',
    slug: 'urban-air-quality-inequities-ct',
    focusArea: 'air',
    principalInvestigator: 'Jessica Brandt',
    collaborators: ['Guiling Wang', 'Chuanrong (Cindy) Zhang'],
    summary:
      'This project combines low-cost sensor networks, satellite remote sensing, and sociodemographic data to characterize fine particulate matter (PM2.5) disparities across Hartford, New Haven, and Bridgeport. Findings directly inform CT DEEP air quality policy.',
    status: 'active',
    fundingSource: 'NSF Environmental Sustainability Program',
    startYear: 2022,
    tags: ['PM2.5', 'environmental justice', 'sensor networks', 'Connecticut', 'urban health'],
  },
  {
    id: 'r2',
    title: 'Land–Atmosphere Feedbacks Under Future Urban Expansion Scenarios',
    slug: 'land-atmosphere-feedbacks-urban-expansion',
    focusArea: 'air',
    principalInvestigator: 'Guiling Wang',
    collaborators: ['Jessica Brandt'],
    summary:
      'Using the Community Land Model coupled with a regional climate model, this study projects how impervious surface expansion in the Northeast Corridor (Boston–DC megalopolis) will alter boundary-layer temperature, humidity, and ozone formation through 2050.',
    status: 'active',
    fundingSource: 'NOAA Climate Program Office',
    startYear: 2021,
    tags: ['climate modeling', 'urban heat island', 'ozone', 'Northeast US', 'CLM'],
  },
  {
    id: 'r3',
    title: 'PFAS Volatilization and Atmospheric Transport from Wastewater Treatment Plants',
    slug: 'pfas-volatilization-atmospheric-transport',
    focusArea: 'air',
    principalInvestigator: 'Tim Vadas',
    collaborators: ['Jeff McCutcheon'],
    summary:
      'This work measures PFAS in air samples near wastewater treatment and land-application sites to quantify atmospheric loading pathways, informing both occupational health guidance and regional deposition modeling.',
    status: 'active',
    fundingSource: 'CT DEEP / EPA Region 1',
    startYear: 2023,
    tags: ['PFAS', 'air deposition', 'wastewater', 'atmospheric chemistry', 'emerging contaminants'],
  },
  {
    id: 'r4',
    title: 'Urban Tree Canopy Effects on Neighborhood-Scale Air Pollutant Concentrations',
    slug: 'urban-tree-canopy-air-pollutants',
    focusArea: 'air',
    principalInvestigator: 'Robert Fahey',
    collaborators: ['Jessica Brandt', 'Chuanrong (Cindy) Zhang'],
    summary:
      'Field campaigns paired with LiDAR-derived canopy models are used to quantify NO2 and ozone attenuation attributable to street trees across ten Connecticut cities, generating actionable data for urban tree planting priorities.',
    status: 'completed',
    fundingSource: 'USDA Forest Service Urban & Community Forestry',
    startYear: 2019,
    tags: ['urban trees', 'NO2', 'ozone', 'LiDAR', 'green infrastructure'],
  },

  // Water
  {
    id: 'r5',
    title: 'Microbial Electrochemical Technologies for Simultaneous Water Treatment and Energy Recovery',
    slug: 'microbial-electrochemical-water-treatment',
    focusArea: 'water',
    principalInvestigator: 'Baikun Li',
    collaborators: ['Jeff McCutcheon', 'Leslie Shor'],
    summary:
      'Integrating microbial fuel cell (MFC) and microbial electrolysis cell (MEC) architectures with membrane filtration to develop decentralized systems that treat domestic wastewater while generating bioelectricity and recovering hydrogen.',
    status: 'active',
    fundingSource: 'DOE Office of Energy Efficiency & Renewable Energy',
    startYear: 2020,
    tags: ['microbial fuel cells', 'bioenergy', 'wastewater', 'decentralized treatment', 'hydrogen'],
  },
  {
    id: 'r6',
    title: 'Forward Osmosis Membranes for Low-Energy Desalination in Coastal Communities',
    slug: 'forward-osmosis-membranes-desalination',
    focusArea: 'water',
    principalInvestigator: 'Jeff McCutcheon',
    collaborators: ['Baikun Li'],
    summary:
      'Novel cellulose triacetate and polyamide thin-film composite membranes are synthesized and tested for forward osmosis desalination of brackish groundwater, targeting a 60% reduction in energy consumption versus conventional reverse osmosis.',
    status: 'active',
    fundingSource: 'NSF CBET – Environmental Engineering',
    startYear: 2021,
    tags: ['forward osmosis', 'desalination', 'membrane technology', 'water scarcity', 'coastal'],
  },
  {
    id: 'r7',
    title: 'Nitrogen Spiraling in Urban Streams: From Source to Sink',
    slug: 'nitrogen-spiraling-urban-streams',
    focusArea: 'water',
    principalInvestigator: 'Ashley Helton',
    collaborators: ['Beth Lawrence', 'Tim Vadas'],
    summary:
      'Tracer additions and 15N stable isotope analyses track nitrogen uptake, transformation, and export through stream networks draining watersheds with varying degrees of urbanization across the Connecticut River basin.',
    status: 'active',
    fundingSource: 'NSF LTER Network',
    startYear: 2022,
    tags: ['nitrogen cycling', 'urban streams', 'stable isotopes', 'water quality', 'Connecticut River'],
  },
  {
    id: 'r8',
    title: 'PFAS Removal from Drinking Water Using Electrospun Nanofiber Adsorptive Membranes',
    slug: 'pfas-removal-nanofiber-membranes',
    focusArea: 'water',
    principalInvestigator: 'Jeff McCutcheon',
    collaborators: ['Tim Vadas', 'Baikun Li'],
    summary:
      'Electrospun polymer nanofibers functionalized with ion-exchange resins and activated carbon are evaluated for point-of-entry PFAS removal from municipal and private well water supplies in contaminated Connecticut communities.',
    status: 'active',
    fundingSource: 'CT Department of Public Health',
    startYear: 2023,
    tags: ['PFAS', 'nanofibers', 'drinking water', 'adsorption', 'water treatment'],
  },
  {
    id: 'r9',
    title: 'Stormwater Green Infrastructure Performance in Cold Climates',
    slug: 'stormwater-green-infrastructure-cold-climates',
    focusArea: 'water',
    principalInvestigator: 'Tim Vadas',
    collaborators: ['Ashley Helton', 'Beth Lawrence'],
    summary:
      'Monitoring bioretention cells, permeable pavements, and urban wetlands across New England to quantify cold-season performance for pollutant removal and infiltration, generating design guidelines for Northeast municipalities.',
    status: 'completed',
    fundingSource: 'EPA Region 1 Water Quality Grants',
    startYear: 2018,
    tags: ['green infrastructure', 'stormwater', 'bioretention', 'cold climate', 'New England'],
  },

  // Soil
  {
    id: 'r10',
    title: 'Urban Forest Soil Carbon Stocks Across a Gradient of Management Intensity',
    slug: 'urban-forest-soil-carbon-stocks',
    focusArea: 'soil',
    principalInvestigator: 'Robert Fahey',
    collaborators: ['Beth Lawrence', 'Leslie Shor'],
    summary:
      'Soil cores and microbial biomass assays are used to quantify total organic carbon in managed (parks) and remnant (ravines) urban forests in Hartford and Springfield, contributing to city-level greenhouse gas inventories.',
    status: 'active',
    fundingSource: 'USDA NIFA Sustainable Agricultural Systems',
    startYear: 2021,
    tags: ['soil carbon', 'urban forests', 'greenhouse gas', 'GHG inventory', 'ecosystem services'],
  },
  {
    id: 'r11',
    title: 'Wetland Carbon Dynamics Under Phragmites Invasion',
    slug: 'wetland-carbon-phragmites-invasion',
    focusArea: 'soil',
    principalInvestigator: 'Beth Lawrence',
    collaborators: ['Ashley Helton', 'Julissa Rojas-Sandoval'],
    summary:
      'Paired plots in Phragmites-invaded and native-species freshwater wetlands are monitored for carbon stocks, GHG fluxes, and microbial community structure to assess invasion impacts on wetland carbon sink capacity.',
    status: 'active',
    fundingSource: 'NSF Ecosystem Studies',
    startYear: 2020,
    tags: ['Phragmites', 'wetlands', 'carbon cycling', 'invasive species', 'GHG flux'],
  },
  {
    id: 'r12',
    title: 'Pore-Scale Imaging of Soil Microbial Hotspots Using Microfluidics',
    slug: 'pore-scale-soil-microbial-microfluidics',
    focusArea: 'soil',
    principalInvestigator: 'Leslie Shor',
    collaborators: ['Robert Fahey', 'Ashley Helton'],
    summary:
      'Transparent microfluidic analogs of soil pore networks enable real-time fluorescence imaging of microbial activity and biofilm formation, connecting pore-scale dynamics to field-scale carbon and nutrient cycling.',
    status: 'active',
    fundingSource: 'NSF Environmental Engineering',
    startYear: 2022,
    tags: ['microfluidics', 'soil pore network', 'biofilm', 'carbon cycling', 'microbial ecology'],
  },
  {
    id: 'r13',
    title: 'Spatial Prediction of Urban Soil Lead Using Machine Learning and Geospatial Data',
    slug: 'spatial-prediction-urban-soil-lead',
    focusArea: 'soil',
    principalInvestigator: 'Chuanrong (Cindy) Zhang',
    collaborators: ['Julissa Rojas-Sandoval', 'Jessica Brandt'],
    summary:
      'Random forest and kriging hybrid models integrate soil sampling data, historical land-use records, and satellite-derived impervious surface data to produce high-resolution soil lead hazard maps for New Haven and Hartford neighborhoods.',
    status: 'completed',
    fundingSource: 'HUD Healthy Homes and Lead Hazard Control',
    startYear: 2020,
    tags: ['soil lead', 'machine learning', 'GIS', 'urban contamination', 'environmental justice'],
  },
  {
    id: 'r14',
    title: 'Invasive Plant Effects on Soil Microbial Community Structure in Urban Parks',
    slug: 'invasive-plants-soil-microbiome-urban-parks',
    focusArea: 'soil',
    principalInvestigator: 'Julissa Rojas-Sandoval',
    collaborators: ['Beth Lawrence', 'Robert Fahey'],
    summary:
      'Amplicon sequencing (16S rRNA and ITS) characterizes bacterial, archaeal, and fungal community shifts beneath invasive plants (Japanese knotweed, Oriental bittersweet) compared to native plant communities in Hartford and New Haven city parks.',
    status: 'active',
    fundingSource: 'CT Urban Greenspace Initiative',
    startYear: 2023,
    tags: ['invasive species', 'soil microbiome', 'urban parks', 'amplicon sequencing', '16S rRNA'],
  },
];
