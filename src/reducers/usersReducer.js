import * as types from '../actions/types';

const initialState = {
  usersList: [],
  loading: false
}

export default(state=initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_LOADING:
      return {...state, loading: true}
    case types.GET_USERS:
      return {usersList: action.usersList, loading: false};
    default:
      return state;
  }
}