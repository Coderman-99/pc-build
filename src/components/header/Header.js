import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import React from 'react'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ "color": "gold" }} href="/">
          <FontAwesomeIcon icon={faVideoSlash} /> PC Build
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: '100px' }} >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/builds">Builds</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-light" as={NavLink} to="/login">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
