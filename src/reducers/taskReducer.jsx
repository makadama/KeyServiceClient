import {GET_TASKS, GET_ONE_TASK, UPDATE_TASK, DELETE_TASK, ADD_TASK} from '../actions/types';


const isEmpty = require('is-empty');

const initialState={
	tasks: [],
  	task: {},
  	loading: false
  	
}

export default function(state = initialState, action){
	switch(action.type){
		case GET_TASKS:
			return{
				...state,
				tasks: action.payload,
				loading: false
			};
		case GET_ONE_TASK:
			return{
				...state,
				task: action.payload
			};
		case DELETE_TASK:
			return{
				...state,
				tasks: state.tasks.filter(task => task.id !== action.payload)
			};
		case ADD_TASK:
			return{
				...state,
				tasks: [action.payload, ...state.tasks]
			};
		case UPDATE_TASK:
				const indice= state.tasks.indexOf(task=> task.id === action.payload.id);
			return{
				...state,
				tasks: state.tasks.fill(action.payload, indice, indice)
		}		
		default:
			return state;
	}
}


