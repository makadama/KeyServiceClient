import { GET_RENTS, GET_ONE_RENT, ADD_RENT, DELETE_RENT, UPDATE_RENT} from  '../actions/types';

const initialState ={
	rents:[],
	rent:{}
}

export default (state = initialState, action )=> {
	switch (action.type){
		case GET_RENTS:
			return{
				...state,
				rents: action.payload
			};
		case GET_ONE_RENT:
			return{
				...state,
				rent: action.payload
			};
		case ADD_RENT:
			return{
				...state,
				rents: [action.payload, ...state.rents]
			};
		case UPDATE_RENT:
			return state.rents.map(oneRent => {
				if(oneRent.id === action.payload.id){
					return{
						...state,
						rent: action.payload
					};
				}
				return {
          ...state,
          rent: oneRent

        }
			});
		case DELETE_RENT:
		return {
        ...state,
        rents: state.rents.filter(rent => rent.id !== action.payload.id)
      }
		default:
			return state;
	}
}