import { locations } from '../data/locations'
import LocationCard from '../components/LocationCard'

export default function Explorer() {
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
              color: '#1B4D3E',
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
            Explorer
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
            Discover the literary layers of the places you know
          </p>
          {/* Decorative line */}
          <div
            className="mt-5"
            style={{
              width: '36px',
              height: '3px',
              backgroundColor: '#1B4D3E',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Location list */}
        <div>
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
