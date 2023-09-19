import React from "react"
import css from "./banner.module.scss"
import image from "../../../assets/images/banner.png"

function banner() {
  return (
    <div className={css.banner}>
      <div className={css.banner__content}>
        <div className={css.banner__content__title}>
          <span className={css.banner__content__title__crispy}>CRISPY </span>
          <span className={css.banner__content__title__tender}>
            TENDER <br />
          </span>
          <h1 className={css.banner__content__title__burger}>BURGER</h1>
        </div>
        <img src={image} alt="Burger" className={css.banner__content__image} />
      </div>
      <a href="#" className="button button__trans">
        SEE MORE
      </a>
    </div>
  )
}

export default banner
