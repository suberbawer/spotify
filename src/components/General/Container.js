import React, { PureComponent } from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";
// Styles
import styles from "./styles.css";// eslint-disable-line

export default class AppContainer extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Container
        fluid
        style={{
          backgroundColor: "rgba(0,0,0,0.9)",
          position: "absolute",
          minHeight: "100%",
          paddingTop: "80px"
        }}
      >
        {children}
      </Container>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired
};
