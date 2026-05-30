import { useState, useEffect } from 'react'
import { generateCurriculum } from '../utils/gemini'
import SparkResult from '../components/SparkResult'
import PremiumGate from '../components/PremiumGate'

const SPARK_KEY = 'remnara_spark_count'
const FREE_LIMIT = 5

export default function Spark() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sparkCount, setSparkCount] = useState(0)

  useEffect(() => {
    const stored = parseInt(localStorage.getItem(SPARK_KEY) || '0', 10)
    setSparkCount(stored)
  }, [])

  const isAtLimit = sparkCount >= FREE_LIMIT

  async function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim() || isLoading || isAtLimit) return

    setIsLoading(true)
    setError(null)
    setResult(null)

    const newCount = sparkCount + 1
    localStorage.setItem(SPARK_KEY, String(newCount))
    setSparkCount(newCount)

    try {
      const curriculum = await generateCurriculum(input.trim())
      setResult(curriculum)
    } catch (err) {
      setError(
        err.message || 'Something went wrong. Please check your API key and try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: '#FAFAF7' }}
    >
      <div
        className="px-5 pt-12"
        style={{ maxWidth: '680px', margin: '0 auto' }}
      >
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
            Paste anything. Get your curriculum.
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

        {/* Usage counter */}
        {!isAtLimit && (
          <div
            className="flex items-center gap-2 mb-6 p-3 rounded-lg"
            style={{
              backgroundColor: '#F0EDE6',
              border: '1px solid #E2DDD5',
            }}
          >
            <div className="flex gap-1">
              {Array.from({ length: FREE_LIMIT }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: i < sparkCount ? '#C1392B' : '#E2DDD5',
                  }}
                />
              ))}
            </div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#1A1A1A',
                opacity: 0.6,
              }}
            >
              {sparkCount} of {FREE_LIMIT} free sparks used
            </p>
          </div>
        )}

        {/* Form — show if not at limit */}
        {!isAtLimit ? (
          <form onSubmit={handleSubmit} className="mb-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="A place name, a quote, a caption you saw... anything cultural."
              rows={5}
              className="w-full resize-none rounded-lg p-4 focus:outline-none transition-shadow"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                lineHeight: '1.65',
                color: '#1A1A1A',
                backgroundColor: '#F0EDE6',
                border: '1.5px solid #E2DDD5',
                boxShadow: 'none',
              }}
              onFocus={(e) => {
                e.target.style.border = '1.5px solid #1B4D3E'
              }}
              onBlur={(e) => {
                e.target.style.border = '1.5px solid #E2DDD5'
              }}
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-full mt-3 py-4 rounded-lg font-semibold transition-opacity"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '18px',
                fontWeight: 600,
                backgroundColor: '#1B4D3E',
                color: 'white',
                border: 'none',
                cursor: !input.trim() || isLoading ? 'not-allowed' : 'pointer',
                opacity: !input.trim() || isLoading ? 0.5 : 1,
                letterSpacing: '0.01em',
              }}
            >
              {isLoading ? 'Generating...' : 'Generate My Curriculum'}
            </button>
          </form>
        ) : (
          <div className="mb-6">
            {/* Show input as read-only when at limit */}
            <div
              className="w-full rounded-lg p-4 mb-3"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                lineHeight: '1.65',
                color: '#1A1A1A',
                backgroundColor: '#F0EDE6',
                border: '1.5px solid #E2DDD5',
                opacity: 0.5,
              }}
            >
              <p style={{ opacity: 0.5, fontStyle: 'italic' }}>
                A place name, a quote, a caption you saw... anything cultural.
              </p>
            </div>
            <button
              disabled
              className="w-full py-4 rounded-lg"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '18px',
                fontWeight: 600,
                backgroundColor: '#1B4D3E',
                color: 'white',
                border: 'none',
                cursor: 'not-allowed',
                opacity: 0.35,
              }}
            >
              Generate My Curriculum
            </button>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div
            className="mb-4 p-4 rounded-lg"
            style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#C1392B',
                lineHeight: '1.6',
              }}
            >
              {error}
            </p>
          </div>
        )}

        {/* Result */}
        <SparkResult result={result} isLoading={isLoading} />

        {/* Premium gate */}
        {isAtLimit && <PremiumGate />}

        {/* Explanation text (when idle and not at limit) */}
        {!isAtLimit && !result && !isLoading && (
          <div className="mt-8">
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: '1.75',
                color: '#1A1A1A',
                opacity: 0.45,
                textAlign: 'center',
              }}
            >
              "A place name, a museum caption, a line you overheard — Remnara builds you a cultural curriculum from the spark of a single idea."
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
