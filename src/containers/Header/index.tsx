const Header = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-light-subtle">
        <div className="container">
          <a href="#" className="navbar-brand text-primary">
            <span className="fw-bold">
              <i className="bi bi-bar-chart-fill"></i> Financess
            </span>
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
            <ul className="navbar-nav me-3">
              <li className="nav-item fw-semibold">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Intro
                </a>
              </li>
              <li className="nav-item fw-semibold">
                <a className="nav-link text-light" href="#">
                  Start
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
