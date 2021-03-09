import {GET_ERRORS, GET_ORDERS_DETAILS, GET_ONE_ORDER_DETAILS, UPDATE_ORDER_DETAILS, DELETE_ORDER_DETAILS, ADD_ORDER_DETAILS } from './types';
import axios from 'axios';
export const getOneOrderDetails = (commandeId) => (dispatch) => {
	const  token = localStorage.getItem('jwtToken');
	console.log(token);
	const config = {
    headers:{
      'Content-type' : 'application/json'
    }
  };
 if(token){
    config.headers['x-access-token'] = token;
}
axios
	.get(`/api/commandeDetails/${commandeId}`, config)
	.then(res=> {
		dispatch({
			type: GET_ORDERS_DETAILS,
			payload: res.data
		})
	}
		)
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));
};