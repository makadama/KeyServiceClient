import React , {Component} from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from "../../actions/cartActions";
import symbol from  '../../utils/symbol';

class Basket extends Component{
 render(){
 			const {cartItems} = this.props;
 	return(
 			<div className="alert alert-info">
 				{cartItems.length===0? "Votre Panier est vide": <div>vous avez {cartItems.length} panier(s) de produits dans votre panier </div> }
 				{cartItems.length>0 &&
 					<div>
 						<ul>
 							{cartItems.map(item =>
 								<li key={item.id}>
 									<b>{item.libelle} </b>
 									 x {item.count} = {item.prix * item.count}
 									<button className="btn btn-danger" onClick={(e) =>this.props.removeFromCart(this.props.cartItems, item)} >X</button>
 								</li>
 							)}
 						</ul>
 						Total: {symbol.formatCurrency(cartItems.reduce((a,c) => a+c.prix*c.count, 0))}
 						<button className="btn" style={{backgroundColor:'orange'}} onClick={()=> alert("checkout needs to implement...")}>
 								valider la commande
 						</button>
 					</div>

 				}
 				
 				
 			 </div>
 		)
 }
}const mapStateToProps = state =>({
	cartItems: state.cart.items
})
export default connect(mapStateToProps, {removeFromCart}) (Basket); 