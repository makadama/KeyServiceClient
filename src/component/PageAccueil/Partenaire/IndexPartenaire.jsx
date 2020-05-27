import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div
`

.partenaire{
    height: auto;
    background-color: #fff;
    margin-top: 0;
}

.partTitle{
    margin-bottom: 0;
}

.logo1{
    width: 160px;
    height: 170px;
   
}

.logo2{
   width: 180px;
    height: 190px;
   
}


.logo3{
    width: 200px;
    height: 200px;
   
}

.logo{
   margin-top: 0; 
   padding-top: 0;
   
}

.partTitle {
    margin-top: 0;
    font-size: 30px; 
    text-align: center;
    margin-bottom: 0;
   
}

    
`

class IndexPartenaire extends Component {
  render() {
    return (
       <Styles>
      
            <div className="container-fluid partenaire">
              <h2 className="partTitle"> Voici les plateforme sur lesquelles keyservice publiera vos biens: </h2>
                <div className="row justify-content-center">
                    
                        <div className="col4">
                            
                                <img className="logo1 logo" src="/assets/airbnb6.png"/>
                            
                        </div>
                       
                         <div className="col4">
                            
                                <img className="logo3 logo" src="/assets/abritel.png"/>
                            
                        </div>

                        <div className="col4">
                            
                                <img className="logo2 logo" src="/assets/Booking4.png"/>
                            
                        </div>

                    
                </div>
            </div>
        
        </Styles>
    );
  }
}

export default IndexPartenaire;