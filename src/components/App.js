import React, { PureComponent } from "react";
import SearchArtists from "./SearchArtists";

export default class App extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <SearchArtists />
      </div>
    );
  }
}
