import { Link, useParams } from 'react-router-dom'

function ItemDetail({ items, itemType }) {
  const { slug } = useParams()
  const item = items.find(
    (entry) => entry.slug === slug && entry.type === itemType,
  )

  if (!item) {
    return (
      <section className="item-detail-section">
        <div className="page-container">
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">⌖</span>
            <h2>Item tidak ditemukan</h2>
            <p>Item yang kamu cari tidak tersedia di katalog.</p>
            <Link className="button button-primary empty-state-button" to="/destinasi">
              Kembali ke katalog <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const isCulinary = item.type === 'kuliner'
  const catalogPath = '/destinasi'

  return (
    <section className="item-detail-section">
      <div className="page-container">
        <nav className="detail-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Beranda</Link>
          <span aria-hidden="true">›</span>
          <Link to={catalogPath}>Destinasi Pilihan</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{item.name}</span>
        </nav>

        <article className="item-detail">
          <div className="item-detail-image-wrap">
            <img
              className="item-detail-image"
              src={item.image}
              alt={item.imageAlt || item.name}
            />
            {item.imageStatus === 'fallback-needs-photo' && (
              <span className="image-status-badge">Foto belum tersedia</span>
            )}
          </div>
          <div className="item-detail-content">
            <span className="category-badge item-detail-badge">
              {isCulinary ? 'Kuliner' : `Wisata · ${item.category}`}
            </span>
            <h1>{item.name}</h1>
            {item.location && (
              <p className="item-detail-location">
                <span aria-hidden="true">⌖</span> {item.location}
              </p>
            )}
            <p className="item-detail-description">{item.details}</p>

            {item.highlights?.length > 0 && (
              <div className="item-detail-highlights">
                <h2>{isCulinary ? 'Karakteristik' : 'Daya tarik'}</h2>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="item-detail-actions">
              <Link className="button button-secondary" to={catalogPath}>
                Kembali ke katalog
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ItemDetail
