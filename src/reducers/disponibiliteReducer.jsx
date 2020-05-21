import {GET_AVAILABILITIES, ADD_AVAILABILITY, AVAILABILITY_FETCHED, AVAILABILITY_UPDATED, AVAILABILITY_DELETED } from '../actions/types';


const initialState = {
  dispos: [],
  dispo: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AVAILABILITIES:
      return {
        ...state,
        dispos: action.payload,
        loading: false
      }  
    case AVAILABILITY_DELETED:
      return {
        ...state,
        dispos: state.dispos.filter(dispo => dispo.id !== action.payload.id)
      }
    case ADD_AVAILABILITY:
      return {
          ...state,
         dispos: [action.payload, ...state.dispos]
      };
    case AVAILABILITY_UPDATED:
     return state.dispos.map(oneDispo=> {
        if (oneDispo.id === action.payload.id){
          return {
          ...state,
          dispo: action.payload
        }
      } 
        return {
          ...state,
          dispo: oneDispo

        }
        
      });

     case  AVAILABILITY_FETCHED:
      const index = state.dispos.findIndex(oneDispo => oneDispo.id === action.payload.id);
      if (index > -1) {
        return state.dispos.map(oneDispo => {
          if (oneDispo.id === action.payload.id){
            return {
              ...state, 
              dispo: action.payload
            }

          } 
          return {
            ...state,
            dispo: oneDispo
          }
      }) }else {
        return {
          ...state,
         dispos: [action.payload, ...state.dispos]
      };
      }
    
    default:
      return state;
  }
}