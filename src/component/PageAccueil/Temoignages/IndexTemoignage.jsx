import React, { Component } from 'react';
import styled from 'styled-components';
import './styleIndexTemoignage.css';

class IndexTemoignage extends Component {
  render() {
    return (

     <div className="testimonials">
      <div className="inner">
        <h1>Temoignages</h1>
        <div className="border"></div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="testimonial">
              <img src="/assets/p1.png" alt=""/>
              <div className="name">Eric Petit</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                KeyService gère très bien mon appartement , l'équipe est très réactive aux messages, le ménage de l'appartement est correct et les hôtes écrivent de bon avis . C'est une très bonne solution de gestion pour moi.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="testimonial">
              <img src="/assets/p2.png" alt=""/>
              <div className="name">Emma Smith</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
                1 ans  de collaborations avec KeyService et je n'ai rien à redire pour l'instant. Relation client au top et beaucoup moins de stress que quand je m'occupais moi-même de mon appartement. Je recommande.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="testimonial">
              <img src="/assets/p3.png" alt=""/>
              <div className="name">Emilie Dousset</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
                J'ai fait appelle à leur services pour la gestion de mes locations meublées de courte durée depuis maintenant 6 mois. Leurs services sont plutôt professionnels et leur réactivité efficace. Je recommande quand on ne souhaite pas gérer ses bien seul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}
}

export default IndexTemoignage;
