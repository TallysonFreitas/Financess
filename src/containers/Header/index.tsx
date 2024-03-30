import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed-top shadow">
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-light-subtle">
        <div className="container">
          <a href="/" className="navbar-brand fw-bold">
            <span className="text-danger me-2">
              <i className="bi bi-bar-chart-fill"></i>
            </span>
            <span className="text-danger">Financess</span>
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#headerDropdown"
            aria-controls="headerDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="headerDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item fw-semibold">
                <a className="nav-link text-light" aria-current="page" href="/">
                  Intro
                </a>
              </li>
              <li className="nav-item fw-semibold">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
