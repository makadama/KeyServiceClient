import React, { Component } from 'react'
import { Navbar, Nav, Button, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from './StyleNavBar';

class NavBar extends Component{
  render(){

return(
  <Styles>
  <Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="/">
      <img
        src="assets/keyLogo_last.jpg"
        
        className="d-inline-block align-top img"
        
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Item> <Nav.Link href="/">Accueil</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/contacts">Contacts</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/tarifs">Tarifs</Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/services">Services</Nav.Link> </Nav.Item>
     
       <NavDropdown title="Villes" id="basic-nav-dropdown">
        <NavDropdown.Item href="/paris">Paris et île de France</NavDropdown.Item>
        <NavDropdown.Item href="/lyon">Lyon</NavDropdown.Item>
        <NavDropdown.Item href="/bordeaux">Bordeau</NavDropdown.Item>
         <NavDropdown.Item href="/marseille">Marseille</NavDropdown.Item>
        </NavDropdown>
  
    
     
    </Nav>
    <Nav>
      <Nav.Item> <Nav.Link href="/login"><Button className="button_login"  size="sm">
    Se connecter
    </Button></Nav.Link> </Nav.Item>
      <Nav.Item> <Nav.Link href="/inscription1"><Button className="button_register"  size="sm">
    S'inscrire
    </Button></Nav.Link> </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Styles>
 );
}
}

export default NavBar;