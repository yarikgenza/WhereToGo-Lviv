import { SET_CATEGORY, FETCH_SUCCESS, FETCH_FAILURE, FETCH_NEXT } from '../Reducers/places';
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
        nextToken: data.next_page_token,
        list: data.results,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_FAILURE,
        error,
      });
    });

export const fetchNextNearby = config => dispatch => placesApi.fetchNextNearby(config)
    .then((data) => {
      dispatch({
        type: FETCH_NEXT,
        nextToken: data.next_page_token,
        list: data.results,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_FAILURE,
        error,
      });
    });
