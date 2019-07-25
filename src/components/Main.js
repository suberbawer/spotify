import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
// Components
import Home from "./Home";
import SearchArtists from "./SearchArtists";
import Artist from "./Artist";

export default class Main extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchArtists} />
        <Route path="/artist/:artistId" component={Artist} />
      </Switch>
    );
  }
}
