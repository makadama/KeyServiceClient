import {
	SET_MAIL
} from "../actions/types";

const isEmpty = require('is-empty');

const initialState={
	isSent: false,
	mailInfo: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case SET_MAIL:
			return{
				...state,
				isSent: !isEmpty(action.payload),
				mailInfo: action.payload
			};
		default:
			return state;
	}
}