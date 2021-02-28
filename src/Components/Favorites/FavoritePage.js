import React from "react";
import MovieList from "../MovieList/MovieList";
import "./FavoritePage.css";

export default function FavoritePage() {
  const favoriteMovies = JSON.parse(localStorage.getItem("favorites"));

  return (
    <React.Fragment>
      <div className="favorites-movie-page">
        <h1 className="favorite-page-title">Favorites</h1>
        {favoriteMovies ? (
          <MovieList data={favoriteMovies} />
        ) : (
          <p>No movies</p>
        )}
      </div>
    </React.Fragment>
  );
}
