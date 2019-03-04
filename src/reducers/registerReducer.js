import * as types from '../actions/types';

const initialState = {
  name: '',
  email: '',
  password: '',
  error: '',
  loading: false
};

export default(state=initialState, action) => {
  switch (action.type) {
    case types.REGISTER_FORM_INPUT_CHANGE:
      return {...state, [action.name]: action.value};
    case types.REGISTER_FORM_ERROR:
      return {...state, error: action.error, loading: false};
    case types.REGISTER_FORM_LOADING:
      return {...state, loading: true}
    case types.REGISTER_USER:
      return {...state, loading: false}
    default:
      return state;
  }
}