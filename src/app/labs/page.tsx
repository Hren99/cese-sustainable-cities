export const instant = false;

import LabCard from '@/components/LabCard';
import { getLabs, filterLabsByFocus } from '@/lib/data';
import type { FocusArea } from '@/data/faculty';
import Link from 'next/link';

interface Props {
  searchParams: Promise<{ focus?: string }>;
}

const focusTabs: { value: FocusArea | 'all'; label: string }[] = [
  { value: 'all', label: 'View All' },
  { value: 'air', label: 'Air Quality' },
  { value: 'water', label: 'Water Systems' },
  { value: 'soil', label: 'Soil & Land Use' },
];

export default async function LabsPage({ searchParams }: Props) {
  const { focus } = await searchParams;
  const validFocus: FocusArea[] = ['air', 'water', 'soil'];
  const activeFocus = validFocus.includes(focus as FocusArea) ? (focus as FocusArea) : null;

  const allLabs = activeFocus ? filterLabsByFocus(activeFocus) : getLabs();

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '75px 6% 85px' }}>
      {/* Header */}
      <div style={{ marginBottom: '35px' }}>
        <p className="eyebrow">The science behind the solutions</p>
        <h1 className="heading-lg">Research laboratories &amp; facilities.</h1>
        <p style={{ fontSize: '13px', color: '#55728a', margin: '8px 0 0' }}>
          {allLabs.length} lab{allLabs.length !== 1 ? 's' : ''} available for environmental research
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '40px' }}>
        {focusTabs.map((tab) => {
          const isActive = (tab.value === 'all' && !activeFocus) || tab.value === activeFocus;
          return (
            <Link
              key={tab.value}
              href={tab.value === 'all' ? '/labs' : `/labs?focus=${tab.value}`}
              style={{
                padding: '10px 15px',
                border: `1px solid ${isActive ? 'var(--ink)' : '#a8bcd4'}`,
                background: isActive ? 'var(--ink)' : 'transparent',
                borderRadius: '30px',
                color: isActive ? 'white' : 'var(--ink)',
                fontSize: '12px',
                textDecoration: 'none',
              }}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>

      {/* Grid */}
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}
        className="path-grid"
      >
        {allLabs.map((lab) => (
          <LabCard key={lab.id} lab={lab} />
        ))}
      </div>

      {allLabs.length === 0 && (
        <p style={{ color: '#55728a', textAlign: 'center', padding: '64px 0' }}>
          No labs found for this focus area.
        </p>
      )}
    </div>
  );
}
