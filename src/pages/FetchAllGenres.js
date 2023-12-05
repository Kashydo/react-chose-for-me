export default function FetchAllGenres(setState) {
    fetch("https://localhost:5001/api/genres")
      .then((response) => response.json())
  
      .then((data) => {
        console.log("Gatunki z API:", data);
  
        if (data && Array.isArray(data) && data.length > 0) {
          setState((prevState) => ({ ...prevState, genres: data }));
        } else {
          console.error("Otrzymane dane są nieprawidłowe:", data);
        }
      })
  
      .catch((error) => console.error("Błąd fetch:", error));
  }
  