import React, { Component } from "react";
import RandomMovie from "./RandomMovie";

class RandomMovieButton extends Component {
  constructor() {
    super();
    this.state = {
      randomMovie: null,
    };
  }

  handleRandomClick = () => {
    this.loadRandomMovie();
  };

  loadRandomMovie() {
    console.log("Przed fetch");
    fetch("https://localhost:5001/api/movies/randommovie?count=1")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dane z API:", data);
        if (data && Array.isArray(data) && data.length > 0) {
          this.setState({ randomMovie: data[0] });
          console.log("Po ustawieniu stanu:", this.state.randomMovie);
        } else {
          console.error("Otrzymane dane są nieprawidłowe:", data);
        }
      })
      .catch((error) => console.error("Błąd fetch:", error));
  }

  componentDidMount() {
    this.loadRandomMovie();
  }

  render() {
    console.log(this.state.randomMovie);

    return (
      <div>
        <button onClick={this.handleRandomClick}>Get Random Movie</button>
        <RandomMovie randomMovie={this.state.randomMovie} />
      </div>
    );
  }
}

export default RandomMovieButton;
