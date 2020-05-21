import React, { Component } from 'react';
import {HomeSection , HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span, HomeBtn } from './styleIndex.js';



class Index extends Component {
  render() {
    return (
       
         <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Key service</HomeTitle>
                    <HomeInfo>conciergerie Airbnb</HomeInfo>
                    <HomeDesc>
                        Faites vous louer et gérer votre bien immobilier sans effort ! 
                    </HomeDesc>
                    <HomeBtn className="home-btn">Simuler votre bien!</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
		
    );
  }
}

export default Index;