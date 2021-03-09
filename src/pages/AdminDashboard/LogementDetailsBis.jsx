import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getLogementById, deleteLogement  } from "../../actions/logementActions";
import { getRentsByLogement } from "../../actions/rentActions";
import {getDisponibilite} from "../../actions/disponibiliteActions";
import './LogementDetailsBisStyle.css';


class LogementDetailsBis extends Component{
	componentDidMount(){
		this.props.getLogementById(this.props.match.params.id)
        this.props.getRentsByLogement(this.props.match.params.id)
        this.props.getDisponibilite(this.props.match.params.id)
    
	}
    renderVilleName(){
     if(this.props.logement.logement.ville===1){
          return "Paris et île de France"
      }
      else if(this.props.logement.logement.ville===2){
          return "Lyon"
      }
      else if(this.props.logement.logement.ville===3){
          return "Bordeau"
      }
      else if(this.props.logement.logement.ville===4){
          return "Marseille"
      }
  }

   onDelete(valeur, e){
    e.preventDefault();
    this.props.deleteLogement(valeur,this.props.history);
   
  }

	render(){
			const {user} = this.props.auth;
			const {logement} = this.props.logement;
			const { rents } = this.props.rent;
			const { dispos } = this.props.dispo;
			console.log(dispos);
			console.log(rents);

			const isAvailable = "non disponible";

			const haveRents= rents.length==0 ? (<><a href={`/logements/logement/${logement.id}/modifier`} className="btn btn-primary">Modifier</a>
                     <button className="btn btn-danger ml-2"  onClick={this.onDelete.bind(this,logement.id)}>Supprimer</button></>) : (<div> </div>);
      

      const mutable = rents.map(rent => {
      return ( 
                Date.now()<=new Date(rent.date_fin) ?
                      (
                        <>
                        "en Location ...."
                         {/*<a href={`/locations/location/${rent.id}/modifier`} className="btn btn-outline-primary btn-sm rounded-0" style={{marginLeft:'2px'}}> modifier </a>*/}
                        </>
                        )
                    :
                   (
                   <>
                    <a href={`/logements/logement/${logement.id}/modifier`} className="btn btn-primary">Modifier</a>
                    <button className="btn btn-danger ml-2"  onClick={this.onDelete.bind(this,logement.id)}>Supprimer</button>
                  </>
                    )
        );
    });



		return(
			<div style={{marginTop:'5em'}}> 
					<div className="container">
<div className="row">
        <div className="col-lg-4">
           <div className="profile-card-4 z-depth-3">
            <div className="card">
              <div className="card-body text-center  rounded-top" style={{background:'#00cccb'}} >
              <h5 className="mb-1 text-white">Propriétaire</h5>
               <div className="user-box">
                <img src="/assets/avatar.png" alt="user avatar"/>
              </div>
              <h5 className="mb-1 text-white">{logement.userLastname}</h5>
              <h6 className="text-light">{logement.userFirstname}</h6>
             </div>
              <div className="card-body">
                <ul className="list-group shadow-none">
                <li className="list-group-item">
                  <div className="list-icon">
                    <i className="fa fa-phone-square"></i>
                  </div>
                  <div className="list-details">
                    <span>{logement.userTelephone}</span>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="list-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="list-details">
                    <span>{logement.userEmail}</span>
                  </div>
                </li>
                </ul>
               </div>
             </div>
           </div>
        </div>
        <div className="col-lg-8">
           <div className="card z-depth-3">
            <div className="card-body">
            
            <div className="tab-content p-3">
                <div className="tab-pane active show" id="profile">
                    <h5 className="mb-3">Détails du bien</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Adresse:</h6>
                            <p>
                                {logement.adresse}
                            </p>
                            
                            <h6>Code Postal:</h6>
                            <p>
                                {logement.code_postal}
                            </p>
                            <h6>Type:</h6>
                            <p>
                                {logement.type}
                            </p>
                            
                            <h6>nombre de lits:</h6>
                            <p>
                                {logement.nb_lits}
                            </p>
                            
                        </div>
                        <div className="col-md-6">
                             <h6>Complèment:</h6>
                            <p>
                                {logement.complement}
                            </p>
                            <h6>Ville:</h6>
                            <p>
                                {this.renderVilleName()}
                            </p>
                            <h6>Superficie:</h6>
                            <p>
                                {logement.superficie}
                            </p>
                             <h6>nombre de salles de bain :</h6>
                            <p>
                                {logement.nb_sdb}
                            </p>
                        </div>
                        <div className="col-md-12">
                            <h5 className="mt-2 mb-3">Les Chiffres</h5>
                       		<h6>nombre de Locations:</h6>
                            <p>
                                {rents.length}
                            </p>

                        </div>
                        <div className="col-md-12">
                            <h5 className="mt-2 mb-3"> Etat </h5>
                       		{/*<h6>Disponibilité:</h6>
                            <p>
                                {rents.length}
                            </p>*/}
                            <span className="fa fa-clock-o fa-2x ion-clock"></span>
                            <a href={`/logements/logement/${logement.id}/disponibilites`}> voir les disponibilités</a>
                           
                        </div>
                        <div className="col-md-12 mt-5">
                        	 {mutable}
                           {haveRents}
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
      </div>
      </div>
        
    </div>
</div>
			</div>
			)
	}
}
const mapStateToProps = state => ({
	auth: state.auth,
	logement: state.logement,
	rent: state.rent,
	dispo: state.dispo
})
export default connect(mapStateToProps, {getLogementById, getRentsByLogement, deleteLogement, getDisponibilite})(withRouter(LogementDetailsBis)); 