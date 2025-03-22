import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-white border-bottom mb-5" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="p-3 ms-5"
            style={{ width: "24%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-4 fs-6">
            <Nav.Link as={Link} to="/signup" className="text-dark">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="text-dark">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="text-dark">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/support" className="text-dark">
              Support
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="text-dark mt-2 ms-1">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
