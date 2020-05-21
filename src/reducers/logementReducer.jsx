import {

	GET_LOGEMENTS ,
	GET_ONE_LOGEMENT ,
	ADD_LOGEMENT ,
	DELETE_LOGEMENT ,
	UPDATE_LOGEMENT ,
	LOGEMENTS_LOADING
	

} from "../actions/types";

const isEmpty = require('is-empty');

const initialState={
	logements: [],
  	logement: {},
  	loading: false
  	
}

export default function(state = initialState, action){
	switch(action.type){
		case GET_LOGEMENTS:
			return{
				...state,
				logements: action.payload,
				loading: false
			};
		case GET_ONE_LOGEMENT:
			return{
				...state,
				logement: action.payload
			};
		case DELETE_LOGEMENT:
			return{
				...state,
				logements: state.logements.filter(logement => logement.id !== action.payload)
			};
		case ADD_LOGEMENT:
			return{
				...state,
				logements: [action.payload, ...state.logements]
			};
		case UPDATE_LOGEMENT:
				const indice= state.logements.indexOf(logement=> logement.id === action.payload.id);
			return{
				...state,
				logements: state.logements.fill(action.payload, indice, indice)
		}
		
		case LOGEMENTS_LOADING:
			return{
				...state,
				loading: true
					};
		
		default:
			return state;
	}
}

