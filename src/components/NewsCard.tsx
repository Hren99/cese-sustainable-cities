import Link from 'next/link';
import type { NewsItem } from '@/data/news';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div
      style={{
        borderTop: '1px solid #4d6a85',
        paddingTop: '22px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Type + date */}
      <small
        style={{
          fontSize: '10px',
          color: '#4a6a85',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
        }}
      >
        {item.type === 'publication' ? 'Publication' : 'News'} · {formattedDate}
      </small>

      {/* Title */}
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
        {item.title}
      </h3>

      {/* Authors */}
      <p style={{ fontSize: '12px', color: '#55728a', margin: '0 0 6px' }}>
        {item.authors.join(', ')}
      </p>

      {/* Journal */}
      {item.journal && (
        <p style={{ fontSize: '12px', color: '#4a7090', fontStyle: 'italic', margin: '0 0 10px' }}>
          {item.journal}
        </p>
      )}

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
        {item.summary}
      </p>

      <Link
        href={`/news/${item.slug}`}
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
        {item.type === 'publication' ? 'View publication ↗' : 'Read more ↗'}
      </Link>
    </div>
  );
}
