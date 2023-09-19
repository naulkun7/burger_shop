import React, { useState, useRef } from "react"
import css from "./header.module.scss"
import DehazeIcon from "@mui/icons-material/Dehaze"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"

function header() {
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

  // responsive navbar
  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle(css.header__navbar__show)
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
        onClick={showNavBar}
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
          onClick={showNavBar}
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
          onClick={showNavBar}
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
          onClick={showNavBar}
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
          onClick={showNavBar}
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
          onClick={showNavBar}
        >
          Contact
        </Link>
        <button onClick={showNavBar} className={css.header__navbar__btn}>
          <CloseIcon />
        </button>
      </div>
      <button
        onClick={showNavBar}
        className={
          css.header__navbar__btn + " " + css.header__navbar__btn__open
        }
      >
        <DehazeIcon />
      </button>
    </div>
  )
}

export default header
