import { useState } from "react";
import "./styles.css";

var movies = {
  action: [
    { name: "John Wick", rating: "5/5" },
    {
      name: "Undisputed",
      rating: "4/5"
    }
  ],
  scifi: [
    {
      name: "Predestination",
      rating: "5/5"
    },
    {
      name: "Startrek",
      rating: "4/5"
    }
  ],
  drama: [
    {
      name: "The Usual Suspects",
      rating: "5/5"
    },
    {
      name: "Shawshank",
      rating: "3/5"
    }
  ]
};

var movieslist = Object.keys(movies);

export default function App() {
  var [selectedGenre, setselectedGenre] = useState("action");

  function clickHandler(genre) {
    selectedGenre = genre;
    setselectedGenre(selectedGenre);
    console.log(selectedGenre);
  }

  return (
    <div className="App">
      <h1>
        <span>🎥︁</span>Movie Recommendations
      </h1>

      <div id="button-div">
        {movieslist.map((genre) => {
          return (
            <button
              onClick={() => clickHandler(genre)}
              key={genre}
              id="button-item"
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div id="output-div">
        <ul id="output-list">
          {movies[selectedGenre].map((movie) => {
            return (
              <li key={movie} id="output-list-item">
                <div key={movie.name} id="output-list-div">
                  {movie.name}
                </div>
                <div key={movie.rating} id="output-list-div">
                  {movie.rating}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
