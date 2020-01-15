import Axios from 'axios';

export const axios = Axios.create({
  baseURL: `http://api.tvmaze.com/shows/6771`,
  headers: {
    'content-type': 'application/json',
  },
});

export default axios;
