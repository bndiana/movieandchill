import React, { Component } from "react";
import { Form } from "../utils/Form.js";
import MovieList from "../MovieList/MovieList.js";
// import "./GeneralSearch.css";
const appendQuery = require("append-query");

class GeneralSearch extends Component {
  state = { movie: [] };
  searchMovie = (data) => {
    let url = "https://movies-app-siit.herokuapp.com/movies";

    url = appendQuery(url, data, { removeNull: true });

    console.log(url);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((json) => {
        this.setState({ movie: json.results });
      })
      .catch((error) => {});
  };

  render() {
    const data = {
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
    };
    console.log(this.state.movie);
    return (
      <div className="general-search-content">
        <div className="form">
          <Form
            data={data}
            buttonInnerText="Search"
            onSubmit={this.searchMovie}
          />
        </div>
        <div className="movie-list"><MovieList data={this.state.movie} /></div>
        
      </div>
    );
  }
}

export default GeneralSearch;
