import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendAnEmail } from "../../actions/authActions";
import classnames from "classnames";


class ForgetPassword extends Component{
	constructor(){
		super()
		this.state={
			email: '',
			errors:{}
		}
		this.onChange=this.onChange.bind(this)
		this.onSubmit= this.onSubmit.bind(this)
	}

	componentWillReceiveProps(nextProps) {
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
			email: this.state.email
		}
		this.props.sendAnEmail(user);
	}
	render(){
		const { errors } = this.state;
		return(

		<div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
           <p className="text-center">
                    {errors.message ? <span className="alert alert-danger" style={{width:'auto'}}>{errors.message} </span>:''}
                </p>
              <h1 className="h3 mb-3 font-weight-normal">mot de passe oublié</h1>
             
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
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Envoyer un mail!
              </button>
            </form>
          </div>
        </div>
      </div>

			)
	}
}
ForgetPassword.propTypes = {
  sendAnEmail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { sendAnEmail }
)(ForgetPassword);

