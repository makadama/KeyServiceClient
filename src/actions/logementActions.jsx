import axios from 'axios';
import { GET_LOGEMENTS, GET_ONE_LOGEMENT ,ADD_LOGEMENT, DELETE_LOGEMENT,
UPDATE_LOGEMENT, LOGEMENTS_LOADING, GET_ERRORS} from './types.jsx';
import { tokenConfig } from './authActions';

export const getLogements = id => (dispatch) => {
	dispatch(setLogementsLoading());
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
	.get(`/api/logements/${id}`, config)
	.then(res=> 
		dispatch({
			type: GET_LOGEMENTS,
			payload: res.data
		})
		)
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));
};

export const getLogementById = logementId => dispatch=>{
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
	.get(`/api/logement/${logementId}`, config)
	.then(res=>{

		dispatch({
			type: GET_ONE_LOGEMENT,
			payload: res.data
		})
		
		})
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));


}

export const setLogementsLoading= ()=>{
	return{
		type: LOGEMENTS_LOADING
	};
};

export const addLogement = (data, history) => dispatch =>{
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
	axios.post('/api/logements', data, config)
	.then(res=>{
		history.push("/logements");
		dispatch({
			type: ADD_LOGEMENT,
			payload: res.data
		})
		
	}).catch(err=>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	})

}

export const updateLogement = (logementId, data, history) => dispatch=>{
	const  token = localStorage.getItem('jwtToken');
	const config = {
    headers:{
      'Content-type' : 'application/json'
    }
  };
if(token){
    config.headers['x-access-token'] = token;
 }
 axios.put(`/api/logement/${logementId}`, data, config)
 .then(res=>{
 	
 	dispatch({
 		type: UPDATE_LOGEMENT,
 		payload: res.data
 	})
 	//history.push('/logements');

 }).catch(err=>{
 	dispatch({
 		type: GET_ERRORS,
 		payload: err.response.data

 	})
 })

}


