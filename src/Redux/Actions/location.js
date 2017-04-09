import { SET_LAT_LON, SET_FORMATTED } from '../Reducers/location';

/**
 * Set location
 */

export const setLocation = (latitude, longitude) => {
  return {
    type: SET_LAT_LON,
    latitude,
    longitude
  }
}

export const setFormatted = (formatted) => {
  return {
    type: SET_FORMATTED,
    formatted
  }
}
