export default function FetchRandomMovies(setState) {
  fetch("https://localhost:5001/api/movies/randommovie?count=3")
    .then((response) => response.json())

    .then((data) => {
      console.log("Dane z API:", data);

      if (data && Array.isArray(data) && data.length > 0) {
        setState((prevState) => ({ ...prevState, movies: data }));
      } else {
        console.error("Otrzymane dane są nieprawidłowe:", data);
      }
    })

    .catch((error) => console.error("Błąd fetch:", error));
}
