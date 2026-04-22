const items = [
  { num: '01', text: "You're busy, but nothing grows." },
  { num: '02', text: "You don't know what actually moves revenue." },
  { num: '03', text: 'You optimize the wrong things.' },
  { num: '04', text: "You're working harder for the same result." },
]

export default function Reality() {
  return (
    <section
      id="reality"
      style={{
        background: '#f5f5f0',
        color: '#0a0a0a',
        padding: '7rem 3rem',
        borderBottom: '1px solid #ccc',
      }}
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
        The Problem
      </p>

      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
          lineHeight: 0.95,
          letterSpacing: '0.04em',
          fontWeight: 700,
          marginBottom: '3rem',
          color: '#0a0a0a',
        }}
      >
        THE BUSINESS
        <br />
        IS BROKEN.
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          border: '1px solid #111',
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '2.5rem 2rem',
              borderRight: i < items.length - 1 ? '1px solid #111' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '4rem',
                color: '#ddd',
                lineHeight: 1,
                fontWeight: 700,
                marginBottom: '0.8rem',
              }}
            >
              {item.num}
            </div>
            <p style={{ fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.5, color: '#111' }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
