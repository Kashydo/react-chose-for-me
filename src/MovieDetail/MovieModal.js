import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MovieModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.movieDetail.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Year:</h4>
        <p>{props.movieDetail.year}</p>
        <h4>Description</h4>
        <p>{props.movieDetail.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;
