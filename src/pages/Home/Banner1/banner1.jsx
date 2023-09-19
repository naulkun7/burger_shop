import React from "react"

// Styles
import css from "./banner1.module.scss"

// Layout
import SplitScreen from "../../../components/layout/SplitScreen"
import imgURL from "../../../assets/images/banner1.png"

// Left and Right side of the SplitScreen
const Left = () => {
  return <img src={imgURL} alt="Banner 1" className={css.banner1__image} />
}

const Right = () => {
  return (
    <div className={css.banner1__right}>
      <a href="#" className="tag tag__banner">
        -25% OFF
      </a>
      <h3 className={css.banner1__right__title}>
        Enjoy our specially prepared burgers for you
      </h3>
      <p className={css.banner1__right__desc}>
        Dont miss out on our daily special offers
      </p>
      <a href="#" className="button button__trans">
        SEE MENU
      </a>
    </div>
  )
}

function banner1() {
  return (
    <div className={css.banner1}>
      <SplitScreen left={Left} right={Right} />
    </div>
  )
}

export default banner1
