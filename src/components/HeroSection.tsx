import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '650px',
        position: 'relative',
        background: '#0c2850 url("/hero.png") center/cover',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(4,16,42,.88), rgba(4,16,42,.48) 48%, rgba(4,16,42,.04)), linear-gradient(0deg, rgba(4,14,38,.72), transparent 28%)',
        }}
      />

      {/* Hero copy */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '70px 6% 110px',
          maxWidth: '780px',
        }}
      >
        <p
          className="eyebrow"
          style={{ color: 'var(--green)', margin: '0 0 28px' }}
        >
          Air. Water. Soil. Life.
        </p>

        <h1 className="heading-xl">
          Better science.
          <br />
          Healthier cities.
          <br />
          <em
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--green)',
            }}
          >
            A shared future.
          </em>
        </h1>

        <p
          style={{
            lineHeight: 1.6,
            maxWidth: '450px',
            color: '#d2e4f4',
            fontSize: '16px',
            margin: '0 0 28px',
          }}
        >
          Connecting environmental research and analytical expertise to understand
          the systems that sustain our communities.
        </p>

        <Link
          href="/research"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            background: 'var(--green)',
            color: '#0d2540',
            borderRadius: '3px',
            padding: '17px 23px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 700,
          }}
        >
          Discover the research <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '6%',
          right: '6%',
          borderTop: '1px solid rgba(255,255,255,0.4)',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '11px',
          gap: '20px',
          color: 'rgba(255,255,255,0.8)',
        }}
      >
        <span>A research nexus anchored in UConn CESE</span>
        <span style={{ fontSize: '9px', letterSpacing: '1.5px' }}>
          FROM MOLECULES TO COMMUNITIES ↓
        </span>
      </div>
    </section>
  );
}
