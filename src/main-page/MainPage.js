import "../App.css";
import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FetchRandomMovies from "./FetchRandomMovies";
import { FetchMovieDetail } from "../MovieDetail/FetchMovieDetail";
import MovieModal from "../MovieDetail/MovieModal";
import NavigationBar from "./NavigationBar";

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

      const movieDetail = await FetchMovieDetail(setState, movieId);

      if (movieDetail) {
        setState((prevState) => ({ ...prevState, selectedMovie: movieDetail }));
      }
    },

    [state.selectedMovie, setState]
  );
  return (
    <Container>
      <Row className="navbar">
        <Col>
          <NavigationBar />
        </Col>
      </Row>
      <Row className="movie-choice">
        <Col xs={10}>
          {/* Treść dla ekranów XS (extra small) do LG (large) */}
          <Col xs={10}>
            <div className="dropdown">
              <button className="movie-option-button">Genres</button>
              <div className="dropdown-content">
                <p>Action</p>
                <p>Crime</p>
                <p>Drama</p>
              </div>
            </div>
            <button className="movie-option-button" onClick={handleRandomClick}>
              Get Random Movie
            </button>
          </Col>
        </Col>
      </Row>
      <Row xs={10} className="movie-section">
        <>
          {state.movies.map((movie) => (
            <Col key={movie.id}>
              <button onClick={() => handleMovieClick(movie.id)}>
                {movie.title} {movie.year}
              </button>
            </Col>
          ))}
        </>
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
