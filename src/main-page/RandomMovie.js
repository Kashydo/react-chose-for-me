import React from "react";

const RandomMovie = (props) => {
  if (!props.randomMovie) {
    // Handle the case when props.randomMovie is null
    return <div>No random movie available</div>;
  }

  const { title, genre, director, year } = props.randomMovie;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default RandomMovie;
