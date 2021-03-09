import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getOneOrder, deleteOrder} from '../../actions/orderActions';
import { getOneOrderDetails } from '../../actions/orderDetailsActions';
import { Link } from 'react-router-dom';
import './styleDisplayCommande.css';
import { withRouter } from 'react-router-dom';


class OrderDetailsPage extends Component{
	componentDidMount(){
		this.props.getOneOrder(this.props.match.params.id)
		this.props.getOneOrderDetails(this.props.match.params.id)
	}

  onDelete(val, e){
    e.preventDefault();
    this.props.deleteOrder(val, this.props.history)
  }
	render(){
		const {order} = this.props.order;
		const {ordersDetails} = this.props.orderDetails;
		console.log(order);
		console.log(ordersDetails);

		const renderDetails = ordersDetails.map( item =>{
					return(		<li key={item.id}>
                            <div className="cart-image">
                              <img src={`/assets/${item.image}.JPG`} alt="product" />
                            </div>
                            <div className="cart-name">
                              <div>
                                <Link to="">
                                  {item.titre}
                               </Link>

                              </div>
                              <div>
                                Qty: {item.quantite}
                              </div>
                            </div>
                            <div className="cart-price">
                              {item.prix}€
                            </div>
                          </li> )
		})


		return(
			<div style={{marginTop:'4em'}}>
          
            <div className="placeorder">
              <div className="placeorder-info">
                <div>
                  <h3>
                    Expedition
                  </h3>
                  <div>
                    {order.adresse}, {order.codePostal},
                    {order.ville}
                  </div>
                </div>
                <div>
                  <h3>Paiement</h3>
                  <div>
                    Methode de paiement: {order.modePaiement}
                  </div>
                </div>
                <div>
                  <ul className="cart-list-container">
                    <li>
                      <h3>
                        Poduits
                  </h3>
                      <div>
                        Prix
                  </div>
                    </li>
        
                    {renderDetails}
                  </ul>
                </div>

              
              </div>
              <div className="placeorder-action">
              <ul>
                <li className="dflex justify-content-center">
                  <button className="btn  btn-danger  btn-block ml-2 "  style={{width:'250px'}} onClick={this.onDelete.bind(this,order.id)}>Supprimer</button>
                 </li>             
                <li>
                  <h3>La commande</h3>
                </li>
                <li>
                  <div>produits</div>
                  <div>{order.total-order.taxe}€</div>
                </li>
                <li>
                  <div>Taxe</div>
                  <div>{order.taxe}€</div>
                </li>
                <li>
                  <div>Total</div>
                  <div>{order.total}€</div>
                </li>
              </ul>



      </div>

                
          
          </div>


      </div>
			)
	}
}
const mapStateToProps = state =>({
	auth: state.auth,
	order: state.order,
	orderDetails: state.orderDetails
})


export default connect(mapStateToProps, {getOneOrder, getOneOrderDetails, deleteOrder})(withRouter(OrderDetailsPage));