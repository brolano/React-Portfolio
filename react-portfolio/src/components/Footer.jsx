function Footer() {
    const socialLinks = [
      {
        name: 'GitHub',
        url: 'https://github.com/johndoe',
        icon: '📚'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/johndoe',
        icon: '💼'
      },
      {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/johndoe',
        icon: '📝'
      }
    ]
  
    return (
      <footer className="footer py-4 mt-auto">
        <div className="container">
          <div className="d-flex justify-content-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
                aria-label={link.name}
              >
                <span className="fs-3">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer