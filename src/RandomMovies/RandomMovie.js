import React from "react";

export default function RandomMovie({ movie }) {
  if (!movie) {
    return <div>No random movie available</div>;
  }
  console.log("Random movie: ", movie);
  return (
    <div className={movie.id}>
      <h2>
        {movie.title} {movie.year}
      </h2>
    </div>
  );
}
