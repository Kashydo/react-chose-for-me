import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RandomMovieButton from "./RandomMovieButton";

class MainPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container className="App-content">
        {" "}
        {/* Dodaj klasę App-content */}
        <Row>
          <Col xs={10}>
            {/* Treść dla ekranów XS (extra small) do LG (large) */}
            <RandomMovieButton />
          </Col>
        </Row>
        <Row>
          <Col xs={10}></Col>
        </Row>
      </Container>
    );
  }
}
export default MainPage;
