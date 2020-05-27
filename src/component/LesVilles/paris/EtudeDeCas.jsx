import React, { Component } from 'react';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class EtudeDeCas extends Component  {
    render(){
	return(
        <section style={{height:"auto", marginBottom:'5px',backgroundColor: '#F4F6F6'}}>
        	<div className="container">
        		<div className="row">
        			<div className='col-md-6 col-lg-6'>
                        
        				<p className="align-self-center" style={{marginTop:"10%", fontSize:"20px"}}>
        					"Excellente agence à Paris: efficace, souriant, disponible. Grace à KeyService,
                             je loue mon appartement à coup sur, sans que cela ne me donne aucun mal. 
                             Le coût du service peut paraître cher mais est de mon point de vue,
                              après 2 ans d'expérience,
                            </p>
                        <span> Rolan, client KeyService</span>
        			</div>
                    <div className='col-md-6 col-lg-6'>
                       <img src="/assets/appt2.jpg" style={{height:"100%", width:"100%"}}/>
                        
                        
                    </div>
        		</div>
        	</div>
        </section>
		)
}
}

export default EtudeDeCas;
