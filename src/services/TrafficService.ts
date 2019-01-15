import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 30000
});

export const getIncidents = async () =>
  axiosInstance.get('/incidents').then(response => response.data);
