import React, {Component} from 'react';
import { connect } from "react-redux";
import { getMeetingDetails, deleteMeeting } from "../../actions/meetingActions";


class MeetingDetailsPage extends Component{
	componentDidMount(){
		this.props.getMeetingDetails(this.props.match.params.id)
	}

	onDelete(val, e){
		e.preventDefault();
		this.props.deleteMeeting(val, this.props.history)
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
		const {meeting} = this.props.meeting
		console.log(meeting)
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
				              <h5 className="mb-1 text-white">{meeting.lastname}</h5>
				              <h6 className="text-light">{meeting.firstname}</h6>
				             </div>
				              <div className="card-body">
				                <ul className="list-group shadow-none">
				                <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa  fa-phone-square"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{meeting.telephone}</span>
				                  </div>
				                </li>
				                 <li className="list-group-item">
				                  <div className="list-icon">
				                    <i className="fa fa-envelope"></i>
				                  </div>
				                  <div className="list-details">
				                    <span>{meeting.email}</span>
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
			                                {meeting.adresse}
			                            </p>
			                            
			                            <h6>Code Postal:</h6>
			                            <p>
			                                {meeting.code_postal}
			                            </p>
			                            <h6>Ville:</h6>
			                            <p>
			                                {this.renderVilleName(meeting.ville)}
			                            </p>
			                            <h6>Motif de rendez-vous:</h6>
			                            <p>
			                                {meeting.type_rdv}
			                            </p>
			                            
			                            <h6>Date de rendez-vous:</h6>
			                            <p>
			                                {new Date(meeting.date_rdv).toLocaleDateString()}
			                            </p>
			                            
			                            <h6>Heure de rendez-vous:</h6>
			                            <p>
			                                {meeting.heure_rdv}
			                            </p>
                					</div>
                					<div className="col-md-12 mt-5">
			                        	<button className="btn btn-danger ml-2"  onClick={this.onDelete.bind(this,meeting.id)}>Supprimer</button>
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
  meeting: state.meeting,
  auth: state.auth
});
export default connect(mapStateToProps, {getMeetingDetails, deleteMeeting})(MeetingDetailsPage);