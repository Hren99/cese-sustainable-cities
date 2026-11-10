import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsBySlug, getNews } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getNews().map((n) => ({ slug: n.slug }));
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div style={{ maxWidth: '1320px', margin: 'auto', padding: '55px 6% 85px' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '11px', color: '#4d6a85', marginBottom: '40px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#4d6a85' }}>Home</Link>
        <span>/</span>
        <Link href="/news" style={{ textDecoration: 'none', color: '#4d6a85' }}>News</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>{item.type === 'publication' ? 'Publication' : 'News'}</span>
      </nav>

      {/* Meta row */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        <span style={{
          fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase',
          padding: '7px 12px', border: '1px solid #a8bcd4', borderRadius: '20px', color: '#55728a',
        }}>
          {item.type === 'publication' ? 'Publication' : 'News'}
        </span>
        <time style={{ fontSize: '12px', color: '#4d6a85' }}>{formattedDate}</time>
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(28px, 3.5vw, 46px)',
        fontWeight: 400,
        letterSpacing: '-1.5px',
        lineHeight: 1.1,
        margin: '0 0 20px',
      }}>
        {item.title}
      </h1>

      {/* Authors */}
      <p style={{ fontSize: '13px', color: '#55728a', margin: '0 0 8px' }}>
        {item.authors.join(', ')}
      </p>

      {/* Journal */}
      {item.journal && (
        <p style={{ fontSize: '13px', color: '#4a7090', fontStyle: 'italic', margin: '0 0 40px' }}>
          {item.journal}
        </p>
      )}

      {!item.journal && <div style={{ marginBottom: '40px' }} />}

      {/* Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '70px', alignItems: 'start' }} className="lab-section">
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
          <p className="eyebrow" style={{ marginBottom: '14px' }}>
            {item.type === 'publication' ? 'Abstract' : 'Summary'}
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#4a7090', margin: 0 }}>{item.summary}</p>

          {item.url && (
            <div style={{ marginTop: '28px' }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--ink)',
                  paddingBottom: '4px',
                  fontSize: '13px',
                  color: 'var(--ink)',
                }}
              >
                View full publication ↗
              </a>
            </div>
          )}
        </div>

        {/* Tags */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Keywords</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {item.tags.map((tag) => (
              <span key={tag} style={{
                fontSize: '11px', padding: '7px 12px',
                border: '1px solid #a8bcd4', borderRadius: '20px', color: '#55728a',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '55px', borderTop: '1px solid var(--line)', paddingTop: '25px' }}>
        <Link href="/news" style={{
          textDecoration: 'none',
          borderBottom: '1px solid var(--ink)',
          paddingBottom: '4px',
          fontSize: '13px',
          color: 'var(--ink)',
        }}>
          ← Back to news
        </Link>
      </div>
    </div>
  );
}
