export async function FetchMovieDetail(setState, movieId) { // funkcje z małej litery
  const apiUrl = `https://localhost:5001/api/movies/${movieId}/details`;

  let movieDetail;

  try {
    const response = await fetch(apiUrl);
    movieDetail = await response.json();
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }

  if (movieDetail) {
    console.log("Movie detail from Api: ", movieDetail);
    setState((prevState) => ({ ...prevState, selectedMovie: movieDetail }));
  }

  return movieDetail;
}
