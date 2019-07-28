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
          backgroundColor: "#0A0A0A",
          height: "100%",
          overflow: "auto"
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
