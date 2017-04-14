/**
 * Constants
 */

export const OPEN_DRAWER = 'ui/OPEN_DRAWER';
export const CLOSE_DRAWER = 'ui/CLOSE_DRAWER';
export const CHANGE_ROUTE = 'ui/CHANGE_ROUTE';

/**
 * Reducer
 */

const initialState = {
  isDrawerOpen: false,
  route: 'placesScreen',
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

    case CHANGE_ROUTE: {
      return { ...state,
        route: action.route,
      };
    }

    default:
      return state;
  }
}
