'use client'

export default function Nav() {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.2rem 3rem',
        borderBottom: '1px solid #222',
        background: 'rgba(10,10,10,0.93)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.6rem',
          letterSpacing: '0.12em',
          color: '#14b8a6',
        }}
      >
        SECES
      </div>

      <button
        onClick={scrollToForm}
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.72rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#f5f5f0',
          border: '1px solid #f5f5f0',
          padding: '0.6rem 1.4rem',
          background: 'transparent',
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f5f5f0'
          e.currentTarget.style.color = '#0a0a0a'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = '#f5f5f0'
        }}
      >
        Start Analysis
      </button>
    </nav>
  )
}
