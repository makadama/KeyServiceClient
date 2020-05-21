import React, { Component } from "react";
import {  withRouter } from 'react-router-dom';
import './styleLogementsList.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLogements } from "../../actions/logementActions";

class LogementsList extends Component {
   constructor(){
    super()
    this.state={
      val:""
    }

    
    }
  
    componentDidMount(){
      
      this.props.getLogements(this.props.auth.user.id);
    
    }

    
    
renderLogements(){
    return this.props.logement.logements.map(logement => {

      if(logement.fk_ville===1){
          this.state.val="Paris et île de France"
      }
      else if(logement.fk_ville===2){
          this.state.val="Lyon"
      }
      else if(logement.fk_ville===3){
          this.state.val="Bordeau"
      }
      else if(logement.fk_ville===4){
          this.state.val="Marseille"
      }
      else if(logement.fk_ville===5){
          this.state.val="Monaco"
      }
      return ( <tr key={logement.id}>
              <td> {logement.id} </td>
              <td> {logement.type} </td>
              <td> {logement.adresse} </td>
              <td> {logement.code_postal} </td>
              <td> {this.state.val} </td>

              
              <td> <a href="" className="edit"> modifer </a> </td>
              <td> <a href="" className="delete"> Supprimer </a> </td>
              <td> <a href={`/logements/${logement.id}`} className="publish"> voir plus </a> </td>
              
            </tr>

        );
    });
  }
  

  render() {

    
    const {user}= this.props.auth;
    const {logements}= this.props.logement;
    console.log(user);
    console.log(logements);

    return (
      
     
      <div className="admin-content">
      <div className="button-group">
          <a href="/logements/addLogementPage" className="btn btn-big"> Ajouter un Logement </a>
          
      </div>

      <div className="content">
        <h2 className="page-title"> Gestion de mes biens </h2>
        <table>
          <thead>
              <tr>
                <th> N </th>
                <th> Type </th>
                <th> Adresse </th>
                <th> Code postal </th>
                <th> Ville </th>
                

                <th colSpan="3"> Actions </th>
              </tr>
          </thead>
          <tbody>
              {this.renderLogements()}
            
          
          </tbody>

         
        </table>

      </div> 


    </div>
  

    );
  }
}

LogementsList.propTypes = {
  getLogements: PropTypes.func.isRequired,
  logement: PropTypes.object.isRequired,
  auth: PropTypes.object
  
};

const mapStateToProps = state => ({
  logement: state.logement,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getLogements }
)(LogementsList);


