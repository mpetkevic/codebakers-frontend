import * as types from '../actions/types';

const initialState = {
  email: '',
  password: '',
  errors: '',
  loading: false
};

export default(state=initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FORM_INPUT_CHANGE:
      return { ...state, [action.name]: action.value };
    case types.LOGIN_FORM_ERROR:
      return { ...state, errors: action.errors, loading: false };
    case types.LOGIN_FORM_SUCCESS:
      console.log("SUCESS")
      console.log(state)
      return { ...state, loading: false };
    case types.LOGIN_FORM_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}