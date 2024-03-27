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
  return (
    <>
      <Navbar data-bs-theme="dark" style={gradientBackgroundStyle}>
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            PAYSTREAM
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#faq">FAQs</Nav.Link>
              <div className=" align-items-end">
                <Button
                  to="/login"
                  className="btn btn-link fw-medium text-decoration-none text-dark"
                >
                  Log in
                </Button>
                <Button to="/register" className="btn btn-primary">
                  Get Started
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse></Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
