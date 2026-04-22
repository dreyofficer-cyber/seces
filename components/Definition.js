const columns = [
  {
    num: '01 — INPUT',
    title: 'THE INTERROGATION',
    body: "37 structured questions about your business. Designed to expose what you're avoiding.",
  },
  {
    num: '02 — ANALYSIS',
    title: 'THE VERDICT',
    body: "We identify where your system is broken. No framing, no sugarcoating. Just the diagnosis.",
  },
  {
    num: '03 — OUTPUT',
    title: 'THE DIRECTIVE',
    body: '3–5 actions that actually matter. Ranked by leverage. Executable immediately.',
  },
]

export default function Definition() {
  return (
    <section
      id="definition"
      style={{ padding: '7rem 3rem', borderBottom: '1px solid #222' }}
    >
      <div style={{ marginBottom: '4rem' }}>
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
          What It Is
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
          NOT A TOOL.
          <br />
          A DECISION SYSTEM.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid #222',
        }}
      >
        {columns.map((col, i) => (
          <div
            key={i}
            style={{
              padding: '3rem 2rem',
              borderRight: i < columns.length - 1 ? '1px solid #222' : 'none',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#14b8a6',
                marginBottom: '1.5rem',
              }}
            >
              {col.num}
            </p>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2rem',
                letterSpacing: '0.06em',
                fontWeight: 700,
                color: '#f5f5f0',
                marginBottom: '1rem',
              }}
            >
              {col.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: 1.7 }}>{col.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
