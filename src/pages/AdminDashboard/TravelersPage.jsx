import React, { Component } from "react";
import { connect } from "react-redux";
import { getTravelers } from "../../actions/travelerActions";
import ReactPaginate from 'react-paginate';
import './logementsPageStyle.css';

class TravelersPage extends Component {
    constructor(){
    super()
    this.state={
      nb_traveler: 0, 
      nb_line: 0,
      currentPage: 1,
      travelerPerPage: 10
    } 
    }

    componentDidMount(){
        this.props.getTravelers();
    }

    renderNumberOfTravelers(){
        this.state.nb_traveler = this.props.traveler.travelers.length;
        return this.state.nb_traveler;
    }

    /*renderTravelers(){
    return this.props.traveler.travelers.map(traveler => {
      this.state.nb_line= this.props.traveler.travelers.indexOf(traveler)+1;
      return ( <tr key={traveler.id}>
              <td> {this.state.nb_line} </td>
              <td> {traveler.firstname} </td>
              <td> {traveler.lastname} </td>
              <td> {traveler.email} </td>
              <td> {traveler.telephone} </td>
              <td> <a href={`/voyageurs/${traveler.id}`} className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });
  }*/

  paginate(pageNumber){
    this.setState({
      currentPage: pageNumber
    },() => {
        this.props.getTravelers();
      });
  }



    render() {
        const { travelers } = this.props.traveler;
        const { user } = this.props.auth;
        const indexOfLastTraveler = this.state.currentPage * this.state.travelerPerPage;
        const indexOfFirstTraveler = indexOfLastTraveler - this.state.travelerPerPage;
        const currentTraveler = travelers.slice(indexOfFirstTraveler, indexOfLastTraveler);

        const renderTravelers = currentTraveler.map(traveler => {
        this.state.nb_line= this.props.traveler.travelers.indexOf(traveler)+1;
        return ( <tr key={traveler.id}>
                <td> {this.state.nb_line} </td>
                <td> {traveler.firstname} </td>
                <td> {traveler.lastname} </td>
                <td> {traveler.email} </td>
                <td> {traveler.telephone} </td>
                <td> <a href={`/voyageurs/voyageur/${traveler.id}`} className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
                
              </tr>

          );
      });

        return (
         <div style={{marginTop:'4em'}}>
            <div className="bg-light p-3">
                    <div className="row  d-flex justify-content-start">
                       <div className="col-md-4">
                         <a href="/voyageurs/ajouter-un-voyageur" className="btn btn-success d-block font-weight-bold rounded-0">
                          <i className="fas fa-plus"></i> &nbsp;Ajouter un locataire</a>
                       </div>   
                    </div>
                </div> 

                <div className="container-fluid">
                    <div className="row"> 
                      <div className="col-md-4 mt-4">
                          <div className="card">
                            <div className="text-white p-4" style={{backgroundColor:'#00cccb'}}>
                              <i className="fas fa-suitcase fa-4x"></i>
                              <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>{this.renderNumberOfTravelers()}<span className="d-block">voyageur(s)</span></h2>
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
                        <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">Nos voyageurs</h2>
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
                           {renderTravelers}
                          </tbody>
                        </table>
                      </div>
                    </div>
                      
                    </div>
                </div>
                {travelers.length > this.state.travelerPerPage ? <ReactPaginate pageCount={Math.ceil(travelers.length/this.state.travelerPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
        
         </div>
        )
    }
}
const mapStateToProps = state =>({
  auth: state.auth,
  traveler: state.traveler
});
export default connect(mapStateToProps,{getTravelers})(TravelersPage);
