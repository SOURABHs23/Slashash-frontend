import React, { useState, useEffect } from "react";
import { getFavourites } from "../services.js";
import MovieCard from "../component/MovieCard.js";

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const movies = await getFavourites();
      setFavourites(movies);
    };
    fetchFavourites();
  }, []);

  return (
    <div>
      <h1>Favourites</h1>
      <div>
        {favourites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
