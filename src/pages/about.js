import React, { useEffect, useState } from "react"
import Head from "../Components/head"
import Layout from "../Components/layout"
import MovieHero from "../assets/img/HeroMovies.png"
import GameHero from "../assets/img/HeroGaming.png"
import ReadingHero from "../assets/img/HeroReading.png"
import MusicHero from "../assets/img/HeroMusic.png"
import CodingHero from "../assets/img/HeroCode.png"

let interval
function AboutPage() {
  const heroImages = [MovieHero, ReadingHero, MusicHero, GameHero]
  const [imageIndex, setImageIndex] = useState(0)
  useEffect(() => {
    interval = setInterval(() => {
      setImageIndex(imageIndex => (imageIndex + 1) % heroImages.length)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <Layout>
      <Head title="Santhosh | About" />
      <h2>A little about me</h2>
      <section className="about">
        <div className="about-left">
          I'm a web developer who loves to code UI/UX. I started out of college
          with a PSO job in VMware and I quickly realized it was not for me.
          Once I started building things with react, there was no turning back.
          I believe in UI/UX that is both functional and aesthetically pleasing,
          and React and Sass help me achieve that. The ability to bring life to
          your ideas is surreal and extremely powerful.
          <br />
          <br />
          When I'm not looking for new things to build, I am trying to keep
          teammates alive in overwatch, watch and dissect the latest in movies
          and tv shows , read some fantasy fiction, attempt to cook something
          edible or just browse reddit for{" "}
          <span className="strike-through">memes</span> news and{" "}
          <span className="strike-through">dog pictures</span> tech updates.
          <p className="resume-link">
            {" "}
            <a
              href="https://drive.google.com/file/d/1GiyvUIl4pADtOzI5Gyn6913GrPfIOtgJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my resume
            </a>
          </p>
          Email me at - bgj.santhosh@gmail.com
        </div>
        <div className="about-right">
          <img src={heroImages[imageIndex]} alt="movie" />
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
