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
        			<p className="texte">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
		              	
		            	
		            	
		            	<p className="name text-center">500 logements confiés</p>
          			</div>

          			<div className="col-xs-12 col-md-4">
		            	
		              		<i className="fas fa-thumbs-up fa-align-center"style={{color:'#81D4FA',  fontSize:'30px', backgroundColor:'#fff', textAlign: 'center',
    display: 'block', width:'55px', height:'55px',borderRadius: '50%', lineHeight:'55px' , border:'3px solid #0277BD ', margin:'auto' }}></i>
		              		
		            	
		            	

		            	<p className="name text-center">4.5/5 évaluation globale</p>
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