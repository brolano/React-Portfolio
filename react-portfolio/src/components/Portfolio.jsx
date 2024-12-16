import Project from './Project';
import Image1 from '../assets/images/database.jpeg';
import Image2 from '../assets/images/vehiclebuilder.webp';
import Image3 from '../assets/images/readme2.webp';
import Image4 from '../assets/images/planner photo.webp';

function Portfolio() {
    const projects = [
      {
        title: 'Employee Tracker',
        imageUrl: Image1,
        githubUrl: 'https://github.com/brolano/Employee-Tracker',
        description: 'A typescript program application that provides user a content management system to view and interact with information in the local database.'
      },
      {
        title: 'Vehicle Builder',
        imageUrl: Image2,
        githubUrl: 'https://github.com/brolano/Vehicle-Builder',
        description: 'A node program that leverages typescript to build a vehicle and run commands to perform actions using the CLI.'
      },
      {
        title: 'Professional README Generator',
        imageUrl: Image3,
        githubUrl: 'https://github.com/brolano/Professional-README-Generator',
        description: 'A typescript program that will generate a README file using the CLI user input.'
      },
      {
        title: 'E-Planner',
        imageUrl: Image4,
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
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio