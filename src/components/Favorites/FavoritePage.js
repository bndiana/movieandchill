import React from "react";
import MovieList from "../MovieList/MovieList";


export default function FavoritePage() {
  const favoriteMovies = JSON.parse(localStorage.getItem("favorites"));

  return (
    <React.Fragment>
      <h1>Favorites</h1>
      {favoriteMovies ? <MovieList data={favoriteMovies}/> : <p>No movies</p>}
      <div className="favorites-movie-page"></div>
    </React.Fragment>
  );
}
