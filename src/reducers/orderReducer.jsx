import {  GET_ORDERS , GET_ONE_ORDER , ADD_ORDER ,
 DELETE_ORDER, UPDATE_ORDER  } from '../actions/types';

const initialState={
	orders: [],
  	order: {} 	
}

export default (state = initialState, action )=> {
	switch (action.type){
		case GET_ORDERS:
			return{
				...state,
				orders: action.payload
			};
		case GET_ONE_ORDER:
			return{
				...state,
				order: action.payload
			};
		case ADD_ORDER:
			return{
				...state,
				orders: [action.payload, ...state.orders]
			};
		case UPDATE_ORDER:
			return state.orders.map(oneOrder => {
				if(oneOrder.id === action.payload.id){
					return{
						...state,
						order: action.payload
					};
				}
				return {
          ...state,
          order: oneOrder

        }
			});
		case DELETE_ORDER:
		return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload.id)
      }
		default:
			return state;
	}
}