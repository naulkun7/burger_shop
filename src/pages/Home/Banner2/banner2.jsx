import React from "react"

// Styles
import css from "./banner2.module.scss"

// Layout
import SplitScreen from "../../../components/layout/SplitScreen"
import imgURL from "../../../assets/images/banner2.png"

// Left and Right side of the SplitScreen
const Left = () => {
  return (
    <div className={css.banner2__left}>
      <img src={imgURL} alt="Banner 1" className={css.banner2__left__image} />
    </div>
  )
}

const Right = () => {
  return (
    <div className={css.banner2__right}>
      <a href="#" className="tag tag__banner">
        -15% OFF
      </a>
      <h3 className={css.banner2__right__title}>
        New, amazing sandwich offers every day
      </h3>
      <p className={css.banner2__right__desc}>
        Just add some of our juicy side dishes
      </p>
      <a href="#" className="button button__trans">
        SEE MORE
      </a>
    </div>
  )
}

function banner2() {
  return (
    <div className={css.banner2}>
      <SplitScreen left={Right} right={Left} />
    </div>
  )
}

export default banner2
