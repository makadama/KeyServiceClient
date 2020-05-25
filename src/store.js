import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = { cart: { items: cartItems } };

const store = createStore(
        rootReducer, 
        initialState, 
        compose(applyMiddleware(thunk), 
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_()|| compose));

export default store;
