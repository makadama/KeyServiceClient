import {GET_MEETINGS, GET_ONE_MEETING, ADD_MEETING, UPDATE_MEETING, DELETE_MEETING, GET_ERRORS} from './types';
import axios from 'axios';
export const getMeetings = () => (dispatch) => {
	var meetingTab=[];
	var meetingObj ={};
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
	.get('/api/rendezVous', config)
	.then(res=> {
		for(let i=0; i<(res.data.length); i++){
			var logementId = res.data[i].fk_logement;
			var userId = res.data[i].fk_voyageur;
			axios.get(`/api/logement/${logementId}`, config).then(
				resLogement=>  {
					axios.get(`/api/user/${userId}`, config).then(
							resUser=>{
								meetingObj={
							id: res.data[i].id,
							type_rdv: res.data[i].type_rdv,
							date_rdv: res.data[i].date_rdv,
							heure_rdv: res.data[i].heure_rdv,
							voyageur: resUser.data.email,
							adresse: resLogement.data.adresse,
							code_postal: resLogement.data.code_postal
						}
						meetingTab.push(meetingObj)
					dispatch({
						type: GET_MEETINGS,
						payload: meetingTab
					})
							}
						)
						
				}
				)			
		}}
		)
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));
};



export const getMeetingDetails = rendezVousId => dispatch =>{
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
	.get(`/api/rendezVous/${rendezVousId}`, config)
	.then(res=> {
		let logementId= res.data.fk_logement;

		let userId = res.data.fk_voyageur;
		axios.get(`/api/logement/${logementId}`, config)
		.then(resLogement => {
			axios.get(`/api/user/${userId}`, config)
			.then(resUser=>{
				
				dispatch({
					type: GET_ONE_MEETING,
					payload: {
					id: res.data.id,
					type_rdv: res.data.type_rdv,
					date_rdv: res.data.date_rdv,
					heure_rdv: res.data.heure_rdv,
					adresse: resLogement.data.adresse,
					code_postal: resLogement.data.code_postal,
					ville: resLogement.data.fk_ville,
					firstname: resUser.data.firstname,
					lastname: resUser.data.lastname,
					telephone: resUser.data.telephone,
					email: resUser.data.email
				}
				})	

			}).catch(err=>
				dispatch({
		        type: GET_ERRORS,
		        payload: err
		      }));
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


export const deleteMeeting = (rendezVousId, history) => dispatch =>{
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
 axios.delete(`/api/rendezVous/${rendezVousId}`, config)
 .then(res=>{
 	history.push('/rendez-vous')
 	dispatch(getMeetings())
 }).catch(err=>{
 	dispatch({
 		type: GET_ERRORS,
 		payload: err
 	})
 })
}
