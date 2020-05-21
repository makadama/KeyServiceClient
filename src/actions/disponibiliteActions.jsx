import axios from 'axios';
import {GET_AVAILABILITIES, ADD_AVAILABILITY, AVAILABILITY_FETCHED, AVAILABILITY_UPDATED, AVAILABILITY_DELETED, GET_ERRORS } from './types';

export const getDisponibilite = logementId => (dispatch) => {
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
  .get(`/api/logement/disponibilites/${logementId}`, config)
  .then(res=> 
    dispatch({
      type:GET_AVAILABILITIES,
      payload: res.data
    })
    )
  .catch(err=>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
};

export const getOnedisponibilite = disponibiliteId => (dispatch) =>{
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
  .get(`/api/disponibilite/${disponibiliteId}`, config)
  .then(res=> 
    dispatch({
      type:AVAILABILITY_FETCHED,
      payload: res.data
    })
    )
  .catch(err=>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));

}

export const updateDisponibilite = (disponibiliteId, dispoData) => (dispatch)=>{
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
  .put(`/api/disponibilite/${disponibiliteId}`, dispoData, config)
  .then(res=> {
    dispatch({
      type:AVAILABILITY_UPDATED,
      payload: res.data
    })
    dispatch(getDisponibilite(res.data.fk_logement));
   } )
  .catch(err=>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}

export const deleteDisponibilite = (disponibiliteId, logementId) => (dispatch)=>{
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
  .delete(`/api/disponibilite/${disponibiliteId}`, config)
  .then(res=> {
    
    dispatch(getDisponibilite(logementId));
   })
  .catch(err=>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}


export const addDisponibilite = (dispoData)=> (dispatch)=>{
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
  .post('/api/disponibilites', dispoData, config)
  .then(res=> 
    dispatch({
      type:ADD_AVAILABILITY,
      payload: res.data
    })
    )
  .catch(err=>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}
