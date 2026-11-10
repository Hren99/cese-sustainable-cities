'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Faculty } from '@/data/faculty';

interface FacultyCardProps {
  faculty: Faculty;
}

const domainLabels = {
  air: 'Air',
  water: 'Water',
  soil: 'Soil',
  health: 'Human Health',
};

function getInitials(name: string) {
  const parts = name.split(' ').filter((p) => !p.startsWith('('));
  return parts
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
}

export default function FacultyCard({ faculty: f }: FacultyCardProps) {
  return (
    <Link
      href={`/faculty/${f.slug}`}
      style={{
        border: '1px solid #c3d2e4',
        background: 'var(--paper)',
        textDecoration: 'none',
        color: 'var(--ink)',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
        minHeight: '160px',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#2a5a8a')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#c3d2e4')}
    >
      {/* Photo */}
      <div
        style={{
          width: '120px',
          flexShrink: 0,
          background: '#dde8f0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {f.imageUrl ? (
          <Image
            src={f.imageUrl}
            alt={f.name}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            sizes="120px"
          />
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#4a6a85', fontFamily: 'Georgia, serif', fontSize: '22px',
          }}>
            {getInitials(f.name)}
          </div>
        )}
      </div>

      {/* Text */}
      <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
        {/* Arrow */}
        <span aria-hidden="true" style={{ fontSize: '16px', color: '#4a6a85', alignSelf: 'flex-end', marginBottom: 'auto' }}>↗</span>

        {/* Name */}
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 400,
            margin: '12px 0 6px',
            letterSpacing: '-0.3px',
            lineHeight: 1.2,
          }}
        >
          {f.name}
        </h3>

        {/* Title */}
        <p
          style={{
            fontSize: '11px',
            color: '#55728a',
            margin: '0 0 8px',
            lineHeight: 1.4,
          }}
        >
          {f.title}
        </p>

        {/* Domain tags */}
        <p
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            color: '#4d6a85',
            margin: 0,
            marginTop: 'auto',
          }}
        >
          {f.focusAreas.map((a) => domainLabels[a]).join(' · ')}
        </p>
      </div>
    </Link>
  );
}
