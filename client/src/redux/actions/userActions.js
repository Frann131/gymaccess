import instance from "../axioscfg.js";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const POST_USER = "POST_USER"; 

export const getAllUsers = () => {
  return async function (dispatch) {
    const response = await instance.get(`user`);
    const data = response.data;
    dispatch({
      type: GET_ALL_USERS,
      payload: data,
    });
  };
};

export const getUserById = (id) => {
  return async function (dispatch) {
    const response = await instance.get(`user/${id}`);
    const data = response.data;
    dispatch({
      type: GET_USER_BY_ID,
      payload: data,
    });
  };
};

export const postUser = (userData) => {
    return async function (dispatch) {
      const response = await instance.post("user", userData);
      dispatch({
        type: POST_USER,
        payload: response.data,
      });
      return response;
    };
  };