/**
 * Constants
 */

export const OPEN_DRAWER = 'ui/OPEN_DRAWER';
export const CLOSE_DRAWER = 'ui/CLOSE_DRAWER';

/**
 * Reducer
 */

const initialState = {
  isDrawerOpen: false,
};

export default function ui(state = initialState, action) {
  switch (action.type) {

    case OPEN_DRAWER: {
      return { ...state,
        isDrawerOpen: true,
      };
    }

    case CLOSE_DRAWER: {
      return { ...state,
        isDrawerOpen: false,
      };
    }

    default:
      return state;
  }
}
