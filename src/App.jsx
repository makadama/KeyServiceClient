import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

//tous les liens <a> et <link> doivent passer par cette page car c'est le routeur


//le navbar des principaux pages du sites
import  NavBar from './component/NavBar/NavBar';

//le footer
import Footer from './component/Footer/IndexFooter';

//la page d'accueil
import Home from './component/PageAccueil/IndexPageAcceuil';

//les autres pages principales---------------------------------
import Villes from './component/PageVilles/IndexPageVilles';
import Contacts from './component/PageNousContacter/IndexPageNousContacter';
import Tarifs from './component/PageTarifs/IndexPageTarifs';
import Services from './component/PageServices/IndexPageServices';
import APropos from './component/PageAPropos/IndexPageAPropos';
//-------------------------------------------------------------

//les pages d'authentifications--------------------------------
import Login from './component/auth/Login';
import Inscription1 from './component/auth/Register';
import LoginAfterRegister from './component/auth/LoginAfterRegister';
import LoginAfterReset from './component/auth/LoginAfterReset';
import ForgetPassword from './component/auth/ForgetPassword';
import ResetPassword from './component/auth/ResetPassword';
//--------------------------------------------------------------


//partie Hote------------------------------------------------
//le navbar et le sidebar pour les pages du panel des hotes
import NavEtSideHote from "./component/DashboardHote/NavEtSideHote/LeftSideBar";
//la page d'acceuil d'hôte
import DashboardHote from "./component/DashboardHote/DashboardHote";
//la page qui affiche les logements par hote
import LogementsList from "./component/DashboardHote/LogementsList";
//
import AddLogementPage from "./component/DashboardHote/AddLogementPage";
//
import DisplayLogement from "./component/DashboardHote/DisplayLogement";

import LogementAvailability from "./component/DashboardHote/LogementAvailability";

import UploadImages from "./component/DashboardHote/UploadImages";

import UserProfile  from "./component/DashboardHote/UserProfile";
//----------------------------------------------------------------------------



//partie Voyageur---------------------------------------------------------------
//le navbar et le sidebar pour les pages du panel des hotes
import NavEtSideVoyageur from "./component/DashboardVoyageur/NavEtSideVoyageur/LeftSideBar";
//la page d'accueil voyageur
import DashboardVoyageur from "./component/DashboardVoyageur/DashboardVoyageur";

import PanierLists from "./component/DashboardVoyageur/PanierLists";
//---------------------------------------------------------------------------------

import NotFound from "./component/NotFound";

//en rapport avec la gestion des états sur notre site web-----------------------------------
import { Provider } from "react-redux";
import store from "./store";
//------------------------------------------------------------------------------------------



/*lorsque l'hote ou le voyageur revient sur le site, et que sa session n'a pas expiré, s'il clique
pour se connecter ou s'inscrire il sera directement redirigé vers son compte */
import { setCurrentUser, logoutUser } from "./actions/authActions";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./component/private-route/PrivateRoute";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
//------------------------------------------------------------------------------------------------




export default class App extends Component {
  render() {
    return (
//le provider doit être appelé avant le routeur
      <Provider store={store}>

      <Router>
        
         
          <Switch>
//il route vers la page de login        
            <Route path='/(login)' component={AuthContainer} />
//il route vers la page d'inscription
            <Route path='/(inscription1)' component={AuthContainer} />
//il route vers la page de login après l'inscription
            <Route path='/(loginAfterRegister)' component={AuthContainer}/>
            <Route path='/(loginAfterReset)' component={AuthContainer}/>
            <Route path='/(forgetPassword)' component={AuthContainer}/>
            <Route path='/resetPassword/:slug' component={AuthContainer}/>
//ici on a les routes privées. seul les utilisateurs ayant une session peuvent y accéder
            <PrivateRoute  path="/(DashboardVoyageur)" component={Dashboard1}/>
            <PrivateRoute path="/paniers" component={Dashboard1}/>
            <PrivateRoute  path="/dashboardHote" component={Dashboard2}/>
            <PrivateRoute  path="/logements" component={Dashboard2}/>
            <PrivateRoute path="/logements/addLogementPage" component={Dashboard2}/>
            <PrivateRoute path="/logements/:id" component={Dashboard2}/>
            <PrivateRoute path="/logements/:id/disponibilites" component={Dashboard2}/>
            <PrivateRoute path="/logements/:id/images" component={Dashboard2}/>
            <PrivateRoute path="/profil/:id" component={Dashboard2}/>


            
 //cette route regroupe les pages principaux du site           
            <Route exact path='/' component={DefaultContainer} />
            <Route path='/contacts' component={DefaultContainer} />
            <Route path='/aPropos' component={DefaultContainer} />
            <Route path='/villes' component={DefaultContainer} />
            <Route path='/tarifs' component={DefaultContainer} />
            <Route path='/services' component={DefaultContainer} />

            <Route component={NotFound}/>

          </Switch>
        
        </Router>
    
      </Provider>
     
    );
  }
}
  const AuthContainer = () =>(
    <div>
      <Route path="/login" component={Login} />
      <Route path="/inscription1" component={Inscription1} />
      <Route path="/loginAfterRegister" component={LoginAfterRegister} />
      <Route path='/loginAfterReset' component={LoginAfterReset}/>
      <Route path="/forgetPassword" component={ForgetPassword}/>
      <Route path="/resetPassword/:slug" component={ResetPassword}/>
    </div>

    )

/*const LoginContainer = () => (
      <div>
        <Route path="/login" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
      </div>
)

const SignupContainer = () => (
      <div>
        <Route path="/inscription1" render={() => <Redirect to="/inscription1" />} />
        <Route path="/inscription1" component={Inscription1} />
      </div>
)

const LoginAfterRegisterContainer= () => (
      <div>
        <Route path="/loginAfterRegister" render={() => <Redirect to="/loginAfterRegister" />} />
        <Route path="/loginAfterRegister" component={LoginAfterRegister} />
      </div>
  )*/


const Dashboard1 = () =>(
      <div>
        <NavEtSideVoyageur/>
        <Route path="/dashboardVoyageur" render={() => <Redirect to="/dashboardVoyageur" />} />
        <Route path="/dashboardVoyageur" component={DashboardVoyageur} />
        <Route path="/paniers" component={PanierLists} />

      </div>
  )

const Dashboard2 = () =>(
      <div>
        <NavEtSideHote />
       <Switch>
        <Route  exact path="/dashboardHote" component={DashboardHote} />
        <Route exact path="/logements" component={LogementsList}/>
        <Route path="/logements/addLogementPage" component={AddLogementPage}/>
        <Route exact path="/logements/:id" component={DisplayLogement}/>
        <Route  path="/logements/:id/disponibilites" component={LogementAvailability} />
        <Route path="/logements/:id/images" component={UploadImages}/>
        <Route exact path="/profil/:id"  component={UserProfile}/>
       </Switch> 
      </div>
  )

     const DefaultContainer = () => (
    <div>
      <NavBar />
            <Route exact path='/' component={Home} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/aPropos' component={APropos} />
            <Route path='/villes' component={Villes} />
            <Route path='/tarifs' component={Tarifs} />
            <Route path='/services' component={Services} />
      <Footer/>
    </div>
 )

     

