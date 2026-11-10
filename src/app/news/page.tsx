'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { news as rawNews } from '@/data/news';
import type { NewsArticle } from '@/lib/googleNews';

// ── Types ─────────────────────────────────────────────────────────────────────

type FeedTab = 'all' | 'publication' | 'news' | 'media';

const TABS: { value: FeedTab; label: string }[] = [
  { value: 'all',         label: 'All' },
  { value: 'publication', label: 'Publications' },
  { value: 'news',        label: 'Lab News' },
  { value: 'media',       label: 'In the Media' },
];

// Sort curated entries newest-first
const sortedCurated = [...rawNews].sort((a, b) => b.date.localeCompare(a.date));

// ── Skeleton ──────────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ width: '110px', height: '10px', background: '#dde8f4', borderRadius: '4px' }} />
      <div style={{ width: '88%', height: '15px', background: '#dde8f4', borderRadius: '4px' }} />
      <div style={{ width: '70%', height: '15px', background: '#dde8f4', borderRadius: '4px' }} />
      <div style={{ width: '55%', height: '11px', background: '#dde8f4', borderRadius: '4px' }} />
    </div>
  );
}

// ── Curated card (publication / lab news) ─────────────────────────────────────

function CuratedCard({ item }: { item: typeof rawNews[number] }) {
  const date = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });

  const badgeColor =
    item.type === 'publication'
      ? { bg: '#e8f0fb', text: '#3a5fa0', border: '#b8cef0' }
      : { bg: '#dde8f4', text: '#2a4a6a', border: '#a8bcd4' };

  return (
    <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px', display: 'flex', flexDirection: 'column' }}>
      {/* Badge + date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '9px', letterSpacing: '1.2px', textTransform: 'uppercase', fontWeight: 700,
          padding: '3px 9px', borderRadius: '20px',
          background: badgeColor.bg, color: badgeColor.text, border: `1px solid ${badgeColor.border}`,
        }}>
          {item.type === 'publication' ? 'Publication' : 'Lab News'}
        </span>
        <span style={{ fontSize: '11px', color: '#4d6a85', marginLeft: 'auto' }}>{date}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '19px', fontWeight: 400, letterSpacing: '-0.4px',
        margin: '0 0 8px', lineHeight: 1.25, color: 'var(--ink)',
      }}>
        {item.title}
      </h3>

      {/* Authors */}
      <p style={{ fontSize: '12px', color: '#55728a', margin: '0 0 4px' }}>
        {item.authors.join(', ')}
      </p>

      {/* Journal */}
      {item.journal && (
        <p style={{ fontSize: '12px', color: '#4a7090', fontStyle: 'italic', margin: '0 0 10px' }}>
          {item.journal}
        </p>
      )}

      {/* Summary */}
      <p style={{
        fontSize: '13px', lineHeight: 1.7, color: '#55728a', margin: '8px 0 16px',
        display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {item.summary}
      </p>

      <Link
        href={`/news/${item.slug}`}
        style={{
          fontSize: '12px', textDecoration: 'none', color: 'var(--ink)',
          borderBottom: '1px solid var(--ink)', paddingBottom: '3px', alignSelf: 'flex-start', marginTop: 'auto',
        }}
      >
        {item.type === 'publication' ? 'View publication ↗' : 'Read more →'}
      </Link>
    </div>
  );
}

// ── External media card ───────────────────────────────────────────────────────

function cleanSource(source: string): string {
  if (!source) return '';
  if (source.startsWith('http')) {
    try { return new URL(source).hostname.replace(/^www\./, ''); } catch { /* fall through */ }
  }
  return source;
}

function MediaCard({ article: a }: { article: NewsArticle }) {
  const date = a.isoDate
    ? new Date(a.isoDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : a.pubDate;
  const source = cleanSource(a.source);

  return (
    <div style={{ borderTop: '1px solid var(--line)', paddingTop: '22px', display: 'flex', flexDirection: 'column' }}>
      {/* Badge + source + date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '9px', letterSpacing: '1.2px', textTransform: 'uppercase', fontWeight: 700,
          padding: '3px 9px', borderRadius: '20px',
          background: '#f0ede4', color: '#6b5428', border: '1px solid #d9ccb0',
        }}>
          {a.matchedName ?? 'CESE'}
        </span>
        {source && (
          <span style={{ fontSize: '11px', color: '#4d6a85', fontWeight: 500 }}>{source}</span>
        )}
        <span style={{ fontSize: '11px', color: '#4d6a85', marginLeft: 'auto' }}>{date}</span>
      </div>

      {/* Title */}
      <a
        href={a.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none', color: 'var(--ink)',
          fontSize: '19px', fontWeight: 400, letterSpacing: '-0.4px',
          lineHeight: 1.25, display: 'block', margin: '0 0 10px',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#1e5495')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ink)')}
      >
        {a.title}
      </a>

      {/* Snippet */}
      {a.description && (
        <p style={{
          fontSize: '13px', lineHeight: 1.65, color: '#55728a', margin: '0 0 16px',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
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
          borderBottom: '1px solid var(--ink)', paddingBottom: '3px', alignSelf: 'flex-start', marginTop: 'auto',
        }}
      >
        Read the full article ↗
      </a>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<FeedTab>('all');
  const [mediaArticles, setMediaArticles] = useState<NewsArticle[]>([]);
  const [mediaLoading, setMediaLoading] = useState(true);
  const [mediaError, setMediaError] = useState(false);

  const loadMedia = useCallback(async () => {
    setMediaLoading(true);
    setMediaError(false);
    try {
      const res = await fetch('/api/media');
      if (!res.ok) throw new Error('failed');
      const data = await res.json();
      setMediaArticles(data.articles ?? []);
    } catch {
      setMediaError(true);
    } finally {
      setMediaLoading(false);
    }
  }, []);

  useEffect(() => { loadMedia(); }, [loadMedia]);

  // ── Counts for tab labels ──
  const pubCount    = sortedCurated.filter((i) => i.type === 'publication').length;
  const newsCount   = sortedCurated.filter((i) => i.type === 'news').length;
  const mediaCount  = mediaArticles.length;
  const totalCount  = sortedCurated.length + mediaCount;

  // ── Filtered views ──
  const showCurated = activeTab === 'all' || activeTab === 'publication' || activeTab === 'news';
  const showMedia   = activeTab === 'all' || activeTab === 'media';

  const curatedItems = showCurated
    ? (activeTab === 'all' ? sortedCurated : sortedCurated.filter((i) => i.type === activeTab))
    : [];

  const mediaItems = showMedia ? mediaArticles : [];

  const isLoading = activeTab !== 'publication' && activeTab !== 'news' && mediaLoading;

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '75px 6% 85px' }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: '10px' }}>
        <p className="eyebrow">Latest from the lab</p>
        <h1 className="heading-lg">News &amp; publications.</h1>
        <p style={{ fontSize: '14px', color: '#55728a', margin: '10px 0 0', maxWidth: '600px', lineHeight: 1.7 }}>
          Research publications, lab announcements, and news coverage mentioning CESE faculty
          across media outlets and academic journals.
        </p>
      </div>

      {/* ── Stats bar ── */}
      <div style={{
        display: 'flex', gap: '36px', padding: '20px 0',
        borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
        marginTop: '30px', marginBottom: '32px', flexWrap: 'wrap',
      }}>
        {[
          { value: mediaLoading ? '…' : totalCount.toString(), label: 'total items' },
          { value: pubCount.toString(),   label: 'publications' },
          { value: newsCount.toString(),  label: 'lab news items' },
          { value: mediaLoading ? '…' : mediaCount.toString(), label: 'media mentions' },
        ].map((s) => (
          <div key={s.label}>
            <p style={{ fontSize: '26px', fontWeight: 400, margin: 0, letterSpacing: '-1px' }}>{s.value}</p>
            <p style={{ fontSize: '11px', color: '#4d6a85', margin: '2px 0 0' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Filter tabs ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '40px' }}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              style={{
                padding: '10px 15px',
                border: `1px solid ${isActive ? 'var(--ink)' : '#a8bcd4'}`,
                background: isActive ? 'var(--ink)' : 'transparent',
                borderRadius: '30px',
                color: isActive ? 'white' : 'var(--ink)',
                fontSize: '12px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.12s, border-color 0.12s, color 0.12s',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Curated section ── */}
      {curatedItems.length > 0 && (
        <>
          {activeTab === 'all' && (
            <p style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4d6a85', margin: '0 0 28px', fontWeight: 700 }}>
              Publications &amp; Lab News
            </p>
          )}
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: activeTab === 'all' ? '56px' : '0' }}
            className="path-grid"
          >
            {curatedItems.map((item) => (
              <CuratedCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      {/* ── Media section ── */}
      {showMedia && (
        <>
          {activeTab === 'all' && (
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '40px', marginBottom: '28px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4d6a85', margin: 0, fontWeight: 700 }}>
                In the Media
              </p>
            </div>
          )}

          {/* Loading skeletons */}
          {isLoading && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="path-grid">
              {Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          )}

          {/* Error */}
          {!isLoading && mediaError && (
            <div style={{ padding: '32px', border: '1px dashed #85a0ba', display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
              <p style={{ fontSize: '14px', color: '#55728a', margin: 0 }}>Unable to reach Google News at the moment.</p>
              <button
                onClick={loadMedia}
                style={{ fontSize: '13px', color: 'var(--ink)', background: 'none', border: 'none', borderBottom: '1px solid var(--ink)', cursor: 'pointer', padding: '0 0 4px' }}
              >
                Try again ↺
              </button>
            </div>
          )}

          {/* Articles */}
          {!isLoading && !mediaError && mediaItems.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="path-grid">
              {mediaItems.map((a) => <MediaCard key={a.id} article={a} />)}
            </div>
          )}

          {!isLoading && !mediaError && mediaItems.length === 0 && activeTab === 'media' && (
            <p style={{ color: '#55728a', padding: '48px 0' }}>No media articles found right now.</p>
          )}
        </>
      )}

      {/* ── Empty curated state ── */}
      {curatedItems.length === 0 && !showMedia && (
        <p style={{ color: '#55728a', textAlign: 'center', padding: '64px 0' }}>No items found.</p>
      )}

      {/* ── Bottom nav ── */}
      <div style={{ marginTop: '60px', borderTop: '1px solid var(--line)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <Link href="/media" style={{ fontSize: '13px', color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)', paddingBottom: '3px' }}>
          External media coverage →
        </Link>
        <Link href="/find-an-expert" style={{ fontSize: '13px', color: '#55728a', textDecoration: 'none' }}>
          Find a faculty expert →
        </Link>
      </div>
    </div>
  );
}
