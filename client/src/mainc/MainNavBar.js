import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavLink className="navbar-brand" to="/">
              Blog Django
            </NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/create-post">
                    Create Blog Post
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/auth">
                    Login / Register
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
