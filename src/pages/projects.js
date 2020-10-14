import { Link, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../Components/head"
import Layout from "../Components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./projects.scss"
function Projects() {
  const projects = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            projectName
            demo
            github
            thumbnail {
              file {
                url
              }
            }
            projectDescription {
              projectDescription
            }
            slug
          }
        }
      }
    }
  `).allContentfulProject.edges
  console.log(projects)
  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>Projects</h1>
      <div className="project-preview-wrapper">
        {projects.map(node => {
          const project = node.node
          return (
            <div className="project-preview">
              <p className="project-name">{project.projectName}</p>

              <div className="project-thumbnail">
                <img
                  src={project.thumbnail.file.url}
                  alt={project.projectName}
                />
              </div>

              <p className="project-description">
                {project.projectDescription.projectDescription.slice(0, 200) +
                  "..."}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github repo</button>
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <button>Live site</button>
              </a>
              <Link to={`/projects/${project.slug}`}>
                <button>Learn more</button>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
