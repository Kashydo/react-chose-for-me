import React, { Component } from "react";
import RandomMovie from "./RandomMovie";

class RandomMovieButton extends Component {
  constructor() {
    super();
    this.state = {
      randomMovies: null,
    };
  }

  handleRandomClick = () => {
    this.loadRandomMovies();
  };

  loadRandomMovies() {
    console.log("Przed fetch");
    fetch("https://localhost:5001/api/movies/randommovie?count=3")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dane z API:", data);
        if (data && Array.isArray(data) && data.length > 0) {
          this.setState({ randomMovies: [] });
          this.setState({ randomMovies: data });
          console.log("Po ustawieniu stanu:", this.state.randomMovies);
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
    console.log(this.state.randomMovies);

    return (
      <div>
        <button onClick={this.handleRandomClick}>Get Random Movie</button>
        <br />
        {this.state.randomMovies &&
          this.state.randomMovies.map((movie, index) => (
            <RandomMovie key={index} randomMovie={movie} />
          ))}
      </div>
    );
  }
}

export default RandomMovieButton;
