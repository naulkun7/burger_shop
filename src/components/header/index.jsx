import React from "react"
import css from "./index.module.scss"
import { Link } from "react-router-dom"

function index() {
  return (
    <div id="header" className={css.header}>
      <Link className={css.header__logo} to="/">
        burger
      </Link>
      <div className={css.header__navbar}>
        <Link className={css.header__navbar__item} to="/">
          Home
        </Link>

        <Link className={css.header__navbar__item} to="/">
          About
        </Link>

        <Link className={css.header__navbar__item} to="/">
          Offer
        </Link>

        <Link className={css.header__navbar__item} to="/">
          Home
        </Link>

        <Link className={css.header__navbar__item} to="/">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default index
