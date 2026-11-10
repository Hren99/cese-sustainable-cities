import Link from 'next/link';
import type { Lab } from '@/data/labs';

interface LabCardProps {
  lab: Lab;
}

const focusLabels = { air: 'Air', water: 'Water', soil: 'Soil' };

export default function LabCard({ lab }: LabCardProps) {
  return (
    <div
      style={{
        borderTop: '1px solid #4d6a85',
        paddingTop: '22px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Focus areas */}
      <small
        style={{
          fontSize: '10px',
          color: '#4a6a85',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
        }}
      >
        {lab.focusAreas.map((a) => focusLabels[a]).join(' · ')}
      </small>

      {/* Name */}
      <h3
        style={{
          fontSize: '21px',
          fontWeight: 400,
          letterSpacing: '-0.6px',
          margin: '14px 0 10px',
          lineHeight: 1.2,
          color: 'var(--ink)',
        }}
      >
        {lab.name}
      </h3>

      {/* Director */}
      <p style={{ fontSize: '12px', color: '#55728a', margin: '0 0 10px' }}>
        Dir. {lab.director}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: '13px',
          lineHeight: 1.7,
          color: '#55728a',
          margin: '0 0 16px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {lab.description}
      </p>

      {/* Location */}
      <p style={{ fontSize: '11px', color: '#4d6a85', margin: '0 0 16px' }}>{lab.location}</p>

      <Link
        href={`/labs/${lab.slug}`}
        style={{
          fontSize: '13px',
          textDecoration: 'none',
          borderBottom: '1px solid var(--ink)',
          paddingBottom: '4px',
          alignSelf: 'flex-start',
          color: 'var(--ink)',
          marginTop: 'auto',
        }}
      >
        Lab details ↗
      </Link>
    </div>
  );
}
