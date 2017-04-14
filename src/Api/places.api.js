import { apiKey, baseUrl } from '../Config/places.config';


/* export const fetchNearby = (config) => {
  const { lat, lon, keyword } = config;

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}?key=${apiKey}&location=${lat},${lon},rankby=distance,keyword=${keyword}`)
      .then(raw => raw.json())
        .then(json => resolve(json))
      .catch(e => reject(e));
  })
}*/

export const fetch = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Урраа!');
  }, 3000);
});
