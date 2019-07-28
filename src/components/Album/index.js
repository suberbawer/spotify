import React, { Component } from "react";
import { Col, Row } from "reactstrap";
// Services
import AlbumService from "../../services/album.service";
// Assets
import noImage from "../../assets/noimage.jpg";
// Components
import Spinner from "../General/Spinner";
import Container from "../General/Container";
import ListItems from "../General/ListItems";

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: null,
      requesting: true
    };
  }

  componentDidMount() {
    this.getAlbum();
  }

  renderRow = track => {
    return (
      <tr key={track.id}>
        <td className="middle" style={{ width: "40px" }}>
          {track.track_number}
        </td>
        <td className="middle">{track.name}</td>
        <td className="middle" style={{ width: "50px" }}>
          {this.getDuration(track.duration_ms)}
        </td>
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

  getAlbum = async () => {
    const { match: { params } } = this.props; // eslint-disable-line

    const res = await AlbumService.getAlbum(params.albumId).catch(e => {// eslint-disable-line
      console.log("error retrieving album ", e); // eslint-disable-line
      this.setState({ requesting: false, album: null });
    }); // need to manage errors

    if (res && res.status === 200) {
      this.setState({
        album: res.data,
        requesting: false
      });
    }
  };

  render() {
    const { album, requesting } = this.state;

    return (
      <Container>
        {requesting && <Spinner />}
        {album && (
          <Row>
            <Row style={{ width: "100%" }}>
              <div style={{ width: "150px", textAlign: "center" }}>
                <img
                  alt="album"
                  style={{
                    marginBottom: "10px",
                    height: "150px",
                    width: "150px"
                  }}
                  src={album.images ? album.images[0].url : noImage}
                />
                <span>{album.name}</span>
              </div>
              <Col>
                <Row>information!</Row>
              </Col>
            </Row>

            <ListItems
              items={album.tracks.items}
              titles={["", "Title", "Duration"]}
              renderRow={this.renderRow}
            />
          </Row>
        )}
      </Container>
    );
  }
}

export default Album;
