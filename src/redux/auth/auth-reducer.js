import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './auth-actions';
import authOperations from './auth-operations';

const initialUserState = {name: null, email: null};

const setUser = (_, {payload}) => payload.user;

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: setUser,
  [authActions.loginSuccess]: setUser,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, {payload}) => payload,
});

const setToken = (_, {payload}) => payload.token;

const token = createReducer(null, {
  [authActions.registerSuccess]: setToken,
  [authActions.loginSuccess]: setToken,
  [authActions.logoutSuccess]: () => null
});

const setError = (_, {payload}) => payload;

const error = createReducer(null, {
  [authOperations.registerError]: setError,
  [authOperations.loginError]: setError,
  [authOperations.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isAuntheticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserrError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuntheticated,
  error,
});
