import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../Asset/img/logo.jpeg'
const NavItem = () => {
  return (
    <Navbar style={{height:"86px",color:"black",padding:"35px 45px 35px 45px"}}>
    <Container style={{display:"flex",justifyContent:"space-between"}}>
    {/* <Navbar.Brand href="#home"> */}
            <img
              src={logo}
              width="120px"
              height="120px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
    {/* </Navbar.Brand> */}
      {/* <Navbar.Toggle /> */}
      <Navbar.Collapse className="justify-content-end" style={{paddingLeft:"37px",paddingTop:"30px"}}>
      <Nav className="me-auto">
            <Nav.Link style={{padding:"20px",color:"black",fontSize:"17px",fontWeight:"700",letterSpacing:"2px"}} href="#home">Home</Nav.Link>
            <Nav.Link style={{padding:"20px",color:"black",fontSize:"17px",fontWeight:"700",letterSpacing:"2px"}} href="#about">About</Nav.Link>
            <Nav.Link style={{padding:"20px",color:"black",fontSize:"17px",fontWeight:"700",letterSpacing:"2px"}} href="#gallery">Gallery</Nav.Link>
            <Nav.Link style={{padding:"20px",color:"black",fontSize:"17px",fontWeight:"700",letterSpacing:"2px"}} href="#gallery">Contact</Nav.Link>

          </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavItem
