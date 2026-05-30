export default function PremiumGate() {
  return (
    <div
      className="rounded-xl p-8 mt-6 text-center"
      style={{
        background: 'linear-gradient(135deg, #1B4D3E 0%, #2d6b57 100%)',
        border: '2px solid #C9A84C',
      }}
    >
      {/* Gold accent line */}
      <div
        className="mx-auto mb-6 rounded-full"
        style={{
          width: '48px',
          height: '3px',
          backgroundColor: '#C9A84C',
        }}
      />

      <h3
        className="mb-4"
        style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '28px',
          fontWeight: 700,
          color: 'white',
          lineHeight: '1.2',
        }}
      >
        You've found your limit
      </h3>

      <p
        className="mb-8 mx-auto"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          lineHeight: '1.7',
          color: 'white',
          opacity: 0.85,
          maxWidth: '320px',
        }}
      >
        Remnara Premium unlocks unlimited Sparks, plus deeper dives into every location.
      </p>

      {/* Gold decorative divider */}
      <div
        className="flex items-center gap-3 mx-auto mb-8"
        style={{ maxWidth: '200px' }}
      >
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: '#C9A84C', opacity: 0.4 }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: '#C9A84C' }}
        />
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: '#C9A84C', opacity: 0.4 }}
        />
      </div>

      <button
        className="w-full py-4 rounded-lg font-semibold transition-opacity hover:opacity-90 active:opacity-80"
        style={{
          backgroundColor: '#C9A84C',
          fontFamily: '"Playfair Display", serif',
          fontSize: '18px',
          fontWeight: 600,
          color: '#1A1A1A',
          letterSpacing: '0.01em',
          maxWidth: '320px',
        }}
        onClick={() => {
          // Placeholder — no actual function for v1
        }}
      >
        Join the Waitlist
      </button>

      <p
        className="mt-4"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: 'white',
          opacity: 0.5,
          letterSpacing: '0.05em',
        }}
      >
        COMING SOON
      </p>
    </div>
  )
}
