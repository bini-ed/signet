import axios from 'axios';
import API_URL from '../constants/API_URL';

const addLikeService = async data => {
  return await axios.post(`${API_URL}likes/addLikes`, {postId: data});
};

const getLikeService = async id => {
  return await axios.get(`${API_URL}likes/getlikes?id=${id}`);
};

export {addLikeService, getLikeService};
