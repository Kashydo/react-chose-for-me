export default function FetchMovieDetail(setState, movieId) {
  console.log("Fetching movie details...");

  fetch(`https://localhost:5001/api/movies/${movieId}/details`)
    .then((response) => response.json())

    .then((data) => {
      console.log("Dane z API:", data);

      if (
        data &&
        typeof data === "object" &&
        data.id &&
        data.title &&
        data.year &&
        data.description &&
        data.movieGenres
      ) {
        setState((prevState) => ({ ...prevState, selecteMovie: data }));
      } else {
        console.error("Otrzymane dane są nieprawidłowe:", data);
      }
    })

    .catch((error) => console.error("Błąd fetch:", error));
}
