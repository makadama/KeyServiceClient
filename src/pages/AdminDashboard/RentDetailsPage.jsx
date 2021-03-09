import React, {Component} from 'react';
import { connect } from "react-redux";
import { getRentByRentId } from "../../actions/rentActions";
import { getOnlyLogement } from "../../actions/logementActions";
import { getRentDetails } from "../../actions/rentActions";

class RentDetailsPage extends Component{
	componentDidMount(){
		this.props.getRentDetails(this.props.match.params.id)
		
      

	}
	renderVilleName(ville){
     if(ville===1){
          return "Paris et île de France"
      }
      else if(ville===2){
          return "Lyon"
      }
      else if(ville===3){
          return "Bordeau"
      }
      else if(ville===4){
          return "Marseille"
      }
  }

	render(){

		const {rent} = this.props.rent;

		const mutable = Date.now()<=new Date(rent.date_fin) ?
                      (
                        <div>
                        Location en cours ....
                        <p style={{marginTop:'30px'}}>
                        	<a href={`/locations/location/${rent.id}/modification`} className="btn btn-primary">Modifier</a>
                        	
                        </p>
                        </div>
                        )
                    :
                   (
                   <>
                    <a href="" className="btn btn-danger ml-2">Supprimer</a>
                  </>
                    )
        
    
		
		console.log(rent)
		return(
			<div style={{marginTop:'4em'}}> 
				<div className="container">
				<div className="row">
				        <div className="col-lg-4">
				           <div className="profile-card-4 z-depth-3">
				            <div className="card">
				              <div className="card-body text-center  rounded-top" style={{background:'#00cccb'}} >
				              <h5 className="mb-1 text-white">Voyageur</h5>
				               <div className="user-box">
				                <img src="/assets/avatar.png" alt="user avatar"/>
				              </div>
				              <h5 className="mb-1 text-white">{rent.lastname}</h5>
				              <h6 className="text-light">{rent.firstname}</h6>
				             </div>
				              <div className="card-body">
				                <ul className="list-group shadow-none">
				                <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa  fa-phone-square"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{rent.telephone}</span>
				                  </div>
				                </li>
				                 <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa fa-envelope"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{rent.email}</span>
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
                						<h5 className="mb-3">Détails de la location</h5>
			                            <h6>Adresse:</h6>
			                            <p>
			                                {rent.adresse}
			                            </p>
			                            
			                            <h6>Code Postal:</h6>
			                            <p>
			                                {rent.code_postal}
			                            </p>
			                            <h6>Ville:</h6>
			                            <p>
			                                {this.renderVilleName(rent.ville)}
			                            </p>
			                            <h6>date d'entrée:</h6>
			                            <p>
			                                {new Date(rent.date_debut).toLocaleDateString()}
			                            </p>
			                            
			                            <h6>date de sortie:</h6>
			                            <p>
			                                {new Date(rent.date_fin).toLocaleDateString()}
			                            </p>
                					</div>
                					<div className="col-md-12 mt-5">
			                        	 {mutable}
			                             
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
  errors: state.errors,
  rent: state.rent,
  logement: state.logement
});

export default connect(mapStateToProps, {getOnlyLogement, getRentByRentId, getRentDetails}) (RentDetailsPage);