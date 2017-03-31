import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  statusBarInit: ['title', 'button']
})

export const StatusBarTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  title: null,
  button: null
})

/* ------------- Reducers ------------- */

export const init = (state, action) => {
  const { title, button } = action
  return state.merge({
    title: title,
    button: button
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STATUS_BAR_INIT]: init
})
