import React, { Component } from 'react';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class Callus extends Component  {
    render(){
	return(
        <section style={{backgroundColor:'#ed7e24', marginTop:'0', height:'100px'}}>
        	<div className="container">
        		<div className="row">
        			<div className='col-12 text-center'>
        				<p>
        					<a className="btn btn-lg" style={{backgroundColor:'#00cccb', marginTop:'30px', textAlign:'center', border: 'none'}}>
        						Voir Nos Tarifs
        					</a>

        				</p>
        			</div>
        		</div>
        	</div>
        </section>
		)
}
}

export default Callus;
