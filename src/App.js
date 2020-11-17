import React, { Component } from "react";
import "./App.css";
import Favourite from "./Favourite";
import Home from "./Home";
import Header from "./Header";
import Details from "./Details";
import { BrowserRouter,Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = "/favourite" component = {Favourite} />
          <Route path = "/details" component = {Details} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
