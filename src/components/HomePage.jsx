import { Link } from 'react-router-dom'
import { culinaryHighlights } from '../data/culinary.js'
import DestinationCard from './DestinationCard.jsx'
import Hero from './Hero.jsx'
import SectionHeading from './SectionHeading.jsx'

function HomePage({ destinations }) {
  return (
    <>
      <Hero />

      <section className="destinations-section home-destinations">
        <div className="page-container">
          <div className="destinations-heading-row">
            <SectionHeading
              eyebrow="PILIHAN UNTUK PERJALANANMU"
              title="Mulai dari tempat istimewa"
              description="Empat ide singkat untuk mengenal alam dan cerita Banyumas."
            />
            <Link className="text-link home-section-link" to="/destinasi">
              Lihat semua destinasi <span aria-hidden="true">→</span>
            </Link>
          </div>

          {destinations.length > 0 ? (
            <div className="destination-grid home-destination-grid">
              {destinations.slice(0, 4).map((destination) => (
                <DestinationCard
                  destination={destination}
                  key={destination.id}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">⌖</span>
              <h3>Belum ada destinasi</h3>
              <p>Pilih destinasi untuk mulai merencanakan perjalananmu.</p>
            </div>
          )}
        </div>
      </section>

      <section className="culinary-section">
        <div className="page-container">
          <div className="culinary-heading-row">
            <SectionHeading
              eyebrow="RASA KHAS BANYUMAS"
              title="Jangan pulang sebelum mencicipi"
              description="Kenali Banyumas lewat sajian yang akrab di meja dan cerita lokal."
            />
            <Link
              className="text-link home-section-link"
              to="/destinasi?kategori=kuliner"
            >
              Lihat Semua Kuliner <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="culinary-grid">
            {culinaryHighlights.slice(0, 3).map((item) => (
              <article className="culinary-card" key={item.id}>
                <div className="culinary-image-wrap">
                  <img
                    className="culinary-image"
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                  />
                  {item.imageStatus === 'fallback-needs-photo' && (
                    <span className="image-status-badge">
                      Foto belum tersedia
                    </span>
                  )}
                </div>
                <div className="culinary-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-culture-section">
        <div className="page-container home-culture-layout">
          <div>
            <p className="eyebrow">LEBIH DARI SEKADAR PERJALANAN</p>
            <h2>
              Kenali keramahan dan
              <br />
              <span>cerita Banyumas.</span>
            </h2>
          </div>
          <div className="home-culture-copy">
            <p>
              Dari bahasa ngapak yang khas hingga kesenian lengger dan ebeg,
              Banyumas punya warisan budaya yang hidup berdampingan dengan
              keseharian warganya.
            </p>
            <Link className="button button-primary" to="/tentang">
              Tentang Banyumas <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="page-container home-cta">
          <div>
            <p className="eyebrow">WAKTUNYA MENJELAJAH</p>
            <h2>Satu perjalanan, banyak cerita.</h2>
            <p>Pilih tempat yang ingin dikunjungi dan mulai rencanakan harimu.</p>
          </div>
          <Link className="button button-primary" to="/destinasi">
            Temukan destinasi <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
