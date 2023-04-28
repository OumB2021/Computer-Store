import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
//import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar
        className="py-4 mb-4"
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ backgroundColor: "#2C2C2C" }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>WIN PC</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fa-solid fa-house px-1"></i>Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart px-1"></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link href="/login">
                  <i className="fas fa-user px-1"></i>Sign in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
