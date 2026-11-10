import Link from 'next/link';
import type { ResearchProject } from '@/data/research';

interface ResearchCardProps {
  project: ResearchProject;
}

const focusLabels = { air: 'Air Quality', water: 'Water Systems', soil: 'Soil & Land Use' };

export default function ResearchCard({ project: p }: ResearchCardProps) {
  return (
    <div
      style={{
        borderTop: '1px solid #4d6a85',
        paddingTop: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
      }}
    >
      {/* Focus + status */}
      <small
        style={{
          fontSize: '10px',
          color: '#4a6a85',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
        }}
      >
        {focusLabels[p.focusArea]}
        {p.status === 'active' ? ' · Active' : ' · Completed'}
      </small>

      {/* Title */}
      <h3
        style={{
          fontSize: '23px',
          fontWeight: 400,
          letterSpacing: '-0.7px',
          margin: '14px 0 12px',
          lineHeight: 1.2,
          color: 'var(--ink)',
        }}
      >
        {p.title}
      </h3>

      {/* PI */}
      <p
        style={{
          fontSize: '12px',
          color: '#55728a',
          margin: '0 0 10px',
        }}
      >
        PI: {p.principalInvestigator} · {p.startYear}–
      </p>

      {/* Summary */}
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
        {p.summary}
      </p>

      {/* Link */}
      <Link
        href={`/research/${p.slug}`}
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
        Read more ↗
      </Link>
    </div>
  );
}
