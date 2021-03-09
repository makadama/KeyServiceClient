import {GET_AVAILABILITIES, ADD_AVAILABILITY, AVAILABILITY_FETCHED, AVAILABILITY_UPDATED, AVAILABILITY_DELETED, GET_ERRORS } from './types';



export const getDisponibilite = logementId => async(dispatch, getState, api) => {
  try{
    const res= await api.get(`/api/logement/disponibilites/${logementId}`);
    dispatch({
      type:GET_AVAILABILITIES,
      payload: res.data
    })
  }catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err
      })
  }
 
};

export const getOnedisponibilite = disponibiliteId => async (dispatch, getState, api) =>{
  try{
    const res = await api.get(`/api/disponibilite/${disponibiliteId}`);
    dispatch({
       type:AVAILABILITY_FETCHED,
        payload: res.data
    })
  }catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
}

export const updateDisponibilite = (disponibiliteId, dispoData) => async(dispatch, getState, api)=>{
 try{
  
 const res= await api.put(`/api/disponibilite/${disponibiliteId}`, dispoData)

    dispatch({
      type:AVAILABILITY_UPDATED,
      payload: res.data
    })
    dispatch(getDisponibilite(res.data.fk_logement));
  }catch(err){
     dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
    
   
}

export const deleteDisponibilite = (disponibiliteId, logementId) => async (dispatch, getState, api)=>{
 try{
    const res = await api.delete(`/api/disponibilite/${disponibiliteId}`)
    dispatch(getDisponibilite(logementId));
 }
 catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
 }
}


export const addDisponibilite = (dispoData)=> async (dispatch, getState, api)=>{
  try{
    const res= await api.post('/api/disponibilites', dispoData)
    dispatch({
      type:ADD_AVAILABILITY,
      payload: res.data
    })
  }catch(err){
     dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
}








