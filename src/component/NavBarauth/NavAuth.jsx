import React, { Component } from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Styles } from './StyleNavAuth';

class NavAuth extends Component{
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
  
</Navbar>
</Styles>
 );
}
}

export default NavAuth;