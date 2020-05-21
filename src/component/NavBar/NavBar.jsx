import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from './StyleNavBar';

class NavBar extends Component{
  render(){

return(
  <Styles>
  <Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="/">
      <img
        src="assets/keyLogo2.png"
        
        className="d-inline-block align-top img"
        
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Item> <Nav.Link href="/">Accueil</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/contacts">Contacts</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/aPropos">A propos</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/villes">Villes</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/tarifs">Tarifs</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/services">Services</Nav.Link> </Nav.Item>
     
    </Nav>
    <Nav>
      <Nav.Item> <Nav.Link href="/login">Se connecter</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/inscription1"> S'inscrire </Nav.Link> </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Styles>
 );
}
}

export default NavBar;