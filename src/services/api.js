import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const registerFarmer = (farmerData) => API.post('/farmer/register', farmerData);
export const addProduct = (productData) => API.post('/product/add', productData);
export const getProducts = () => API.get('/product/all');
