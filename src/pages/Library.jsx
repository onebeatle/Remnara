import { useState, useMemo } from 'react'
import { locations } from '../data/locations'
import LocationCard from '../components/LocationCard'

const ERA_FILTERS = [
  { label: 'Victorian', tags: ['victorian'] },
  { label: 'Romantic', tags: ['romantic'] },
  { label: 'Modern', tags: ['modern', 'spoken-word', 'oral-tradition'] },
  { label: '18th Century', tags: ['18th-century', 'nonconformist'] },
]

function getAllTags(locations) {
  const tagSet = new Set()
  locations.forEach((loc) => {
    loc.tags?.forEach((tag) => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}

export default function Library() {
  const [selectedTag, setSelectedTag] = useState(null)
  const [selectedEra, setSelectedEra] = useState(null)

  const allTags = useMemo(() => getAllTags(locations), [])

  const filteredLocations = useMemo(() => {
    if (!selectedTag && !selectedEra) return locations

    if (selectedEra) {
      const eraObj = ERA_FILTERS.find((e) => e.label === selectedEra)
      if (!eraObj) return locations
      return locations.filter((loc) =>
        loc.tags?.some((tag) => eraObj.tags.includes(tag))
      )
    }

    if (selectedTag) {
      return locations.filter((loc) => loc.tags?.includes(selectedTag))
    }

    return locations
  }, [selectedTag, selectedEra])

  function handleTagClick(tag) {
    setSelectedEra(null)
    setSelectedTag((prev) => (prev === tag ? null : tag))
  }

  function handleEraClick(era) {
    setSelectedTag(null)
    setSelectedEra((prev) => (prev === era ? null : era))
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
        <div className="mb-6">
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#C9A84C',
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
            Library
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
            Browse all entries by theme, era, or tag
          </p>
          <div
            className="mt-5"
            style={{
              width: '36px',
              height: '3px',
              backgroundColor: '#C9A84C',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Era quick-filters */}
        <div className="mb-4">
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#1A1A1A',
              opacity: 0.4,
            }}
          >
            Browse by era
          </p>
          <div className="flex gap-2 flex-wrap">
            {ERA_FILTERS.map((era) => {
              const isActive = selectedEra === era.label
              return (
                <button
                  key={era.label}
                  onClick={() => handleEraClick(era.label)}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.03em',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: isActive ? '1.5px solid #C9A84C' : '1.5px solid #E2DDD5',
                    backgroundColor: isActive ? '#C9A84C' : 'transparent',
                    color: isActive ? '#1A1A1A' : '#1A1A1A',
                    cursor: 'pointer',
                    opacity: isActive ? 1 : 0.7,
                    transition: 'all 0.15s ease',
                  }}
                >
                  {era.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tag chips (horizontally scrollable) */}
        <div className="mb-6">
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#1A1A1A',
              opacity: 0.4,
            }}
          >
            Filter by tag
          </p>
          <div
            className="flex gap-2 pb-2 overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allTags.map((tag) => {
              const isActive = selectedTag === tag
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="flex-shrink-0"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: isActive ? '1.5px solid #1B4D3E' : '1.5px solid #E2DDD5',
                    backgroundColor: isActive ? '#1B4D3E' : '#F0EDE6',
                    color: isActive ? 'white' : '#1A1A1A',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results count */}
        {(selectedTag || selectedEra) && (
          <div className="mb-4 flex items-center justify-between">
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#1A1A1A',
                opacity: 0.5,
              }}
            >
              {filteredLocations.length} {filteredLocations.length === 1 ? 'entry' : 'entries'} found
            </p>
            <button
              onClick={() => { setSelectedTag(null); setSelectedEra(null) }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#1B4D3E',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Location list */}
        <div>
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => (
              <LocationCard
                key={location.id}
                location={location}
                index={locations.indexOf(location)}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic',
                  fontSize: '18px',
                  color: '#1A1A1A',
                  opacity: 0.4,
                }}
              >
                No entries match this filter
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
