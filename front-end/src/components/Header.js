import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        className="py-4"
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">TECHSTORE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>
              <Nav.Link href="/">
                <i className="fa-solid fa-house px-1"></i>Home
              </Nav.Link>
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart px-1"></i>Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user px-1"></i>Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
