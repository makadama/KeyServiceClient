import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getOneTraveler, deleteTraveler } from "../../actions/travelerActions";
import { getRentsByVoyageur } from "../../actions/rentActions";
import { withRouter } from 'react-router-dom';


class TravelerDetailsPage extends Component{

	constructor(){
		super()
		this.state={

		}

	}
	componentDidMount(){
			this.props.getOneTraveler(this.props.match.params.id);
			this.props.getRentsByVoyageur(this.props.match.params.id);
	}

	onDelete(val,e){
		e.preventDefault();
		this.props.deleteTraveler(val, this.props.history)
	}

	render(){
		const {traveler} = this.props.traveler;
		const { rents } = this.props.rent;
		const nb_location= rents.length;


		const haveRents= rents.length==0 ? ( <button className="btn btn-danger ml-2"  onClick={this.onDelete.bind(this,traveler.id)}>Supprimer voyageur</button>) : (<div> </div>);
      
		console.log(traveler)
		console.log(rents)

		const mutable = rents.map(rent => {
      return ( 
                Date.now()<=new Date(rent.date_fin) ?
                      (
                        <>
                        "en Location ...."
                         </>
                        )
                    :
                   (
                   <>
                    <a href={`/travelers`} className="btn btn-primary">Modifier</a>
                    <button className="btn btn-danger ml-2"  onClick={this.onDelete.bind(this,traveler.id)}>Supprimer</button>
                  </>
                    )
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
				              <h5 className="mb-1 text-white">Voyageur</h5>
				               <div className="user-box">
				                <img src="/assets/avatar.png" alt="user avatar"/>
				              </div>
				              <h5 className="mb-1 text-white">{traveler.lastname}</h5>
				              <h6 className="text-light">{traveler.firstname}</h6>
				             </div>
				              <div className="card-body">
				                <ul className="list-group shadow-none">
				                <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa fa-map-marker"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{traveler.adress}</span>
				                  </div>
				                </li>
				                <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa  fa-phone-square"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{traveler.telephone}</span>
				                  </div>
				                </li>
				                 <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa fa-envelope"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{traveler.email}</span>
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
					            	<h6>nombre de location avec key services :</h6>
	                            <p>
	                                {nb_location}
	                            </p>
					            
					      		</div>
					      		<div className="col-md-12 mt-5 mb-2">
							    	{mutable}
							      	{haveRents}
					    		</div>
				      		
				      		</div>
				        
				    </div>
				    
				    <div>
				    	
				    </div>
				</div>
			</div>
		</div>
			)
	}
}
const mapStateToProps = state =>({
	auth: state.auth,
	traveler: state.traveler,
	rent: state.rent
})
export default connect(mapStateToProps,{getOneTraveler, getRentsByVoyageur, deleteTraveler})(withRouter(TravelerDetailsPage));