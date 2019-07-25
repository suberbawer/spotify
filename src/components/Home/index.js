import React, { PureComponent } from "react";
import { Container } from "reactstrap";
import background from "../../assets/home-background.png";
// Styles
import styles from "./styles.css";// eslint-disable-line

export default class Home extends PureComponent {
  render() {
    return (
      <Container
        fluid
        className="p-0 background-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className="container-fluid background-image"
          style={{ background: "rgba(0,0,0,0.2)" }}
        />
      </Container>
    );
  }
}
