import {  GET_OWNERS , GET_ONE_OWNER , ADD_OWNER ,
 DELETE_OWNER, UPDATE_OWNER  } from '../actions/types';

const initialState={
	owners: [],
  	owner: {} 	
}

export default (state = initialState, action )=> {
	switch (action.type){
		case GET_OWNERS:
			return{
				...state,
				owners: action.payload
			};
		case GET_ONE_OWNER:
			return{
				...state,
				owner: action.payload
			};
		case ADD_OWNER:
			return{
				...state,
				owners: [action.payload, ...state.owners]
			};
		case UPDATE_OWNER:
			return state.owners.map(oneOwner => {
				if(oneOwner.id === action.payload.id){
					return{
						...state,
						owner: action.payload
					};
				}
				return {
          ...state,
          owner: oneOwner

        }
			});
		case DELETE_OWNER:
		return {
        ...state,
        owners: state.owners.filter(owner => owner.id !== action.payload.id)
      }
		default:
			return state;
	}
}