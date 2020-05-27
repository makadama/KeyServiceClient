import React, { Component } from 'react';
import ParisHeader from './ParisHeader';
import PourquoiParis from './PourquoiParis';
import CallUs from './CallUs';
import EtudeDeCas from './EtudeDeCas';
import CityManagerParis from './CityManagerParis';
/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class IndexPageAcceuil extends Component  {
    render(){
	return(
        <div>
           <ParisHeader/>
           <PourquoiParis/>
           <CallUs/>
           <EtudeDeCas/>
           <CityManagerParis/>
        </div>

		)
}
}

export default IndexPageAcceuil;
