import config from '../Config/distanceConfig';
const { apiKey, baseUrl } = config;

export const _getDistanceUrl = (from, to) => `${baseUrl}/json?origins=${from}&destinations=${to}&mode=walking&key=${apiKey}`;


export const getDistance = (from, to) => new Promise((res, rej) => {
  fetch(_getDistanceUrl(from, to))
    .then(raw => raw.json())
      .then((json) => {
        res(json.rows[0].elements[0].duration.text);
      })
    .catch(e => rej(e));
});
