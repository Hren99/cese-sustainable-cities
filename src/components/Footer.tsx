import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: '1320px',
        margin: 'auto',
        padding: '45px 6% 25px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '25px',
        fontSize: '12px',
        color: 'var(--ink)',
      }}
    >
      {/* Brand */}
      <div>
        <b style={{ fontWeight: 600 }}>Sustainable Cities Laboratory</b>
        <p style={{ color: '#55728a', fontSize: '11px', margin: '6px 0 0', lineHeight: 1.6 }}>
          Part of UConn CESE, advancing air, water,
          <br />
          and soil sustainability for resilient cities.
        </p>
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0', flexWrap: 'wrap' }}>
        {[
          { href: '/research', label: 'Research ↗' },
          { href: '/faculty', label: 'Faculty ↗' },
          { href: '/labs', label: 'Laboratories ↗' },
          { href: '/news', label: 'News ↗' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{ marginLeft: '20px', textDecoration: 'none', color: 'var(--ink)' }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Fine print full-width */}
      <div
        style={{
          width: '100%',
          paddingTop: '25px',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <p style={{ lineHeight: 1.7, fontSize: '11px', color: '#55728a', margin: 0 }}>
          Center for Environmental Sciences &amp; Engineering · University of Connecticut ·{' '}
          261 Glenbrook Rd, Unit 4210, Storrs, CT 06269 ·{' '}
          <a href="mailto:cese@uconn.edu" style={{ textDecoration: 'none', borderBottom: '1px solid var(--line)' }}>
            cese@uconn.edu
          </a>
        </p>
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fresearch.vgcrc.org&count_bg=%2355728a&title_bg=%23e8eef2&icon=eye.svg&icon_color=%2355728a&title=visitors&edge_flat=true"
          alt="visitor count"
          style={{ height: '18px', opacity: 0.8 }}
        />
      </div>
    </footer>
  );
}
