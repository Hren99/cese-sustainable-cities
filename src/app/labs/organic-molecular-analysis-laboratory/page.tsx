import Link from 'next/link';

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
    {
      name: 'HPLC-MS/MS',
      detail: 'High-performance liquid chromatograph – triple quadrupole mass spectrometer for PFAS, pharmaceuticals, and pesticides',
    },
    {
      name: 'GC-HRMS',
      detail: 'Gas chromatograph – high-resolution mass spectrometer for PAHs, PCBs, and dioxins',
    },
    {
      name: 'GC-MS/MS',
      detail: 'Gas chromatograph – triple quadrupole mass spectrometer for volatile and semi-volatile organics',
    },
    {
      name: 'UPLC-QTOF',
      detail: 'Ultra-performance liquid chromatograph – quadrupole time-of-flight for non-targeted screening',
    },
    {
      name: 'TOC/TN Analyzer',
      detail: 'Total organic carbon / total nitrogen analyzer for water and soil extracts',
    },
    {
      name: 'Automated SPE',
      detail: 'Solid-phase extraction workstation for sample cleanup and concentration',
    },
    {
      name: 'Freeze-dryer & Rotary Evaporator',
      detail: 'Sample concentration and solvent evaporation systems',
    },
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

export default function OMALPage() {
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

        {/* Left: description + equipment + services */}
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
              Work with OMAL
            </p>
            <h2 style={{ fontSize: '24px', fontWeight: 400, letterSpacing: '-0.8px', margin: '0 0 14px', lineHeight: 1.15 }}>
              Submit a sample
              <br />request.
            </h2>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#b5cce0', margin: '0 0 22px' }}>
              Whether you're a CESE researcher, a state agency, or an industry partner — OMAL is here to support your environmental analysis needs.
            </p>
            <a
              href={`mailto:${lab.contact}?subject=OMAL%20Sample%20Request`}
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
              Connect with OMAL <span aria-hidden="true">↗</span>
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
          Internal rates apply to UConn-affiliated researchers. External rates include the 61% indirect cost (IDC) surcharge.
          Contact{' '}
          <a href="mailto:cese-omal@uconn.edu" style={{ color: '#55728a', textDecoration: 'underline' }}>cese-omal@uconn.edu</a>
          {' '}or{' '}
          <a href="mailto:anthony.provatas@uconn.edu" style={{ color: '#55728a', textDecoration: 'underline' }}>anthony.provatas@uconn.edu</a>
          {' '}for custom project quotes or analyses not listed below.
        </p>

        {/* Persistent Organic Pollutants */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--ink)', margin: '0 0 16px' }}>
            Persistent Organic Pollutants — Pesticides, PCBs, PAHs, PBDEs
          </p>
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
                {[
                  { analysis: 'POPs in Tissue, Soil/Sediment, Blood, Solids', internal: '$22.30', external: '$164.71' },
                  { analysis: 'POPs in Water', internal: '$28.84', external: '$170.64' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e8f0f8', background: i % 2 === 0 ? 'transparent' : '#f4f8fc' }}>
                    <td style={{ padding: '11px 16px 11px 0', color: 'var(--ink)' }}>{row.analysis}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'right', color: '#2a5a8a', fontVariantNumeric: 'tabular-nums' }}>{row.internal}</td>
                    <td style={{ padding: '11px 0 11px 16px', textAlign: 'right', color: '#55728a', fontVariantNumeric: 'tabular-nums' }}>{row.external}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PFAS */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--ink)', margin: '0 0 16px' }}>
            Per- &amp; Polyfluoroalkyl Substances (PFAS)
          </p>
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
                {[
                  { analysis: '28-compound PFAS, Tissue/Soil/Solids (CESE Method)', internal: '$80.77', external: '$289.65' },
                  { analysis: '28-compound PFAS, Water (EPA 537.1 or CESE Method)', internal: '$80.73', external: '$312.39' },
                  { analysis: 'PFAS, Tissue/Soil/Solids — EPA 1633', internal: '$185.16', external: '$606.34' },
                  { analysis: 'PFAS, Water — EPA 1633', internal: '$157.53', external: '$555.19' },
                  { analysis: '3-compound PFAS screen, Water', internal: '$37.46', external: '$172.16' },
                  { analysis: '3-compound PFAS screen, Tissue/Soil/Solids', internal: '$70.85', external: '$226.92' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e8f0f8', background: i % 2 === 0 ? 'transparent' : '#f4f8fc' }}>
                    <td style={{ padding: '11px 16px 11px 0', color: 'var(--ink)' }}>{row.analysis}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'right', color: '#2a5a8a', fontVariantNumeric: 'tabular-nums' }}>{row.internal}</td>
                    <td style={{ padding: '11px 0 11px 16px', textAlign: 'right', color: '#55728a', fontVariantNumeric: 'tabular-nums' }}>{row.external}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* HAB Toxins + Other */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--ink)', margin: '0 0 16px' }}>
            HAB Toxins, Pharmaceuticals &amp; Other Organics
          </p>
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
                {[
                  { analysis: 'Microcystin / HABs in Water (up to 14 toxins)', internal: '$55.23', external: '$220.87' },
                  { analysis: 'Microcystin / HABs in Tissue & Sediment (up to 14 toxins)', internal: '$50.67', external: '$216.77' },
                  { analysis: 'Pharmaceutical / Biomedical Analysis (up to 3 compounds)', internal: '$42.26', external: '$184.48' },
                  { analysis: 'Pharmaceutical / Biomedical Analysis (> 3 compounds)', internal: '$42.26', external: '$216.44' },
                  { analysis: 'Fatty Acid Analysis', internal: '$34.87', external: '$177.31' },
                  { analysis: 'Short Chain Fatty Acid Analysis', internal: '$53.79', external: '$219.61' },
                  { analysis: 'THC / CBD in tissue and plant material', internal: '$44.16', external: '$193.72' },
                  { analysis: '% Moisture / Total Extractable Organics (TEOs)', internal: '$7.44', external: '$32.87' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e8f0f8', background: i % 2 === 0 ? 'transparent' : '#f4f8fc' }}>
                    <td style={{ padding: '11px 16px 11px 0', color: 'var(--ink)' }}>{row.analysis}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'right', color: '#2a5a8a', fontVariantNumeric: 'tabular-nums' }}>{row.internal}</td>
                    <td style={{ padding: '11px 0 11px 16px', textAlign: 'right', color: '#55728a', fontVariantNumeric: 'tabular-nums' }}>{row.external}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Staff hourly + untargeted */}
        <div style={{
          background: '#edf4fc',
          border: '1px solid var(--line)',
          padding: '20px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          alignItems: 'flex-start',
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
