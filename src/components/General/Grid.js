import React, { PureComponent } from "react";
import { Col, Row, Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import styles from "./styles.css";// eslint-disable-line
// Assets
import noimage from "../../assets/noimage.jpg";

class Grid extends PureComponent {
  renderArtists = artists => {
    return artists.map(artist => artist.name).join(", ");
  };

  getImage = el => {
    const { track } = this.props;
    let image;

    if (track) {
      image =
        el.album.images && el.album.images.length
          ? el.album.images[0].url
          : noimage;
    } else {
      image = el.images && el.images.length ? el.images[0].url : noimage;
    }
    return image;
  };

  handleClick = el => {
    const { track, history } = this.props; // eslint-disable-line
    const albumId = track ? el.album.id : el.id;
    history.push(`/album/${albumId}`); // eslint-disable-line
  };

  render() {
    const { elements, track } = this.props;

    return (
      <Container fluid>
        <Row>
          {elements.map(el => {
            return (
              <Col
                xs="6"
                sm="6"
                md="6"
                lg="3"
                xl="3"
                className="grid-element"
                key={el.id}
                onClick={() => this.handleClick(el)}
              >
                <Row>
                  <div style={track ? { width: "50px" } : {}}>
                    <img
                      alt="img"
                      className={track ? "track-img" : "album-img"}
                      src={this.getImage(el)}
                    />
                  </div>
                  <Col className="grid-info-col">
                    <Row
                      className="grid-info-row"
                      style={{ color: "white", marginBottom: "5px" }}
                    >
                      {el.name}
                    </Row>
                    <Row className="grid-info-row" style={{ color: "gray" }}>
                      {el.artists ? this.renderArtists(el.artists) : ""}
                    </Row>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

Grid.propTypes = {
  elements: PropTypes.array.isRequired, // eslint-disable-line
  track: PropTypes.bool
};

Grid.defaultProps = {
  track: false
};

export default withRouter(Grid);
