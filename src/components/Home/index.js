import React, { PureComponent } from "react";
import { Container, Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import background from "../../assets/home-background.png";
// Actions
import { toggleTokenModal } from "../../actions";
// Styles
import styles from "./styles.css";// eslint-disable-line

class Home extends PureComponent {
  render() {
    return (
      <Container
        fluid
        className="p-0 background-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className="container-fluid background-image"
          style={{ background: "rgba(0,0,0,0.3)", display: "flex" }}
        >
          <div style={{ color: "#fff", margin: "auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "5rem", fontWeight: "600" }}>
              Music for everyone.
            </h1>
            <h5>Millions of songs. No credit card needed.</h5>
            <Button
              className="btn-primary-green home-btn"
              style={{ marginTop: "20px" }}
              onClick={() => this.props.toggleTokenModal()}
            >
              START LISTENING!
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

Home.propTypes = {
  toggleTokenModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleTokenModal
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
