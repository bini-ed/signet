import axios from 'axios';
import API_URL from '../constants/API_URL';

export default transferService = value => {
  return axios.post(`${API_URL}transfer/transferOwnership`, value);
};
