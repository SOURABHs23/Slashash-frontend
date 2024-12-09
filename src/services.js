import axios from "axios";

const BASE_URL = "http://localhost:5000";
const OMDB_API_KEY = "f96c6f3";

export const searchMovies = async (query) => {
  try {
    console.log(query);
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${query}&apikey=${OMDB_API_KEY}`
    );
    console.log(response.data.Search);
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const addFavourite = async (movie) => {
  try {
    console.log(movie);
    await axios.post(`${BASE_URL}/favourites`, movie);
  } catch (error) {
    console.error("Error adding to favourites:", error);
  }
};

export const getFavourites = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/favourites`);
    return response.data;
  } catch (error) {
    console.error("Error fetching favourites:", error);
    return [];
  }
};
