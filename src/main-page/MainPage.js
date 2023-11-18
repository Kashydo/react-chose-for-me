import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Children } from "react";
import FetchRandomMovies from "./FetchRandomMovies";

export default function MainPage() {
  const [state, setState] = useState({
    movies: [],
    selectedMovie: null,
    isModalOpen: false,
  });

  function handleRandomClick() {
    console.log("previous movie data:", state.movies);
    FetchRandomMovies(setState);
  }

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
          <Col xs={10}>
            <div>
              <button onClick={handleRandomClick}>Get Random Movie</button>
            </div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div>
            {state.movies.map((movie) => (
              <div key={movie.id}>
                <button>
                  {movie.title} {movie.year}
                </button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
