import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Components/layout"
import Head from "../../Components/head"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../common.scss"
import "./style.scss"
import { TECH_TO_ICONS } from "./../../utils/constants"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      projectName
      projectDescription {
        projectDescription
      }
      demo
      github
      screenshots {
        file {
          url
        }
        description
      }
      questions {
        question
        answer
      }
      features
      possibleFutureUpdates
      techStack
    }
  }
`.contentfulProject

export default function Project({ data, ...props }) {
  const project = data.contentfulProject
  return (
    <Layout>
      <Head title={project.projectName} />
      <div className="project-wrapper">
        <h1>{project.projectName}</h1>
        <div className="project-details-wrapper">
          <Carousel>
            {project.screenshots.map(screen => {
              return (
                <div className="screenshot">
                  <img src={screen.file.url} alt={screen.description} />
                  <p className="legend">{screen.description}</p>
                </div>
              )
            })}
          </Carousel>
          <div className="button-wrapper">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="github-btn">Github repo</button>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <button className="demo-btn">Live site</button>
            </a>
          </div>

          <h3 className="border-bottom">About</h3>
          <p className="project-description">
            {project.projectDescription.projectDescription}
          </p>
          <h3 className="border-bottom">Tech stack</h3>
          <div className="project-stack-wrapper">
            {project.techStack.map(tech => {
              return (
                <div className="tech">
                  <img src={TECH_TO_ICONS[tech.toLowerCase()]} alt={tech} />
                  <span className="tech-name">{tech}</span>
                </div>
              )
            })}
          </div>
          <h3>Features</h3>
          <div className="project-features-wrapper">
            <ul>
              {project.features.map(feature => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
          <h3 className="border-bottom">Questions</h3>
          <div className="project-question-wrapper">
            <Accordion allowZeroExpanded={true}>
              {project.questions.map(question => {
                return (
                  <AccordionItem className="question ">
                    <AccordionItemHeading className="question-heading">
                      <AccordionItemButton className="question-button">
                        {question.question}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="question-panel">
                      {question.answer}
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
            <h4>Got other questions? Get in touch!</h4>
          </div>
          <h3>Possible future updates</h3>
          <div className="project-updates-wrapper">
            <ul>
              {project.possibleFutureUpdates.map(update => (
                <li>{update}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
