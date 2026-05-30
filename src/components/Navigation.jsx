import { NavLink } from 'react-router-dom'

const ExplorerIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={active ? '#C9A84C' : 'white'} strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill={active ? '#C9A84C' : 'white'}/>
    <line x1="12" y1="2" x2="12" y2="6" stroke={active ? '#C9A84C' : 'white'} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="18" x2="12" y2="22" stroke={active ? '#C9A84C' : 'white'} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="2" y1="12" x2="6" y2="12" stroke={active ? '#C9A84C' : 'white'} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="18" y1="12" x2="22" y2="12" stroke={active ? '#C9A84C' : 'white'} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 8L10.5 13.5L16 8L13.5 13.5L8 16L13.5 13.5L16 16" stroke={active ? '#C9A84C' : 'white'} strokeWidth="1" strokeLinejoin="round" fill="none"/>
  </svg>
)

const LibraryIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="4" height="18" rx="1" fill={active ? '#C9A84C' : 'white'}/>
    <rect x="10" y="3" width="4" height="18" rx="1" fill={active ? '#C9A84C' : 'white'} opacity="0.7"/>
    <rect x="16" y="3" width="4" height="18" rx="1" fill={active ? '#C9A84C' : 'white'} opacity="0.5"/>
  </svg>
)

const SparkIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill={active ? '#C9A84C' : 'white'} stroke={active ? '#C9A84C' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Navigation() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#1B4D3E', height: '64px' }}
    >
      <div className="flex items-stretch h-full max-w-lg mx-auto">
        <NavLink
          to="/explorer"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
              isActive ? 'text-remnara-gold' : 'text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <ExplorerIcon active={isActive} />
                {isActive && (
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: '#C9A84C' }}
                  />
                )}
              </div>
              <span
                className="text-xs font-medium tracking-wide"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#C9A84C' : 'white',
                  fontSize: '11px',
                  letterSpacing: '0.05em'
                }}
              >
                Explorer
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
              isActive ? 'text-remnara-gold' : 'text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <LibraryIcon active={isActive} />
                {isActive && (
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: '#C9A84C' }}
                  />
                )}
              </div>
              <span
                className="text-xs font-medium tracking-wide"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#C9A84C' : 'white',
                  fontSize: '11px',
                  letterSpacing: '0.05em'
                }}
              >
                Library
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/spark"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
              isActive ? 'text-remnara-gold' : 'text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <SparkIcon active={isActive} />
                {isActive && (
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: '#C9A84C' }}
                  />
                )}
              </div>
              <span
                className="text-xs font-medium tracking-wide"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#C9A84C' : 'white',
                  fontSize: '11px',
                  letterSpacing: '0.05em'
                }}
              >
                Spark
              </span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  )
}
