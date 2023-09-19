import React, { useState } from "react"
import css from "./header.module.scss"
import { Link } from "react-router-dom"

function header() {
  // Change color
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)

  return (
    <div
      id="header"
      className={color ? css.header : `${css.header} ${css.header__bg}`}
    >
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
