import { OPEN_DRAWER, CLOSE_DRAWER, CHANGE_ROUTE } from '../Reducers/ui';

/**
  * Open drawer
 */

export const openDrawer = () => ({
  type: OPEN_DRAWER,
});

/**
 * CLose drawer
 */

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
});

/**
 * Change route (when navigating)
 */
export const changeRoute = route => ({
  type: CHANGE_ROUTE,
  route,
});
