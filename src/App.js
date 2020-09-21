import React from "react";
import "./App.css";
import FavoritePage from "./components/Favorites/FavoritePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/movie/:id" component={MovieDetails} />
            <Route exact path="/favorite" component={FavoritePage} />
          </Switch>
        </div>
      </Router>
    );
  }

}
export default App;