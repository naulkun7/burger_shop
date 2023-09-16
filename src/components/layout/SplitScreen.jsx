import { Row, Col } from "react-bootstrap"

function SplitScreen({ left: Left, right: Right }) {
  return (
    <Row>
      <Col xs={12} md={6}>
        <Left />
      </Col>
      <Col xs={12} md={6}>
        <Right />
      </Col>
    </Row>
  )
}
export default SplitScreen
