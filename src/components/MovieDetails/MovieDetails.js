import React, { Component } from "react";
import "./MovieDetails.css";
import { ReactComponent as Star } from "./svgs/star.svg";
import pencil from "./svgs/pencil.svg";
import trash from "./svgs/trash.svg";
import { FavoriteButton } from "../Favorites/FavoriteButton";

class MovieDetails extends Component {
  state = {
    loading: true,
    movie: null,
    errorMessage: null,
    isFavorited: false,
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

  render() {
    const { loading, movie, errorMessage } = this.state;

    if (loading) {
      return <div>loading...</div>;
    } else if (errorMessage) {
      return <div>{errorMessage}</div>;
    } else {
      return (
        <React.Fragment>
          <div className="movie-detail-page-header movie-detail-page">
            <div className="movie-detail-page movie-title">
              <h2>{movie.Title}</h2>
            </div>
            <div className="movie-detail-page movie-star ">
              <Star
                className={this.state.isFavorited ? "movie-star-favorite" : ""}
                width="50px"
                height="50px"
              />
            </div>
          </div>

          <div className="movie-detail-page movie-poster">
            <img src={movie.Poster} alt="nothing" />
            <div className="movie-runtime"></div>
          </div>

          <div className="movie-detail-page movie-characteritics-bar">
            <h3 className="movie-characteritics-bar movie-year">
              {movie.Year}
            </h3>
            <div className="movie-characteritics-bar movie-numbers">
              <h3 className="movie-numbers movie-rating">{movie.imdbRating}</h3>
              <div className="movie-numbers movie-votes">{movie.imbdVotes}</div>
            </div>
            <h3 className="movie-characteritics-bar movie-genre">
              {movie.Genre.split(",").slice(0, 3).join(", ")}
            </h3>
          </div>

          <div className="movie-detail-page movie-button-bar">
            <FavoriteButton
              isFavorite={this.state.isFavorited}
              checkMovieStorage={this.checkMovieStorage}
              movieItem={this.state.movie}
            />
            <button
              className="movie-button-bar movie-button edit-button"
              id="edit-button"
            >
              <img src={pencil} alt="nothing" />
            </button>
            <button className="movie-button-bar movie-button delete-button">
              <img src={trash} alt="nothing" />
            </button>
          </div>

          <p className="movie-detail-page movie-plot">{movie.Plot}</p>

          <div className="movie-detail-page movie-more-details">
            <p className="movie-more-details movie-language">
              Language: {movie.Language}
            </p>
            <p className="movie-more-details movie-country">
              Country: {movie.Country}
            </p>
            <p className="movie-more-details movie-type">Type: {movie.Type}</p>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MovieDetails;
