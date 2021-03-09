import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import logementReducer from  "./logementReducer";
import mailReducer from  "./mailReducer";
import disponibiliteReducer from "./disponibiliteReducer";
import userReducer from "./userReducer";
import panierReducer from "./panierReducer";
import cartReducer from "./cartReducer";
import ownerReducer from "./ownerReducer";
import travelerReducer from "./travelerReducer";
import rentReducer from "./rentReducer";
import meetingReducer from "./meetingReducer";
import orderReducer from './orderReducer';
import successReducer from './successReducer';
import orderDetailsReducer from './orderDetailsReducer';
import taskReducer from './taskReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	logement: logementReducer,
	mail: mailReducer,
	dispo: disponibiliteReducer,
	hote: userReducer,
	paniers: panierReducer,
	cart: cartReducer,
	owner: ownerReducer,
	traveler: travelerReducer,
	rent: rentReducer, 
	meeting: meetingReducer,
	order: orderReducer,
	success: successReducer,
	orderDetails: orderDetailsReducer,
	task: taskReducer	

});