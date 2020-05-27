import React, { Component } from 'react';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class CityManagerParis extends Component  {
    render(){
    return(
        <div class="py-5 team4">
  <div class="container">
    <div class="row">
     
      
      
      
     
      <div class="col-lg-12 mb-2">
       
        <div class="row">
          <div class="col-md-12 text-center">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
              <h6 class="subtitle mb-3">City Manager à Paris</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i className="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
          </div>
        </div>
       
      </div>
     
      
    </div>
  </div>
</div>
        )
}
}

export default CityManagerParis;
