import React , {Component} from 'react';
import { connect } from "react-redux";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { addMonths } from 'date-fns';
import classnames from "classnames";
import { addRent } from "../../actions/rentActions";

class AddRentPage extends Component{
	constructor () {
		super()
	    this.state = {
	      date_debut: new Date(),
	      date_fin: new Date(),
	      errors:{},
	      fk_voyageur: '',
	      fk_logement: '', 
	      success: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange=this.onChange.bind(this)
}

componentWillReceiveProps(nextProps) {
		    if (nextProps.errors) {
		      this.setState({
		        errors: nextProps.errors
		      });
		    }  	
		     this.setState({
      			success:  nextProps.success
    });
		    
  }

onChange (e){
    this.setState({[e.target.name]:e.target.value})
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
      fk_logement: this.state.fk_logement,
      fk_voyageur: this.state.fk_voyageur
    }
    this.props.addRent(maLocation);

     
  }

	render(){ 
		const {errors} = this.state;
		const {success} = this.state;
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
                      	
                      	
                      	  <div className="form-group">
                              <label htmlFor="fk_voyageur">identifiant du voyageur*</label>
                              <input type="text" name="fk_voyageur"  id="fk_voyageur" placeholder="identifiant du voyageur" className={classnames("form-control",{
                                invalid: errors.fk_voyageur
                                })}
                                value={this.state.fk_voyageur}
                                onChange={this.onChange}/>
                                <span className="red-text" style={{color:'red'}}>
                                    {errors.fk_voyageur}  
                                </span>
                           </div>
                          
                           
                           <div className="form-group">
                              <label htmlFor="fk_logement">identifiant du logement*</label>
                              <input type="text" name="fk_logement"  id="fk_logement" placeholder="identifiant du logement" className={classnames("form-control",{
                                invalid: errors.fk_logement
                                })}
                                value={this.state.fk_logement}
                                onChange={this.onChange}/>
                                <span className="red-text" style={{color:'red'}}>
                                    {errors.fk_logement}  
                                </span>
                            </div>

                         
                        
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
                           <button   type="submit"  className="btn btn-lg btn-primary btn-block">Ajouter</button>
                                
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
	success: state.success
})
export default connect(mapStateToProps, {addRent})(AddRentPage);