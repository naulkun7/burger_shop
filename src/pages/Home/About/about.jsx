import React from "react"

// Layout
import SplitScreen from "../../../components/layout/SplitScreen"

// Styles
import css from "./about.module.scss"
import { Container } from "react-bootstrap"

// Images
import aboutImg from "../../../assets/images/about.jpg"

// Left and Right side of the SplitScreen
const Left = () => {
  return (
    <div className={css.about__left}>
      <img src={aboutImg} alt="Burger Making" />
    </div>
  )
}

const Right = () => {
  return (
    <div className={css.about__right}>
      <a href="#" className="tag tag__black">
        About Us
      </a>
      <h1 className={css.about__right__title}>
        Delivering best ingredients for our trusty food lovers
      </h1>
      <p className={css.about__right__desc}>
        {/* cSpell:disable */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
      <p className={css.about__right__desc2}>
        Risus commodo viverra maecenas accumsan lacus lalala vel facilisis.
        {/* cSpell:enable */}
      </p>
    </div>
  )
}

// About page
function About() {
  return (
    <div id="about" className={css.about}>
      <Container fluid>
        <SplitScreen left={Left} right={Right} />
      </Container>
    </div>
  )
}

export default About
