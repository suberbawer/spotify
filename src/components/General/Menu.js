import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      color: "dark"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const top =
      document.documentElement.scrollTop - 100 ||
      document.body.parentNode.scrollTop - 100 ||
      document.body.scrollTop - 100;

    this.setState({ color: top < 1 ? "dark" : "" });
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };

  render() {
    const { menuItems } = this.props;
    const { color, isOpen } = this.state;

    return (
      <div>
        <Navbar
          color={color}
          dark
          style={{ position: "fixed", width: "100%", zIndex: 2 }}
          expand="lg"
        >
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="#parent">Spotify</NavbarBrand>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {menuItems.map(item => (
                <NavItem key={item.name}>
                  <Link to={item.link} className="nav-link">
                    {item.name}
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired // eslint-disable-line
};
