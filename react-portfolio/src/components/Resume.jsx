function Resume() {
    const proficiencies = {
      'Front-end': [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React',
        'Bootstrap',
        'Responsive Design'
      ],
      'Back-end': [
        'Node.js',
        'Express',
        'MySQL',
        'RESTful APIs',
      ],
      'Tools & Methods': [
        'Git',
        'Webpack',
        'Agile Development',
        'CI/CD',
        'PWA Development'
      ]
    }
  
    return (
      <section className="container">
        <h2 className="display-4 mb-4">Resume</h2>
        <div className="mb-4">
          <a
            href="/path-to-resume.pdf"
            download
            className="btn btn-primary btn-lg"
          >
            Download Resume
          </a>
        </div>
  
        <div className="row">
          {Object.entries(proficiencies).map(([category, skills]) => (
            <div key={category} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h4 mb-3">{category}</h3>
                  <ul className="list-group list-group-flush">
                    {skills.map((skill) => (
                      <li key={skill} className="list-group-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Resume