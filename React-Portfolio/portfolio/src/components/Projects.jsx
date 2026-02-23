import "/src/index.css"
const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React"
    },
    {
      title: "E-commerce Website",
      desc: "Shopping website using React"
    },
    {
      title: "Landing Page",
      desc: "Responsive landing page"
    }
  ]

  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects
