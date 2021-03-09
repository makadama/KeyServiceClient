import React, {Component} from "react";
import {connect} from 'react-redux'; 
import {getMeetings} from '../../actions/meetingActions';
import ReactPaginate from 'react-paginate';
import './logementsPageStyle.css';


class MeetingPage extends Component{
	constructor(){
		super()
			this.state={
				nb_meeting: 0, 
      	nb_line: 0,
        currentPage: 1,
        meetingPerPage: 10
			}
			}
	componentDidMount(){
		this.props.getMeetings();
	}

	renderNumberOfMeetings(){
    	this.state.nb_meeting = this.props.meeting.meetings.length;
    	return this.state.nb_meeting;
    }

	 /*rendermeetings(){

    return this.props.meeting.meetings.map(meeting => {
      this.state.nb_line= this.props.meeting.meetings.indexOf(meeting)+1;
      return ( <tr key={meeting.id}>
              <td> {this.state.nb_line} </td>
              <td> {meeting.type_rdv} </td>
              <td> {new Date(meeting.date_rdv).toLocaleDateString()} </td>
              <td> {meeting.heure_rdv} </td>
              <td> {meeting.adresse} </td>
              <td> {meeting.code_postal} </td>
              <td> {meeting.voyageur} </td>
              <td> <a href="" className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });
  }*/

  paginate(pageNumber){
    this.setState({
      currentPage: pageNumber
    },() => {
        this.props.getMeetings();
      });
  }

	render(){
		const {meetings} = this.props.meeting;
    const indexOfLastMeeting = this.state.currentPage * this.state.meetingPerPage;
    const indexOfFirstMeeting = indexOfLastMeeting - this.state.meetingPerPage;
    const currentMeeting = meetings.slice(indexOfFirstMeeting, indexOfLastMeeting);

    const renderMeetings = currentMeeting.map(meeting => {
      this.state.nb_line= this.props.meeting.meetings.indexOf(meeting)+1;
      return ( <tr key={meeting.id}>
              <td> {this.state.nb_line} </td>
              <td> {meeting.type_rdv} </td>
              <td> {new Date(meeting.date_rdv).toLocaleDateString()} </td>
              <td> {meeting.heure_rdv} </td>
              <td> {meeting.adresse} </td>
              <td> {meeting.code_postal} </td>
              <td> 
                  <a href={`/rendez-vous/rendez-vous/${meeting.id}`} className="btn btn-outline-secondary btn-sm rounded-0" style={{marginRight:'2px'}}> voir plus </a>
              </td>
              
            </tr>

        );
    });

		return(
			<div style={{marginTop:'4em'}}>
        

        <div className="container-fluid">
            <div className="row"> 
              <div className="col-md-4 mt-4">
                  <div className="card">
                    <div className="text-white p-4" style={{backgroundColor:'#00cccb'}}>
                      <i className="fas fa-key fa-4x"></i>
                      <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>{this.renderNumberOfMeetings()}<span className="d-block">rendez-vous(s)</span></h2>
                    </div>
                    
                  </div>
                  <div className="card mt-5">
                    <div className=" text-white p-4 " style={{backgroundColor:'#ed7e24'}}>
                      <i className="fas fa-list-ul fa-6x"></i>
                      <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>xx <span className="d-block">xxxxxxxxxx</span></h2>
                    </div>
                    
                  </div>
                  
              </div> 
              <div className="col-8 ">
                <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">Nos rendez-vous</h2>
                <div className="container d-flex justify-content-center">
                
                <table className="table mt-3">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Objet</th>
                      <th>Date</th>
                      <th>Heure</th>
                      <th>Adresse</th>
                      <th>Code postal</th>
                      
                      <th colSpan="2"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                   {renderMeetings}
                  </tbody>
                </table>
              </div>
            </div>
              
            </div>
        </div>
        {meetings.length > this.state.meetingPerPage ? <ReactPaginate pageCount={Math.ceil(meetings.length/this.state.meetingPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
        
      </div>
			)
	}
}
const mapStateToProps = state => ({
  meeting: state.meeting,
  auth: state.auth
});
export default connect(mapStateToProps, {getMeetings})(MeetingPage);