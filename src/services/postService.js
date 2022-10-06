import axios from 'axios';
import API_URL from '../constants/API_URL';

const addPostService = async (caption, image) => {
  return await axios.post(`${API_URL}posts/createPost`, {
    title: caption,
    description: 'desccc',
    assetURL: image,
  });
};
const uploadImage = async image => {
  return await axios.post(
    `${API_URL}general/uploadImage`,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
    {
      image,
    },
  );
};
const getPostService = async () => {
  return await axios.get(`${API_URL}posts/allPosts`);
};

export {addPostService, getPostService, uploadImage};
