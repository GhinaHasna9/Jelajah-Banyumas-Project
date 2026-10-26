import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="page-container nav-inner">
        <Link className="brand" to="/" aria-label="Jelajah Banyumas, beranda">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path
                d="M4 25.5 13 11l5.2 8 3.8-5.5L32 29H4v-3.5Z"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinejoin="round"
              />
              <path
                d="m4 29 9.2-8 5.2 4 5.1-5 8.5 9H4Z"
                fill="currentColor"
                opacity=".35"
              />
              <circle cx="26.5" cy="9.5" r="3" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>Jelajah</strong>
            <span>BANYUMAS</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Navigasi utama">
          <NavLink to="/" end>Beranda</NavLink>
          <NavLink to="/destinasi">Destinasi</NavLink>
          <NavLink to="/tentang">Tentang Banyumas</NavLink>
          <NavLink to="/rencana-kunjungan">Rencana kunjungan</NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Navbar
