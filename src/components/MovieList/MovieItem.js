import React from "react";
import "./MovieItem.css"

export default function MovieItem(props) {
  return (
    <div className="movie-card">
      <img src={props.item.Poster} alt="la" />
      <p>{props.item.Title}</p>
      <div className="movie-card-details">
        <p>{props.item.Year}</p>
      </div>
    </div>
  );
}
