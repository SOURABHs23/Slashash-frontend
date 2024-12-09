import React, { useState } from "react";
import { searchMovies, addFavourite } from "../services.js";
import MovieCard from "../component/MovieCard.js";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    setResults(movies);
  };

  const handleAddFavourite = async (movie) => {
    await addFavourite(movie);
    alert("Added to favourites!");
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies or TV shows"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavourite={handleAddFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
