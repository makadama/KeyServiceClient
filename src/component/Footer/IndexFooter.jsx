import React, { Component } from 'react'
import './StyleIndexFooter.css';

class IndexFooter extends  Component{
  render(){

    return(
      
        <div className="container-fluid foot1  ">
          <div className="row niveau1 d-flex justify-content-center">
            <div className="col-md-12 text-center">
              <img className="hidden-xs img-block" src="/assets/keyLogo2.png"/>          
            </div>
          </div>
         
            <div className="row  foo justify-content-center">
              <div className="col-md-4 colonne md-0 ">
                <h3 className="titre text-center "> Nous découvrir </h3>
                <ul className="decouverte">
                    <li>
                      <a target="_blank" href=""> Qui sommes nous? </a>
                    </li>
                    <li>
                      <a target="_blank" href=""> Nous contacter </a>
                    </li>
                    <li> 
                      <a target="_blank" href=""> FAQ </a>
                    </li>
                </ul>
              </div>
               <div className="col-md-4 colonne  text-center">
                <h3> Nous suivre </h3>
                <ul className="social-network social-circle">
                    <li><a target="_blank" href="#" className="icoRss" title="Youtube"><i className="fa fa-rss ico"></i> </a></li>
                    <li><a target="_blank" href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook ico"></i> </a></li>
                    <li><a target="_blank" href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter ico"></i>  </a></li>
                    <li><a target="_blank" href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus ico"></i>  </a></li>
                    <li><a target="_blank" href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin ico"></i>  </a></li>
                </ul>
              </div>
               <div className="col-md-4 colonne md-0">
                <h3 className="text-center "> A propos</h3>
                <ul className="aPropos">
                    <li>
                      <a target="_blank" href=""> Nos tarifs</a>
                    </li>
                    <li>
                      <a target="_blank" href=""> Nos services </a>
                    </li>
                    <li> 
                      <a target="_blank" href=""> Nos partenaire </a>
                    </li>
                    <li> 
                      <a target="_blank" href=""> Devenir notre concierge </a>
                    </li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://keyservice.com/"> keyservice.com</a>
  </div>
          
</div>
      
      )

  }

}




export default IndexFooter;