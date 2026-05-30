export default function PoemBlock({ featuredWork }) {
  if (!featuredWork) return null

  const { title, author, year, copyrightStatus, text } = featuredWork
  const isInCopyright = copyrightStatus === 'in-copyright'

  return (
    <div
      className="my-6 pl-5 py-4"
      style={{
        borderLeft: '4px solid #C9A84C',
        backgroundColor: '#F0EDE6',
        borderRadius: '0 8px 8px 0',
      }}
    >
      {/* Poem header */}
      <div className="mb-4">
        <h3
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '20px',
            fontWeight: 600,
            color: '#1A1A1A',
            marginBottom: '4px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#1A1A1A',
            opacity: 0.6,
          }}
        >
          {author} — {year}
        </p>
      </div>

      {/* Poem text */}
      <div
        style={{
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#1A1A1A',
          whiteSpace: 'pre-line',
        }}
      >
        {text}
      </div>

      {/* Copyright notice */}
      {isInCopyright && (
        <p
          className="mt-4 pt-3"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: '#1A1A1A',
            opacity: 0.45,
            borderTop: '1px solid #E2DDD5',
            fontStyle: 'italic',
          }}
        >
          Extract used for educational purposes
        </p>
      )}
    </div>
  )
}
