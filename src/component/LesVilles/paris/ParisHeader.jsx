import React, { Component } from 'react';
import {HomeSection , HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span, HomeBtn, HomeBtnContact } from './parisHeaderStyle.js';


class ParisHeader extends Component {
  render() {
    return (
       
         <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Key service,</HomeTitle>
                    <HomeInfo>Votre conciergerie Airbnb</HomeInfo>
                    <HomeDesc>
                        à Paris
                    </HomeDesc>
                    <HomeBtn className="home-btn">Simuler votre bien!</HomeBtn>
                    <HomeBtnContact className="home-btn">Nous Contacter</HomeBtnContact>
                </HomeInformation>
            </div>
        </HomeSection>
		
    );
  }
}

export default ParisHeader;