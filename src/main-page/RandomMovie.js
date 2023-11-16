import React from "react";
import Button from "react-bootstrap/Button";
import MovieDetail from "../MovieDetail/MovieDetail";

const RandomMovie = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  if (!props.randomMovie) {
    return <div>No random movie available</div>;
  }

  const { id, title } = props.randomMovie;

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {title}
      </Button>
      <br />
      <MovieDetail show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default RandomMovie;
