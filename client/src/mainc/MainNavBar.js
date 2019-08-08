import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./../redux/actions/AuthAction";

class MainNavBar extends React.Component {
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
                {this.props.isLogined ? (
                  <NavItem>
                    <a className="nav-link" onClick={this.props.logout}>
                      Logout
                    </a>
                  </NavItem>
                ) : (
                  <NavItem>
                    <NavLink className="nav-link" to="/auth">
                      Login / Register
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => ({ isLogined: state.auth.isLogined });

const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavBar);
