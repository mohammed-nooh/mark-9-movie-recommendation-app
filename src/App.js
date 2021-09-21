import { useState } from "react";
import "./styles.css";

var movies = {
  Action: [
    {
      name: "John Wick",
      description:
        "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      rating: "5/5"
    },
    {
      name: "Undisputed",
      description:
        "When heavyweight champion George Iceman Chambers lands in prison, the resident gangster arranges a boxing match with the reigning prison champ.",
      rating: "4/5"
    },
    {
      name: "Free Guy",
      description:
        "A bank teller discovers that he's actually an NPC(Non Playable Character) inside a brutal, open world video game.",
      rating: "3.5/5"
    },
    {
      name: "The Suicide Squad",
      description:
        "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      rating: "4/5"
    }
  ],
  SciFi: [
    {
      name: "Predestination",
      description:
        "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time. The chase turns into a unique, surprising and mind-bending exploration of love, fate, identity and time travel taboos.",
      rating: "5/5"
    },
    {
      name: "Startrek Beyond",
      description:
        "The crew of the USS Enterprise explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy, who puts them, and everything the Federation stands for, to the test.",
      rating: "4/5"
    },
    {
      name: "The Matrix",
      description:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      rating: "4.5/5"
    },
    {
      name: "Tenet",
      description:
        "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      rating: "4/5"
    }
  ],
  Thriller: [
    {
      name: "The Usual Suspects",
      description:
        "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      rating: "5/5"
    },
    {
      name: "The Guilty",
      description:
        "A demoted police officer assigned to a call dispatch desk is conflicted when he receives an emergency phone call from a kidnapped woman.",
      rating: "3/5"
    },
    {
      name: "No Time to Die",
      description:
        "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      rating: "3.5/5"
    },
    {
      name: "Don't Breathe",
      description:
        "Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn't as helpless as he seems.",
      rating: "4/5"
    }
  ]
};

var movieslist = Object.keys(movies);

export default function App() {
  var [selectedGenre, setselectedGenre] = useState("Action");

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
                <div
                  className="movieHead"
                  key={movie.name}
                  id="output-list-div"
                >
                  {movie.name}
                </div>
                <div key={movie.description} id="output-list-div">
                  {movie.description}
                </div>
                <div key={movie.rating} id="output-list-div">
                  rating: {movie.rating}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
