import * as types from './types';
import jwt from 'jsonwebtoken';
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

export function getUser(email) {
  return async function (dispatch) {
    const {data} = await axios.get(`https://codebakers-api.herokuapp.com/user/${email}`)
    const user = jwt.decode(data)
    dispatch ({
      type: types.GET_USER,
      user
    })
  }
}

export function deleteUser(email) {
  return async function (dispatch) {
    const userDelete = await axios.delete(`https://codebakers-api.herokuapp.com/delete/${email}`)
    const res = await axios.get('https://codebakers-api.herokuapp.com/users');
    const usersList = res.data;
    // console.log(usersList)
    dispatch ({
      type: types.GET_USERS,
      usersList
    })
  }
}

export function updateUser(user) {
  // localStorage.removeItem('codebakers-crud-system-token');

  return async function (dispatch) {
    const updatedUser = await axios.put(`https://codebakers-api.herokuapp.com/update/${user.authUserEmail}`, {
      name: user.name,
      password: user.password,
      email: user.email
    });
    if(updatedUser.data.name !== 'error') {
      console.log('Updated')
    } else {
      dispatch({
        type: types.UPDATE_USER_ERROR,
        error: 'Toks email jau yra, Iveskite kita'
      })
    }

  }

}