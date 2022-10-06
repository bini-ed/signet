import axios from 'axios';
import API_URL from '../constants/API_URL';

const getCommentsService = async id => {
  return await axios.get(`${API_URL}comments/getComment?id=${id}`);
};

export {getCommentsService};
