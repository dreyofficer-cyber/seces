'use client'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '1px solid #222',
        paddingTop: '5rem',
      }}
    >
      {/* Text block */}
      <div
        style={{
          padding: '5rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: '1px solid #222',
        }}
      >
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
            lineHeight: 0.92,
            letterSpacing: '0.04em',
            color: '#f5f5f0',
            fontWeight: 700,
            marginBottom: '2rem',
          }}
        >
          YOU ARE
          <br />
          <span style={{ color: '#14b8a6' }}>ACCELERATING</span>
          <br />
          MISTAKES.
        </h1>

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '1.05rem',
            fontWeight: 500,
            color: '#f5f5f0',
            lineHeight: 1.5,
            marginBottom: '1rem',
            maxWidth: '480px',
          }}
        >
          SECES shows you exactly where you're losing money — and what to fix.
        </p>

        <p
          style={{
            fontSize: '0.85rem',
            color: '#888',
            fontStyle: 'italic',
            marginBottom: '2.5rem',
            maxWidth: '420px',
            lineHeight: 1.6,
          }}
        >
          "Don't use AI as a project manager. Use it as the most efficient shovel."
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
          <button
            onClick={scrollToForm}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: '#14b8a6',
              color: '#0a0a0a',
              border: 'none',
              padding: '1rem 2.2rem',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Start Analysis
          </button>
        </div>
      </div>

      {/* Abstract visual */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem',
          overflow: 'hidden',
        }}
      >
        <div style={{ width: '100%', maxWidth: '380px', aspectRatio: '1' }}>
          <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Grid lines */}
            <line x1="0" y1="76" x2="380" y2="76" stroke="#1e1e1e" strokeWidth="1" />
            <line x1="0" y1="152" x2="380" y2="152" stroke="#1e1e1e" strokeWidth="1" />
            <line x1="0" y1="228" x2="380" y2="228" stroke="#1e1e1e" strokeWidth="1" />
            <line x1="0" y1="304" x2="380" y2="304" stroke="#1e1e1e" strokeWidth="1" />
            <line x1="76" y1="0" x2="76" y2="380" stroke="#1e1e1e" strokeWidth="1" />
            <line x1="152" y1="0" x2="152" y2="380" stroke="#1e1e1e" strokeWidth="1" />
            <line x1="228" y1="0" x2="228" y2="380" stroke="#1e1e1e" strokeWidth="1" />
            <line x1="304" y1="0" x2="304" y2="380" stroke="#1e1e1e" strokeWidth="1" />
            {/* Teal accent blocks */}
            <rect x="76" y="76" width="76" height="76" fill="#14b8a6" opacity="0.9" />
            <rect x="228" y="228" width="76" height="76" fill="#14b8a6" opacity="0.9" />
            <rect x="152" y="76" width="76" height="76" fill="#14b8a6" opacity="0.25" />
            <rect x="76" y="228" width="76" height="76" fill="#14b8a6" opacity="0.12" />
            {/* White blocks */}
            <rect x="228" y="76" width="76" height="76" fill="#f5f5f0" opacity="0.07" />
            <rect x="152" y="228" width="76" height="76" fill="#f5f5f0" opacity="0.04" />
            {/* Corner accent — 37 inputs */}
            <rect x="304" y="0" width="76" height="76" fill="#111" stroke="#14b8a6" strokeWidth="1" />
            <text x="342" y="44" fontFamily="Bebas Neue, sans-serif" fontSize="22" fill="#14b8a6" textAnchor="middle" letterSpacing="2">37</text>
            <text x="342" y="62" fontFamily="DM Mono, monospace" fontSize="8" fill="#14b8a6" textAnchor="middle" letterSpacing="1">INPUTS</text>
            {/* Bottom left accent */}
            <rect x="0" y="304" width="76" height="76" fill="#111" stroke="#333" strokeWidth="1" />
            <text x="38" y="348" fontFamily="DM Mono, monospace" fontSize="8" fill="#555" textAnchor="middle" letterSpacing="1">SYSTEM</text>
            {/* Centre label */}
            <rect x="152" y="152" width="76" height="76" fill="#0a0a0a" stroke="#14b8a6" strokeWidth="1" />
            <text x="190" y="194" fontFamily="Bebas Neue, sans-serif" fontSize="16" fill="#14b8a6" textAnchor="middle" letterSpacing="3">SECES</text>
            {/* Dot markers */}
            <circle cx="76" cy="76" r="3" fill="#14b8a6" />
            <circle cx="228" cy="228" r="3" fill="#14b8a6" />
            <circle cx="304" cy="152" r="3" fill="#333" />
            <circle cx="152" cy="304" r="3" fill="#333" />
          </svg>
        </div>
      </div>
    </section>
  )
}
