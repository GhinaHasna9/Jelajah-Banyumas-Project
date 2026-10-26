import { useSearchParams } from 'react-router-dom'
import DestinationCard from './DestinationCard.jsx'
import SectionHeading from './SectionHeading.jsx'

const filters = [
  { id: 'semua', label: 'Semua' },
  { id: 'wisata', label: 'Wisata' },
  { id: 'kuliner', label: 'Kuliner' },
]

const catalogSections = [
  {
    id: 'wisata-alam',
    title: 'Wisata Alam',
    description: 'Air terjun, kawasan alam, dan sumber air di Banyumas.',
    type: 'wisata',
    categories: ['Alam', 'Air terjun', 'Pemandian alam'],
  },
  {
    id: 'wisata-rekreasi',
    title: 'Wisata Keluarga dan Rekreasi',
    description: 'Pilihan taman dan tempat rekreasi untuk berbagai suasana.',
    type: 'wisata',
    categories: ['Rekreasi', 'Rekreasi keluarga', 'Taman'],
  },
  {
    id: 'wisata-budaya',
    title: 'Wisata Budaya dan Sejarah',
    description: 'Tempat untuk mengenal cerita, budaya, dan sejarah Banyumas.',
    type: 'wisata',
    categories: ['Budaya', 'Sejarah', 'Desa wisata'],
  },
  {
    id: 'kuliner',
    title: 'Kuliner Khas Banyumas',
    description: 'Kenali sajian dan camilan khas dari berbagai wilayah Banyumas.',
    type: 'kuliner',
  },
]

function DestinationList({ items }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedFilter = searchParams.get('kategori')
  const activeFilter = filters.some((filter) => filter.id === requestedFilter)
    ? requestedFilter
    : 'semua'
  const filteredItems =
    activeFilter === 'semua'
      ? items
      : items.filter((item) => item.type === activeFilter)

  function selectFilter(filterId) {
    const nextParams = new URLSearchParams(searchParams)
    if (filterId === 'semua') {
      nextParams.delete('kategori')
    } else {
      nextParams.set('kategori', filterId)
    }
    setSearchParams(nextParams)
  }

  const visibleSections = catalogSections
    .filter(
      (section) => activeFilter === 'semua' || section.type === activeFilter,
    )
    .map((section) => ({
      ...section,
      items:
        section.type === 'kuliner'
          ? filteredItems.filter((item) => item.type === 'kuliner')
          : filteredItems.filter(
              (item) =>
                item.type === 'wisata' && section.categories.includes(item.category),
            ),
    }))
    .filter((section) => section.items.length > 0)

  return (
    <section className="destinations-section" id="destinasi">
      <div className="page-container">
        <div className="destinations-heading-row">
          <SectionHeading
            eyebrow="JELAJAHI BANYUMAS"
            title="Destinasi pilihan"
            description="Temukan wisata dan kuliner khas untuk melengkapi perjalananmu."
          />
          <span className="destination-count">
            {filteredItems.length.toString().padStart(2, '0')} ITEM
          </span>
        </div>

        <div className="catalog-filters" aria-label="Filter kategori">
          {filters.map((filter) => (
            <button
              className={`catalog-filter${activeFilter === filter.id ? ' is-active' : ''}`}
              type="button"
              key={filter.id}
              onClick={() => selectFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {visibleSections.length > 0 ? (
          <div className="catalog-sections">
            {visibleSections.map((section) => (
              <section className="catalog-group" key={section.id}>
                <SectionHeading
                  eyebrow={
                    section.type === 'kuliner'
                      ? 'RASA KHAS BANYUMAS'
                      : 'JELAJAHI BANYUMAS'
                  }
                  title={section.title}
                  description={section.description}
                />
                <div className="destination-grid">
                  {section.items.map((destination) => (
                    <DestinationCard
                      destination={destination}
                      key={destination.id}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">⌖</span>
            <h3>Belum ada item dalam kategori ini</h3>
            <p>Coba pilih kategori lainnya.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DestinationList
