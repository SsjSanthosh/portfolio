import React from "react"
import Layout from "../Components/layout"

import { Link } from "gatsby"
import Head from "../Components/head"
import HeroImg from "../assets/img/hero.png"
import HeroBlob from "../assets/img/hero-blob.svg"
import skillReact from "../assets/img/react.svg"
import skillJS from "../assets/img/javascript.svg"
import "./style.scss"

function IndexPage() {
  return (
    <div>
      <Layout>
        <Head title={"Santhosh J - Portfolio"} />
        <section className="hero-section">
          <div className="left-hero-img">
            <img src={HeroImg} />
          </div>
          <div className="right-hero-desc">
            <div className="right-hero-img">
              <img src={HeroBlob} />
            </div>
            <h1>
              {" "}
              Hi! <br /> Welcome to my portfolio! <br /> I'm Santhosh, a self
              taught web developer.
            </h1>
            <div className="skills-div">
              <h2>What I'm good at:</h2>
            </div>
          </div>
        </section>
        {/* <h4>
          Need help? <Link to="/contact">Contact me!</Link>
        </h4> */}
      </Layout>
    </div>
  )
}

export default IndexPage
