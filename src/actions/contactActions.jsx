import axios from 'axios';
import {
	GET_ERRORS, SET_MAIL
} from './types';

export const sendAnMessage = messageTosend => dispatch =>{ 
  axios.post('/api/sendAnEmail', messageTosend)
  .then(res =>{
  	console.log(res.data);
  	dispatch({
      type: SET_MAIL,
      payload: res.data
    })
  }
    
  )
  .catch(err=>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  )
}



