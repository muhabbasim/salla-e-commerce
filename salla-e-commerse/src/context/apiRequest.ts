import axios from 'axios';

const api = ( ) => {
  const token = localStorage.getItem('user_token')?.replace(/"/g, '');
  const apiCall = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept-Language': ``,
    },
  })
  return apiCall
}

export default api;
