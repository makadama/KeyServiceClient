import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Mailsent extends Component {
 

  render() {
  
    return (
      <div class="jumbotron text-center">
  
  <p>Un mail vous a été envoyé à l'adresse </p>
  <p class="lead"> Veuillez le consulter pour modifier votre mot de passe !</p>
  
</div>
    );
  }
}

export default MailSent;
