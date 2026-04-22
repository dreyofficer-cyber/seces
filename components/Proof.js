const blocks = [
  {
    label: 'The Assumption',
    text: '"I need more marketing. Traffic is the problem."',
    accent: false,
  },
  {
    label: 'The Finding',
    text: 'The problem was conversion. 80% of visitors dropped at checkout. More traffic meant more wasted spend.',
    accent: false,
  },
  {
    label: 'The Result',
    text: 'Revenue increased without more traffic. Zero new ad spend. Same audience, different lever.',
    accent: true,
  },
]

export default function Proof() {
  return (
    <section
      id="proof"
      style={{ padding: '7rem 3rem', borderBottom: '1px solid #222' }}
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
        Reality Check
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
        IT FINDS
        <br />
        WHAT YOU MISS.
      </h2>

      <div
        style={{
          marginTop: '3rem',
          border: '1px solid #222',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        {blocks.map((block, i) => (
          <div
            key={i}
            style={{
              padding: '3rem 2rem',
              borderRight: i < blocks.length - 1 ? '1px solid #222' : 'none',
              background: block.accent ? '#0f2926' : 'transparent',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#888',
                marginBottom: '1rem',
              }}
            >
              {block.label}
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                lineHeight: 1.5,
                color: block.accent ? '#14b8a6' : '#f5f5f0',
              }}
            >
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
