import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLogementById, updateLogement, getLogements } from "../../actions/logementActions";
import classnames from "classnames";
import { bindActionCreators } from 'redux';
import NavDashboard from './NavDashboard';



//import './StylePageNousContacter.css';

class DisplayLogement extends Component {
	constructor(){
		super()
		this.state={
			fk_ville: "",
      adresse: "",
      code_postal: "",
      complement: "",
      type: "",
      nb_lits: "",
      nb_sdb: "",
      description:"",
      superficie: "",
      fk_hote:"",
      errors:{}
		}

		this.onChange=this.onChange.bind(this)
		this.onSubmit= this.onSubmit.bind(this)
		}


    componentDidMount(){

      if(this.props.match.params.id){
        this.props.getLogementById(this.props.match.params.id)
      }

  
 /*if(this.props.logement){
      this.setState({
     
      adresse: this.props.logement.logement.adresse,
      code_postal: this.props.logement.logement.code_postal
     })
}*/
    }

    

		componentWillReceiveProps = (nextProps) => {
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
  }


  renderVilleName(){
     if(this.props.logement.logement.fk_ville===1){
          return "Paris et île de France"
      }
      else if(this.props.logement.logement.fk_ville===2){
          return "Lyon"
      }
      else if(this.props.logement.logement.fk_ville===3){
          return "Bordeau"
      }
      else if(this.props.logement.logement.fk_ville===4){
          return "Marseille"
      }
      else if(this.props.logement.logement.fk_ville===5){
          return "Monaco"
      }
  }

		onChange (e){
		this.setState({[e.target.name]:e.target.value})
		}

		onSubmit(e){
		e.preventDefault();
		const logementInfo={
			fk_ville: this.state.fk_ville,
      adresse: this.state.adresse,
      code_postal: this.state.code_postal,
      complement: this.state.complement,
      type: this.state.type,
      nb_lits: this.state.nb_lits,
      nb_sdb: this.state.nb_sdb,
      description: this.state.description,
      superficie: this.state.superficie,
      fk_hote: this.props.auth.user.id
}
this.props.updateLogement(this.props.logement.logement.id, logementInfo, this.props.history);

		
		}
	
  render() {
  		
  		const { errors } = this.state;
      const { logement } = this.props.logement;
      const { user } = this.props.auth;
      console.log(user);
      console.log(logement);


   
    return (
      <div>
        <NavDashboard/>
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
        

            <div className="card bg-light mb-3">
                <div className="card-header bg-success text-white text-uppercase"><i className="fa fa-home"></i> Détails du logement</div>
                <div className="card-body">
                    <p>Adresse: {logement.adresse}</p>
                    <p>Complément: {logement.complement}</p>
                    <p>Code Postal: {logement.code_postal}</p>
                    <p>Ville: {this.renderVilleName()}</p>
                    <p>Type: {logement.type}</p>
                    <p>Superficie: {logement.superficie}</p>
                    <p>Nombre de lits:{logement.nb_lits}</p>
                    <p>Nombre de salle de bain: {logement.nb_sdb}</p>
                    <p> tarif: </p>

                </div>

            
          </div>
          
            <div className="card mb-3">
                <div className="card-header bg-primary text-white"><i className="fa fa-pencil"></i> Modifier le tarif
                </div>
                <div className="card-body">
                    <form noValidate >
                      <div className="form-group">
                            <label htmlFor="bureau">Mon tarif</label>
                            <select className={classnames("form-control",{
                          invalid: errors.bureau
                          })}
                          value={this.state.bureau}
                          onChange={this.onChange}  to="bureau" name="bureau">
                            <option value=""></option>
                              <option value="Paris et îles de France">Paris et île de  France</option>
                              <option value="Lyon">Lyon</option>
                              <option value="Bordeau">Bordeau</option>
                              <option value="Marseille">Marseille</option>
                              <option value="Monaco">Monaco</option>
                            </select>
                             <span className="red-text" style={{color:'red'}}>
                              {errors.bureau}  
                          </span>
                            </div>
                        <div className="form-group">
                            <label htmlFor="mailSubject">Objet</label>
                            <select className={classnames("form-control",{
                            invalid: errors.mailSubject
                            })}
                            value={this.state.mailSubject}
                            onChange={this.onChange} id="mailSubject" name="mailSubject">
                              <option value=""></option>
                              <option value="renseignement">Je suis intéressé par les service de Key Service</option>
                              <option value="voyageur">Je séjourne dans un logement de Key Service</option>
                              <option value="hôte">Je suis un client de  Key Service</option>
                              <option value="autre">Autre</option>
                            </select>
                            <span className="red-text" style={{color:'red'}}>
                              {errors.mailSubject}  
                          </span>
                        </div>
                        
                        <div className="mx-auto">
                        <button type="submit" className="btn btn-primary text-right">Sauvegarder</button></div>
                    </form>
                </div>
            </div>

          
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

            <div className="card">
                <div className="card-header bg-primary text-white"><i className="fa fa-pencil"></i> Mettre à jour les informations de mon logement
                </div>
                <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Ajouter un bien</h1>
                        <p className="text-center">
                        {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                         </span>:''}
                       </p>
                            <div className="form-group">
                              <label htmlFor="fk_ville">Dans quelle ville se trouve votre bien?*</label>
                              <select className="form-control"
                                value={this.state.fk_ville}
                                onChange={this.onChange}  to="fk_ville" name="fk_ville" disabled>
                              <option value=""></option>
                                <option value="1">Paris et îles de  France</option>
                                <option value="2">Lyon</option>
                                <option value="3">Bordeau</option>
                                <option value="4">Marseille</option>
                                <option value="5">Monaco</option>
                              </select>
                            </div>
                            

                            <div className="form-group">
                              <label for="adresse">Adresse*</label>
                              <input type="text" name="adresse"  id="adresse"  className="form-control"
                                value={this.state.adresse}
                                onChange={this.onChange} disabled/>    
                            </div>

                             

                            <div className="form-group">
                              <label for="complement">Complèment</label>
                              <input type="text" name="complement"  value={this.state.complement}  onChange={this.onChange} className="form-control" id="complement" placeholder="batiment, étage...."/>
                            </div>

                             <div className="form-group">
                              <label for="code_postal">Code postal*</label>
                              <input type="text" name="code_postal"  id="code_postal" placeholder="code postal" className="form-control"
                            
                                value={this.state.code_postal}
                                onChange={this.onChange} disabled/>
                            </div>

                            <div className="form-group">
                              <label htmlFor="type">Type*</label>
                              <select className="form-control"
                                value={this.state.type}
                                onChange={this.onChange}  to="type" name="type">
                              <option value=""></option>
                                <option value="maison">Maison</option>
                                <option value="appartement">Appartement</option>
                                <option value="studio">Studio</option>
                                </select>
                            </div>

                             <div className="form-group">
                              <label for="code_postal">Superficie*</label>
                              <input type="text" name="superficie"  id="superficie" placeholder="superficie" className="form-control"
                                value={this.state.superficie}
                                onChange={this.onChange}/>
                            </div>
                            
                            <div className="row">
                                 <div className="form-group col-md-6">
                                  <label for="nb_lits">Nombre de lits*</label>
                                  <input type="text" name="nb_lits" id="nb_lits" placeholder="nombre de lits" className="form-control"
                                  value={this.state.nb_lits}
                                  onChange={this.onChange}/>
                                </div>

                                <div className="form-group col-md-6">
                                <label for="nb_sdb">nombre de salles de bain*</label>
                                <input type="text" name="nb_sdb"  id="nb_sdb" placeholder="salles de bain" className="form-control"
                                  value={this.state.nb_sdb}
                                  onChange={this.onChange}/>
                          </div>
                              
                          </div>
                          
                         
                         <div className="form-group">
                              <label htmlFor="description">Description</label>
                              <textarea className="form-control"
                              value={this.state.description}
                              onChange={this.onChange} name="description" id="description" rows="6" required></textarea>
                        </div>
  <button type="submit" className="btn btn-primary">Ajouter</button>

                   
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
DisplayLogement.propTypes = {
  getLogementById: PropTypes.func.isRequired,
  updateLogement: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  logement: state.logement
});




export default connect(
  mapStateToProps,
  {getLogementById, updateLogement}
)(withRouter(DisplayLogement));

