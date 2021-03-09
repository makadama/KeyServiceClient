import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { getOrders } from '../../actions/orderActions';
import ReactPaginate from 'react-paginate';
import './logementsPageStyle.css';

class OrderPage extends Component{
	constructor(){
		super()
		this.state={
			nb_commande: 0, 
      nb_line: 0,
      currentPage: 1,
      orderPerPage: 10
		}
	}

	renderNumberOfOrders(){
    	this.state.nb_commande = this.props.order.orders.length;
    	return this.state.nb_commande;
    }


	componentDidMount(){
		this.props.getOrders()
	}

	/*renderOrders(){
    return this.props.order.orders.map(order => {
      this.state.nb_line= this.props.order.orders.indexOf(order)+1;
      return ( <tr key={order.id}>
      		  <td> {this.state.nb_line} </td>
              <td> {order.id} </td>
              <td> {order.adresse} </td>
              <td> {order.codePostal} </td>
              <td> {order.ville} </td>
              <td> {order.paidAt} </td>
              <td> <a href="" className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });
  }*/
    paginate(pageNumber){
    this.setState({
      currentPage: pageNumber
    },() => {
        this.props.getOrders();
      });
  }


	render(){
		const {orders} = this.props.order;
    const indexOfLastOrder = this.state.currentPage * this.state.orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - this.state.orderPerPage;
    const currentOrder = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const renderOrders =currentOrder.map(order => {
      this.state.nb_line= this.props.order.orders.indexOf(order)+1;
      return ( <tr key={order.id}>
            <td> {this.state.nb_line} </td>
              <td> {order.id} </td>
              <td> {order.adresse} </td>
              <td> {order.codePostal} </td>
              <td> {order.ville} </td>
              <td> {order.paidAt} </td>
              <td> <a href={`/commandes/commande/${order.id}`} className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });

		return(
			<div style={{marginTop:'4em'}}>

        <div className="container-fluid p-3">
            <div className="row"> 
              <div className="col-md-4 mt-4">
                  <div className="card">
                    <div className="text-white p-4" style={{backgroundColor:'#00cccb'}}>
                      <i className="fas fa-key fa-4x"></i>
                      <h2 className="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>{this.renderNumberOfOrders()}<span className="d-block">commande(s)</span></h2>
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
                <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">Les Commandes</h2>
                <div className="container d-flex justify-content-center">
                
                <table className="table mt-3">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Numero</th>
                      <th>Adresse</th>
                      <th>Code postal</th>
                      <th>Ville</th>
                      <th>Date</th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                   {renderOrders}
                  </tbody>
                </table>
              </div>
            </div>
               
            </div>
        </div>
        {orders.length > this.state.orderPerPage ? <ReactPaginate pageCount={Math.ceil(orders.length/this.state.orderPerPage)} pageRangeDisplayed={2}  marginPagesDisplayed={2} onPageChange={(data) =>this.paginate(data.selected+1)} containerClassName={"pagination"} previousLabel={"précédent"} nextLabel={"suivant"}/> : ''}
        
			</div>
			)
	}

}
const mapStateToProps = state =>({
	auth: state.auth,
	order: state.order
})

export default connect(mapStateToProps,{getOrders})(OrderPage);