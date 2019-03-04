import * as types from './types';
import axios from 'axios';

export function onInputChange(e) {
  return {
    type: types.REGISTER_FORM_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function onFormSubmit(user,history) {
  const {name, email, password} = user;
  if(name === '' && email === '' && password === '') {
    return {
      type: types.REGISTER_FORM_ERROR,
      error: 'Please fill all fields'
    }
  }
  return async function (dispatch) {
    dispatch ({
      type: types.REGISTER_FORM_LOADING
    })
    const res = await axios.post('https://codebakers-api.herokuapp.com/register', user)
    if(res.data.name !== 'error') {
      history.push('/login')
    } else {
      dispatch ({
        type: types.REGISTER_FORM_ERROR,
        error: 'Email already exists'
      })
    }
  }
}