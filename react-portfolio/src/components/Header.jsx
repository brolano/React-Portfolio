import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-primary">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <h1 className="navbar-brand fs-2 mb-0">Brian solano</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                ['About Me', '/about'],
                ['Portfolio', '/portfolio'],
                ['Contact', '/contact'],
                ['Resume', '/resume'],
              ].map(([title, url]) => (
                <li className="nav-item" key={url}>
                  <NavLink to={url} className="nav-link">
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header