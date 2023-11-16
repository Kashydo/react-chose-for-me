import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FetchMovieDetail from "../MovieDetail/FetchMovieDetail";

const RandomMovie = ({ randomMovie }) => {
  const [modalShow, setModalShow] = useState(false);

  if (!randomMovie) {
    return <div>No random movie available</div>;
  }

  const handleRandomMovieClick = () => {
    setModalShow(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleRandomMovieClick}>
        {randomMovie.title}
      </Button>
      <FetchMovieDetail
        show={modalShow}
        onHide={() => setModalShow(false)}
        movieId={randomMovie.id}
      />
    </>
  );
};

export default RandomMovie;
