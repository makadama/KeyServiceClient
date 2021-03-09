import React , {Component} from 'react';
import classnames from "classnames";
import { connect } from "react-redux";
import { registerOwner,  deleteOwner } from "../../actions/ownerActions";

class AddOwnerPage extends Component{
	constructor(props){
		super(props)
		this.state={
			email:'', 
		    firstname:'', 
		    lastname: '',
		    adress: '',
		    telephone: '',
		    password: '',
        	password2: '',
		    errors:{}, 
		    success: false
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
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
	onChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault();
		const newUser={
			email: this.state.email, 
		    firstname:this.state.firstname, 
		    lastname: this.state.lastname,
		    adress: this.state.adress,
		    telephone: this.state.telephone,
		    password: this.state.password,
        password2: this.state.password2
		}

		this.props.registerOwner(newUser);
	}
	render(){
		const {errors} = this.state;
		const {success} = this.state;
		return(
			<div style={{marginTop:'4em'}}>
				<div className="container">
				<p className="text-center">
                    {errors.message ? <span className="alert alert-danger" style={{width:'auto'}}>{errors.message} </span>:''}
           </p>
           <p className="text-center col-lg-12 col-md-12 col-xs-12">
                    		{success ? <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}> Ajouté avec succès! 
                    			l'utisateur recevra un mail pour modifier son mot de passe.
                             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
            </p>
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
           
              <h1 className="h3 mb-3 font-weight-normal">Ajouter un propriétaire</h1>
             <div className="seperator2"></div>
            <form noValidate onSubmit={this.onSubmit}>


              	<div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Entrer votre adresse email"
                  className={classnames("form-control",{
                      invalid: errors.email
                    })}
                  value={this.state.email}
                  onChange={this.onChange}
                />
                  <span className="red-text" style={{color:'red'}}>
                      {errors.email}  
                  </span>
              	</div>

                 <div className="form-group">
                <label htmlFor="firstname">Prénom</label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Entrer votre prénom"
                  className={classnames("form-control",{
                      invalid: errors.firstname
                    })}
                  value={this.state.firstname}
                  onChange={this.onChange}
                />
                  <span className="red-text" style={{color:'red'}}>
                      {errors.firstname}  
                  </span>
              </div>

              <div className="form-group">
                <label htmlFor="lastname">Nom</label>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Entrer votre nom"
                  className={classnames("form-control",{
                      invalid: errors.lastname
                    })}
                  value={this.state.lastname}
                  onChange={this.onChange}
                />
                <span className="red-text" style={{color:'red'}}>
                      {errors.lastname}  
                </span>
              </div>

               <div className="form-group">
                <label htmlFor="adress">Adresse</label>
                <input
                  id="adress"
                  type="text"
                  name="adress"
                  placeholder="Entrer votre adresse"
                  className={classnames("form-control",{
                      invalid: errors.adress
                    })}
                  value={this.state.adress}
                  onChange={this.onChange}
                />
                <span className="red-text" style={{color:'red'}}>
                      {errors.adress}  
                </span>
              </div>

               <div className="form-group">
                <label htmlFor="telephone">Telephone</label>
                <input
                  id="telephone"
                  type="text"
                  name="telephone"
                  placeholder="Entrer votre numéro"
                  className={classnames("form-control",{
                      invalid: errors.telephone
                    })}
                  value={this.state.telephone}
                  onChange={this.onChange}
                />
                <span className="red-text" style={{color:'red'}}>
                      {errors.telephone}  
                </span>
              </div>


              <div className="form-group">
                <label htmlFor="password">mot de passe</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="mot de passe"
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
                <label htmlFor="password2">confirmer votre mot de passe</label>
                <input
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="mot de passe"
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


              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </div>
			</div>
			)
	}
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors, 
  success: state.success
});
export default connect(mapStateToProps, {registerOwner, deleteOwner})(AddOwnerPage);