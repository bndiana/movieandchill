import React from "react";
import "../MovieDetails/MovieDetails.css";
import { ReactComponent as Pencil } from "../MovieDetails/svgs/pencil.svg";

export function EditButton() {

  return (
    <button
      className="movie-button-bar movie-button edit-button"
      id="edit-button"
      onClick={() => console.log("Diana")}
    >
      <Pencil width="60px" height="20px" />
    </button>
  );
}
