import axios from 'axios';
import{

	GET_OWNERS ,
	UPDATE_OWNER, GET_ERRORS, GET_ONE_OWNER, DELETE_OWNER, GET_SUCCESS, SET_MAIL
	
} from './types';

export const getOwners = ()  => dispatch=>{
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
			if(res.data[i].type==="hote"){
				tab.push(res.data[i])
			}
		}
		dispatch({
			type: GET_OWNERS,
			payload: tab
		})
		})
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));

}

export const getOneOwner = (userId)  => dispatch=>{
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
			type: GET_ONE_OWNER,
			payload: res.data
		})
		})
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));

}

export const registerOwner = (ownerData) => dispatch => {
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
    .post("/api/newUser", ownerData, config)
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

export const deleteOwner = (userId, history) => dispatch =>{
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
 	history.push('/proprietaires')
 	dispatch(getOwners())
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