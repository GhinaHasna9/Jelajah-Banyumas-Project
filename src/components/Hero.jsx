import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section
      className="hero-section"
      aria-label="Menara Teratai di Banyumas"
    >
      <div className="page-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            TEMUKAN CERITA DI JAWA TENGAH
          </p>
          <h1>
            Sejenak pergi,
            <br />
            <span>selamanya terkenang.</span>
          </h1>
          <p className="hero-description">
            Dari sejuknya kaki Gunung Slamet sampai hangatnya budaya lokal,
            Banyumas selalu punya alasan untuk dijelajahi.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/destinasi">
              Jelajahi destinasi <span aria-hidden="true">↘</span>
            </Link>
            <Link className="text-link" to="/tentang">
              Kenali Banyumas <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-stars" aria-hidden="true">★★★★★</span>
            <span>Temukan sudut favoritmu di Banyumas</span>
          </div>
        </div>

        <div className="hero-location">
          <span className="location-icon" aria-hidden="true">⌖</span>
          <span>
            <strong>Banyumas</strong>
            <small>Jawa Tengah, Indonesia</small>
          </span>
        </div>
        <div className="hero-caption">
          <span>01 / 06</span>
          <span>Ruang untuk menemukan hal baru</span>
        </div>
      </div>
      <Link className="scroll-cue" to="/tentang" aria-label="Kenali Banyumas">
        <span aria-hidden="true">↓</span>
      </Link>
    </section>
  )
}

export default Hero
