import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

class Navigation extends Component {
  render() {
    return <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <LinkContainer exact={true} to="/">
            <Navbar.Brand>React Web</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/develop">
              <NavItem eventKey={1}>Develop</NavItem>
            </LinkContainer>
            <LinkContainer to="/design">
              <NavItem eventKey={1}>Design</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
  }
}

export default Navigation;
