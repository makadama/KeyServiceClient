import React, { Component } from 'react';
import Entete from './EntetePageAccueil/Index';
import QuiSommeNous from './QuiSommeNous/IndexAbout';
import Services from './ServicesPageAccueil/IndexServices';
import Tarifs from './TarifsPageAccueil/IndexTarifs';
import Partenaire from './Partenaire/IndexPartenaire';
import Temoignages from './Temoignages/IndexTemoignage';
import Villes from  './VillesPageAccueil/IndexVilles';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class IndexPageAcceuil extends Component  {
    render(){
	return(
        <div>
            <Entete/>
            <QuiSommeNous/>
            <Services/>
            <Tarifs/>
            <Partenaire/>
            <Temoignages/>
            <Villes/>
           
        </div>

		)
}
}

export default IndexPageAcceuil;
