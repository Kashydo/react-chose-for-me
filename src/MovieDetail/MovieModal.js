import React from "react";
import { Modal } from "react-bootstrap";

const MovieModal = ({ show, onHide, movieDetail }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {movieDetail ? movieDetail.title : "Movie Details"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movieDetail ? (
          <div>
            <p>Year: {movieDetail.year}</p>
            <p>Genres: {movieDetail.movieGenres}</p>
            <p>Description: {movieDetail.description}</p>
          </div>
        ) : (
          <p>Error fetching movie details</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;
