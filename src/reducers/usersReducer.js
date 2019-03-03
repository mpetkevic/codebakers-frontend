import * as types from '../actions/types';

const initialState = {
  usersList: [],
  loading: false,
  error: null,
  user: {}
}

export default(state=initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_LOADING:
      return {...state, loading: true}
    case types.GET_USERS:
      return {usersList: action.usersList, loading: false};
    case types.GET_USER:
      console.log(state)
      return {...state, user: action.user };
    case types.UPDATE_USER_ERROR:
      console.log(action.error)
      return {...state, error: action.error};
    default:
      return state;
  }
}