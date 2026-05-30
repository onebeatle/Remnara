function parseMarkdown(text) {
  // Split text into segments: headings, bold, and regular text
  const segments = []
  const lines = text.split('\n')

  lines.forEach((line, index) => {
    // Check for headings (# Heading)
    const headingMatch = line.match(/^#+\s+(.+)/)
    if (headingMatch) {
      segments.push({ type: 'heading', content: headingMatch[1], key: index })
      return
    }

    // Check for bold headings (**Heading**)
    const boldHeadingMatch = line.match(/^\*\*(.+)\*\*$/)
    if (boldHeadingMatch) {
      segments.push({ type: 'boldHeading', content: boldHeadingMatch[1], key: index })
      return
    }

    // Empty line
    if (line.trim() === '') {
      segments.push({ type: 'break', key: index })
      return
    }

    // Regular paragraph line — parse inline bold
    const parts = []
    const boldPattern = /\*\*(.+?)\*\*/g
    let lastIndex = 0
    let match

    while ((match = boldPattern.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ bold: false, text: line.slice(lastIndex, match.index) })
      }
      parts.push({ bold: true, text: match[1] })
      lastIndex = boldPattern.lastIndex
    }

    if (lastIndex < line.length) {
      parts.push({ bold: false, text: line.slice(lastIndex) })
    }

    segments.push({ type: 'text', parts, key: index })
  })

  return segments
}

function LoadingDots() {
  return (
    <div className="flex items-center gap-1 py-6" aria-label="Loading">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="inline-block w-2 h-2 rounded-full"
          style={{
            backgroundColor: '#1B4D3E',
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-8px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default function SparkResult({ result, isLoading }) {
  if (isLoading) {
    return (
      <div
        className="rounded-lg p-6 mt-4"
        style={{
          backgroundColor: '#F0EDE6',
          border: '1px solid #E2DDD5',
        }}
      >
        <p
          className="mb-3"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            fontSize: '16px',
            color: '#1A1A1A',
            opacity: 0.6,
          }}
        >
          Building your curriculum...
        </p>
        <LoadingDots />
      </div>
    )
  }

  if (!result) return null

  const segments = parseMarkdown(result)

  return (
    <div
      className="rounded-lg p-6 mt-4"
      style={{
        backgroundColor: '#F0EDE6',
        border: '1px solid #E2DDD5',
      }}
    >
      {segments.map((segment) => {
        if (segment.type === 'heading') {
          return (
            <h3
              key={segment.key}
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '22px',
                fontWeight: 700,
                color: '#1B4D3E',
                marginTop: '24px',
                marginBottom: '8px',
              }}
            >
              {segment.content}
            </h3>
          )
        }

        if (segment.type === 'boldHeading') {
          return (
            <h4
              key={segment.key}
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#1B4D3E',
                marginTop: '20px',
                marginBottom: '6px',
              }}
            >
              {segment.content}
            </h4>
          )
        }

        if (segment.type === 'break') {
          return <div key={segment.key} style={{ height: '12px' }} />
        }

        if (segment.type === 'text') {
          return (
            <p
              key={segment.key}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                lineHeight: '1.75',
                color: '#1A1A1A',
                marginBottom: '4px',
              }}
            >
              {segment.parts.map((part, i) =>
                part.bold ? (
                  <strong key={i} style={{ fontWeight: 600 }}>
                    {part.text}
                  </strong>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </p>
          )
        }

        return null
      })}
    </div>
  )
}
