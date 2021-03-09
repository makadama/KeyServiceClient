import React, {Component} from 'react';
import { connect } from "react-redux";
import { getOnlyLogement, updateLogement } from "../../actions/logementActions";
import classnames from "classnames";

class UpdateLogementPage extends Component{
	constructor(props){
		super(props)
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
      		fk_tarif:"",
      		errors:{}, 
      		success: false
	      	
		}
		this.onChange=this.onChange.bind(this)
		this.onSubmit= this.onSubmit.bind(this)
	}

	 componentDidMount(){
      
        this.props.getOnlyLogement(this.props.match.params.id)
      
    }

    componentWillReceiveProps(nextProps){
    
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
    this.setState({
      fk_ville: nextProps.logement.logement.fk_ville ,
      adresse: nextProps.logement.logement.adresse ,
      code_postal: nextProps.logement.logement.code_postal,
      complement: nextProps.logement.logement.complement ,
      type: nextProps.logement.logement.type,
      nb_lits: nextProps.logement.logement.nb_lits ,
      nb_sdb: nextProps.logement.logement.nb_sdb ,
      description: nextProps.logement.logement.description ,
      superficie: nextProps.logement.logement.superficie,
      fk_hote: nextProps.logement.logement.fk_hote ,
      fk_tarif: nextProps.logement.logement.fk_tarif ,
      success: nextProps.success
      
    });

  
  }

  onChange(e){
		this.setState({[e.target.name]:e.target.value})
		}

  onSubmit(e){
		e.preventDefault();
		const logementInfo = {
		  fk_ville: this.state.fk_ville,
	      adresse: this.state.adresse,
	      code_postal: this.state.code_postal,
	      complement: this.state.complement,
	      type: this.state.type,
	      nb_lits: this.state.nb_lits,
	      nb_sdb: this.state.nb_sdb,
	      description: this.state.description,
	      superficie: this.state.superficie,
	      fk_hote: this.state.fk_hote,
	      fk_tarif: this.state.fk_tarif
}
this.props.updateLogement(this.props.match.params.id, logementInfo)
		
		}

  

	render(){
		const { errors } = this.state;
	    const {logement} = this.props.logement;
	    const {user} = this.props.auth;
	    const { success } = this.state;
	      console.log(logement);
     
		return(
			<div style={{marginTop:'4em',height:'auto'}}>
          
          
              <div className="container">
                
            
                <div className="row">
                		<p className="text-center col-lg-12 col-md-12 col-xs-12">
		                    {success ? <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}> Votre logement a été mis à jour!
		                             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
		                                <span aria-hidden="true">&times;</span>
		                             </button>
		                           </span>:''}
            			</p>
                      <div className="col-md-8 mt-5 mx-auto">
                      
                        <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Modifier les informations bien</h1>
                       
                            <div className="form-group">
                              <label htmlFor="fk_ville">Dans quelle ville se trouve votre bien?*</label>
                              <select className={classnames("form-control",{
                                invalid: errors.fk_ville
                                })}
                                value={this.state.fk_ville}
                                onChange={this.onChange}  to="fk_ville" name="fk_ville" disabled>
                              <option value=""></option>
                                <option value="1">Paris et îles de  France</option>
                                <option value="2">Lyon</option>
                                <option value="3">Bordeau</option>
                                <option value="4">Marseille</option>
                                <option value="5">Monaco</option>
                              </select>
                               <span className="red-text" style={{color:'red'}}>
                                {errors.fk_ville}  
                            </span>
                            </div>
                            

                            <div className="form-group">
                              <label htmlFor="adresse">Adresse*</label>
                              <input type="text" name="adresse"  id="adresse" placeholder="num, rue, avenue..." className={classnames("form-control",{
                                invalid: errors.adresse
                                })}
                                value={this.state.adresse}
                                onChange={this.onChange} disabled/>
                                <span className="red-text" style={{color:'red'}}>
                                    {errors.adresse}  
                                </span>
                            </div>

                             

                            <div className="form-group">
                              <label htmlFor="complement">Complèment</label>
                              <input type="text" name="complement" className="form-control" id="complement" placeholder="batiment, étage...."/>
                            </div>

                             <div className="form-group">
                              <label htmlFor="code_postal">Code postal*</label>
                              <input type="text" name="code_postal"  id="code_postal" placeholder="code postal" className={classnames("form-control",{
                                invalid: errors.code_postal
                                })}
                                value={this.state.code_postal}
                                onChange={this.onChange} disabled/>
                                <span className="red-text" style={{color:'red'}}>
                                    {errors.code_postal}  
                                </span>
                            </div>

                            <div className="form-group">
                              <label htmlFor="type">Type*</label>
                              <select className={classnames("form-control",{
                                invalid: errors.type
                                })}
                                value={this.state.type}
                                onChange={this.onChange}  to="type" name="type">
                                <option value=""></option>
                                <option value="maison">Maison</option>
                                <option value="appartement">Appartement</option>
                                <option value="studio">Studio</option>
                                </select>
                               <span className="red-text" style={{color:'red'}}>
                                {errors.type}  
                            </span>
                            </div>

                             <div className="form-group">
                              <label htmlFor="superficie">Superficie*</label>
                              <input type="text" name="superficie"  id="superficie" placeholder="superficie" className={classnames("form-control",{
                                invalid: errors.superficie
                                })}
                                value={this.state.superficie}
                                onChange={this.onChange}/>
                                <span className="red-text" style={{color:'red'}}>
                                    {errors.superficie}  
                                </span>
                            </div>
                            
                            <div className="row"> 
                                
                                 <div className="form-group col-md-6">
                                  <label htmlFor="nb_lits">Nombre de lits*</label>
                                  <input type="text" name="nb_lits" id="nb_lits" placeholder="nombre de lits" className={classnames("form-control",{
                                      invalid: errors.nb_lits
                                    })}
                                  value={this.state.nb_lits}
                                  onChange={this.onChange}/>
                                  <span className="red-text" style={{color:'red'}}>
                                    {errors.nb_lits}  
                                </span>
                                </div>

                                <div className="form-group col-md-6">
                                <label htmlFor="nb_sdb">nombre de salles de bain*</label>
                                <input type="text" name="nb_sdb"  id="nb_sdb" placeholder="salles de bain" className={classnames("form-control",{
                                  invalid: errors.nb_sdb
                                  })}
                                  value={this.state.nb_sdb}
                                  onChange={this.onChange}/>
                                <span className="red-text" style={{color:'red'}}>
                                    {errors.nb_sdb}  
                                </span>
                          </div>
                              
                          </div>
                          <div className="form-group">
                              <label htmlFor="fk_tarif">Choisir un pack pour votre logement?*</label>
                              <select className="form-control" value={this.state.fk_tarif}
	                                onChange={this.onChange}  to="fk_tarif" name="fk_tarif">
	                                <option value=""></option>
	                               <option value="1">Pack check-in check-out</option>
	                                <option value="2">Pack All inclusive</option>
                                
                              </select>
                               
                            </div>
                         
                         <div className="form-group">
                              <label htmlFor="description">Description</label>
                              <textarea className={classnames("form-control",{
                              invalid: errors.description
                              })}
                              value={this.state.description}
                              onChange={this.onChange} name="description" id="description" rows="6" required></textarea>
                        </div>
                      <button type="submit" className="btn btn-primary">Mettre à jour</button>

                   
                  </form>
                        </div>
                       </div>
             </div>
        </div>
			)
	}
}
const mapStateToProps = state =>({
	errors: state.errors, 
	logement: state.logement,
	auth: state.auth,
	success: state.success
})
export default connect(mapStateToProps, {getOnlyLogement, updateLogement })(UpdateLogementPage);