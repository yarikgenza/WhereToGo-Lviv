/**
 * Constants
 */

export const SET_CATEGORY = 'places/SET_CATEGORY';
export const FETCH_SUCCESS = 'places/FETCH_SUCCESS';
export const FETCH_FAILURE = 'places/FETCH_FAILURE';
export const FETCH_NEXT = 'places/FETCH_NEXT';

/**
 * Reducer
 */

const initialState = {
  nextToken: null,
  list: [],
  category: null,
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
        nextToken: action.nextToken,
        list: action.list,
      };
    }

    case FETCH_NEXT: {
      return { ...state,
        nextToken: action.nextToken,
        list: state.list.concat(action.list),
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
