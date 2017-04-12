import { SET_CATEGORY } from '../Reducers/places';

/**
  * Set category
 */

export const setCategory = category => ({
  type: SET_CATEGORY,
  category,
});
