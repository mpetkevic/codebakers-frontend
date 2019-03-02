import * as types from '../actions/types';

const initialState = {
  info: '',
  errors: {},
  loading: false,
  name: '',
  email: '',
  isAuth: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    // case types.REGISTER_FORM_SUCCESS:{
    //   const {firstname, lastname, email} = action.user;
    //   return {...initialState, firstname, lastname, email, isAuth: true}
    // }
    case types.LOGIN_FORM_SUCCESS:{
      const {name, email} = action.user;
      return {state, name, email, isAuth: true}
    }
    case types.AUTH_USER:{
      const {name, email} = action.user;
      return {state, name, email, isAuth: true}
    }
    case types.LOG_OUT:
      return {state, isAuth: false}

    default: return state
  }
}