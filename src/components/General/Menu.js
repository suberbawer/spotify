import React, { PureComponent } from "react";
import { Container, Row } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { IoMdHome, IoMdMusicalNotes, IoMdMicrophone } from "react-icons/io";
// Assets
import logo from "../../assets/spotify.gif";

class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: this.getActiveInitialIndex()
    };
  }

  getActiveInitialIndex = () => {
    const { location } = this.props; // eslint-disable-line
    let index = 1;

    if (location.pathname.indexOf("artists") > -1) { // eslint-disable-line
      index = 2;
    }
    if (location.pathname.indexOf("tracks") > -1) { // eslint-disable-line
      index = 3;
    }
    return index;
  };

  setActive = index => {
    this.setState({
      active: index
    });
  };

  setClass = i => {
    const { active } = this.state;
    let cls = "link ";
    if (active === i) {
      cls = `${cls} menu-item-active`;
    }
    return cls;
  };

  render() {
    return (
      <Container fluid className="p-0" style={{ backgroundColor: "#000" }}>
        <Row>
          <img alt="logo" src={logo} style={{ width: "100%", height: "50%" }} />
        </Row>
        <Row style={{ paddingTop: "100px" }}>
          <Row className={this.setClass(1)} style={{ width: "100%" }}>
            <div className="menu-icon">
              <IoMdHome />
            </div>
            <Link
              to="/"
              onClick={() => this.setActive(1)}
              className="nav-link link"
            >
              Home
            </Link>
          </Row>
          <Row className={this.setClass(2)} style={{ width: "100%" }}>
            <div className="menu-icon">
              <IoMdMicrophone />
            </div>
            <Link
              to="/search-artists"
              onClick={() => this.setActive(2)}
              className="nav-link link"
            >
              Artists
            </Link>
          </Row>
          <Row className={this.setClass(3)} style={{ width: "100%" }}>
            <div className="menu-icon">
              <IoMdMusicalNotes />
            </div>
            <Link
              to="/search-tracks"
              onClick={() => this.setActive(3)}
              className="nav-link link"
            >
              Tracks
            </Link>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Menu);
