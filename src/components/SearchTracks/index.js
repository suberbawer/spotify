import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// Services
import TrackService from "../../services/track.service";
// Assets
import noImageAvailable from "../../assets/noimage.jpg";
// Components
import Spinner from "../General/Spinner";
import Container from "../General/Container";
import Search from "../General/Search";
import ListItems from "../General/ListItems";

class SearchTracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      requesting: false
    };
  }

  renderRow = track => {
    return (
      <tr
        onClick={() => this.handleClickTr(track.album.id)}
        key={track.id}
        style={{ cursor: "pointer" }}
      >
        <td className="middle" key={`image-${track.id}`}>
          {
            <img
              alt="img"
              className="image"
              src={
                track.album.images && track.album.images.length
                  ? track.album.images[0].url
                  : noImageAvailable
              }
            />
          }
        </td>
        <td className="middle">{track.album.name}</td>
        <td className="middle">{track.name}</td>
        <td className="middle">{this.getDuration(track.duration_ms)}</td>
        <td className="middle">{track.album.release_date}</td>
        <td className="middle">{track.popularity}</td>
      </tr>
    );
  };

  getDuration = ms => {
    let ret = "";
    if (ms) {
      const time = parseInt(ms, 10) / 1000;
      const minutes = Math.floor(time / 60);
      let seconds = Math.floor(time - minutes * 60);
      seconds = seconds.toString().length === 1 ? `${seconds}0` : seconds;
      ret = `${minutes}:${seconds}`;
    }

    return ret.toString();
  };

  handleClickTr = id => {
    const { history } = this.props; // eslint-disable-line
    history.push(`/album/${id}`); // eslint-disable-line
  };

  search = async name => {
    this.setState({ requesting: true });
    const res = await TrackService.searchTracksByName(name).catch(e => {
      console.log("error searching tracks by name ", e); // eslint-disable-line
      this.setState({ requesting: false, tracks: [] });
    }); // need to manage errors

    if (res && res.status === 200) {
      this.setState({
        tracks:
          res.data && res.data.tracks && res.data.tracks.items
            ? res.data.tracks.items
            : [],
        requesting: false
      });
    }
  };

  render() {
    const { tracks, requesting } = this.state;

    return (
      <Container>
        <Search placeholder="Search tracks..." search={this.search} />

        {requesting && <Spinner />}

        <ListItems
          items={tracks}
          titles={[
            "",
            "Album",
            "Title",
            "Duration",
            "Release Date",
            "Popularity"
          ]}
          emptyMessage="Find your favorite tracks"
          renderRow={this.renderRow}
        />
      </Container>
    );
  }
}

export default withRouter(SearchTracks);
