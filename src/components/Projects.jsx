import Section from "./Section";

function Projects() {
  const projectList = [
    { title: "Photography Shop", description: "Photography Travel & Sports", tech: "React" },
    { title: "Sports Application", description: "Wellness Sports App", tech: "React, HTML, CSS" },
    { title: "Slack Team Assistant", description: "Custom Slack Tool", tech: "JavaScript, Node.js" }
  ];

  return (
    <Section title="Projects">
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <a href="#">View Project</a>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
