import axios from 'axios';

const INFO_BASE_URL = 'https://freegeoip.app/json/';

const INFOInstance = axios.create({
  baseURL: INFO_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default INFOInstance;
