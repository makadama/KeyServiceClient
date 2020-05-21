import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendNewPassword } from "../../actions/authActions";
import classnames from "classnames";

class ResetPassword extends Component{
	constructor(){
		super()
		this.state={
			linkDate: '',
			email: '',
			password: '',
			password2: '',
			errors:{}
		}
		this.onChange=this.onChange.bind(this)
		this.onSubmit= this.onSubmit.bind(this)
	}

	componentDidMount(){
		let slugParam = this.props.match.params.slug;
        let splitSlug=slugParam.split("+++");
        let reqDate=splitSlug[0];
        let email=splitSlug[1];
        console.log(reqDate);
        console.log(email);
        this.setState({email:email,linkDate:reqDate});
        let date1 = new Date(reqDate);
        let currentDate = new Date();
        let differenceinMS = currentDate - date1
        if (differenceinMS > 3600000) {
            this.props.history.push("/login");
        }
	}

	onChange (e){
		this.setState({[e.target.name]:e.target.value})
	}

	onSubmit(e){
		e.preventDefault();
		
		this.props.sendNewPassword(this.state, this.props.history);
	}

	componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

	render(){
		const { errors } = this.state;
		return(
			<div className="row">
	          <div className="col-md-6 mt-5 mx-auto">
	            <form noValidate onSubmit={this.onSubmit}>
	              <h1 className="h3 mb-3 font-weight-normal">Login</h1>

	             
              	 <p className="text-center">
                    {errors.message ? <span className="alert alert-danger" style={{width:'auto'}}>{errors.message} </span>:''}
                </p>

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
                <label htmlFor="password2">Confirm password</label>
                <input
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="Confirm password"
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

              <div>
	              <button
	                type="submit"
	                className="btn btn-lg btn-primary btn-block"
	              >
	                changer le mot de passe!
	              </button>
              </div>
            </form>
              </div>
             </div>
			)
	}
}
ResetPassword.propTypes = {
  sendNewPassword: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { sendNewPassword }
)(withRouter(ResetPassword));

