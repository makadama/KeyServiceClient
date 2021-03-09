import {GET_MEETINGS, GET_ONE_MEETING, ADD_MEETING, UPDATE_MEETING, DELETE_MEETING} from '../actions/types';

const initialState={
	meetings: [],
	meeting: {}
}


export default (state = initialState, action )=> {
	switch (action.type){
		case GET_MEETINGS:
			return{
				...state,
				meetings: action.payload
			};
		case GET_ONE_MEETING:
			return{
				...state,
				meeting: action.payload
			};
		case ADD_MEETING:
			return{
				...state,
				meetings: [action.payload, ...state.meetings]
			};
		case UPDATE_MEETING:
			return state.meetings.map(oneMeeting => {
				if(oneMeeting.id === action.payload.id){
					return{
						...state,
						meeting: action.payload
					};
				}
				return {
          ...state,
          meeting: oneMeeting

        }
			});
		case DELETE_MEETING:
		return {
        ...state,
        meetings: state.meetings.filter(meeting => meeting.id !== action.payload.id)
      }
		default:
			return state;
	}
}