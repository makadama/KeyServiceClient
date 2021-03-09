import {  GET_TRAVELERS , GET_ONE_TRAVELER , ADD_TRAVELER ,
 DELETE_TRAVELER, UPDATE_TRAVELER  } from '../actions/types';

const initialState={
	travelers: [],
  	traveler: {} 	
}

export default (state = initialState, action )=> {
	switch (action.type){
		case GET_TRAVELERS:
			return{
				...state,
				travelers: action.payload
			};
		case GET_ONE_TRAVELER:
			return{
				...state,
				traveler: action.payload
			};
		case ADD_TRAVELER:
			return{
				...state,
				travelers: [action.payload, ...state.travelers]
			};
		case UPDATE_TRAVELER:
			return state.travelers.map(oneTraveler => {
				if(oneTraveler.id === action.payload.id){
					return{
						...state,
						traveler: action.payload
					};
				}
				return {
          ...state,
          traveler: oneTraveler

        }
			});
		case DELETE_TRAVELER:
		return {
        ...state,
        travelers: state.travelers.filter(traveler => traveler.id !== action.payload.id)
      }
		default:
			return state;
	}
}