import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import FavoritePage from "./components/Favorites/FavoritePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import GeneralSearch from "./components/GeneralSearch/GeneralSearch";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/movie/:id" component={MovieDetails} />
            <Route exact path="/favorite" component={FavoritePage} />
            <Route exact path="/search" component={GeneralSearch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
