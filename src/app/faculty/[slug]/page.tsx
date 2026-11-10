import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getFacultyBySlug, getFaculty } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getFaculty().map((f) => ({ slug: f.slug }));
}

const domainLabels = { air: 'Air Quality', water: 'Water Systems', soil: 'Soil & Land Use' };

function getInitials(name: string) {
  return name.split(' ').filter((p) => !p.startsWith('(')).map((n) => n[0]).slice(0, 2).join('');
}

export default async function FacultyDetailPage({ params }: Props) {
  const { slug } = await params;
  const member = getFacultyBySlug(slug);
  if (!member) notFound();

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '55px 6% 85px' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '11px', color: '#4d6a85', marginBottom: '40px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#4d6a85' }}>Home</Link>
        <span>/</span>
        <Link href="/faculty" style={{ textDecoration: 'none', color: '#4d6a85' }}>Faculty</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>{member.name}</span>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '70px', alignItems: 'start' }} className="lab-section">
        {/* Left column */}
        <div>
          {/* Avatar / Photo */}
          <div style={{
            width: '120px', height: '120px', borderRadius: '50%',
            overflow: 'hidden', background: '#dde8f0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '24px', flexShrink: 0,
          }}>
            {member.imageUrl ? (
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={120}
                height={120}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            ) : (
              <span style={{ color: '#4a6a85', fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400 }}>
                {getInitials(member.name)}
              </span>
            )}
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 400, letterSpacing: '-1.2px', margin: '0 0 8px', lineHeight: 1.1 }}>
            {member.name}
          </h1>
          <p style={{ fontSize: '13px', color: '#55728a', margin: '0 0 4px' }}>{member.title}</p>
          <p style={{ fontSize: '12px', color: '#4d6a85', margin: '0 0 20px' }}>{member.department}</p>

          {/* Domain tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
            {member.focusAreas.map((area) => (
              <span key={area} style={{
                fontSize: '10px', letterSpacing: '0.6px', textTransform: 'uppercase',
                padding: '7px 12px', border: '1px solid #a8bcd4', borderRadius: '20px',
                color: '#55728a',
              }}>
                {domainLabels[area]}
              </span>
            ))}
          </div>

          <a
            href={`mailto:${member.email}`}
            style={{
              textDecoration: 'none',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: '4px',
              fontSize: '13px',
              color: 'var(--ink)',
            }}
          >
            {member.email} ↗
          </a>
        </div>

        {/* Right column */}
        <div>
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px', marginBottom: '40px' }}>
            <p className="eyebrow" style={{ marginBottom: '14px' }}>Biography</p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: 0 }}>{member.bio}</p>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Research interests</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {member.researchInterests.map((interest, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#4a7090', alignItems: 'flex-start' }}>
                  <span style={{ color: '#4d6a85', flexShrink: 0, marginTop: '2px' }}>→</span>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '55px', borderTop: '1px solid var(--line)', paddingTop: '25px' }}>
        <Link href="/faculty" style={{
          textDecoration: 'none',
          borderBottom: '1px solid var(--ink)',
          paddingBottom: '4px',
          fontSize: '13px',
          color: 'var(--ink)',
        }}>
          ← Back to faculty
        </Link>
      </div>
    </div>
  );
}
