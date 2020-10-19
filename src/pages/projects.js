import { Link, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../Components/head"
import Layout from "../Components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./projects.scss"
import { Carousel } from "react-responsive-carousel"
import { TECH_TO_ICONS } from "./../utils/constants"
function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: contentfulid }) {
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
      allContentfulMiniProject(sort: { fields: contentfulid }) {
        edges {
          node {
            title
            demo
            github
            description {
              description
            }
            contentfulid
            screenshots {
              file {
                url
              }
            }
            techStack
          }
        }
      }
    }
  `)

  const projects = data.allContentfulProject.edges
  const miniProjects = data.allContentfulMiniProject.edges

  console.log(data)
  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>Projects</h1>
      <div className="project-preview-wrapper">
        {projects.map(node => {
          const project = node.node
          return (
            <div className="project-preview">
              <p className="project-name">
                <strong>{project.projectName}</strong>
              </p>
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
      <h2>Mini Projects</h2>
      <div className="mini-project-wrapper">
        {miniProjects.map(node => {
          const project = node.node
          return (
            <div className="mini-project">
              <p className="mini-project-title">
                <strong>{project.title} </strong>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Github</button>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Live site</button>
                </a>
              </p>
              <Carousel>
                {project.screenshots.map(screen => (
                  <div className="mini-screen">
                    <img src={screen.file.url} alt={project.title} />
                  </div>
                ))}
              </Carousel>
              <div className="mini-project-tech">
                {project.techStack.map(tech => (
                  <div className="mini-tech">
                    <img src={TECH_TO_ICONS[tech.toLowerCase()]} alt={tech} />
                  </div>
                ))}
              </div>
              <div className="mini-project-description">
                {project.description.description}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
