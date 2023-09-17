import React from "react"

// Styles
import css from "./dessert.module.scss"
import { Container, Row, Col } from "react-bootstrap"

import JSON from "../../../database/constant.json"

import AddIcon from "@mui/icons-material/Add"

function dessert() {
  return (
    <div className={css.dessert}>
      <Container>
        <h2 className={css.dessert__title}>Dessert Menu</h2>
        <Row>
          {JSON.dessert.map((item, id) => {
            return (
              <Col md={3} key={id}>
                <div className={css.dessert__item}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={css.dessert__item__image}
                  />
                  <h3 className={css.dessert__item__name}>{item.name}</h3>
                  <p className={css.dessert__item__desc}>{item.description}</p>
                  <div className={css.dessert__item__bottom}>
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

export default dessert
