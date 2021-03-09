import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {getOwners} from '../../actions/ownerActions';
import { getRents } from "../../actions/rentActions";
import ReactPaginate from 'react-paginate';
import './logementsPageStyle.css';


class OwnersPage extends Component{
	constructor(){
    super()
    this.state={
      nb_traveler: 0, 
      nb_line: 0,
      currentPage: 1,
      ownerPerPage: 10
    } 
    }
	componentDidMount(){
		this.props.getOwners();
		this.props.getRents();
	}

	renderNumberOfOwners(){
    	this.state.nb_traveler = this.props.owner.owners.length;
    	return this.state.nb_traveler;
    }

	/*renderOwners(){
    return this.props.owner.owners.map(owner => {
      this.state.nb_line= this.props.owner.owners.indexOf(owner)+1;
      return ( <tr key={owner.id}>
      		  <td> {this.state.nb_line} </td>
              <td> {owner.firstname} </td>
              <td> {owner.lastname} </td>
              <td> {owner.email} </td>
              <td> {owner.telephone} </td>
              <td> <a href="" className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });
  }*/

  paginate(pageNumber){
  	this.setState({
  		currentPage: pageNumber
  	},() => {
        this.props.getOwners();
      });
  }



	render(){
		const {owners}= this.props.owner;
		const {user} = this.props.auth;
		const {rents} = this.props.rent;
		const indexOfLastOwner = this.state.currentPage * this.state.ownerPerPage;
		const indexOfFirstOwner = indexOfLastOwner - this.state.ownerPerPage;
		const currentOwner = owners.slice(indexOfFirstOwner, indexOfLastOwner);

		const renderOwners= currentOwner.map(owner => {
      this.state.nb_line= owners.indexOf(owner)+1;
      return ( <tr key={owner.id}>
      		  <td> {this.state.nb_line} </td>
              <td> {owner.firstname} </td>
              <td> {owner.lastname} </td>
              <td> {owner.email} </td>
              <td> {owner.telephone} </td>
              <td> <a href={`/proprietaires/proprietaire/${owner.id}`} className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });
		return(
			<div style={{marginTop:'4em'}}>
				<div className="bg-light p-3">
				    <div className="row  d-flex justify-content-start">
				       <div className="col-md-4">
				         <a href="/proprietaires/ajouter-un-proprietaire" className="btn btn-success d-block font-weight-bold rounded-0">
				          <i className="fas fa-plus"></i> &nbsp;Ajouter un hôte</a>
				       </div>   
				  	</div>
 				</div> 

 				<div className="container-fluid">
				    <div className="row"> 
				      <div className="col-md-4 mt-4">
				          <div className="card">
				            <div className="text-white p-4" style={{backgroundColor:'#00cccb'}}>
				              <i className="fas fa-user fa-4x"></i>
				              <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>{this.renderNumberOfOwners()}<span className="d-block">propriétaires</span></h2>
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
				        <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">Nos propriétaires</h2>
				        <div className="container d-flex justify-content-center">
				        
				        <table className="table mt-3">
				          <thead className="table-dark">
				            <tr>
				              <th>#</th>
				              <th>Nom</th>
				              <th>Prénom</th>
				              <th>email</th>
				              <th>telephone</th>
				              <th>Action</th>
				            </tr>
				          </thead>
				          <tbody>
				           {renderOwners}
				          </tbody>
				        </table>
				      </div>
				    </div>
				      
				    </div>
				</div>
				{owners.length > this.state.ownerPerPage ? <ReactPaginate pageCount={Math.ceil(owners.length/this.state.ownerPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
				
			</div>
			)
		}
	}

const mapStateToProps = state =>({
	auth: state.auth,
	owner: state.owner,
	rent: state.rent
});
export default connect(mapStateToProps, {getOwners, getRents})(OwnersPage);