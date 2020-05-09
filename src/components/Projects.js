import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title}></Title>
      <div className="section-center projects-center">
        {projects.map(project => {
          return <Project key={project.id} {...project}></Project>
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
