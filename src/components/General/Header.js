import React, { PureComponent } from "react";
import { Col, Row } from "reactstrap";
import PropTypes from "prop-types";
// Assets
import noImage from "../../assets/noimage.jpg";

export default class Header extends PureComponent {
  formatFollowers = () => {
    const { followers } = this.props;
    return followers.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  render() {
    const { imageUrl, type, title, name, extraInfo, followers } = this.props;
    const mainStyle = { width: "100%", paddingTop: "40px" };

    return (
      <Row>
        <Row
          style={
            followers
              ? { ...mainStyle, paddingLeft: "15px" }
              : { ...mainStyle, paddingLeft: "40px" }
          }
        >
          <div style={{ width: "200px", textAlign: "center" }}>
            <img
              alt="album"
              style={{
                marginBottom: "10px",
                height: "200px",
                width: "200px"
              }}
              src={imageUrl || noImage}
            />
          </div>
          <Col
            style={{
              color: "#fff",
              alignItems: "flex-end",
              display: "flex"
            }}
          >
            <div style={{ padding: "15px", width: "100%" }}>
              <Row style={{ fontSize: "12px", opacity: "0.8" }}>{type}</Row>
              <Row style={{ fontSize: "40px", fontWeight: "700" }}>{title}</Row>
              {name && (
                <Row>
                  <span>
                    <span style={{ color: "gray" }}>By </span>
                    {name}
                  </span>
                </Row>
              )}
              {extraInfo && <Row style={{ color: "gray" }}>{extraInfo}</Row>}
              {followers && (
                <Row style={{ justifyContent: "flex-end" }}>
                  <span style={{ color: "gray" }}>
                    {`${this.formatFollowers()} followers`}
                  </span>
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </Row>
    );
  }
}

Header.propTypes = {
  imageUrl: PropTypes.string,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  extraInfo: PropTypes.string,
  followers: PropTypes.number
};

Header.defaultProps = {
  imageUrl: "",
  extraInfo: "",
  followers: null,
  name: ""
};
