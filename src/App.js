import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./page/SearchPage.js";
import FavouritesPage from "./page/FavouritesPage.js";

const App = () => {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Search</Link> | <Link to="/favourites">Favourites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
