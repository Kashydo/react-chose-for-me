import React from "react";

const RandomMovie = (props) => {
  if (!props.randomMovie) {
    return <div>No random movie available</div>;
  }

  const { id, title } = props.randomMovie;

  return (
    <div className={id}>
      <h2>{title}</h2>
    </div>
  );
};

export default RandomMovie;
