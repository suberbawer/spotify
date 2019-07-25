import React, { Component } from "react";
import {
  Container,
  Table,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";
// Services
import ArtistService from "../../services/artist.service";
// Assets
import noImageAvailable from "../../assets/noimage.jpg";
// Components
import Spinner from "../General/Spinner";

export default class SearchArtists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      name: ""
    };
  }

  renderRow = artist => {
    return (
      <tr key={artist.id}>
        <td key={`image-${artist.id}`}>
          {
            <img
              alt="img"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
              src={
                artist.images && artist.images.length
                  ? artist.images[0].url
                  : noImageAvailable
              }
            />
          }
        </td>
        <td key={`name-${artist.id}`}>{artist.name}</td>
        <td key={`follow-${artist.id}`}>
          {artist.followers ? artist.followers.total : 0}
        </td>
        <td key={`genre-${artist.id}`}>{artist.genres.join(",")}</td>
        <td key={`popular-${artist.id}`}>{artist.popularity}</td>
        <td key={`uri-${artist.id}`}>{artist.uri}</td>
      </tr>
    );
  };

  search = async () => {
    const { name } = this.state;
    this.setState({ requesting: true });
    const res = await ArtistService.searchArtistsByName(name).catch(e => {
      console.log("error====> ", e);
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
      <Container fluid>
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
          <Table dark responsive hover>
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
          <p>Search Artists in Spotify</p>
        )}
      </Container>
    );
  }
}
