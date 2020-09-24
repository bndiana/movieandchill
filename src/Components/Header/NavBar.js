import React, { Component } from "react";
import DropdownMenu from "../Main-up-section/DropdownMenu";
import Searchbar from "./Searchbar";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import "./../../App.css";
import movieandchillPhoto from './movieandchill.png';


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
          <div className="img-container">
            <Link className='Logo-img-container' to="/" style={{ textDecoration: "none"}}>
              <img className="theater" src={movieandchillPhoto} alt="batman" />
            </Link>
            <DropdownMenu />
            <Searchbar />

            {this.state.isLoggedIn ? (
              <Profile />
            ) : (
              <Link
                to="/Login"
                style={{ textDecoration: "none" }}
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
