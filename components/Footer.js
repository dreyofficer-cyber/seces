export default function Footer() {
  return (
    <footer
      style={{
        padding: '2rem 3rem',
        borderTop: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.2rem',
          letterSpacing: '0.12em',
          color: '#14b8a6',
        }}
      >
        SECES
      </div>
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          color: '#888',
          letterSpacing: '0.08em',
        }}
      >
        © 2025 SECES — Decision Systems
      </p>
    </footer>
  )
}
