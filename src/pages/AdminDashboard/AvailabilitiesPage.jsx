import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import {getDisponibilite, getOnedisponibilite, updateDisponibilite, deleteDisponibilite, addDisponibilite}  from "../../actions/disponibiliteActions";
import { addMonths } from 'date-fns';

class AvailabilitiesPage extends Component{
    constructor () {
super()
    this.state = {
      id:'',
      logementId:'',
      date_debut: new Date(),
      date_fin: new Date(),
      editDisabled: false,
      nb_line: 0,
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
      editDisabled: true
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

  onDelete(val, val2, e){
    e.preventDefault();
    this.props.deleteDisponibilite(val, val2);
   
  }

    render(){

    const { dispos } =this.props.dispo;
    const { errors } = this.state;
    let renderDispo;
    console.log(dispos);
    if(dispos){
      renderDispo=dispos.map(disponibilite => {
                    this.state.nb_line= this.props.dispo.dispos.indexOf(disponibilite)+1;
                       return (<tr   key={disponibilite.id}>

                          <td> {this.state.nb_line} </td>
                          <td> {new Date (disponibilite.date_debut).toLocaleDateString()} </td>
                          <td> {new Date (disponibilite.date_fin).toLocaleDateString()}</td>
                         <td>
                          <button  className="btn btn-outline-info mr-1 rounded-0" disabled={this.state.editDisabled} onClick={this.onEdit.bind(this, disponibilite.id, disponibilite.fk_logement, disponibilite.date_debut, disponibilite.date_fin)} >
                              Editer
                          </button>
                          <button  className="btn btn-outline-danger mr-1 rounded-0"  onClick={this.onDelete.bind(this, disponibilite.id, disponibilite.fk_logement)}>
                              supprimer
                          </button>
                      </td>
                        </tr>
                      )
                      })

    }

        return(
            <div style={{marginTop:'4em'}}>
            <div className="container" data-test="availabilityComponent">
             
          <p className="text-center">
                          {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
          </p>
        <div className="row">
          <div className="col-md-12 mt-5 mx-auto">

                      <form noValidate onSubmit={this.handleSubmit}>
                            <p> ce bien sera disponible: </p>
                          <div className="row">

                            <div className="col-md-4 col-lg-4">
                                <div className="form-group">
                                    <label>Date début: </label>
                                    <DatePicker
                                      className="form-control"
                                      selected={ this.state.date_debut }
                                      onChange={ date=>this.handleChange('date_debut', date) }
                                      name="date_debut"
                                      dateFormat="dd-MM-yyyy"
                                      value={this.state.date_debut}
                                      minDate={new Date()}
                                      maxDate={addMonths(new Date(), 6)}
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
                                      dateFormat="dd-MM-yyyy"
                                      value={this.state.date_fin}
                                      minDate={new Date()}
                                      maxDate={addMonths(new Date(), 6)}
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
            <div className="row mt-5">
              <div className="col-lg-12 col-md-12">
              <h2 style={{backgroundColor: '#ed7e24'}} className="text-white p-2 ">Les disponibilités </h2>
                <table style={{width:'100%'}}>
                  <thead className="table-dark" style={{height:'100px'}}>
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
          </div>   
        
            );
    }
}
const mapStateToProps=state =>({
   auth: state.auth,
  logement: state.logement,
  dispo: state.dispo,
  errors: state.errors
})

export default connect(
  mapStateToProps, {
    getDisponibilite, getOnedisponibilite, updateDisponibilite, deleteDisponibilite, addDisponibilite
})(AvailabilitiesPage)
 
