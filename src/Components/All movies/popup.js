import React from "react";
import "./allmovies.css";

class Popup extends React.Component {
  state = {
    Title: "",
    Year: "",
    Runtime: "",
    Genre: "",
    Language: "",
    Country: "",
    Poster: "",
    imdbRating: "",
    imdbID: "",
    Type: "",
  };
  handleAddMovie = () => {
    fetch("https://movies-app-siit.herokuapp.com/movies", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        Title: this.state.Title,
        Year: this.state.Year,
        Runtime: this.state.Runtime,
        Genre: this.state.Genre,
        Language: this.state.Language,
        Country: this.state.Country,
        Poster: this.state.Poster,
        imdbRating: this.state.imdbRating,
        imdbID: this.state.imdbID,
        Type: this.state.Type,
      }),
    })
      .then((res) => {
        if (res.ok) {
          window.location.pathname = "/Allmovies";
        }
      })
      .then((json) => {
        console.log(json);
      });
  };
handleChangeTitle=(e)=>{
  this.setState({Title:e.target.value});
}
handleChangeYear = (e) => {
  this.setState({ Year: e.target.value });
}
handleChangeRuntime = (e) => {
  this.setState({ Runtime: e.target.value });
}
handleChangeGenre = (e) => {
  this.setState({ Genre: e.target.value });
}
handleChangeLanguage = (e) => {
  this.setState({ Language: e.target.value });
}
handleChangeCountry = (e) => {
  this.setState({ Country: e.target.value });
}
handleChangePoster = (e) => {
  this.setState({ Poster: e.target.value });
}
handleChangeImdbRating=(e)=>{
  this.setState({imdbRating:e.target.value});
}
handleChangeImdbID = (e) => {
  this.setState({imdbID: e.target.value });
}
handleChangeType = (e) => {
  this.setState({ Type: e.target.value });
}
  render() {
    return (
      <div className="popup">
        <button id="close-popup-button" onClick={this.props.closePopup}>
          X
        </button>
        <div className="inner-popup">
          <h1 className="popup-addmovie-title">Add movie</h1>
          <div className="addmovie-popup-container">
            <label>Title</label>
            <input
              className="addmovie-popup-field"
              type="Title"
              name="title"
              placeholder="title"
              onChange={this.handleChangeTitle}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>Year</label>
            <input
              className="addmovie-popup-field"
              type="year"
              name="year"
              placeholder="year"
              onChange={this.handleChangeYear}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>Runtime</label>
            <input
              className="addmovie-popup-field"
              type="runtime"
              name="runtime"
              placeholder="runtime"
              onChange={this.handleChangeRuntime}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>Genre</label>
            <input
              className="addmovie-popup-field"
              type="genre"
              name="genre"
              placeholder="genre"
              onChange={this.handleChangeGenre}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>Language</label>
            <input
              className="addmovie-popup-field"
              type="language"
              name="language"
              placeholder="language"
              onChange={this.handleChangeLanguage}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>Country</label>
            <input
              className="addmovie-popup-field"
              type="country"
              name="country"
              placeholder="country"
              onChange={this.handleChangeCountry}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>Poster</label>
            <input
              className="addmovie-popup-field"
              type="poster"
              name="poster"
              placeholder="poster"
              onChange={this.handleChangePoster}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>imdbRating</label>
            <input
              className="addmovie-popup-field"
              type="imdbRating"
              name="imdbRating"
              placeholder="imdbRating"
              onChange={this.handleChangeImdbRating}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>imdbID</label>
            <input
              className="addmovie-popup-field"
              type="imdbID"
              name="imdbID"
              placeholder="imdbID"
              onChange={this.handleChangeImdbID}
            ></input>
          </div>
          <div className="addmovie-popup-container">
            <label>Type</label>
            <input
              className="addmovie-popup-field"
              type="type"
              name="type"
              placeholder="type"
              onChange={this.handleChangeType}
            ></input>
          </div>
        </div>
        <div className="button-addmovie-popup-container">
          <button
            className="button-addmovie-popup"
            onClick={this.handleAddMovie}
          >
            {" "}
            Add movie
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
