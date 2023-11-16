import React, { Component } from "react";
import MovieDetail from "./MovieDetail";

class FetchMovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetail: null,
    };
  }

  loadMovieDetail() {
    const { movieId } = this.props;

    console.log("Fetching movie details...");

    fetch(`https://localhost:5001/api/movies/${movieId}/details`)
      .then((response) => {
        console.log("Raw response:", response);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received movie details:", data);
        this.setState({ movieDetail: data });
      })
      .catch((error) => console.error("Error fetching movie details:", error));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show && this.props.show) {
      this.loadMovieDetail();
    }
  }

  render() {
    const { movieDetail } = this.state;

    return (
      <>
        {movieDetail && Object.keys(movieDetail).length > 0 && (
          <MovieDetail
            movieId={this.props.movieId}
            movieDetail={movieDetail}
            onHide={this.props.onHide}
          />
        )}
      </>
    );
  }
}

export default FetchMovieDetail;
