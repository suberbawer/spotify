import React, { PureComponent } from "react";
import { Col, Row, Container } from "reactstrap";
import PropTypes from "prop-types";
// Styles
import styles from "./styles.css";// eslint-disable-line
// Assets
import noimage from "../../assets/noimage.jpg";

export default class Grid extends PureComponent {
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

  render() {
    const { elements } = this.props;

    return (
      <Container fluid>
        <Row>
          {elements.map(el => {
            return (
              <Col xs="6" sm="6" md="6" lg="3" style={{ marginBottom: "10px" }}>
                <Row>
                  <div style={{ width: "50px" }}>
                    <img alt="img" className="image" src={this.getImage(el)} />
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
