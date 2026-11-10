'use client';

import Link from 'next/link';
import { useState } from 'react';

const lab = {
  name: 'Organic Molecular Analysis Laboratory',
  acronym: 'OMAL',
  director: 'Anthony Provatas',
  location: 'Castleman Building, Room 112, Storrs Campus',
  contact: 'cese-omal@uconn.edu',
  phone: '(860) 486-0000',
  focusAreas: ['Water', 'Air', 'Soil'],
  description:
    'The Organic Molecular Analysis Laboratory (OMAL) provides state-of-the-art analytical services for the identification and quantification of organic compounds in environmental matrices—water, air, soil, sediment, and biological tissue. OMAL supports both CESE-affiliated research projects and external collaborators from academia, government, and industry seeking expert environmental chemistry analysis.',
  capabilities: `OMAL specializes in targeted and non-targeted analysis of persistent organic pollutants, emerging contaminants, and naturally occurring organic compounds. Our team offers method development, standard operating procedure (SOP) design, and full QA/QC-compliant reporting to meet EPA, ASTM, and ISO standards.`,
  equipment: [
    { name: 'HPLC-MS/MS', detail: 'High-performance liquid chromatograph – triple quadrupole mass spectrometer for PFAS, pharmaceuticals, and pesticides' },
    { name: 'GC-HRMS', detail: 'Gas chromatograph – high-resolution mass spectrometer for PAHs, PCBs, and dioxins' },
    { name: 'GC-MS/MS', detail: 'Gas chromatograph – triple quadrupole mass spectrometer for volatile and semi-volatile organics' },
    { name: 'UPLC-QTOF', detail: 'Ultra-performance liquid chromatograph – quadrupole time-of-flight for non-targeted screening' },
    { name: 'TOC/TN Analyzer', detail: 'Total organic carbon / total nitrogen analyzer for water and soil extracts' },
    { name: 'Automated SPE', detail: 'Solid-phase extraction workstation for sample cleanup and concentration' },
    { name: 'Freeze-dryer & Rotary Evaporator', detail: 'Sample concentration and solvent evaporation systems' },
  ],
  services: [
    'PFAS quantification in water, soil, and biosolids (EPA Methods 533, 537.1)',
    'Pesticide and herbicide screening in surface water and groundwater',
    'Polycyclic aromatic hydrocarbon (PAH) analysis in sediments',
    'Pharmaceutical and personal care product (PPCP) detection',
    'Non-targeted organic contaminant screening',
    'Microplastic-associated organic additive analysis',
    'Method development and validation for novel analytes',
    'QA/QC reporting compliant with EPA, ASTM, and ISO standards',
  ],
  turnaround: '2–4 weeks standard; rush service available upon request',
  sampleTypes: ['Drinking water & groundwater', 'Surface water & stormwater', 'Soil & sediment', 'Wastewater & biosolids', 'Air filter extracts', 'Biological tissue'],
};

const analysisTypes = [
  {
    title: 'PFAS & Emerging Contaminants',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <path d="M10 16h12M16 10v12" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    ),
    description: 'Targeted quantification of per- and polyfluoroalkyl substances (PFAS) in water, soil, biosolids, and tissue using EPA Methods 533, 537.1, and 1633. Covers 28-compound and full 40+ compound panels.',
    tags: ['EPA 537.1', 'EPA 1633', 'PFAS', 'Biosolids'],
    color: '#e8f4fb',
    border: '#a0ccdc',
    text: '#1a5878',
  },
  {
    title: 'Pesticides & Herbicides',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4v24M8 12c4-4 12-4 16 0M6 20c4-6 16-6 20 0" />
      </svg>
    ),
    description: 'Multi-residue pesticide and herbicide screening in surface water, groundwater, agricultural runoff, and soil. Includes organochlorines, organophosphates, pyrethroids, and herbicide families.',
    tags: ['Organochlorines', 'Organophosphates', 'Pyrethroids', 'Surface water'],
    color: '#eaf5ee',
    border: '#a0ccb0',
    text: '#1a5c40',
  },
  {
    title: 'PAHs & Persistent Organic Pollutants',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 24L16 8l8 16H8z" />
        <path d="M12 18h8" />
      </svg>
    ),
    description: 'Quantification of polycyclic aromatic hydrocarbons (PAHs), PCBs, PBDEs, and other persistent organic pollutants in sediment, soil, tissue, and water using GC-HRMS and GC-MS/MS.',
    tags: ['PAHs', 'PCBs', 'PBDEs', 'Sediment'],
    color: '#f0ede4',
    border: '#c4b898',
    text: '#5c4820',
  },
  {
    title: 'HAB Toxins & Cyanotoxins',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 20c3-6 8-10 10-10s7 4 10 10" />
        <path d="M10 24c2-4 4-6 6-6s4 2 6 6" />
        <circle cx="16" cy="10" r="2" />
      </svg>
    ),
    description: 'Detection and quantification of microcystins and other harmful algal bloom (HAB) toxins in water, tissue, and sediment. Covers up to 14 toxin variants using LC-MS/MS methods.',
    tags: ['Microcystins', 'HAB toxins', 'LC-MS/MS', 'Water'],
    color: '#f0eaf8',
    border: '#c0a8dc',
    text: '#5a3a8a',
  },
  {
    title: 'Pharmaceuticals & PPCPs',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="6" width="12" height="20" rx="2" />
        <path d="M13 12h6M13 16h6M13 20h4" />
      </svg>
    ),
    description: 'Targeted analysis of pharmaceuticals, personal care products, and biomedical compounds in water, tissue, and biosolids. Customizable analyte panels for up to 3 or more compounds.',
    tags: ['Pharmaceuticals', 'PPCPs', 'Biomedical', 'Wastewater'],
    color: '#fce8e8',
    border: '#dcb0b0',
    text: '#7a2a2a',
  },
  {
    title: 'Non-targeted & Suspect Screening',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="14" cy="14" r="8" />
        <path d="M20 20l6 6" />
        <path d="M11 14h6M14 11v6" />
      </svg>
    ),
    description: 'High-resolution accurate mass screening using UPLC-QTOF for discovery-based detection of unknown organic contaminants. Ideal for complex mixtures, spill investigations, and research applications.',
    tags: ['QTOF', 'HRMS', 'Non-targeted', 'Discovery'],
    color: '#e8f0fb',
    border: '#a8c0e8',
    text: '#2a3a7a',
  },
];

const rateGroups = [
  {
    title: 'Persistent Organic Pollutants — Pesticides, PCBs, PAHs, PBDEs',
    rows: [
      { analysis: 'POPs in Tissue, Soil/Sediment, Blood, Solids', internal: '$22.30', external: '$164.71' },
      { analysis: 'POPs in Water', internal: '$28.84', external: '$170.64' },
    ],
  },
  {
    title: 'Per- & Polyfluoroalkyl Substances (PFAS)',
    rows: [
      { analysis: '28-compound PFAS, Tissue/Soil/Solids (CESE Method)', internal: '$80.77', external: '$289.65' },
      { analysis: '28-compound PFAS, Water (EPA 537.1 or CESE Method)', internal: '$80.73', external: '$312.39' },
      { analysis: 'PFAS, Tissue/Soil/Solids — EPA 1633', internal: '$185.16', external: '$606.34' },
      { analysis: 'PFAS, Water — EPA 1633', internal: '$157.53', external: '$555.19' },
      { analysis: '3-compound PFAS screen, Water', internal: '$37.46', external: '$172.16' },
      { analysis: '3-compound PFAS screen, Tissue/Soil/Solids', internal: '$70.85', external: '$226.92' },
    ],
  },
  {
    title: 'HAB Toxins, Pharmaceuticals & Other Organics',
    rows: [
      { analysis: 'Microcystin / HABs in Water (up to 14 toxins)', internal: '$55.23', external: '$220.87' },
      { analysis: 'Microcystin / HABs in Tissue & Sediment (up to 14 toxins)', internal: '$50.67', external: '$216.77' },
      { analysis: 'Pharmaceutical / Biomedical Analysis (up to 3 compounds)', internal: '$42.26', external: '$184.48' },
      { analysis: 'Pharmaceutical / Biomedical Analysis (> 3 compounds)', internal: '$42.26', external: '$216.44' },
      { analysis: 'Fatty Acid Analysis', internal: '$34.87', external: '$177.31' },
      { analysis: 'Short Chain Fatty Acid Analysis', internal: '$53.79', external: '$219.61' },
      { analysis: 'THC / CBD in tissue and plant material', internal: '$44.16', external: '$193.72' },
      { analysis: '% Moisture / Total Extractable Organics (TEOs)', internal: '$7.44', external: '$32.87' },
    ],
  },
];

function RateTable({ rows }: { rows: { analysis: string; internal: string; external: string }[] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--line)' }}>
            <th scope="col" style={{ textAlign: 'left', padding: '10px 16px 10px 0', fontWeight: 600, color: 'var(--ink)', width: '58%' }}>Analysis</th>
            <th scope="col" style={{ textAlign: 'right', padding: '10px 16px', fontWeight: 600, color: 'var(--ink)', width: '21%' }}>Internal</th>
            <th scope="col" style={{ textAlign: 'right', padding: '10px 0 10px 16px', fontWeight: 600, color: 'var(--ink)', width: '21%' }}>External</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #e8f0f8', background: i % 2 === 0 ? 'transparent' : '#f4f8fc' }}>
              <td style={{ padding: '11px 16px 11px 0', color: 'var(--ink)' }}>{row.analysis}</td>
              <td style={{ padding: '11px 16px', textAlign: 'right', color: '#2a5a8a', fontVariantNumeric: 'tabular-nums' }}>{row.internal}</td>
              <td style={{ padding: '11px 0 11px 16px', textAlign: 'right', color: '#55728a', fontVariantNumeric: 'tabular-nums' }}>{row.external}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function OMALPage() {
  const [activeTab, setActiveTab] = useState<'services' | 'rates'>('services');

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '55px 6% 85px' }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ fontSize: '11px', color: '#4d6a85', marginBottom: '40px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#4d6a85' }}>Home</Link>
        <span>/</span>
        <Link href="/labs" style={{ textDecoration: 'none', color: '#4d6a85' }}>Laboratories</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>Organic Molecular Analysis Laboratory</span>
      </nav>

      {/* Focus tags */}
      <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {lab.focusAreas.map((area) => (
          <span key={area} style={{
            fontSize: '10px', letterSpacing: '0.8px', textTransform: 'uppercase',
            padding: '7px 12px', border: '1px solid #a8bcd4', borderRadius: '20px', color: '#55728a',
          }}>
            {area}
          </span>
        ))}
        <span style={{
          fontSize: '10px', letterSpacing: '0.8px', textTransform: 'uppercase',
          padding: '7px 12px', background: 'var(--ink)', borderRadius: '20px', color: 'var(--accent)',
          border: '1px solid var(--ink)',
        }}>
          Analytical Facility
        </span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 'clamp(28px, 3.8vw, 52px)', fontWeight: 400, letterSpacing: '-1.8px', lineHeight: 1.05, margin: '0 0 10px' }}>
        {lab.name}
      </h1>
      <p style={{ fontSize: '16px', color: '#55728a', margin: '0 0 40px', letterSpacing: '-0.3px' }}>
        {lab.acronym} · Dir. {lab.director} · {lab.location}
      </p>

      {/* ── Tab bar ── */}
      <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--line)', marginBottom: '48px' }}>
        {(['services', 'rates'] as const).map((tab) => {
          const labels = { services: 'Services', rates: 'Rates' };
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: isActive ? '2px solid var(--ink)' : '2px solid transparent',
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--ink)' : '#55728a',
                cursor: 'pointer',
                fontFamily: 'inherit',
                marginBottom: '-1px',
                transition: 'color 0.12s',
              }}
            >
              {labels[tab]}
            </button>
          );
        })}
      </div>

      {/* ── SERVICES TAB ── */}
      {activeTab === 'services' && (
        <>
          {/* Two-col layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '70px', alignItems: 'start', marginBottom: '60px' }} className="lab-section">

            {/* Left */}
            <div>
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px', marginBottom: '40px' }}>
                <p className="eyebrow" style={{ marginBottom: '14px' }}>About the laboratory</p>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: '0 0 18px' }}>{lab.description}</p>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: 0 }}>{lab.capabilities}</p>
              </div>

              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px', marginBottom: '40px' }}>
                <p className="eyebrow" style={{ marginBottom: '20px' }}>Instrumentation</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {lab.equipment.map((eq) => (
                    <div key={eq.name} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <span style={{
                        fontSize: '11px', fontWeight: 700, background: '#dde8f4',
                        padding: '4px 10px', borderRadius: '20px', color: 'var(--ink)',
                        flexShrink: 0, whiteSpace: 'nowrap', marginTop: '2px',
                      }}>
                        {eq.name}
                      </span>
                      <span style={{ fontSize: '14px', color: '#4a7090', lineHeight: 1.6 }}>{eq.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
                <p className="eyebrow" style={{ marginBottom: '20px' }}>Analytical services</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {lab.services.map((s, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#4a7090', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4d6a85', flexShrink: 0, marginTop: '2px' }}>→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: CTA + meta */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <div style={{ background: 'var(--ink)', color: 'white', padding: '28px', marginBottom: '1px' }}>
                <p style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px', fontWeight: 700 }}>
                  Work with OMAL
                </p>
                <h2 style={{ fontSize: '24px', fontWeight: 400, letterSpacing: '-0.8px', margin: '0 0 14px', lineHeight: 1.15 }}>
                  Submit a sample<br />request.
                </h2>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#b5cce0', margin: '0 0 22px' }}>
                  Whether you're a CESE researcher, a state agency, or an industry partner — OMAL is here to support your environmental analysis needs.
                </p>
                <a
                  href={`mailto:${lab.contact}?subject=OMAL%20Sample%20Request`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '28px', background: 'var(--accent)', color: '#0d2540', borderRadius: '3px',
                    padding: '15px 20px', textDecoration: 'none', fontSize: '13px', fontWeight: 700,
                    width: '100%', boxSizing: 'border-box',
                  }}
                >
                  Connect with OMAL <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div style={{ border: '1px solid var(--line)', borderTop: 'none', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '6px' }}>Contact</small>
                  <a href={`mailto:${lab.contact}`} style={{ fontSize: '13px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line)', paddingBottom: '2px' }}>
                    {lab.contact}
                  </a>
                </div>
                <div>
                  <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '6px' }}>Typical turnaround</small>
                  <p style={{ fontSize: '13px', color: '#4a7090', margin: 0 }}>{lab.turnaround}</p>
                </div>
                <div>
                  <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '10px' }}>Sample types accepted</small>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {lab.sampleTypes.map((s) => (
                      <span key={s} style={{ fontSize: '11px', padding: '5px 10px', border: '1px solid #a8bcd4', borderRadius: '20px', color: '#55728a' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Analysis types grid ── */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '48px' }}>
            <p className="eyebrow" style={{ marginBottom: '8px' }}>Types of analysis</p>
            <p style={{ fontSize: '14px', color: '#55728a', margin: '0 0 36px', maxWidth: '600px', lineHeight: 1.6 }}>
              OMAL offers targeted, semi-targeted, and non-targeted analysis across a wide range of organic compound classes in environmental matrices.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
              {analysisTypes.map((type) => (
                <div
                  key={type.title}
                  style={{
                    background: type.color,
                    border: `1px solid ${type.border}`,
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <div style={{ color: type.text }}>{type.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 500, color: type.text, margin: 0, letterSpacing: '-0.3px' }}>
                    {type.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#4a7090', lineHeight: 1.65, margin: 0 }}>
                    {type.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                    {type.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '10px', padding: '3px 9px',
                        border: `1px solid ${type.border}`, borderRadius: '20px', color: type.text,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── RATES TAB ── */}
      {activeTab === 'rates' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <p className="eyebrow" style={{ margin: 0 }}>FY26 Approved Rates</p>
            <span style={{ fontSize: '11px', color: '#4d6a85', letterSpacing: '0.3px' }}>Effective December 31, 2025</span>
          </div>
          <p style={{ fontSize: '12px', color: '#4d6a85', margin: '0 0 40px', lineHeight: 1.7, maxWidth: '640px' }}>
            Internal rates apply to UConn-affiliated researchers. External rates include the 61% indirect cost (IDC) surcharge.
            Contact{' '}
            <a href="mailto:cese-omal@uconn.edu" style={{ color: '#55728a', textDecoration: 'underline' }}>cese-omal@uconn.edu</a>
            {' '}or{' '}
            <a href="mailto:anthony.provatas@uconn.edu" style={{ color: '#55728a', textDecoration: 'underline' }}>anthony.provatas@uconn.edu</a>
            {' '}for custom project quotes or analyses not listed below.
          </p>

          {rateGroups.map((group) => (
            <div key={group.title} style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--ink)', margin: '0 0 16px' }}>
                {group.title}
              </p>
              <RateTable rows={group.rows} />
            </div>
          ))}

          {/* Staff + untargeted */}
          <div style={{
            background: '#edf4fc', border: '1px solid var(--line)', padding: '20px 24px',
            display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start',
          }}>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '4px' }}>
                Staff hourly rate
              </small>
              <span style={{ fontSize: '15px', color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>
                $55.57 internal &nbsp;·&nbsp; $92.62 external &nbsp;·&nbsp; $149.11 external + IDC
              </span>
            </div>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '4px' }}>
                Untargeted / non-targeted analysis (per hour)
              </small>
              <span style={{ fontSize: '15px', color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>
                $114.29 internal (CESE chemist) &nbsp;·&nbsp; $253.03 external
              </span>
              <p style={{ fontSize: '12px', color: '#4d6a85', margin: '5px 0 0' }}>Instrument use by trained external user: $58.72/hr internal</p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom nav */}
      <div style={{ marginTop: '55px', borderTop: '1px solid var(--line)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <Link href="/labs" style={{ textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: '4px', fontSize: '13px', color: 'var(--ink)' }}>
          ← All laboratories
        </Link>
        <Link href="/labs/inorganic-analysis-laboratory" style={{ textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: '4px', fontSize: '13px', color: 'var(--ink)' }}>
          Inorganic Analysis Laboratory →
        </Link>
      </div>
    </div>
  );
}
