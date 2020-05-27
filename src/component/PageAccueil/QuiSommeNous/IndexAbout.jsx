import React, { Component } from 'react';
import { Styles } from './styleIndexAbout';


class IndexAbout extends Component {
  render() {
    return (
    	<Styles>
        <div className="container-fluid grille">

        	<div className="row justify-content-center">
        		
        		<div className="col-xs-12 col-md-10">
        			<h2 className="titre2 text-center"> Qui somme Nous? </h2>
        			<p className="texte">KeyService est une plateforme qui vous
               permet de confier votre logement lorsque vous vous absentez de
                votre domicile et de tirer un revenu sur vos locations. Les voyageurs 
                sélectionnés pour loger chez vous sont choisis selon un processus de sélection 
                rigoureux afin d’éviter les mauvaises surprises. A l’heure actuelle,
                 nous opérons uniquement à Paris intramuros mais comptons nous développer
                  dans de nouvelles villes dans un futur proche.
					</p>
        		</div>
        		


        	</div>

        	<div className="row justify-content-center logos">
		        	<div className="col-xs-12 col-md-4">
		            	
		              		<i className="fas fa-suitcase fa-align-center" style={{color:'#81D4FA',  fontSize:'30px', backgroundColor:'#fff', textAlign: 'center',
    display: 'block', width:'55px', height:'55px',borderRadius: '50%', lineHeight:'55px', border:'3px solid #0277BD ', margin:'auto' }}></i>
		              		
		            	
		            	
		            	<p className="name text-center">10000 Voyageurs satisfaits </p>
          			</div>

          			<div className="col-xs-12 col-md-4">
		            	
		              		<i className="fas fa-building fa-align-center" style={{color:'#81D4FA',  fontSize:'30px', backgroundColor:'#fff', textAlign: 'center',
    display: 'block', width:'55px', height:'55px',borderRadius: '50%', lineHeight:'55px', border:'3px solid #0277BD ', margin:'auto' }}></i>
		              	
		            	
		            	
		            	<p className="name text-center">300 logements confiés</p>
          			</div>

          			<div className="col-xs-12 col-md-4">
		            	
		              		<i className="fas fa-thumbs-up fa-align-center"style={{color:'#81D4FA',  fontSize:'30px', backgroundColor:'#fff', textAlign: 'center',
    display: 'block', width:'55px', height:'55px',borderRadius: '50%', lineHeight:'55px' , border:'3px solid #0277BD ', margin:'auto' }}></i>
		              		
		            	
		            	

		            	<p className="name text-center">4.2/5 évaluation globale</p>
          			</div>
        	</div>

        	<div className="row">
        			<button type="button" className="btns col-3">Nous Contacter</button>
        	</div>

          
        </div>
        </Styles>

    );
  }
}

export default IndexAbout;