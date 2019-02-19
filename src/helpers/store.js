import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from '../reducers/reducer';

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
  });
  
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default store;