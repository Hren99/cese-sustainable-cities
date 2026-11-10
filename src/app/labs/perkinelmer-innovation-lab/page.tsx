'use client';

import Link from 'next/link';
import Image from 'next/image';

const upcomingEvents = [
  {
    id: 'e1',
    title: 'ICP-OES Fundamentals: Avio 560 Max HTS',
    instrument: 'Avio 560 Max HTS',
    category: 'ICP-OES',
    date: '2026-11-18',
    displayDate: 'Nov 18, 2026',
    time: '9:00 AM – 1:00 PM',
    format: 'In-person',
    seats: 8,
    description: 'Introduction to ICP-OES theory and hands-on operation of the Avio 560 Max HTS. Covers sample preparation, calibration, and method optimization for environmental water and soil matrices.',
  },
  {
    id: 'e2',
    title: 'PFAS & Pesticide Screening: QSight 500 LC-MS/MS',
    instrument: 'QSight 500',
    category: 'LC-MS/MS',
    date: '2026-12-03',
    displayDate: 'Dec 3, 2026',
    time: '9:00 AM – 3:00 PM',
    format: 'In-person',
    seats: 6,
    description: 'Full-day workshop on multi-residue PFAS and pesticide analysis using the QSight 500. Includes method development, sample preparation, and regulatory compliance considerations.',
  },
  {
    id: 'e3',
    title: 'ICP-MS Method Development: NexION 5000',
    instrument: 'NexION 5000',
    category: 'ICP-MS',
    date: '2026-12-10',
    displayDate: 'Dec 10, 2026',
    time: '9:00 AM – 12:00 PM',
    format: 'In-person',
    seats: 6,
    description: 'Hands-on session covering ultra-trace elemental analysis in complex environmental matrices using the NexION 5000. Focus on interference removal and low-level detection strategies.',
  },
  {
    id: 'e4',
    title: 'GC-MS & Headspace for Volatile Organics',
    instrument: 'HS 2400 / MS 2400 SQT',
    category: 'GC-MS',
    date: '2027-01-14',
    displayDate: 'Jan 14, 2027',
    time: '9:00 AM – 1:00 PM',
    format: 'In-person',
    seats: 8,
    description: 'Combined training on the HS 2400 headspace sampler and MS 2400 SQT for VOC and SVOC analysis in water, soil, and air filter extracts. Includes EPA method overview.',
  },
  {
    id: 'e5',
    title: 'UHPLC Separations: LC 300 Fundamentals',
    instrument: 'LC 300',
    category: 'UHPLC',
    date: '2027-01-28',
    displayDate: 'Jan 28, 2027',
    time: '10:00 AM – 2:00 PM',
    format: 'In-person',
    seats: 8,
    description: 'Introduction to UHPLC theory and operation on the LC 300. Covers column selection, gradient development, and method transfer from conventional HPLC for environmental sample analysis.',
  },
  {
    id: 'e6',
    title: 'Multi-Platform Environmental Analysis Workshop',
    instrument: 'All instruments',
    category: 'Workshop',
    date: '2027-02-11',
    displayDate: 'Feb 11, 2027',
    time: '9:00 AM – 4:00 PM',
    format: 'In-person',
    seats: 10,
    description: 'Full-day workshop using all six PE-IL platforms to characterize a complex environmental sample set. Ideal for researchers wanting to understand which instrument is best suited to their project.',
  },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'ICP-OES':  { bg: '#e8f0fb', text: '#3a5fa0', border: '#b8cef0' },
  'ICP-MS':   { bg: '#e0f0f8', text: '#1a6080', border: '#9fd0e8' },
  'LC-MS/MS': { bg: '#f0ede4', text: '#6b5428', border: '#d9ccb0' },
  'GC-MS':    { bg: '#dde8f4', text: '#2a4a6a', border: '#a8bcd4' },
  'UHPLC':    { bg: '#eaf5ee', text: '#2a6040', border: '#a8d4b8' },
  'Workshop': { bg: '#f0eaf8', text: '#5a3a8a', border: '#c8b0e0' },
};

const lab = {
  name: 'UConn-PerkinElmer Innovation Laboratory',
  acronym: 'PE-IL',
  location: 'Institute of Environment and Energy Building, Storrs Campus',
  contact: 'cese-peil@uconn.edu',
  phone: '(860) 486-4015',
  focusAreas: ['Water', 'Air', 'Soil'],
  description:
    'The PerkinElmer Innovation Laboratory at CESE is a collaborative facility operated in partnership with PerkinElmer, Inc. The lab provides access to PerkinElmer\'s most advanced analytical platforms for environmental, biomedical, and materials research. As a designated PerkinElmer Center of Excellence, the facility supports both CESE research programs and external collaborators through hands-on instrument access, training, and application development.',
  capabilities:
    'The PE-IL specializes in separations science, elemental spectroscopy, and mass spectrometry. Through our PerkinElmer partnership, users gain access to application support, certified training curricula, and early access to new instrument technologies. The lab is particularly well-suited for high-throughput screening, method validation, and multi-platform comparison studies.',
  equipment: [
    {
      name: 'Avio 560 Max HTS',
      image: '/instruments/avio-560-max-hts.jpeg',
      category: 'ICP-OES',
      detail: 'High-throughput inductively coupled plasma – optical emission spectrometer for simultaneous multi-element analysis. Supports environmental and regulatory compliance testing at high sample volumes.',
    },
    {
      name: 'NexION 5000',
      image: '/instruments/nexion-5000.jpeg',
      category: 'ICP-MS',
      detail: 'Next-generation multi-quadrupole ICP-MS delivering ultra-low detection limits for trace and ultra-trace elemental analysis in complex environmental matrices.',
    },
    {
      name: 'HS 2400',
      image: '/instruments/hs-2400.jpeg',
      category: 'Headspace / GC',
      detail: 'Automated headspace sampler paired with the GC 2400 for analysis of volatile and semi-volatile organic compounds in water, soil, and air matrices.',
    },
    {
      name: 'LC 300',
      image: '/instruments/lc300.jpg',
      category: 'UHPLC',
      detail: 'Ultra-high-performance liquid chromatography system for fast, high-resolution separations of complex environmental matrices including PFAS, pharmaceuticals, and natural organic matter.',
    },
    {
      name: 'QSight 500',
      image: '/instruments/qsight-500.jpg',
      category: 'LC-MS/MS',
      detail: 'Triple quadrupole liquid chromatograph–mass spectrometer configured for multi-residue PFAS, pesticide, pharmaceutical, and emerging contaminant screening at trace concentrations.',
    },
    {
      name: 'MS 2400 SQT',
      image: '/instruments/ms-2400sqt.jpeg',
      category: 'GC-MS',
      detail: 'Single quadrupole gas chromatograph–mass spectrometer for targeted and screening analysis of volatile and semi-volatile organic compounds in environmental samples.',
    },
  ],
  services: [
    'Multi-element water quality analysis (drinking water, wastewater, stormwater)',
    'Trace and ultra-trace elemental analysis by ICP-OES and ICP-MS',
    'PFAS and pesticide screening by UHPLC-MS/MS',
    'Volatile and semi-volatile organic compound analysis by GC-MS/headspace',
    'Instrument training and certification for PerkinElmer platforms',
    'Method development and validation for EPA, ASTM, and ISO compliance',
    'PerkinElmer application demonstrations and feasibility studies',
    'High-throughput sample processing and multi-platform comparison studies',
  ],
  turnaround: '1–2 weeks standard; instrument-access scheduling available online',
  sampleTypes: ['Drinking water', 'Surface water & wastewater', 'Soil & sediment', 'Air filter extracts', 'Biological tissue', 'Nanomaterials & engineered materials'],
};

export default function PEILPage() {
  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '55px 6% 85px' }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ fontSize: '11px', color: '#4d6a85', marginBottom: '40px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#4d6a85' }}>Home</Link>
        <span>/</span>
        <Link href="/labs" style={{ textDecoration: 'none', color: '#4d6a85' }}>Laboratories</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>PerkinElmer Innovation Laboratory</span>
      </nav>

      {/* ── Hero image ── */}
      <div style={{ marginBottom: '50px', overflow: 'hidden' }}>
        <img
          src="/instruments/perkinelmer-hero.png"
          alt="UConn-PerkinElmer Innovation Laboratory"
          style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
      </div>

      {/* ── Header: title left, logo + contact right ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '70px', alignItems: 'start', marginBottom: '50px' }} className="lab-section">

        {/* Left: tags + title + subtitle */}
        <div>
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
            <span style={{
              fontSize: '10px', letterSpacing: '0.8px', textTransform: 'uppercase',
              padding: '7px 12px', border: '1px solid #c4b8e0', borderRadius: '20px', color: '#6b5fa0',
            }}>
              Industry Partnership
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 3.8vw, 52px)',
            fontWeight: 400,
            letterSpacing: '-1.8px',
            lineHeight: 1.05,
            margin: '0 0 10px',
          }}>
            {lab.name}
          </h1>
          <p style={{ fontSize: '16px', color: '#55728a', margin: 0, letterSpacing: '-0.3px' }}>
            {lab.acronym} · {lab.location}
          </p>
        </div>

        {/* Right: PerkinElmer logo + contact */}
        <div style={{ border: '1px solid var(--line)', background: 'white' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <span style={{
              fontWeight: 900,
              fontSize: '22px',
              letterSpacing: '-1px',
              color: '#071d31',
              borderRight: '1px solid var(--line)',
              paddingRight: '16px',
            }}>
              UCONN
            </span>
            <Image
              src="/instruments/perkinelmer-logo.png"
              alt="PerkinElmer"
              width={150}
              height={40}
              style={{ objectFit: 'contain', maxHeight: '40px', width: 'auto' }}
            />
          </div>
          <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '4px' }}>Email</small>
              <a href={`mailto:${lab.contact}`} style={{ fontSize: '13px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--line)', paddingBottom: '2px' }}>
                {lab.contact}
              </a>
            </div>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '4px' }}>Phone</small>
              <p style={{ fontSize: '13px', color: '#4a7090', margin: 0 }}>{lab.phone}</p>
            </div>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '4px' }}>Location</small>
              <p style={{ fontSize: '13px', color: '#4a7090', margin: 0 }}>{lab.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── About + CTA two-col layout ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '70px', alignItems: 'start', marginBottom: '60px' }} className="lab-section">

        {/* Left: description */}
        <div>
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
            <p className="eyebrow" style={{ marginBottom: '14px' }}>About the laboratory</p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: '0 0 18px' }}>
              {lab.description}
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: 0 }}>
              {lab.capabilities}
            </p>
          </div>
        </div>

        {/* Right: connect CTA card + meta */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* ── Connect CTA card ── */}
          <div style={{
            background: 'var(--ink)',
            color: 'white',
            padding: '28px',
            marginBottom: '1px',
          }}>
            <p style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px', fontWeight: 700 }}>
              Work with PE-IL
            </p>
            <h2 style={{ fontSize: '24px', fontWeight: 400, letterSpacing: '-0.8px', margin: '0 0 14px', lineHeight: 1.15 }}>
              Book instrument
              <br />time or training.
            </h2>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#b5cce0', margin: '0 0 22px' }}>
              Whether you need access to a specific PerkinElmer platform, instrument training, or a demonstration for a new application — the PE-IL team is ready to help.
            </p>
            <a
              href={`mailto:${lab.contact}?subject=PE-IL%20Instrument%20Access%20Request`}
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
              Connect with PE-IL <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Meta info */}
          <div style={{ border: '1px solid var(--line)', borderTop: 'none', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <small style={{ fontSize: '10px', color: '#4d6a85', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '6px' }}>
                Partnership
              </small>
              <p style={{ fontSize: '13px', color: '#4a7090', margin: 0 }}>PerkinElmer, Inc. — Center of Excellence designation</p>
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

      {/* ── Instrumentation — full-width image grid ── */}
      <div style={{ borderTop: '1px solid var(--line)', paddingTop: '40px', marginBottom: '60px' }}>
        <p className="eyebrow" style={{ marginBottom: '8px' }}>Instrumentation</p>
        <p style={{ fontSize: '14px', color: '#55728a', margin: '0 0 36px', maxWidth: '600px', lineHeight: 1.6 }}>
          Six PerkinElmer analytical platforms spanning elemental analysis, chromatography, and mass spectrometry.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }} className="path-grid">
          {lab.equipment.map((eq) => (
            <div key={eq.name} style={{ background: 'white', border: '1px solid var(--line)', overflow: 'hidden' }}>
              {/* Instrument image */}
              <div style={{ position: 'relative', width: '100%', paddingBottom: '70%', background: '#f8fafc' }}>
                <Image
                  src={eq.image}
                  alt={eq.name}
                  fill
                  style={{ objectFit: 'contain', padding: '20px' }}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              {/* Instrument info */}
              <div style={{ padding: '20px 22px 24px' }}>
                <span style={{
                  fontSize: '9px', letterSpacing: '1.2px', textTransform: 'uppercase',
                  fontWeight: 700, color: '#4d6a85', display: 'block', marginBottom: '6px',
                }}>
                  {eq.category}
                </span>
                <h3 style={{
                  fontSize: '18px', fontWeight: 400, letterSpacing: '-0.4px',
                  margin: '0 0 10px', color: 'var(--ink)',
                }}>
                  {eq.name}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#4a7090', margin: 0 }}>
                  {eq.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Upcoming training events ── */}
      <div style={{ borderTop: '1px solid var(--line)', paddingTop: '40px', marginBottom: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '6px' }}>Training calendar</p>
            <p style={{ fontSize: '14px', color: '#55728a', margin: 0, maxWidth: '520px', lineHeight: 1.6 }}>
              Hands-on instrument training led by CESE and PerkinElmer application specialists. Seats are limited — register early.
            </p>
          </div>
          <a
            href={`mailto:cese-peil@uconn.edu?subject=Custom%20Training%20Request`}
            style={{ fontSize: '12px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: '3px', whiteSpace: 'nowrap' }}
          >
            Request custom training ↗
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {upcomingEvents.map((ev, idx) => {
            const colors = categoryColors[ev.category] ?? categoryColors['Workshop'];
            const registrationSubject = encodeURIComponent(`Training Registration: ${ev.title} (${ev.displayDate})`);
            const registrationHref = `mailto:cese-peil@uconn.edu?subject=${registrationSubject}`;

            return (
              <div
                key={ev.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  gap: '24px',
                  alignItems: 'start',
                  padding: '24px 0',
                  borderTop: idx === 0 ? 'none' : '1px solid var(--line)',
                }}
              >
                {/* Date stamp */}
                <div style={{ textAlign: 'center', paddingTop: '2px' }}>
                  <div style={{
                    background: 'var(--ink)',
                    color: 'white',
                    padding: '10px 14px',
                    display: 'inline-block',
                    minWidth: '72px',
                  }}>
                    <p style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: '0 0 2px', color: 'var(--accent)', fontWeight: 700 }}>
                      {ev.displayDate.split(' ')[0]}
                    </p>
                    <p style={{ fontSize: '24px', fontWeight: 400, margin: '0', letterSpacing: '-1px', lineHeight: 1 }}>
                      {ev.displayDate.split(' ')[1].replace(',', '')}
                    </p>
                    <p style={{ fontSize: '10px', margin: '2px 0 0', color: '#b5cce0', letterSpacing: '0.5px' }}>
                      {ev.displayDate.split(' ')[2]}
                    </p>
                  </div>
                </div>

                {/* Event details */}
                <div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '9px', letterSpacing: '1.2px', textTransform: 'uppercase', fontWeight: 700,
                      padding: '3px 9px', borderRadius: '20px',
                      background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`,
                    }}>
                      {ev.category}
                    </span>
                    <span style={{ fontSize: '11px', color: '#4d6a85' }}>{ev.instrument}</span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 400, letterSpacing: '-0.3px', margin: '0 0 6px', color: 'var(--ink)', lineHeight: 1.25 }}>
                    {ev.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#4d6a85', margin: '0 0 8px' }}>
                    {ev.time} &nbsp;·&nbsp; {ev.format} &nbsp;·&nbsp; {ev.seats} seats
                  </p>
                  <p style={{ fontSize: '13px', color: '#55728a', margin: 0, lineHeight: 1.6, maxWidth: '560px' }}>
                    {ev.description}
                  </p>
                </div>

                {/* Register button */}
                <div style={{ paddingTop: '4px' }}>
                  <a
                    href={registrationHref}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid var(--ink)',
                      borderRadius: '3px',
                      padding: '11px 18px',
                      textDecoration: 'none',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      whiteSpace: 'nowrap',
                      transition: 'background 0.12s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--ink)';
                      (e.currentTarget as HTMLElement).style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = 'var(--ink)';
                    }}
                  >
                    Register ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ fontSize: '12px', color: '#4d6a85', margin: 0 }}>
            All training sessions held at the Institute of Environment and Energy Building, Storrs Campus.
          </p>
          <a
            href={`mailto:cese-peil@uconn.edu?subject=PE-IL%20Training%20Question`}
            style={{ fontSize: '12px', color: '#55728a', textDecoration: 'none' }}
          >
            Questions? Email PE-IL →
          </a>
        </div>
      </div>

      {/* ── Analytical services — full-width ── */}
      <div style={{ borderTop: '1px solid var(--line)', paddingTop: '40px' }}>
        <p className="eyebrow" style={{ marginBottom: '20px' }}>Analytical services</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 48px' }} className="intro-grid">
          {lab.services.map((s, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#4a7090', alignItems: 'flex-start' }}>
              <span style={{ color: '#4d6a85', flexShrink: 0, marginTop: '2px' }}>→</span>
              {s}
            </li>
          ))}
        </ul>
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
