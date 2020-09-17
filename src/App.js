import React from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails/MovieDetails";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieDetails id={"5f6383999367c500224174ba"} />
      </div>
    );
  }
}

export default App;
