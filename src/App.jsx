import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./component/NotFound";
import './App.css';


import NavEtSideHote from "./component/DashboardHote/NavEtSideHote/LeftSideBar";

import HomePage from './pages/Home/HomePage';
import WelcomePage from './pages/AdminDashboard/WelcomePage';
import LogementsPage from './pages/AdminDashboard/LogementsPage';
import OwnersPage from './pages/AdminDashboard/OwnersPage';
import TravelersPage from './pages/AdminDashboard/TravelersPage';
import RentsPage from './pages/AdminDashboard/RentsPage';
import MeetingPage from './pages/AdminDashboard/MeetingPage';
import OrderPage from './pages/AdminDashboard/OrderPage';
import LogementDetailsPage from './pages/AdminDashboard/LogementDetailsPage';
import TravelerDetailsPage from './pages/AdminDashboard/TravelerDetailsPage'
import LogementDetailsBis from './pages/AdminDashboard/LogementDetailsBis';
import AvailabilitiesPage from './pages/AdminDashboard/AvailabilitiesPage';
import UpdateLogementPage from './pages/AdminDashboard/UpdateLogementPage';
import AddLogement from './pages/AdminDashboard/AddLogement';
import OwnerDetailsPage from './pages/AdminDashboard/OwnerDetailsPage';
import AddOwnerPage from './pages/AdminDashboard/AddOwnerPage';
import AddTravelerPage from './pages/AdminDashboard/AddTravelerPage';
import AddRentPage from './pages/AdminDashboard/AddRentPage';
import UpdateLocationPage from './pages/AdminDashboard/UpdateLocationPage';
import AddMeetingPage from './pages/AdminDashboard/AddMeetingPage';
import OrderDetailsPage from './pages/AdminDashboard/OrderDetailsPage';
import RentDetailsPage from  './pages/AdminDashboard/RentDetailsPage';
import MeetingDetailsPage from './pages/AdminDashboard/MeetingDetailsPage';
import TasksPage from './pages/AdminDashboard/TasksPage';
import AddTasksPage from './pages/AdminDashboard/AddTasksPage';
import TaskDetailsPage from './pages/AdminDashboard/TaskDetailsPage';
import UpdateTasksPage from './pages/AdminDashboard/UpdateTasksPage';


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
    window.location.href = "/";
  }
}




export default class App extends Component {
  render() {
    return (
//le provider doit être appelé avant le routeur
      <Provider store={store}>

      <Router> 
          <Switch>
             <Route exact path='/' component={HomePage} />
             <PrivateRoute path='/welcomePage' component={DashboardAdmin} />
             <PrivateRoute path='/logements' component={DashboardAdmin} />
             <PrivateRoute path='/logements/logement/:id' component={DashboardAdmin}/>
             <PrivateRoute path='/logements/logement/:id/disponibilites' component={DashboardAdmin}/>
             <PrivateRoute path='/logements/logement/:id/modifier' component={DashboardAdmin}/>
             <PrivateRoute path='/logements/ajouter-un-bien' component={DashboardAdmin}/>
             <PrivateRoute path='/proprietaires' component={DashboardAdmin} />
             <PrivateRoute path='/proprietaires/ajouter-un-proprietaire' component={DashboardAdmin}/>
             <PrivateRoute path='/proprietaires/proprietaire/:id' component={DashboardAdmin} />
             <PrivateRoute path='/voyageurs' component={DashboardAdmin} />
             <PrivateRoute path='/voyageurs/ajouter-un-voyageur' component={DashboardAdmin} />
             <PrivateRoute path='/voyageurs/:id' component={DashboardAdmin}/>
             <PrivateRoute path='/locations' component={DashboardAdmin} />
             <PrivateRoute path='/locations/location/:id' component={DashboardAdmin} />
             <PrivateRoute path='/locations/location/:id/modification' component={DashboardAdmin} />
             <PrivateRoute path='/locations/ajouter-une-location' component={DashboardAdmin} />
             <PrivateRoute path='/rendez-vous' component={DashboardAdmin}/>
             <PrivateRoute path='/rendez-vous/rendez-vous/:id' component={DashboardAdmin}/>
             <PrivateRoute path='/rendez-vous/ajouter-un-rendez-vous' component={DashboardAdmin}/>
             <PrivateRoute path='/commandes' component={DashboardAdmin}/>
             <PrivateRoute path='/commandes/commande/:id' component={DashboardAdmin}/>
             <PrivateRoute path='/taches' component={DashboardAdmin}/>
             <PrivateRoute path='/tache/ajouter-une-tache' component={DashboardAdmin}/>
             <PrivateRoute path='/taches/tache/:id' component={DashboardAdmin}/>
             <PrivateRoute path='/taches/tache/:id/modification' component={DashboardAdmin}/>
            
            

          </Switch>
     </Router>
      </Provider>
     
    );
  }
}

const DashboardAdmin = () =>(
      <div>
        <NavEtSideHote/>
        <Route exact path="/welcomePage" component={WelcomePage} />
        <Route exact path="/logements" component={LogementsPage} />
        <Route exact path='/logements/ajouter-un-bien' component={AddLogement} />
        <Route exact path="/logements/logement/:id" component={LogementDetailsBis} />
        <Route exact path="/logements/logement/:id/disponibilites" component={AvailabilitiesPage} />
        <Route exact path="/logements/logement/:id/modifier" component={UpdateLogementPage} />
        <Route exact path="/proprietaires" component={OwnersPage} />
        <Route exact path="/proprietaires/ajouter-un-proprietaire" component={AddOwnerPage} />
        <Route exact path="/proprietaires/proprietaire/:id" component={OwnerDetailsPage} />
        <Route exact path="/voyageurs" component={TravelersPage} />
        <Route exact path="/voyageurs/ajouter-un-voyageur" component={AddTravelerPage} />
        <Route exact path='/voyageurs/voyageur/:id' component={TravelerDetailsPage} />
        <Route exact path="/locations" component={RentsPage} />
        <Route exact path="/locations/location/:id" component={RentDetailsPage} />
        <Route exact path='/locations/location/:id/modification' component={UpdateLocationPage} />
        <Route exact path="/locations/ajouter-une-location" component={AddRentPage} />
        <Route exact path="/rendez-vous" component={MeetingPage}/>
        <Route exact path='/rendez-vous/rendez-vous/:id' component={MeetingDetailsPage}/>
        <Route exact path="/rendez-vous/ajouter-un-rendez-vous" component={AddMeetingPage}/>
        <Route exact path="/commandes" component={OrderPage} />
        <Route exact path="/commandes/commande/:id" component={OrderDetailsPage}/>
        <Route exact path='/taches' component={TasksPage}/>
        <Route exact path='/tache/ajouter-une-tache' component={AddTasksPage}/>
        <Route exact path='/taches/tache/:id' component={TaskDetailsPage}/>
        <Route exact path='/taches/tache/:id/modification' component={UpdateTasksPage}/>

      </div>
  )


     

