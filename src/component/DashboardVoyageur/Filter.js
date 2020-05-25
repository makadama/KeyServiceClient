import React , {Component} from 'react';
import { connect } from 'react-redux';
import { sortPaniers } from "../../actions/panierActions"

class Filter extends Component{
 render(){
 	return(
 			<div className="row">
 				<div className="col-md-4">
 					{this.props.filteredPaniers.length} paniers trouvés.
 				</div>
 				<div className="col-md-4">
 					<label>
 					classer du:
 						<select className="from-control" value={this.props.sort} onChange={(e) =>this.props.sortPaniers(this.props.filteredPaniers, e.target.value)}>
 							<option value=""> select </option>
 							<option value="lowest">	moins au plus cher   </option>
 							<option value="highest"> plus au moins cher </option>
 						</select>
 					</label>
 				</div>

 			 </div>
 		)
 }
}
const mapStateToProps = state => ({
	paniers: state.paniers.items,
	filteredPaniers: state.paniers.filteredItems,
	sort: state.paniers.sort
})
export default connect(mapStateToProps, { sortPaniers })(Filter); 