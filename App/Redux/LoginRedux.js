
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['user'],
  loginFailure: ['error'],
  logout: null
})


export const LoginTypes = Types
export default Creators
/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  id: null,
  username: null,
  email: null,
  token: null,
  error: null,
  language: null,
  fetching: false
})

/* ------------- Reducers ------------- */
export const loginRequest = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const loginSuccess = (state, { user }) => {
  return state.merge({
    fetching: false,
    error: null,
    id: user.id,
    email: user.email
  });
}

// we've had a problem logging in
export const loginFailure = (state, { error }) => {
  state.merge({ fetching: false, error })
}

// we've logged out
export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,
})

/* ------------- Selectors ------------- */
// Is the current user logged in?
export const isLoggedIn = (loginState) => loginState.token !== null
