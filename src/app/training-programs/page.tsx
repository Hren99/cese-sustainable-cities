'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Data ──────────────────────────────────────────────────────────────────────

type ProgramCategory = 'all' | 'instrument' | 'field' | 'data' | 'professional';

interface TrainingProgram {
  id: string;
  title: string;
  category: Exclude<ProgramCategory, 'all'>;
  description: string;
  format: string;
  audience: string;
  facility?: string;
  contact: string;
  tags: string[];
}

const programs: TrainingProgram[] = [
  // ── Instrument Training ───────────────────────────────────────────────────
  {
    id: 'gcms-basics',
    title: 'Gas Chromatography–Mass Spectrometry (GC-MS)',
    category: 'instrument',
    description:
      'Covers instrument operation, method development, and data interpretation for organic compound analysis. Includes hands-on time on CESE\'s GC-MS systems and practical exercises with environmental samples.',
    format: 'Full-day workshop',
    audience: 'Graduate students, Research staff',
    facility: 'Organic Molecular Analysis Laboratory',
    contact: 'anthony.provatas@uconn.edu',
    tags: ['GC-MS', 'organics', 'OMAL'],
  },
  {
    id: 'icp-ms-metals',
    title: 'ICP-MS & ICP-OES for Trace Metal Analysis',
    category: 'instrument',
    description:
      'Introduction to inductively coupled plasma techniques for quantifying metals, nutrients, and trace elements in water, soil, and biological matrices. Covers sample preparation, calibration, and QA/QC protocols.',
    format: 'Full-day workshop',
    audience: 'Graduate students, Research staff, External collaborators',
    facility: 'Inorganic Analysis Laboratory',
    contact: 'stephanie.kexel@uconn.edu',
    tags: ['ICP-MS', 'ICP-OES', 'metals', 'IAL'],
  },
  {
    id: 'lc-ms-pfas',
    title: 'LC-MS/MS for PFAS and Emerging Contaminants',
    category: 'instrument',
    description:
      'Targeted and semi-targeted analysis of PFAS, pharmaceuticals, and other emerging contaminants using liquid chromatography–tandem mass spectrometry. Covers EPA Method 1633 workflows and regulatory reporting standards.',
    format: 'Full-day workshop',
    audience: 'Graduate students, Environmental professionals',
    facility: 'Organic Molecular Analysis Laboratory',
    contact: 'anthony.provatas@uconn.edu',
    tags: ['LC-MS/MS', 'PFAS', 'emerging contaminants', 'OMAL'],
  },
  {
    id: 'gc-irms',
    title: 'Stable Isotope Ratio Mass Spectrometry (IRMS)',
    category: 'instrument',
    description:
      'Principles and applications of GC-IRMS and EA-IRMS for compound-specific and bulk stable isotope analysis. Covers δ¹³C, δD, and δ¹⁵N measurements in environmental, ecological, and paleoclimate research.',
    format: 'Half-day workshop + lab session',
    audience: 'Graduate students, Postdoctoral researchers',
    facility: 'Stable Isotope & Organic Molecular Biogeochemistry Laboratory',
    contact: 'michael.hren@uconn.edu',
    tags: ['IRMS', 'stable isotopes', 'carbon isotope', 'biogeochemistry'],
  },
  {
    id: 'thermal-analysis',
    title: 'Thermal Analysis: DSC & TGA',
    category: 'instrument',
    description:
      'Differential scanning calorimetry and thermogravimetric analysis for characterizing materials, polymers, and environmental samples. Covers instrument operation on the PerkinElmer DSC 8500 and TGA 8000.',
    format: 'Half-day workshop',
    audience: 'Graduate students, Research staff, Industry partners',
    facility: 'PerkinElmer Innovation Laboratory',
    contact: 'christopher.perkins@uconn.edu',
    tags: ['DSC', 'TGA', 'thermal analysis', 'PerkinElmer'],
  },

  // ── Field Methods ─────────────────────────────────────────────────────────
  {
    id: 'water-sampling',
    title: 'Water Sampling Protocols & Chain of Custody',
    category: 'field',
    description:
      'Standard operating procedures for collecting water samples from streams, wetlands, groundwater, and stormwater for chemical and biological analysis. Covers field blanks, duplicates, and proper documentation for regulatory compliance.',
    format: 'Half-day field workshop',
    audience: 'Graduate students, Environmental consultants, Municipal staff',
    contact: 'cese@uconn.edu',
    tags: ['water sampling', 'field methods', 'chain of custody', 'QA/QC'],
  },
  {
    id: 'soil-sampling',
    title: 'Soil & Sediment Sampling Techniques',
    category: 'field',
    description:
      'Methods for collecting soil cores, grab samples, and sediment profiles for nutrient, metal, and organic contaminant analysis. Includes discussion of depth profiling, compositing strategies, and sample preservation.',
    format: 'Half-day field workshop',
    audience: 'Graduate students, Land managers, Environmental professionals',
    contact: 'cese@uconn.edu',
    tags: ['soil sampling', 'sediment', 'field methods', 'soil carbon'],
  },
  {
    id: 'air-monitoring',
    title: 'Air Quality Monitoring Methods',
    category: 'field',
    description:
      'Overview of passive and active air sampling for particulate matter, VOCs, and atmospheric deposition. Covers filter-based PM sampling, canister sampling, and low-cost sensor deployment for urban air quality studies.',
    format: 'Full-day workshop',
    audience: 'Graduate students, Public health researchers, Municipal planners',
    contact: 'cese@uconn.edu',
    tags: ['air quality', 'air monitoring', 'PM2.5', 'VOCs', 'urban air quality'],
  },
  {
    id: 'wetland-assessment',
    title: 'Wetland Delineation & Assessment',
    category: 'field',
    description:
      'Introduction to wetland identification, delineation methods, and hydrogeomorphic assessment. Covers vegetation, hydric soils, and hydrology indicators under federal and Connecticut state guidelines.',
    format: '2-day field course',
    audience: 'Graduate students, Regulators, Land use planners',
    contact: 'cese@uconn.edu',
    tags: ['wetlands', 'delineation', 'hydrology', 'soil', 'field methods'],
  },

  // ── Data & GIS ────────────────────────────────────────────────────────────
  {
    id: 'environmental-gis',
    title: 'Environmental GIS with ArcGIS Pro & QGIS',
    category: 'data',
    description:
      'Spatial analysis techniques applied to environmental monitoring, watershed delineation, land cover classification, and site assessment. Covers both ArcGIS Pro and the open-source QGIS platform.',
    format: '2-day workshop',
    audience: 'Graduate students, Environmental professionals',
    contact: 'cindy.zhang@uconn.edu',
    tags: ['GIS', 'GIS mapping', 'ArcGIS', 'QGIS', 'spatial analysis'],
  },
  {
    id: 'r-environmental',
    title: 'Environmental Data Analysis with R',
    category: 'data',
    description:
      'Statistical analysis of environmental datasets using R. Topics include exploratory data analysis, regression, time-series analysis, and visualization with ggplot2. No prior R experience required.',
    format: 'Full-day workshop (two sessions)',
    audience: 'Graduate students, Research staff',
    contact: 'cese@uconn.edu',
    tags: ['data analysis', 'R', 'statistics', 'environmental data'],
  },
  {
    id: 'remote-sensing',
    title: 'Remote Sensing for Environmental Monitoring',
    category: 'data',
    description:
      'Application of satellite and aerial imagery to track land use change, vegetation health, urban heat islands, and water quality. Covers Google Earth Engine, Sentinel, and Landsat data products.',
    format: 'Full-day workshop',
    audience: 'Graduate students, Environmental scientists',
    contact: 'cindy.zhang@uconn.edu',
    tags: ['remote sensing', 'GIS', 'satellite', 'land use', 'climate modeling'],
  },

  // ── Professional Development ───────────────────────────────────────────────
  {
    id: 'scientific-writing',
    title: 'Scientific Writing for Environmental Research',
    category: 'professional',
    description:
      'Practical workshop on structuring peer-reviewed manuscripts, writing clearly for mixed audiences, and responding to reviewer comments. Includes individual feedback on participant drafts.',
    format: 'Half-day seminar',
    audience: 'Graduate students, Early-career researchers',
    contact: 'cese@uconn.edu',
    tags: ['writing', 'communication', 'professional development'],
  },
  {
    id: 'grant-writing',
    title: 'Environmental Grant Writing Essentials',
    category: 'professional',
    description:
      'Strategies for identifying funding opportunities, crafting compelling project narratives, and building competitive budgets. Covers NSF, EPA, USDA, and private foundation mechanisms relevant to environmental research.',
    format: 'Half-day seminar',
    audience: 'Graduate students, Postdoctoral researchers, Junior faculty',
    contact: 'cese@uconn.edu',
    tags: ['grant writing', 'funding', 'professional development', 'NSF', 'EPA'],
  },
  {
    id: 'rcr',
    title: 'Responsible Conduct of Research (RCR)',
    category: 'professional',
    description:
      'Overview of research ethics, data management, authorship, mentoring relationships, and conflict of interest policies. Satisfies RCR training requirements for NSF and NIH funded researchers.',
    format: 'Half-day seminar',
    audience: 'Graduate students, Postdoctoral researchers',
    contact: 'cese@uconn.edu',
    tags: ['ethics', 'RCR', 'professional development', 'data management'],
  },
];

// ── Filter tabs ────────────────────────────────────────────────────────────

const categoryTabs: { value: ProgramCategory; label: string }[] = [
  { value: 'all', label: 'All Programs' },
  { value: 'instrument', label: 'Instrument Training' },
  { value: 'field', label: 'Field Methods' },
  { value: 'data', label: 'Data & GIS' },
  { value: 'professional', label: 'Professional Development' },
];

const categoryColors: Record<Exclude<ProgramCategory, 'all'>, { bg: string; text: string; border: string }> = {
  instrument: { bg: '#e8f0fb', text: '#3a5fa0', border: '#b8cef0' },
  field:      { bg: '#dde8f4', text: '#2a4a6a', border: '#a8bcd4' },
  data:       { bg: '#e0f0f8', text: '#1a6080', border: '#a8d4e8' },
  professional: { bg: '#f4ede4', text: '#7a4f28', border: '#d4b89a' },
};

const categoryLabels: Record<Exclude<ProgramCategory, 'all'>, string> = {
  instrument: 'Instrument Training',
  field: 'Field Methods',
  data: 'Data & GIS',
  professional: 'Professional Development',
};

// ── Program card ──────────────────────────────────────────────────────────

function ProgramCard({ program }: { program: TrainingProgram }) {
  const c = categoryColors[program.category];
  return (
    <div
      style={{
        border: '1px solid #c3d2e4',
        background: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#2a5a8a';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(18,55,47,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#c3d2e4';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Card header */}
      <div style={{ padding: '24px 24px 0' }}>
        {/* Category tag */}
        <span style={{
          display: 'inline-block',
          fontSize: '9px',
          letterSpacing: '0.9px',
          textTransform: 'uppercase',
          fontWeight: 700,
          padding: '3px 9px',
          borderRadius: '20px',
          background: c.bg,
          color: c.text,
          border: `1px solid ${c.border}`,
          marginBottom: '14px',
        }}>
          {categoryLabels[program.category]}
        </span>

        <h3 style={{ fontSize: '17px', fontWeight: 400, margin: '0 0 10px', letterSpacing: '-0.3px', lineHeight: 1.25 }}>
          {program.title}
        </h3>

        <p style={{ fontSize: '13px', color: '#55728a', lineHeight: 1.6, margin: '0 0 18px' }}>
          {program.description}
        </p>
      </div>

      {/* Meta row */}
      <div style={{ padding: '0 24px 20px', marginTop: 'auto' }}>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '10px', fontSize: '12px' }}>
            <span style={{ color: '#4d6a85', minWidth: '54px' }}>Format</span>
            <span style={{ color: 'var(--ink)' }}>{program.format}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', fontSize: '12px' }}>
            <span style={{ color: '#4d6a85', minWidth: '54px' }}>Audience</span>
            <span style={{ color: 'var(--ink)' }}>{program.audience}</span>
          </div>
          {program.facility && (
            <div style={{ display: 'flex', gap: '10px', fontSize: '12px' }}>
              <span style={{ color: '#4d6a85', minWidth: '54px' }}>Facility</span>
              <span style={{ color: 'var(--ink)' }}>{program.facility}</span>
            </div>
          )}
        </div>

        {/* Contact */}
        <a
          href={`mailto:${program.contact}`}
          style={{
            display: 'inline-block',
            marginTop: '16px',
            fontSize: '12px',
            color: '#2a5a8a',
            textDecoration: 'none',
            borderBottom: '1px solid #2a5a8a',
            paddingBottom: '1px',
          }}
        >
          Inquire about this program →
        </a>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TrainingProgramsPage() {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>('all');

  const filtered = activeCategory === 'all'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '75px 6% 100px' }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: '40px' }}>
        <p className="eyebrow">CESE Education &amp; Outreach</p>
        <h1 style={{
          fontSize: 'clamp(32px, 4.5vw, 60px)',
          fontWeight: 400,
          letterSpacing: '-2px',
          lineHeight: 1.05,
          margin: '8px 0 16px',
        }}>
          Training Programs.
        </h1>
        <p style={{ fontSize: '16px', color: '#55728a', margin: 0, maxWidth: '560px', lineHeight: 1.6 }}>
          Hands-on training in analytical methods, field techniques, data analysis, and professional skills
          for graduate students, researchers, and environmental professionals.
        </p>
      </div>

      {/* ── Stats bar ── */}
      <div style={{
        display: 'flex',
        gap: '40px',
        padding: '20px 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        marginBottom: '36px',
        flexWrap: 'wrap',
      }}>
        {[
          { value: programs.filter((p) => p.category === 'instrument').length.toString(), label: 'Instrument training courses' },
          { value: programs.filter((p) => p.category === 'field').length.toString(), label: 'Field methods workshops' },
          { value: programs.filter((p) => p.category === 'data').length.toString(), label: 'Data & GIS workshops' },
          { value: programs.filter((p) => p.category === 'professional').length.toString(), label: 'Professional development seminars' },
        ].map((stat) => (
          <div key={stat.label}>
            <p style={{ fontSize: '28px', fontWeight: 400, margin: 0, letterSpacing: '-1px', color: 'var(--ink)' }}>
              {stat.value}
            </p>
            <p style={{ fontSize: '11px', color: '#4d6a85', margin: '2px 0 0', letterSpacing: '0.2px' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Filter tabs ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '40px' }}>
        {categoryTabs.map((tab) => {
          const isActive = tab.value === activeCategory;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value)}
              style={{
                padding: '10px 15px',
                border: `1px solid ${isActive ? 'var(--ink)' : '#a8bcd4'}`,
                background: isActive ? 'var(--ink)' : 'transparent',
                borderRadius: '30px',
                color: isActive ? 'white' : 'var(--ink)',
                fontSize: '12px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.12s, border-color 0.12s, color 0.12s',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Program count ── */}
      <p style={{ fontSize: '13px', color: '#4d6a85', margin: '0 0 28px' }}>
        {filtered.length} program{filtered.length !== 1 ? 's' : ''} available
      </p>

      {/* ── Program grid ── */}
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '20px' }}
        className="path-grid"
      >
        {filtered.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {/* ── Custom training CTA ── */}
      <div style={{
        marginTop: '70px',
        padding: '40px 48px',
        border: '1px solid var(--line)',
        background: '#edf4fc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 400, margin: '0 0 8px', letterSpacing: '-0.5px' }}>
            Need a custom training solution?
          </h2>
          <p style={{ fontSize: '14px', color: '#55728a', margin: 0, maxWidth: '480px', lineHeight: 1.6 }}>
            We work with government agencies, environmental consultants, and industry partners to design
            tailored training in analytical techniques and environmental methods.
          </p>
        </div>
        <a
          href="mailto:cese@uconn.edu"
          style={{
            border: '1px solid var(--ink)',
            borderRadius: '30px',
            padding: '14px 24px',
            textDecoration: 'none',
            color: 'var(--ink)',
            fontSize: '13px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Contact us ↗
        </a>
      </div>

    </div>
  );
}
