import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../../../actions/authActions";
import './style.scss';


class Navigation extends Component{
  constructor(){
    super()
    this.state={
      isOpen:false
    }

    this.handleClick=this.handleClick.bind(this)
  }

 

  handleClick(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  closeNavbar(){
    this.setState({
      isOpen: false
    })
 }

 onLogoutClick = e =>{
    e.preventDefault();
    this.props.logoutUser();
 }





render(){
     const { user } = this.props.auth;
  return (
    <div className="nvbr">
    <nav>
      <div className="logoBtn">
      
        <div className="logo">
           <a href="/welcomePage"><img src="/assets/keyLogo_last.jpg" alt=""/></a>
        </div>
        <div className="btn bouton" onClick={this.handleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <ul className={this.state.isOpen? 'showNav': 'undif'}>
       <li><a href='#'  style={{color:'#ed7e24',fontWeight: 'bold'}}><i className="fa fa-user"></i>     {user.firstname}</a></li>
       <li><a onClick={this.onLogoutClick} href=""><i className="fa fa-power-off"> se deconnecter</i></a></li>  
      </ul>
    </nav>
    </div>
  )
}
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);
