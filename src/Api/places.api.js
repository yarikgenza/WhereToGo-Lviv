import config from '../Config/placesConfig';
const { apiKey, baseUrl } = config;

export const fetchNearby = (config) => {
  const { lat, lon, keyword } = config;

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}?key=${apiKey}&location=${lat},${lon}&rankby=distance&keyword=${keyword}`)
      .then(raw => raw.json())
        .then(json => resolve(json))
      .catch(e => reject(e));
  });
};
