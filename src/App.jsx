/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//5ea9ca27
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5ea9ca27";

const movie1 = {
  Title: "Spider-Man Title Reveal",
  Year: "2021",
  imdbID: "tt14122734",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Hulk");
  }, []);

  return (
    <div className="app">
      <h1>Bioskop</h1>

      <div className="search">
        <input
          value="Superman"
          placeholder="Search for a movie..."
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search icon" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
