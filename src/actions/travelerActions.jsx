import axios from 'axios';
import{

	GET_TRAVELERS ,
	UPDATE_TRAVELER, GET_ERRORS, GET_ONE_TRAVELER, DELETE_TRAVELER, GET_SUCCESS, SET_MAIL
	
} from './types';

export const getTravelers = ()  => dispatch=>{
	var tab=[];
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
	.get('/api/users', config)
	.then(res=>{
		for(let i=0; i<(res.data.length); i++){
			if(res.data[i].type==="voyageur"){
				tab.push(res.data[i])
			}
		}
		dispatch({
			type: GET_TRAVELERS,
			payload: tab
		})
		})
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));

}

export const getOneTraveler = (userId)  => dispatch=>{
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
	.get(`/api/user/${userId}`, config)
	.then(res=>{
		dispatch({
			type: GET_ONE_TRAVELER,
			payload: res.data
		})
		})
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));

}

export const registerTraveler = (travelerData) => dispatch => {
	const ownerEmail={email: ""};
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
    .post("/api/newUser", travelerData, config)
    .then(res =>  {
    				dispatch(answerSuccessfully())
    				/*ownerEmail.email=res.data.email
    			   dispatch(sendAnEmail(ownerEmail))*/
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const deleteTraveler = (userId, history) => dispatch =>{
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
 axios.delete(`/api/user/${userId}`, config)
 .then(res=>{
 	history.push('/voyageurs')
 	dispatch(getTravelers())
 }).catch(err=>{
 	dispatch({
 		type: GET_ERRORS,
 		payload: err
 	})
 })
}


export const answerSuccessfully = () => {
	return {
    type: GET_SUCCESS
  };
}

export const sendAnEmail = (mailAdress) => dispatch =>{
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
    axios.post('/api/userEmailing', mailAdress, config).then(res=>
    	dispatch({
      type: SET_MAIL,
      payload: res.data
    })).catch(err =>{
     dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
}