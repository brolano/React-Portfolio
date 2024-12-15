import Navigation from './Navigation'

function Header() {
  return (
    <header className="bg-primary">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h1 className="navbar-brand fs-2 mb-0">Brian Solano</h1>
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header