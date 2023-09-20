import React, { useState } from "react"
import css from "./header.module.scss"
import Hamburger from "hamburger-react"
import { Link } from "react-router-dom"

function Header() {
  // Change color
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 40) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)

  // Hamburger
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <div
      id="header"
      className={color ? css.header : `${css.header} ${css.header__bg}`}
    >
      <Link
        className={
          color
            ? css.header__logo
            : `${css.header__logo} ${css.header__logo__bg}`
        }
        to="/"
      >
        burger
      </Link>
      <div className={css.header__navbar}>
        <Link
          className={
            color
              ? css.header__navbar__item
              : `${css.header__navbar__item} ${css.header__navbar__item__bg}`
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            color
              ? css.header__navbar__item
              : `${css.header__navbar__item} ${css.header__navbar__item__bg}`
          }
          to="/"
        >
          About
        </Link>
        <Link
          className={
            color
              ? css.header__navbar__item
              : `${css.header__navbar__item} ${css.header__navbar__item__bg}`
          }
          to="/"
        >
          Offer
        </Link>
        <Link
          className={
            color
              ? css.header__navbar__item
              : `${css.header__navbar__item} ${css.header__navbar__item__bg}`
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            color
              ? css.header__navbar__item
              : `${css.header__navbar__item} ${css.header__navbar__item__bg}`
          }
          to="/"
        >
          Contact
        </Link>
        <button
          className={
            color
              ? css.header__navbar__btn
              : `${css.header__navbar__btn} + ${css.header__navbar__btn__bg}`
          }
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>
      </div>
    </div>
  )
}

export default Header
