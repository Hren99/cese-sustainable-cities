import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLabBySlug, getLabs } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getLabs().map((l) => ({ slug: l.slug }));
}

const focusLabels = { air: 'Air Quality', water: 'Water Systems', soil: 'Soil & Land Use' };

export default async function LabDetailPage({ params }: Props) {
  const { slug } = await params;
  const lab = getLabBySlug(slug);
  if (!lab) notFound();

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '55px 6% 85px' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '11px', color: '#4d6a85', marginBottom: '40px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#4d6a85' }}>Home</Link>
        <span>/</span>
        <Link href="/labs" style={{ textDecoration: 'none', color: '#4d6a85' }}>Labs</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>{lab.name}</span>
      </nav>

      {/* Focus tags */}
      <div style={{ display: 'flex', gap: '7px', marginBottom: '20px' }}>
        {lab.focusAreas.map((area) => (
          <span key={area} style={{
            fontSize: '10px', letterSpacing: '0.8px', textTransform: 'uppercase',
            padding: '7px 12px', border: '1px solid #a8bcd4', borderRadius: '20px', color: '#55728a',
          }}>
            {focusLabels[area]}
          </span>
        ))}
      </div>

      <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, letterSpacing: '-1.5px', margin: '0 0 12px', lineHeight: 1.1 }}>
        {lab.name}
      </h1>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '50px', fontSize: '13px', color: '#55728a' }}>
        <span>Director: <strong style={{ fontWeight: 500, color: 'var(--ink)' }}>{lab.director}</strong></span>
        <span>{lab.location}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '70px', alignItems: 'start' }} className="lab-section">
        {/* Description */}
        <div>
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px', marginBottom: '40px' }}>
            <p className="eyebrow" style={{ marginBottom: '14px' }}>About the lab</p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: 0 }}>{lab.description}</p>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Major equipment</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {lab.equipment.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#4a7090', alignItems: 'flex-start' }}>
                  <span style={{ color: '#4d6a85', flexShrink: 0, marginTop: '2px' }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
          <p className="eyebrow" style={{ marginBottom: '14px' }}>Contact</p>
          <a
            href={`mailto:${lab.contact}`}
            style={{
              textDecoration: 'none',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: '4px',
              fontSize: '13px',
              color: 'var(--ink)',
            }}
          >
            {lab.contact} ↗
          </a>
        </div>
      </div>

      <div style={{ marginTop: '55px', borderTop: '1px solid var(--line)', paddingTop: '25px' }}>
        <Link href="/labs" style={{
          textDecoration: 'none',
          borderBottom: '1px solid var(--ink)',
          paddingBottom: '4px',
          fontSize: '13px',
          color: 'var(--ink)',
        }}>
          ← Back to labs
        </Link>
      </div>
    </div>
  );
}
