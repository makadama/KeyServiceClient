import axios from 'axios';
import { GET_RENTS, GET_ONE_RENT, UPDATE_RENT, DELETE_RENT, ADD_RENT, GET_ERRORS, GET_SUCCESS} from './types';

export const getRents = () => (dispatch) => {
	var rentTab=[];
	var rentObj ={};
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
	.get('/api/annonces', config)
	.then(res=> {
		for(let i=0; i<(res.data.length); i++){
			var logementId = res.data[i].fk_logement;
			axios.get(`/api/logement/${logementId}`, config).then(
				resLogement=>  {
						rentObj={
							id: res.data[i].id,
							date_debut: res.data[i].date_debut,
							date_fin: res.data[i].date_fin,
							adresse: resLogement.data.adresse,
							code_postal: resLogement.data.code_postal
						}
						rentTab.push(rentObj)
					dispatch({
						type: GET_RENTS,
						payload: rentTab
					})
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



export const getOnlyRents = () => (dispatch) => {
	
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
	.get('/api/annonces', config)
	.then(res=> {
			dispatch({
				type: GET_RENTS,
				payload: res.data
			})
		})			
	.catch(err=>
		dispatch({
        type: GET_ERRORS,
        payload: err
      }));
};





export const getRentsByLogement = (logementId) => (dispatch) => {
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
	.get(`/api/annoncess/${logementId}`, config)
	.then(res=> {
		dispatch({
					type: GET_RENTS,
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


export const getRentByRentId = (annonceId) => (dispatch) => {
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
	.get(`/api/annonce/${annonceId}`, config)
	.then(res=> {
		dispatch({
					type: GET_ONE_RENT,
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

export const getRentsByVoyageur = (voyageurId) => (dispatch) => {
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
	.get(`/api/annonces/${voyageurId}`, config)
	.then(res=> {
		dispatch({
					type: GET_RENTS,
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


export const addRent = (renData)=> (dispatch)=>{
  const  token = localStorage.getItem('jwtToken');
  console.log(token);
  const config = {
    headers:{
      'Content-type' : 'application/json'
    }
  };
 if(token){
    config.headers['x-access-token'] = token}
axios
  .post('/api/annonces', renData, config)
  .then(res=> 
    dispatch(answerSuccessfully())
    )
  .catch(err=>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}


export const answerSuccessfully = () => {
	return {
    type: GET_SUCCESS
  };
}


export const getRentDetails = (annonceId) =>(dispatch)=>{
	const rentObj={};
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
	.get(`/api/annonce/${annonceId}`, config)
	.then(res=> {
		let logementId= res.data.fk_logement;

		let userId = res.data.fk_voyageur;
		console.log(userId)
		axios.get(`/api/logement/${logementId}`, config)
		.then(resLogement => {
			axios.get(`/api/user/${userId}`, config)
			.then(resUser=>{
				
				dispatch({
					type: GET_ONE_RENT,
					payload: {
					id: res.data.id,
					date_debut: res.data.date_debut,
					date_fin: res.data.date_fin,
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


export const updateRent = (annonceId, dataRent) => dispatch => {
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
	 axios.put(`/api/annonce/${annonceId}`, dataRent, config)
	 .then( res=>{
	 	dispatch(getRentByRentId(annonceId))
	 	dispatch(getRents())
	 	dispatch(answerSuccessfully());
	 }).catch(err=>{
	 	dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
	 })
}