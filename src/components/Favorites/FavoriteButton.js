import React from "react";
import "../MovieDetails/MovieDetails.css";
import { ReactComponent as Favorite } from "../MovieDetails/svgs/favorite.svg";

export function FavoriteButton(props) {
  return (
    <button
      className="movie-button-bar movie-button fav-button"
      onClick={() => {
        handleAddToFavorites(props.isFavorite, props.movieItem);
        props.checkMovieStorage();
      }}
    >
      <Favorite width="60px" height="20px" />
    </button>
  );
}

const handleAddToFavorites = (isFavorite, movieItem) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (isFavorite) {
    favorites = favorites.filter((e) => e._id !== movieItem._id);
  } else {
    favorites.push(movieItem);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
