'use client';

import { useState, useEffect, useCallback } from 'react';
import type { NewsArticle } from '@/lib/googleNews';
import Link from 'next/link';

const FILTERS = [
  { value: 'all',                  label: 'All' },
  { value: 'Michael Hren',         label: 'Michael Hren' },
  { value: 'CESE',                 label: 'CESE' },
  { value: 'Sustainable Cities Lab', label: 'Sustainable Cities Lab' },
  { value: 'Faculty',              label: 'Faculty' },
];

function SkeletonCard() {
  return (
    <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ width: '120px', height: '10px', background: '#dde8f4', borderRadius: '4px' }} />
      <div style={{ width: '90%', height: '14px', background: '#dde8f4', borderRadius: '4px' }} />
      <div style={{ width: '75%', height: '14px', background: '#dde8f4', borderRadius: '4px' }} />
      <div style={{ width: '50%', height: '10px', background: '#dde8f4', borderRadius: '4px' }} />
    </div>
  );
}

function cleanSource(source: string): string {
  if (!source) return '';
  if (source.startsWith('http')) {
    try { return new URL(source).hostname.replace(/^www\./, ''); } catch { /* fall through */ }
  }
  return source;
}

function ArticleCard({ article: a }: { article: NewsArticle }) {
  const date = a.isoDate
    ? new Date(a.isoDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : a.pubDate;
  const source = cleanSource(a.source);

  const tagColor =
    a.tag === 'Michael Hren'
      ? { bg: '#234f65', text: '#cae8ee' }
      : a.tag === 'CESE' || a.tag === 'Sustainable Cities Lab'
      ? { bg: '#075456', text: '#b9f0dc' }
      : { bg: '#3a5a40', text: '#d5ed93' };

  return (
    <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px', display: 'flex', flexDirection: 'column', gap: '0' }}>
      {/* Tag + date row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
        <span style={{
          fontSize: '9px', letterSpacing: '1.4px', textTransform: 'uppercase', fontWeight: 700,
          padding: '4px 9px', borderRadius: '20px',
          background: tagColor.bg, color: tagColor.text,
        }}>
          {a.matchedName ?? a.tag}
        </span>
        {source && (
          <span style={{ fontSize: '11px', color: '#4d6a85', fontWeight: 500 }}>{source}</span>
        )}
        {date && (
          <span style={{ fontSize: '11px', color: '#4d6a85', marginLeft: 'auto' }}>{date}</span>
        )}
      </div>

      {/* Title */}
      <a
        href={a.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'var(--ink)',
          fontSize: '20px',
          fontWeight: 400,
          letterSpacing: '-0.5px',
          lineHeight: 1.25,
          display: 'block',
          marginBottom: '10px',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#1e5495')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ink)')}
      >
        {a.title}
      </a>

      {/* Snippet */}
      {a.description && (
        <p style={{
          fontSize: '13px', lineHeight: 1.65, color: '#55728a', margin: '0 0 14px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {a.description}
        </p>
      )}

      <a
        href={a.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '12px', color: 'var(--ink)', textDecoration: 'none',
          borderBottom: '1px solid var(--line)', paddingBottom: '3px', alignSelf: 'flex-start',
        }}
      >
        Read the full article ↗
      </a>
    </div>
  );
}

export default function InTheNewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [fetchedAt, setFetchedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const loadNews = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/in-the-news');
      if (!res.ok) throw new Error('fetch failed');
      const data = await res.json();
      setArticles(data.articles ?? []);
      setFetchedAt(data.fetchedAt ?? null);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadNews(); }, [loadNews]);

  const filtered = articles.filter((a) => {
    const matchesFilter =
      activeFilter === 'all' ||
      a.tag === activeFilter ||
      a.matchedName === activeFilter ||
      (activeFilter === 'Faculty' && a.tag === 'Faculty');

    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.source.toLowerCase().includes(q) ||
      (a.matchedName ?? '').toLowerCase().includes(q);

    return matchesFilter && matchesSearch;
  });

  const updatedLabel = fetchedAt
    ? new Date(fetchedAt).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
    : null;

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '75px 6% 85px' }}>
      {/* Header */}
      <div style={{ marginBottom: '10px' }}>
        <p className="eyebrow">External coverage</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <h1 className="heading-lg">In the News.</h1>
          {updatedLabel && (
            <p style={{ fontSize: '11px', color: '#4d6a85', margin: '0 0 6px' }}>
              Updated {updatedLabel} · refreshes hourly
            </p>
          )}
        </div>
        <p style={{ fontSize: '14px', color: '#55728a', margin: '10px 0 0', maxWidth: '620px', lineHeight: 1.7 }}>
          News articles and publications mentioning UConn CESE faculty,
          the Center for Environmental Sciences &amp; Engineering, and Michael Hren —
          aggregated live from Google News.
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center', marginTop: '35px', flexWrap: 'wrap' }}>
        {/* Filter pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={isActive}
                style={{
                  padding: '10px 15px',
                  border: `1px solid ${isActive ? 'var(--ink)' : '#a8bcd4'}`,
                  background: isActive ? 'var(--ink)' : 'transparent',
                  borderRadius: '30px',
                  color: isActive ? 'white' : 'var(--ink)',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '-10000px' }}>Search articles</span>
          <input
            type="search"
            placeholder="Search articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: '1px solid #a0b4c8',
              padding: '11px 15px',
              borderRadius: '3px',
              background: 'var(--paper)',
              fontSize: '13px',
              color: 'var(--ink)',
              minWidth: '240px',
              outline: 'none',
            }}
          />
        </label>
      </div>

      {/* Results count */}
      <p style={{ fontSize: '11px', color: '#55728a', margin: '20px 0 0' }} aria-live="polite">
        {loading ? 'Fetching from Google News…' : error ? '' : `${filtered.length} article${filtered.length !== 1 ? 's' : ''}`}
      </p>

      {/* Error state */}
      {error && (
        <div style={{
          marginTop: '40px', padding: '32px', border: '1px dashed #85a0ba',
          display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start',
        }}>
          <p style={{ fontSize: '15px', color: '#55728a', margin: 0 }}>
            Unable to reach Google News at the moment.
          </p>
          <button
            onClick={loadNews}
            style={{
              fontSize: '13px', color: 'var(--ink)',
              background: 'none', border: 'none', borderBottom: '1px solid var(--ink)', cursor: 'pointer', padding: '0 0 4px',
            }}
          >
            Try again ↺
          </button>
        </div>
      )}

      {/* Loading skeletons */}
      {loading && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '30px' }} className="path-grid">
          {Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {/* Articles grid */}
      {!loading && !error && filtered.length > 0 && (
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '30px' }}
          className="path-grid"
        >
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && filtered.length === 0 && (
        <div style={{
          marginTop: '50px', padding: '40px 32px', border: '1px dashed #85a0ba',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '15px', color: '#55728a', margin: '0 0 8px' }}>
            No articles found
            {search ? ` for "${search}"` : activeFilter !== 'all' ? ` for "${activeFilter}"` : ''}.
          </p>
          <button
            onClick={() => { setActiveFilter('all'); setSearch(''); }}
            style={{
              background: 'none', border: 'none', borderBottom: '1px solid var(--ink)',
              paddingBottom: '4px', fontSize: '13px', color: 'var(--ink)', cursor: 'pointer',
            }}
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Bottom nav */}
      <div style={{ marginTop: '60px', borderTop: '1px solid var(--line)', paddingTop: '25px' }}>
        <Link href="/news" style={{
          textDecoration: 'none', borderBottom: '1px solid var(--ink)',
          paddingBottom: '4px', fontSize: '13px', color: 'var(--ink)',
        }}>
          ← Lab news &amp; publications
        </Link>
      </div>
    </div>
  );
}
