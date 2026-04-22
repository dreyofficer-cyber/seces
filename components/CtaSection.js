'use client'

export default function CtaSection() {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="cta"
      style={{
        background: '#14b8a6',
        padding: '7rem 3rem',
        textAlign: 'center',
        color: '#0a0a0a',
      }}
    >
      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(4rem, 9vw, 8rem)',
          lineHeight: 0.9,
          letterSpacing: '0.04em',
          fontWeight: 700,
          color: '#0a0a0a',
          marginBottom: '1.5rem',
        }}
      >
        STOP
        <br />
        GUESSING.
      </h2>

      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.9rem',
          color: '#054340',
          marginBottom: '3rem',
          letterSpacing: '0.06em',
        }}
      >
        The truth hurts. But it scales.
      </p>

      <button
        onClick={scrollToForm}
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.78rem',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          background: '#0a0a0a',
          color: '#f5f5f0',
          border: 'none',
          padding: '1.1rem 2.5rem',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Begin Interrogation
      </button>
    </section>
  )
}
