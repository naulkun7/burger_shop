import React from "react"
import css from "./banner.module.scss"
import image from "../../../assets/images/banner.png"

import { Container } from "react-bootstrap"

function banner() {
  return (
    <div className={css.banner}>
      <Container>
        <div className={css.banner__content}>
          <h1 className={css.banner__content__title}>
            <span className={css.banner__content__title__crispy}>CRISPY </span>
            <span className={css.banner__content__title__tender}>
              TENDER <br />
            </span>
            BURGER
          </h1>
          <img
            src={image}
            alt="Burger"
            className={css.banner__content__image}
          />
          <a
            href="#"
            className={
              "button button__trans" + " " + css.banner__content__seeMore
            }
          >
            SEE MORE
          </a>
        </div>
      </Container>
    </div>
  )
}

export default banner
