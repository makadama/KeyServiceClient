import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/authActions";
import './homePageStyle.css';

class HomePage extends Component {
  
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

    
          this.props.history.push("/welcomePage");
         
    }
  }

  componentWillReceiveProps(nextProps) {

      if (nextProps.auth.isAuthenticated) {

        
            this.props.history.push("/welcomePage");
         
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



  render() {
    const { errors } = this.state;
    return (
      <div className="homeP">
       <div className="container ">
       	<div className="row">
       		<div className="col-lg-5 m-auto">
       			<div className="card mt-5 mycard">
       				<div className="card-title  text-center cardTitle mt-4">
       					<img src="/assets/keyLogo_last.jpg" width="150px" height="100"/>
       				</div>
              <div className="card-body">
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user fa-2x"></i>
                      </span>

                    </div>
                    <input type="text" className="form-control py-4" name="email" value={this.state.email} onChange={this.onChange} placeholder="User Name"/>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock fa-2x"></i>
                      </span>

                    </div>
                    <input type="password" className="form-control py-4" name="password" value={this.state.password} onChange={this.onChange} placeholder="User Password"/>
                  </div>
                  <button type="submit" className="btn btn-success"> Se connecter </button>
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

HomePage.propTypes = {
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
)(HomePage);


