import React, { Component } from 'react';
import './styleIndexVilles.css';

class IndexVilles extends Component {

  render() {
    return (
       

<div className="container grille">  
    <div className="row d-flex justify-content-center">
        <div className="col-md-3 col-xs-12 text-center">
            <h2> Nos villes </h2>
        </div>
    </div>      

    <div className="row d-flex justify-content-center griffe">    
        <div className="col-lg-3 col-md-6 col-xs-6 align-items-center">

             <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>

              </a>

        </div>
         <div  className="col-lg-3 col-md-6 col-xs-6 align-items-center"> 

                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </a>

        </div>
    </div>


    <div>
    <div className="row d-flex justify-content-center">

        <div className="col-12">

            <div id="demo" className="carousel slide slideshow" data-ride="carousel">
              
              <div className="carousel-inner no-padding">
                <div className="carousel-item active">
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src="/assets/bordeaux.jpg"/>
                  </div>    
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src="/assets/paris.jpg"/>
                  </div>   
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src="/assets/lyon.jpg"/>
                  </div>   
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src="/assets/marseille.jpg"/>
                  </div>   
                </div>
                <div className="carousel-item">
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src="/assets/nante1.jpg"/>
                  </div>    
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src="/assets/toulouse.jpg"/>
                  </div>   
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src="/assets/monaco2.jpg"/>
                  </div>   
                  <div className="col-xs-3 col-sm-3 col-md-3">
                    <img src="/assets/lesalpes.jpg"/>
                  </div>  
                </div>
               
              </div>

                 
    
        </div> 

        </div>      
      

    </div>
    

       
   </div> 
   <div className="row justify-content-center">
            <div className="col-12 align-items-center">
                <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                </ul>
            </div>
   </div>

</div>
       
		
    );
  }
}

export default IndexVilles;