import React from "react"
import css from "./index.module.scss"
import { Link } from "react-router-dom"
import logoImg from "../../assets/images/Jevelin_logo_dark.png"

function index() {
  return (
    <div id="header" className={css.header}>
      <img src={logoImg} alt="logo" />
      <div className={css.navbar}>
        <Link className={css.navbar__item} to="/">
          Home
        </Link>

        <Link className={css.navbar__item} to="/">
          About
        </Link>

        <Link className={css.navbar__item} to="/">
          Offer
        </Link>

        <Link className={css.navbar__item} to="/">
          Home
        </Link>

        <Link className={css.navbar__item} to="/">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default index
