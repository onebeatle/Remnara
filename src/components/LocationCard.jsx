import { useNavigate } from 'react-router-dom'

const ACCENT_COLORS = [
  '#1B4D3E', // green
  '#C9A84C', // gold
  '#C1392B', // red
  '#2C5F8A', // blue
]

export default function LocationCard({ location, index = 0 }) {
  const navigate = useNavigate()
  const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length]
  const displayTags = location.tags ? location.tags.slice(0, 2) : []

  return (
    <div
      className="flex cursor-pointer rounded-lg overflow-hidden transition-transform hover:scale-[1.01] active:scale-[0.99]"
      style={{
        backgroundColor: '#F0EDE6',
        border: '1px solid #E2DDD5',
        marginBottom: '12px',
      }}
      onClick={() => navigate(`/explorer/${location.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/explorer/${location.id}`)}
    >
      {/* Accent bar */}
      <div
        className="flex-shrink-0 w-1"
        style={{ backgroundColor: accentColor }}
      />

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="font-display font-semibold leading-tight"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '20px',
              color: '#1A1A1A',
              fontWeight: 600,
            }}
          >
            {location.name}
          </h3>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 mt-1"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.3"
            />
          </svg>
        </div>

        <p
          className="uppercase mb-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: accentColor,
          }}
        >
          {location.region}
        </p>

        <p
          className="mb-3 line-clamp-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#1A1A1A',
            opacity: 0.7,
          }}
        >
          {location.hook}
        </p>

        <div className="flex items-center justify-between">
          {/* Icon name */}
          <div className="flex items-center gap-2">
            <span
              className="uppercase"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: '#1A1A1A',
                opacity: 0.4,
              }}
            >
              icon
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: '#1A1A1A',
              }}
            >
              {location.icon.name}
            </span>
          </div>

          {/* Tags */}
          <div className="flex gap-1">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  backgroundColor: '#E2DDD5',
                  color: '#1A1A1A',
                  opacity: 0.8,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
