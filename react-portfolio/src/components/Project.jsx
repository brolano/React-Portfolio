function Project({ title, image, deployedUrl, githubUrl, description }) {
    return (
      <div className="card h-100">
        <img
          src={image}
          alt={title}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title h5">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-transparent border-top-0">
          <div className="d-flex justify-content-between">
            <a
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Live Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Project