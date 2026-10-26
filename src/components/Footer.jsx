import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <Link className="brand footer-brand" to="/">
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
        <p>Ruang kecil untuk merencanakan perjalanan besar.</p>
        <Link className="back-to-top" to="/">
          Kembali ke atas <span aria-hidden="true">↑</span>
        </Link>
      </div>
      <div className="page-container footer-bottom">
        <span>© {new Date().getFullYear()} Jelajah Banyumas</span>
        <div className="footer-meta">
          <Link to="/kredit-foto">Kredit foto</Link>
          <span>Dibuat dengan rasa ingin tahu.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
