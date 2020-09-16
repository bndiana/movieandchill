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
  if (isFavorite) {
    localStorage.removeItem(movieItem._id);
  } else {
    localStorage.setItem(movieItem._id, JSON.stringify({movieItem}));
  }
};
