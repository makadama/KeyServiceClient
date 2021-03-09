import React, {Component} from 'react';
import { connect } from "react-redux";
import { addLogement } from "../../actions/logementActions";
import classnames from "classnames";

class AddLogement extends Component{
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
			errors:{},
			success: false
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
		     this.setState({
      			success:  nextProps.success
    });
		    
  }

	onChange (e){
		this.setState({[e.target.name]:e.target.value})
		}

	onSubmit(e){
		e.preventDefault();
    
      const logement={
      fk_ville: this.state.fk_ville,
      adresse: this.state.adresse,
      code_postal: this.state.code_postal,
      type: this.state.type,
      complement: this.state.complement,
      nb_lits: this.state.nb_lits,
      nb_sdb: this.state.nb_sdb,
      superficie: this.state.superficie,
      description:this.state.description,
      fk_hote:this.state.fk_hote

    }

    this.props.addLogement(logement, this.props.history);

    }

	render(){
		const { errors } = this.state;
		const {message} = this.props.errors;
		const {success} = this.state;
		return(
			<div style={{marginTop:'4em'}}>
				<div className="container">
          
          <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                  <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Ajouter un bien</h1>
                        <p className="text-center">
                        {message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                         </span>:''}
                       </p>
                       <p className="text-center col-lg-12 col-md-12 col-xs-12">
                    		{success ? <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}> bien ajouté avec succès!
                             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
               			</p>
                       		 <div className="form-group">
                              <label htmlFor="fk_hote">identifiant de l'hôte*</label>
                              <input type="text" name="fk_hote"  id="fk_hote" placeholder="identifiant du propriétaire" className={classnames("form-control",{
                                invalid: errors.fk_hote
                                })}
                                value={this.state.fk_hote}
                                onChange={this.onChange}/>
                                <span className="red-text" style={{color:'red'}}>
                                    {errors.fk_hote}  
                                </span>
                            </div>

                            <div className="form-group">
                              <label htmlFor="fk_ville">Dans quelle ville se trouve votre bien?*</label>
                              <select className={classnames("form-control",{
                                invalid: errors.fk_ville
                                })}
                                value={this.state.fk_ville}
                                onChange={this.onChange}  to="fk_ville" name="fk_ville">
                              <option value=""></option>
                                <option value="1">Paris et îles de  France</option>
                                <option value="2">Lyon</option>
                                <option value="3">Bordeau</option>
                                <option value="4">Marseille</option>
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
                                onChange={this.onChange}/>
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
                                onChange={this.onChange}/>
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
                              <label htmlFor="code_postal">Superficie*</label>
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
                              <label htmlFor="description">Description</label>
                              <textarea className={classnames("form-control",{
                              invalid: errors.description
                              })}
                              value={this.state.description}
                              onChange={this.onChange} name="description" id="description" rows="6" required></textarea>
                        </div>
                      <button type="submit" className="btn btn-primary">Ajouter</button>

                   
                  </form>
              </div>
          </div>
        </div>
			</div>
			)
	}
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  success: state.success
});
export default connect(mapStateToProps, {addLogement})(AddLogement);