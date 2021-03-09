import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRents } from "../../actions/rentActions";
import ReactPaginate from 'react-paginate';
import './logementsPageStyle.css';


class RentsPage extends Component {
  
  constructor(){
    super()
    this.state={
      nb_rent: 0,
      nb_line: 0,
      errors:{},
      currentPage: 1,
      rentPerPage: 10
     
    }

    
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    this.props.getRents()
  }

  renderNumberOfRents(){
        this.state.nb_rent = this.props.rent.rents.length;
        return this.state.nb_rent;
    }

  /*renderrents(){

    return this.props.rent.rents.map(rent => {
      this.state.nb_line= this.props.rent.rents.indexOf(rent)+1;
      return ( <tr key={rent.id}>
              <td> {this.state.nb_line} </td>
               <td> {rent.id} </td>
              <td> {new Date(rent.date_debut).toLocaleDateString()} </td>
              <td> {new Date(rent.date_fin).toLocaleDateString()} </td>
              <td> {rent.adresse} </td>
              <td> {rent.code_postal} </td>
              <td> <a href="" className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });
  }*/

    paginate(pageNumber){
    this.setState({
      currentPage: pageNumber
    },() => {
        this.props.getRents();
      });
  }



  render() {

    const { errors } = this.state;
    const { rents } = this.props.rent;
    const indexOfLastRent = this.state.currentPage * this.state.rentPerPage;
    const indexOfFirstRent = indexOfLastRent - this.state.rentPerPage;
    const currentRents = rents.slice(indexOfFirstRent, indexOfLastRent);


    const renderrents = currentRents.map(rent => {
      this.state.nb_line= this.props.rent.rents.indexOf(rent)+1;
      return ( <tr key={rent.id}>
                <td> {this.state.nb_line} </td>
                 <td> {rent.id} </td>
                <td> {new Date(rent.date_debut).toLocaleDateString()} </td>
                <td> {new Date(rent.date_fin).toLocaleDateString()} </td>
                <td> {rent.adresse} </td>
                <td> {rent.code_postal} </td>
                <td> <a href={`/locations/location/${rent.id}`} className="btn btn-outline-secondary btn-sm rounded-0" style={{marginLeft:'2px'}}> voir plus </a> </td>
                
              </tr>

        );
    });
    return (
      <div style={{marginTop:'4em'}}>
        <div className="bg-light p-3">
            <div className="row  d-flex justify-content-start">
               <div className="col-md-4">
                 <a href="/locations/ajouter-une-location" className="btn btn-success d-block font-weight-bold rounded-0">
                  <i className="fas fa-plus"></i> &nbsp;Ajouter une location</a>
               </div>   
            </div>
        </div> 

        <div className="container-fluid">
            <div className="row"> 
              <div className="col-md-4 mt-4">
                  <div className="card">
                    <div className="text-white p-4" style={{backgroundColor:'#00cccb'}}>
                      <i className="fas fa-key fa-4x"></i>
                      <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>{this.renderNumberOfRents()}<span className="d-block">location(s)</span></h2>
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
                <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">Nos Locations</h2>
                <div className="container d-flex justify-content-center">
                
                <table className="table mt-3">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Numéro</th>
                      <th>Début</th>
                      <th>Fin</th>
                      <th>Adresse</th>
                      <th>Code postal</th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                   {renderrents}
                  </tbody>
                </table>
              </div>
            </div>
              
            </div>
        </div>
        {rents.length > this.state.rentPerPage ? <ReactPaginate pageCount={Math.ceil(rents.length/this.state.rentPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
        
      </div>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  rent: state.rent
});

export default connect(
  mapStateToProps,{getRents}
)(RentsPage);


