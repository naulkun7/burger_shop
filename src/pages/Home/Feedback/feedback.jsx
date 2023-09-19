import React from "react"

// Layout
import SplitScreen from "../../../components/layout/SplitScreen"

// Styles
import css from "./feedback.module.scss"
import { Container } from "react-bootstrap"

// Data
import JSON from "../../../database/feedback.json"
import image from "../../../assets/images/feedback.jpg"

// Carousel
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

// Left and Right side of the SplitScreen
const Left = () => {
  return (
    <div className={css.feedback__left}>
      <img
        src={image}
        alt="Burger Making"
        className={css.feedback__left__image}
        loading="lazy"
      />
    </div>
  )
}

const Right = () => {
  return (
    <div className={css.feedback__content}>
      <a href="#" className="tag tag__black">
        FEEDBACK
      </a>
      <h2 className={css.feedback__content__title}>
        What our clients have to say
      </h2>
      <Carousel
        responsive={responsive}
        showDots={true}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        infinite={true}
      >
        {JSON.map((item, id) => (
          <div className={css.feedback__content__item} key={id}>
            <p className={css.feedback__content__item__point}>{item.point}</p>
            <p className={css.feedback__content__item__text}>{item.text}</p>
            <p className={css.feedback__content__item__name}>{item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

function feedback() {
  return (
    <div id="feedback" className={css.feedback}>
      <Container fluid>
        <SplitScreen left={Left} right={Right} />
      </Container>
    </div>
  )
}

export default feedback
