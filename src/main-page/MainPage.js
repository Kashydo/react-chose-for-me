import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class MainPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={3} className="order-md-3">
            {/* Treść dla ekranów XS (extra small) do MD (medium) */}
            <p>Logo</p>
          </Col>
          <Col xs={5} md={4}>
            {/* Treść dla ekranów XS (extra small) do MD (medium) */}
            <p>Menu</p>
          </Col>
          <Col xs={7} md={5}>
            {/* Treść dla ekranów XS (extra small) do MD (medium) */}
            <p>Search</p>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            {/* Treść dla ekranów XS (extra small) do LG (large) */}
            <p>Roll Menu</p>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            {/* Treść dla ekranów XS (extra small) do LG (large) */}
            <p>Movie information</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MainPage;
