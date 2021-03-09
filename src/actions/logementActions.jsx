import axios from 'axios';
import { GET_LOGEMENTS, GET_ONE_LOGEMENT ,ADD_LOGEMENT, DELETE_LOGEMENT,
UPDATE_LOGEMENT, LOGEMENTS_LOADING, GET_ERRORS, GET_SUCCESS	} from './types.jsx';
import { tokenConfig } from './authActions';


export const fetchLogements = (userID) => (dispatch) => {
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
	.get(`/api/logements/${userID}`, config)
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

export const getLogements = () => (dispatch) => {
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
	.get('/api/logements/', config)
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

export const getOnlyLogement = logementId => dispatch=>{
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
	}).catch(err=>{
		dispatch({
			type: GET_ERRORS,
			payload: err
		})
	})
}

export const getLogementById = logementId => dispatch=>{
	var logementObj={};
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
		const userId= res.data.fk_hote;
		axios.get(`/api/user/${userId}`, config).then(resUser=>{
			logementObj={
				id: res.data.id,
				adresse: res.data.adresse,
				code_postal: res.data.code_postal,
				complement: res.data.complement,
				ville: res.data.fk_ville,
				type: res.data.type,
				description: res.data.description,
				superficie: res.data.superficie,
				nb_lits: res.data.nb_lits,
				nb_sdb: res.data.nb_sdb,
				userFirstname: resUser.data.firstname,
				userLastname: resUser.data.lastname,
				userAdresse: resUser.data.adress,
				userEmail: resUser.data.email,
				userTelephone: resUser.data.telephone
			}
			dispatch({
			type: GET_ONE_LOGEMENT,
			payload: logementObj
		})	
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

export const addLogement = (data) => dispatch =>{
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
		//history.push("/logements");
		dispatch({
			type: ADD_LOGEMENT,
			payload: res.data
		})
		dispatch(answerSuccessfully());
		
	}).catch(err=>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	})

}

export const updateLogement = (logementId, data) => dispatch=>{
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
 	dispatch(getOnlyLogement(logementId))
 	dispatch(answerSuccessfully());
 	dispatch(getLogements());
 	//history.push('/logements');

 }).catch(err=>{
 	dispatch({
 		type: GET_ERRORS,
 		payload: err.response.data

 	})
 })

}

export const answerSuccessfully = () => {
	return {
    type: GET_SUCCESS
  };
}

export const deleteLogement = (logementId, history) => dispatch =>{
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
 axios.delete(`/api/logement/${logementId}`, config)
 .then(res=>{
 	history.push('/logements')
 }).catch(err=>{
 	dispatch({
 		type: GET_ERRORS,
 		payload: err.response.data
 	})
 })
}