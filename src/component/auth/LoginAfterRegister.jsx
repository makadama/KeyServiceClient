import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class LoginAfterRegister extends Component{
	constructor(){
		super()
		this.state={
			email: '',
			password: '',
			errors:{}
		}

		this.onChange=this.onChange.bind(this)
		this.onSubmit= this.onSubmit.bind(this)
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
	  	 if (nextProps.auth.isAuthenticated) {

    	if(nextProps.auth.user.type==="hote"){
    		this.props.history.push("/dashboardHote");
    	}
    	else{
    		this.props.history.push("/dashboardVoyageur");
    	}
      
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

	onChange (e){
		this.setState({[e.target.name]:e.target.value})
	}

	onSubmit(e){
		e.preventDefault();
		const user={
			email: this.state.email, 
			password: this.state.password

		}

		this.props.loginUser(user);
	}

	render(){
		const { errors } = this.state;
		return(
			<div className="container">
          <p className="text-center">
              <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}>
                 Bienvenue à key Service, votre compte a été créé avec succès
                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                 </button>
              </span>
            </p>
          <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                  <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>

                   
                     <p className="text-center">
                        {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                         </span>:''}
                    </p>

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
                  <p className="text-p text-right"> <a href="/forgetPassword">Forgot password?</a> </p>

                  <div>

                    <button
                      type="submit"
                      className="btn btn-lg btn-primary btn-block"
                    >
                      Login!
                    </button>

                      <label>Pas de compte?
                         <a className="underlineHover" href="/inscription1"> inscrivez vous!</a> 
                      </label>
                  </div>
                </form>
                  </div>
                 </div>
            </div>
			)
	}
}
LoginAfterRegister.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(LoginAfterRegister));
