import React, { Component } from "react";
import { connect } from "react-redux";
import './welcomePageStyle.css';

class WelcomePage extends Component {
 

  render() {
     const {user} = this.props.auth;
     console.log(user);
    return (
     <div style={{marginTop:'4em'}}>
       <div className="container-fluid ">
       <div className="row " style={{marginBottom:'15px'}}>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center " >
                <div className="card-box bg-blue ">
                    <div className="inner ">
                        <h3> Logements </h3>
                    </div>
                    <div className="icon">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </div>
                    <a href="/logements" className="card-box-footer">Voir <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                <div className="card-box bg-green">
                    <div className="inner">
                        <h3> Hôtes </h3>
                    </div>
                    <div className="icon">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <a href="/proprietaires" className="card-box-footer">Voir <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                <div className="card-box bg-green">
                    <div className="inner">
                        <h3> Voyageurs </h3>
                    </div>
                    <div className="icon">
                        <i className="fas fa-suitcase"></i>
                    </div>
                    <a href="/voyageurs" className="card-box-footer">Voir <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                <div className="card-box bg-green">
                    <div className="inner">
                        <h3> Locations </h3>
                    </div>
                    <div className="icon">
                        <i className="fas fa-key"></i>
                    </div>
                    <a href="/locations" className="card-box-footer">Voir <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            
            
        </div>
      <div className="row">
        <div className="col-lg-12 col-md-12">
            <div className="jumbotron jumbotron-fluid text-center">
                <h1>bonjour, {user.firstname}</h1>
                <p className="lead"> Bienvenue dans votre espace membre</p>
            </div>
        </div>
      </div>

  	 </div>
     </div>
    )
  }
}
const mapStateToProps = state =>({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps)(WelcomePage);
