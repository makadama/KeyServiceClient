import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLogementById } from "../../actions/logementActions";
import { getRentsByLogement } from "../../actions/rentActions";


class LogementDetailsPage extends Component{
	componentDidMount(){
		
		
        this.props.getRentsByLogement(this.props.match.params.id)
    
	}
	render(){
			const {logement} = this.props.logement;
			const { rents } = this.props.rent;

		return(
			<div> 
				<div className="card bg-light mb-3">
                
	                <div className="card-body">
	                    <p>Adresse: {logement.adresse}</p>
	                    <p>Complément: {logement.complement}</p>
	                    <p>Code Postal: {logement.code_postal}</p>
	                    <p>Type: {logement.type}</p>
	                    <p>Superficie: {logement.superficie}</p>
	                    <p>Nombre de lits:{logement.nb_lits}</p>
	                    <p>Nombre de salle de bain: {logement.nb_sdb}</p>
	                    
	            	</div>

            
          		</div>
          		<div className="card bg-light mb-3">
                
	                <div className="card-body">
	                    <p>prenom: {logement.userFirstname}</p>
	                    <p>nom: {logement.userLastname}</p>
	                    <p>email: {logement.userEmail}</p>
	                    <p>Type: {logement.userTelephone}</p>
	                    <p>adresse: {logement.userAdresse}</p> 
	                </div>

            
          		</div>

          		<div className="card bg-light mb-3">
                
	                <div className="card-body">
	                    <p>nombre de location: {rents.length}</p>
	                </div>

            
          		</div>
			</div>
			)
	}
}
const mapStateToProps = state => ({
	auth: state.auth,
	logement: state.logement,
	rent: state.rent
})
export default connect(mapStateToProps, {getLogementById, getRentsByLogement})(LogementDetailsPage); 