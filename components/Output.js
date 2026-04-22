const cards = [
  {
    label: 'Output 01',
    title: 'Executive Snapshot',
    desc: 'One-page business state summary. Where you stand. What it costs you.',
  },
  {
    label: 'Output 02',
    title: 'Must-Do Actions',
    desc: 'Ranked by leverage. Not inspiration. Concrete next steps you can action today.',
  },
  {
    label: 'Output 03',
    title: 'Final Decision',
    desc: 'The single most important thing to focus on. Eliminates noise. Forces clarity.',
  },
]

function MockLines() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ height: '2px', background: '#222', width: '90%' }} />
      <div style={{ height: '2px', background: '#222', width: '75%' }} />
      <div style={{ height: '2px', background: '#222', width: '60%' }} />
      <div style={{ height: '2px', background: '#14b8a6', width: '40%', marginTop: '0.3rem' }} />
    </div>
  )
}

export default function Output() {
  return (
    <section
      id="output"
      style={{ background: '#111', padding: '7rem 3rem', borderBottom: '1px solid #222' }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.68rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#14b8a6',
          marginBottom: '1.2rem',
        }}
      >
        Deliverables
      </p>

      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
          lineHeight: 0.95,
          letterSpacing: '0.04em',
          fontWeight: 700,
          color: '#f5f5f0',
        }}
      >
        WHAT YOU GET
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: '#222',
          marginTop: '3rem',
        }}
      >
        {cards.map((card, i) => (
          <div key={i} style={{ background: '#0a0a0a', padding: '2.5rem 2rem' }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#14b8a6',
                marginBottom: '1.2rem',
              }}
            >
              {card.label}
            </p>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.6rem',
                letterSpacing: '0.06em',
                fontWeight: 700,
                color: '#f5f5f0',
                marginBottom: '1rem',
              }}
            >
              {card.title}
            </h3>
            <MockLines />
            <p
              style={{
                marginTop: '1.5rem',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.72rem',
                color: '#555',
                lineHeight: 1.6,
              }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
