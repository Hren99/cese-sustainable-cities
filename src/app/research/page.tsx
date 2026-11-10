export const instant = false;

import ResearchCard from '@/components/ResearchCard';
import { getResearch, filterResearchByFocus } from '@/lib/data';
import type { FocusArea } from '@/data/faculty';
import Link from 'next/link';

interface Props {
  searchParams: Promise<{ focus?: string; status?: string }>;
}

const focusTabs: { value: FocusArea | 'all'; label: string }[] = [
  { value: 'all', label: 'All Areas' },
  { value: 'air', label: 'Air Quality' },
  { value: 'water', label: 'Water Systems' },
  { value: 'soil', label: 'Soil & Land Use' },
];

const statusTabs = [
  { value: '', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export default async function ResearchPage({ searchParams }: Props) {
  const { focus, status } = await searchParams;
  const validFocus: FocusArea[] = ['air', 'water', 'soil'];
  const activeFocus = validFocus.includes(focus as FocusArea) ? (focus as FocusArea) : null;

  let projects = activeFocus ? filterResearchByFocus(activeFocus) : getResearch();

  if (status === 'active') projects = projects.filter((p) => p.status === 'active');
  else if (status === 'completed') projects = projects.filter((p) => p.status === 'completed');

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '75px 6% 85px' }}>
      {/* Header */}
      <div style={{ marginBottom: '35px' }}>
        <p className="eyebrow">Discover the connections</p>
        <h1 className="heading-lg">Research projects.</h1>
        <p style={{ fontSize: '13px', color: '#55728a', margin: '8px 0 0' }}>
          {projects.length} project{projects.length !== 1 ? 's' : ''}
          {activeFocus ? ` · ${activeFocus}` : ''}
        </p>
      </div>

      {/* Focus filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '12px' }}>
        {focusTabs.map((tab) => {
          const isActive = (tab.value === 'all' && !activeFocus) || tab.value === activeFocus;
          const href =
            tab.value === 'all'
              ? status ? `/research?status=${status}` : '/research'
              : status
              ? `/research?focus=${tab.value}&status=${status}`
              : `/research?focus=${tab.value}`;
          return (
            <Link
              key={tab.value}
              href={href}
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

      {/* Status filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '40px' }}>
        {statusTabs.map((s) => {
          const isActive = (s.value === '' && !status) || s.value === status;
          const href =
            s.value === ''
              ? activeFocus ? `/research?focus=${activeFocus}` : '/research'
              : activeFocus
              ? `/research?focus=${activeFocus}&status=${s.value}`
              : `/research?status=${s.value}`;
          return (
            <Link
              key={s.value}
              href={href}
              style={{
                padding: '8px 13px',
                border: `1px solid ${isActive ? '#55728a' : '#a8bcd4'}`,
                background: isActive ? '#55728a' : 'transparent',
                borderRadius: '30px',
                color: isActive ? 'white' : '#55728a',
                fontSize: '11px',
                textDecoration: 'none',
              }}
            >
              {s.label}
            </Link>
          );
        })}
      </div>

      {/* Grid */}
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}
        className="path-grid"
      >
        {projects.map((project) => (
          <ResearchCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length === 0 && (
        <p style={{ color: '#55728a', textAlign: 'center', padding: '64px 0' }}>
          No projects found for these filters.
        </p>
      )}
    </div>
  );
}
