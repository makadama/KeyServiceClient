import React, {Component} from 'react';
import Paniers from './Paniers';
import axios  from 'axios';
import Filter from './Filter';
import Basket from './Basket';

class PanierLists extends Component{
	
	

	render(){
		return(
			<div className="container">
				<h2> les paniers  key service </h2>
				<p>commandez vos paniers! Keyservice vous les livrera dans les plus bref délais </p>
				<hr/>
				<div className="row">
					<div className="col-md-8">
						<Filter/>
						<hr/>
						<Paniers/>
					</div>
					<div className="col-md-4">
						<Basket/>
					</div>
				</div> 

			</div>
			
			);
	}
}
export default PanierLists;