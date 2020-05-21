import React, { Component } from "react";
import  axios  from 'axios';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLogementById, updateLogement, getLogements } from "../../actions/logementActions";

class UploadImages extends Component {
constructor(props) {
        super(props);
        this.state ={
            file: null,
            fk_logement: this.props.match.params.id
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    comonentDidMount(){

    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('fk_logement', this.state.fk_logement);
        formData.append('file',this.state.file);
        const  token = localStorage.getItem('jwtToken');
  
        const config = {
          headers:{
            'Content-type' : 'application/json'
          }
        };
         if(token){
            config.headers['x-access-token'] = token;
        }
        axios.post("/api/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
          <div className="container">
            <div className="row">
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="file" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
            </div>
          </div>
        )
    }
  }

export default UploadImages;