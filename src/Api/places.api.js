import config from '../Config/placesConfig';
const { apiKey, baseUrl } = config;

/**
 * Constants
 */
export const _getPhotoUrl = url => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${400}&photoreference=${url}&key=${apiKey}`;


/**
 * api calls
  */

export const fetchNearby = (params) => {
  const { lat, lon, keyword } = params;

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}nearbysearch/json?key=${apiKey}&location=${lat},${lon}&rankby=distance&keyword=${keyword}`)
      .then(raw => raw.json())
        .then(json => resolve(json))
      .catch(e => reject(e));
  });
};

export const fetchNextNearby = (params) => {
  const { pagetoken } = params;
  
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}nearbysearch/json?key=${apiKey}&pagetoken=${pagetoken}`)
      .then(raw => raw.json())
        .then(json => resolve(json))
      .catch(e => reject(e));
  });
};
