import React from "react";

const MovieCard = ({ movie, onFavourite }) => (
  <div style={{ margin: "10px", border: "1px solid #ddd", padding: "10px" }}>
    <img
      src={movie.Poster || movie.poster}
      alt={movie.Title || movie.title}
      style={{ width: "100px" }}
    />
    <h3>{movie.Title || movie.title}</h3>
    <p>
      {movie.Year || movie.year} - {movie.Type || movie.type}
    </p>
    {onFavourite && (
      <button onClick={() => onFavourite(movie)}>Add to Favourites</button>
    )}
  </div>
);

export default MovieCard;
