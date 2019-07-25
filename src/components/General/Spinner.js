import React, { PureComponent } from "react";
import { Spinner } from "reactstrap";
import styles from "./styles.css";// eslint-disable-line

export default class SpotiSpinner extends PureComponent {
  render() {
    return (
      <div className="background">
        <Spinner color="light" className="spinner" />
      </div>
    );
  }
}
