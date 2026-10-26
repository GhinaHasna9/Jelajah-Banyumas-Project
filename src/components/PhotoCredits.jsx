import { culinaryHighlights } from '../data/culinary.js'
import { initialDestinations } from '../data/destinations.js'
import SectionHeading from './SectionHeading.jsx'

function PhotoCredits() {
  const creditedImages = [...initialDestinations, ...culinaryHighlights].filter(
    (item) => item.credit && item.sourceUrl && item.license && item.licenseUrl,
  )

  return (
    <section className="photo-credits-section">
      <div className="page-container">
        <SectionHeading
          eyebrow="SUMBER ASET VISUAL"
          title="Kredit foto"
          description="Sumber dan lisensi foto destinasi serta kuliner yang digunakan di website ini."
        />
        <div className="photo-credit-list">
          {creditedImages.map((item) => (
            <article className="photo-credit-item" key={item.id}>
              <img src={item.image} alt={item.imageAlt} loading="lazy" />
              <div>
                <h3>{item.imageTitle}</h3>
                <p>
                  Karya:{' '}
                  <a href={item.sourceUrl} target="_blank" rel="noreferrer">
                    {item.credit}
                  </a>
                </p>
                <p>
                  Sumber:{' '}
                  <a href={item.sourceUrl} target="_blank" rel="noreferrer">
                    {item.photoSource || 'Wikimedia Commons'}
                  </a>
                  {' · '}
                  <a href={item.licenseUrl} target="_blank" rel="noreferrer">
                    {item.license}
                  </a>
                </p>
                <p className="photo-credit-note">
                  Ukuran gambar disesuaikan untuk tampilan website.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoCredits
