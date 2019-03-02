import * as types from './types';
import axios from 'axios';

export function getUsers() {
  return async function (dispatch) {
    dispatch({
      type: types.GET_USERS_LOADING
    })
    const res = await axios.get('https://codebakers-api.herokuapp.com/users');
    const usersList = res.data;
    // console.log(usersList)
    dispatch ({
      type: types.GET_USERS,
      usersList
    })
  }

}