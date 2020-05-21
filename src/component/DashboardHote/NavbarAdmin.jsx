import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StyleDashboardAdmin.css';

class NavbarAdmin extends Component{
  render(){

return(
    <div id="page-content-wrapper">

      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <a class="navbar-brand" href="#">
        <img src="assets/keyLogo2.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
      </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            
            <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle col-xs-12" href="#" id="navbarDropdown" style={{color:'#81D4FA',  fontSize:'20px', marginRight:'3px'}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <i className="fas fa-user" style={{color:'#81D4FA',  fontSize:'20px', marginRight:'3px'}}></i>
                Adama
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Profil</a>
                <a class="dropdown-item" href="#">Logout</a>
                
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>


 );
}
}

export default NavbarAdmin;