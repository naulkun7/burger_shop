import React from "react"

// Styles
import css from "./trend.module.scss"
import { Container, Row, Col } from "react-bootstrap"

import JSON from "../../../database/constant.json"

import AddIcon from "@mui/icons-material/Add"

function trend() {
  return (
    <div className={css.burger}>
      <Container>
        <h2 className={css.burger__title}>Trending Burgers</h2>
        <Row>
          {JSON.burger.map((item, id) => {
            return (
              <Col md={3} key={id}>
                <div className={css.burger__item}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={css.burger__item__image}
                  />
                  <h3 className={css.burger__item__name}>{item.name}</h3>
                  <p className={css.burger__item__desc}>{item.description}</p>
                  <div className={css.burger__item__bottom}>
                    <a href="#" className="button button__price">
                      ${item.price}
                    </a>
                    <a href="#" className="cart">
                      <AddIcon className="cart__icon" />
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default trend
