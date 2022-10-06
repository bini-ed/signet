import axios from 'axios';
import APP_URL from '../constants/API_URL';

export const getAllUserService = () => {
  return axios.get(`${APP_URL}tagUsers/getTagUsers`);
};
export const getSpecificUserById = id => {
  return axios.get(`${APP_URL}tagUsers/getTagUserDetail?id=${id}`);
};
export const editCurrentUser = info => {
  return axios.put(`${APP_URL}tagUsers/editTagUserProfile`, info);
};
