import React, { Component } from "react";
import { Form } from "../utils/Form.js";
import MovieList from "../MovieList/MovieList.js";
import Pagination from "../utils/Pagination";
import './GeneralSearch.css'
const appendQuery = require("append-query");

class GeneralSearch extends Component {
  state = {
    movie: [],
    pagination: null,
    data: {
      Title: null,
      Year: null,
      Runtime: null,
      Genre: null,
      Language: null,
      Country: null,
      Poster: null,
      imdbRating: null,
      imdbVotes: null,
      imdbId: null,
      Type: null,
    },
  };

  searchMovie = (data) => {
    const url = appendQuery(
      "https://movies-app-siit.herokuapp.com/movies",
      data,
      { removeNull: true }
    );
    this.fetchMovie(url);
  };

  fetchMovie = (url) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((json) => {
        this.setState({ movie: json.results, pagination: json.pagination });
      })
      .catch((error) => window.alert(error.message));
  };

  handlePageChange = (direction) => {
    const { prev, next } = this.state.pagination.links;
    switch (direction) {
      case "prev":
        prev && this.fetchMovie(prev);
        break;

      case "next":
        next && this.fetchMovie(next);
        break;

      default:
        break;
    }
  };

  componentDidMount() {
    let urlParams = new URLSearchParams(this.props.location.search);

    let searchItem = { ...this.state.data };
    let entries = urlParams.entries();
    for (const pair of entries) {
      searchItem[pair[0]] = pair[1];
    }
    this.setState({ data: searchItem });
    this.searchMovie(searchItem);
  }

  render() {
    return (
      <div className="general-search-content">
        <div className="form">
          <Form
            data={this.state.data}
            buttonInnerText="Search"
            onSubmit={this.searchMovie}
          />
        </div>
        <div className="movie-list">
          <MovieList data={this.state.movie} />
        </div>
        {this.state.pagination && (
          <Pagination
            currentPage={this.state.pagination.currentPage}
            numberOfPages={this.state.pagination.numberOfPages}
            onPageChange={this.handlePageChange}
          />
        )}
      </div>
    );
  }
}

export default GeneralSearch;
