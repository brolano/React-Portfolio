import Resume1 from '../assets/images/Resume.pdf'

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
        'PostgreSQL',
        'RESTful APIs',
      ],
      'Tools & Methods': [
        'Git',
        'Webpack',
        'Agile Development',
        'CI/CD',
        'PWA Development',
        'Vite'
      ]
    }
  
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = Resume1;
      link.download = 'Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <section className="container">
        <h2 className="display-4 mb-4">Resume</h2>
        <button 
        onClick={handleDownload}
        className="download-button"
      >
        Download Resume
      </button>
  
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