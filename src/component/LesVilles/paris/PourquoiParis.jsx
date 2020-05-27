import React, { Component } from 'react';
import { Styles } from './pourquoiParisStyle';


class PourquoiParis extends Component {
  render() {
    return (
    	<Styles>
        <div className="container-fluid grille">

        	<div className="row justify-content-center">
        		
        		<div className="col-xs-12 col-md-10">
        			<h2 className="titre text-center"> Pourquoi Paris? </h2>
        			<p className="texte">Paris, est toujours une belle idée de destination ! La ville fait rêver les unes pour ses boutiques de créateurs et son architecture unique, et allèchent les uns pour ses restaurants aux saveurs gastronomiques sans égal. Sans oublier de faire une halte gourmande ou rêveuse en terrasses autour d’un café tel un Parisien typique.
Considérée comme la ville la plus touristique de l’hexagone, la belle affiche une trentaine de millions de visiteurs chaque année. Parmi ces touristes, plus de 2 millions choisissent de poser leurs valises dans une location saisonnière. La demande est ainsi en pleine croissance depuis ces dernières années. La ville de la mode, de l’art et de la gastronomie a encore de beaux jours devant elle dans le secteur touristique et notamment en ce qu'il s'agit des locations saisonnières. Les visiteurs veulent vivre la vie parisienne comme un « must do » en matière de voyage ! Le tourisme à Paris se résume par vivre Paris.
					</p>
        		</div>
        		


        	</div>

        
        </div>
        </Styles>

    );
  }
}

export default PourquoiParis;