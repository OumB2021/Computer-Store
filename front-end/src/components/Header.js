import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/navbar.css";

const Header = () => {
  return (
    <Navbar>
      <div className="nav-left">
        <h1 className="nav">Hello</h1>
      </div>
    </Navbar>
  );
};

export default Header;
