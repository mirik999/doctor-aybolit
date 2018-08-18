import api from '../api';
import { SWITCH_LANG, USER_LOGIN, USER_LOGOUT, ADD_PHOTO, REMOVE_PHOTO } from '../types';


// switch Language
export const setlocale = (lang) => (dispatch) => {
	localStorage.devsLang = lang;
	dispatch(setLocaleDispatch(lang))
};

export const setLocaleDispatch = (lang) => ({
	type: SWITCH_LANG,
	lang
});


// login - logout user
export const enter = (data) => (dispatch) => {
  return api.user.enter(data).then(user => {
    localStorage.Login = user.token;
    dispatch(LoginDispatch(user))
  })
};

export const LoginDispatch = (user) => ({
  type: USER_LOGIN,
  user
});

export const logoutDispatch = () => ({
  type: USER_LOGOUT
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('Login');
  dispatch(logoutDispatch())
};