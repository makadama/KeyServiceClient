import axios from 'axios';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import{
	GET_ERRORS,
	SET_CURRENT_USER,
	USER_LOADING, 
  MAIL_SUCCESS
} from './types';

//register User

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/auth/signup", userData)
    .then(res => history.push("/loginAfterRegister"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};



//login USER

export const loginUser = userData => dispatch => {
  axios
    .post("/api/e/auth/signin", userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      localStorage.setItem('jwtToken', res.data.token)
		  const { token } = res.data;
      const decoded= jwt_decode(token);
      console.log(token);
     // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
);
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//user give his email for resetting his email adress
export const sendAnEmail = mailAdress => dispatch =>{ 
  axios.post('/api/auth/sendLinkByEmail', mailAdress)
  .then(res =>
    dispatch({
      type: MAIL_SUCCESS,
      payload: res.data
    })
  )
  .catch(err=>{
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
}

//user give a new password and the password confirmation
export const sendNewPassword = (newPasswords, history) => dispatch =>{
  axios.post('/api/auth/sendPasswords', newPasswords)
  .then(res => history.push("/loginAfterReset"))
  .catch(err=> 
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  )

}

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const tokenConfig = ()  =>{
  const token = localStorage.getItem('jwtToken');
  const config = {
    headers:{
      'Content-type' : 'application/json'
    }
  };
 if(token){
    config.headers['x-access-token'] = token;
}
  return config;
}