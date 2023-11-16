// RandomMovieButton.js
import React, { Component } from "react";
import RandomMovie from "./RandomMovie";

class RandomMovieButton extends Component {
  constructor() {
    super();
    this.state = {
      randomMovies: [],
    };
  }

  handleRandomClick = () => {
    this.loadRandomMovies();
  };

  loadRandomMovies() {
    fetch("https://localhost:5001/api/movies/randommovie?count=3")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          this.setState({ randomMovies: data });
        } else {
          console.error("Otrzymane dane są nieprawidłowe:", data);
        }
      })
      .catch((error) => console.error("Błąd fetch:", error));
  }

  componentDidMount() {
    this.loadRandomMovies();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRandomClick}>Get Random Movies</button>
        <br />
        {this.state.randomMovies.map((movie, index) => (
          <RandomMovie key={index} randomMovie={movie} />
        ))}
      </div>
    );
  }
}

export default RandomMovieButton;
