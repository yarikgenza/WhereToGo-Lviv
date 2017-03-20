import { createReducer, createActions } from 'reduxsauce'
import { locationService } from '../Services';
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  locationSet: ['lat', 'lon'],
  locationFormattedSet: 'location',
  locationError: ['message']
})

export const LocationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isLocationReady: false,
  lat: null,
  lon: null,
  formatted: null,
  error: null
})

/* ------------- Reducers ------------- */

export const set = (state, action) => {
  const { lat, lon } = action;
  return state.merge({
    isLocationReady: true,
    lat: lat,
    lon: lon
  })
}

export const setFormatted = (state, action) => {
  const { location } = action;
  return state.merge({
    formatted: location,
    isLocationReady: true
  })
}

export const locationError = (state, action) => {
  const { message } = action;
  return state.merge({
    error: message
  })
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOCATION_SET]: set,
  [Types.LOCATION_FORMATTED_SET]: setFormatted,
  [Types.LOCATION_ERROR]: locationError
})
