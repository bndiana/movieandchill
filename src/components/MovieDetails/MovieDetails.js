import React, { Component } from "react";
import "./MovieDetails.css";
import { ReactComponent as Star } from "./svgs/star.svg";
import { FavoriteButton } from "../Favorites/FavoriteButton";
import DeleteButton from "../Delete/DeleteButton";
import Cookies from "js-cookie";
import { EditButton } from "../Edit/EditButton";

class MovieDetails extends Component {
  state = {
    loading: true,
    movie: null,
    errorMessage: null,
    isFavorited: false,
    loggedIn: Cookies.get("authToken"),
  };

  componentDidMount() {
    const url = `https://movies-app-siit.herokuapp.com/movies/${this.props.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((json) => {
        this.setState({
          loading: false,
          movie: json,
        });
        this.checkMovieStorage();
      })
      .catch((error) => {
        this.setState({
          loading: false,
          errorMessage: error.message,
        });
      });
  }

  checkMovieStorage = () => {
    if (localStorage.getItem(this.state.movie._id) != null) {
      this.setState({ isFavorited: true });
    } else {
      this.setState({ isFavorited: false });
    }
  };

  dummyLogIn = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "victor",
        password: "victor",
      }),
    };
    fetch("https://movies-app-siit.herokuapp.com/auth/login", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        Cookies.set("authToken", res.accessToken);
      });
  };

  render() {
    const { loading, movie, errorMessage } = this.state;

    if (loading) {
      return <div>loading...</div>;
    } else if (errorMessage) {
      return <div>{errorMessage}</div>;
    } else {
      return (
        <React.Fragment>
          <div className="page-content">
            <div className="movie-detail-page-header movie-detail-page">
              <div className="movie-detail-page movie-title">
                {movie.Title && <h2>{movie.Title}</h2>}
              </div>
              {this.state.loggedIn && (
                <div className="movie-detail-page movie-star ">
                  <Star
                    className={
                      this.state.isFavorited ? "movie-star-favorite" : ""
                    }
                    width="50px"
                    height="50px"
                  />
                </div>
              )}
            </div>

            <div className="movie-detail-page movie-poster">
              {movie.Poster && <img src={movie.Poster} alt="nothing" />}
              <div className="movie-runtime"></div>
            </div>

            <div className="movie-detail-page movie-characteritics-bar">
              {movie.Year && (
                <h3 className="movie-characteritics-bar-square movie-year">
                  {movie.Year}
                </h3>
              )}
              <div className="movie-characteritics-bar-square movie-numbers">
                {movie.imdbRating && (
                  <h3 className="movie-numbers movie-rating">
                    {movie.imdbRating}
                  </h3>
                )}
                {movie.imbdVotes && (
                  <h3 className="movie-numbers movie-votes">
                    {movie.imbdVotes}
                  </h3>
                )}
              </div>
              {movie.Genre && (
                <h3 className="movie-characteritics-bar-square movie-genre">
                  {movie.Genre.split(",").slice(0, 3).join(", ")}
                </h3>
              )}
            </div>

            {this.state.loggedIn && (
              <div className="movie-detail-page movie-button-bar">
                <FavoriteButton
                  isFavorite={this.state.isFavorited}
                  checkMovieStorage={this.checkMovieStorage}
                  movieItem={this.state.movie}
                />
                <EditButton />
                <DeleteButton idForDelete={this.props.id} />
              </div>
            )}

            {movie.Plot && (
              <p className="movie-detail-page movie-plot">
                <button onClick={this.dummyLogIn}>Log in</button> {movie.Plot}
              </p>
            )}

            <div className="movie-detail-page movie-more-details">
              {movie.Language && (
                <p className="movie-more-details movie-language">
                  Language: {movie.Language}
                </p>
              )}
              {movie.Country && (
                <p className="movie-more-details movie-country">
                  Country: {movie.Country}
                </p>
              )}
              {movie.Type && (
                <p className="movie-more-details movie-type">
                  Type: {movie.Type}
                </p>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MovieDetails;
