import React from "react"
import css from "./index.module.scss"
import logoImg from "../../assets/images/Jevelin_logo_dark.png"

function index() {
  return (
    <div id="header" className={css.header}>
      <img src={logoImg} alt="logo" />
      <div className={css.navbar}>
        <div className={css.navbar__item}>
          <a href="">Home</a>
        </div>
        <div className={css.navbar__item}>
          <a href="">About</a>
        </div>
        <div className={css.navbar__item}>
          <a href="">Offer</a>
        </div>
        <div className={css.navbar__item}>
          <a href="">Menu</a>
        </div>
        <div className={css.navbar__item}>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default index
