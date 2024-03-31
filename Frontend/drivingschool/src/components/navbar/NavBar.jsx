import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Contact from '../contact/Contact';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="light">
        <Container>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-new-263-283017.png?f=webp&w=256" height={50} width={50} />
          <Navbar.Brand href="#logo">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar