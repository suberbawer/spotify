import React, { PureComponent } from "react";
import { Container } from "reactstrap";
// Components
import Main from "./Main";
import Menu from "./General/Menu";

export default class App extends PureComponent {
  render() {
    return (
      <Container fluid className="p-0" style={{ fontSize: "14px" }}>
        <Menu menuItems={[{ name: "Search", link: "/search" }]} />
        <Main />
      </Container>
    );
  }
}
