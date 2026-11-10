'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FacultyCard from '@/components/FacultyCard';
import { faculty as allFaculty, type Faculty, type FocusArea } from '@/data/faculty';

// ── Scoring (from find-an-expert) ─────────────────────────────────────────────

function computeScore(f: Faculty, rawQuery: string): number {
  const q = rawQuery.toLowerCase().trim();
  if (q.length < 2) return 0;
  const terms = q.split(/\s+/).filter((t) => t.length >= 2);
  if (terms.length === 0) return 0;

  let score = 0;
  for (const area of f.focusAreas) {
    if (terms.includes(area) || q === area) score += 20;
    else if (terms.some((t) => area.includes(t) || t.includes(area))) score += 12;
  }
  function scoreBlock(text: string, weight: number) {
    const t = text.toLowerCase();
    if (t.includes(q)) { score += weight * 3; }
    else {
      let matched = 0;
      for (const term of terms) { if (t.includes(term)) matched++; }
      if (matched > 0) score += (matched / terms.length) * weight;
    }
  }
  for (const interest of f.researchInterests) scoreBlock(interest, 12);
  for (const kw of f.keywords ?? []) scoreBlock(kw, 10);
  scoreBlock(f.bio, 4);
  scoreBlock(f.title, 6);
  scoreBlock(f.department, 2);
  return score;
}

function getMatchedInterests(f: Faculty, rawQuery: string): string[] {
  const q = rawQuery.toLowerCase().trim();
  const terms = q.split(/\s+/).filter((t) => t.length >= 2);
  return f.researchInterests.filter((interest) => {
    const t = interest.toLowerCase();
    return t.includes(q) || terms.some((term) => t.includes(term));
  });
}

// ── Suggestions ───────────────────────────────────────────────────────────────

const SUGGESTIONS = [
  'PFAS', 'stable isotopes', 'wetlands', 'urban air quality',
  'water treatment', 'soil carbon', 'nitrogen cycling', 'climate modeling',
  'GIS mapping', 'bioremediation', 'wildfire', 'microplastics',
];

// ── Focus tabs ────────────────────────────────────────────────────────────────

const FOCUS_TABS: { value: FocusArea | 'all'; label: string }[] = [
  { value: 'all',   label: 'All' },
  { value: 'air',   label: 'Air Quality' },
  { value: 'water', label: 'Water Systems' },
  { value: 'soil',  label: 'Soil & Land Use' },
];

const focusBadgeColors: Record<string, { bg: string; text: string }> = {
  air:   { bg: '#e8f0fb', text: '#3a5fa0' },
  water: { bg: '#e0f0f8', text: '#1a6080' },
  soil:  { bg: '#dde8f4', text: '#2a4a6a' },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  return name.split(' ').filter((p) => !p.startsWith('(')).map((n) => n[0]).slice(0, 2).join('');
}

// ── Expert result card (search mode) ─────────────────────────────────────────

function ExpertCard({ faculty: f, query }: { faculty: Faculty; query: string }) {
  const matched = getMatchedInterests(f, query);
  const displayInterests = matched.length > 0 ? matched.slice(0, 3) : f.researchInterests.slice(0, 2);

  return (
    <Link
      href={`/faculty/${f.slug}`}
      style={{
        display: 'flex', flexDirection: 'row',
        border: '1px solid #c3d2e4', background: 'var(--paper)',
        textDecoration: 'none', color: 'var(--ink)',
        overflow: 'hidden', transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#2a5a8a')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#c3d2e4')}
    >
      <div style={{ width: '110px', flexShrink: 0, background: '#dde8f0', position: 'relative', overflow: 'hidden' }}>
        {f.imageUrl ? (
          <Image src={f.imageUrl} alt={f.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} sizes="110px" />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a6a85', fontFamily: 'Georgia, serif', fontSize: '20px' }}>
            {getInitials(f.name)}
          </div>
        )}
      </div>
      <div style={{ padding: '18px 20px', flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 400, margin: 0, letterSpacing: '-0.3px', lineHeight: 1.2 }}>{f.name}</h3>
          <span aria-hidden="true" style={{ fontSize: '14px', color: '#4a6a85', flexShrink: 0, marginLeft: '12px' }}>↗</span>
        </div>
        <p style={{ fontSize: '11px', color: '#55728a', margin: '4px 0 10px', lineHeight: 1.4 }}>{f.title}</p>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {f.focusAreas.map((area) => {
            const c = focusBadgeColors[area];
            return (
              <span key={area} style={{ fontSize: '9px', letterSpacing: '0.7px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '20px', background: c.bg, color: c.text }}>
                {area}
              </span>
            );
          })}
        </div>
        <div style={{ marginTop: 'auto' }}>
          {matched.length > 0 && (
            <p style={{ fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#4d6a85', margin: '0 0 5px' }}>Related expertise</p>
          )}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {displayInterests.map((interest, i) => (
              <li key={i} style={{ fontSize: '12px', color: '#4a7090', display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
                <span style={{ color: '#4d6a85', flexShrink: 0, marginTop: '1px' }}>→</span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}


// ── Page ──────────────────────────────────────────────────────────────────────

export default function OurNetworkPage() {
  const [query, setQuery] = useState('');
  const [activeFocus, setActiveFocus] = useState<FocusArea | 'all'>('all');

  const hasQuery = query.trim().length >= 2;

  const searchResults = useMemo(() => {
    if (!hasQuery) return [];
    return allFaculty
      .map((f) => ({ faculty: f, score: computeScore(f, query.trim()) }))
      .filter((r) => r.score >= 8)
      .sort((a, b) => b.score - a.score);
  }, [query, hasQuery]);

  const browseResults = useMemo(() => {
    if (activeFocus === 'all') return allFaculty;
    return allFaculty.filter((f) => f.focusAreas.includes(activeFocus as FocusArea));
  }, [activeFocus]);

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '70px 6% 100px' }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: '40px' }}>
        <p className="eyebrow">CESE Faculty &amp; Researchers</p>
        <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 400, letterSpacing: '-2px', lineHeight: 1.05, margin: '8px 0 14px' }}>
          Our Network.
        </h1>
        <p style={{ fontSize: '16px', color: '#55728a', margin: 0, maxWidth: '520px', lineHeight: 1.6 }}>
          Browse our faculty by domain or search by research topic, environmental challenge, or analytical technique.
        </p>
      </div>

      {/* ── Search bar ── */}
      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4d6a85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          id="network-search"
          aria-label="Search faculty by research expertise, e.g. PFAS, wetlands, air quality"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search by topic — e.g. "PFAS" · "soil carbon" · "air quality" · "stable isotopes"'
          style={{
            width: '100%', boxSizing: 'border-box',
            padding: '18px 18px 18px 50px', fontSize: '15px',
            border: '1.5px solid var(--line)', background: 'var(--paper)', color: 'var(--ink)',
            outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.15s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#2a5a8a')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
        />
        {query && (
          <button onClick={() => setQuery('')}
            style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#4d6a85', lineHeight: 1, padding: '4px' }}
            aria-label="Clear search">×</button>
        )}
      </div>

      {/* ── Suggestion chips (shown when idle) ── */}
      {!hasQuery && (
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', color: '#4d6a85', letterSpacing: '0.6px', textTransform: 'uppercase', margin: '0 0 10px' }}>
            Try searching for
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => setQuery(s)} aria-label={`Search for ${s}`}
                style={{ padding: '8px 15px', border: '1px solid #b5c8dc', borderRadius: '30px', background: 'transparent', color: '#2a4a6a', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.12s, border-color 0.12s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#dde8f4'; (e.currentTarget as HTMLElement).style.borderColor = '#5a8ab5'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = '#b5c8dc'; }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Search results ── */}
      {hasQuery && (
        <>
          <h2 className="sr-only">Search results</h2>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid var(--line)' }}>
            <p style={{ fontSize: '13px', color: '#55728a', margin: 0 }}>
              {searchResults.length > 0
                ? <><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{searchResults.length}</strong> expert{searchResults.length !== 1 ? 's' : ''} matched for <em>&ldquo;{query.trim()}&rdquo;</em></>
                : <>No experts found for <em>&ldquo;{query.trim()}&rdquo;</em></>
              }
            </p>
            {searchResults.length > 0 && <span style={{ fontSize: '11px', color: '#4d6a85' }}>sorted by relevance</span>}
          </div>

          {searchResults.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '16px' }}>
              {searchResults.map(({ faculty: f }) => <ExpertCard key={f.id} faculty={f} query={query.trim()} />)}
            </div>
          ) : (
            <div style={{ padding: '48px 0' }}>
              <p style={{ fontSize: '15px', color: '#55728a', margin: '0 0 20px' }}>Try a broader term, or browse these common topics:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => setQuery(s)} aria-label={`Search for ${s}`}
                    style={{ padding: '8px 15px', border: '1px solid #b5c8dc', borderRadius: '30px', background: 'transparent', color: '#2a4a6a', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ── Browse grid (shown when idle) ── */}
      {!hasQuery && (
        <>
          {/* Focus tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '30px' }}>
            {FOCUS_TABS.map((tab) => {
              const isActive = tab.value === activeFocus;
              return (
                <button key={tab.value} onClick={() => setActiveFocus(tab.value)}
                  style={{ padding: '10px 15px', border: `1px solid ${isActive ? 'var(--ink)' : '#a8bcd4'}`, background: isActive ? 'var(--ink)' : 'transparent', borderRadius: '30px', color: isActive ? 'white' : 'var(--ink)', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.12s, border-color 0.12s, color 0.12s' }}>
                  {tab.label}
                </button>
              );
            })}
          </div>

          <p style={{ fontSize: '12px', color: '#4d6a85', margin: '0 0 20px' }}>
            {browseResults.length} researcher{browseResults.length !== 1 ? 's' : ''}
            {activeFocus !== 'all' ? ` in ${activeFocus}` : ' across all domains'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="people-grid">
            {browseResults.map((f) => <FacultyCard key={f.id} faculty={f} />)}
          </div>
        </>
      )}
    </div>
  );
}
