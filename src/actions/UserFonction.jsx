
import axios from 'axios';

export const register = newUser => {
	return axios
	.post("api/auth/signup",{
	email: newUser.email,
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    type: newUser.type,
    adress: newUser.adress,
    telephone: newUser.telephone,
    password: newUser.password,
    password2: newUser.password2
	})
	.then(response =>{
		console.log("registered!")
	})
}


export const login = user =>{
	
	return axios
	.post("api/auth/signin", {
		email: user.email,
		password: user.password
	})
	.then(response =>{
		localStorage.setItem('usertoken', response.data.token)
		console.log(response.data);
		return response.data;
		
	})
	.catch(err =>{
		console.log(err)
	})
}