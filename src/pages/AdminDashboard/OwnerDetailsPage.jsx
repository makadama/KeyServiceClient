import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getOneOwner, deleteOwner } from "../../actions/ownerActions";
import { fetchLogements } from "../../actions/logementActions";
import { getOnlyRents  } from "../../actions/rentActions";
import { withRouter } from 'react-router-dom';


class OwnerDetailsPage extends Component{
	constructor(props){
		super(props)
		this.state={
			val:''
		}
	}
	componentDidMount(){
			this.props.getOneOwner(this.props.match.params.id);	
			this.props.fetchLogements(this.props.match.params.id);	
			this.props.getOnlyRents ();

	}

	onDelete(val, e){
		e.preventDefault();
		this.props.deleteOwner(val, this.props.history)
	}

	render(){
		const {owner} = this.props.owner;
		const {logements} = this.props.logement;
		const { rents } = this.props.rent;
		console.log(owner)
		console.log(logements)

		var actualRent = [];

		for(let i=0; i<(rents.length); i++){
			if(Date.now()<=new Date(rents[i].date_fin)){
				actualRent.push(rents[i])
			}
		}
		console.log(actualRent)
		
		var counting=0;

		for(let i=0; i<(actualRent.length); i++){
			for(let j=0; j<(logements.length); j++){
				if(actualRent[i].fk_logement==logements[j].id){
					counting=counting+1;
				}
			}
		}

		console.log(counting)

		const haveRents= counting<=0 ? ( <button className="btn btn-danger ml-2"  onClick={this.onDelete.bind(this,owner.id)}>Supprimer Propriétaire</button>) : (<div> {counting} bien(s) en cours de location </div>);
      



		const renderLogements =logements.map(logement => {

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
			     this.state.nb_line= this.props.logement.logements.indexOf(logement)+1;
			      return ( <tr key={logement.id}>
				      		  <td> {logement.id} </td>
				              <td> {this.state.nb_line} </td>
				              <td> {logement.type} </td>
				              <td> {logement.adresse} </td>
				              <td> {logement.code_postal} </td>
				              <td> {this.state.val} </td>
			            	</tr>

			        );
    	});
		return(
			<div style={{marginTop:'4.1em'}}> 
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
				              <h5 className="mb-1 text-white">{owner.lastname}</h5>
				              <h6 className="text-light">{owner.firstname}</h6>
				             </div>
				              <div className="card-body">
				                <ul className="list-group shadow-none">
				                <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa fa-map-marker"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{owner.adress}</span>
				                  </div>
				                </li>
				                <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa  fa-phone-square"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{owner.telephone}</span>
				                  </div>
				                </li>
				                 <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa fa-envelope"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{owner.email}</span>
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
				            	<h2>le(s) bien(s) de {owner.firstname}:</h2>
				            	<table className="table mt-3">
						          <thead className="table-dark">
						            <tr>
						              <th>#</th>
						              <th>id</th>
						              <th>Type</th>
						              <th>Adresse</th>
						              <th>Code Postal</th>
						              <th>Ville</th>
						            </tr>
						          </thead>
						          <tbody>
						           {renderLogements}
						          </tbody>
				        		</table>
				            	{haveRents}
				      		</div>
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
	owner: state.owner,
	logement: state.logement,
	rent: state.rent
})
export default connect(mapStateToProps, {getOneOwner, fetchLogements, getOnlyRents, deleteOwner })(withRouter(OwnerDetailsPage));
