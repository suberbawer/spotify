import React, { Component } from "react";
import { Row } from "reactstrap";
// Services
import ArtistService from "../../services/artist.service";
// Components
import Spinner from "../General/Spinner";
import Container from "../General/Container";
import Grid from "../General/Grid";
import Header from "../General/Header";
// Assets
import noImage from "../../assets/noimage.jpg";

export default class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: null,
      tracks: null,
      artist: null,
      requesting: true
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props; // eslint-disable-line
    let albums;
    let tracks;
    let artist;
    // Get albums
    let res = await ArtistService.getArtistAlbums(params.artistId).catch(e => {
      console.log("error retrieving albums", e); // eslint-disable-line
    });

    if (res && res.status === 200) {
      albums = res.data && res.data.items ? res.data.items : null;
    }
    // Get top tracks
    res = await ArtistService.getTopTracks(params.artistId).catch(e => {
      console.log("error retrieving top tracks ", e); // eslint-disable-line
    });

    if (res && res.status === 200) {
      tracks = res.data && res.data.tracks ? res.data.tracks : null;
    }
    // Get Artist
    res = await ArtistService.getArtist(params.artistId).catch(e => {
      console.log("error retrieving artist: ", e);
    });

    if (res && res.status === 200) {
      artist = res.data;
    }

    this.setState({
      albums,
      tracks,
      artist,
      requesting: false
    });
  }

  render() {
    const { tracks, albums, requesting, artist } = this.state;

    return (
      <Container>
        {requesting && <Spinner />}

        {artist && (
          <Header
            imageUrl={artist.images ? artist.images[0].url : noImage}
            type="ARTIST"
            title={artist.name}
            followers={artist.followers.total}
          />
        )}

        {tracks && (
          <Row>
            <h5 className="titles">Popular</h5>
            <Grid elements={tracks} track />
          </Row>
        )}

        {albums && (
          <Row>
            <h5 className="titles">Albums</h5>
            <Grid elements={albums} />
          </Row>
        )}
      </Container>
    );
  }
}
