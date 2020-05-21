import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLogementById, updateLogement, getLogements } from "../../actions/logementActions";
import classnames from "classnames";
import { bindActionCreators } from 'redux';
import NavDashboard from './NavDashboard';



//import './StylePageNousContacter.css';

class UserProfile extends Component {
	constructor(){
		super()
		this.state={
			email: "",
      firstname: "",
      lastname: "",
      password: "",
      adress: "",
      telephone: "",
      type: "",
      errors:{}
		}

		this.onChange=this.onChange.bind(this)
		this.onSubmit= this.onSubmit.bind(this)
		}


    componentDidMount(){

     
    }

    

		/*componentWillReceiveProps = (nextProps) => {
    this.setState({
      fk_ville: nextProps.logement.logement.fk_ville,
      adresse: nextProps.logement.logement.adresse,
      code_postal: nextProps.logement.logement.code_postal,
      complement: nextProps.logement.logement.complement,
      type: nextProps.logement.logement.type,
      nb_lits: nextProps.logement.logement.nb_lits,
      nb_sdb: nextProps.logement.logement.nb_sdb,
      description: nextProps.logement.logement.description,
      superficie: nextProps.logement.logement.superficie
    });
  }*/



		onChange (e){
		this.setState({[e.target.name]:e.target.value})
		}

		onSubmit(e){
		e.preventDefault();
		const userInfo={
			email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
      adress: this.state.adress,
      telephone: this.state.telephone,
      type: this.state.type,
}

		
		}
	
  render() {
  		
  		const { errors } = this.state;
      const { logement } = this.props.logement;
      const { user } = this.props.auth;
      console.log(user);
      console.log(logement);


   
    return (
      <div>
        
        <div className="container forms">
        	<div className='row'>
	        	

	             <p className="text-center col-lg-12 col-md-12 col-xs-12">
	                        {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
	                           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
	                              <span aria-hidden="true">&times;</span>
	                           </button>
	                         </span>:''}
	             </p>
	        </div>

    <div className="row">
        
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

            <div className="card">
                <div className="card-header bg-primary text-white"><i className="fa fa-user"></i> Mes informations
                </div>
                <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Ajouter un bien</h1>
                        <p className="text-center">
                        {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                         </span>:''}
                       </p>
                            <div className="form-group">
                              <label for="adresse">Adresse*</label>
                              <input type="text" name="adresse"  id="adresse"  className="form-control"
                                value={this.state.adresse}
                                onChange={this.onChange} />    
                            </div>
                            

                            <div className="form-group">
                              <label for="adresse">Adresse*</label>
                              <input type="text" name="adresse"  id="adresse"  className="form-control"
                                value={this.state.adresse}
                                onChange={this.onChange} />    
                            </div>

                             

                            <div className="form-group">
                              <label for="adresse">Adresse*</label>
                              <input type="text" name="adresse"  id="adresse"  className="form-control"
                                value={this.state.adresse}
                                onChange={this.onChange} />    
                            </div>

                             <div className="form-group">
                              <label for="adresse">Adresse*</label>
                              <input type="text" name="adresse"  id="adresse"  className="form-control"
                                value={this.state.adresse}
                                onChange={this.onChange} />    
                            </div>
                                

                            <div className="form-group">
                              <label for="adresse">Adresse*</label>
                              <input type="text" name="adresse"  id="adresse"  className="form-control"
                                value={this.state.adresse}
                                onChange={this.onChange} />    
                            </div>

                             <div className="form-group">
                              <label for="code_postal">Superficie*</label>
                              <input type="text" name="superficie"  id="superficie" placeholder="superficie" className="form-control"
                                value={this.state.superficie}
                                onChange={this.onChange}/>
                            </div>
                            
                            
                         
                        
  <button type="submit" className="btn btn-primary">Sauvegarder</button>

                   
                  </form>
                </div>
            </div>
        </div>


        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        

            <div className="card mb-3">
                <div className="card-header bg-primary text-white"><i className="fa fa-pencil"></i> Modifier mon mot de passe
                </div>
                <div className="card-body">
                    <form noValidate >
                      <div className="form-group">
                            <label htmlFor="bureau">Mon tarif</label>
                            <select className={classnames("form-control",{
                          invalid: errors.bureau
                          })}
                          value={this.state.bureau}
                          onChange={this.onChange}  to="bureau" name="bureau">
                            <option value=""></option>
                              <option value="Paris et îles de France">Paris et île de  France</option>
                              <option value="Lyon">Lyon</option>
                              <option value="Bordeau">Bordeau</option>
                              <option value="Marseille">Marseille</option>
                              <option value="Monaco">Monaco</option>
                            </select>
                             <span className="red-text" style={{color:'red'}}>
                              {errors.bureau}  
                          </span>
                            </div>
                        <div className="form-group">
                            <label htmlFor="mailSubject">Objet</label>
                            <select className={classnames("form-control",{
                            invalid: errors.mailSubject
                            })}
                            value={this.state.mailSubject}
                            onChange={this.onChange} id="mailSubject" name="mailSubject">
                              <option value=""></option>
                              <option value="renseignement">Je suis intéressé par les service de Key Service</option>
                              <option value="voyageur">Je séjourne dans un logement de Key Service</option>
                              <option value="hôte">Je suis un client de  Key Service</option>
                              <option value="autre">Autre</option>
                            </select>
                            <span className="red-text" style={{color:'red'}}>
                              {errors.mailSubject}  
                          </span>
                        </div>
                        
                        <div className="mx-auto">
                        <button type="submit" className="btn btn-primary text-right">changer</button></div>
                    </form>
                </div>
            </div>

          
        </div>



        
    </div>
</div>
</div>

    );
  }
}
UserProfile.propTypes = {
  getLogementById: PropTypes.func.isRequired,
  updateLogement: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  logement: state.logement
});




export default connect(
  mapStateToProps,
  {getLogementById, updateLogement}
)(withRouter(UserProfile));

