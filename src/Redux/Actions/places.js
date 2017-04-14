import { SET_CATEGORY, FETCH_SUCCESS, FETCH_FAILURE } from '../Reducers/places';
import * as placesApi from '../../Api/places.api';
/**
  * Set category
 */

export const setCategory = category => ({
  type: SET_CATEGORY,
  category,
});


/**
 * fetch places
 */

export const fetchNearby = config => dispatch => placesApi.fetchNearby(config)
    .then((data) => {
      dispatch({
        type: FETCH_SUCCESS,
        data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_FAILURE,
        error,
      });
    });
