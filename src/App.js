import React from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails/MovieDetails";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieDetails id={"5f5f86c4c9711b00220c726a"} />
      </div>
    );
  }
}

export default App;
