import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-white border-bottom " fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo.svg"
            alt=""
            className="p-3 ms-5 "
            style={{ width: "24%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-4 fs-6 hover:text-primary">
            <NavLink className="nav-link text-dark" to="/signup">
              Signup
            </NavLink>
            <NavLink className="nav-link text-dark" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link text-dark" to="/product">
              Products
            </NavLink>
            <NavLink className="nav-link text-dark" to="/pricing">
              Pricing
            </NavLink>
            <NavLink className="nav-link text-dark" to="/support">
              Support
            </NavLink>
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