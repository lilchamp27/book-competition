import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img className="logo" src="/logo.svg" alt="Sample crest" />
          <span className="brand-text">
            <strong>Tripoli Immigration Services</strong>
            <small>Immigration Status Portal</small>
          </span>
        </Link>
      </div>
    </header>
  )
}
