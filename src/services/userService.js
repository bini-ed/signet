import axios from 'axios';
import APP_URL from '../constants/API_URL';

export const getCurrentUser = () => {
  return axios.get(`${APP_URL}`);
};
