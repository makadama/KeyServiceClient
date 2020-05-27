import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { bindActionCreators } from 'redux';
import './styleNavDashboard.css';

class NavDashboard extends Component {
  

  render() {
    const { logement } = this.props.logement;
return(
      <div className="container nav_dash">
    <div className="row">
        <div className="col-md-4 col-xl-4">
          <a href={`/logements/${logement.id}/disponibilites`}>
            <div className="card bg-c-blue order-card">
                <div className="card-block">
                    
                    <h2 className="text-right"><span className="fa fa-calendar-alt f-left"></span></h2>
                    <p className="m-b-0 f-right ">Mes disponibilités</p>
                </div>
            </div>
          </a>
        </div>
        
        <div className="col-md-4 col-xl-4">
          <a href={`/logements/${logement.id}/images`}>
            <div className="card bg-c-green order-card">
                <div className="card-block">
                   
                    <h2 className="text-right"><span className="fa fa-image f-left"></span></h2>
                    <p className="m-b-0 f-right ">Mes photos</p>
                </div>
            </div>
          </a>
        </div>
        
        <div className="col-md-4 col-xl-4">
          <a href={`/logements/${logement.id}/tarif`}>
            <div className="card bg-c-pink order-card">
                <div className="card-block">
                    
                    <h2 className="text-right"><span className="fa fa-credit-card f-left"></span></h2>
                    <p className="m-b-0 f-right ">Mon Tarif </p>
                </div>
            </div>
          </a>
        </div>
  </div>
</div>
    )
  }
}
NavDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  logement: state.logement
});
export default connect(
  mapStateToProps
)(withRouter(NavDashboard));



