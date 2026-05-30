import { useState } from 'react'

export default function Spark() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: Connect to email backend (Supabase or similar) when ready
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="px-5 pt-12" style={{ maxWidth: '680px', margin: '0 auto' }}>

        {/* Page header */}
        <div className="mb-8">
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#C1392B',
            }}
          >
            Remnara
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(36px, 10vw, 48px)',
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              margin: '0 0 12px 0',
            }}
          >
            The Spark
          </h1>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#1A1A1A',
              opacity: 0.6,
              margin: 0,
            }}
          >
            Something powerful is coming.
          </p>
          <div
            className="mt-5"
            style={{
              width: '36px',
              height: '3px',
              backgroundColor: '#C1392B',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Main content card */}
        <div
          className="rounded-xl p-7 mb-6 text-center"
          style={{
            backgroundColor: '#F0EDE6',
            border: '1px solid #E2DDD5',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '20px', lineHeight: 1 }}>⚡</div>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '28px',
              fontWeight: 700,
              color: '#1A1A1A',
              margin: '0 0 16px 0',
              letterSpacing: '-0.01em',
            }}
          >
            Coming Soon
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#4A4A4A',
              margin: 0,
            }}
          >
            Paste anything that caught your attention — a place name, a caption,
            a line you overheard — and Remnara will build you a cultural
            curriculum around it.
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#4A4A4A',
              margin: '16px 0 0 0',
            }}
          >
            The Spark is currently in development.
            <br />
            Check back soon.
          </p>
        </div>

        {/* Waitlist section */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full rounded-lg p-4 mb-3 focus:outline-none"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#1A1A1A',
              backgroundColor: '#F0EDE6',
              border: '1.5px solid #E2DDD5',
            }}
            onFocus={(e) => { e.target.style.border = '1.5px solid #1B4D3E' }}
            onBlur={(e) => { e.target.style.border = '1.5px solid #E2DDD5' }}
          />
          <button
            type="submit"
            disabled={!email.trim()}
            className="w-full py-4 rounded-lg"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '18px',
              fontWeight: 600,
              backgroundColor: '#1B4D3E',
              color: 'white',
              border: 'none',
              cursor: !email.trim() ? 'not-allowed' : 'pointer',
              opacity: !email.trim() ? 0.6 : 1,
            }}
          >
            Notify Me
          </button>

          {submitted && (
            <p
              className="mt-3 text-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#1B4D3E',
                fontWeight: 500,
              }}
            >
              You're on the list.
            </p>
          )}
        </form>

      </div>
    </div>
  )
}
