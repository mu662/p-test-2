import axios from 'axios';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,

  SINGIN_USER,
  SINGIN_USER_SUCCESS,
  SINGIN_USER_FAIL,

  FETCH_USERS_LIST,
  USERS_LIST,
  FETCH_USERS_LIST_FAIL
} from "./constant";

// *action user USERS LIST
const fetchUsers = () => ({
  type: FETCH_USERS_LIST
})

const fetchUsersSucc = (data) => ({
  type: USERS_LIST,
  payload: data
})

const fetchUsersFail = (data) => ({
  type: FETCH_USERS_LIST_FAIL,
  payload: data
})


export const actionFetchUsers = (body) => {
  return dispatch => {
    dispatch(fetchUsers(body));
    axios.get('http://localhost:3001/api/list', body)
      .then(function (response) {
        // handle success
        dispatch(fetchUsersSucc(response.data));
      })
      .catch(function (error) {
        // handle error
        dispatch(fetchUsersFail(JSON.stringify(error.response.data)));
      })
  }
}

// end //

// *action user SIGN IN 
const signIn = (body) => ({
  type: SINGIN_USER,
  payload: body
})

const signInSucc = (data) => ({
  type: SINGIN_USER_SUCCESS,
  payload: data
})

const signInFail = (body) => ({
  type: SINGIN_USER_FAIL,
  payload: body
})


export const actionSignInUser = (body) => {
  return dispatch => {
    dispatch(signIn(body));
    axios.post('http://localhost:3001/api/login', body)
      .then(function (response) {
        // handle success
        console.log(response.data)
        localStorage.setItem("authUser", JSON.stringify(response.data.data))
        dispatch(signInSucc(response.data));
      })
      .catch(function (error) {
        // handle error
        dispatch(signInFail(JSON.stringify(error.response.data)));
      })
  }
}

// end //

// *action user register 
const register = (body) => ({
  type: REGISTER_USER,
  payload: body
})

const registerSucc = (data) => ({
  type: REGISTER_USER_SUCCESS,
  payload: data
})

const registerFail = (body) => ({
  type: REGISTER_USER_FAIL,
  payload: body
})


export const actionRegisterUser = (body) => {
  return dispatch => {
    dispatch(register(body));
    axios.post('http://localhost:3001/api/register', body)
      .then(function (response) {
        // handle success
        dispatch(registerSucc(response.data));
      })
      .catch(function (error) {
        // handle error
        dispatch(registerFail(JSON.stringify(error.response.data)));
      })
  }
}

// end //
