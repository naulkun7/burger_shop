import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import JSON from "../../../database/gallery.json"
import css from "./gallery.module.scss"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

function gallery() {
  return (
    <div className={css.gallery}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {JSON.map((item, id) => (
          <img
            src={item.url}
            alt={item.name}
            key={id}
            className={css.gallery__image}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default gallery
