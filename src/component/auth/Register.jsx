import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";



class Register extends Component{
	constructor(){
		super()
		this.state={
			email:'', 
		    firstname:'', 
		    lastname: '',
		    adress: '',
		    telephone: '',
		    password: '',
        password2: '',
		    errors:{}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {

      if(this.props.auth.user.type === "hote"){
        this.props.history.push("/dashboardHote");
      }
      else{
        this.props.history.push("/dashboardVoyageur");
      }
      
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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

		this.props.registerUser(newUser, this.props.history);
	}

	 render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
           <p className="text-center">
                    {errors.message ? <span className="alert alert-danger" style={{width:'auto'}}>{errors.message} </span>:''}
                </p>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
             
            <form noValidate onSubmit={this.onSubmit}>


              	<div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter email"
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
                <label htmlFor="firstname">First name</label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
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
                <label htmlFor="lastname">Last name</label>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
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
                  placeholder="Enter your last address"
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
                  placeholder="Enter your phone number"
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
                <label htmlFor="password">Password</label>
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
                <label htmlFor="password2">Password confirmation</label>
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
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
