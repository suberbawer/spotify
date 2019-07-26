import React, { Component } from "react";
// Services
import ArtistService from "../../services/artist.service";
// Components
import Spinner from "../General/Spinner";
import Container from "../General/Container";
import Grid from "../General/Grid";

export default class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      tracks: [],
      requesting: true
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props; // eslint-disable-line
    // Get albums
    let res = await ArtistService.getArtistAlbums(params.artistId).catch(e => {
      console.log("error====> ", e); // eslint-disable-line
      this.setState({ requesting: false });
    });

    if (res && res.status === 200) {
      const albums = res.data && res.data.items ? res.data.items : [];
      // Get top tracks
      res = await ArtistService.getTopTracks(params.artistId).catch(e => {
        console.log("error====> ", e); // eslint-disable-line
        this.setState({ requesting: false });
      });

      if (res && res.status === 200) {
        this.setState({
          albums,
          tracks: res.data && res.data.tracks ? res.data.tracks : [],
          requesting: false
        });
      }
    }
  }

  render() {
    const { tracks, albums, requesting } = this.state;

    return (
      <Container>
        {requesting && <Spinner />}
        <div style={{ marginBottom: "20px" }}>
          <h5 className="titles">Songs</h5>
          <Grid elements={tracks} track />
        </div>
        <div>
          <h5 className="titles">Albums</h5>
          <Grid elements={albums} />
        </div>
      </Container>
    );
  }
}
