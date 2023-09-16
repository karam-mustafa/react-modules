import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function HomeNavbar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="mx-2" to="/">Home</NavLink>
          <NavLink className="mx-2" to="/teachers">Teachers</NavLink>
          <NavLink className="mx-2" to="/students">Students</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
