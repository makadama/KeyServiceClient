import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPaniers} from "../../actions/panierActions";
import { addToCart } from "../../actions/cartActions";
import symbol from  '../../utils/symbol';

class Paniers extends Component{
	componentWillMount(){
		this.props.fetchPaniers();
	}
	componentWillReceiveProps(nextState){
		console.log(nextState);
	}
	render(){
		const panierItems = this.props.paniers.map(panier=>(
			<div className="col-md-4 mt-2" key={panier.id}>
			<div className="thumbnail text-center">
				<a href="{`#${panier.id}`}" onClick={()=> this.props.addToCart(this.props.cartItems, panier)}>
					<img style={{width:'200px', height:'150px'}} src={`/assets/${panier.imagePanier}.jpg`} alt={panier.libelle}/>
					<p style={{color:'orange', fontSize: '1.3em'}}>
						{panier.libelle}
					</p>
				</a>
				<div>
						<b>{symbol.formatCurrency(panier.prix)}</b>
						<button className="btn btn-info" onClick={()=> this.props.addToCart(this.props.cartItems, panier)}> Add To Cart </button>
				</div>
			</div>
			</div>
		)
			)
		return(
				<div className="row">
					{panierItems}
				</div>
			)
	}
}
const mapStateToProps= state =>({
paniers: state.paniers.filteredItems ,
cartItems: state.cart.items
})

export default connect(mapStateToProps, {fetchPaniers, addToCart})(Paniers);