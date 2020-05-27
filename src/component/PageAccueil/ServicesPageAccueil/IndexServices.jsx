import React, { Component } from 'react'
import styled from  'styled-components';
import './styleHeader.css';




class IndexServices extends Component {
  render() {
    return (

    <section className="al-services p-5">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="al-services-header text-center">
                    <h2>Nos services</h2>
                    <p>Keyservice se chargera de vos biens et de vos locatiares</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="al-service-box pt-5 pb-4 px-5 text-center">
                    <span className="al-service-icon"> <i className="fas fa-bullhorn" aria-hidden="true"></i></span>
                    <h3 className="mt-3"> Annonce/optimisation des prix </h3>
                    <p className="mt-3">création de l'annonce, prix dynamiques... </p>
                    <a href="#" className="btn btn-outline-primary mt-3">Voir plus</a>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="al-service-box pt-5 pb-4 px-5 text-center">
                    <span className="al-service-icon"> <i className="fas fa-handshake" aria-hidden="true"></i>
                    </span>

                    <h3 className="mt-3"> Accueil et départ des voyageurs</h3>
                    <p className="mt-3">remise de clés (checkin, checkout)... </p>
                    <a href="#" className="btn btn-outline-primary mt-3">Voir plus</a>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="al-service-box pt-5 pb-4 px-5 text-center">
                    <span className="al-service-icon"> <i className="fas fa-headset" aria-hidden="true"></i></span>

                    <h3 className="mt-3"> communication avec le voyageur</h3>
                    <p className="mt-3">Assistance auprès de vos voyageurs... </p>
                    <a href="#" className="btn btn-outline-primary mt-3">Voir plus</a>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="al-service-box pt-5 pb-4 px-5 text-center">
                    <span className="al-service-icon"> <i className="fas fa-broom" aria-hidden="true"></i></span>

                    <h3 className="mt-3"> Ménage et état des lieux de vos biens</h3>
                    <p className="mt-3">ménage da qualité hotelière... </p>
                    <a href="#" className="btn btn-outline-primary mt-3">Voir plus</a>
                </div>
            </div>
           
        </div>
    </div>
</section>
        );
    	
  }
}

export default IndexServices;