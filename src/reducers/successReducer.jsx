import { GET_SUCCESS } from '../actions/types';


const initialState=false;


export default function(state= initialState, action){
	switch(action.type){
		case GET_SUCCESS:
			return true;
		default:
			return state;
	}
}