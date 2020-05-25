import {
	FETCH_PANIERS, ORDER_PANIERS_BY_PRICE
} from "../actions/types";

const initialState =  {items:[], filteredItems:[], sort:'' };
export default function(state= initialState, action){
	switch(action.type){
		case FETCH_PANIERS:
			return { ...state, items: action.payload, filteredItems: action.payload};
		case ORDER_PANIERS_BY_PRICE:
			return{ ...state, filteredItems: action.payload.items,
				sort: action.payload.sort};

		default:
			return state;
	}

} 