import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";

import FetchRandomMovies from "./FetchRandomMovies";
import { FetchMovieDetail } from "../MovieDetail/FetchMovieDetail";
import MovieModal from "../MovieDetail/MovieModal";

export default function MainPage() {
  const [state, setState] = useState({
    movies: [],
    selectedMovie: null,
    isModalOpen: false,
  });

  const handleRandomClick = useCallback(() => {
    console.log("previous movie data:", state.movies);
    setState((prevState) => ({ ...prevState, movies: [] }));
    FetchRandomMovies(setState);
  }, [state.movies, setState]);

  const handleMovieClick = useCallback(
    async (movieId) => {
      console.log("prevoius selcted movie:", state.selectedMovie);

      setState((prevState) => ({ ...prevState, isModalOpen: true }));

      // Wait for the movieDetail

      const movieDetail = await FetchMovieDetail(setState, movieId);

      if (movieDetail) {
        // Update the selectedMovie if movieDetail is not null

        setState((prevState) => ({ ...prevState, selectedMovie: movieDetail }));
      }
    },

    [state.selectedMovie, setState]
  );
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
                <button onClick={() => handleMovieClick(movie.id)}>
                  {movie.title} {movie.year}
                </button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      {state.isModalOpen && (
        <MovieModal
          show={state.isModalOpen}
          onHide={() =>
            setState((prevState) => ({ ...prevState, isModalOpen: false }))
          }
          movieDetail={state.selectedMovie}
        />
      )}
    </Container>
  );
}
