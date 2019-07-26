import React, { Component } from "react";
import {
  Table,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";
import { withRouter } from "react-router-dom";
// Services
import ArtistService from "../../services/artist.service";
// Assets
import noImageAvailable from "../../assets/noimage.jpg";
// Components
import Spinner from "../General/Spinner";
import Container from "../General/Container";
// Styles
import styles from "./styles.css";// eslint-disable-line

class SearchArtists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      name: "",
      requesting: false
    };
  }

  renderRow = artist => {
    return (
      <tr
        onClick={() => this.handleClickTr(artist.id)}
        key={artist.id}
        style={{ cursor: "pointer" }}
      >
        <td className="middle" key={`image-${artist.id}`}>
          {
            <img
              alt="img"
              className="image"
              src={
                artist.images && artist.images.length
                  ? artist.images[0].url
                  : noImageAvailable
              }
            />
          }
        </td>
        <td className="middle">{artist.name}</td>
        <td className="middle">
          {artist.followers ? artist.followers.total : 0}
        </td>
        <td className="middle">{artist.genres.join(", ")}</td>
        <td className="middle">{artist.popularity}</td>
        <td className="middle">{artist.uri}</td>
      </tr>
    );
  };

  handleClickTr = id => {
    const { history } = this.props; // eslint-disable-line
    history.push(`/artist/${id}`); // eslint-disable-line
  };

  search = async () => {
    const { name } = this.state;
    this.setState({ requesting: true });
    const res = await ArtistService.searchArtistsByName(name).catch(e => {
      console.log("error====> ", e); // eslint-disable-line
      this.setState({ requesting: false });
    }); // need to manage errors

    if (res && res.status === 200) {
      this.setState({
        artists:
          res.data && res.data.artists && res.data.artists.items
            ? res.data.artists.items
            : [],
        requesting: false
      });
    }
  };

  onChange = evt => {
    this.setState({ name: evt.target.value });
  };

  render() {
    const { artists, name, requesting } = this.state;
    const small = { size: 4, offset: 8 };
    const big = { size: 3, offset: 9 };

    return (
      <Container>
        <Row style={{ marginBottom: "20px" }}>
          <Col xs={small} sm={small} md={small} lg={big} xl={big}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button onClick={this.search}>Search</Button>
              </InputGroupAddon>
              <Input
                onChange={this.onChange}
                value={name}
                placeholder="Search artists..."
              />
            </InputGroup>
          </Col>
        </Row>
        {requesting && <Spinner />}

        {artists && artists.length ? (
          <Table
            dark
            responsive
            hover
            style={{ backgroundColor: "transparent" }}
          >
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>Followers</th>
                <th>Genres</th>
                <th>Popularity</th>
                <th>Spotify URI</th>
              </tr>
            </thead>
            <tbody>{artists.map(artist => this.renderRow(artist))}</tbody>
          </Table>
        ) : (
          <p style={{ color: "white" }}>Search Artists in Spotify</p>
        )}
      </Container>
    );
  }
}

export default withRouter(SearchArtists);
