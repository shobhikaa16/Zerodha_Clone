import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the icon

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-white border-bottom " fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/images/logo.svg"
            alt=""
            className="p-3 ms-5 "
            style={{ width: "24%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-4 fs-6  hover: text-primary">
            <Nav.Link href="#link">Signup</Nav.Link>
            <Nav.Link className='text-dark' href="#link">About</Nav.Link>
            <Nav.Link className='text-dark' href="#link">Products</Nav.Link>
            <Nav.Link className='text-dark' href="#link">Pricing</Nav.Link>
            <Nav.Link className='text-dark' href="#link">Support</Nav.Link>
            {/* FontAwesome icon for menu */}
            <a href="#" className="text-dark mt-2 ms-1 ">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
