import React, { Component } from "react";
import DropdownMenu from "../Main-up-section/DropdownMenu";
import clapperboard from "./clapperboard.svg";
import Searchbar from "./Searchbar";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import "./../../App.css";
import movieandchill from "./movieandchill.png";

export default class NavBar extends Component {
  state = {
    isLoggedIn: localStorage.getItem("accessToken"),
  };

  componentDidMount() {
    window.addEventListener("storage", () => {
      console.log(this.state.isLoggedIn, localStorage.getItem("accessToken"));
      this.setState({ isLoggedIn: localStorage.getItem("accessToken") });
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="App">
          <img
            src={movieandchill}
            className="movie-and-chill-page"
            alt="nothing"
          />

          <div className="img-container">
            <Link to="/" style={{ textDecoration: "none", marginTop: "10px" }}>
              <img className="theater" src={clapperboard} alt="batman" />
            </Link>
            <DropdownMenu />
            <Searchbar />

            {this.state.isLoggedIn ? (
              <Profile />
            ) : (
              <Link
                to="/Login"
                style={{ textDecoration: "none", marginTop: "20px" }}
              >
                <LoginButton />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}
