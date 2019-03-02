import * as types from './types';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export function onInputChange(e) {
  return {
    type: types.LOGIN_FORM_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function onFormSubmit(data, history) {
  return async function(dispatch) {
    dispatch ({
      type: types.LOGIN_FORM_LOADING
    })
    const res = await axios.post('https://codebakers-api.herokuapp.com/login', data);
    console.log(res.data)
    if(res.data !== 'User not Found') {
      const token = res.data;
      // set token to Local Storage
      localStorage.setItem('codebakers-crud-system-token', token);
      const user = jwt.decode(token);
      console.log(user);
      dispatch({
        type:types.LOGIN_FORM_SUCCESS,
        user
      })
      // jei viskas ok, redirect
      history.push('/');
    } else {
      dispatch({
        type: types.LOGIN_FORM_ERROR,
        errors: 'Vartotojas nerastas'
      })
    }

    try {


    } catch (e) {
      console.log(e);
      // dispatch({
      //   type: types.LOGIN_FORM_ERROR,
      //   errors: {server: 'Server error'}
      // })
    }
  }
}