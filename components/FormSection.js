'use client'

import { useState, useRef, useEffect } from 'react'

const QUESTIONS = [
  { q: 'What is the primary way your business currently generates revenue?' },
  { q: 'Who is your single most valuable customer segment — and why?' },
  { q: 'Where does the majority of your time go each week?' },
  { q: 'What is the biggest bottleneck preventing growth right now?' },
  { q: 'If revenue doubled tomorrow, what would break first?' },
  { q: 'What have you already tried that did not work?' },
  { q: 'Where do you think you are losing the most money right now?' },
]

export default function FormSection() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [inputVal, setInputVal] = useState('')
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  const progress = Math.max(((current) / QUESTIONS.length) * 100, 2)

  useEffect(() => {
    if (!done) inputRef.current?.focus()
  }, [current, done])

  const handleContinue = async () => {
    if (!inputVal.trim()) return

    const newAnswers = [...answers, { question: QUESTIONS[current].q, answer: inputVal.trim() }]
    setAnswers(newAnswers)
    setInputVal('')

    if (current + 1 >= QUESTIONS.length) {
      setSubmitting(true)
      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: newAnswers }),
        })
        if (!res.ok) throw new Error('Submission failed')
        setDone(true)
      } catch (err) {
        setError('Something went wrong. Please try again.')
      } finally {
        setSubmitting(false)
      }
    } else {
      setCurrent((c) => c + 1)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleContinue()
    }
  }

  return (
    <section
      id="form-section"
      style={{
        padding: '5rem 3rem',
        maxWidth: '760px',
        margin: '0 auto',
        borderBottom: '1px solid #222',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#14b8a6',
            marginBottom: '0.5rem',
          }}
        >
          Analysis
        </p>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '2.2rem',
            fontWeight: 700,
            color: '#f5f5f0',
            lineHeight: 1,
          }}
        >
          {done ? 'ANALYSIS COMPLETE.' : 'WHERE DO YOU WANT TO START?'}
        </h2>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '100%',
          background: '#222',
          height: '2px',
          marginBottom: '2.5rem',
        }}
      >
        <div
          style={{
            height: '2px',
            background: '#14b8a6',
            width: `${done ? 100 : progress}%`,
            transition: 'width 0.4s ease',
          }}
        />
      </div>

      {/* Form content */}
      {done ? (
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.82rem',
            color: '#14b8a6',
            lineHeight: 1.9,
            padding: '2rem 0',
            borderTop: '1px solid #222',
          }}
        >
          Your responses are being processed.
          <br />
          Results will be delivered shortly.
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.82rem',
              color: '#888',
              marginBottom: '0.5rem',
              lineHeight: 1.8,
            }}
          >
            {QUESTIONS[current].q}
          </p>

          <textarea
            ref={inputRef}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Your answer..."
            rows={3}
            style={{
              background: '#111',
              border: '1px solid #222',
              color: '#f5f5f0',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              padding: '1rem 1.2rem',
              width: '100%',
              outline: 'none',
              resize: 'vertical',
              lineHeight: 1.6,
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#14b8a6')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#222')}
          />

          {error && (
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.72rem',
                color: '#e55',
              }}
            >
              {error}
            </p>
          )}

          <button
            onClick={handleContinue}
            disabled={submitting || !inputVal.trim()}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: submitting ? '#0d8a7a' : '#14b8a6',
              color: '#0a0a0a',
              border: 'none',
              padding: '1rem 2.2rem',
              width: '100%',
              marginTop: '0.5rem',
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: !inputVal.trim() ? 0.4 : 1,
              transition: 'opacity 0.2s, background 0.2s',
            }}
          >
            {submitting ? 'Processing...' : 'Continue →'}
          </button>

          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              color: '#444',
              letterSpacing: '0.06em',
            }}
          >
            Press Enter to continue
          </p>
        </div>
      )}
    </section>
  )
}
