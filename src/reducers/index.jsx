import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import logementReducer from  "./logementReducer";
import mailReducer from  "./mailReducer";
import disponibiliteReducer from "./disponibiliteReducer";
import userReducer from "./userReducer";
import panierReducer from "./panierReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	logement: logementReducer,
	mail: mailReducer,
	dispo: disponibiliteReducer,
	hote: userReducer,
	paniers: panierReducer,
	cart: cartReducer

});