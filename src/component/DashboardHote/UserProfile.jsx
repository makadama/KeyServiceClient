import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../actions/userActions";
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
      password2: "",
      password3: "",
      adress: "",
      telephone: "",
      type: "",
      errors:{}
		}

		this.onChange=this.onChange.bind(this)
		this.onSubmit= this.onSubmit.bind(this)
    this.onSubmitPassword= this.onSubmitPassword.bind(this)
		}


    componentDidMount(){
        this.props.getUser(this.props.auth.user.id);
     
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

 componentWillReceiveProps = (nextProps) => {
    this.setState({
      email: nextProps.hote.email,
      firstname: nextProps.hote.firstname,
      lastname: nextProps.hote.lastname,
      adress: nextProps.hote.adress,
      telephone: nextProps.hote.telephone,

      
    });
  }

		onChange (e){
		this.setState({[e.target.name]:e.target.value})
		}

		onSubmit(e){
		e.preventDefault();
		const userInfo={
			email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.props.hote.password,
      adress: this.state.adress,
      telephone: this.state.telephone,
      type: this.props.auth.user.type
}
    this.props.updateUser(this.props.match.params.id, userInfo);
		
		}

onSubmitPassword(e){
      e.preventDefault();
    const userInfo={
      email: this.props.hote.email,
      firstname: this.props.hote.firstname,
      lastname: this.props.hote.lastname,
      password: this.state.password,
      password2: this.state.password2,
      password3: this.state.password3,
      adress: this.props.hote.adress,
      telephone: this.props.hote.telephone,
      type: this.props.auth.user.type
}
    this.props.updateUser(this.props.match.params.id, userInfo);
}

   
	
  render() {
  		
  		const { errors } = this.state;
      
      const { user } = this.props.auth;
      console.log(user);

      const { hote } =  this.props;
      console.log(hote);
     


   
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
                    <h1 className="h3 mb-3 font-weight-normal">Mon profil</h1>
                        <p className="text-center">
                        {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                         </span>:''}
                       </p>
                            <div className="form-group">
                              <label for="email">email</label>
                              <input type="text" name="email"  id="email"  className="form-control"
                                value={this.state.email}
                                onChange={this.onChange} />    
                            </div>
                            

                            <div className="form-group">
                              <label for="firstname">Prénom</label>
                              <input type="text" name="firstname"  id="firstname"  className="form-control"
                                value={this.state.firstname}
                                onChange={this.onChange} disabled />    
                            </div>

                             

                            <div className="form-group">
                              <label for="lastname">Nom</label>
                              <input type="text" name="lastname"  id="lastname"  className="form-control"
                                value={this.state.lastname}
                                onChange={this.onChange} />    
                            </div>

                             <div className="form-group">
                              <label for="adress">Adresse</label>
                              <input type="text" name="adress"  id="adress"  className="form-control"
                                value={this.state.adress}
                                onChange={this.onChange} />    
                            </div>
                                

                           

                             <div className="form-group">
                              <label for="telephone">Téléphone</label>
                              <input type="text" name="telephone"  id="telephone"  className="form-control"
                                value={this.state.telephone}
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
                    <form noValidate onSubmit={this.onSubmitPassword}>
                      <div className="form-group">
                            <label htmlFor="password">Ancien mot de passe </label>
                            <input
                              id="password"
                              type="password"
                              name="password"
                              placeholder="Password"
                              className={classnames("form-control",{
                                  invalid: errors.password
                                })}
                              value={this.state.password}
                              onChange={this.onChange}
                            />
                            <span className="red-text" style={{color:'red'}}>
                                  {errors.password}  
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password2">Nouveau mot de passe</label>
                            <input
                              id="password2"
                              type="password"
                              name="password2"
                              placeholder="confirm your password"
                              className={classnames("form-control",{
                                  invalid: errors.password2
                                })}
                              value={this.state.password2}
                              onChange={this.onChange}
                            />
                            <span className="red-text" style={{color:'red'}}>
                                  {errors.password2}  
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password3">Confirmation</label>
                            <input
                              id="password3"
                              type="password"
                              name="password3"
                              placeholder="confirm your password"
                              className={classnames("form-control",{
                                  invalid: errors.password3
                                })}
                              value={this.state.password3}
                              onChange={this.onChange}
                            />
                            <span className="red-text" style={{color:'red'}}>
                                  {errors.password3}  
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
  getUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  hote: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  hote: state.hote
});




export default connect(
  mapStateToProps,
  {getUser, updateUser}
)(withRouter(UserProfile));

