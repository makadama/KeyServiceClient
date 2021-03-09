import React, {Component} from 'react';
import { connect } from "react-redux";
import { getRentByRentId , updateRent} from "../../actions/rentActions";
import classnames from "classnames";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { addMonths } from 'date-fns';

class UpdateLocationPage extends Component{
	constructor(props){
		super(props)
		this.state={
			date_debut: "" ,
			date_fin: "",
			errors:{},
	    fk_voyageur: "",
	    fk_logement: "", 
	    success: false
		}
		 this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
    if(this.props.match.params.id){
		this.props.getRentByRentId(this.props.match.params.id)
  }
	}

	componentWillReceiveProps(nextProps){
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
    this.setState({
    fk_logement: nextProps.rent.rent.fk_logement ,
    fk_voyageur: nextProps.rent.rent.fk_voyageur ,
	  date_debut: new Date(nextProps.rent.rent.date_debut),
	  date_fin: new Date(nextProps.rent.rent.date_fin),
    success: nextProps.success,
    });
  }

	handleChange(dateName, dateValue) {
    let { date_debut, date_fin } = this.state;
    if (dateName === 'date_debut') {
      date_debut = dateValue;
    } else {
      date_fin = dateValue;
    }
    this.setState({
      date_debut,
      date_fin
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const maLocation={
      date_debut: this.state.date_debut,
      date_fin: this.state.date_fin,
      fk_logement: this.props.rent.rent.fk_logement,
      fk_voyageur: this.props.rent.fk_voyageur
    }
     this.props.updateRent(this.props.match.params.id, maLocation)
  }

	render(){
		const {errors} = this.state;
		const {success} = this.state;
		
    const {rent} = this.props.rent;
		console.log(rent)
		return(
			<div style={{marginTop:'4em'}}>
				<div className="container" data-test="availabilityComponent">
        		<div className="row">
        			<p className="text-center">
                        {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                         </span>:''}
                       </p>
                       <p className="text-center col-lg-12 col-md-12 col-xs-12">
                    		{success ? <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}> bien ajouté avec succès!
                             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
               			</p>
          			<div className="col-md-6 mt-5 mx-auto">

                      <form noValidate onSubmit={this.handleSubmit}>
                          <div className="row">
                            <div className="col-md-6 col col-xs-12">
                                <div className="form-group">
                                    <label>Date début: </label>
                                    <DatePicker
                                      className="form-control"
                                      selected={ this.state.date_debut }
                                      onChange={ date=>this.handleChange('date_debut', date) }
                                      name="date_debut"
                                      dateFormat="dd-MM-yyyy"
                                      value={this.state.date_debut}
                                      minDate={new Date()}
                                      maxDate={addMonths(new Date(), 6)}
                                      border-color="Red"
                                      disabled
                                    />
                                  </div>
                            </div>
                            <div className="col-md-6 col col-xs-12">
                                  <div className="form-group">
                                    <label>Date fin: </label>
                                    <DatePicker
                                      className="form-control"
                                      selected={ this.state.date_fin }
                                      onChange={ date=>this.handleChange('date_fin', date) }
                                      name="date_fin"
                                      dateFormat="dd-MM-yyyy"
                                      value={this.state.date_fin}
                                      minDate={new Date()}
                                      maxDate={addMonths(new Date(), 6)}
                                    />
                                  </div>
                            </div>
                          </div>
                           <button   type="submit"  className="btn btn-lg btn-primary btn-block">Modifier</button>
                                
                      </form>
                  </div>
            </div>
          </div> 
			</div>
			)
	}
	
}
const mapStateToProps = state =>({
	auth: state.auth,
	errors: state.errors,
	rent: state.rent,
	success: state.success
})

export default connect(mapStateToProps, {getRentByRentId, updateRent})(UpdateLocationPage);