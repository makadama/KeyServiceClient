import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class DashboardHote extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
        <div className="jumbotron text-center">
          <h1 className="display-4">Bonjour, {user.firstname}</h1>
          <p className="lead"> Bienvenue sur votre compte keyservice</p> 
        </div>
     
    );
  }
}

DashboardHote.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(DashboardHote);
