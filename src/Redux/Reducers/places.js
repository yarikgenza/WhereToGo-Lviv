/**
 * Constants
 */

export const SET_CATEGORY = 'places/SET_CATEGORY';

/**
 * Reducer
 */

const initialState = {
  category: [],
};

export default function places(state = initialState, action) {
  switch (action.type) {

    case SET_CATEGORY: {
      return {
        category: action.category,
      };
    }

    default:
      return state;

  }
}
