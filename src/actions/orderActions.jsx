import {GET_ORDERS, GET_ONE_ORDER, ADD_ORDER, UPDATE_ORDER, DELETE_ORDER, GET_ERRORS} from './types';
import axios from 'axios';

export const getOrders = () => (dispatch) => {
	var orderTab=[];
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
	.get('/api/commandes/', config)
	.then(res=> {
		for(let i=0; i<(res.data.length); i++){
			if(res.data[i].isPaid==1){
				orderTab.push(res.data[i])
			}
		}
		dispatch({
			type: GET_ORDERS,
			payload: orderTab
		})
	}
		)
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));
};


export const getOneOrder = (commandeId) => (dispatch) => {
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
	.get(`/api/commande/${commandeId}`, config)
	.then(res=> {
		dispatch({
			type: GET_ONE_ORDER,
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

export const deleteOrder = (commandeId, history) => dispatch =>{
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
 const commandeDetailId = commandeId;
 axios.delete(`/api/commandeDetails/${commandeId}`, config)
 .then(res=>{
 		 axios.delete(`/api/commande/${commandeId}`, config)
 			.then(res=>{
 				history.push('/commandes')
 				dispatch(getOrders())
 			}).catch(err=>{
	 	dispatch({
	 		type: GET_ERRORS,
	 		payload: err
	 	})
 })
 	
 }).catch(err=>{
 	dispatch({
 		type: GET_ERRORS,
 		payload: err
 	})
 })
}
