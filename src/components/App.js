import React, { PureComponent } from "react";
import { Container, Col, Row } from "reactstrap";
// Components
import Main from "./Main";
import Menu from "./General/Menu";
import TokenModal from "./General/TokenModal";

export default class App extends PureComponent {
  render() {
    return (
      <Container fluid className="p-0" style={{ fontSize: "14px" }}>
        <TokenModal />
        <Row>
          <Col xs="4" sm="3" md="3" lg="2" xl="2" style={{ height: "100vh" }}>
            <Menu />
          </Col>
          <Col xs="8" sm="9" md="9" lg="10" xl="10" style={{ height: "100vh" }}>
            <Main />
          </Col>
        </Row>
      </Container>
    );
  }
}
