import * as types from './types';

export function authUser(user) {
  return {
    type: types.AUTH_USER,
    user
  }
}

export function removeUser() {
  localStorage.removeItem('codebakers-crud-system-token');
  return {
    type: types.LOG_OUT
  }
}