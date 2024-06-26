import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "reactstrap";

const NavBar = () => {
  const gradientBackgroundStyle = {
    background: "linear-gradient(90deg, #0E0D13 0%, #1D2339 100%)",
    // Add any other styles you want
  };

  const navLinkStyle = {
    marginLeft: '15px',
    marginRight: '15px',
    // Adjust the margins as needed for your desired spacing
  };

  const buttonStyle = {
    marginLeft: 'auto',
    // Add any other styles you want for the button
  };

  return (
    <>
      <Navbar bg="myRed" data-bs-theme="dark" style={gradientBackgroundStyle} expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            WEBLOW AGENCY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link href="#services" style={navLinkStyle}>Our Services</Nav.Link>
              <Nav.Link href="#pricing" style={navLinkStyle}>Pricing</Nav.Link>
              <Nav.Link href="#platforms" style={navLinkStyle}>Platforms</Nav.Link>
              <Nav.Link href="#faq" style={navLinkStyle}>FAQ's</Nav.Link>
            </Nav>
            <Button color="primary" style={buttonStyle}>Get Started</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
