import { useParams, useNavigate } from 'react-router-dom'
import { locations } from '../data/locations'
import PoemBlock from '../components/PoemBlock'

export default function LocationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = locations.find((l) => l.id === id)

  if (!location) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center pb-20"
        style={{ backgroundColor: '#FAFAF7' }}
      >
        <p
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '24px',
            color: '#1A1A1A',
            opacity: 0.5,
          }}
        >
          Location not found
        </p>
        <button
          onClick={() => navigate('/explorer')}
          className="mt-4"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#1B4D3E',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ← Back to Explorer
        </button>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: '#FAFAF7' }}
    >
      <div
        className="px-5"
        style={{ maxWidth: '680px', margin: '0 auto' }}
      >
        {/* Back button */}
        <div className="pt-8 pb-6">
          <button
            onClick={() => navigate(-1)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#1B4D3E',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            ← Back
          </button>
        </div>

        {/* Hero heading */}
        <div className="mb-6">
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#1B4D3E',
            }}
          >
            {location.region}
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(40px, 10vw, 56px)',
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              lineHeight: '1.05',
              margin: 0,
            }}
          >
            {location.name}
          </h1>
        </div>

        {/* Hook pull quote */}
        <blockquote
          className="mb-8 pl-4"
          style={{
            borderLeft: '3px solid #C9A84C',
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            fontSize: '20px',
            lineHeight: '1.6',
            color: '#1A1A1A',
            margin: '0 0 32px 0',
            padding: '4px 0 4px 16px',
          }}
        >
          {location.hook}
        </blockquote>

        {/* The Literary Icon section */}
        <section className="mb-8">
          <h2
            className="uppercase mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#1B4D3E',
            }}
          >
            The Literary Icon
          </h2>

          <div
            className="p-5 rounded-lg mb-4"
            style={{
              backgroundColor: '#F0EDE6',
              border: '1px solid #E2DDD5',
            }}
          >
            <h3
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '26px',
                fontWeight: 600,
                color: '#1A1A1A',
                margin: '0 0 4px 0',
              }}
            >
              {location.icon.name}
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#1A1A1A',
                opacity: 0.5,
              }}
            >
              {location.icon.dates}
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                lineHeight: '1.65',
                color: '#1A1A1A',
                opacity: 0.75,
                fontStyle: 'italic',
              }}
            >
              {location.icon.connectionToPlace}
            </p>
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '1.75',
              color: '#1A1A1A',
              opacity: 0.8,
            }}
          >
            {location.iconIntro}
          </p>
        </section>

        {/* Separator */}
        <div
          className="my-8"
          style={{
            height: '1px',
            backgroundColor: '#E2DDD5',
          }}
        />

        {/* Historical Layer section */}
        <section className="mb-8">
          <h2
            className="uppercase mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#1B4D3E',
            }}
          >
            Historical Layer
          </h2>

          {/* Green left-border */}
          <div
            className="pl-5"
            style={{
              borderLeft: '4px solid #1B4D3E',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                lineHeight: '1.75',
                color: '#1A1A1A',
                opacity: 0.8,
              }}
            >
              {location.historicalLayer}
            </p>
          </div>
        </section>

        {/* Separator */}
        <div
          className="my-8"
          style={{
            height: '1px',
            backgroundColor: '#E2DDD5',
          }}
        />

        {/* Featured Work */}
        <section className="mb-8">
          <h2
            className="uppercase mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#1B4D3E',
            }}
          >
            Featured Work
          </h2>

          <PoemBlock featuredWork={location.featuredWork} />
        </section>

        {/* Literary Breakdown */}
        <section className="mb-8">
          <h2
            className="uppercase mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#1B4D3E',
            }}
          >
            In the Margin
          </h2>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#1A1A1A',
              opacity: 0.8,
            }}
          >
            {location.breakdown}
          </p>
        </section>

        {/* Separator */}
        <div
          className="my-8"
          style={{
            height: '1px',
            backgroundColor: '#E2DDD5',
          }}
        />

        {/* Further Reading */}
        {location.readingSuggestion && (
          <section className="mb-8">
            <h2
              className="uppercase mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: '#1B4D3E',
              }}
            >
              Further Reading
            </h2>

            <div
              className="p-5 rounded-lg"
              style={{
                backgroundColor: '#F0EDE6',
                border: '1px solid #E2DDD5',
              }}
            >
              <h4
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  margin: '0 0 4px 0',
                }}
              >
                {location.readingSuggestion.title}
              </h4>
              <p
                className="mb-3"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: '#1A1A1A',
                  opacity: 0.5,
                }}
              >
                {location.readingSuggestion.creator}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  lineHeight: '1.65',
                  color: '#1A1A1A',
                  opacity: 0.7,
                }}
              >
                {location.readingSuggestion.note}
              </p>
            </div>
          </section>
        )}

        {/* Tags */}
        {location.tags && location.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pb-4">
            {location.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  backgroundColor: '#F0EDE6',
                  border: '1px solid #E2DDD5',
                  color: '#1A1A1A',
                  opacity: 0.75,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
