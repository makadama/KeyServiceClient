import axios from 'axios';
import { FETCH_PANIERS, ORDER_PANIERS_BY_PRICE } from './types';



export const fetchPaniers = ()=> dispatch =>{
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
  .get(`/api/paniers`, config)
  .then(res=> 
  	dispatch({
  		type: FETCH_PANIERS,
  		payload: res.data
  	})
   
    )
}


export const sortPaniers = (items, sort) => (dispatch) => {
	const paniers = items.slice();
	if(sort !==''){
		paniers.sort((a,b)=>(sort==='lowest')?(a.prix > b.prix?1:-1): (a.prix < b.prix?1:-1))
	}
	else{
		paniers.sort((a,b)=> (a.id < b.id?1:-1));
	}
			

	return dispatch({
		type: ORDER_PANIERS_BY_PRICE,
		payload:{
			sort: sort,
			items: paniers
		}
	})
}