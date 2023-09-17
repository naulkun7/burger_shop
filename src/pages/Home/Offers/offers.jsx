import React from "react"

// Styles
import css from "./offers.module.scss"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import AddIcon from "@mui/icons-material/Add"

// Data
import Json from "../../../database/constant.json"

// Layout
import SplitScreen from "../../../components/layout/SplitScreen"
import { Container, Row, Col } from "react-bootstrap"

// Left and Right side of the SplitScreen
const Left = () => {
  return (
    <div className={css.offers__left}>
      {Json.offers.map((item, id) => (
        <div key={id} className={css.offers__left__item}>
          {id === 0 && (
            <>
              <a href="#" className="tag tag__red">
                NEW IN TOWN
              </a>
              <img
                src={item.image}
                alt={item.name}
                className={css.offers__left__item__image}
              ></img>
              <h5 className={css.offers__left__item__name}>{item.name}</h5>
              <div className={css.offers__left__item__nutritious}>
                <span className={css.offers__left__item__nutritious__stat}>
                  fat {item.nutritious.fat}
                </span>
                <span className={css.offers__left__item__nutritious__stat}>
                  sugars {item.nutritious.sugars}
                </span>
                <span className={css.offers__left__item__nutritious__stat}>
                  carbs {item.nutritious.carbs}
                </span>
              </div>
              <p className={css.offers__left__item__description}>
                {item.description}
              </p>
              <div className={css.offers__left__item__bottom}>
                <span className={css.offers__left__item__bottom__price}>
                  ${item.price}
                </span>
                <a href="" className="button button__black">
                  <CheckCircleOutlineIcon />
                  <span style={{ marginLeft: "1rem" }}>Learn More</span>
                </a>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

const Right = () => {
  return (
    <Row>
      {Json.offers.slice(1).map((item, id) => (
        <Col xs={12} md={6} key={id}>
          <div className={css.offers__right__item}>
            <img
              src={item.image}
              alt={item.name}
              className={css.offers__right__item__image}
            />
            <h5 className={css.offers__right__item__name}>{item.name}</h5>
            <a href="#" className="button button__price">
              ${item.price}
            </a>
            <a href="#" className="cart">
              <AddIcon className="cart__icon" />
              <span>Add to cart</span>
            </a>
          </div>
        </Col>
      ))}
    </Row>
  )
}

// Offers page
function offers() {
  return (
    <div id="offers" className={css.offers}>
      <Container>
        <h2 className={css.offers__title}>Special offers</h2>
        <SplitScreen left={Left} right={Right} />
      </Container>
    </div>
  )
}

export default offers
