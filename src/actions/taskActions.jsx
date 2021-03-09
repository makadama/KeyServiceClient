import {GET_TASKS, GET_ONE_TASK, UPDATE_TASK, DELETE_TASK, ADD_TASK, GET_ERRORS, GET_SUCCESS} from './types';
import axios from 'axios';

export const addTask = (data) => dispatch =>{
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
	axios.post('/api/taches', data, config)
	.then(res=>{
		//history.push("/logements");
		dispatch({
			type: ADD_TASK,
			payload: res.data
		})
		dispatch(fetchTasks());
		dispatch(answerSuccessfully());
		
	}).catch(err=>{
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	})

}

export const fetchTasks = () => (dispatch) => {
	var taskObj={};
	var taskTab=[];
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
	.get('/api/taches/', config)
	.then(res=> {
			for(let i=0; i<(res.data.length); i++){
			var logementId = res.data[i].fk_logement;
			axios.get(`/api/logement/${logementId}`, config).then(
				resLogement=>  {
					taskObj={
						id: res.data[i].id,
						date_tache: res.data[i].date_tache,
						heure_tache: res.data[i].heure_tache,
						libelle: res.data[i].libelle,
						adresse: resLogement.data.adresse,
						code_postal: resLogement.data.code_postal,
						type: resLogement.data.type,
						complement: resLogement.data.complement,
						fk_ville: resLogement.data.fk_ville
					}

					taskTab.push(taskObj)
					dispatch({
						type: GET_TASKS,
						payload: taskTab
					})
				}).catch(err=>
					dispatch({
			        type: GET_ERRORS,
			        payload: err
			      }));
			}
	}
)
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));
};


export const getTaskDetails = (tacheId) =>(dispatch)=>{
	const taskObj={};
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
	.get(`/api/tache/${tacheId}`, config)
	.then(res=> {
		let logementId= res.data.fk_logement;
		axios.get(`/api/logement/${logementId}`, config)
		.then(resLogement => {
			dispatch({
				type: GET_ONE_TASK,
				payload: {
						id: res.data.id,
						date_tache: res.data.date_tache,
						heure_tache: res.data.heure_tache,
						libelle: res.data.libelle,
						adresse: resLogement.data.adresse,
						code_postal: resLogement.data.code_postal,
						type: resLogement.data.type,
						complement: resLogement.data.complement,
						fk_ville: resLogement.data.fk_ville
				}
			})
		}).catch(err=>
				dispatch({
		        type: GET_ERRORS,
		        payload: err
		      }));
		
		}
		)
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));
}


export const getOnlyTask = (tacheId) => (dispatch) =>{
	const taskObj={};
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
	.get(`/api/tache/${tacheId}`, config)
	.then(res=> {
			dispatch({
				type: GET_ONE_TASK,
				payload: res.data
			})
		}
		)
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));
}


export const updateTask = (tacheId, dataTask) => dispatch => {
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
	 axios.put(`/api/tache/${tacheId}`, dataTask, config)
	 .then( res=>{
	 	dispatch(getOnlyTask(tacheId))
	 	dispatch(fetchTasks())
	 	dispatch(answerSuccessfully());
	 }).catch(err=>{
	 	dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
	 })
}



export const deleteTask = (tacheId, history) => dispatch =>{
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
 axios.delete(`/api/tache/${tacheId}`, config)
 .then(res=>{
 	history.push('/taches')
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
