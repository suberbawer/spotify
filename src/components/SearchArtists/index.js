import React, { Component } from "react";
// import { Table } from "reactstrap";
import { withRouter } from "react-router-dom";
// Services
import ArtistService from "../../services/artist.service";
// Assets
import noImageAvailable from "../../assets/noimage.jpg";
// Components
import Spinner from "../General/Spinner";
import Container from "../General/Container";
import Search from "../General/Search";
import ListItems from "../General/ListItems";
// Styles
import styles from "./styles.css";// eslint-disable-line

class SearchArtists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
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
      </tr>
    );
  };

  handleClickTr = id => {
    const { history } = this.props; // eslint-disable-line
    history.push(`/artist/${id}`); // eslint-disable-line
  };

  search = async name => {
    this.setState({ requesting: true });
    const res = await ArtistService.searchArtistsByName(name).catch(e => {
      console.log("error searching artists by name ", e); // eslint-disable-line
      this.setState({ requesting: false, artists: [] });
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

  render() {
    const { artists, requesting } = this.state;

    return (
      <Container>
        <Search placeholder="Search artists..." search={this.search} />

        {requesting && <Spinner />}

        <ListItems
          items={artists}
          titles={["", "Name", "Followers", "Genres", "Popularity"]}
          emptyMessage="Find your favorite artists"
          renderRow={this.renderRow}
        />
      </Container>
    );
  }
}

export default withRouter(SearchArtists);
