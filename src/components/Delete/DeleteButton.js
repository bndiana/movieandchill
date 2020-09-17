import React, { Component } from "react";
import { ReactComponent as Trash } from "../MovieDetails/svgs/trash.svg";
import Cookies from "js-cookie";

class DeleteButton extends Component {
  deleteMovie = () => {
    const deleteMovie = {
      method: "DELETE",
      headers: {
        "x-auth-token": Cookies.get("authToken"),
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      method: "DELETE",
    };
    fetch(
      `https://movies-app-siit.herokuapp.com/movies/${this.props.idForDelete}`,
      deleteMovie
    )
      .then((response) => response.json())
      .then((res) => {});
  };

  render() {
    return (
      <button
        className="movie-button-bar movie-button delete-button"
        onClick={this.deleteMovie}
      >
        <Trash width="60px" height="20px" />
      </button>
    );
  }
}

export default DeleteButton;
