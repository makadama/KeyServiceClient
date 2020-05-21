import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

import {getDisponibilite, getOnedisponibilite, updateDisponibilite, deleteDisponibilite, addDisponibilite}  from "../../actions/disponibiliteActions";

class LogementAvailability extends Component {
  constructor () {
super()
    this.state = {
      id:'',
      logementId:'',
      date_debut: new Date(),
      date_fin: new Date(),
      editDisabled: false,
      errors:{}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      date_fin,
      editDisabled: 'disabled' 
    });
  }

  componentDidMount(){
      if(this.props.match.params.id){
        this.props.getDisponibilite(this.props.match.params.id)
      }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const mesDispos={
      date_debut: this.state.date_debut,
      date_fin: this.state.date_fin,
      logementId: this.props.match.params.id
    }
    this.props.addDisponibilite(mesDispos);

     this.setState({ editDisabled: false })
  }

  onEdit(dispoId, logementId, date_debut, date_fin, e){
    e.preventDefault();
    this.setState({
      id: dispoId,
      logementId: logementId,
      date_debut: new Date(date_debut),
      date_fin: new Date(date_fin)
    })
  }

  onUpdate(e){
    e.preventDefault();
    const editedDispos={
      date_debut: this.state.date_debut,
      date_fin: this.state.date_fin,
      logementId: this.props.match.params.id
    }

    this.props.updateDisponibilite(this.state.id, editedDispos);
    this.setState({ editDisabled: false });
  }

  onDelete = (val, val2, e) => {
    e.preventDefault();
    this.props.deleteDisponibilite(val, val2);
   
  }


  render() {
    const { user } = this.props.auth;
    const { dispos } =this.props.dispo;
    const { errors } = this.state;
    let renderDispo;
    if(dispos){
      renderDispo=dispos.map(dispo => {
                       return (<tr   key={dispo.id}>
                          <td> {dispo.id}</td>
                          <td> {dispo.date_debut} </td>
                          <td> {dispo.date_fin}</td>
                         <td>
                          <button  className="btn btn-info mr-1" disabled={this.state.editDisabled} onClick={this.onEdit.bind(this, dispo.id, dispo.fk_logement, dispo.date_debut, dispo.date_fin)} >
                              Editer
                          </button>
                          <button  className="btn btn-danger mr-1"  onClick={this.onDelete.bind(this, dispo.id, dispo.fk_logement)}>
                              supprimer
                          </button>
                      </td>
                        </tr>
                      )
                      })

    }
    return (
      <div className="container">
          <p className="text-center">
                          {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
          </p>
        <div className="row">
          <div className="col-md-12 mt-5 mx-auto">
                      <form noValidate onSubmit={this.handleSubmit}>
                          <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className="form-group">
                                    <label>Date début: </label>
                                    <DatePicker
                                      className="form-control"
                                      selected={ this.state.date_debut }
                                      onChange={ date=>this.handleChange('date_debut', date) }
                                      name="date_debut"
                                      dateFormat="yyyy-MM-dd"
                                      value={this.state.date_debut}
                                      border-color="Red"
                                    />
                                  </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                  <div className="form-group">
                                    <label>Date fin: </label>
                                    <DatePicker
                                      className="form-control"
                                      selected={ this.state.date_fin }
                                      onChange={ date=>this.handleChange('date_fin', date) }
                                      name="date_fin"
                                      dateFormat="yyyy-MM-dd"
                                      value={this.state.date_fin}
                                    />
                                  </div>
                            </div>
                                  
                            <div className="mx-auto col-md-2 col-lg-2">
                                <label> </label>
                                  <button  onClick={this.onUpdate.bind(this)} className="btn btn-primary">Changer</button>
                                
                            </div>
                            <div className="mx-auto mt-5 col-md-6 col-lg-6">
                                
                                  <button   type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-success btn-block">Ajouter</button>
                                
                            </div>
                          </div>
                      </form>
                  </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <table>
                  <thead>
                    <tr>
                      <th>N</th>
                      <th>date début</th>
                      <th>date fin</th>
                      <th colSpan="2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderDispo}
                  </tbody>
                </table>
              </div>
            </div>
          </div>    
        
        
     
    );
  }
}

LogementAvailability.propTypes = {
  auth: PropTypes.object.isRequired,
  dispo:  PropTypes.object.isRequired,
  getDisponibilite: PropTypes.func.isRequired,
   getOnedisponibilite: PropTypes.func.isRequired, 
   updateDisponibilite: PropTypes.func.isRequired,
    deleteDisponibilite: PropTypes.func.isRequired,
     addDisponibilite: PropTypes.func.isRequired,
     errors: PropTypes.object.isRequired


};

const mapStateToProps = state => ({
  auth: state.auth,
  logement: state.logement,
  dispo: state.dispo,
  errors: state.errors
});

export default connect(
  mapStateToProps, {
    getDisponibilite, getOnedisponibilite, updateDisponibilite, deleteDisponibilite, addDisponibilite
  }

)(LogementAvailability);
