import { useNavigate } from 'react-router-dom'

const featureCards = [
  {
    label: 'Explorer',
    path: '/explorer',
    accentColor: '#1B4D3E',
    headline: 'Places & Their Poets',
    body: 'Every city has a literary layer. Find yours.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#1B4D3E" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#1B4D3E"/>
        <line x1="12" y1="2" x2="12" y2="6" stroke="#1B4D3E" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="18" x2="12" y2="22" stroke="#1B4D3E" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2" y1="12" x2="6" y2="12" stroke="#1B4D3E" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="12" x2="22" y2="12" stroke="#1B4D3E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Library',
    path: '/library',
    accentColor: '#C9A84C',
    headline: 'Browse by Theme',
    body: 'Filter by era, tag, or mood. Discover unexpected connections.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="4" height="18" rx="1" fill="#C9A84C"/>
        <rect x="10" y="3" width="4" height="18" rx="1" fill="#C9A84C" opacity="0.7"/>
        <rect x="16" y="3" width="4" height="18" rx="1" fill="#C9A84C" opacity="0.5"/>
      </svg>
    ),
  },
  {
    label: 'Spark',
    path: '/spark',
    accentColor: '#C1392B',
    headline: 'Your Curriculum',
    body: 'Coming soon — paste anything that inspired you and get a cultural curriculum built around it.',
    comingSoon: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#C1392B" stroke="#C1392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen pb-20"
      style={{ backgroundColor: '#FAFAF7' }}
    >
      {/* Hero section */}
      <div
        className="px-6 pt-16 pb-12 flex flex-col"
        style={{
          maxWidth: '480px',
          margin: '0 auto',
        }}
      >
        {/* Wordmark */}
        <div className="mb-3">
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(52px, 14vw, 72px)',
              fontWeight: 700,
              color: '#1B4D3E',
              letterSpacing: '-0.02em',
              lineHeight: '0.95',
              margin: 0,
            }}
          >
            REMNARA
          </h1>
        </div>

        {/* Strapline */}
        <p
          className="mb-6"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            fontSize: '20px',
            color: '#1A1A1A',
            opacity: 0.7,
            letterSpacing: '0.01em',
          }}
        >
          The World Is Your Curriculum
        </p>

        {/* Gold divider */}
        <div
          className="mb-8"
          style={{
            width: '48px',
            height: '3px',
            backgroundColor: '#C9A84C',
            borderRadius: '2px',
          }}
        />

        {/* Intro paragraph */}
        <p
          className="mb-12"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            lineHeight: '1.75',
            color: '#1A1A1A',
            opacity: 0.75,
          }}
        >
          Remnara turns the places you visit, the quotes you encounter, and the art that stops you in your tracks into a personalised cultural education. Every location has a literary layer. Every line of poetry has a historical root. Start anywhere.
        </p>

        {/* Feature cards */}
        <div className="flex flex-col gap-4">
          {featureCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
              style={{
                backgroundColor: '#F0EDE6',
                border: '1px solid #E2DDD5',
              }}
              onClick={() => navigate(card.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(card.path)}
            >
              {/* Accent stripe */}
              <div
                style={{
                  height: '4px',
                  backgroundColor: card.accentColor,
                }}
              />

              <div className="p-5 flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">{card.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="uppercase"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          color: card.accentColor,
                        }}
                      >
                        {card.label}
                      </span>
                      {card.comingSoon && (
                        <span
                          className="uppercase"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '11px',
                            fontWeight: 500,
                            letterSpacing: '0.08em',
                            backgroundColor: '#C9A84C',
                            color: 'white',
                            padding: '2px 7px',
                            borderRadius: '999px',
                          }}
                        >
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
                  <h2
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#1A1A1A',
                      margin: '0 0 6px 0',
                      lineHeight: '1.2',
                    }}
                  >
                    {card.headline}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#1A1A1A',
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p
          className="mt-12 text-center"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            fontSize: '14px',
            color: '#1A1A1A',
            opacity: 0.35,
          }}
        >
          Culture, located.
        </p>
      </div>
    </div>
  )
}
