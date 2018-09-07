import * as ActionTypes from '../constants/constants'
const initialState = {
  errorMessage: null,
  successMessage: null
}
export function loginReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage
      })
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        successMessage: action.successMessage
      })
    default:
      return state
  }
}
