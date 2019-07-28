import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
// Components
import Home from "./Home";
import SearchArtists from "./SearchArtists";
import SearchTracks from "./SearchTracks";
import Artist from "./Artist";
import Album from "./Album";

export default class Main extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search-artists" component={SearchArtists} />
        <Route path="/artist/:artistId" component={Artist} />
        <Route path="/search-tracks" component={SearchTracks} />
        <Route path="/album/:albumId" component={Album} />
      </Switch>
    );
  }
}
