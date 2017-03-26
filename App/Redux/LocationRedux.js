import { createReducer, createActions } from 'reduxsauce'
import { locationService } from '../Services';
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  locationSet: ['lat', 'lon'],
  locationFormattedSet: 'location',
})

export const LocationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  lat: null,
  lon: null,
  formatted: null,
})

/* ------------- Reducers ------------- */

export const set = (state, action) => {
  const { lat, lon } = action;
  return state.merge({
    lat: lat,
    lon: lon
  })
}

export const setFormatted = (state, action) => {
  const { location } = action;
  return state.merge({
    formatted: location,
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOCATION_SET]: set,
  [Types.LOCATION_FORMATTED_SET]: setFormatted
})
