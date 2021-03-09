import {  GET_ORDERS_DETAILS , GET_ONE_ORDER_DETAILS , ADD_ORDER_DETAILS ,
 DELETE_ORDER_DETAILS, UPDATE_ORDER_DETAILS  } from '../actions/types';

const initialState={
	ordersDetails: [],
  	orderDetails: {} 	
}

export default (state = initialState, action )=> {
	switch (action.type){
		case GET_ORDERS_DETAILS:
			return{
				...state,
				ordersDetails: action.payload
			};
		case GET_ONE_ORDER_DETAILS:
			return{
				...state,
				orderDetails: action.payload
			};
		case ADD_ORDER_DETAILS:
			return{
				...state,
				ordersDetails: [action.payload, ...state.ordersDetails]
			};
		case UPDATE_ORDER_DETAILS:
			return state.ordersDetails.map(oneOrder => {
				if(oneOrder.id === action.payload.id){
					return{
						...state,
						orderDetails: action.payload
					};
				}
				return {
          ...state,
          orderDetails: oneOrder

        }
			});
		case DELETE_ORDER_DETAILS:
		return {
        ...state,
        ordersDetails: state.ordersDetails.filter(order => order.id !== action.payload.id)
      }
		default:
			return state;
	}
}