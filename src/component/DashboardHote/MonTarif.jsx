import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLogementById, updateLogement} from "../../actions/logementActions";
import './MonTarifStyle.css';

class MonTarif extends Component {
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
      tarif:"",

      errors:{}
    }

    this.onChange=this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    }

  componentDidMount(){

      if(this.props.match.params.id){
        this.props.getLogementById(this.props.match.params.id)
      }
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
      superficie: nextProps.logement.logement.superficie,
      tarif: nextProps.logement.logement.fk_tarif,
    });
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
      fk_hote: this.props.auth.user.id,
      tarif: this.state.tarif
}
this.props.updateLogement(this.props.logement.logement.id, logementInfo, this.props.history);

    
    }
  

  render() {
    const { logement } = this.props.logement;
      const { user } = this.props.auth;
      console.log(user);
      console.log(logement);


    return (
        
       <div class="container mb-5 mt-5">
    <div class="pricing card-deck flex-column flex-md-row mb-3">
        <div class="card card-pricing text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom  text-white shadow-sm" style={{backgroundColor:'#00cccb'}}>Pack check-in check-out</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">18<span class="price">%</span><span class="h6 text-muted ml-2">+ TVA</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Annonce</li>
                    <li>Accueil des Voyageurs</li>
                    <li>Départ des Voyageurs</li>
                    <li>Communication avec les voyageurs</li>
                </ul>
                <button type="button" class="btn btn-primary mb-3">Simuler</button>
            </div>
        </div>
        <div class="card card-pricing popular shadow text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom  text-white shadow-sm"  style={{backgroundColor:'#ed7e24'}}>Pack All inclusive</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">25<span class="price">%</span><span class="h6 text-muted ml-2">+ TVA</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Annonce</li>
                    <li>Optimisation des prix</li>
                    <li>Accueil des Voyageurs</li>
                    <li>Départ des Voyageurs</li>
                    <li>Communication avec les voyageurs</li>
                    <li>Ménage</li>
                    <li>Etat des lieux</li>
                </ul>
                <button type="button" class="btn btn-primary mb-3">Simuler</button>
            </div>
        </div>
        
    </div>

            <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Tarif</h1>
                          <div className="form-group">
                              <label htmlFor="tarif">Choisir un pack pour votre logement?*</label>
                              <select className="form-control" value={this.state.tarif}
                                onChange={this.onChange}  to="tarif" name="tarif">
                               <option value="1">Pack check-in check-out</option>
                                <option value="2">Pack All inclusive</option>
                                
                              </select>
                               
                            </div>
                            

  <button type="submit" class="btn btn-primary">Ajouter</button>

                   
                  </form>

</div>

     
    );
  }
}

MonTarif.propTypes = {
  getLogementById: PropTypes.func.isRequired,
  updateLogement: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
   logement: state.logement
});

export default connect(
  mapStateToProps,
  { getLogementById, updateLogement }
)(MonTarif);
