import React, { Component } from "react";
import { ReactComponent as Trash } from "../MovieDetails/svgs/trash.svg";

class DeleteButton extends Component {
  handleDeleteFromFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter((e) => e._id !== this.props.idForDelete);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  deleteMovie = () => {
    const deleteMovie = {
      method: "DELETE",
      headers: {
        "x-auth-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    };
    fetch(
      `https://movies-app-siit.herokuapp.com/movies/${this.props.idForDelete}`,
      deleteMovie
    )
      .then((res) => {
        if (res.ok) {
          this.handleDeleteFromFavorites();
          window.location.pathname = "/";
        } else {
          throw new Error("Something went wrong!");
        }
      })
      .catch((error) => window.alert(error.message));
  };

  render() {
    return (
      <button
        className="movie-button-bar movie-button delete-button"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this movie?"))
            this.deleteMovie();
        }}
      >
        <Trash width="60px" height="20px" />
      </button>
    );
  }
}

export default DeleteButton;
