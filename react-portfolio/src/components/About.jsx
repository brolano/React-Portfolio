import coverPhoto from '../assets/images/coverphoto.jpg'

function About() {
    return (
      <section className="container">
        <h2 className="display-4 mb-4">About Me</h2>
        <div className="row align-items-start">
          <div className="col-md-4 mb-4">
            <img
              src= { coverPhoto }
              alt="Brian Solano"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <p className="card-text lead mb-4">
                  Hello! I'm Brian Solano, a full-stack web developer with a passion for
                  creating elegant, efficient, and user-friendly applications. With 3 months
                  of experience in web development, I specialize in React, Node.js, Javascript, Typescript, HTML and CSS.
                </p>
                <p className="card-text">
                  When I'm not coding, you can find me contributing to open-source
                  projects, writing technical blog posts, or exploring new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About