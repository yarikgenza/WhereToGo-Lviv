/**
 * Constants
 */

export const SET_LAT_LON = 'location/SET_LAT_LON';
export const SET_FORMATTED = 'location/SET_FORMATTED';

/**
 * Reducer
 */

const initialState = {
  latitude: '',
  longitude: '',
  formatted: '',
};

export default function location(state = initialState, action) {
  switch (action.type) {

    case SET_LAT_LON: {
      return { ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      };
    }

    case SET_FORMATTED: {
      return { ...state,
        formatted: action.formatted,
      };
    }

    default:
      return state;
  }
}
