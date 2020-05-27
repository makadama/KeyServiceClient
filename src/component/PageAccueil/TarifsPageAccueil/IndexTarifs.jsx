import React, { Component } from 'react'
import styled from  'styled-components';


const Styles = styled.div`
.offer {
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #F4F6F6;
  

}

.offer_title {
    margin-top: 0;
    font-size: 34px; 
    text-align: center;
}

.span {
    font-weight: normal;
}

.part {
    margin-top: 0;
    height: auto;
    padding: 50px 0;
    padding-left: auto;
    width: 100%;  
}

.green-tick {
  list-style-type: none;
  margin-left: ;
  padding: 0;
}



.comp1{
     background:  #ed7e24 ;
}

.comp2{
     background:  #00cccb ;
}

.apartir{
    font-size: 20px;
    color: white;
    text-align: center;
}

.vingt{
    font-size: 50px;
    color: white;
    margin-top: 0;
    text-align: center;
}

.tva{
     font-size: 20px;
     color: white;
     margin-top: 0;
     text-align: center;
}



.icon {
    color: #888;
    margin-bottom: 20px
}

.part-title {
    margin-top: 5px;
    font-size: 25px;
    color: white;
    margin-bottom: 20px
}

.pack_title {
    color: white;
    text-align: center;
}

.line {
    width: 60%;
    margin: auto;
    margin-bottom: 20px
}

.part-desc {
    color: white;
    
}

.part_last{
    color: white;
}

.listItem{
    color: white;
    font-size: 50;
}



`
class IndexTarifs extends Component {
  render() {
    return (
        <Styles>
          <div className="offer">
            <div className="container-fluid bo">
                <h2 className="offer_title"><span>Nos</span> Offres</h2>
                <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 comp1 ">
                            <div className="part first">
                                <h2 className="pack_title">pack check-in et check-out </h2>
                                <div>
                                    <p className="apartir"> A partir de </p>
                                    <p className="vingt"> 18 % </p>
                                    <p className="tva"> + TVA </p>

                                </div>
                                <h4 className="part-desc">
                                    Ce dont vous bénéficiez en choisissant ce tarif:
                                </h4>
                                <ul className="green-tick">
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                        gestion des annonces
                                    </li>
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                        Accueil des voyageurs
                                    </li>
                                     <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       départ des voyageurs
                                    </li>

                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       communictions avec les voyageurs
                                    </li>
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       ménage
                                    </li>
                                   

                                </ul>
                                
                            </div>
                        </div>
                        <div className=" col-xs-12 col-sm-6 col-md-6 comp2 ">
                            <div className="part ">
                                <h2 className="pack_title">pack All inclusive </h2>
                                <div>
                                    <p className="apartir"> A partir de  </p>
                                    <p className="vingt"> 25 % </p>
                                    <p className="tva"> + TVA </p>

                                </div>
                                <h4 className="part-desc">
                                    Ce dont vous bénéficiez en choisissant ce tarif:
                                </h4>
                                <ul className="green-tick">
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                        gestion des annonces
                                    </li>
                                     <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       optimisation des prix
                                    </li>

                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                        Accueil des voyageurs
                                    </li>
                                     <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       départ des voyageurs
                                    </li>

                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       communictions avec les voyageurs
                                    </li>
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       ménage
                                    </li>
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       état des lieux
                                    </li>

                                </ul>
                                
                            </div>
                        </div>

                       
                </div>
                
            </div>
        </div>
       </Styles>    );
  }
}

export default IndexTarifs;