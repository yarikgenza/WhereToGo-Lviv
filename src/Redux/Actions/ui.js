import { OPEN_DRAWER, CLOSE_DRAWER } from '../Reducers/ui';

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
