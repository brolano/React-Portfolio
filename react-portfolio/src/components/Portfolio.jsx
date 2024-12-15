function Portfolio() {
    const projects = [
      {
        title: 'Employee Tracker',
        image: './src/assets/images/planner photo.webp',
        githubUrl: 'https://github.com/brolano/Employee-Tracker',
        description: 'A typescript program application that provides user a content management system to view and interact with information in the local database.'
      },
      {
        title: 'Vehicle Builder',
        image: '/api/placeholder/350/200',
        githubUrl: 'https://github.com/brolano/Vehicle-Builder',
        description: 'A node program that leverages typescript to build a vehicle and run commands to perofmrm actions using the CLI.'
      },
      {
        title: 'Professional README Generator',
        image: '/api/placeholder/350/200',
        githubUrl: 'https://github.com/brolano/Professional-README-Generator',
        description: 'A typescript program that will generate a README file using the CLI user input.'
      },
      {
        title: 'E-Planner',
        image: '/api/placeholder/350/200',
        deployedUrl: 'https://ejmaller7.github.io/E-Planner/',
        githubUrl: 'https://github.com/ejmaller7/E-Planner',
        description: 'Group project that utilizes HTML, Javascript, CSS and API calls to provide the use a planner to list daily to do tasks and provide current weather for requested city.'
      }
    ]
  
    return (
      <section>
        <h2 className="display-4 mb-4">Portfolio</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title h5">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <div className="d-flex justify-content-between">
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Portfolio