/**
 * Constants
 */

export const SET_CATEGORY = 'places/SET_CATEGORY';
export const FETCH_SUCCESS = 'places/FETCH_SUCCESS';
export const FETCH_FAILURE = 'places/FETCH_FAILURE';

/**
 * Reducer
 */

const initialState = {
  data: null,
  category: [],
  error: null,
};

export default function places(state = initialState, action) {
  switch (action.type) {

    case SET_CATEGORY: {
      return { ...state,
        category: action.category,
      };
    }

    case FETCH_SUCCESS: {
      return { ...state,
        data: action.data,
      };
    }

    case FETCH_FAILURE: {
      return { ...state,
        error: action.error,
      };
    }

    default:
      return state;
  }
}
