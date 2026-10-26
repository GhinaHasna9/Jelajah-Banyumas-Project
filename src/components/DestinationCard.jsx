import { Link } from 'react-router-dom'

function DestinationCard({ destination }) {
  const detailPath =
    destination.type === 'kuliner'
      ? `/kuliner/${destination.slug}`
      : `/destinasi/${destination.slug}`

  return (
    <article className="destination-card">
      <div className="destination-image-wrap">
        <img
          className="destination-image"
          src={destination.image}
          alt={destination.imageAlt || destination.name}
          loading="lazy"
        />
        <span className="category-badge">
          {destination.type === 'kuliner'
            ? 'Kuliner'
            : `Wisata · ${destination.category}`}
        </span>
        {destination.imageStatus === 'fallback-needs-photo' && (
          <span className="image-status-badge">Foto belum tersedia</span>
        )}
      </div>
      <div className="destination-content">
        {destination.location && (
          <p className="destination-location">
            <span aria-hidden="true">⌖</span> {destination.location}
          </p>
        )}
        <h3>{destination.name}</h3>
        <p className="destination-description">{destination.description}</p>
        <Link className="button button-secondary detail-button" to={detailPath}>
          Lihat Detail
        </Link>
      </div>
    </article>
  )
}

export default DestinationCard
