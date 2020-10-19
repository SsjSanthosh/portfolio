import React from "react"
import Layout from "../Components/layout"
import Head from "../Components/head"
import HeroImg from "../assets/img/hero.png"

import "./style.scss"
import "../common.scss"
import { SKILLS_ICONS } from "./../utils/constants"
import { Link } from "gatsby"
function IndexPage() {
  return (
    <div>
      <Layout>
        <Head title={"Santhosh J | Portfolio"} />
        <section className="hero-section">
          <div className="left-hero-img">
            <img src={HeroImg} />
          </div>
          <div className="right-hero-desc">
            <h1>
              {" "}
              Hi, there. <br /> Welcome to my portfolio! <br /> I'm Santhosh, a
              self taught web developer.
            </h1>
            <div className="skills-div">
              <h2>What I've worked with:</h2>
              <div className="skills">
                {Object.keys(SKILLS_ICONS).map(skill => {
                  return (
                    <div className="skill">
                      <img src={SKILLS_ICONS[skill]} alt={skill} />
                    </div>
                  )
                })}
              </div>
            </div>
            <h3>
              Don't take my word for it, check out my{" "}
              <Link to="/projects">projects!</Link>
            </h3>
            <a id="emailMe" href="mailto:bgj.santhosh@gmail.com">
              <button>Get in touch!</button>
            </a>
          </div>
        </section>
        <div className="page-break-div primary-color-bg"></div>
      </Layout>
    </div>
  )
}

export default IndexPage
