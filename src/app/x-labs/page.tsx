export default function XLabsPage() {
  return (
    <main
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 6%',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 300,
          letterSpacing: '-1px',
          color: 'var(--ink)',
          margin: '0 0 20px',
        }}
      >
        X Labs
      </h1>
      <p
        style={{
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: '#55728a',
          margin: 0,
          maxWidth: '520px',
          lineHeight: 1.5,
        }}
      >
        Where analytical solutions meet AI — Coming Soon
      </p>
    </main>
  );
}
