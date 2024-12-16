import Project from './Project'

function Portfolio() {
    const projects = [
      {
        title: 'Employee Tracker',
        image: './src/assets/images/database.jpeg',
        githubUrl: 'https://github.com/brolano/Employee-Tracker',
        description: 'A typescript program application that provides user a content management system to view and interact with information in the local database.'
      },
      {
        title: 'Vehicle Builder',
        image: './src/assets/images/vehiclebuilder.webp',
        githubUrl: 'https://github.com/brolano/Vehicle-Builder',
        description: 'A node program that leverages typescript to build a vehicle and run commands to perofmrm actions using the CLI.'
      },
      {
        title: 'Professional README Generator',
        image: './src/assets/images/readme2.webp',
        githubUrl: 'https://github.com/brolano/Professional-README-Generator',
        description: 'A typescript program that will generate a README file using the CLI user input.'
      },
      {
        title: 'E-Planner',
        image: './src/assets/images/planner photo.webp',
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