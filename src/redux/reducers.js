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

const inState = {
  registerUser: false,
  registerUserSucc: null,
  registerUserFail: null,

  signInUser: false,
  signInUserSucc: null,
  signInUserFail: null,

  fetchUser: false,
  usersList: null,
  fetchUserFail: null
}

const commanReducer = (state = inState, action) => {
  switch (action.type) {
    // sign in...
    case FETCH_USERS_LIST:
      {
        return {
          ...state,
          fetchUser: true,
          usersList: null,
          fetchUserFail: null
        }
      }
    case USERS_LIST:
      {
        return {
          ...state,
          fetchUser: false,
          usersList: action.payload,
          fetchUserFail: null
        }
      }
    case FETCH_USERS_LIST_FAIL:
      {
        return {
          ...state,
          fetchUser: false,
          usersList: null,
          fetchUserFail: action.payload
        }
      }
    //

    // sign in...
    case SINGIN_USER:
      {
        return {
          ...state,
          signInUser: true,
          signInUserSucc: null,
          signInUserFail: null
        }
      }
    case SINGIN_USER_SUCCESS:
      {
        return {
          ...state,
          signInUser: false,
          signInUserSucc: action.payload,
          signInUserFail: null
        }
      }
    case SINGIN_USER_FAIL:
      {
        return {
          ...state,
          signInUser: false,
          signInUserSucc: null,
          signInUserFail: action.payload
        }
      }
    //
    // register...
    case REGISTER_USER:
      {
        return {
          ...state,
          registerUser: true,
          registerUserSucc: null,
          registerUserFail: null
        }
      }
    case REGISTER_USER_SUCCESS:
      {
        return {
          ...state,
          registerUser: false,
          registerUserSucc: action.payload,
          registerUserFail: null
        }
      }
    case REGISTER_USER_FAIL:
      {
        return {
          ...state,
          registerUser: false,
          registerUserSucc: null,
          registerUserFail: action.payload
        }
      }
    //
    default:
      return state
  }
}

export default commanReducer;

