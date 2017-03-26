import { createReducer, createActions } from 'reduxsauce'
import { locationService } from '../Services';
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  locationSet: ['lat', 'lon']
})

export const LocationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  lat: null,
  lon: null
})

/* ------------- Reducers ------------- */

export const set = (state, action) => {
  const { lat, lon } = action;
  return state.merge({
    lat: lat,
    lon: lon
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOCATION_SET]: set
})
