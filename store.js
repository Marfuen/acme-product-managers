import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import axios from 'axios';

const initialState = {
  users: [],
  products: [],
  managerCount: 0,
}

const GOT_USERS = 'GOT_USERS';
const GOT_PRODUCTS = 'GOT_PRODUCTS';

const gotUsers = (users) => {
  return {
    type: GOT_USERS,
    users,
  }
}

const gotProducts = (products) => {
  return {
    type: GOT_PRODUCTS,
    products,
  }
}

export const fetchUsers = () => {
  return dispatch => {
    return axios.get('/api/users')
                .then(response => response.data)
                .then(users => dispatch(gotUsers(users)))
  }
}

export const fetchProducts = () => {
  return dispatch => {
    return axios.get('/api/products')
                .then(response => response.data)
                .then(products => dispatch(gotProducts(products)))
  }
}

export const updateManagerId = (id, managerId) => {
  return dispatch => {
    console.log(id);
    console.log(managerId)
    return axios.put(`/api/products/${id}`, {managerId: managerId*1})
                .then(() => dispatch(fetchProducts()))
                .catch(e => console.log(e))
  }
}


const reducer = (state = initialState, action) => {
  switch(action.type){
    case GOT_USERS:
      return {...state, users: [...action.users]}
    case GOT_PRODUCTS:
      return {...state, products: [...action.products]}
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
