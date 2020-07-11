import axios from 'axios';

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

// ? interceptors
function setDefaultParams(request) {
  // eslint-disable-next-line no-param-reassign
  request.params.appid = '867c0eabe3592cf0b1ffd474ebaa667c';
  // eslint-disable-next-line no-param-reassign
  request.params.units = 'metric';
  return request;
}
weatherInstance.interceptors.request.use(setDefaultParams);

export default weatherInstance;
