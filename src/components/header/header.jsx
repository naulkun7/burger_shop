import React from "react"
import css from "./header.module.scss"
import { Link } from "react-router-dom"

function header() {
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

export default header
