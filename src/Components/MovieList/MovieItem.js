import React from "react";
import "./MovieItem.css";

export default function MovieItem(props) {
  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img src={props.item.Poster} alt="la" />
      </div>
      <div className="movie-card-details">
        <h3 id="movie-title">{props.item.Title}</h3>
        <p id="movie-year">{props.item.Year}</p>
      </div>
    </div>
  );
}
