import Link from 'next/link';

const lab = {
  name: 'Inorganic Analysis Laboratory',
  acronym: 'IAL',
  director: 'Stephanie Kexel',
  location: 'Castleman Building, Room 115, Storrs Campus',
  contact: 'cese-ial@uconn.edu',
  focusAreas: ['Water', 'Soil'],
  description:
    'The Inorganic Analysis Laboratory (IAL) delivers precise, multi-element analysis of metals, metalloids, nutrients, and anions across a wide range of environmental sample types. The IAL serves CESE research programs and external clients requiring rigorous inorganic characterization for regulatory compliance, environmental monitoring, and scientific investigation.',
  capabilities:
    'IAL is accredited for a broad suite of EPA and Standard Methods procedures and maintains a rigorous internal QA/QC program. Our team assists clients from project design through data reporting, ensuring that analytical results meet the requirements of regulatory submissions, peer-reviewed publication, and litigation support.',
  equipment: [
    {
      name: 'ICP-MS',
      detail: 'Inductively coupled plasma – mass spectrometer for trace and ultra-trace metals (Agilent 7900)',
    },
    {
      name: 'ICP-OES',
      detail: 'Inductively coupled plasma – optical emission spectrometer for major and minor elements (PerkinElmer Avio 500)',
    },
    {
      name: 'GFAAS',
      detail: 'Graphite furnace atomic absorption spectrometer for lead, arsenic, and cadmium',
    },
    {
      name: 'CVAFS',
      detail: 'Cold vapor atomic fluorescence spectrometer for mercury (EPA Method 1631)',
    },
    {
      name: 'Ion Chromatograph',
      detail: 'For anions: nitrate, nitrite, sulfate, chloride, phosphate (Dionex ICS-6000)',
    },
    {
      name: 'Flow Injection Analyzer',
      detail: 'Automated colorimetric analysis for ammonia, TKN, and reactive phosphorus',
    },
    {
      name: 'pXRF',
      detail: 'Portable X-ray fluorescence for rapid in-field soil metal screening',
    },
    {
      name: 'Microwave Digestion',
      detail: 'CEM MARS 6 system for acid digestion of soil, sediment, and tissue samples',
    },
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
  turnaround: '1–3 weeks standard; rush service available upon request',
  sampleTypes: ['Drinking water & groundwater', 'Surface water & wastewater', 'Soil & sediment', 'Biosolids & sludge', 'Biological tissue', 'Atmospheric deposition'],
};

export default function IALPage() {
  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '55px 6% 85px' }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ fontSize: '11px', color: '#4d6a85', marginBottom: '40px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#4d6a85' }}>Home</Link>
        <span>/</span>
        <Link href="/labs" style={{ textDecoration: 'none', color: '#4d6a85' }}>Laboratories</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>Inorganic Analysis Laboratory</span>
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
      <h1 style={{
        fontSize: 'clamp(28px, 3.8vw, 52px)',
        fontWeight: 400,
        letterSpacing: '-1.8px',
        lineHeight: 1.05,
        margin: '0 0 10px',
      }}>
        {lab.name}
      </h1>
      <p style={{ fontSize: '16px', color: '#55728a', margin: '0 0 50px', letterSpacing: '-0.3px' }}>
        {lab.acronym} · Dir. {lab.director} · {lab.location}
      </p>

      {/* ── Main two-col layout ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '70px', alignItems: 'start' }} className="lab-section">

        {/* Left */}
        <div>
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px', marginBottom: '40px' }}>
            <p className="eyebrow" style={{ marginBottom: '14px' }}>About the laboratory</p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: '0 0 18px' }}>
              {lab.description}
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: 0 }}>
              {lab.capabilities}
            </p>
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

        {/* Right: connect card + meta */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* ── Connect CTA card ── */}
          <div style={{
            background: 'var(--ink)',
            color: 'white',
            padding: '28px',
            marginBottom: '1px',
          }}>
            <p style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px', fontWeight: 700 }}>
              Work with IAL
            </p>
            <h2 style={{ fontSize: '24px', fontWeight: 400, letterSpacing: '-0.8px', margin: '0 0 14px', lineHeight: 1.15 }}>
              Submit a sample
              <br />request.
            </h2>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#b5cce0', margin: '0 0 22px' }}>
              From drinking water compliance testing to research-grade heavy metal profiling — IAL provides the precision your project demands.
            </p>
            <a
              href={`mailto:${lab.contact}?subject=IAL%20Sample%20Request`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                background: 'var(--accent)',
                color: '#0d2540',
                borderRadius: '3px',
                padding: '15px 20px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 700,
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              Connect with IAL <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Meta info */}
          <div style={{ border: '1px solid var(--line)', borderTop: 'none', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '6px' }}>
                Contact
              </small>
              <a href={`mailto:${lab.contact}`} style={{ fontSize: '13px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line)', paddingBottom: '2px' }}>
                {lab.contact}
              </a>
            </div>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '6px' }}>
                Typical turnaround
              </small>
              <p style={{ fontSize: '13px', color: '#4a7090', margin: 0 }}>{lab.turnaround}</p>
            </div>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '10px' }}>
                Sample types accepted
              </small>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {lab.sampleTypes.map((s) => (
                  <span key={s} style={{
                    fontSize: '11px', padding: '5px 10px',
                    border: '1px solid #a8bcd4', borderRadius: '20px', color: '#55728a',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FY26 Approved Rates ── */}
      <div style={{ marginTop: '65px', borderTop: '1px solid var(--line)', paddingTop: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <p className="eyebrow" style={{ margin: 0 }}>FY26 Approved Rates</p>
          <span style={{ fontSize: '11px', color: '#4d6a85', letterSpacing: '0.3px' }}>Effective December 31, 2025</span>
        </div>
        <p style={{ fontSize: '12px', color: '#4d6a85', margin: '0 0 32px', lineHeight: 1.7, maxWidth: '640px' }}>
          Internal rates apply to UConn-affiliated researchers. External rates include the 61% indirect cost (IDC) surcharge. Contact{' '}
          <a href="mailto:cese-ial@uconn.edu" style={{ color: '#55728a', textDecoration: 'underline' }}>cese-ial@uconn.edu</a>
          {' '}for custom project quotes or multi-sample volume discounts.
        </p>

        {/* Metals */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--ink)', margin: '0 0 16px' }}>
            Metals &amp; Trace Elements
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <th scope="col" style={{ textAlign: 'left', padding: '10px 16px 10px 0', fontWeight: 600, color: 'var(--ink)', width: '44%' }}>Analysis</th>
                  <th scope="col" style={{ textAlign: 'left', padding: '10px 16px', fontWeight: 600, color: 'var(--ink)', width: '28%' }}>Matrix</th>
                  <th scope="col" style={{ textAlign: 'right', padding: '10px 16px', fontWeight: 600, color: 'var(--ink)', width: '14%' }}>Internal</th>
                  <th scope="col" style={{ textAlign: 'right', padding: '10px 0 10px 16px', fontWeight: 600, color: 'var(--ink)', width: '14%' }}>External</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { analysis: 'ICP-MS, 1 element', matrix: 'Water / liquid', internal: '$11.12', external: '$43.23' },
                  { analysis: 'Each additional element', matrix: 'Water / liquid', internal: '+$2.92', external: '+$7.00' },
                  { analysis: 'ICP-MS, 1 element', matrix: 'Solid / tissue', internal: '$13.23', external: '$54.10' },
                  { analysis: 'Each additional element', matrix: 'Solid / tissue', internal: '+$2.92', external: '+$7.00' },
                  { analysis: 'ICP-OES, 1 element', matrix: 'Water / liquid', internal: '$6.00', external: '$32.45' },
                  { analysis: 'Each additional element', matrix: 'Water / liquid', internal: '+$1.30', external: '+$4.70' },
                  { analysis: 'ICP-OES, 1 element', matrix: 'Solid / tissue', internal: '$7.44', external: '$44.68' },
                  { analysis: 'Each additional element', matrix: 'Solid / tissue', internal: '+$1.30', external: '+$4.70' },
                  { analysis: 'CVAAS – Mercury (EPA 1631)', matrix: 'Water', internal: '$5.04', external: '$57.06' },
                  { analysis: 'CVAAS – Mercury (EPA 1631)', matrix: 'Solid / tissue', internal: '$5.01', external: '$71.48' },
                  { analysis: '% Moisture / Total Extractable Organics', matrix: 'Solid', internal: '$7.52', external: '$33.18' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e8f0f8', background: i % 2 === 0 ? 'transparent' : '#f4f8fc' }}>
                    <td style={{ padding: '11px 16px 11px 0', color: 'var(--ink)' }}>{row.analysis}</td>
                    <td style={{ padding: '11px 16px', color: '#55728a' }}>{row.matrix}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'right', color: '#2a5a8a', fontVariantNumeric: 'tabular-nums' }}>{row.internal}</td>
                    <td style={{ padding: '11px 0 11px 16px', textAlign: 'right', color: '#55728a', fontVariantNumeric: 'tabular-nums' }}>{row.external}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Nutrients */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--ink)', margin: '0 0 16px' }}>
            Nutrients &amp; Water Quality Parameters
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <th scope="col" style={{ textAlign: 'left', padding: '10px 16px 10px 0', fontWeight: 600, color: 'var(--ink)', width: '44%' }}>Analysis</th>
                  <th scope="col" style={{ textAlign: 'left', padding: '10px 16px', fontWeight: 600, color: 'var(--ink)', width: '28%' }}>Method</th>
                  <th scope="col" style={{ textAlign: 'right', padding: '10px 16px', fontWeight: 600, color: 'var(--ink)', width: '14%' }}>Internal</th>
                  <th scope="col" style={{ textAlign: 'right', padding: '10px 0 10px 16px', fontWeight: 600, color: 'var(--ink)', width: '14%' }}>External</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { analysis: 'Ammonia (NH₃)', method: 'EPA 350.1', internal: '$6.58', external: '$18.82' },
                  { analysis: 'Nitrate+Nitrite (NOₓ)', method: 'EPA 353.2', internal: '$6.58', external: '$18.82' },
                  { analysis: 'Orthophosphate', method: 'EPA 365.1', internal: '$6.58', external: '$18.82' },
                  { analysis: 'Any 2 of above', method: '', internal: '$8.51', external: '$23.45' },
                  { analysis: 'Any 3 of above', method: '', internal: '$10.45', external: '$28.07' },
                  { analysis: 'All 4 N&P analytes', method: '', internal: '$12.38', external: '$32.70' },
                  { analysis: 'Total Nitrogen (TN)', method: 'EPA 353.2', internal: '$7.46', external: '$22.40' },
                  { analysis: 'Total Phosphorus (TP)', method: 'EPA 365.1', internal: '$7.46', external: '$22.40' },
                  { analysis: 'TN + TP combined', method: '', internal: '$9.40', external: '$27.02' },
                  { analysis: 'Total Organic Carbon (TOC)', method: '', internal: '$5.85', external: '$42.06' },
                  { analysis: 'Dissolved Organic Carbon (DOC)', method: '', internal: '$7.45', external: '$48.07' },
                  { analysis: 'Chlorophyll a', method: 'EPA 445.0', internal: '$5.85', external: '$25.18' },
                  { analysis: 'Total Suspended Solids (TSS)', method: 'EPA 160.2', internal: '$6.69', external: '$16.79' },
                  { analysis: 'pH', method: 'EPA 150.1', internal: '$4.21', external: '$16.60' },
                  { analysis: 'Alkalinity', method: 'EPA 310.1', internal: '$4.21', external: '$16.60' },
                  { analysis: 'Turbidity', method: 'EPA 180.1', internal: '$3.66', external: '$12.51' },
                  { analysis: 'Conductivity', method: 'EPA 415.1', internal: '$3.26', external: '$12.83' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e8f0f8', background: i % 2 === 0 ? 'transparent' : '#f4f8fc' }}>
                    <td style={{ padding: '11px 16px 11px 0', color: 'var(--ink)' }}>{row.analysis}</td>
                    <td style={{ padding: '11px 16px', color: '#4d6a85', fontSize: '12px' }}>{row.method}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'right', color: '#2a5a8a', fontVariantNumeric: 'tabular-nums' }}>{row.internal}</td>
                    <td style={{ padding: '11px 0 11px 16px', textAlign: 'right', color: '#55728a', fontVariantNumeric: 'tabular-nums' }}>{row.external}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '11px', color: '#4d6a85', marginTop: '10px' }}>
            * Calculated analytes (Nitrate by difference, TKN, Organic N) are included at no additional charge when constituent tests are ordered.
          </p>
        </div>

        {/* Staff hourly */}
        <div style={{
          background: '#edf4fc',
          border: '1px solid var(--line)',
          padding: '20px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          alignItems: 'center',
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
              Applies to
            </small>
            <span style={{ fontSize: '13px', color: '#4a7090' }}>Method development, instrument troubleshooting, custom analysis</span>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ marginTop: '55px', borderTop: '1px solid var(--line)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <Link href="/labs" style={{ textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: '4px', fontSize: '13px', color: 'var(--ink)' }}>
          ← All laboratories
        </Link>
        <Link href="/labs/organic-molecular-analysis-laboratory" style={{ textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: '4px', fontSize: '13px', color: 'var(--ink)' }}>
          ← Organic Molecular Analysis Laboratory
        </Link>
      </div>
    </div>
  );
}
